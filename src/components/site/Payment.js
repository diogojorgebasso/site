import React from 'react'
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import {useState} from "react";

export default function Payment() {
    const [clientSecret, setClientSecret] = useState(true);
    
  const stripe = useStripe();
  const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);

  const handleSubmit = async () => {
    setProcessing(true);
    
    await stripe
      .confirmCardPayment(clientSecret, {
        //the response is "null" from stripe
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        //paymentIntent = payment confirmation from stripe

        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        setSucceeded(true);
        setError(null);
        setProcessing(false);
        dispatch({
          type: "EMPTY_BASKET",
        });
        history.replace("/orders");
      });
  };
  useEffect(() => {
    //generate the special stripe secret from the backend
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payment/create?total=${getBasketTotal(basket) * 100}`, //depend in the currency, study yours
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);

  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement onChange={handleChange} />
        <div className="paymentPriceContainer">
          <CurrencyFormat
            renderText={(value) => <h3>Order Total: {value}</h3>}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
          />
          <button disabled={processing || disabled || succeeded}>
            <span>{processing ? "Processando" : "Garanta já"}</span>
          </button>
        </div>
        {error && <div>{error}</div>}
      </form>
    </div>
  );
}

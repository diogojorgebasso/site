import React from "react";
import { useState } from "react";
import { newPhrase } from "../../services/api";

export default function NewPhrase() {
  const [NewChoicePhrase, setNewChoicePhrase] = useState([]);
  const [Personagem, setPersonagem] = useState();

  const handlePhrase = (e) => {
    e.preventDefault();
    newPhrase
      .post(
        "/",
        { text: Personagem },
        {
          headers: {
            "Access-Control-Allow-Origin": "https://diogobasso-site.web.app",
          },
        }
      )
      .then((res) => {
        console.log(res);
        setNewChoicePhrase(res.data);
      })
      .catch((err) => console.error(err));
  };
  // eslint-disable-role-has-required-aria-props
  return (
    <div>
      <label htmlFor="fraseExtra">Quem você admira?</label>
      <input
        id="fraseExtra"
        maxLength="2048"
        name="q"
        type="text"
        aria-autocomplete="both"
        aria-haspopup="false"
        autoCapitalize="off"
        autoComplete="off"
        autoCorrect="off"
        autoFocus
        spellCheck="false"
        title="Pesquisar"
        onChange={(event) => setPersonagem(event.target.value)}
        aria-label="Pesquisar"
      />

      <ul>
        {NewChoicePhrase?.map((dum, i) => (
          <li key={i}>{dum.text}</li>
        ))}
      </ul>
      <button onClick={handlePhrase}>Enviar</button>
    </div>
  );
}

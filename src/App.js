import "./App.css";
import { frase, mercadoFin, nameAge } from "./services/api";
import { useEffect, useState } from "react";
import Graph from "./services/Graph";

function App() {
  const [Frase, setFrase] = useState();
  const [author, setAuthor] = useState();
  const [Name, setName] = useState("");
  const [Age, setAge] = useState();

  // Get the initial random phrase
  useEffect(() => {
    frase
      .get()
      .then((result) => {
        setFrase(result.data.content);
        setAuthor(result.data.author);
        console.log(result);
      })
      .catch((err) => {
        setFrase(
          "É das pessoas que menos esperamos que surjem as coisas mais incríveis"
        );
        console.error(err);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    nameAge(Name)
      .get()
      .then((res) => {
        setAge(res.data.age);
        console.log(res);
      });
  };
  return (
    <div className="App">
      <nav></nav>
      <div className="phrase_init">
        <h3>"{Frase}"</h3>
        <h4>{author}</h4>
        <p>A sua idade é:{Age}</p>
        <p>{Name}</p>
        <Graph></Graph>
      </div>
      <div>
        <label htmlFor="name">Qual o seu nome:</label>
        <input
          id="name"
          type="text"
          onChange={(event) => setName(event.target.value)}
        />
        <button onClick={handleSubmit}>Enviar</button>
      </div>
    </div>
  );
}

export default App;

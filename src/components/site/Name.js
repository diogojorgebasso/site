import React from "react";
import { useEffect, useState } from "react";
import { nameAge, locationClient } from "../../services/api";

export default function Name() {
  const [Name, setName] = useState("");
  const [Age, setAge] = useState();
  const [Localizacao, setLocation] = useState(); //em português, para evitar conflitos

  useEffect(() => {
    locationClient
      .get()
      .then((res) => {
        setLocation(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    nameAge(Name, Localizacao)
      .get()
      .then((res) => {
        setAge(res.data.age);
        console.log(res);
      });
  };
  return (
    <div>
      {Name} sua idade esperada é: {Age}
      <div>
        <label htmlFor="name">Qual o seu nome:</label>
        <input
          id="name"
          maxLength="2048"
          type="text"
          aria-autocomplete="both"
          aria-haspopup="false"
          autoCapitalize="off"
          autoComplete="off"
          autoCorrect="off"
          autoFocus
          spellCheck="false"
          title="Pesquisar"
          aria-label="Pesquisar"
          onChange={(event) => setName(event.target.value)}
        />
        <button onClick={handleSubmit}>Enviar</button>
      </div>
    </div>
  );
}

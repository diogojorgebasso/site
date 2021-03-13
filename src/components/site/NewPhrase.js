import React from "react";
import { useState } from "react";
import { newPhrase } from "../../services/api";

export default function NewPhrase() {
  const [NewChoicePhrase, setNewChoicePhrase] = useState();
  const [Personagem, setPersonagem] = useState();

  const handlePhrase = (e) => {
    e.preventDefault();
    newPhrase
      .post("/", { text: Personagem })
      .then((res) => {
        console.log(res);
        let frases = [];
        res.data.forEach((frase) => frases.push(frase));

        setNewChoicePhrase(frases);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <label htmlFor="fraseExtra">Quem você admira?</label>

      <input
        class="searchInput"
        id="name"
        maxlength="2048"
        name="q"
        type="text"
        aria-autocomplete="both"
        aria-haspopup="false"
        autocapitalize="off"
        autocomplete="off"
        autocorrect="off"
        autofocus
        role="combobox"
        spellcheck="false"
        title="Pesquisar"
        value
        onChange={(event) => setPersonagem(event.target.value)}
        aria-label="Pesquisar"
      />

      <div>
        {NewChoicePhrase.map((i, e) => (
          <p key={i}>{e}</p>
        ))}
      </div>
      <button onClick={handlePhrase}>Enviar</button>
    </div>
  );
}

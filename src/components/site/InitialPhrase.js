import React from "react";
import { useEffect, useState } from "react";
import { fraseInicial } from "../../services/api";
import styled from "styled-components";

const Frase = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export default function InitialPhrase() {
  const [Frase, setFrase] = useState("");
  const [Author, setAuthor] = useState("");

  // Get the initial random phrase
  useEffect(() => {
    fraseInicial
      .get()
      .then((result) => {
        setFrase(result.data.content);
        setAuthor(result.data.author);
      })
      .catch((err) => {
        setFrase(
          "É das pessoas que menos esperamos que surgem as coisas mais incríveis"
        );
        console.error(err);
      });
  }, []);

  return (
    <div>
      <Frase>
        <q>{Frase}</q>
      </Frase>
      <cite>{Author}</cite>
    </div>
  );
}

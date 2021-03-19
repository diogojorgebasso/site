import React from "react";
import { useEffect, useState } from "react";
import { fraseInicial } from "../../services/api";
import "./initialPhrase.css";

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
      <q>
        <h2
          className="text-truncate"
          style={{ maxWidth: "500px", maxHeight: "50px" }}
        >
          {Frase}
        </h2>
      </q>
      <cite>{Author}</cite>
    </div>
  );
}

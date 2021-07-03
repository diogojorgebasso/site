import React from "react";
import "./404.css";
import Header from "./Header";
import CenteredContainer from "../auth/CenteredContainer";
import { Card } from "react-bootstrap";
export default function NoMatch() {
  return (
    <div>
      <Header></Header>
      <CenteredContainer>
        <Card></Card>
        <h1>404 - Not Found</h1>
        <h1>Página não encontrada!</h1>
        <p>
          Não se Preocupe! <a href="/">Volte para o início aqui</a>
        </p>
      </CenteredContainer>
    </div>
  );
}

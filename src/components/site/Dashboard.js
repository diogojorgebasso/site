import React from "react";
import InitialPhrase from "./InitialPhrase";
import Graph from "../../services/Graph";
import Name from "./Name";
import NewPhrase from "./NewPhrase";
import Header from "./Header";
import Rocket from "./Rocket";
import ToastEntry from "./ToastEntry";
import { Container } from "react-bootstrap";

export default function Dashboard() {
  return (
    <>
      <Header />
      <Container fluid>
        <h1>Ajudando desenvolvdores a amar API’s🔥!</h1>

        <ToastEntry />
        <InitialPhrase></InitialPhrase>
        <Graph></Graph>
        <Name></Name>
        <NewPhrase></NewPhrase>
        <Rocket></Rocket>
      </Container>
    </>
  );
}

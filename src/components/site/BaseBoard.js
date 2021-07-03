import React from "react";
import { Container, Row, Col } from "react-bootstrap";
export default function BaseBoard() {
  return (
    <Container fluid>
      <Row>
        {" "}
        <div>Junte-se a nós</div>
      </Row>
      <Row>
        <Col>
          Conta
          <Row>Entrar</Row>
          <Row>Atualizar meus dados</Row>
          <Row>Minha assinatura</Row>
        </Col>
        <Col>Blog</Col>
        <Col>Programas</Col>
        <Col>Redes Sociais</Col>
      </Row>
      <Row className="text-center">
        Diogo Basso
        <strong>A nada mais valor que Cristo</strong>{" "}
      </Row>
    </Container>
  );
}

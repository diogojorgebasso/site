import React from "react";
import logo from "./logo__header.png";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { Navbar, Nav, Badge } from "react-bootstrap";

export default function Header() {
  const { currentUser } = useAuth();

  return (
    <Navbar bg="light" expand="sm">
      <img
        className="d-inline-block align-top"
        width="30"
        height="30"
        src={logo}
        alt="Diogo Logo"
      />
      <Navbar.Brand as={Link} to="/">
        <div className="headerOption">
          Diogo Basso
          <span>API mágica</span>
        </div>
      </Navbar.Brand>
      <Nav.Link as={Link} to="/perfil">
        Perfil
      </Nav.Link>
      <Nav.Item>Hello {!currentUser ? "Guest" : currentUser.email}</Nav.Item>
      <Nav.Link href="/perfil">{currentUser ? "Perfil" : "Sign In"}</Nav.Link>
      <Nav.Link href="/mensagens">
        {" "}
        {/*LINK WITH REMOTE CONFIG */}
        <Badge variant="primary"> () 💬 mensagens</Badge>
      </Nav.Link>
      <Nav.Item>
        <Nav.Link href="/contato">Contato</Nav.Link>{" "}
      </Nav.Item>
    </Navbar>
  );
}

import React from "react";
import logo from "./logo__header.png";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { Navbar, Nav, Badge, Form, Button, FormControl } from "react-bootstrap";

export default function Header() {
  const { currentUser } = useAuth();

  return (
    <Navbar bg="dark" expand="sm" variant="dark">
      <img
        className="d-inline-block align-top"
        width="30"
        height="30"
        src={logo}
        alt="Diogo's Logo"
      />
      <Navbar.Brand as={Link} to="/">
        Diogo Basso
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/blog">Blog</Nav.Link>
        <Nav.Link href="/blog">Conteúdo</Nav.Link>
        <Nav.Link href="/contato">Contato</Nav.Link>
      </Nav>
      <Nav.Link href="/mensagens">
        {" "}
        {/*LINK WITH REMOTE CONFIG */}
        <Badge variant="primary"> 💬 mensagen(s)</Badge>
      </Nav.Link>

      <div class="input-group">
        <input
          type="text"
          className="form-control"
          aria-label="Text input with dropdown button"
        />
        <div class="input-group-append">
          <button
            class="btn btn-outline-secondary dropdown-toggle"
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Dropdown
          </button>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">
              Action
            </a>
            <a class="dropdown-item" href="#">
              Another action
            </a>
            <a class="dropdown-item" href="#">
              Something else here
            </a>
            <div role="separator" class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">
              Separated link
            </a>
          </div>
        </div>
      </div>

      <Nav.Link href="/login">{currentUser ? "Perfil" : "Log In"}</Nav.Link>
    </Navbar>
  );
}

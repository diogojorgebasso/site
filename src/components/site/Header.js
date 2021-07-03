import React, { useState } from "react";
import logo from "./logo__header.png";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { Navbar, Nav, Badge } from "react-bootstrap";
import app from "../../firebase";
import AlertSearch from "../../contexts/AlertSearch";
export default function Header() {
  const { currentUser } = useAuth();
  const [searchTerm, setSearchTerm] = useState("");
  const blogPost = app.firestore().collection("blog");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const results = !searchTerm
    ? blogPost
    : blogPost.filter((blog) =>
        blog.toLowerCase().includes(searchTerm.toLocaleLowerCase())
      );

  return (
    <>
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
          <Badge variant="primary"> 💬 mensagem(s)</Badge>
        </Nav.Link>

        <div className="input-group col-md-4">
          <input
            type="text"
            className="form-control"
            aria-label="Input de texto com dropdown"
            placeholder="Pesquise aqui..."
            value={searchTerm}
            onChange={handleChange}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary dropdown-toggle"
              type="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              🔎
            </button>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="/blog">
                Blog
              </a>
              <a className="dropdown-item" href="/pessoas">
                Pessoas
              </a>
              <a className="dropdown-item" href="/frases">
                Ideias
              </a>
              <div role="separator" className="dropdown-divider"></div>
              <a className="dropdown-item" href="/random">
                Outro
              </a>
            </div>
          </div>
        </div>

        <Nav.Link href="/login">{currentUser ? "Perfil" : "Log In"}</Nav.Link>
      </Navbar>
      <AlertSearch result={results} />
    </>
  );
}

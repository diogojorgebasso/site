import React from "react";
import { Card, CardDeck, Button } from "react-bootstrap";
import { RocketNews } from "../../services/api";
import { useState, useEffect } from "react";
import "./Rocket.css";

function formatDate(date) {
  return date.toLocaleDateString();
}
export default function Rocket() {
  const [response, SetResponse] = useState([]);

  useEffect(() => {
    RocketNews.get()
      .then((result) => {
        console.log(result);
        SetResponse(result.data);
      })
      .catch((err) => {
        alert("Error in loading Rocket");
        console.error(err);
      });
  }, []);

  return (
    <div>
      <CardDeck>
        {response?.map((section, index) => {
          return (
            <Card
              border={section.featured ? "dark" : "info"}
              key={index}
              style={{ width: "15rem" }}
            >
              {section.featured ? <Card.Header>Featured!</Card.Header> : ""}
              <picture>
                <Card.Img
                  variant="top"
                  alt={section.title}
                  src={section.imageUrl}
                  fluid="true"
                  width="small"
                  maxheight={200}
                  className="overflow-hidden" //se não for possível escalar a img, cortá-la.
                />
              </picture>
              <Card.Body>
                <Card.Title>{section.title}</Card.Title>
                <Card.Text className="text-truncate overflow-auto">
                  {section.summary}
                </Card.Text>
                <footer className="blockquote-footer">
                  Selecionado por:{" "}
                  <cite title="Source Title">Equipe Diogo</cite>
                </footer>
                <Button href={section.url} target="_blank" variant="primary">
                  {" "}
                  {/*FIXME: href not to the site, but to RocketInfo component */}
                  Continue lendo em <cite>{section.newsSite}</cite>
                </Button>
                <br></br>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">
                  Última atualização: {formatDate(section.publishedAt)}
                </small>
              </Card.Footer>
            </Card>
          );
        })}
      </CardDeck>
    </div>
  );
}

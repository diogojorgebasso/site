import React from "react";
import { Alert } from "react-bootstrap";
export default function AlertSearch(props) {
  return (
    <Alert variant="sucess">
      <ul>
        {props.results.map((result, i) => (
          <li key={i}>{result}</li>
        ))}
      </ul>
    </Alert>
  );
}

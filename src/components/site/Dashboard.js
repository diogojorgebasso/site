import React from "react";
import InitialPhrase from "./InitialPhrase";
import Graph from "../../services/Graph";
import Name from "./Name";
import NewPhrase from "./NewPhrase";

export default function Dashboard() {
  return (
    <div className="Dashboard">
      <InitialPhrase></InitialPhrase>
      <Graph></Graph>
      <Name></Name>
      <NewPhrase></NewPhrase>
    </div>
  );
}

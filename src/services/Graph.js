import React from "react";
import { useEffect, useState } from "react";
import { XYPlot, LineSeries } from "react-vis";
import { mercadoFin } from "./api";

export default function Graph() {
  const [data, setData] = useState({});
  const [loading, SetLoading] = useState(false);

  useEffect(() => {
    mercadoFin
      .get()
      .then((result) => {
        setData({ x: result.date, y: result.amount });
        SetLoading(true);
        console.log(result);
      })
      .catch((err) => {
        setData("Não foi possível completar a chamada. Recarregue...");
        console.error(err);
      });
  }, []);

  return (
    <div>
      {loading && (
        <XYPlot height={200} width={200}>
          <LineSeries curve={"curveMonotoneX"} data={data} />
        </XYPlot>
      )}
    </div>
  );
}

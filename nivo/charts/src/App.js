import React from "react";
import { render } from "react-dom";
import { ResponsiveBar } from "@nivo/bar";

const data = [
  { month: "january", payments: 333823 },
  { month: "february", payments: 289877 },
  { month: "march", payments: 207712 },
  { month: "april", payments: 21550 },
  { month: "may", payments: 60084 },
];

const App = () => (
  <div>
    <h1>Hotel payments in Nivo</h1>
    <div style={{ height: "400px" }}>
      <ResponsiveBar data={data} keys={["payments"]} indexBy="month" />
    </div>
  </div>
);

export default App;

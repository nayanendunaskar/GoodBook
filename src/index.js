import React from "react";
import ReactDom from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");

ReactDom.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);

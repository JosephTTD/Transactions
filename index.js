import React from "react";
import { render } from "react-dom";
import App from "./src/App";
import GlobalStyle from "./src/globalStyle";

const container = document.getElementById("root");
render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  container
);

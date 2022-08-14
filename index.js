import React from "react";
//import reactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import App from "./src/App";
import GlobalStyle from "./src/globalStyle";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  // Keeping StrictMode for debugging /* Issue: unfortunately makes useEffect fire twice */  
  <React.StrictMode>
    <>
    <GlobalStyle />
    <App />
    </>
  </React.StrictMode>
);

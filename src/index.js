import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Resete } from "./style/reset/reset";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Resete />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

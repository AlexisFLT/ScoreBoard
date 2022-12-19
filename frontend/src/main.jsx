import React from "react";
import ReactDOM from "react-dom/client";
import "./services/reset.css";
import "./main.scss";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);

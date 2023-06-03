import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./Index.css";
import { BrowserRouter as Router } from "react-router-dom";

const app = document.getElementById("app");

if (app === null) {
  throw new Error(`Invalid #app element (#app could be null).`);
}

createRoot(app).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

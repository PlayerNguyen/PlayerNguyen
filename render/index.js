import React from "react";
import { createRoot } from "react-dom/client";
const app = document.getElementById("app");
import "./index.css";

createRoot(app).render(
  <React.StrictMode>
    <div>Hi</div>
  </React.StrictMode>
);

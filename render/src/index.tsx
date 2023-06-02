import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

console.log(`Rendering application`);
const app = document.getElementById("app");
if (app === null) {
  throw new Error(`Invalid initial #app section (#app is null)`);
}

createRoot(app).render(<App />);

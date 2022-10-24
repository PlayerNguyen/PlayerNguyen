import React from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./src/pages/App";

const app = document.getElementById("app");

createRoot(app).render(<App />);

import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import { i18nReady } from "./i18n";
import "./index.css";

function Root() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    i18nReady.then(() => setReady(true));
  }, []);

  if (!ready) return null;

  return (
    <React.StrictMode>
      <HelmetProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </HelmetProvider>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(<Root />);

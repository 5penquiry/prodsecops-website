import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";

import App from "./App.jsx";
import "./index.css";
import "./styles/approved-visuals.css";
import "./styles/framework-hero-v2.css";
import "./styles/enterprise-command-center.css";
import "./styles/pso-precision-v4.css";

const redirectPath = sessionStorage.getItem(
  "prodsecops-redirect-path",
);

if (redirectPath) {
  sessionStorage.removeItem(
    "prodsecops-redirect-path",
  );

  window.history.replaceState(
    null,
    "",
    redirectPath,
  );
}

ReactDOM.createRoot(
  document.getElementById("root"),
).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);

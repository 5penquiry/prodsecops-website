import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";

import App from "./App.jsx";
import "./index.css";
import "./styles/approved-visuals.css";
import "./styles/framework-hero-v2.css";
import "./styles/enterprise-command-center.css";
import "./styles/pso-precision-v4.css";
import "./styles/pso-v5.css";
import "./styles/pso-v6.css";
import "./styles/pso-v7-balloon.css";
import "./styles/pso-v8-balloon.css";
import "./styles/pso-v9-balloon.css";
import "./styles/pso-v10-pyramid.css";
import "./styles/pso-v11-external-pentagon.css";
import "./styles/pso-v12-final.css";
import "./styles/pso-v13-restored.css";
import "./styles/pso-v14-hybrid.css";
import "./styles/pso-v15-lower-assembly.css";
import "./styles/pso-v16-simple-menu.css";
import "./styles/pso-v17-final-hero.css";
import "./styles/pso-v18-premium-menu.css";
import "./styles/pso-v20-premium-shell.css";
import "./styles/pso-v21-light-nav.css";
import "./styles/pso-v22-nav-hero-spacing.css";
import "./styles/pso-v23-spa-route-hero.css";
import "./styles/pso-v24-seo-social.css";
import "./styles/pso-v25-enterprise-pages.css";


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

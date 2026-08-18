import { ArrowLeft, Home, Mail, Search } from "lucide-react";
import { Link, useLocation } from "react-router";

export default function NotFound() {
  const location = useLocation();

  return (
    <section className="v26-not-found" aria-labelledby="not-found-title">
      <div className="v26-not-found-grid" aria-hidden="true" />
      <div className="v26-orbital orbital-one" aria-hidden="true" />
      <div className="v26-orbital orbital-two" aria-hidden="true" />

      <div className="v26-not-found-content">
        <div className="v26-error-code" aria-hidden="true">
          <span>4</span>

          <div className="v26-zero-model">
            <svg viewBox="0 0 180 180" role="presentation">
              <defs>
                <linearGradient id="v26-zero-gradient" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#2e8fff" />
                  <stop offset=".52" stopColor="#8b5cf6" />
                  <stop offset="1" stopColor="#24d39a" />
                </linearGradient>
                <filter id="v26-zero-glow" x="-80%" y="-80%" width="260%" height="260%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <polygon
                className="v26-zero-frame"
                points="90,12 164,65 136,152 44,152 16,65"
              />

              <polygon
                className="v26-zero-core"
                points="90,33 139,70 121,130 59,130 41,70"
              />

              <path
                className="v26-zero-signal"
                pathLength="100"
                d="M90 12L164 65L136 152L44 152L16 65Z"
              />

              <circle className="v26-center-orbit" cx="90" cy="90" r="29" />
              <circle className="v26-center-dot" cx="90" cy="90" r="7" />
            </svg>
          </div>

          <span>4</span>
        </div>

        <span className="v26-not-found-eyebrow">
          ROUTE OUTSIDE THE GOVERNED CONTEXT
        </span>

        <h1 id="not-found-title">
          The requested page is not available.
        </h1>

        <p>
          The address may be incomplete, the page may have moved, or the
          requested ProdSecOps resource may still be under development.
          Return to the framework or continue through one of the established
          intelligence domains.
        </p>

        <div className="v26-requested-route">
          <Search aria-hidden="true" />
          <span>Requested route</span>
          <code>{location.pathname}</code>
        </div>

        <div className="v26-not-found-actions">
          <Link className="primary" to="/">
            <Home aria-hidden="true" />
            Return to Framework
          </Link>

          <button type="button" onClick={() => window.history.back()}>
            <ArrowLeft aria-hidden="true" />
            Previous Page
          </button>

          <a href="mailto:framework@vpilot.org">
            <Mail aria-hidden="true" />
            Report a Broken Link
          </a>
        </div>

        <div className="v26-domain-links" aria-label="ProdSecOps intelligence domains">
          <Link to="/remediation-intelligence">Auto Remediation</Link>
          <Link to="/soc-intelligence">SOC Intelligence</Link>
          <Link to="/incident-response-intelligence">Incident Response</Link>
          <Link to="/resilience-intelligence">Resilience</Link>
          <Link to="/compliance-intelligence">Compliance</Link>
        </div>
      </div>
    </section>
  );
}

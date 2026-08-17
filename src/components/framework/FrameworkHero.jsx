import FiveDConvergenceHero from "./FiveDConvergenceHero";

export default function FrameworkHero() {
  return (
    <section className="v6-hero">
      <div className="v6-hero-grid">
        <div className="v6-hero-copy">
          <h1 aria-label="ProdSecOps Framework">
            <span className="v6-prod">Prod</span>
            <span className="v6-sec">Sec</span>
            <span className="v6-ops">Ops</span>
            <span className="v6-framework"> Framework</span>
          </h1>

          <h2>ENTERPRISE INFRASTRUCTURE SECURITY OPERATING MODEL</h2>

          <p>
            ProdSecOps is a risk-driven infrastructure security management and operations framework. It integrates five-dimensional threat intelligence, exact production-state context, accountable Risk Governance, systematic workflow execution, isolated SecLabs proving, controlled domain operations, observability, trusted-state management, evidence, rollback, recovery, and assurance through one continuous lifecycle.
          </p>

          <div className="v6-hero-actions">
            <a href="#why-prodsecops">Why ProdSecOps</a>
            <a href="#five-dimensional-intelligence">Explore 5D Intelligence</a>
            <a href="#framework-structure">View framework structure</a>
          </div>
        </div>

        <FiveDConvergenceHero />
      </div>
    </section>
  );
}

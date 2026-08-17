import FiveDConvergenceHero from "./FiveDConvergenceHero";

export default function FrameworkHero() {
  return (
    <section className="pso-simple-hero">
      <div className="pso-simple-hero-grid">
        <div className="pso-simple-hero-copy">
          <p className="pso-simple-hero-kicker">ENTERPRISE INFRASTRUCTURE SECURITY OPERATING MODEL</p>
          <h1 aria-label="ProdSecOps Framework">
            <span className="title-prod">Prod</span>
            <span className="title-sec">Sec</span>
            <span className="title-ops">Ops</span>
            <span className="title-framework"> Framework</span>
          </h1>
          <h2>Govern infrastructure risk from relevant condition to verified operating baseline.</h2>
          <p className="pso-simple-hero-summary">
            ProdSecOps is a risk-driven infrastructure security management and operations framework. It integrates 5D Intelligence, exact production-state context, accountable Risk Governance, systematic workflow execution, isolated SecLabs proving, controlled domain operations, observability, trusted-state management, evidence, rollback, and recovery through one continuous lifecycle.
          </p>
          <div className="pso-simple-hero-actions">
            <a href="#why-prodsecops">Why ProdSecOps</a>
            <a href="#framework-structure">Explore the framework</a>
          </div>
          <div className="pso-simple-hero-strip">
            <span><b>5D</b> Intelligence</span>
            <span><b>1</b> Production-Risk Case</span>
            <span><b>5</b> Domain Operations</span>
            <span><b>8</b> Governed Stages</span>
          </div>
        </div>
        <FiveDConvergenceHero />
      </div>
    </section>
  );
}

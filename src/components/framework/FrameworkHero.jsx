import { useEffect, useState } from "react";
import {
  BrainCircuit,
  Database,
  ShieldCheck,
  TestTube2,
  Workflow,
} from "lucide-react";
import { domains } from "../../data/domains";

const dimensions = [
  { name: "Anticipate", text: "Threat relevance and exposure" },
  { name: "Observe", text: "Telemetry and material behavior" },
  { name: "Respond", text: "Treatment and response authority" },
  { name: "Restore", text: "Rollback and service recovery" },
  { name: "Prove", text: "Evidence and outcome assurance" },
];

export default function FrameworkHero({
  activeKey = "remediation",
  setActiveKey,
}) {
  const [activeDimension, setActiveDimension] = useState(0);
  const activeDomain = domains[activeKey];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveDimension((current) =>
        (current + 1) % dimensions.length
      );
    }, 2600);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="pso-hero-v3">
      <div className="pso-hero-v3-grid">
        <div className="pso-hero-v3-copy">
          <p className="pso-hero-kicker">
            PRODSECOPS FRAMEWORK · GOVERNED PRODUCTION SECURITY
          </p>

          <h1>
            Coordinate Production Risk Through
            <span> One Governed Operating Context</span>
          </h1>

          <p className="pso-hero-summary">
            ProdSecOps is a risk-driven infrastructure security operations
            framework that connects exact production state, 5D Intelligence,
            RGSM governance, isolated SecLabs proving, authorized execution,
            continuous observation, rollback, recovery, and outcome assurance
            through one Production-Risk Case.
          </p>

          <div className="pso-hero-actions">
            <a href="#why-prodsecops">Why ProdSecOps</a>
            <a href="#framework-structure">Explore the framework</a>
          </div>

          <div className="pso-hero-facts">
            <div><b>1</b><span>Integrated risk context</span></div>
            <div><b>3</b><span>Shared components</span></div>
            <div><b>5</b><span>Intelligence domains</span></div>
            <div><b>8</b><span>Governed stages</span></div>
          </div>
        </div>

        <div
          className="pso-hero-v3-visual"
          style={{ "--domain-color": activeDomain.color }}
          aria-label="5D Intelligence integrated risk context"
        >
          <div className="pso-hero-plane plane-a" />
          <div className="pso-hero-plane plane-b" />
          <div className="pso-hero-plane plane-c" />

          <div className="pso-hero-signal signal-a" />
          <div className="pso-hero-signal signal-b" />
          <div className="pso-hero-signal signal-c" />

          <div className="pso-hero-core">
            <BrainCircuit />
            <small>5D INTELLIGENCE</small>
            <strong>INTEGRATED<br />RISK CONTEXT</strong>
            <div className="pso-dimension-readout">
              <b>{dimensions[activeDimension].name}</b>
              <span>{dimensions[activeDimension].text}</span>
            </div>
          </div>

          <div className="pso-hero-node node-rgsm">
            <Database />
            <b>RGSM</b>
            <span>Govern risk and authority</span>
          </div>

          <div className="pso-hero-node node-labs">
            <TestTube2 />
            <b>SecLabs</b>
            <span>Prove safely</span>
          </div>

          <div className="pso-hero-node node-workflow">
            <Workflow />
            <b>8-Stage Workflow</b>
            <span>Execute and assure</span>
          </div>

          <div className="pso-hero-domain-ring">
            {Object.entries(domains).map(([key, domain]) => {
              const Icon = domain.icon;
              return (
                <button
                  key={key}
                  type="button"
                  aria-label={`Select ${domain.label}`}
                  className={key === activeKey ? "active" : ""}
                  style={{ "--item-color": domain.color }}
                  onClick={() => setActiveKey?.(key)}
                >
                  <Icon />
                  <span>{domain.short}</span>
                </button>
              );
            })}
          </div>

          <div className="pso-hero-trust">
            <ShieldCheck />
            <span>Context · Evidence · Authority · Outcome</span>
          </div>
        </div>
      </div>
    </section>
  );
}

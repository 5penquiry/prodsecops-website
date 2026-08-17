import { useEffect, useState } from "react";
import { BrainCircuit, Database, TestTube2, Workflow } from "lucide-react";
import { domains } from "../../data/domains";

const dimensions = ["Anticipate", "Observe", "Respond", "Restore", "Prove"];

export default function FrameworkHero({ activeKey = "remediation", setActiveKey }) {
  const [dimension, setDimension] = useState(0);
  const active = domains[activeKey];

  useEffect(() => {
    const id = window.setInterval(
      () => setDimension((value) => (value + 1) % dimensions.length),
      2600,
    );
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="framework-hero-v2">
      <div className="hero-v2-grid">
        <div className="hero-v2-copy">
          <p className="hero-v2-eyebrow">
            PRODSECOPS FRAMEWORK · RISK-DRIVEN PRODUCTION SECURITY
          </p>

          <h1>
            Govern Production Security Through
            <span> Intelligence, Evidence, and Recovery</span>
          </h1>

          <p className="hero-v2-lead">
            ProdSecOps is a risk-driven infrastructure security operations
            framework that connects exact production state, 5D Intelligence,
            RGSM governance, isolated SecLabs proving, an eight-stage operating
            lifecycle, authorized CI/CD execution, continuous monitoring, and
            recovery assurance through one Production-Risk Case.
          </p>

          <div className="hero-v2-actions">
            <a href="#framework-structure">Explore the framework</a>
            <a href="#operating-model">How the model operates</a>
          </div>

          <div className="hero-v2-proof">
            <span><b>1</b> Integrated risk context</span>
            <span><b>3</b> Shared framework components</span>
            <span><b>5</b> Intelligence domains</span>
            <span><b>8</b> Governed lifecycle stages</span>
          </div>
        </div>

        <div className="hero-v2-visual" aria-label="5D Intelligence orchestration model">
          <div className="hero-v2-orbit orbit-outer" />
          <div className="hero-v2-orbit orbit-inner" />

          <div className="hero-v2-core" style={{ "--active": active.color }}>
            <BrainCircuit />
            <small>5D INTELLIGENCE</small>
            <strong>INTEGRATED<br />RISK CONTEXT</strong>
            <p>{dimensions[dimension]}</p>
          </div>

          <div className="hero-v2-component component-rgsm">
            <Database /><b>RGSM</b><span>Govern risk and authority</span>
          </div>
          <div className="hero-v2-component component-labs">
            <TestTube2 /><b>SecLabs</b><span>Prove safely</span>
          </div>
          <div className="hero-v2-component component-flow">
            <Workflow /><b>8-Stage Workflow</b><span>Execute and assure</span>
          </div>

          <div className="hero-v2-domains">
            {Object.entries(domains).map(([key, domain]) => {
              const Icon = domain.icon;
              return (
                <button
                  key={key}
                  type="button"
                  className={key === activeKey ? "active" : ""}
                  style={{ "--domain": domain.color }}
                  onClick={() => setActiveKey?.(key)}
                >
                  <Icon />
                  <span>{domain.short}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

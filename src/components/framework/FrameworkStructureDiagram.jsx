import {
  Activity,
  BrainCircuit,
  CheckCircle2,
  Database,
  GitBranch,
  Radar,
  ShieldCheck,
  TestTube2,
  Workflow,
} from "lucide-react";

const domains = [
  {
    label: "Remediation",
    color: "#38e2a8",
  },
  {
    label: "SOC",
    color: "#32d8ed",
  },
  {
    label: "Incident Response",
    color: "#ff806f",
  },
  {
    label: "Resilience",
    color: "#4f9fff",
  },
  {
    label: "Compliance",
    color: "#f3c34e",
  },
];

export default function FrameworkStructureDiagram() {
  return (
    <section className="framework-structure">
      <div className="framework-source-row">
        <div className="framework-source">
          <Activity />
          <span>Security Findings</span>
        </div>

        <div className="framework-source">
          <Database />
          <span>Production State</span>
        </div>

        <div className="framework-source">
          <Radar />
          <span>Threat and Telemetry Context</span>
        </div>
      </div>

      <div className="framework-flow-arrow">
        <span>Integrated context</span>
      </div>

      <div className="framework-core">
        <BrainCircuit />

        <small>ONE CENTRAL ENGINE</small>

        <strong>
          5D Intelligence
          <br />
          Risk Governance
        </strong>

        <p>
          Anticipate · Observe · Respond · Restore · Prove
        </p>
      </div>

      <div className="framework-flow-arrow">
        <span>Orchestrates three connected components</span>
      </div>

      <div className="framework-components-row">
        <article
          className="framework-component-node"
          style={{ "--component-color": "#32d8ed" }}
        >
          <TestTube2 />

          <small>PROVING LAYER</small>

          <strong>SecLabs</strong>

          <p>
            Reconstructs relevant production context and
            validates applicability, treatment,
            observability, compatibility, rollback, and
            recovery.
          </p>

          <div className="component-outcome">
            Tested evidence
          </div>
        </article>

        <article
          className="framework-component-node"
          style={{ "--component-color": "#a276ff" }}
        >
          <ShieldCheck />

          <small>GOVERNANCE LAYER</small>

          <strong>RGSM</strong>

          <p>
            Governs risk criteria, registers, ownership,
            authority, tickets, exceptions, evidence, and
            residual risk.
          </p>

          <div className="component-outcome">
            Authorized decision
          </div>
        </article>

        <article
          className="framework-component-node"
          style={{ "--component-color": "#38e2a8" }}
        >
          <Workflow />

          <small>EXECUTION LIFECYCLE</small>

          <strong>8-Stage Workflow</strong>

          <p>
            Moves the governed case through Audit, Acquire,
            Build, Deploy, Validate, Assess, Execute, and
            Assure.
          </p>

          <div className="component-outcome">
            Controlled work
          </div>
        </article>
      </div>

      <div className="framework-flow-arrow">
        <span>Applies the shared context across five domains</span>
      </div>

      <div className="framework-domain-row">
        {domains.map((domain) => (
          <div
            key={domain.label}
            className="framework-domain"
            style={{ "--domain-color": domain.color }}
          >
            <span />
            <strong>{domain.label}</strong>
          </div>
        ))}
      </div>

      <div className="framework-flow-arrow">
        <span>Authorized production execution</span>
      </div>

      <div className="framework-production-row">
        <div className="framework-production-node">
          <GitBranch />
          <span>CI/CD and ARCT Execution</span>
        </div>

        <div className="framework-production-node">
          <Radar />
          <span>Production Monitoring</span>
        </div>

        <div className="framework-production-node">
          <CheckCircle2 />
          <span>Assurance and Trusted Baseline</span>
        </div>
      </div>
    </section>
  );
}

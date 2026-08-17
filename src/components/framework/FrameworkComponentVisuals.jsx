import {
  Database,
  FileCheck2,
  GitBranch,
  ShieldCheck,
  TestTube2,
  Workflow,
} from "lucide-react";

const workflowStages = [
  { n: "01", name: "Audit", x: 430, y: 145 },
  { n: "02", name: "Acquire", x: 188, y: 150 },
  { n: "03", name: "Build", x: 188, y: 450 },
  { n: "04", name: "Deploy", x: 430, y: 455 },
  { n: "05", name: "Validate", x: 770, y: 145 },
  { n: "06", name: "Assess", x: 1012, y: 150 },
  { n: "07", name: "Execute", x: 1012, y: 450 },
  { n: "08", name: "Assure", x: 770, y: 455 },
];

function VisualShell({ tag, title, body, color, children }) {
  return (
    <article
      className="precision-component-card"
      style={{ "--visual-color": color }}
    >
      <div className="precision-component-copy">
        <span>{tag}</span>
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
      <div className="precision-component-stage">{children}</div>
    </article>
  );
}

function SecLabsVisual() {
  const nodes = ["STATE", "TEST", "EVIDENCE", "RECOVER"];

  return (
    <VisualShell
      tag="COMPONENT 01"
      title="SecLabs · GoldenVault Systems"
      body="Purpose-bound isolated proving for applicability, treatment, monitoring, compatibility, rollback, and recovery without granting production authority."
      color="#32d8ed"
    >
      <div className="precision-labs-orbit">
        <div className="precision-labs-ring ring-one" />
        <div className="precision-labs-ring ring-two" />
        <div className="precision-labs-core">
          <TestTube2 />
          <b>SECLABS</b>
          <small>GOLDENVAULT</small>
        </div>
        {nodes.map((node, index) => (
          <span
            key={node}
            style={{ "--node-angle": `${index * 90}deg` }}
          >
            {node}
          </span>
        ))}
      </div>
    </VisualShell>
  );
}

function RgsmVisual() {
  const nodes = [
    ["CRITERIA", ShieldCheck, "top"],
    ["TICKETS", GitBranch, "left"],
    ["AUTHORITY", Workflow, "right"],
    ["REGISTERS", FileCheck2, "bottom"],
  ];

  return (
    <VisualShell
      tag="COMPONENT 02"
      title="RGSM · Risk Governance Service Management"
      body="The integrated-risk control plane for criteria, cases, registers, tickets, evidence, exceptions, authority, and residual risk."
      color="#a276ff"
    >
      <div className="precision-rgsm-map">
        <div className="precision-rgsm-wave wave-one" />
        <div className="precision-rgsm-wave wave-two" />
        <div className="precision-rgsm-core">
          <Database />
          <b>RGSM</b>
          <small>CONTROL PLANE</small>
        </div>
        {nodes.map(([label, Icon, position]) => (
          <div
            key={label}
            className={`precision-rgsm-node position-${position}`}
          >
            <Icon />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </VisualShell>
  );
}

function PrecisionWorkflowVisual() {
  return (
    <VisualShell
      tag="COMPONENT 03"
      title="ProdSecOps 8-Stage Workflow"
      body="One governed infinity lifecycle moves the Production-Risk Case from trusted context through proving, decision, domain execution, and outcome assurance."
      color="#38e2a8"
    >
      <div className="precision-workflow-wrap">
        <svg
          className="precision-workflow-svg"
          viewBox="0 0 1200 600"
          role="img"
          aria-label="Eight-stage ProdSecOps infinity workflow"
        >
          <defs>
            <linearGradient
              id="precision-workflow-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#0d3268" />
              <stop offset="28%" stopColor="#174f9e" />
              <stop offset="50%" stopColor="#48547f" />
              <stop offset="72%" stopColor="#24596b" />
              <stop offset="100%" stopColor="#08745e" />
            </linearGradient>
            <filter id="precision-beam-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="7" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <path
            id="precision-infinity-path"
            pathLength="1000"
            d="M600 300 C435 70 110 55 88 285 C66 515 390 540 600 300 C810 60 1134 85 1112 315 C1090 545 765 530 600 300 Z"
            fill="none"
          />

          <use
            href="#precision-infinity-path"
            className="precision-workflow-shadow"
          />
          <use
            href="#precision-infinity-path"
            className="precision-workflow-track"
          />
          <use
            href="#precision-infinity-path"
            className="precision-workflow-divider"
          />
          <use
            href="#precision-infinity-path"
            className="precision-single-beam"
            filter="url(#precision-beam-glow)"
          />

          <text className="precision-loop-word prod" x="310" y="330">
            PROD
          </text>
          <text className="precision-loop-word ops" x="890" y="330">
            OPS
          </text>

          {workflowStages.map((stage) => (
            <g
              key={stage.n}
              className="precision-stage-label"
              transform={`translate(${stage.x} ${stage.y})`}
            >
              <circle r="24" />
              <text className="stage-number" textAnchor="middle" y="-1">
                {stage.n}
              </text>
              <text className="stage-name" textAnchor="middle" y="42">
                {stage.name}
              </text>
            </g>
          ))}
        </svg>

        <div className="precision-workflow-core">
          <Workflow />
          <b>RGSM</b>
          <small>ORCHESTRATION</small>
        </div>
      </div>
    </VisualShell>
  );
}

export default function FrameworkComponentVisuals() {
  return (
    <div className="precision-component-grid">
      <SecLabsVisual />
      <RgsmVisual />
      <PrecisionWorkflowVisual />
    </div>
  );
}

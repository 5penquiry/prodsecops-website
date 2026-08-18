import { useEffect, useState } from "react";
import {
  Activity,
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  Database,
  FileCheck2,
  Radar,
  RefreshCw,
  ShieldCheck,
  TestTube2,
  TicketCheck,
  Workflow,
} from "lucide-react";

const domains = [
  {
    key: "remediation",
    number: "01",
    label: "AUTO REMEDIATION",
    ticket: "ARCT",
    ticketName: "Auto Remediation Change Ticket",
    source: "Vulnerability platform findings, CPDB state, service criticality, recovery references",
    action: "Validate and execute a state-matched treatment or record a governed exception",
    outputs: ["Remediation Code", "Risk Profile", "SIEM ASP Rule", "Recovery-Verified Package"],
    color: "#3b82f6",
  },
  {
    key: "soc",
    number: "02",
    label: "SOC INTELLIGENCE",
    ticket: "ADCT",
    ticketName: "Anomaly Detection and Correlation Ticket",
    source: "SIEM/SOAR alerts, production telemetry, CPDB configuration profile, active exceptions",
    action: "Qualify behavior, prove detection, publish monitoring content, and route escalation",
    outputs: ["Monitoring Profile", "Correlation Rule", "Escalation Record", "Detection Evidence"],
    color: "#06b6d4",
  },
  {
    key: "incident",
    number: "03",
    label: "INCIDENT RESPONSE",
    ticket: "IRCT",
    ticketName: "Incident Response Control Ticket",
    source: "Qualified incidents, WAF/firewall events, forensic evidence, affected-service context",
    action: "Prove and authorize containment, control changes, evidence handling, and recovery coordination",
    outputs: ["Response Playbook", "Containment Package", "Evidence Chain", "Recovery Decision"],
    color: "#8b5cf6",
  },
  {
    key: "resilience",
    number: "04",
    label: "RESILIENCE",
    ticket: "BCPCT",
    ticketName: "Business Continuity and Recovery Change Ticket",
    source: "BIA records, backup state, recovery packages, dependencies, RTO/RPO objectives",
    action: "Validate rollback, reconstruction, restoration sequence, and return-to-service conditions",
    outputs: ["Recovery Package", "Restore Evidence", "RTO/RPO Result", "Trusted Baseline"],
    color: "#24d39a",
  },
  {
    key: "compliance",
    number: "05",
    label: "COMPLIANCE",
    ticket: "CCAT",
    ticketName: "Compliance Control Assurance Ticket",
    source: "Control obligations, technical state, exceptions, test evidence, residual-risk records",
    action: "Assess control applicability, treatment, compensating control, exception, and assurance outcome",
    outputs: ["Control Evidence", "Assurance Profile", "Exception Record", "Compliance Conclusion"],
    color: "#f0b94b",
  },
];

const stages = ["AUDIT", "ACQUIRE", "BUILD", "DEPLOY", "VALIDATE", "ASSESS", "EXECUTE", "ASSURE"];

function TicketRail({ active, setActive }) {
  return (
    <div className="v33-ticket-rail" aria-label="ProdSecOps domain ticket types">
      {domains.map((domain, index) => (
        <button
          type="button"
          key={domain.key}
          className={active === index ? "active" : ""}
          style={{ "--domain": domain.color }}
          onMouseEnter={() => setActive(index)}
          onFocus={() => setActive(index)}
          onClick={() => setActive(index)}
        >
          <span>{domain.number}</span>
          <div><b>{domain.ticket}</b><small>{domain.label}</small></div>
        </button>
      ))}
    </div>
  );
}

function ControllerVisual({ domain }) {
  const principles = ["Integrated", "Structured", "Customized", "Inclusive", "Dynamic", "Best information", "Human factors", "Improvement"];
  return (
    <div className="v33-controller" style={{ "--domain": domain.color }}>
      <div className="v33-controller-core">
        <BrainCircuit />
        <small>MANAGEMENT AND ORCHESTRATION CONTROLLER</small>
        <b>5D THREAT<br />INTELLIGENCE</b>
        <p>Integrated Risk Governance and Security Operations</p>
      </div>
      <div className="v33-principle-ring">
        {principles.map((item, index) => <span key={item} style={{ "--angle": `${index * 45}deg` }}>{item}</span>)}
      </div>
      <svg viewBox="0 0 520 520" aria-hidden="true">
        <circle className="v33-controller-track" cx="260" cy="260" r="212" pathLength="100" />
        <circle className="v33-controller-signal" cx="260" cy="260" r="212" pathLength="100" />
      </svg>
    </div>
  );
}

function RismVisual({ domain }) {
  const modules = [
    [Database, "CPDB Asset Inventory", "Assets, services, state, dependencies"],
    [Activity, "Risk Registers", "Risk, treatment, exception, assurance"],
    [TicketCheck, "Ticket Management", "Change, detection, incident, recovery, control"],
    [ShieldCheck, "Risk Criteria", "Impact, likelihood, priority, acceptance"],
    [FileCheck2, "Authority and Evidence", "Ownership, approvals, SoD, decisions"],
    [BrainCircuit, "Production-Risk Cases", "Context, activities, outcome, residual risk"],
  ];
  return (
    <div className="v33-rism">
      <div className="v33-risk-case">
        <BrainCircuit /><small>GOVERNED RECORD</small><b>PRODUCTION-RISK CASE</b><p>Context · Criteria · Ticket · Authority · Evidence · Outcome</p>
      </div>
      <div className="v33-active-ticket" style={{ "--domain": domain.color }}>
        <TicketCheck /><div><small>ACTIVE DOMAIN RECORD</small><b>{domain.ticket}</b><span>{domain.ticketName}</span></div>
      </div>
      <div className="v33-rism-modules">
        {modules.map(([Icon, title, text]) => <article key={title}><Icon /><div><b>{title}</b><span>{text}</span></div></article>)}
      </div>
    </div>
  );
}

function WorkflowVisual({ activeStage, setActiveStage, domain }) {
  return (
    <div className="v33-workflow" style={{ "--domain": domain.color }}>
      <div className="v33-workflow-core"><Workflow /><small>EXTENDED FROM THE RISM TICKET</small><b>8-STAGE WORKFLOW</b></div>
      {stages.map((stage, index) => (
        <button
          key={stage}
          type="button"
          className={`v33-stage stage-${index + 1} ${activeStage === index ? "active" : ""}`}
          style={{ "--angle": `${index * 45}deg` }}
          onMouseEnter={() => setActiveStage(index)}
          onFocus={() => setActiveStage(index)}
          onClick={() => setActiveStage(index)}
        ><span>0{index + 1}</span><b>{stage}</b></button>
      ))}
      <svg viewBox="0 0 560 560" aria-hidden="true"><circle cx="280" cy="280" r="215" pathLength="100" /></svg>
    </div>
  );
}

function LabVisual({ domain, activeStage }) {
  const testActivities = ["Target acquisition", "GoldenVault build", "ASP / TTP test", "Treatment validation", "Impact assessment", "Restore validation"];
  return (
    <div className="v33-lab" style={{ "--domain": domain.color }}>
      <div className="v33-lab-core"><TestTube2 /><small>WORKFLOW VALIDATION EXTENSION</small><b>SECLABS<br />GOLDENVAULT</b></div>
      <div className="v33-lab-activities">
        {testActivities.map((item, index) => <span key={item} className={activeStage >= 1 && activeStage <= 5 && index <= activeStage ? "active" : ""}><b>0{index + 1}</b>{item}</span>)}
      </div>
      <p>Lab build and validation are reusable technical activities. Every result is written back to the active RISM ticket and remains attributable to its domain purpose and authority.</p>
    </div>
  );
}

export default function EnterpriseFrameworkCommandCenter() {
  const [active, setActive] = useState(0);
  const [activeStage, setActiveStage] = useState(0);
  const domain = domains[active];

  useEffect(() => {
    const stageTimer = window.setInterval(() => setActiveStage((value) => (value + 1) % stages.length), 3000);
    return () => window.clearInterval(stageTimer);
  }, []);

  return (
    <div className="v33-ecc">
      <header className="v33-ecc-intro">
        <span>THREAT-INFORMED INFRASTRUCTURE SECURITY OPERATING MODEL</span>
        <h3>5D Intelligence directs the risk process. RISM records and governs the work. The ticket extends through the eight-stage workflow and invokes SecLabs where proving is required.</h3>
        <p>ISO 31000-inspired governance principles are applied through a dynamic controller that integrates context, risk assessment, treatment, monitoring, review, recording, reporting, and continual improvement across five security domains.</p>
      </header>

      <TicketRail active={active} setActive={setActive} />

      <section className="v33-controller-section">
        <div className="v33-controller-copy">
          <span>MANAGEMENT AND ORCHESTRATION FUNCTION</span>
          <h4>5D Intelligence organizes and directs the integrated risk process.</h4>
          <p>5D Intelligence is not another component or ticket repository. The controller interprets each engagement through Anticipate, Observe, Respond, Restore, and Prove; applies organizational risk criteria; coordinates the three operating components; and evaluates every result across the wider security context.</p>
          <div className="v33-controller-actions"><span>Communicate and consult</span><span>Scope, context, criteria</span><span>Identify, analyze, evaluate</span><span>Treat risk</span><span>Monitor and review</span><span>Record and report</span></div>
        </div>
        <ControllerVisual domain={domain} />
      </section>

      <section className="v33-operating-chain">
        <article className="v33-component-card rism-card">
          <header><span>COMPONENT 01</span><h4>RISM Service-Management Control Plane</h4><p>Tracks every engagement through linked records, tickets, authority, evidence, exceptions, residual risk, and assurance.</p></header>
          <RismVisual domain={domain} />
        </article>

        <div className="v33-chain-arrow"><ArrowRight /><span>ticket drives workflow</span></div>

        <article className="v33-component-card workflow-card">
          <header><span>COMPONENT 02</span><h4>Shared Eight-Stage Ticket Workflow</h4><p>The active RISM ticket inherits the same governed lifecycle while stage activities and Stage 07 action change by domain.</p></header>
          <WorkflowVisual activeStage={activeStage} setActiveStage={setActiveStage} domain={domain} />
        </article>

        <div className="v33-chain-arrow"><ArrowRight /><span>validation stages invoke lab</span></div>

        <article className="v33-component-card lab-card">
          <header><span>COMPONENT 03</span><h4>SecLabs Validation Extension</h4><p>Stages Acquire through Assess can invoke an isolated, purpose-bound GoldenVault environment for reusable build and test activities.</p></header>
          <LabVisual domain={domain} activeStage={activeStage} />
        </article>
      </section>

      <section className="v33-domain-readout" style={{ "--domain": domain.color }}>
        <div className="v33-ticket-summary"><span>{domain.number} · {domain.label}</span><h4>{domain.ticket} · {domain.ticketName}</h4><p>{domain.source}</p></div>
        <div className="v33-ticket-flow">
          <span><Database />Source of truth</span><ArrowRight /><span><TicketCheck />RISM ticket</span><ArrowRight /><span><Workflow />8 stages</span><ArrowRight /><span><TestTube2 />SecLabs proving</span><ArrowRight /><span><ShieldCheck />Authorized action</span>
        </div>
        <div className="v33-ticket-outcome"><span>DOMAIN ACTION</span><p>{domain.action}</p><div>{domain.outputs.map((output) => <b key={output}>{output}</b>)}</div></div>
      </section>

      <section className="v33-integrated-example">
        <header><span>INTEGRATED REMEDIATION EXAMPLE</span><h4>One ARCT engagement generates risk intelligence for multiple domains.</h4></header>
        <div className="v33-example-flow">
          <article><span>01</span><b>Finding ingestion</b><p>Tenable or Qualys data creates an ARCT and links the affected production state.</p></article>
          <article><span>02</span><b>GoldenVault proving</b><p>ASP/TTP applicability, remediation, workaround, compatibility, impact, rollback, and recovery are tested.</p></article>
          <article><span>03</span><b>SOC intelligence</b><p>Test telemetry becomes an ASP detection rule or a monitoring obligation for an accepted exception.</p></article>
          <article><span>04</span><b>Resilience assurance</b><p>Verified restore code contributes to target-specific recovery evidence and BCP/DR readiness.</p></article>
          <article><span>05</span><b>Risk decision</b><p>The risk owner approves treatment or records the exception and ongoing monitoring requirements.</p></article>
        </div>
      </section>

      <footer className="v33-boundary"><ShieldCheck /><div><b>Framework boundary</b><p>ProdSecOps supports structured risk-based infrastructure security operations. The framework does not replace the ISMS, organizational governance, source systems, accountable authorities, or certification processes.</p></div><RefreshCw /></footer>
    </div>
  );
}

import { useEffect, useState } from "react";
import { Link } from "react-router";
import {
  Activity,
  ArrowDown,
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  Database,
  FileCheck2,
  Network,
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
    path: "/remediation-intelligence",
    number: "01",
    label: "AUTO REMEDIATION",
    ticket: "ARCT",
    ticketName: "Auto Remediation Change Ticket",
    source: "Vulnerability finding, CPDB state, service criticality, dependencies, treatment and recovery references",
    action: "Execute a risk-approved, state-matched remediation or maintain a governed exception with monitoring obligations.",
    outputs: ["Remediation code", "Risk profile", "SIEM ASP rule", "Recovery-verified package", "Assurance evidence"],
    color: "#3b82f6",
  },
  {
    key: "soc",
    path: "/soc-intelligence",
    number: "02",
    label: "SOC INTELLIGENCE",
    ticket: "ADCT",
    ticketName: "Anomaly Detection and Correlation Ticket",
    source: "SIEM and SOAR alerts, production telemetry, CPDB configuration profile, active exceptions and monitoring coverage",
    action: "Publish validated detection, correlation, triage, escalation and exception-monitoring content.",
    outputs: ["Detection rule", "Monitoring profile", "Correlation evidence", "Escalation criteria", "Assurance record"],
    color: "#06b6d4",
  },
  {
    key: "incident",
    path: "/incident-response-intelligence",
    number: "03",
    label: "INCIDENT RESPONSE",
    ticket: "IRCT",
    ticketName: "Incident Response Control Ticket",
    source: "Incident record, affected services, detection evidence, forensic context, containment authority and recovery references",
    action: "Execute the approved containment, evidence, control-change and recovery playbook.",
    outputs: ["Validated playbook", "Containment package", "Evidence chain", "Recovery reference", "Lessons learned"],
    color: "#8b5cf6",
  },
  {
    key: "resilience",
    path: "/resilience-intelligence",
    number: "04",
    label: "RESILIENCE",
    ticket: "BCPCT",
    ticketName: "Business Continuity and Recovery Change Ticket",
    source: "BIA records, RTO and RPO, backup state, recovery package, dependency sequence and trusted baseline",
    action: "Perform the authorized rollback, reconstruction, restoration or recovery and verify return-to-service conditions.",
    outputs: ["Recovery package", "Rollback evidence", "RTO/RPO result", "Trusted baseline", "Return-to-service record"],
    color: "#10b981",
  },
  {
    key: "compliance",
    path: "/compliance-intelligence",
    number: "05",
    label: "COMPLIANCE",
    ticket: "CCAT",
    ticketName: "Compliance Control Assurance Ticket",
    source: "Applicable obligation, control owner, production state, exceptions, compensating controls and evidence requirements",
    action: "Apply, validate or monitor the control treatment and record a defensible assurance conclusion.",
    outputs: ["Control evidence", "Applicability record", "Compensating control", "Exception status", "Assurance conclusion"],
    color: "#f3c34e",
  },
];

const principles = [
  "Integrated",
  "Structured",
  "Customized",
  "Inclusive",
  "Dynamic",
  "Best information",
  "Human factors",
  "Continual improvement",
];

const stages = [
  ["01", "AUDIT"],
  ["02", "ACQUIRE"],
  ["03", "BUILD"],
  ["04", "DEPLOY"],
  ["05", "VALIDATE"],
  ["06", "ASSESS"],
  ["07", "EXECUTE"],
  ["08", "ASSURE"],
];

const labSteps = [
  "Target acquisition",
  "GoldenVault build",
  "ASP / TTP test",
  "Treatment validation",
  "Impact assessment",
  "Restore validation",
];

function FiveDController({ activeDomain, activeIndex, setActiveIndex }) {
  const process = ["Communicate", "Context", "Assess", "Treat", "Review", "Report"];
  return (
    <div className="v35-controller" style={{ "--domain": activeDomain.color }}>
      <div className="v35-governance-crown">
        <span>LEADERSHIP</span><b>INTEGRATED RISK GOVERNANCE</b><small>Direction · Criteria · Authority · Accountability</small>
      </div>

      <div className="v35-domain-ring">
        {domains.map((domain, index) => (
          <button
            type="button"
            key={domain.key}
            className={activeIndex === index ? "active" : ""}
            style={{ "--angle": `${index * 72}deg`, "--dimension": domain.color }}
            onClick={() => setActiveIndex(index)}
            onMouseEnter={() => setActiveIndex(index)}
            onFocus={() => setActiveIndex(index)}
          >
            <span>{domain.number}</span><b>{domain.label}</b><small>{domain.ticket}</small>
          </button>
        ))}
      </div>

      <div className="v35-controller-core">
        <BrainCircuit />
        <small>5-DOMAIN INTEGRATED CONTROLLER</small>
        <b>5D THREAT<br />INTELLIGENCE</b>
        <p>Organize · Direct · Evaluate · Improve</p>
      </div>

      <div className="v35-principle-orbit">
        {principles.map((item, index) => <span key={item} style={{ "--angle": `${index * 45}deg` }}>{item}</span>)}
      </div>

      <div className="v35-process-orbit">
        {process.map((item, index) => <span key={item} style={{ "--angle": `${index * 60}deg` }}>{item}</span>)}
      </div>

      <svg viewBox="0 0 620 620" aria-hidden="true">
        <circle className="v35-outer-track" cx="310" cy="310" r="278" pathLength="100" />
        <circle className="v35-middle-track" cx="310" cy="310" r="218" pathLength="100" />
        <circle className="v35-signal" cx="310" cy="310" r="218" pathLength="100" />
      </svg>
    </div>
  );
}
function RismTicket({ domain }) {
  const modules = [
    [Database, "CPDB asset inventory", "Assets, services, state, dependencies and ownership"],
    [Activity, "Risk registers", "Risk, treatment, exception, residual risk and assurance"],
    [TicketCheck, "Ticket management", "Change, detection, incident, recovery and assurance work"],
    [ShieldCheck, "Risk criteria", "Impact, likelihood, priority and acceptance thresholds"],
    [FileCheck2, "Authority and evidence", "Approvals, segregation of duties and decision evidence"],
    [BrainCircuit, "Production-Risk Case", "Context, activities, decisions, outcome and residual risk"],
  ];

  return (
    <div className="v34-rism" style={{ "--domain": domain.color }}>
      <header>
        <span>COMPONENT 01 · SERVICE-MANAGEMENT CONTROL PLANE</span>
        <h3>RISM tracks the governed work</h3>
        <p>Risk Intelligence Service Management records every engagement as an auditable ticket linked to a Production-Risk Case.</p>
      </header>
      <div className="v34-ticket-card">
        <TicketCheck />
        <div><small>ACTIVE DOMAIN RECORD</small><b>{domain.ticket}</b><span>{domain.ticketName}</span></div>
        <i>OPEN</i>
      </div>
      <div className="v34-case-core">
        <BrainCircuit /><small>SINGLE GOVERNED RECORD</small><b>PRODUCTION-RISK CASE</b><p>Context · Criteria · Ticket · Authority · Evidence · Outcome</p>
      </div>
      <div className="v34-rism-modules">
        {modules.map(([Icon, title, detail]) => (
          <article key={title}><Icon /><div><b>{title}</b><span>{detail}</span></div></article>
        ))}
      </div>
    </div>
  );
}

function WorkflowRail({ activeStage, setActiveStage, domain }) {
  return (
    <div className="v34-workflow" style={{ "--domain": domain.color }}>
      <header><span>COMPONENT 02 · EXTENDED FROM THE ACTIVE RISM TICKET</span><h3>Shared eight-stage workflow</h3><p>Every ticket inherits the same controlled lifecycle while source context, authority, proving activities, Stage 07 action and closure evidence change by domain.</p></header>
      <div className="v34-stage-rail">
        {stages.map(([number, name], index) => (
          <button key={number} type="button" className={activeStage === index ? "active" : ""} onMouseEnter={() => setActiveStage(index)} onFocus={() => setActiveStage(index)} onClick={() => setActiveStage(index)}>
            <span>{number}</span><b>{name}</b>{index < stages.length - 1 && <ArrowRight />}
          </button>
        ))}
        <i className="v34-stage-beam" />
      </div>
      <div className="v34-workflow-link"><TicketCheck /><span>{domain.ticket} governs the workflow instance</span><ArrowDown /><TestTube2 /><span>Stages 02–06 can invoke SecLabs proving</span></div>
    </div>
  );
}

function SecLabsExtension({ activeStage, domain }) {
  return (
    <div className="v34-seclabs" style={{ "--domain": domain.color }}>
      <header><span>COMPONENT 03 · WORKFLOW VALIDATION EXTENSION</span><h3>SecLabs performs purpose-bound proving</h3><p>Common lab-build and validation activities are invoked by the ticket workflow and written back to the same governed record.</p></header>
      <div className="v34-lab-tunnel">
        {labSteps.map((item, index) => (
          <article key={item} className={activeStage >= 1 && activeStage <= 5 && index <= activeStage - 1 ? "active" : ""}>
            <span>0{index + 1}</span><TestTube2 /><b>{item}</b>
          </article>
        ))}
      </div>
      <div className="v34-goldenvault"><Network /><div><small>ISOLATED TESTBED</small><b>SECLABS GOLDENVAULT</b><span>Mirrored target configuration · Non-production validation · Recovery proving</span></div></div>
      <p className="v34-authority">SecLabs proves technical behavior. RISM governs the record. Authorized roles approve risk, change, recovery and return to service.</p>
    </div>
  );
}

export default function EnterpriseFrameworkCommandCenter() {
  const [activeDomain, setActiveDomain] = useState(0);
  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setActiveStage((value) => (value + 1) % stages.length), 3300);
    return () => window.clearInterval(timer);
  }, []);

  const domain = domains[activeDomain];

  return (
    <div className="v34-ecc">
      <div className="v34-domain-tabs" aria-label="ProdSecOps domain ticket views">
        {domains.map((item, index) => (
          <button key={item.key} type="button" className={activeDomain === index ? "active" : ""} style={{ "--domain": item.color }} onClick={() => { setActiveDomain(index); setActiveStage(0); }}>
            <span>{item.number}</span><b>{item.label}</b><small>{item.ticket}</small>
          </button>
        ))}
      </div>

      <section className="v34-orchestrator">
        <header><span>ISO 31000-INSPIRED MANAGEMENT AND ORCHESTRATION FUNCTION</span><h3>Five operational dimensions governed through one integrated intelligence process</h3><p>The five dimensions are Auto Remediation, SOC Intelligence, Incident Response, Resilience and Compliance. 5D Threat Intelligence is the management controller that integrates their risk context, directs the appropriate RISM ticket, governs progression through the shared workflow, coordinates cross-domain evidence reuse and evaluates the combined outcome.</p></header>
        <div className="v34-orchestration-grid">
          <FiveDController activeDomain={domain} activeIndex={activeDomain} setActiveIndex={setActiveDomain} />
          <div className="v34-orchestration-copy">
            <div><span>ACTIVE ENGAGEMENT</span><b>{domain.label}</b><p>{domain.source}</p></div>
            <div className="v34-controller-actions">
              <span><Radar />Interpret threat and service relevance</span>
              <span><BrainCircuit />Apply context and risk criteria</span>
              <span><Workflow />Direct ticket, workflow and proving</span>
              <span><RefreshCw />Review outcomes and improve the model</span>
            </div>
            <div className="v34-controller-chain"><b>5D controller</b><ArrowRight /><b>RISM ticket</b><ArrowRight /><b>Workflow</b><ArrowRight /><b>SecLabs</b><ArrowRight /><b>Assurance</b></div>
          </div>
        </div>
      </section>

      <section className="v34-component-chain">
        <RismTicket domain={domain} />
        <WorkflowRail activeStage={activeStage} setActiveStage={setActiveStage} domain={domain} />
        <SecLabsExtension activeStage={activeStage} domain={domain} />
      </section>

      <section className="v34-domain-result" style={{ "--domain": domain.color }}>
        <header><span>{domain.ticket} · CURRENT DOMAIN OUTCOME</span><h3>{domain.label}</h3><p>{domain.action}</p></header>
        <div className="v34-output-grid">{domain.outputs.map((item) => <span key={item}><CheckCircle2 />{item}</span>)}</div>
        <Link className="v35-domain-cta" to={domain.path}>Explore {domain.label} workflow <ArrowRight /></Link>
      </section>

      <section className="v34-integration-example">
        <header><span>INTEGRATED EVIDENCE REUSE</span><h3>One governed engagement can strengthen multiple domains</h3><p>The active ticket preserves its own purpose and authority while validated evidence is reused through linked records.</p></header>
        <div>
          <article><span>01</span><b>Primary ticket</b><p>{domain.ticket} tracks the originating work, risk criteria, authority, evidence and closure.</p></article>
          <ArrowRight />
          <article><span>02</span><b>SOC linkage</b><p>Test telemetry can become a detection rule, monitoring profile or exception-monitoring obligation.</p></article>
          <ArrowRight />
          <article><span>03</span><b>Resilience linkage</b><p>Verified rollback and restore results can become target-specific recovery and BCP/DR evidence.</p></article>
          <ArrowRight />
          <article><span>04</span><b>Assurance linkage</b><p>Control effectiveness, decisions, exceptions and residual risk remain attributable for audit and improvement.</p></article>
        </div>
      </section>

      <div className="v34-boundary"><ShieldCheck /><p><b>Framework boundary:</b> ProdSecOps supports integrated, structured and continually improving infrastructure-security operations. It does not replace enterprise risk management, an ISMS, ITSM platforms, scanners, SIEM, backup systems or accountable organizational authority.</p></div>
    </div>
  );
}

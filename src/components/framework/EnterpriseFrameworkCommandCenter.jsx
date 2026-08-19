import { useEffect, useState } from "react";
import { Link } from "react-router";
import {
  Activity,
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  ClipboardCheck,
  Database,
  Eye,
  FileCheck2,
  Layers3,
  Radar,
  RefreshCw,
  ShieldCheck,
  TestTube2,
  TicketCheck,
  Workflow,
  Wrench,
} from "lucide-react";

const domains = [
  {
    key: "remediation",
    number: "01",
    ticket: "ARCT",
    label: "Auto Remediation",
    path: "/remediation-intelligence",
    color: "#3b82f6",
    source: "Vulnerability findings, CPDB target state, service criticality, configuration, dependencies and recovery references.",
    purpose: "Validate and authorize a state-matched treatment, or maintain a governed exception with monitoring and review obligations.",
    action: "Apply approved remediation or record the risk-owner decision.",
    outputs: ["Remediation Code", "Risk Profile", "SIEM ASP Rule", "Recovery-Verified Package"],
  },
  {
    key: "soc",
    number: "02",
    ticket: "ADCT",
    label: "SOC Intelligence",
    path: "/soc-intelligence",
    color: "#06b6d4",
    source: "SIEM/SOAR alerts, production telemetry, CPDB configuration profile, active exceptions and detection coverage.",
    purpose: "Prove detection, correlation, monitoring and escalation against the real production context and known risk conditions.",
    action: "Publish validated detection, correlation and monitoring content.",
    outputs: ["Monitoring Profile", "Detection Rule", "Exception Watch", "Escalation Evidence"],
  },
  {
    key: "incident",
    number: "03",
    ticket: "IRCT",
    label: "Incident Response",
    path: "/incident-response-intelligence",
    color: "#8b5cf6",
    source: "Qualified incident, forensic evidence, affected service, containment authority, WAF or firewall change and recovery references.",
    purpose: "Validate and govern containment, response playbooks, evidence handling, technical control change and recovery coordination.",
    action: "Perform the approved incident-control or containment action.",
    outputs: ["Response Playbook", "Control Package", "Evidence Chain", "Recovery Coordination"],
  },
  {
    key: "resilience",
    number: "04",
    ticket: "BCPCT",
    label: "Resilience",
    path: "/resilience-intelligence",
    color: "#10b981",
    source: "BIA records, RTO/RPO, backup state, dependency sequence, recovery package, trusted baseline and recovery authority.",
    purpose: "Prove rollback, reconstruction, restoration and return-to-service against prioritized business and service objectives.",
    action: "Perform the approved recovery, reconstruction or return-to-service operation.",
    outputs: ["Recovery Package", "Restore Evidence", "Dependency Sequence", "Return-to-Service Record"],
  },
  {
    key: "compliance",
    number: "05",
    ticket: "CCAT",
    label: "Compliance",
    path: "/compliance-intelligence",
    color: "#f3c34e",
    source: "Control obligations, production evidence, ownership, exceptions, compensating controls and assurance requirements.",
    purpose: "Assess control applicability and effectiveness using evidence produced by the operational domains without losing attribution.",
    action: "Apply a treatment, compensating control or governed exception.",
    outputs: ["Control Evidence", "Assurance Record", "Exception State", "Compliance Conclusion"],
  },
];

const threatPhases = [
  ["PROACTIVE", "Anticipate exposure and material threat paths before they become operational events.", "#3b82f6"],
  ["DETECTIVE", "Establish telemetry, detection coverage and observability for relevant production-risk conditions.", "#06b6d4"],
  ["REACTIVE", "Coordinate treatment, containment, escalation and accountable response authority.", "#8b5cf6"],
  ["RECOVER", "Integrate rollback, reconstruction, recovery dependencies and return-to-service confidence.", "#10b981"],
  ["COMPLIANCE", "Preserve benchmark, control, exception and evidence context for defensible assurance.", "#f3c34e"],
];

const principles = [
  ["Integrated", "One risk context across five SecOps domains"],
  ["Structured", "Common records, stages and evidence controls"],
  ["Context-aware", "Adapted to service, technology and organization"],
  ["Collaborative", "Accountable owners and operational stakeholders"],
  ["Dynamic", "Responds to threats, state and service change"],
  ["Evidence-informed", "Uses attributable state, telemetry and proving"],
  ["Resource-optimized", "Reuses approved acquisition, lab and evidence work"],
  ["Continually improved", "Outcomes renew criteria, profiles and baselines"],
];

const stages = [
  ["01", "AUDIT"], ["02", "ACQUIRE"], ["03", "BUILD"], ["04", "DEPLOY"],
  ["05", "VALIDATE"], ["06", "ASSESS"], ["07", "EXECUTE"], ["08", "ASSURE"],
];

function ValueWheel({ active, setActive }) {
  return (
    <div className="v37-value-wheel" aria-label="Integrated threat intelligence value creation and protection principles">
      <div className="v37-value-core">
        <ShieldCheck />
        <small>INTEGRATED THREAT INTELLIGENCE</small>
        <b>VALUE CREATION<br />AND PROTECTION</b>
        <p>Risk-driven infrastructure security</p>
      </div>
      {principles.map(([title], index) => (
        <button
          type="button"
          key={title}
          className={`v37-principle principle-${index + 1} ${active === index ? "active" : ""}`}
          style={{ "--angle": `${index * 45}deg` }}
          onMouseEnter={() => setActive(index)}
          onFocus={() => setActive(index)}
          onClick={() => setActive(index)}
        ><span>{String(index + 1).padStart(2, "0")}</span><b>{title}</b></button>
      ))}
      <svg viewBox="0 0 600 600" aria-hidden="true">
        <circle cx="300" cy="300" r="252" pathLength="100" />
        <circle className="v37-value-signal" cx="300" cy="300" r="252" pathLength="100" />
      </svg>
    </div>
  );
}

function ThreatIntelligenceCore({ activeDomain }) {
  return (
    <div className="v37-ti-controller" style={{ "--domain": activeDomain.color }}>
      <div className="v37-ti-core">
        <BrainCircuit />
        <small>5-PHASE ORCHESTRATION</small>
        <b>5D THREAT<br />INTELLIGENCE</b>
        <p>Integrated analysis and SecOps direction</p>
      </div>
      {threatPhases.map(([title,,color], index) => (
        <div key={title} className={`v37-ti-phase phase-${index + 1}`} style={{ "--phase": color, "--angle": `${index * 72}deg` }}>
          <span>0{index + 1}</span><b>{title}</b>
        </div>
      ))}
      <svg viewBox="0 0 520 520" aria-hidden="true">
        <polygon points="260,38 470,191 390,438 130,438 50,191" />
        <path pathLength="100" d="M260 38L470 191L390 438L130 438L50 191Z" />
      </svg>
    </div>
  );
}

function RismComponent({ domain }) {
  return (
    <article className="v37-component v37-rism" style={{ "--domain": domain.color }}>
      <header><span>COMPONENT 01</span><h4>RISM Service-Management Control Plane</h4><p>Creates the governed record and tracks the complete work history, authority, evidence, exceptions, residual risk and assurance.</p></header>
      <div className="v37-ticket"><TicketCheck /><div><small>ACTIVE DOMAIN TICKET</small><b>{domain.ticket}</b><span>{domain.label}</span></div></div>
      <div className="v37-risk-case"><BrainCircuit /><small>LINKED GOVERNED RECORD</small><b>PRODUCTION-RISK CASE</b><span>Context · Criteria · Ticket · Authority · Evidence · Outcome</span></div>
      <div className="v37-module-grid">
        <span><Database /><b>CPDB</b><small>Asset, service, state, dependency</small></span>
        <span><Activity /><b>Risk registers</b><small>Assessment, treatment, exception</small></span>
        <span><Workflow /><b>Ticket management</b><small>Work logs, stages, decisions</small></span>
        <span><ShieldCheck /><b>Authority</b><small>Owners, approvals, segregation</small></span>
        <span><FileCheck2 /><b>Evidence</b><small>Tests, execution, assurance</small></span>
        <span><RefreshCw /><b>Residual risk</b><small>Conclusion, review, improvement</small></span>
      </div>
    </article>
  );
}

function WorkflowComponent({ domain, activeStage }) {
  return (
    <article className="v37-component v37-workflow" style={{ "--domain": domain.color }}>
      <header><span>COMPONENT 02</span><h4>Shared Eight-Stage Ticket Workflow</h4><p>The selected RISM ticket instantiates the common lifecycle. Sources, tests, authority, Stage 07 action and closure conditions change by domain.</p></header>
      <div className="v37-stage-rail">
        {stages.map(([number,title],index) => <div key={number} className={activeStage === index ? "active" : ""}><span>{number}</span><b>{title}</b></div>)}
        <i style={{ "--stage": activeStage }} />
      </div>
      <div className="v37-workflow-ticket"><TicketCheck /><small>{domain.ticket}</small><b>{domain.label} workflow instance</b></div>
    </article>
  );
}

function SecLabsComponent({ domain, activeStage }) {
  const active = activeStage >= 1 && activeStage <= 5;
  return (
    <article className={`v37-component v37-seclabs ${active ? "active" : ""}`} style={{ "--domain": domain.color }}>
      <header><span>COMPONENT 03</span><h4>SecLabs Validation Extension</h4><p>Invoked by workflow stages that require isolated proving. Common acquisition, GoldenVault build and test activities are reused across domain engagements.</p></header>
      <div className="v37-goldenvault"><TestTube2 /><small>PURPOSE-BOUND TESTBED</small><b>SECLABS GOLDENVAULT</b><span>Isolated from production</span></div>
      <div className="v37-lab-grid">
        {["Target acquisition","GoldenVault build","ASP / TTP test","Treatment validation","Impact assessment","Restore validation"].map((item,index)=><span key={item} className={active && Math.abs(activeStage-1-index)<2 ? "active" : ""}><b>0{index+1}</b>{item}</span>)}
      </div>
      <p className="v37-return-line">Every result returns to <b>{domain.ticket}</b> and remains attributable to the selected domain purpose and authority.</p>
    </article>
  );
}

export default function EnterpriseFrameworkCommandCenter() {
  const [activeDomain, setActiveDomain] = useState(0);
  const [activePrinciple, setActivePrinciple] = useState(0);
  const [activeStage, setActiveStage] = useState(0);
  const domain = domains[activeDomain];
  const [principleTitle, principleText] = principles[activePrinciple];

  useEffect(() => {
    const principleTimer = window.setInterval(() => setActivePrinciple(v => (v + 1) % principles.length), 3800);
    const stageTimer = window.setInterval(() => setActiveStage(v => (v + 1) % stages.length), 3000);
    return () => { window.clearInterval(principleTimer); window.clearInterval(stageTimer); };
  }, []);

  return (
    <div className="v37-framework">
      <section className="v37-part v37-principles-section">
        <header className="v37-part-heading"><span>GOVERNING PURPOSE</span><h3>Integrated threat intelligence creates and protects operational value.</h3><p>ProdSecOps uses risk-management principles as design guidance, but the framework's distinctive purpose is broader: integrate five phases of threat intelligence across five SecOps domains, improve resource use, govern shared operations and produce a modern, evidence-driven infrastructure-security model.</p></header>
        <div className="v37-principles-grid">
          <ValueWheel active={activePrinciple} setActive={setActivePrinciple} />
          <div className="v37-principle-readout"><span>PRINCIPLE {String(activePrinciple+1).padStart(2,"0")}</span><h4>{principleTitle}</h4><p>{principleText}</p><div><span><CheckCircle2 />Enterprise risk visibility</span><span><CheckCircle2 />SecOps integration</span><span><CheckCircle2 />Resource optimization</span><span><CheckCircle2 />Modern infrastructure assurance</span></div></div>
        </div>
      </section>

      <section className="v37-part v37-operating-section">
        <header className="v37-part-heading"><span>FRAMEWORK DESIGN AND PROCESS</span><h3>Five threat-intelligence phases direct three shared operating components.</h3><p>5D Threat Intelligence is the orchestration function. RISM records and governs the work; the active ticket instantiates the eight-stage process; and SecLabs extends the relevant workflow stages for isolated proving. The same component chain is reused for each security domain while preserving domain-specific sources, authority, action and outcomes.</p></header>

        <div className="v37-domain-tabs">
          {domains.map((item,index)=><button type="button" key={item.key} className={index===activeDomain?"active":""} style={{"--domain":item.color}} onClick={()=>{setActiveDomain(index);setActiveStage(0)}}><span>{item.number}</span><div><b>{item.ticket}</b><small>{item.label}</small></div></button>)}
        </div>

        <div className="v37-controller-row">
          <ThreatIntelligenceCore activeDomain={domain} />
          <div className="v37-controller-copy" style={{"--domain":domain.color}}><span>ORCHESTRATION FUNCTION</span><h4>5D Threat Intelligence coordinates the selected domain through an integrated SecOps context.</h4><p>Proactive, Detective, Reactive, Recover and Compliance intelligence are evaluated together. The controller identifies cross-domain relevance, applies risk criteria, directs the appropriate RISM record, determines proving and monitoring needs, and evaluates the combined operational outcome.</p><div>{threatPhases.map(([title,text,color])=><span key={title} style={{"--phase":color}}><b>{title}</b>{text}</span>)}</div></div>
        </div>

        <div className="v37-component-chain">
          <RismComponent domain={domain} />
          <div className="v37-chain-arrow"><ArrowRight /><small>ticket starts process</small></div>
          <WorkflowComponent domain={domain} activeStage={activeStage} />
          <div className="v37-chain-arrow"><ArrowRight /><small>proving stages invoke lab</small></div>
          <SecLabsComponent domain={domain} activeStage={activeStage} />
        </div>

        <div className="v37-domain-result" style={{"--domain":domain.color}}>
          <div><span>SOURCE OF TRUTH</span><p>{domain.source}</p></div>
          <ArrowRight />
          <div><span>INTEGRATED PURPOSE</span><p>{domain.purpose}</p></div>
          <ArrowRight />
          <div><span>DOMAIN ACTION</span><p>{domain.action}</p></div>
        </div>

        <div className="v37-output-row" style={{"--domain":domain.color}}>
          <div>{domain.outputs.map(item=><span key={item}><CheckCircle2 />{item}</span>)}</div>
          <Link to={domain.path}>Explore {domain.label} workflow <ArrowRight /></Link>
        </div>

        <div className="v37-benefit-band">
          <div><Radar /><b>Integrated intelligence</b><span>Five SecOps viewpoints inform one engagement.</span></div>
          <div><Layers3 /><b>Shared operations</b><span>Acquisition, lab build, tests and evidence are reused safely.</span></div>
          <div><Workflow /><b>Structured governance</b><span>Tickets, stage gates, authority and outcomes remain auditable.</span></div>
          <div><RefreshCw /><b>Enterprise improvement</b><span>Results improve risk criteria, profiles, controls and baselines.</span></div>
        </div>
      </section>

      <div className="v37-boundary"><b>Framework position</b><span>ISO 31000 is referenced for general risk-management design principles. ProdSecOps introduces an integrated threat-intelligence and SecOps operating structure; the framework does not reproduce ISO 31000, replace enterprise risk management or an ISMS, or independently establish conformity or certification.</span></div>
    </div>
  );
}

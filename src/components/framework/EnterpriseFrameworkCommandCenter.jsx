import { useEffect, useState } from "react";
import {
  Activity,
  ArrowRight,
  Boxes,
  BrainCircuit,
  CheckCircle2,
  ClipboardCheck,
  CloudCog,
  Database,
  FileCheck2,
  GitBranch,
  Network,
  Radar,
  RefreshCw,
  RotateCcw,
  ShieldCheck,
  TestTube2,
  TicketCheck,
  Workflow,
  Wrench,
} from "lucide-react";

const intelligenceDimensions = [
  ["01", "ANTICIPATE", "Threat relevance, attack paths, exposure, criticality", "#3b82f6"],
  ["02", "OBSERVE", "Telemetry, detection coverage, drift, monitoring confidence", "#06b6d4"],
  ["03", "RESPOND", "Treatment, containment, authority, execution boundaries", "#8b5cf6"],
  ["04", "RESTORE", "Rollback, reconstruction, recovery, return to service", "#24d39a"],
  ["05", "PROVE", "Evidence, obligations, assurance, residual risk", "#f0b94b"],
];

const workflowStages = [
  ["01", "Audit", "Scope, criteria, ownership, service impact", "PLAN", ClipboardCheck],
  ["02", "Acquire", "Versioned configuration and production context", "PLAN", Database],
  ["03", "Build", "Mirrored GoldenVault test environment", "PLAN", Boxes],
  ["04", "Deploy", "Payloads, treatments, telemetry, recovery controls", "DO", GitBranch],
  ["05", "Validate", "Applicability, compatibility, monitoring, rollback", "DO", TestTube2],
  ["06", "Assess", "Integrated risk, impact, authority, treatment decision", "DO", BrainCircuit],
  ["07", "Execute", "Authorized domain-specific operational action", "CHECK", Wrench],
  ["08", "Assure", "Outcome evidence, residual risk, learning, baseline", "ACT", ShieldCheck],
];

const domains = {
  remediation: {
    label: "AUTO REMEDIATION",
    color: "#3b82f6",
    purpose: "Treat production-relevant vulnerabilities through verified, state-matched, recovery-protected change.",
    ticket: "ARCT · Auto Remediation Change Ticket",
    source: "Tenable / Qualys findings, CPDB state, service criticality, CPaC and Recovery Package",
    rism: ["Vulnerability ingestion", "CPDB target and dependency context", "ARCT and authority workflow", "Risk Remediation Registry", "Risk Exception Register", "Residual-risk and assurance record"],
    seclabs: ["Versioned forensic acquisition", "GoldenVault target reconstruction", "ASP / TTP applicability test", "Remediation and workaround validation", "Compatibility and business-impact test", "Rollback and recovery validation"],
    integrated: ["Capture SIEM telemetry during ASP testing", "Generate prioritized monitoring for accepted exceptions", "Tag verified remediation and recovery code", "Reuse recovery validation as target-specific BCP/DR evidence"],
    action: "Approved remediation code is executed against the matched production state; a failure invokes verified rollback or recovery.",
    outputs: ["Remediation Code", "Auto Remediation Risk Profile", "SIEM ASP Rule", "Recovery-Verified Package", "Assurance Evidence"],
  },
  soc: {
    label: "SOC INTELLIGENCE",
    color: "#06b6d4",
    purpose: "Monitor material production risks using actual configuration, treatment, exception, and threat context.",
    ticket: "Monitoring Profile and Detection Engineering Ticket",
    source: "CPDB configuration, exceptions, SecLabs telemetry, SIEM / SOAR records, active threat context",
    rism: ["Monitoring obligations", "Detection engineering ticket", "Exception-linked priority", "Asset and service criticality", "Control-performance evidence", "Alert and assurance history"],
    seclabs: ["Replay production-relevant behavior", "Validate SIEM and EDR visibility", "Measure signal quality", "Test correlation and escalation", "Verify workaround observability", "Capture monitoring evidence"],
    integrated: ["Consume accepted remediation exceptions", "Prioritize rules by service and threat relevance", "Link alerts to Production-Risk Cases", "Escalate confirmed behavior to Incident Response"],
    action: "Validated monitoring content is published with production-state scope, priority, escalation, and evidence requirements.",
    outputs: ["SIEM Monitoring Profile", "Detection Content", "Exception Monitoring", "Escalation Criteria", "Coverage Evidence"],
  },
  incident: {
    label: "INCIDENT RESPONSE",
    color: "#8b5cf6",
    purpose: "Coordinate evidence-led containment and response while protecting service recovery and accountable authority.",
    ticket: "Incident Response and Evidence Case",
    source: "Alerts, affected state, service dependencies, forensic evidence, playbooks, recovery packages",
    rism: ["Incident ticket and severity", "Affected services and ownership", "Containment authority", "Evidence chain", "Communication and exception record", "Recovery and closure decision"],
    seclabs: ["Replicate incident behavior", "Validate containment commands", "Test forensic acquisition", "Measure service consequence", "Verify eradication and recovery", "Exercise response playbook"],
    integrated: ["Inherit SOC detection evidence", "Use remediation intelligence for treatment", "Engage resilience before destructive containment", "Return indicators and lessons to monitoring"],
    action: "Authorized containment, eradication, and recovery actions execute with evidence preservation and service-impact controls.",
    outputs: ["Incident Playbook", "Containment Package", "Evidence Record", "Recovery Decision", "Lessons Learned"],
  },
  resilience: {
    label: "RESILIENCE",
    color: "#24d39a",
    purpose: "Prove that trusted infrastructure and services can be restored within approved objectives after security disruption.",
    ticket: "Recovery Validation and Service Restoration Ticket",
    source: "BIA registers, RTO / RPO, dependencies, CPaC, backups, recovery packages, trusted baselines",
    rism: ["BIA and service priority", "Recovery ownership", "RTO / RPO criteria", "Dependency sequence", "Return-to-service authority", "Recovery assurance record"],
    seclabs: ["Reconstruct trusted state", "Validate software and configuration", "Restore data and dependencies", "Measure RTO and RPO", "Verify security controls", "Prove return-to-service checks"],
    integrated: ["Reuse remediation rollback tests", "Consume incident recovery requirements", "Validate SOC monitoring after restoration", "Update compliance and trusted-baseline evidence"],
    action: "Recovery executes in the approved sequence and service operation resumes only after security and health assurance.",
    outputs: ["Recovery-Verified Code", "Recovery Package", "Measured RTO / RPO", "Return-to-Service Evidence", "Trusted Baseline"],
  },
  compliance: {
    label: "COMPLIANCE",
    color: "#f0b94b",
    purpose: "Translate obligations and control expectations into production-state evidence, treatment, exceptions, and assurance.",
    ticket: "Control Assurance and Exception Ticket",
    source: "Policies, legal and contractual obligations, control criteria, CPDB state, domain evidence, risk decisions",
    rism: ["Control applicability", "Compliance assessment ticket", "Evidence ownership", "Compensating controls", "Exception approval and expiry", "Assurance and management reporting"],
    seclabs: ["Validate control behavior", "Test compensating controls", "Measure technical effectiveness", "Prove monitoring evidence", "Verify recovery obligations", "Reproduce audit evidence"],
    integrated: ["Consume evidence from every domain", "Link obligations to exact assets and services", "Monitor exceptions through SOC Intelligence", "Route gaps to remediation or resilience"],
    action: "Control treatment, compensating control, or governed exception is recorded with attributable evidence and residual risk.",
    outputs: ["Control Evidence", "Compliance Risk Profile", "Exception Record", "Compensating Control", "Assurance Report"],
  },
};

const rismModules = [
  [Database, "CPDB", "Assets, services, configuration, dependencies"],
  [Activity, "Risk registers", "Risk, remediation, exception, assurance"],
  [TicketCheck, "Operational tickets", "Change, incident, recovery, compliance"],
  [FileCheck2, "Risk criteria", "Impact, likelihood, priority, acceptance"],
  [ShieldCheck, "Authority", "Ownership, approvals, segregation of duties"],
  [BrainCircuit, "Production-Risk Case", "Context, evidence, decision, outcome"],
];

function DomainSelector({ activeKey, setActiveKey }) {
  return (
    <div className="v32-domain-selector" aria-label="ProdSecOps domains">
      {Object.entries(domains).map(([key, domain], index) => (
        <button
          type="button"
          key={key}
          className={activeKey === key ? "active" : ""}
          style={{ "--domain": domain.color }}
          onMouseEnter={() => setActiveKey(key)}
          onFocus={() => setActiveKey(key)}
          onClick={() => setActiveKey(key)}
        >
          <span>0{index + 1}</span><b>{domain.label}</b>
        </button>
      ))}
    </div>
  );
}

function FiveDController({ activeDimension, setActiveDimension }) {
  return (
    <div className="v32-five-d-controller">
      <div className="v32-controller-core">
        <Radar />
        <small>ORCHESTRATION CONTROLLER</small>
        <b>5D THREAT<br />INTELLIGENCE</b>
        <span>Integrated Risk Governance<br />and Security Operations</span>
      </div>

      {intelligenceDimensions.map(([number, title,, color], index) => (
        <button
          type="button"
          key={number}
          className={`v32-intel-node intel-${index + 1} ${activeDimension === index ? "active" : ""}`}
          style={{ "--intel": color }}
          onMouseEnter={() => setActiveDimension(index)}
          onFocus={() => setActiveDimension(index)}
          onClick={() => setActiveDimension(index)}
        ><span>{number}</span><b>{title}</b></button>
      ))}

      <svg viewBox="0 0 600 600" aria-hidden="true">
        <polygon points="300,40 548,220 454,512 146,512 52,220" />
        <path pathLength="100" d="M300 40L548 220L454 512L146 512L52 220Z" />
      </svg>
    </div>
  );
}

function WorkflowRing({ activeStage, setActiveStage }) {
  return (
    <div className="v32-workflow-ring">
      <div className="v32-workflow-core"><Workflow /><small>SHARED SYSTEMATIC LIFECYCLE</small><b>8-STAGE<br />WORKFLOW</b></div>
      {workflowStages.map(([number, title,,, Icon], index) => (
        <button
          type="button"
          key={number}
          className={`v32-workflow-stage ${activeStage === index ? "active" : ""}`}
          style={{ "--angle": `${index * 45}deg` }}
          onMouseEnter={() => setActiveStage(index)}
          onFocus={() => setActiveStage(index)}
          onClick={() => setActiveStage(index)}
        ><Icon /><span>{number}</span><b>{title}</b></button>
      ))}
      <svg viewBox="0 0 620 620" aria-hidden="true"><circle cx="310" cy="310" r="247" pathLength="100" /></svg>
    </div>
  );
}

export default function EnterpriseFrameworkCommandCenter() {
  const [activeKey, setActiveKey] = useState("remediation");
  const [activeDimension, setActiveDimension] = useState(0);
  const [activeStage, setActiveStage] = useState(0);
  const active = domains[activeKey];
  const dimension = intelligenceDimensions[activeDimension];
  const stage = workflowStages[activeStage];

  useEffect(() => {
    const intelTimer = window.setInterval(() => setActiveDimension((value) => (value + 1) % intelligenceDimensions.length), 3900);
    const stageTimer = window.setInterval(() => setActiveStage((value) => (value + 1) % workflowStages.length), 3200);
    return () => { window.clearInterval(intelTimer); window.clearInterval(stageTimer); };
  }, []);

  return (
    <div className="v32-framework" style={{ "--active-domain": active.color }}>
      <header className="v32-framework-intro">
        <span>THREAT-INFORMED INFRASTRUCTURE SECURITY OPERATING MODEL</span>
        <h3>One architecture integrating risk intelligence, service management, isolated proving, and security operations.</h3>
        <p>
          ProdSecOps provides a technology-neutral and organization-scalable operating structure for risk-based infrastructure security. 5D Threat Intelligence orchestrates integrated analysis across five domains, while RISM, SecLabs, and the eight-stage workflow provide the management, proving, tracking, authorization, execution, and assurance capabilities required to operate systematically across on-premises, cloud, and hybrid environments.
        </p>
      </header>

      <DomainSelector activeKey={activeKey} setActiveKey={setActiveKey} />

      <section className="v32-architecture-map">
        <article className="v32-architecture-card v32-controller-card">
          <header><span>ORCHESTRATION FUNCTION · NOT A STANDALONE COMPONENT</span><h4>5D Threat Intelligence Controller</h4></header>
          <FiveDController activeDimension={activeDimension} setActiveDimension={setActiveDimension} />
          <div className="v32-intel-readout" style={{ "--intel": dimension[3] }}><span>{dimension[0]} · {dimension[1]}</span><p>{dimension[2]}</p></div>
        </article>

        <article className="v32-architecture-card v32-rism-card">
          <header><span>COMPONENT 01 · RISK INTELLIGENCE SERVICE MANAGEMENT</span><h4>RISM Governance and Service-Management Control Plane</h4></header>
          <p>RISM is the auditable system of engagement for risk intelligence, operational tickets, delegated authority, evidence, exceptions, residual risk, and assurance. RISM tracks every domain action through linked cases and tickets in a service-management model.</p>
          <div className="v32-rism-core"><BrainCircuit /><small>SINGLE GOVERNED RECORD</small><b>PRODUCTION-RISK CASE</b><span>Context · Criteria · Tickets · Authority · Evidence · Outcome</span></div>
          <div className="v32-rism-modules">{rismModules.map(([Icon,title,text])=><section key={title}><Icon /><div><b>{title}</b><span>{text}</span></div></section>)}</div>
        </article>

        <article className="v32-architecture-card v32-seclabs-card">
          <header><span>COMPONENT 02 · ISOLATED TESTBED</span><h4>SecLabs and GoldenVault Proving Environment</h4></header>
          <p>SecLabs acquires versioned target context and reconstructs a purpose-bound GoldenVault environment. Security teams can test attack-surface payloads, treatments, workarounds, telemetry, business impact, compatibility, rollback, and recovery independently of production.</p>
          <div className="v32-seclabs-stack">
            {[[Database,"Acquire target state"],[Boxes,"Rebuild GoldenVault"],[Activity,"ASP / TTP test"],[TestTube2,"Validate treatment"],[RotateCcw,"Prove restore"],[FileCheck2,"Publish evidence"]].map(([Icon,title],index)=><section key={title}><span>0{index+1}</span><Icon /><b>{title}</b></section>)}
          </div>
          <div className="v32-authority-boundary"><ShieldCheck /><p><b>SecLabs proves technical behavior.</b> RISM governs the case. Authorized organizational roles approve risk, change, recovery, and return to service.</p></div>
        </article>

        <article className="v32-architecture-card v32-workflow-card">
          <header><span>COMPONENT 03 · SHARED RESOURCE-OPTIMIZED PROCESS</span><h4>Eight-Stage Governed Workflow</h4></header>
          <WorkflowRing activeStage={activeStage} setActiveStage={setActiveStage} />
          <div className="v32-stage-readout"><span>{stage[3]} · STAGE {stage[0]}</span><b>{stage[1]}</b><p>{stage[2]}</p></div>
        </article>
      </section>

      <section className="v32-domain-operating-view">
        <header>
          <span>SELECTED DOMAIN OPERATING VIEW</span>
          <h4>{active.label}</h4>
          <p>{active.purpose}</p>
        </header>

        <div className="v32-case-banner"><TicketCheck /><div><small>RISM CONTROL RECORD</small><b>{active.ticket}</b></div><ArrowRight /><p>{active.source}</p></div>

        <div className="v32-domain-flow">
          <article><span>RISM MODULES</span>{active.rism.map((item)=><p key={item}><CheckCircle2 />{item}</p>)}</article>
          <ArrowRight />
          <article><span>SECLABS PROVING</span>{active.seclabs.map((item)=><p key={item}><TestTube2 />{item}</p>)}</article>
          <ArrowRight />
          <article><span>5D INTEGRATED ORCHESTRATION</span>{active.integrated.map((item)=><p key={item}><Radar />{item}</p>)}</article>
        </div>

        <div className="v32-execution-line"><CloudCog /><div><small>AUTHORIZED DOMAIN ACTION</small><p>{active.action}</p></div></div>

        <div className="v32-output-strip"><span>KEY OUTPUTS</span>{active.outputs.map((item)=><b key={item}>{item}</b>)}</div>
      </section>

      <section className="v32-example">
        <header><span>INTEGRATED OPERATION EXAMPLE</span><h4>One remediation cycle can produce intelligence for monitoring, recovery, compliance, and future response.</h4></header>
        <div className="v32-example-flow">
          {[
            [Activity,"Vulnerability ingestion","Tenable or Qualys finding enters RISM and creates an ARCT."],
            [Database,"Target acquisition","Exact state and dependencies are acquired and versioned."],
            [TestTube2,"SecLabs validation","ASP payload, remediation, workaround, compatibility, and restore are tested."],
            [Radar,"SOC intelligence","Test telemetry becomes a SIEM ASP rule and exception-monitoring priority."],
            [RotateCcw,"Resilience evidence","Verified restore code contributes to target-specific recovery and BCP/DR assurance."],
            [ShieldCheck,"Risk decision","The risk owner approves treatment or records a governed exception with residual risk."],
          ].map(([Icon,title,text],index)=><article key={title}><span>0{index+1}</span><Icon /><b>{title}</b><p>{text}</p></article>)}
        </div>
      </section>

      <footer className="v32-framework-boundary">
        <Network />
        <p><b>Framework boundary:</b> ProdSecOps coordinates infrastructure security risk and operations. It does not replace vulnerability platforms, SIEM / SOAR, CI/CD, IT service management, backup systems, cloud services, service ownership, or accountable organizational authority. ProdSecOps connects those capabilities through a consistent risk, ticket, proving, workflow, and assurance model.</p>
      </footer>
    </div>
  );
}

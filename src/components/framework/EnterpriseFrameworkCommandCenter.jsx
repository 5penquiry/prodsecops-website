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
  Layers3,
  Radar,
  RefreshCw,
  ShieldCheck,
  TestTube2,
  TicketCheck,
  Workflow,
} from "lucide-react";

const domains = [
  {
    phase: "PROACTIVE",
    domain: "AUTO REMEDIATION",
    ticket: "ARCT",
    ticketName: "Auto Remediation Change Ticket",
    trigger: "Vulnerability management finding",
    color: "#3b82f6",
    route: "/remediation-intelligence",
    action: "Apply a validated, state-matched remediation or maintain a governed exception.",
    outputs: ["Remediation Code", "Risk Profile", "SIEM ASP Rule", "Recovery-Verified Package"],
  },
  {
    phase: "DETECTIVE",
    domain: "SOC INTELLIGENCE",
    ticket: "ADCT",
    ticketName: "Alert Detection Change Ticket",
    trigger: "SIEM or SOAR malicious-traffic event",
    color: "#06b6d4",
    route: "/soc-intelligence",
    action: "Publish validated monitoring, detection, correlation and escalation content.",
    outputs: ["Monitoring Profile", "Detection Rule", "Exception Watch", "Escalation Evidence"],
  },
  {
    phase: "REACTIVE",
    domain: "INCIDENT RESPONSE",
    ticket: "IRCT",
    ticketName: "Incident Response Change Ticket",
    trigger: "Incident, WAF or firewall control requirement",
    color: "#8b5cf6",
    route: "/incident-response-intelligence",
    action: "Execute the approved containment, response or incident-control change.",
    outputs: ["Response Playbook", "Control Package", "Evidence Chain", "Recovery Coordination"],
  },
  {
    phase: "RECOVER",
    domain: "RESILIENCE",
    ticket: "BCPCT",
    ticketName: "Business Continuity Plan Change Ticket",
    trigger: "Backup, recovery, continuity or restoration requirement",
    color: "#10b981",
    route: "/resilience-intelligence",
    action: "Perform the approved rollback, reconstruction, restoration or return-to-service operation.",
    outputs: ["Recovery Package", "Restore Evidence", "RTO/RPO Result", "Trusted Baseline"],
  },
  {
    phase: "COMPLIANCE",
    domain: "BENCHMARK HARDENING",
    ticket: "COMPCT",
    ticketName: "Compliance Change Ticket",
    trigger: "Audit finding, benchmark deviation or policy drift",
    color: "#f3c34e",
    route: "/compliance-intelligence",
    action: "Apply a validated hardening treatment, compensating control or governed exception.",
    outputs: ["Control Evidence", "Hardening Profile", "Exception Record", "Assurance Conclusion"],
  },
];

const stages = [
  ["01", "INGESTION & PARSING", "Receive the threat or control event and create the base RISM work log."],
  ["02", "TRIAGE & ROUTING", "Classify the 5D phase, select the domain ticket and assign accountable ownership."],
  ["03", "CONTEXTUAL ENRICHMENT", "Add asset criticality, exact production state, dependencies, history and risk criteria."],
  ["04", "PLAYBOOK & PLANNING", "Associate the approved playbook, proposed treatment, authority and recovery conditions."],
  ["05", "SECLABS VALIDATION", "Prove the proposed change, monitoring, impact, rollback and recovery in GoldenVault."],
  ["06", "APPROVAL & EXECUTION", "Obtain accountable approval and perform the authorized production action."],
  ["07", "VERIFICATION & MONITORING", "Re-evaluate the environment and confirm security, service and monitoring outcomes."],
  ["08", "CLOSURE & ERM REPORTING", "Close the ticket, update residual risk and feed learning to ERM and future threat models."],
];

const principles = [
  ["Integrated risk-driven", "One context connects threat intelligence, production state, service impact and authority."],
  ["Proactive over reactive", "Intelligence supports architectural hardening and prevention, not detection alone."],
  ["Resource optimized", "Reusable acquisition, laboratory, telemetry and evidence work reduces duplicated effort."],
];

function Crown({ activeDomain, setActiveDomain }) {
  return (
    <div className="v38-crown" style={{ "--domain": activeDomain.color }}>
      <div className="v38-crown-core">
        <BrainCircuit />
        <small>GOVERNANCE AND ORCHESTRATION CROWN</small>
        <b>5D INTEGRATED<br />THREAT INTELLIGENCE</b>
        <p>Ingest · Interpret · Direct · Evaluate · Improve</p>
      </div>
      {domains.map((item, index) => (
        <button
          type="button"
          key={item.phase}
          className={item.ticket === activeDomain.ticket ? "active" : ""}
          style={{ "--angle": `${index * 72}deg`, "--phase": item.color }}
          onMouseEnter={() => setActiveDomain(index)}
          onFocus={() => setActiveDomain(index)}
          onClick={() => setActiveDomain(index)}
        >
          <span>0{index + 1}</span><b>{item.phase}</b><small>{item.domain}</small>
        </button>
      ))}
      <svg viewBox="0 0 560 560" aria-hidden="true">
        <polygon points="280,35 513,204 424,478 136,478 47,204" />
        <path pathLength="100" d="M280 35L513 204L424 478L136 478L47 204Z" />
      </svg>
    </div>
  );
}

function TicketSpine({ domain, activeStage }) {
  return (
    <div className="v38-spine" style={{ "--domain": domain.color }}>
      <div className="v38-spine-head"><TicketCheck /><div><small>RISM SYSTEM OF RECORD</small><b>{domain.ticket}</b><span>{domain.ticketName}</span></div></div>
      <div className="v38-spine-line" />
      {stages.map(([number, title, text], index) => (
        <article key={number} className={activeStage === index ? "active" : ""}>
          <span>{number}</span><div><b>{title}</b><p>{text}</p></div>
          {index < stages.length - 1 && <ArrowDown />}
        </article>
      ))}
      <div className="v38-spine-case"><Database /><div><small>PRODUCTION-RISK CASE</small><b>Work logs · Authority · Evidence · Exceptions · Residual Risk</b></div></div>
    </div>
  );
}

function SecLabCrucible({ domain, activeStage }) {
  const tests = ["Mirror target", "Deploy proposed change", "Replay ASP/TTP", "Capture SIEM telemetry", "Assess service impact", "Validate rollback and recovery"];
  return (
    <div className={`v38-crucible ${activeStage === 4 ? "active" : ""}`} style={{ "--domain": domain.color }}>
      <div className="v38-crucible-shell">
        <div className="v38-crucible-core"><TestTube2 /><small>STAGE 05 · UNIVERSAL TESTING GROUND</small><b>SECLABS<br />GOLDENVAULT</b><p>Isolated from production</p></div>
        <div className="v38-test-ring">{tests.map((item,index)=><span key={item} style={{"--angle":`${index*60}deg`}}><b>0{index+1}</b>{item}</span>)}</div>
        <svg viewBox="0 0 500 500" aria-hidden="true"><circle cx="250" cy="250" r="207" pathLength="100" /></svg>
      </div>
      <p>SecLabs validates the proposed operation before production. Results return to the active RISM ticket for approval, evidence, residual-risk and assurance decisions.</p>
    </div>
  );
}

export default function EnterpriseFrameworkCommandCenter() {
  const [activeDomainIndex, setActiveDomainIndex] = useState(0);
  const [activeStage, setActiveStage] = useState(0);
  const activeDomain = domains[activeDomainIndex];

  useEffect(() => {
    const timer = window.setInterval(() => setActiveStage(value => (value + 1) % stages.length), 3400);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="v38-framework">
      <header className="v38-intro">
        <span>5D INTEGRATED THREAT INTELLIGENCE ARCHITECTURE</span>
        <h3>From threat context to governed ticket, validated action and enterprise learning.</h3>
        <p>ProdSecOps expands threat intelligence beyond conventional detection and response. The framework integrates Proactive, Detective, Reactive, Recover and Compliance intelligence, directs each engagement through the correct security-operations domain, and converts the resulting evidence into enterprise risk visibility, optimized resources and structured operational governance.</p>
      </header>

      <section className="v38-principles">
        <div className="v38-principles-copy">
          <span>DESIGN PRINCIPLES</span>
          <h4>Integrated intelligence protects operational value.</h4>
          <p>ISO 31000 is referenced only for general integrated-risk design guidance. ProdSecOps introduces a distinct integrated threat-intelligence structure for infrastructure security operations.</p>
        </div>
        <div className="v38-principle-cards">
          {principles.map(([title,text],index)=><article key={title}><span>0{index+1}</span><div><b>{title}</b><p>{text}</p></div></article>)}
        </div>
      </section>

      <section className="v38-topology">
        <div className="v38-crown-panel">
          <span>THE CROWN · GOVERNANCE AND ORCHESTRATION</span>
          <h4>One controller integrates five threat-intelligence phases.</h4>
          <Crown activeDomain={activeDomain} setActiveDomain={setActiveDomainIndex} />
        </div>

        <div className="v38-crown-to-spine"><ArrowDown /><span>classified intelligence creates the domain record</span></div>

        <div className="v38-operation-layout">
          <section className="v38-spine-panel">
            <span>THE SPINE · RISM TRACKING AND SHARED PROCESS</span>
            <h4>The ticket type changes. The governed workflow remains systematic.</h4>
            <TicketSpine domain={activeDomain} activeStage={activeStage} />
          </section>

          <section className="v38-crucible-panel">
            <span>THE CRUCIBLE · VALIDATION INSIDE THE WORKFLOW</span>
            <h4>Stage 05 invokes the common SecLabs proving environment.</h4>
            <SecLabCrucible domain={activeDomain} activeStage={activeStage} />
          </section>
        </div>
      </section>

      <section className="v38-domain-matrix" style={{ "--domain": activeDomain.color }}>
        <div><span>5D PHASE</span><b>{activeDomain.phase}</b></div>
        <ArrowRight />
        <div><span>SECOPS DOMAIN</span><b>{activeDomain.domain}</b></div>
        <ArrowRight />
        <div><span>TRIGGER SOURCE</span><b>{activeDomain.trigger}</b></div>
        <ArrowRight />
        <div><span>RISM TICKET</span><b>{activeDomain.ticket}</b></div>
      </section>

      <section className="v38-outcome" style={{ "--domain": activeDomain.color }}>
        <div className="v38-action"><span>AUTHORIZED DOMAIN ACTION</span><p>{activeDomain.action}</p></div>
        <div className="v38-outputs">{activeDomain.outputs.map(item=><span key={item}><CheckCircle2 />{item}</span>)}</div>
        <Link to={activeDomain.route}>Explore {activeDomain.domain} workflow <ArrowRight /></Link>
      </section>

      <section className="v38-enterprise-feedback">
        <div><Radar /><b>Integrated threat intelligence</b><span>Five perspectives inform one operational decision.</span></div>
        <ArrowRight />
        <div><Layers3 /><b>Resource optimization</b><span>Shared acquisition, test and evidence services reduce duplication.</span></div>
        <ArrowRight />
        <div><Workflow /><b>SecOps governance</b><span>Tickets, stages, approvals and outcomes remain traceable.</span></div>
        <ArrowRight />
        <div><RefreshCw /><b>ERM and threat-model feedback</b><span>Closure updates residual risk, dashboards and future models.</span></div>
      </section>

      <footer className="v38-boundary"><ShieldCheck /><p><b>Framework position:</b> ProdSecOps is an original integrated threat-intelligence and infrastructure-SecOps operating model. ISO 31000 is referenced for general integrated-risk principles only. ProdSecOps does not reproduce ISO 31000, replace enterprise risk management or an ISMS, or independently establish conformity or certification.</p></footer>
    </div>
  );
}

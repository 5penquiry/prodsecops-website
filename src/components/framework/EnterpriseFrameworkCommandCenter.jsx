import { useState } from "react";
import { Link } from "react-router";
import {
  Activity,
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
import TicketAssuranceInfinityWorkflow from "./TicketAssuranceInfinityWorkflow";

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
    action: "Perform approved rollback, reconstruction, restoration or return-to-service activity.",
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

const componentModules = [
  {
    number: "01",
    title: "RISM",
    subtitle: "Risk Intelligence Service Management",
    purpose: "Governed tracking, ticketing, authority and evidence system of record.",
    color: "#8b5cf6",
    icon: TicketCheck,
    modules: ["CPDB asset inventory", "Production-Risk Cases", "Domain tickets", "Risk and exception registers", "Risk criteria", "Authority and approvals", "Evidence and work logs", "Residual risk and assurance"],
  },
  {
    number: "02",
    title: "Eight-Stage Workflow",
    subtitle: "Shared Ticket-Controlled Process",
    purpose: "Repeatable operational lifecycle instantiated from every active RISM ticket.",
    color: "#06b6d4",
    icon: Workflow,
    modules: ["Ingestion and parsing", "Dynamic routing", "Context enrichment", "Playbook planning", "SecLabs validation gate", "Approval and execution", "Verification and monitoring", "Closure and ERM reporting"],
  },
  {
    number: "03",
    title: "SecLabs",
    subtitle: "GoldenVault Validation Extension",
    purpose: "Purpose-bound, isolated technical proving invoked from the workflow when required.",
    color: "#3b82f6",
    icon: TestTube2,
    modules: ["Target acquisition", "Mirrored configuration build", "ASP and TTP replay", "Treatment validation", "SIEM telemetry capture", "Impact assessment", "Rollback validation", "Recovery validation"],
  },
];

function OrchestratorVisual({ activeIndex, setActiveIndex }) {
  const active = domains[activeIndex];

  return (
    <div className="v39-orchestrator" style={{ "--active": active.color }}>
      <div className="v39-intake">
        <span>THREAT & OPERATIONAL INPUTS</span>
        <div><Radar /><Activity /><Database /><ShieldCheck /></div>
      </div>

      <div className="v39-orchestrator-core">
        <BrainCircuit />
        <small>MANAGEMENT AND ORCHESTRATION CORE</small>
        <b>5D THREAT<br />INTELLIGENCE</b>
        <p>Classify · Correlate · Direct · Evaluate</p>
      </div>

      <div className="v39-domain-vanes">
        {domains.map((domain, index) => (
          <button
            type="button"
            key={domain.phase}
            className={index === activeIndex ? "active" : ""}
            style={{ "--angle": `${index * 72 - 90}deg`, "--domain": domain.color }}
            onMouseEnter={() => setActiveIndex(index)}
            onFocus={() => setActiveIndex(index)}
            onClick={() => setActiveIndex(index)}
          >
            <span>0{index + 1}</span>
            <b>{domain.phase}</b>
            <small>{domain.domain}</small>
          </button>
        ))}
      </div>

      <div className="v39-decision-output">
        <span>DIRECTED OPERATING INTENT</span>
        <b>{active.ticket}</b>
        <small>{active.ticketName}</small>
      </div>

      <svg viewBox="0 0 760 500" aria-hidden="true">
        <defs>
          <linearGradient id="v39-flow" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#3b82f6" />
            <stop offset=".5" stopColor="#8b5cf6" />
            <stop offset="1" stopColor="#10b981" />
          </linearGradient>
        </defs>
        <ellipse className="v39-orbit-one" cx="380" cy="250" rx="270" ry="165" />
        <ellipse className="v39-orbit-two" cx="380" cy="250" rx="200" ry="120" />
        <path className="v39-flow-signal" pathLength="100" d="M90 250C180 55 580 55 670 250C580 445 180 445 90 250Z" />
        <path className="v39-command-beam" d="M380 310L380 455" />
      </svg>
    </div>
  );
}

function ComponentsVisual() {
  return (
    <div className="v39-components-grid">
      {componentModules.map(({ number, title, subtitle, purpose, color, icon: Icon, modules }, index) => (
        <article key={number} style={{ "--component": color }}>
          <header>
            <span>{number}</span>
            <Icon />
            <div><small>SHARED COMPONENT</small><h4>{title}</h4><b>{subtitle}</b></div>
          </header>
          <p>{purpose}</p>
          <div className="v39-module-grid">
            {modules.map((item) => <span key={item}><CheckCircle2 />{item}</span>)}
          </div>
          {index < componentModules.length - 1 && <ArrowRight className="v39-component-arrow" />}
        </article>
      ))}
    </div>
  );
}

export default function EnterpriseFrameworkCommandCenter() {
  const [activeDomainIndex, setActiveDomainIndex] = useState(0);
  const activeDomain = domains[activeDomainIndex];

  return (
    <div className="v39-framework">
      <section className="v39-chapter v39-architecture">
        <header className="v39-chapter-header">
          <span>01 · 5D ORCHESTRATOR ARCHITECTURE</span>
          <h3>A management controller that converts five intelligence perspectives into one directed SecOps engagement.</h3>
          <p>5D Threat Intelligence continuously correlates Proactive, Detective, Reactive, Recover and Compliance intelligence. The orchestrator interprets source events against production context, identifies cross-domain relevance, applies risk criteria and directs the appropriate RISM ticket. Integrated enterprise risk visibility is the outcome of this intelligence process, not the controller’s only purpose.</p>
        </header>

        <div className="v39-principle-bar">
          <article><BrainCircuit /><b>Integrated intelligence</b><p>Connect prevention, detection, response, recovery and hardening.</p></article>
          <article><ShieldCheck /><b>Risk-directed operations</b><p>Translate threat context into accountable priorities and authority.</p></article>
          <article><Layers3 /><b>Shared-resource governance</b><p>Reuse approved data, lab and evidence services without merging ownership.</p></article>
          <article><RefreshCw /><b>Enterprise learning</b><p>Return outcomes to risk reporting, threat models and trusted baselines.</p></article>
        </div>

        <OrchestratorVisual activeIndex={activeDomainIndex} setActiveIndex={setActiveDomainIndex} />
      </section>

      <section className="v39-chapter v39-components">
        <header className="v39-chapter-header">
          <span>02 · SHARED COMPONENT SYSTEM</span>
          <h3>Three reusable components provide the record, process and proving capabilities.</h3>
          <p>The components are deliberately separated. RISM records and governs the engagement. The ticket instantiates the shared eight-stage workflow. SecLabs is invoked by the workflow when technical uncertainty requires isolated proving. The 5D orchestrator remains above the components and directs how they are used.</p>
        </header>
        <ComponentsVisual />
      </section>

      <section className="v39-chapter v39-process">
        <header className="v39-chapter-header">
          <span>03 · TICKET-TO-ASSURANCE PROCESS FLOW</span>
          <h3>One source event becomes a governed record, validated action and measurable enterprise outcome.</h3>
          <p>Select a 5D intelligence domain to view how the trigger, RISM record, workflow, SecLabs validation, authorized action and outputs change while the approved infinity architecture remains consistent.</p>
        </header>

        <div className="v39-domain-tabs">
          {domains.map((domain, index) => (
            <button
              type="button"
              key={domain.ticket}
              className={index === activeDomainIndex ? "active" : ""}
              style={{ "--domain": domain.color }}
              onClick={() => setActiveDomainIndex(index)}
            >
              <span>0{index + 1}</span>
              <div><b>{domain.phase}</b><small>{domain.domain} · {domain.ticket}</small></div>
            </button>
          ))}
        </div>

        <TicketAssuranceInfinityWorkflow activeDomain={activeDomain} />

        <div className="v39-output-row" style={{ "--domain": activeDomain.color }}>
          <div>
            <span>KEY OUTPUTS</span>
            <div>{activeDomain.outputs.map((output) => <b key={output}><CheckCircle2 />{output}</b>)}</div>
          </div>
          <Link to={activeDomain.route}>Explore {activeDomain.domain} workflow <ArrowRight /></Link>
        </div>
      </section>

      <section className="v39-ciso-summary">
        <div><Radar /><span>WHAT IT IS</span><b>Integrated five-perspective threat-intelligence orchestration</b></div>
        <ArrowRight />
        <div><TicketCheck /><span>HOW IT IS CONTROLLED</span><b>RISM tickets, authority, evidence and residual risk</b></div>
        <ArrowRight />
        <div><Workflow /><span>HOW IT OPERATES</span><b>Shared eight-stage infinity workflow with SecLabs validation</b></div>
        <ArrowRight />
        <div><ShieldCheck /><span>WHAT IT DELIVERS</span><b>Governed action, optimized resources and enterprise assurance</b></div>
      </section>
    </div>
  );
}

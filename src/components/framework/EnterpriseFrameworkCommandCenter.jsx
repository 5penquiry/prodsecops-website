import { useState } from "react";
import { Link } from "react-router";
import {
  Activity,
  ArrowDown,
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  CloudCog,
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
    intent: "Reduce exploitable exposure before it becomes an operational event.",
    intelligence: "Exposure relevance · Attack paths · Treatment readiness",
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
    intent: "Establish reliable visibility for relevant production-risk conditions.",
    intelligence: "Telemetry confidence · Detection coverage · Exception watch",
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
    intent: "Coordinate timely containment and accountable response action.",
    intelligence: "Incident context · Containment options · Response authority",
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
    intent: "Protect recoverability and trusted return to service.",
    intelligence: "Rollback confidence · Recovery dependencies · Service restoration",
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
    intent: "Translate obligations and benchmarks into production assurance.",
    intelligence: "Control applicability · Hardening state · Evidence confidence",
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

const sourceInputs = [
  [Radar, "Threat Intelligence", "External and internal threat context"],
  [Activity, "Security Operations", "Findings, alerts and incidents"],
  [Database, "Production Context", "State, services and dependencies"],
  [ShieldCheck, "Governance Context", "Criteria, authority and obligations"],
];

function OrchestratorVisual({ activeIndex, setActiveIndex }) {
  const active = domains[activeIndex];

  return (
    <div className="v43-command-bridge" style={{ "--active": active.color }}>
      <div className="v43-source-bus" aria-label="Threat and operational input sources">
        {sourceInputs.map(([Icon, title, detail]) => (
          <article key={title}>
            <Icon aria-hidden="true" />
            <div><b>{title}</b><small>{detail}</small></div>
          </article>
        ))}
        <i aria-hidden="true" />
      </div>

      <div className="v43-analysis-deck">
        <div className="v43-controller-stack">
          <div className="v43-controller-crown">
            <span>MANAGEMENT AND ORCHESTRATION CORE</span>
            <b>5D THREAT INTELLIGENCE</b>
            <small>Continuous analysis across five SecOps intelligence dimensions</small>
          </div>

          <div className="v43-controller-engine">
            <div className="v43-engine-orbit orbit-a" />
            <div className="v43-engine-orbit orbit-b" />
            <div className="v43-engine-orbit orbit-c" />
            <BrainCircuit aria-hidden="true" />
            <span>INTEGRATED ANALYSIS</span>
            <b>Classify</b><i />
            <b>Correlate</b><i />
            <b>Direct</b><i />
            <b>Evaluate</b>
          </div>

          <div className="v43-controller-foundation">
            <span><ShieldCheck />Risk criteria</span>
            <span><Layers3 />Cross-domain context</span>
            <span><FileCheck2 />Decision evidence</span>
          </div>
        </div>

        <aside className="v43-intelligence-readout">
          <header>
            <span>ACTIVE INTELLIGENCE DIMENSION</span>
            <b>{active.phase}</b>
            <small>{active.domain}</small>
          </header>
          <div className="v43-readout-purpose">
            <span>OPERATING INTENT</span>
            <p>{active.intent}</p>
          </div>
          <div className="v43-readout-analysis">
            <span>INTEGRATED ANALYSIS</span>
            <p>{active.intelligence}</p>
          </div>
          <div className="v43-readout-ticket">
            <TicketCheck aria-hidden="true" />
            <div><span>DIRECTED RISM RECORD</span><b>{active.ticket}</b><small>{active.ticketName}</small></div>
          </div>
        </aside>
      </div>

      <div className="v43-domain-console" aria-label="Five threat-intelligence dimensions">
        {domains.map((domain, index) => (
          <button
            type="button"
            key={domain.phase}
            className={index === activeIndex ? "active" : ""}
            style={{ "--domain": domain.color }}
            onMouseEnter={() => setActiveIndex(index)}
            onFocus={() => setActiveIndex(index)}
            onClick={() => setActiveIndex(index)}
            aria-pressed={index === activeIndex}
          >
            <span>0{index + 1}</span>
            <div><b>{domain.phase}</b><small>{domain.domain}</small></div>
            <i aria-hidden="true" />
          </button>
        ))}
      </div>

      <div className="v43-control-flow" aria-hidden="true">
        <span>INGEST</span><ArrowRight /><span>ANALYZE</span><ArrowRight /><span>DIRECT</span><ArrowRight /><span>RISM TICKET</span>
      </div>
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
      <section className="v39-chapter v39-architecture v43-architecture">
        <header className="v39-chapter-header">
          <span>01 · 5D ORCHESTRATOR ARCHITECTURE</span>
          <h3>An integrated intelligence controller that converts multi-source threat context into governed SecOps direction.</h3>
          <p>5D Threat Intelligence continuously evaluates Proactive, Detective, Reactive, Recover and Compliance intelligence. The controller correlates threat information with exact production state, service consequence, organizational criteria and available evidence, then directs the appropriate RISM ticket while preserving cross-domain relevance.</p>
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

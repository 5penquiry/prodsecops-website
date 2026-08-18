import { useEffect, useState } from "react";
import {
  Activity,
  ArrowRight,
  Boxes,
  BrainCircuit,
  CheckCircle2,
  Code2,
  Database,
  GitBranch,
  Layers3,
  Radar,
  RefreshCw,
  ShieldCheck,
  TestTube2,
  Workflow,
} from "lucide-react";

const fragmentation = [
  ["Findings", "Scanners report technical severity without sufficient service, configuration, dependency, or recovery context."],
  ["Production state", "Asset, software, identity, control, exception, and dependency states remain distributed across systems of record."],
  ["Operations", "SOC, incident response, remediation, compliance, resilience, and change teams progress through different queues and priorities."],
  ["Authority", "Technical evidence, risk acceptance, execution approval, and return-to-service authority may be recorded in unrelated workflows."],
];

const devSecOps = [
  "Plan and develop software",
  "Build, test, and package artifacts",
  "Automate security checks in CI/CD",
  "Release and deploy application change",
  "Observe software and pipeline feedback",
];

const productionGap = [
  "Exact infrastructure and configuration state",
  "Cross-service and operational dependencies",
  "Live findings, exceptions, alerts, and incidents",
  "Treatment authority and accountable risk ownership",
  "Rollback, recovery, continuity, and return to service",
  "Evidence of the resulting production-risk position",
];

const pdca = [
  {
    short: "PLAN",
    title: "Establish context and risk intent",
    text: "Define the production service, information-security objectives, scope, risk criteria, authoritative sources, ownership, treatment assumptions, and evidence requirements.",
    icon: BrainCircuit,
    color: "#3b82f6",
  },
  {
    short: "DO",
    title: "Prove and perform governed action",
    text: "Acquire trusted state, reconstruct the necessary context in SecLabs, validate the treatment or operational scenario, obtain authority, and execute the approved domain action.",
    icon: TestTube2,
    color: "#8b5cf6",
  },
  {
    short: "CHECK",
    title: "Observe effectiveness and consequence",
    text: "Validate technical results, service health, monitoring behavior, evidence completeness, control performance, rollback conditions, and residual uncertainty.",
    icon: Radar,
    color: "#0ea5e9",
  },
  {
    short: "ACT",
    title: "Assure, improve, and renew the baseline",
    text: "Record the outcome, update the Production-Risk Case, improve criteria and profiles, preserve learning, and establish the next trusted operating baseline.",
    icon: RefreshCw,
    color: "#24d39a",
  },
];

const operatingFlow = [
  ["01", "Authoritative inputs", "Findings, production state, telemetry, threat intelligence, controls, incidents, recovery assets, and obligations."],
  ["02", "Integrated risk context", "5D Threat Intelligence relates relevance, visibility, action, recovery, and assurance to one Production-Risk Case."],
  ["03", "Shared proving and governance", "SecLabs proves behavior. Risk Governance applies criteria, ownership, authority, exceptions, and evidence requirements."],
  ["04", "Domain execution", "Auto Remediation, SOC Intelligence, Incident Response, Resilience, or Compliance performs the authorized operational action."],
  ["05", "Assurance and learning", "Observed outcomes update evidence, residual risk, monitoring, recovery readiness, and the next trusted baseline."],
];

function FragmentationVisual() {
  return (
    <div className="v29-fragment-visual" aria-label="Fragmented security operating condition">
      <div className="v29-fragment-core">UNLINKED<br />RISK STATE</div>
      {fragmentation.map(([title], index) => (
        <div className={`v29-fragment-node node-${index + 1}`} key={title}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <b>{title}</b>
        </div>
      ))}
      <i className="break break-one" />
      <i className="break break-two" />
      <i className="break break-three" />
      <i className="break break-four" />
    </div>
  );
}

function PdcaVisual({ active, setActive }) {
  return (
    <div className="v29-pdca-visual" aria-label="ProdSecOps risk-based continual improvement lifecycle">
      <div className="v29-pdca-rings" aria-hidden="true" />
      <div className="v29-pdca-core">
        <ShieldCheck />
        <small>PRODSECOPS</small>
        <b>RISK-BASED<br />OPERATING CORE</b>
      </div>
      {pdca.map((item, index) => {
        const Icon = item.icon;
        return (
          <button
            type="button"
            key={item.short}
            className={`v29-pdca-node pdca-${index + 1} ${active === index ? "active" : ""}`}
            style={{ "--pdca": item.color }}
            onMouseEnter={() => setActive(index)}
            onFocus={() => setActive(index)}
            onClick={() => setActive(index)}
          >
            <Icon />
            <span>{item.short}</span>
          </button>
        );
      })}
      <svg className="v29-pdca-path" viewBox="0 0 500 500" aria-hidden="true">
        <circle cx="250" cy="250" r="185" pathLength="100" />
      </svg>
    </div>
  );
}

export default function WhyProdSecOps() {
  const [activePdca, setActivePdca] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(
      () => setActivePdca((value) => (value + 1) % pdca.length),
      4200,
    );
    return () => window.clearInterval(timer);
  }, []);

  const active = pdca[activePdca];

  return (
    <section id="why-prodsecops" className="v29-why">
      <div className="v29-section-intro">
        <span>WHY PRODSECOPS</span>
        <h2>Apply an agile, risk-governed operating model to production security.</h2>
        <p>
          Production security is not one scanner output, one deployment pipeline, or one operations queue. It is a continuous management problem that must relate changing threat conditions, exact production state, service impact, accountable authority, operational action, recovery readiness, and defensible evidence through one integrated context.
        </p>
      </div>

      <div className="v29-fragment-grid">
        <div>
          <span className="v29-kicker">THE OPERATING PROBLEM</span>
          <h3>Security activity is fragmented across tools, teams, records, and decision boundaries.</h3>
          <p>
            Infrastructure security commonly separates vulnerability management, configuration state, SOC monitoring, incident response, change automation, compliance evidence, backup, and recovery. The result is technical activity without one consistent view of the production risk being accepted, changed, monitored, or restored.
          </p>
          <div className="v29-detail-list">
            {fragmentation.map(([title, text]) => (
              <article key={title}><Activity /><div><b>{title}</b><p>{text}</p></div></article>
            ))}
          </div>
        </div>
        <FragmentationVisual />
      </div>

      <div className="v29-devsecops">
        <header>
          <span className="v29-kicker">THE MODEL BOUNDARY</span>
          <h3>DevSecOps secures software delivery. ProdSecOps governs the wider production-security condition.</h3>
          <p>
            DevSecOps creates an agile feedback model for integrating security throughout software planning, development, build, test, release, deployment, and operation. ProdSecOps adopts the same continuous, collaborative operating discipline for infrastructure and production security, but extends the governed context beyond the software pipeline.
          </p>
        </header>

        <div className="v29-model-comparison">
          <article className="v29-model-card devsecops">
            <Code2 />
            <small>SOFTWARE DELIVERY CENTER OF GRAVITY</small>
            <h4>DevSecOps</h4>
            <p>Secures how software is designed, built, tested, packaged, released, deployed, and observed.</p>
            <div>{devSecOps.map((item) => <span key={item}><CheckCircle2 />{item}</span>)}</div>
          </article>

          <div className="v29-model-bridge">
            <GitBranch />
            <b>SHARED AGILE DISCIPLINE</b>
            <span>Continuous collaboration</span>
            <span>Automated evidence</span>
            <span>Short feedback loops</span>
            <span>Repeatable stage gates</span>
            <ArrowRight />
          </div>

          <article className="v29-model-card prodsecops">
            <Layers3 />
            <small>PRODUCTION-RISK CENTER OF GRAVITY</small>
            <h4>ProdSecOps</h4>
            <p>Governs how production-security risk is interpreted, proven, authorized, treated, observed, recovered, and assured.</p>
            <div>{productionGap.map((item) => <span key={item}><CheckCircle2 />{item}</span>)}</div>
          </article>
        </div>
      </div>

      <div className="v29-isms-grid">
        <div className="v29-isms-copy">
          <span className="v29-kicker">ISMS OPERATING REQUIREMENT</span>
          <h3>Turn risk-based information-security management into a continual production operating cycle.</h3>
          <p>
            ISO/IEC 27001 defines requirements for establishing, implementing, maintaining, and continually improving an information security management system. The management system requires organizational context, leadership, responsibilities, actions addressing risks and opportunities, information-security objectives, operational planning, performance evaluation, and improvement.
          </p>
          <p>
            ProdSecOps operationalizes that management intent for infrastructure security. Threat intelligence is not treated as a separate feed. Threat information is interpreted against production relevance, used to influence risk assessment and treatment, validated through controlled scenarios, observed during execution, and returned as evidence and learning.
          </p>
          <div className="v29-isms-principles">
            <span><Database />Defined context and authoritative state</span>
            <span><BrainCircuit />Repeatable risk criteria and integrated assessment</span>
            <span><ShieldCheck />Accountable ownership and authorization</span>
            <span><Radar />Monitoring, measurement, and review</span>
            <span><RefreshCw />Corrective action and continual improvement</span>
          </div>
        </div>

        <div className="v29-pdca-panel">
          <PdcaVisual active={activePdca} setActive={setActivePdca} />
          <div className="v29-pdca-readout" style={{ "--pdca": active.color }}>
            <span>{active.short}</span>
            <h4>{active.title}</h4>
            <p>{active.text}</p>
          </div>
        </div>
      </div>

      <div className="v29-framework-answer">
        <header>
          <span className="v29-kicker">THE PRODSECOPS RESPONSE</span>
          <h3>One Production-Risk Case coordinates risk, security, compliance, and resilience.</h3>
          <p>
            ProdSecOps does not replace scanners, SIEM, SOAR, CI/CD, service management, backup, recovery, or accountable organizational roles. The framework connects those capabilities through common identifiers, trusted production context, defined risk criteria, isolated proving, authorized execution, observation, recovery protection, and outcome assurance.
          </p>
        </header>

        <div className="v29-operating-flow">
          {operatingFlow.map(([number, title, text], index) => (
            <article key={number}>
              <span>{number}</span>
              <div><b>{title}</b><p>{text}</p></div>
              {index < operatingFlow.length - 1 && <ArrowRight aria-hidden="true" />}
            </article>
          ))}
        </div>

        <div className="v29-outcome-strip">
          <Boxes />
          <p>
            <b>Outcome:</b> an agile infrastructure-security operating model in which every material action is risk-informed, state-aware, evidence-supported, human-accountable, observable, reversible, recoverable, and continuously improved.
          </p>
          <Workflow />
        </div>
      </div>
    </section>
  );
}

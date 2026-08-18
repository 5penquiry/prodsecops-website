import { useEffect, useState } from "react";
import {
  Activity,
  ArrowRight,
  Boxes,
  BrainCircuit,
  CheckCircle2,
  CloudCog,
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

const shiftLeft = [
  ["Threat modeling", "Identify design weaknesses, abuse paths, trust boundaries, and security requirements before code is written."],
  ["Secure engineering", "Embed secure coding, dependency controls, secrets protection, and policy checks into development."],
  ["Pipeline assurance", "Automate repeatable testing, artifact integrity, approval evidence, and release controls through CI/CD."],
  ["Runtime feedback", "Return software behavior, defects, and security observations to product and engineering teams."],
];

const productionScope = [
  ["Live state", "Infrastructure, configurations, identities, services, software, dependencies, controls, and approved exceptions."],
  ["Operational intelligence", "Exposure, telemetry, detection coverage, incidents, threat relevance, and changing service conditions."],
  ["Governed action", "Risk criteria, accountable ownership, SecLabs proving, authorization, execution boundaries, and evidence."],
  ["Service assurance", "Rollback, restoration, continuity, recovery objectives, return to service, and residual-risk conclusions."],
];

const lifecycle = [
  ["PLAN", "Context and risk intent", "Establish service context, authoritative state, threat assumptions, risk criteria, ownership, objectives, and evidence expectations.", BrainCircuit, "#3b82f6"],
  ["PROVE", "Validate before material action", "Reconstruct the relevant condition in SecLabs and test applicability, compatibility, monitoring, rollback, and recovery.", TestTube2, "#8b5cf6"],
  ["OPERATE", "Authorize and execute", "Apply accountable authority and perform the approved action through Auto Remediation, SOC, Incident Response, Resilience, or Compliance.", Workflow, "#06b6d4"],
  ["ASSURE", "Observe outcome and improve", "Confirm service health, risk treatment, evidence, recovery readiness, and residual risk, then improve the next operating baseline.", RefreshCw, "#24d39a"],
];

const capabilities = [
  ["01", "Authoritative production context", "Maintains linked service, asset, configuration, dependency, control, exception, telemetry, and recovery references."],
  ["02", "Integrated risk assessment", "Correlates threat relevance, production exposure, service consequence, evidence confidence, treatment readiness, and residual uncertainty."],
  ["03", "Purpose-bound proving", "Uses SecLabs to prove material decisions without transferring risk acceptance, execution authority, or return-to-service accountability."],
  ["04", "Governed domain operations", "Coordinates specialized security domains through shared identifiers, stage gates, accountable roles, and controlled evidence reuse."],
  ["05", "Recovery-protected assurance", "Treats rollback, restoration, continuity, service health, monitoring, and learning as part of the security decision."],
];

function ShiftLeftVisual() {
  return (
    <div className="v30-shift-visual" aria-label="Shift-left product security lifecycle">
      <div className="v30-code-plane">
        <Code2 />
        <small>PRODUCT SECURITY</small>
        <b>SHIFT-LEFT</b>
      </div>
      <div className="v30-pipeline">
        {["DESIGN", "CODE", "BUILD", "TEST", "RELEASE"].map((item, index) => (
          <div key={item} className={`v30-pipeline-node node-${index + 1}`}>
            <span>{String(index + 1).padStart(2, "0")}</span><b>{item}</b>
          </div>
        ))}
        <i className="v30-pipeline-signal" />
      </div>
      <div className="v30-threat-model">
        <BrainCircuit />
        <span>THREAT<br />MODELING</span>
        <small>Design-time risk insight</small>
      </div>
    </div>
  );
}

function ScopeExpansionVisual() {
  return (
    <div className="v30-expansion-visual" aria-label="Expansion from application delivery to production security operations">
      <div className="v30-app-core"><Code2 /><span>APPLICATION<br />DELIVERY</span></div>
      <div className="v30-production-orbit">
        {productionScope.map(([title], index) => (
          <div key={title} className={`v30-orbit-node orbit-${index + 1}`}><span>0{index + 1}</span><b>{title}</b></div>
        ))}
      </div>
      <div className="v30-prodsecops-core"><ShieldCheck /><small>SHIFT-THROUGH</small><b>PRODSECOPS</b></div>
      <svg viewBox="0 0 600 400" aria-hidden="true">
        <path className="v30-expansion-path" pathLength="100" d="M130 200 C230 70 370 70 470 200 C370 330 230 330 130 200Z" />
      </svg>
    </div>
  );
}

function LifecycleVisual({ active, setActive }) {
  return (
    <div className="v30-lifecycle-visual">
      <div className="v30-life-core"><ShieldCheck /><small>PRODUCTION-RISK CASE</small><b>ONE GOVERNED<br />OPERATING CONTEXT</b></div>
      {lifecycle.map(([name,,, Icon, color], index) => (
        <button
          type="button"
          key={name}
          className={`v30-life-node life-${index + 1} ${active === index ? "active" : ""}`}
          style={{ "--life": color }}
          onMouseEnter={() => setActive(index)}
          onFocus={() => setActive(index)}
          onClick={() => setActive(index)}
        ><Icon /><span>{name}</span></button>
      ))}
      <svg className="v30-life-path" viewBox="0 0 500 500" aria-hidden="true"><circle cx="250" cy="250" r="183" pathLength="100" /></svg>
    </div>
  );
}

export default function WhyProdSecOps() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setActive((value) => (value + 1) % lifecycle.length), 4300);
    return () => window.clearInterval(timer);
  }, []);

  const [phase, title, text,,,] = lifecycle[active];

  return (
    <section id="why-prodsecops" className="v30-why">
      <header className="v30-intro">
        <span>WHY PRODSECOPS</span>
        <h2>Extend Shift-Left security into a governed production-security lifecycle.</h2>
        <p>
          DevSecOps transformed product security by moving security decisions earlier into software design and delivery. ProdSecOps extends that operating principle across the live infrastructure and service environment, creating a continuous model for interpreting risk, proving change, authorizing action, observing outcomes, protecting recovery, and improving assurance.
        </p>
      </header>

      <section className="v30-story-grid shift-left">
        <div className="v30-story-copy">
          <span className="v30-kicker">THE ESTABLISHED PRODUCT-SECURITY MODEL</span>
          <h3>DevSecOps made security an engineering activity, not a final release checkpoint.</h3>
          <p>
            Shift-Left integrates security into the application-development lifecycle. Threat modeling identifies design flaws and abuse paths before code is written. Secure engineering practices, automated pipeline controls, testing, artifact integrity, and runtime feedback create rapid learning loops across product, development, security, and operations teams.
          </p>
          <div className="v30-feature-list">
            {shiftLeft.map(([title, body]) => <article key={title}><CheckCircle2 /><div><b>{title}</b><p>{body}</p></div></article>)}
          </div>
        </div>
        <ShiftLeftVisual />
      </section>

      <section className="v30-story-grid expansion">
        <ScopeExpansionVisual />
        <div className="v30-story-copy">
          <span className="v30-kicker">THE PRODUCTION-SECURITY EXTENSION</span>
          <h3>Infrastructure security needs the same agile discipline across a wider operating scope.</h3>
          <p>
            The software-delivery pipeline remains essential, but production security also depends on the exact deployed state, infrastructure configuration, identities, service dependencies, threat exposure, telemetry, incidents, control obligations, rollback assets, and recovery readiness. These conditions continue to change after an application is released and require decisions that extend beyond development ownership.
          </p>
          <p>
            ProdSecOps applies a Shift-Through model: security context and accountability move continuously through planning, proving, authorization, domain operations, observation, recovery, and assurance. The objective is not to replace DevSecOps, IT service management, SOC, incident response, or resilience processes. The objective is to coordinate those responsibilities through one production-risk context.
          </p>
          <div className="v30-scope-grid">
            {productionScope.map(([title, body]) => <article key={title}><b>{title}</b><p>{body}</p></article>)}
          </div>
        </div>
      </section>

      <section className="v30-isms">
        <header>
          <span className="v30-kicker">RISK-BASED ISMS OPERATIONALIZATION</span>
          <h3>Connect risk assessment, threat intelligence, operational action, and continual improvement.</h3>
          <p>
            ISO/IEC 27001 requires an organization to establish, implement, maintain, and continually improve an information security management system. ProdSecOps supports that management intent at the production-security layer by linking organizational context, risk criteria, objectives, accountable roles, operational planning, evidence, performance evaluation, corrective action, and improvement to the live service condition.
          </p>
          <p>
            Threat intelligence becomes decision context rather than a separate feed. Intelligence is evaluated against production relevance, service consequence, observability, treatment options, and recovery conditions. The resulting assessment guides what must be proved, who must authorize it, how the operational domain executes it, and what evidence is required to conclude the outcome.
          </p>
        </header>

        <div className="v30-life-grid">
          <LifecycleVisual active={active} setActive={setActive} />
          <div className="v30-life-readout" style={{ "--life": lifecycle[active][5] }}>
            <span>{phase}</span><h4>{title}</h4><p>{text}</p>
            <div>
              <span><Database />Authoritative state</span>
              <span><BrainCircuit />Integrated risk criteria</span>
              <span><Radar />Threat and operational intelligence</span>
              <span><ShieldCheck />Accountable authority</span>
              <span><RefreshCw />Continual improvement</span>
            </div>
          </div>
        </div>
      </section>

      <section className="v30-capability">
        <header>
          <span className="v30-kicker">THE PRODSECOPS CAPABILITY</span>
          <h3>One framework connecting five security domains through a Production-Risk Case.</h3>
          <p>
            ProdSecOps provides the shared operating structure needed to coordinate Auto Remediation, SOC Intelligence, Incident Response, Resilience, and Compliance while preserving domain-specific authority. Every material decision remains traceable from source evidence and risk criteria through proving, approval, execution, monitoring, recovery, and residual-risk assurance.
          </p>
        </header>
        <div className="v30-capability-flow">
          {capabilities.map(([number, title, body], index) => (
            <article key={number}><span>{number}</span><div><b>{title}</b><p>{body}</p></div>{index < capabilities.length - 1 && <ArrowRight />}</article>
          ))}
        </div>
        <div className="v30-outcome">
          <CloudCog />
          <p><b>Enterprise outcome:</b> infrastructure-security operations gain the agility associated with DevSecOps while retaining the governance, evidence, service protection, recovery discipline, and accountability required for production-risk management.</p>
          <Layers3 />
        </div>
      </section>
    </section>
  );
}

import { useEffect, useState } from "react";
import {
  Activity,
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  Code2,
  Database,
  Eye,
  FileCheck2,
  Gauge,
  GitBranch,
  Layers3,
  Radar,
  RefreshCw,
  RotateCcw,
  ShieldCheck,
  TestTube2,
  Workflow,
  Wrench,
} from "lucide-react";

const devSecOpsCapabilities = [
  ["Threat modeling", "Identify design weaknesses, abuse paths, trust boundaries, and security requirements before implementation."],
  ["Secure development", "Integrate secure coding, dependency controls, secrets protection, and review into engineering practices."],
  ["CI/CD assurance", "Automate software testing, artifact integrity, release evidence, and deployment controls."],
  ["Application feedback", "Return defects and runtime observations to product and engineering teams for rapid improvement."],
];

const prodSecOpsCapabilities = [
  ["Production context", "Relate infrastructure, configuration, identity, service, dependency, control, exception, and recovery state."],
  ["5D risk intelligence", "Analyze threat relevance, observability, response readiness, recoverability, and assurance evidence together."],
  ["Governed operations", "Coordinate proving, authority, execution, monitoring, rollback, recovery, and residual-risk decisions."],
  ["Continual assurance", "Convert operational outcomes into evidence, learning, improved criteria, and a renewed trusted baseline."],
];

const dimensions = [
  ["ANTICIPATE", "Threat relevance", "Which threat conditions and attack paths are relevant to the exact production state?", "#3b82f6"],
  ["OBSERVE", "Operational visibility", "Is the condition detectable, measurable, and observable before, during, and after action?", "#06b6d4"],
  ["RESPOND", "Treatment readiness", "What treatment, containment, escalation, authority, and execution boundaries are required?", "#8b5cf6"],
  ["RESTORE", "Recovery confidence", "Can the service be rolled back, reconstructed, recovered, and returned safely to operation?", "#24d39a"],
  ["PROVE", "Assurance evidence", "What attributable evidence supports the decision, execution, outcome, and residual-risk conclusion?", "#f0b94b"],
];

const stages = [
  ["01", "Establish context", "Define service scope, objectives, risk criteria, ownership, obligations, and evidence requirements.", "PLAN", Layers3],
  ["02", "Acquire trusted state", "Collect attributable production configuration, dependencies, telemetry, controls, exceptions, and recovery references.", "PLAN", Database],
  ["03", "Analyze 5D risk", "Correlate threat relevance, visibility, response, restoration, and proof into an integrated risk position.", "PLAN", BrainCircuit],
  ["04", "Prove in SecLabs", "Validate applicability, compatibility, monitoring, rollback, recovery, and evidence before material action.", "DO", TestTube2],
  ["05", "Authorize treatment", "Apply accountable risk, service, control, incident, and recovery authority to the proposed operation.", "DO", FileCheck2],
  ["06", "Execute domain operation", "Perform the approved action through Auto Remediation, SOC, Incident Response, Resilience, or Compliance.", "DO", Wrench],
  ["07", "Observe and recover", "Confirm technical outcome, service health, monitoring behavior, rollback conditions, and recovery readiness.", "CHECK", Eye],
  ["08", "Assure and improve", "Conclude residual risk, preserve evidence, improve criteria and playbooks, and renew the trusted baseline.", "ACT", RefreshCw],
];

function ModelDistinctionVisual() {
  return (
    <div className="v31-distinction-visual" aria-label="DevSecOps and ProdSecOps model distinction">
      <div className="v31-model dev">
        <Code2 />
        <small>APPLICATION DEVELOPMENT</small>
        <b>DEVSECOPS</b>
        <span>PLAN · CODE · BUILD · TEST · RELEASE · DEPLOY</span>
      </div>

      <div className="v31-evolution-bridge">
        <GitBranch />
        <b>WORKFLOW PRINCIPLES EVALUATED</b>
        <span>Agility</span><span>Collaboration</span><span>Automation</span><span>Feedback</span>
        <ArrowRight />
      </div>

      <div className="v31-model prod">
        <ShieldCheck />
        <small>INFRASTRUCTURE SECURITY OPERATIONS</small>
        <b>PRODSECOPS</b>
        <span>ANALYZE · PROVE · GOVERN · OPERATE · RECOVER · ASSURE</span>
      </div>

      <svg viewBox="0 0 900 350" aria-hidden="true">
        <path className="v31-dev-path" pathLength="100" d="M150 175 C290 30 365 30 450 175" />
        <path className="v31-prod-path" pathLength="100" d="M450 175 C535 320 610 320 750 175" />
      </svg>
    </div>
  );
}

function FiveDVisual({ active, setActive }) {
  return (
    <div className="v31-five-d-visual" aria-label="Five-dimensional threat intelligence analysis">
      <div className="v31-five-d-core">
        <Radar />
        <small>5D THREAT INTELLIGENCE</small>
        <b>INTEGRATED<br />RISK ANALYSIS</b>
      </div>

      {dimensions.map(([name,,, color], index) => (
        <button
          type="button"
          key={name}
          className={`v31-dimension dimension-${index + 1} ${active === index ? "active" : ""}`}
          style={{ "--dimension": color }}
          onMouseEnter={() => setActive(index)}
          onFocus={() => setActive(index)}
          onClick={() => setActive(index)}
        >
          <span>0{index + 1}</span>
          <b>{name}</b>
        </button>
      ))}

      <svg className="v31-five-d-path" viewBox="0 0 520 520" aria-hidden="true">
        <polygon points="260,35 474,191 392,443 128,443 46,191" />
        <path pathLength="100" d="M260 35L474 191L392 443L128 443L46 191Z" />
      </svg>
    </div>
  );
}

function EightStageVisual({ activeStage, setActiveStage }) {
  return (
    <div className="v31-stage-visual" aria-label="Eight-stage ProdSecOps workflow mapped to Plan Do Check Act">
      <div className="v31-stage-core">
        <Workflow />
        <small>PRODSECOPS</small>
        <b>8-STAGE<br />WORKFLOW</b>
      </div>

      {stages.map(([number, title,,, Icon], index) => (
        <button
          type="button"
          key={number}
          className={`v31-stage stage-${index + 1} ${activeStage === index ? "active" : ""}`}
          style={{ "--angle": `${index * 45}deg` }}
          onMouseEnter={() => setActiveStage(index)}
          onFocus={() => setActiveStage(index)}
          onClick={() => setActiveStage(index)}
        >
          <Icon />
          <span>{number}</span>
          <b>{title}</b>
        </button>
      ))}

      <svg className="v31-stage-path" viewBox="0 0 600 600" aria-hidden="true">
        <circle cx="300" cy="300" r="235" pathLength="100" />
      </svg>
    </div>
  );
}

export default function WhyProdSecOps() {
  const [activeDimension, setActiveDimension] = useState(0);
  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
    const dimensionTimer = window.setInterval(
      () => setActiveDimension((value) => (value + 1) % dimensions.length),
      3600,
    );
    const stageTimer = window.setInterval(
      () => setActiveStage((value) => (value + 1) % stages.length),
      3100,
    );
    return () => {
      window.clearInterval(dimensionTimer);
      window.clearInterval(stageTimer);
    };
  }, []);

  const [dimensionName, dimensionTitle, dimensionText, dimensionColor] = dimensions[activeDimension];
  const [stageNumber, stageTitle, stageText, stagePdca] = stages[activeStage];

  return (
    <section id="why-prodsecops" className="v31-why">
      <header className="v31-intro">
        <span>WHY PRODSECOPS</span>
        <h2>A systematic operating framework for risk-driven infrastructure security.</h2>
        <p>
          ProdSecOps is a continuous security-operations framework for infrastructure and production environments. The framework evaluates the agile workflow principles demonstrated by DevSecOps and applies those principles to a different operating objective: integrated threat analysis, accountable risk management, controlled security operations, recovery protection, evidence, and continual improvement across the production lifecycle.
        </p>
      </header>

      <section className="v31-distinction">
        <header>
          <span className="v31-kicker">MODEL DISTINCTION</span>
          <h3>DevSecOps secures application development. ProdSecOps structures infrastructure security operations.</h3>
          <p>
            DevSecOps integrates product security into software planning, design, coding, build, test, release, deployment, and runtime feedback. Threat modeling is a defining Shift-Left practice because design weaknesses and abuse paths can be addressed before implementation. ProdSecOps is not a Shift-Left development model: ProdSecOps does not develop or deploy an application. ProdSecOps governs the continuously changing security condition of live infrastructure, services, identities, configurations, telemetry, controls, incidents, and recovery capabilities.
          </p>
        </header>

        <ModelDistinctionVisual />

        <div className="v31-model-grid">
          <article className="dev">
            <Code2 />
            <span>DEVSECOPS</span>
            <h4>Product-security workflow</h4>
            <p>Center of gravity: secure application engineering and software delivery.</p>
            <div>{devSecOpsCapabilities.map(([title, body]) => <section key={title}><CheckCircle2 /><div><b>{title}</b><p>{body}</p></div></section>)}</div>
          </article>

          <article className="prod">
            <ShieldCheck />
            <span>PRODSECOPS</span>
            <h4>Infrastructure-security operating framework</h4>
            <p>Center of gravity: continuous, risk-driven security management and operations for production infrastructure.</p>
            <div>{prodSecOpsCapabilities.map(([title, body]) => <section key={title}><CheckCircle2 /><div><b>{title}</b><p>{body}</p></div></section>)}</div>
          </article>
        </div>

        <div className="v31-principle-strip">
          <GitBranch />
          <p><b>What ProdSecOps carries forward:</b> cross-functional collaboration, short feedback loops, repeatable workflow stages, automation where authorized, evidence by design, and continual learning.</p>
          <ArrowRight />
          <p><b>What ProdSecOps adds:</b> integrated risk criteria, exact production state, five-dimensional threat intelligence, accountable authority, SecLabs proving, rollback, recovery, and residual-risk assurance.</p>
        </div>
      </section>

      <section className="v31-five-d-section">
        <div className="v31-five-d-copy">
          <span className="v31-kicker">THE PRODSECOPS ANALYTICAL CORE</span>
          <h3>5D Threat Intelligence converts threat information into an integrated production-risk position.</h3>
          <p>
            The core of ProdSecOps is not a generic severity score and not a standalone threat feed. Five-dimensional analysis evaluates a security condition through five connected operational questions. The resulting context supports risk prioritization, treatment selection, detection and response planning, recovery readiness, authority, and assurance across all ProdSecOps domains.
          </p>
          <div className="v31-dimension-readout" style={{ "--dimension": dimensionColor }}>
            <span>{dimensionName}</span>
            <h4>{dimensionTitle}</h4>
            <p>{dimensionText}</p>
          </div>
          <div className="v31-five-d-outcomes">
            <span><Gauge />Risk relevance</span>
            <span><Activity />Operational consequence</span>
            <span><FileCheck2 />Decision evidence</span>
            <span><ShieldCheck />Accountable authority</span>
            <span><RotateCcw />Recovery confidence</span>
          </div>
        </div>
        <FiveDVisual active={activeDimension} setActive={setActiveDimension} />
      </section>

      <section className="v31-isms">
        <header>
          <span className="v31-kicker">ISO/IEC 27001 MANAGEMENT-SYSTEM CONTEXT</span>
          <h3>Translate risk-based ISMS intent into repeatable production-security operations.</h3>
          <p>
            ISO/IEC 27001 requires an organization to establish, implement, maintain, and continually improve an information security management system. ProdSecOps supports that management-system perspective by connecting organizational and service context, risk criteria, objectives, accountable responsibilities, operational planning, performance evidence, corrective action, and improvement to the exact production condition.
          </p>
          <p>
            ProdSecOps does not replace the ISMS and does not itself establish conformity or certification. ProdSecOps provides a structured operational method for executing infrastructure-security activities consistently with risk-based management and Plan-Do-Check-Act continual improvement.
          </p>
        </header>

        <div className="v31-pdca-map">
          <article className="plan"><span>PLAN</span><b>Stages 01–03</b><p>Establish context, acquire trusted state, and analyze five-dimensional risk.</p></article>
          <article className="do"><span>DO</span><b>Stages 04–06</b><p>Prove the operation, obtain authority, and execute through the responsible domain.</p></article>
          <article className="check"><span>CHECK</span><b>Stage 07</b><p>Observe technical effectiveness, service health, monitoring, rollback, and recovery.</p></article>
          <article className="act"><span>ACT</span><b>Stage 08</b><p>Assure residual risk, preserve evidence, improve the operating model, and renew the baseline.</p></article>
        </div>

        <IsoPdcaInfinityWorkflow />
      </div>
      </section>

      <section className="v31-enterprise-outcome">
        <div><Radar /><span>5D INTELLIGENCE</span><b>Integrated risk analysis</b></div>
        <ArrowRight />
        <div><Workflow /><span>8-STAGE WORKFLOW</span><b>Systematic security operations</b></div>
        <ArrowRight />
        <div><RefreshCw /><span>PDCA ASSURANCE</span><b>Continual improvement</b></div>
        <ArrowRight />
        <div><ShieldCheck /><span>ENTERPRISE OUTCOME</span><b>Risk-driven infrastructure security</b></div>
      </section>
    </section>
  );
}

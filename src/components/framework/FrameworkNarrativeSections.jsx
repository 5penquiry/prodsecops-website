import {
  Activity,
  Boxes,
  BrainCircuit,
  CheckCircle2,
  CloudCog,
  Code2,
  Database,
  Network,
  Radar,
  RefreshCw,
  ShieldCheck,
  TestTube2,
  Workflow,
} from "lucide-react";
import GlowCard from "../common/GlowCard";
import SectionHeader from "../common/SectionHeader";

const problems = [
  "Generic severity is frequently treated as organizational risk without production relevance or service impact.",
  "Findings, exact configuration, application dependencies, monitoring, exceptions, and recovery assets remain distributed across different systems.",
  "A technically valid remediation can be incompatible with the deployed production state or can introduce unacceptable service consequences.",
  "CI/CD can confirm command completion without proving risk reduction, monitoring effectiveness, rollback readiness, or recoverability.",
  "Evidence and residual-risk decisions can remain fragmented across tickets without an accountable Production-Risk Case.",
];

const principles = [
  ["01", "Integrated governance", "Operate production security as part of organizational governance, risk management, service management, continuity, and continual improvement."],
  ["02", "Integrated domain risk", "Maintain distinct domain conclusions while correlating Remediation, SOC, Incident Response, Resilience, and Compliance through one risk context."],
  ["03", "CIA and service protection", "Protect confidentiality, integrity, availability, service objectives, evidence integrity, automation packages, and recovery assets."],
  ["04", "Exact state and best information", "Use current, attributable production state, dependencies, telemetry, threat context, exceptions, and recovery readiness."],
  ["05", "Prove before production", "Validate material actions in a purpose-bound SecLabs environment when uncertainty, complexity, novelty, or impact requires proving."],
  ["06", "Controlled operational reuse", "Reuse compatible acquisition, reconstruction, telemetry, and evidence without merging purpose, authority, access, or residual-risk ownership."],
  ["07", "Shared tasks, clear accountability", "Coordinate work through one lifecycle while retaining explicit risk, service, control, incident, recovery, and return-to-service authority."],
  ["08", "Recovery-protected action", "Include rollback, restoration, dependency recovery, continuity, and return-to-service conditions in material decisions."],
  ["09", "Evidence and explainability", "Preserve traceability from source and criteria through validation, authority, execution, monitoring, recovery, and residual risk."],
  ["10", "Continual operational learning", "Use tests, alerts, incidents, treatments, exceptions, and exercises to improve future criteria, profiles, packages, and playbooks."],
];

const benefits = [
  "Integrated production-risk visibility",
  "Defensible context-aware prioritization",
  "Safer state-matched automation",
  "Reduced duplicated preparation",
  "Better SOC and monitoring alignment",
  "Stronger incident readiness",
  "Tested rollback and recovery confidence",
  "Improved compliance assurance",
  "Traceable authority and evidence",
  "Accountable AI assistance",
  "Continual operational learning",
];

export function FrameworkIntroduction() {
  return (
    <>
      <section id="why-prodsecops" className="pso-narrative-section pso-narrative-dark">
        <div className="pso-narrative-container">
          <SectionHeader
            eyebrow="WHY PRODSECOPS"
            title="Why infrastructure security needs a governed operating framework"
            body="Production security is a cross-functional risk activity. Findings, service state, monitoring, incident response, compliance, change automation, backup, and recovery cannot be governed reliably as isolated technical workflows."
          />

          <div className="pso-narrative-split">
            <GlowCard color="#ff806f" className="p-7">
              <Activity className="h-9 w-9 text-orange-300" />
              <h3 className="pso-narrative-title">The fragmented operating condition</h3>
              <div className="pso-problem-list">
                {problems.map((problem) => (
                  <p key={problem}><span />{problem}</p>
                ))}
              </div>
            </GlowCard>

            <GlowCard color="#38e2a8" className="p-7">
              <ShieldCheck className="h-9 w-9 text-emerald-300" />
              <h3 className="pso-narrative-title">The governed operating response</h3>
              <p className="pso-narrative-copy">
                ProdSecOps establishes one Production-Risk Case that links
                authoritative context, organizational risk criteria, accountable
                ownership, isolated proving, authorized execution, continuous
                observation, rollback and recovery protection, and Stage 08
                outcome assurance.
              </p>
              <div className="pso-capability-grid">
                {["Authoritative context", "Risk criteria", "Accountable authority", "Isolated proving", "Controlled execution", "Continuous observation", "Recovery protection", "Outcome assurance"].map((item, index) => (
                  <div key={item}><b>{String(index + 1).padStart(2, "0")}</b><span>{item}</span></div>
                ))}
              </div>
            </GlowCard>
          </div>
        </div>
      </section>

      <section id="what-is-prodsecops" className="pso-narrative-section">
        <div className="pso-narrative-container">
          <SectionHeader
            eyebrow="FRAMEWORK DEFINITION"
            title="What ProdSecOps is"
            body="A production-risk operating framework, not another scanner, universal data repository, pipeline, or monitoring platform."
          />
          <div className="pso-definition-grid">
            <article><BrainCircuit /><b>Risk-driven framework</b><p>Governs security conditions that exist in, affect, or depend on production systems by connecting technical evidence to business services, organizational criteria, authority, recovery, and residual risk.</p></article>
            <article><Network /><b>Integration model</b><p>Coordinates scanners, CPDB, package repositories, SecLabs, SIEM, SOAR, CI/CD, backup platforms, continuity processes, and accountable roles without replacing their authoritative responsibilities.</p></article>
            <article><Database /><b>Production-Risk Case</b><p>Maintains the linked record of affected state, domain evidence, risk criteria, decisions, exceptions, execution conditions, monitoring obligations, recovery references, and assurance outcomes.</p></article>
          </div>
        </div>
      </section>

      <section id="prodsecops-devsecops" className="pso-narrative-section pso-narrative-dark">
        <div className="pso-narrative-container">
          <SectionHeader
            eyebrow="PRODSECOPS AND DEVSECOPS"
            title="Complementary operating models with different centers of gravity"
            body="DevSecOps secures how software is produced and delivered. ProdSecOps governs how production-security risk is interpreted, proven, authorized, treated, monitored, recovered, and assured."
          />
          <div className="pso-compare-grid">
            <GlowCard color="#4f9fff" className="p-7">
              <Code2 className="h-9 w-9 text-blue-300" />
              <h3 className="pso-narrative-title">DevSecOps</h3>
              <p className="pso-narrative-copy">Integrates security into planning, development, build, test, packaging, release, deployment, software supply, pipeline controls, and runtime feedback.</p>
              <div className="pso-chip-row">{["Plan", "Develop", "Build", "Test", "Release", "Deploy", "Operate"].map((item) => <span key={item}>{item}</span>)}</div>
            </GlowCard>
            <GlowCard color="#38e2a8" className="p-7">
              <CloudCog className="h-9 w-9 text-emerald-300" />
              <h3 className="pso-narrative-title">ProdSecOps</h3>
              <p className="pso-narrative-copy">Governs the live production condition across infrastructure, configuration, identities, dependencies, findings, telemetry, incidents, compliance, exceptions, rollback, recovery, and return to service.</p>
              <div className="pso-chip-row">{["Interpret", "Prove", "Authorize", "Execute", "Observe", "Recover", "Assure"].map((item) => <span key={item}>{item}</span>)}</div>
            </GlowCard>
          </div>
          <div className="pso-integration-strip">They integrate through signed artifacts, infrastructure as code, security as code, CI/CD, deployment evidence, runtime telemetry, exact configuration state, and rollback and recovery assets.</div>
        </div>
      </section>
    </>
  );
}

export function IntegrationNarrative() {
  const sources = [
    [Activity, "Security platforms", "Observed findings, exposure, and product-specific technical evidence"],
    [Database, "CPDB", "Governed assets, services, configuration, ownership, packages, and dependencies"],
    [Boxes, "CaBC and trusted packages", "Approved material for reconstruction, treatment, rollback, and recovery"],
    [TestTube2, "SecLabs", "Controlled applicability, treatment, monitoring, compatibility, rollback, and recovery evidence"],
    [Radar, "SIEM and SOAR", "Telemetry, alerts, correlation, orchestration events, and incident records"],
    [BrainCircuit, "RGSM", "Risk case, criteria, authority, exception, execution conditions, residual risk, and assurance"],
  ];

  return (
    <section id="integration-model" className="pso-narrative-section pso-narrative-dark">
      <div className="pso-narrative-container">
        <SectionHeader
          eyebrow="INTEGRATION FUNCTION"
          title="Authoritative by responsibility, coordinated by the Production-Risk Case"
          body="Each connected platform remains authoritative for its own operational evidence. RGSM links those responsibilities to the governed decision without pretending to replace every source system."
        />
        <div className="pso-source-grid">
          {sources.map(([Icon, title, text]) => (
            <article key={title}><Icon /><b>{title}</b><p>{text}</p></article>
          ))}
        </div>
        <div className="pso-object-strip">
          {["Case identifiers", "Asset-service relationships", "Package versions", "Domain tickets", "Risk-criteria versions", "Scenario identifiers", "Evidence references", "ARCT records", "Monitoring profiles", "Recovery references", "Stage gates"].map((item) => <span key={item}>{item}</span>)}
        </div>
      </div>
    </section>
  );
}

export function OperatingModelNarrative() {
  const dimensions = [
    ["Anticipate", "Correlates exposure, service criticality, threat relevance, emerging attack paths, and changing production conditions."],
    ["Observe", "Determines telemetry availability, detection coverage, drift visibility, treatment observability, and recovery monitoring."],
    ["Respond", "Evaluates treatment, containment, escalation, execution boundaries, communication, and accountable response authority."],
    ["Restore", "Evaluates rollback, reconstruction, dependencies, recovery objectives, service health, and return-to-service confidence."],
    ["Prove", "Preserves source provenance, criteria, test evidence, authority, execution evidence, assurance, and residual-risk conclusions."],
  ];

  return (
    <>
      <section id="seclabs-shared-context" className="pso-narrative-section">
        <div className="pso-narrative-container">
          <SectionHeader
            eyebrow="SECLABS SHARED PROVING"
            title="Reuse one authorized reconstruction without merging domain accountability"
            body="SecLabs can reuse compatible GoldenVault context across several tests, but every scenario remains purpose-bound, access-controlled, evidence-specific, and linked to the relevant domain ticket."
          />
          <div className="pso-seclabs-authority">SecLabs proves. RGSM governs. Authorized roles approve. Enterprise platforms execute.</div>
          <div className="pso-seclabs-grid">
            {["Remediation compatibility", "SIEM behavior", "Incident-playbook simulation", "Compliance-control testing", "Rollback validation", "Recovery proving"].map((item) => <div key={item}><CheckCircle2 /><b>{item}</b></div>)}
          </div>
          <p className="pso-boundary-note"><b>SecLabs does not</b> accept risk, approve exceptions, authorize a production change, activate recovery, close an incident independently, or approve return to service.</p>
        </div>
      </section>

      <section id="five-dimensional-intelligence" className="pso-narrative-section pso-narrative-dark">
        <div className="pso-narrative-container">
          <SectionHeader
            eyebrow="5D INTELLIGENCE ORCHESTRATION"
            title="Drive five operational domains through one traceable risk context"
            body="5D Intelligence does not collapse the operating model into one opaque score. It produces a traceable position describing relevance, impact, evidence confidence, authority, treatment readiness, monitoring obligations, recovery readiness, and residual uncertainty."
          />
          <div className="pso-dimension-grid">
            {dimensions.map(([title, text], index) => (
              <article key={title}><span>0{index + 1}</span><b>{title}</b><p>{text}</p></article>
            ))}
          </div>
          <div className="pso-domain-context"><b>Shared integrated context</b><Workflow /> Remediation <Workflow /> SOC <Workflow /> Incident Response <Workflow /> Resilience <Workflow /> Compliance</div>
        </div>
      </section>
    </>
  );
}

export function PrinciplesBenefitsCoordination() {
  const responsibilities = [
    ["Risk teams", "Define risk criteria and own residual-risk decisions"],
    ["Service owners", "Provide production context and retain service accountability"],
    ["Security teams", "Validate exposure, relevance, and proposed treatment"],
    ["SOC teams", "Define monitoring, correlation, escalation, and observation"],
    ["Incident authorities", "Govern containment, evidence handling, and response"],
    ["Resilience authorities", "Govern rollback, recovery, and return to service"],
    ["Compliance teams", "Interpret obligations, applicability, exceptions, and evidence"],
    ["RGSM", "Links responsibilities without transferring accountable authority"],
  ];

  return (
    <>
      <section id="principles" className="pso-narrative-section">
        <div className="pso-narrative-container">
          <SectionHeader
            eyebrow="PRODSECOPS PRINCIPLES"
            title="Govern every operation through risk, evidence, accountability, and recovery"
            body="The principles define consistent behavior across remediation, monitoring, incident response, resilience, and compliance."
          />
          <div className="pso-principles-grid">
            {principles.map(([n, title, text]) => (
              <article key={n}><span>{n}</span><div><b>{title}</b><p>{text}</p></div></article>
            ))}
          </div>
        </div>
      </section>

      <section id="benefits" className="pso-narrative-section pso-narrative-dark">
        <div className="pso-narrative-container">
          <SectionHeader
            eyebrow="FRAMEWORK BENEFITS"
            title="Convert disconnected security activity into accountable operating outcomes"
            body="Benefits arise from integrated context, controlled reuse, isolated proving, accountable authority, recovery protection, and continual learning."
          />
          <div className="pso-benefits-grid">
            {benefits.map((benefit) => <div key={benefit}><CheckCircle2 /><b>{benefit}</b></div>)}
          </div>
          <p className="pso-measurement-note">Numerical efficiency claims should be published only after measuring baseline effort, reusable tasks and evidence, environment reuse, elapsed time, quality effects, and operational scope.</p>
        </div>
      </section>

      <section id="coordination" className="pso-narrative-section">
        <div className="pso-narrative-container">
          <SectionHeader
            eyebrow="ONE OPERATING CONTEXT"
            title="Coordinate risk, security, compliance, and resilience through one Production-Risk Case"
            body="Shared context enables coordinated decisions while authority remains with the role that is accountable for the affected risk, service, control, incident, recovery, or return-to-service outcome."
          />
          <div className="pso-responsibility-grid">
            {responsibilities.map(([title, text]) => <article key={title}><b>{title}</b><p>{text}</p></article>)}
          </div>
        </div>
      </section>
    </>
  );
}

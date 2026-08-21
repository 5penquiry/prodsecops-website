import { useEffect, useRef, useState } from "react";
import {
  CircleCheck,
  ClipboardList,
  Download,
  FileCheck2,
  PackageOpen,
  RefreshCw,
  Rocket,
  Settings,
  TestTube2,
  TicketCheck,
} from "lucide-react";

const stages = [
  {
    number: "01",
    title: "Audit",
    icon: ClipboardList,
    color: "#00e5ff",
    context: "Plan",
    summary:
      "Establish the governed Production-Risk Case and determine whether the observed condition is relevant to a production service.",
    narrative:
      "Audit converts an external signal, internal finding, service-health event or governance trigger into an accountable case. The stage establishes scope, service ownership, business criticality, initiating evidence and the decision clock before technical work begins.",
    fiveD: [
      "Threat Intelligence contributes signal provenance, threat relevance and exposure hypotheses.",
      "Security Operations contributes the initiating alert, finding or observed condition.",
      "Production Context identifies the affected service, owner, criticality and dependency boundary.",
      "Governance Context establishes case criteria, decision urgency and accountable authority.",
      "Integrated Orchestration creates the case and routes the next authorized activity.",
    ],
    governance:
      "Confirm that the condition meets intake criteria, belongs to a governed production service and has a named accountable owner.",
    secLabs:
      "Not normally invoked. Audit records whether later proving will require a representative SecLabs scenario.",
    access:
      "Case creation and evidence visibility are role-scoped. Sensitive intelligence and service metadata are exposed only to authorized case participants.",
    authority: "Service Owner",
    decision: "Accept for governed analysis, redirect, monitor or close as non-material.",
    output: "Governed scope",
    exit:
      "The affected service, accountable owner, criticality, initiating evidence and required decision time are established.",
    continuity:
      "The case identifier becomes the traceability anchor for every later approval, action, evidence item and recovery result.",
  },
  {
    number: "02",
    title: "Acquire",
    icon: Download,
    color: "#0072ff",
    context: "Plan",
    summary:
      "Acquire the authorized production state, dependencies, packages and evidence references needed for reliable analysis and reconstruction.",
    narrative:
      "Acquire builds the trusted evidence foundation. The stage captures the current configuration, software and infrastructure versions, identity relationships, service dependencies, recovery artifacts and custody information that describe the affected production condition.",
    fiveD: [
      "Threat Intelligence identifies indicators, behaviors and external exposure data that must accompany the state package.",
      "Security Operations contributes alerts, logs, timelines and investigation evidence.",
      "Production Context contributes configuration, runtime, dependency, data-flow and service-health state.",
      "Governance Context defines acquisition scope, handling restrictions, integrity and retention requirements.",
      "Integrated Orchestration coordinates collection and validates completeness before progression.",
    ],
    governance:
      "Verify that acquisition is authorized, purpose-bound, complete, current, attributable and integrity-verifiable.",
    secLabs:
      "The acquired package becomes the authorized source for creating the production-representative SecLabs environment.",
    access:
      "Collection uses read-only or narrowly scoped service identities where possible. Export, decryption and sensitive-data access require explicit roles and auditable approval.",
    authority: "Infrastructure or Platform Owner",
    decision: "Accept the package, request missing state, restrict sensitive content or stop because integrity cannot be established.",
    output: "Trusted state package",
    exit:
      "A complete, versioned and integrity-verifiable package exists with dependencies, evidence references and custody metadata.",
    continuity:
      "The acquired state establishes the pre-change baseline needed for rollback, reconstruction, recovery comparison and assurance.",
  },
  {
    number: "03",
    title: "Build",
    icon: PackageOpen,
    color: "#2948ff",
    context: "Plan",
    summary:
      "Reconstruct a purpose-bound GoldenVault mirror from the approved production-state package.",
    narrative:
      "Build converts trusted production context into an isolated proving environment. The reconstructed environment contains only the systems, identities, dependencies, controls and data characteristics necessary to evaluate the governed case safely.",
    fiveD: [
      "Threat Intelligence defines the adversary behavior and exposure conditions the mirror must represent.",
      "Security Operations defines required telemetry, detections and investigation visibility.",
      "Production Context drives topology, versions, dependencies, service behavior and recovery ordering.",
      "Governance Context approves the reconstruction profile, isolation boundary and permitted test data.",
      "Integrated Orchestration starts the approved build pipeline and records component provenance.",
    ],
    governance:
      "Approve the reconstruction profile and determine whether the mirror has sufficient fidelity for a defensible decision.",
    secLabs:
      "SecLabs is actively invoked. GoldenVault builds the isolated target environment from authorized artifacts and representative synthetic or masked data.",
    access:
      "Build identities receive time-bound permissions to approved artifacts and isolated resources only. Production credentials and unrestricted production data are prohibited.",
    authority: "Validation Authority",
    decision: "Accept the mirror, rebuild with higher fidelity, constrain the test claim or reject the environment as unrepresentative.",
    output: "Isolated target mirror",
    exit:
      "The production-representative environment is active, isolated, observable and traceable to approved source artifacts.",
    continuity:
      "The mirror prepares reliable rollback and recovery rehearsal without introducing risk to live production services.",
  },
  {
    number: "04",
    title: "Deploy",
    icon: Rocket,
    color: "#396afc",
    context: "Do",
    summary:
      "Deploy the scenario, candidate treatment, telemetry, rollback controls and recovery procedures into SecLabs.",
    narrative:
      "Deploy arms the proving environment. The stage introduces the approved threat or failure scenario, candidate security treatment, observability content, operational safeguards and recovery definitions required to measure both security efficacy and production consequences.",
    fiveD: [
      "Threat Intelligence supplies behaviors, indicators and attack-path assumptions for the scenario.",
      "Security Operations supplies detection logic, investigation telemetry and containment criteria.",
      "Production Context supplies service dependencies, health thresholds and operational constraints.",
      "Governance Context supplies authorized scope, success criteria, stopping conditions and evidence requirements.",
      "Integrated Orchestration deploys versioned assets and confirms preconditions before testing.",
    ],
    governance:
      "Confirm that the scenario and treatment are approved, bounded, observable, reversible and aligned with the case decision deadline.",
    secLabs:
      "SecLabs loads the scenario, control versions, expected telemetry, rollback package and recovery procedures into the mirror.",
    access:
      "Deployment uses JIT privileges limited to the isolated environment. Requester, approver and executor duties are separated for high-impact scenarios.",
    authority: "Security Operations or Test Authority",
    decision: "Authorize testing, narrow scope, add safeguards, require more telemetry or return the package for redesign.",
    output: "Armed test scenario",
    exit:
      "The environment contains the approved scenario, treatment, monitoring, stopping conditions, rollback and recovery definitions.",
    continuity:
      "Rollback and recovery are deployed before execution so technical proving cannot advance without a tested return path.",
  },
  {
    number: "05",
    title: "Validate",
    icon: CircleCheck,
    color: "#7b2ff7",
    context: "Do",
    summary:
      "Validate relevance, compatibility, visibility, security efficacy, production safety, rollback and recovery readiness.",
    narrative:
      "Validate proves whether the candidate treatment addresses the relevant condition without creating unacceptable service impact. The stage measures the expected security outcome, side effects, detection coverage, automation boundaries, rollback behavior and recovery performance.",
    fiveD: [
      "Threat Intelligence confirms that the tested behavior remains relevant to the threat hypothesis.",
      "Security Operations verifies detection, containment, investigation and evidence quality.",
      "Production Context measures service health, dependency behavior, customer impact and recovery timing.",
      "Governance Context compares results with approved success, safety and evidence criteria.",
      "Integrated Orchestration captures test results and routes exceptions or failed criteria.",
    ],
    governance:
      "Determine whether evidence is sufficient to support production use, constrained use, redesign, rejection or emergency-only use.",
    secLabs:
      "SecLabs is the primary proving environment for efficacy, production safety, access safety, rollback, recovery and evidence reproducibility.",
    access:
      "Test execution remains purpose-bound and isolated. Automation must enforce preconditions, permitted targets, stopping conditions and credential revocation.",
    authority: "Validation Authority",
    decision: "Validated, validated with constraints, requires improvement, rejected or emergency use only.",
    output: "Validation evidence",
    exit:
      "The treatment has measured efficacy, known constraints, verified rollback and recovery evidence, and a reproducible test record.",
    continuity:
      "Recovery time, recovery point, data integrity and service restart evidence become inputs to the integrated risk decision.",
  },
  {
    number: "06",
    title: "Assess",
    icon: FileCheck2,
    color: "#b224ef",
    context: "Do",
    summary:
      "Translate validation evidence into the integrated risk decision, treatment authority and execution conditions.",
    narrative:
      "Assess combines threat likelihood, evidence confidence, production exposure, business consequence, control weakness, access risk and recovery uncertainty. The stage converts technical results into an accountable operational decision rather than a standalone severity score.",
    fiveD: [
      "Threat Intelligence contributes likelihood, adversary capability and exploitation maturity.",
      "Security Operations contributes evidence confidence, active-condition status and control coverage.",
      "Production Context contributes blast radius, business criticality, customer impact and recovery uncertainty.",
      "Governance Context determines risk appetite, obligations, authority, exceptions and residual-risk acceptance.",
      "Integrated Orchestration packages the authorized pathway, constraints, monitoring and rollback requirements.",
    ],
    governance:
      "Select the justified pathway and identify who may authorize, execute, monitor, stop, roll back or accept residual risk.",
    secLabs:
      "SecLabs evidence establishes treatment confidence and recovery confidence. Unresolved uncertainty may trigger additional testing.",
    access:
      "The decision defines required RBAC role, PAM policy, JIT duration, target scope, separation of duties and emergency-access conditions.",
    authority: "Business Risk Owner or Delegated Authority",
    decision: "Remediate, contain, recover, compensate, monitor, accept temporarily or return for further proving.",
    output: "Authorized risk decision",
    exit:
      "A named authority approves a treatment path with scope, timing, access controls, evidence requirements, rollback and residual-risk conditions.",
    continuity:
      "Recovery readiness is treated as a decision factor. Weak recovery confidence can restrict or delay a high-impact production action.",
  },
  {
    number: "07",
    title: "Execute",
    icon: Settings,
    color: "#12e0a2",
    context: "Check",
    summary:
      "Perform the authorized, state-matched and least-privileged production action while monitoring service health.",
    narrative:
      "Execute applies the approved treatment only when production state, authorization, access scope and safety preconditions match the validated package. The stage coordinates remediation, containment, failover or compensating controls and continuously evaluates whether execution should continue, stop or roll back.",
    fiveD: [
      "Threat Intelligence updates indicators or adversary behavior that may alter execution urgency.",
      "Security Operations monitors containment, detection and evidence of continued malicious activity.",
      "Production Context verifies state match, dependency health, service behavior and blast radius.",
      "Governance Context verifies approval, separation of duties, exception conditions and permissible residual risk.",
      "Integrated Orchestration performs the action, monitors gates and captures complete execution evidence.",
    ],
    governance:
      "Confirm that the package is approved, unexpired, state-matched, within scope and supported by monitoring, rollback and recovery readiness.",
    secLabs:
      "The production action consumes the SecLabs-validated package and constraints. Unexpected behavior can return the case to SecLabs for reproduction.",
    access:
      "PAM issues JIT privileges for approved targets and duration. Sessions are attributable, monitored and revoked immediately after completion or stop conditions.",
    authority: "Change Authority or Emergency Authority",
    decision: "Continue, pause, roll back, fail over, escalate or invoke the emergency pathway.",
    output: "Controlled execution",
    exit:
      "The authorized action completes within scope, production health is acceptable, privileges are revoked and execution evidence is returned.",
    continuity:
      "If service thresholds are crossed, orchestration activates the validated rollback, failover or recovery procedure rather than continuing blindly.",
  },
  {
    number: "08",
    title: "Assure",
    icon: RefreshCw,
    color: "#35cda5",
    context: "Act",
    summary:
      "Verify the security outcome, service health, recovery objectives, evidence completeness, residual risk and trusted baseline.",
    narrative:
      "Assure determines whether the governed case achieved the intended risk and resilience outcome. The stage verifies control effectiveness, production stability, data integrity, recovery performance, privilege closure, evidence completeness and the residual-risk position before closure or continued monitoring.",
    fiveD: [
      "Threat Intelligence confirms whether exposure and adversary opportunity were reduced as expected.",
      "Security Operations confirms no continued compromise and updates detections and investigation knowledge.",
      "Production Context confirms service health, dependency restoration, data integrity and trusted operating state.",
      "Governance Context approves closure, monitoring, exception renewal or further treatment based on residual risk.",
      "Integrated Orchestration seals evidence, updates the baseline and returns learning to the next cycle.",
    ],
    governance:
      "Decide whether the case can close, remain monitored, renew an exception, reopen treatment or escalate because risk remains material.",
    secLabs:
      "Production outcomes are compared with SecLabs expectations. Differences update test scenarios, controls, runbooks and future release constraints.",
    access:
      "All temporary privileges and emergency access are revoked. Session records, approvals and execution evidence are linked to the governed case.",
    authority: "Recovery and Assurance Authority",
    decision: "Close, monitor, reassess, renew exception, return to treatment or initiate a new Audit cycle.",
    output: "Assured closure",
    exit:
      "Risk reduction, service health, recovery objectives, access closure, residual risk and evidence completeness are verified and approved.",
    continuity:
      "The assured outcome, residual risk, updated production state and trusted baseline return to Stage 01 as input to the next continuous cycle.",
  },
];

const labelClasses = [
  "p45-l1",
  "p45-l2",
  "p45-l3",
  "p45-l4",
  "p45-l5",
  "p45-l6",
  "p45-l7",
  "p45-l8",
];

export default function ProdSecOpsEightStageInfinity({
  paused: pausedByParent = false,
  onPauseChange,
}) {
  const [activeStage, setActiveStage] = useState(0);
  const [locallyPaused, setLocallyPaused] = useState(false);
  const beamRef = useRef(null);
  const offsetRef = useRef(0);
  const targetRef = useRef(null);
  const lastTimeRef = useRef(0);
  const activeRef = useRef(0);
  const pausedRef = useRef(false);
  const paused = pausedByParent || locallyPaused;

  useEffect(() => {
    pausedRef.current = paused;
  }, [paused]);

  useEffect(() => {
    let frameId;
    const pathLength = 800;
    const speed = 28;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const animate = (now) => {
      if (!lastTimeRef.current) lastTimeRef.current = now;
      const delta = Math.min((now - lastTimeRef.current) / 1000, 0.05);
      lastTimeRef.current = now;

      if (!pausedRef.current && !reducedMotion.matches) {
        if (targetRef.current !== null) {
          const difference = targetRef.current - offsetRef.current;
          if (Math.abs(difference) < 0.8) {
            offsetRef.current = targetRef.current;
            targetRef.current = null;
          } else {
            offsetRef.current += difference * 10 * delta;
          }
        } else {
          offsetRef.current -= speed * delta;
        }

        if (offsetRef.current <= -pathLength && targetRef.current === null) {
          offsetRef.current += pathLength;
        }

        if (beamRef.current) {
          beamRef.current.style.strokeDashoffset = String(offsetRef.current);
        }

        const normalized =
          ((-offsetRef.current + 50) % pathLength + pathLength) % pathLength;
        const nextStage = Math.floor(normalized / 100);

        if (nextStage !== activeRef.current) {
          activeRef.current = nextStage;
          setActiveStage(nextStage);
        }
      }

      frameId = window.requestAnimationFrame(animate);
    };

    frameId = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  const setPause = (value) => {
    setLocallyPaused(value);
    onPauseChange?.(value);
  };

  const selectStage = (index) => {
    activeRef.current = index;
    setActiveStage(index);

    const pathLength = 800;
    const desired = -(index * 100);
    const cycleBase = Math.ceil(offsetRef.current / -pathLength) * -pathLength;
    let target = cycleBase + desired;

    if (target > offsetRef.current) target -= pathLength;
    targetRef.current = target;
  };

  const active = stages[activeStage];
  const ActiveIcon = active.icon;
  const secLabsActive = activeStage >= 2 && activeStage <= 5;

  return (
    <div className="p45-workflow" style={{ "--active-stage": active.color }}>
      <div className="p45-pdca" aria-label="Plan Do Check Act mapping">
        <span className="plan"><b>PLAN</b>01–03</span>
        <span className="do"><b>DO</b>04–06</span>
        <span className="check"><b>CHECK</b>07</span>
        <span className="act"><b>ACT</b>08</span>
      </div>

      <div
        className="p45-loop"
        onMouseEnter={() => setPause(true)}
        onMouseLeave={() => setPause(false)}
      >
        <div className="p45-watermark p45-prod">PROD</div>
        <div className="p45-watermark p45-ops">OPS</div>

        <svg
          viewBox="0 0 1200 600"
          className="p45-ribbon"
          role="img"
          aria-label="ProdSecOps eight-stage infinity workflow"
        >
          <path
            id="p45-infinity-path"
            pathLength="800"
            fill="none"
            d="M 600 300 C 400 50, 100 50, 100 300 C 100 550, 400 550, 600 300 C 800 50, 1100 50, 1100 300 C 1100 550, 800 550, 600 300 Z"
          />
          <use href="#p45-infinity-path" className="p45-track" />
          {stages.map((stage, index) => (
            <use
              key={stage.number}
              href="#p45-infinity-path"
              className={`p45-segment ${activeStage === index ? "active" : ""}`}
              style={{ "--segment": stage.color }}
              strokeDashoffset={-(index * 100)}
            />
          ))}
          <use ref={beamRef} href="#p45-infinity-path" className="p45-beam" />
        </svg>

        <div className="p45-center">
          <TicketCheck aria-hidden="true" />
          <strong>RISM</strong>
          <span>TICKET ORCHESTRATION</span>
          <small>Risk · Authority · Evidence</small>
        </div>

        {stages.map((stage, index) => {
          const Icon = stage.icon;
          return (
            <button
              type="button"
              key={stage.number}
              className={`p45-label ${labelClasses[index]} ${
                activeStage === index ? "active" : ""
              }`}
              style={{ "--segment": stage.color }}
              aria-current={activeStage === index ? "step" : undefined}
              onClick={() => selectStage(index)}
              onMouseEnter={() => {
                setPause(true);
                selectStage(index);
              }}
              onFocus={() => {
                setPause(true);
                selectStage(index);
              }}
              onBlur={() => setPause(false)}
            >
              <span>{stage.number}</span>
              <Icon aria-hidden="true" />
              <b>{stage.title}</b>
            </button>
          );
        })}
      </div>

      <div className="p45-detail">
        <div className="p45-active-stage">
          <ActiveIcon aria-hidden="true" />
          <div>
            <span>{active.context} · Stage {active.number}</span>
            <h4>{active.title}</h4>
            <p>{active.summary}</p>
          </div>
        </div>

        <div className={`p45-seclabs ${secLabsActive ? "active" : ""}`}>
          <TestTube2 aria-hidden="true" />
          <div>
            <span>SECLABS VALIDATION EXTENSION</span>
            <b>{secLabsActive ? "Invoked by the workflow" : "Available when proving is required"}</b>
            <small>{active.secLabs}</small>
          </div>
        </div>

        <div className="p45-output">
          <span>STAGE OUTPUT</span>
          <b>{active.output}</b>
        </div>
      </div>

      <article
        className="p45-narrative"
        style={{ "--active-stage": active.color }}
        aria-live="polite"
      >
        <header className="p45-narrative-head">
          <div>
            <span>PRODSECOPS 5D STAGE NARRATIVE</span>
            <h4>{active.number} · {active.title}</h4>
          </div>
          <p>{active.narrative}</p>
        </header>

        <div className="p45-narrative-grid">
          <section className="p45-context-card p45-wide">
            <span>5D SHARED CONTEXT CONTRIBUTION</span>
            <ul>
              {active.fiveD.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </section>

          <section className="p45-context-card">
            <span>RISK AND GOVERNANCE DECISION</span>
            <p>{active.governance}</p>
          </section>

          <section className="p45-context-card">
            <span>LEAST PRIVILEGE · RBAC · PAM</span>
            <p>{active.access}</p>
          </section>

          <section className="p45-context-card">
            <span>ACCOUNTABLE AUTHORITY</span>
            <strong>{active.authority}</strong>
            <p>{active.decision}</p>
          </section>

          <section className="p45-context-card">
            <span>EXIT CRITERIA</span>
            <p>{active.exit}</p>
          </section>

          <section className="p45-context-card p45-wide p45-continuity-card">
            <span>RESILIENCE AND CONTINUITY CONNECTION</span>
            <p>{active.continuity}</p>
          </section>
        </div>
      </article>

      <p className="p45-continuity">
        Stage 08 returns the assured outcome, residual risk, evidence, production
        state and trusted baseline to the next Stage 01 cycle.
      </p>
    </div>
  );
}

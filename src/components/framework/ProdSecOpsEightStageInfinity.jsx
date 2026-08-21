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
    phase: "PLAN",
    summary: "Create the governed production-risk case and establish why the condition matters.",
    purpose: "Convert a signal, finding, service event, exception, or intelligence trigger into an accountable case with a defined service boundary and decision clock.",
    contributions: [
      ["Sense", "Threat relevance, provenance, and exposure hypothesis"],
      ["Detect", "Initiating alert, finding, event, and evidence confidence"],
      ["Understand", "Service owner, criticality, dependencies, and scope"],
      ["Decide", "Intake criteria, urgency, obligations, and authority"],
      ["Act", "Case creation, ownership routing, and evidence linkage"],
    ],
    governance: "Confirm that the condition is relevant to a governed production service and requires controlled progression.",
    access: "Role-scoped case access; sensitive intelligence and service metadata are visible only to authorized participants.",
    secLabs: "Record whether later proving requires a representative SecLabs scenario.",
    authority: "Service Owner",
    output: "Governed scope",
    exit: "Service, scope, owner, criticality, initiating evidence, and decision time are established.",
    outcome: "A traceable Production-Risk Case anchors every later decision and evidence item.",
  },
  {
    number: "02",
    title: "Acquire",
    icon: Download,
    color: "#0072ff",
    phase: "PLAN",
    summary: "Acquire authorized production state and create a trusted evidence foundation.",
    purpose: "Capture the configurations, versions, identities, dependencies, telemetry, recovery artifacts, and custody information needed for analysis and reconstruction.",
    contributions: [
      ["Sense", "Indicators, behaviors, and external exposure context"],
      ["Detect", "Alerts, timelines, logs, and investigation evidence"],
      ["Understand", "Runtime state, topology, dependencies, and recovery assets"],
      ["Decide", "Acquisition scope, handling, integrity, and retention rules"],
      ["Act", "Collection orchestration and completeness validation"],
    ],
    governance: "Verify that acquisition is authorized, current, attributable, complete, and integrity-verifiable.",
    access: "Prefer read-only collection identities; export, decryption, and sensitive-data access require explicit approval.",
    secLabs: "The acquired package becomes the approved source for a production-representative mirror.",
    authority: "Infrastructure or Platform Owner",
    output: "Trusted state package",
    exit: "A versioned, integrity-verifiable state package exists with dependencies and evidence references.",
    outcome: "The pre-change baseline supports reconstruction, rollback comparison, recovery, and assurance.",
  },
  {
    number: "03",
    title: "Build",
    icon: PackageOpen,
    color: "#2948ff",
    phase: "PLAN",
    summary: "Reconstruct a purpose-bound GoldenVault mirror from authorized production state.",
    purpose: "Create an isolated environment containing only the systems, identities, controls, data characteristics, and dependencies needed to evaluate the governed case safely.",
    contributions: [
      ["Sense", "Adversary behavior and exposure conditions to represent"],
      ["Detect", "Telemetry, detection, and investigation requirements"],
      ["Understand", "Topology, versions, service behavior, and recovery order"],
      ["Decide", "Reconstruction profile, isolation, and permitted test data"],
      ["Act", "Approved build pipeline and component provenance"],
    ],
    governance: "Approve the reconstruction profile and determine whether fidelity supports a defensible decision.",
    access: "Time-bound build identities access approved artifacts and isolated resources only; production credentials are prohibited.",
    secLabs: "SecLabs is invoked to build the isolated, production-representative GoldenVault environment.",
    authority: "Validation Authority",
    output: "Isolated target mirror",
    exit: "The mirror is active, isolated, observable, and traceable to approved source artifacts.",
    outcome: "Security treatment and recovery can be proven without creating live-production risk.",
  },
  {
    number: "04",
    title: "Deploy",
    icon: Rocket,
    color: "#396afc",
    phase: "DO",
    summary: "Deploy the scenario, treatment candidate, telemetry, rollback, and recovery controls.",
    purpose: "Arm the proving environment with the approved threat or failure scenario and the safeguards needed to measure security efficacy and production consequences.",
    contributions: [
      ["Sense", "Scenario behavior, indicators, and attack-path assumptions"],
      ["Detect", "Detection logic, investigation telemetry, and containment criteria"],
      ["Understand", "Service thresholds, dependency constraints, and recovery rules"],
      ["Decide", "Scope, success criteria, stopping conditions, and evidence needs"],
      ["Act", "Versioned deployment and precondition verification"],
    ],
    governance: "Confirm that the scenario is authorized, bounded, observable, reversible, and aligned to the decision deadline.",
    access: "JIT privileges are limited to the isolated environment; requester, approver, and executor duties remain separated.",
    secLabs: "Load scenario assets, control versions, expected telemetry, rollback package, and recovery procedures.",
    authority: "Security Operations or Test Authority",
    output: "Armed test scenario",
    exit: "Scenario, treatment, monitoring, stopping conditions, rollback, and recovery definitions are ready.",
    outcome: "Technical proving cannot begin without a measurable and reversible return path.",
  },
  {
    number: "05",
    title: "Validate",
    icon: CircleCheck,
    color: "#7b2ff7",
    phase: "DO",
    summary: "Prove security efficacy, production safety, access safety, rollback, and recovery.",
    purpose: "Determine whether the candidate treatment addresses the relevant condition without creating unacceptable service, dependency, data, or operational impact.",
    contributions: [
      ["Sense", "Confirm that tested behavior remains relevant to the threat"],
      ["Detect", "Verify detection, containment, investigation, and evidence quality"],
      ["Understand", "Measure health, blast radius, dependencies, and recovery timing"],
      ["Decide", "Compare evidence with approved safety and release criteria"],
      ["Act", "Capture results and route failed criteria or constraints"],
    ],
    governance: "Classify the treatment as validated, constrained, requiring improvement, rejected, or emergency-only.",
    access: "Automation enforces preconditions, permitted targets, stop conditions, credential boundaries, and revocation.",
    secLabs: "Primary proving stage for efficacy, production safety, access safety, rollback, recovery, and reproducibility.",
    authority: "Validation Authority",
    output: "Validation evidence",
    exit: "Efficacy is measured, constraints are known, and rollback and recovery evidence are reproducible.",
    outcome: "The risk decision is supported by measured treatment and recovery confidence.",
  },
  {
    number: "06",
    title: "Assess",
    icon: FileCheck2,
    color: "#b224ef",
    phase: "DO",
    summary: "Translate evidence into the integrated risk decision and authorized execution conditions.",
    purpose: "Combine threat likelihood, evidence confidence, production impact, control weakness, access risk, obligations, and recovery uncertainty into an accountable decision.",
    contributions: [
      ["Sense", "Likelihood, adversary capability, and exploitation maturity"],
      ["Detect", "Evidence confidence, active-condition status, and coverage"],
      ["Understand", "Criticality, blast radius, customer impact, and recovery uncertainty"],
      ["Decide", "Risk appetite, authority, obligations, exceptions, and residual risk"],
      ["Act", "Authorized pathway, constraints, monitoring, and rollback package"],
    ],
    governance: "Select remediate, contain, compensate, recover, monitor, accept temporarily, or return for further proving.",
    access: "Define the RBAC role, PAM policy, JIT duration, target scope, approvals, and emergency-access conditions.",
    secLabs: "Validation evidence establishes treatment and recovery confidence; uncertainty can trigger further testing.",
    authority: "Business Risk Owner or Delegated Authority",
    output: "Authorized risk decision",
    exit: "A named authority approves scope, timing, access, evidence, rollback, and residual-risk conditions.",
    outcome: "Technical evidence becomes an explainable and auditable operating decision.",
  },
  {
    number: "07",
    title: "Execute",
    icon: Settings,
    color: "#12e0a2",
    phase: "CHECK",
    summary: "Perform the approved, state-matched, least-privileged production action.",
    purpose: "Apply remediation, containment, compensating control, failover, or recovery only when production state, authority, access scope, and safety preconditions match the validated package.",
    contributions: [
      ["Sense", "Update indicators or behavior that may change urgency"],
      ["Detect", "Monitor containment, continued activity, and evidence"],
      ["Understand", "Verify state match, dependencies, health, and blast radius"],
      ["Decide", "Verify approval, duties, exceptions, and residual-risk bounds"],
      ["Act", "Execute, monitor gates, stop or roll back, and capture evidence"],
    ],
    governance: "Verify approval, state match, scope, monitoring, rollback readiness, and recovery readiness before execution.",
    access: "PAM issues JIT privileges for approved targets and duration; sessions are attributable, monitored, and revoked.",
    secLabs: "Production consumes the validated package and constraints; unexpected behavior can return to SecLabs.",
    authority: "Change Authority or Emergency Authority",
    output: "Controlled execution",
    exit: "Action completes within scope, service health is acceptable, access is revoked, and evidence is returned.",
    outcome: "Authorized treatment reduces risk without abandoning production safety or recoverability.",
  },
  {
    number: "08",
    title: "Assure",
    icon: RefreshCw,
    color: "#35cda5",
    phase: "ACT",
    summary: "Verify the outcome, recovery objectives, access closure, residual risk, and trusted baseline.",
    purpose: "Determine whether the case achieved the intended security and resilience outcome and whether closure, monitoring, exception renewal, or further treatment is justified.",
    contributions: [
      ["Sense", "Confirm reduced exposure and adversary opportunity"],
      ["Detect", "Confirm no continued compromise and improve detections"],
      ["Understand", "Confirm service health, data integrity, and trusted state"],
      ["Decide", "Approve closure, monitoring, exception, or further treatment"],
      ["Act", "Seal evidence, update baseline, and return learning"],
    ],
    governance: "Close, monitor, reassess, renew an exception, return to treatment, or initiate a new Audit cycle.",
    access: "Revoke all temporary and emergency access; link approvals, session evidence, and revocation to the case.",
    secLabs: "Compare production outcomes with SecLabs expectations and update scenarios, controls, runbooks, and constraints.",
    authority: "Recovery and Assurance Authority",
    output: "Assured closure",
    exit: "Risk reduction, recovery, service health, access closure, evidence, and residual risk are approved.",
    outcome: "The assured state and learning become input to the next continuous cycle.",
  },
];

const labelClasses = ["p45-l1", "p45-l2", "p45-l3", "p45-l4", "p45-l5", "p45-l6", "p45-l7", "p45-l8"];

export default function ProdSecOpsEightStageInfinity({ paused: pausedByParent = false, onPauseChange }) {
  const [activeStage, setActiveStage] = useState(0);
  const [locallyPaused, setLocallyPaused] = useState(false);
  const [detailsOpen, setDetailsOpen] = useState(true);
  const beamRef = useRef(null);
  const offsetRef = useRef(0);
  const targetRef = useRef(null);
  const lastTimeRef = useRef(0);
  const activeRef = useRef(0);
  const pausedRef = useRef(false);
  const paused = pausedByParent || locallyPaused;

  useEffect(() => { pausedRef.current = paused; }, [paused]);

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

        if (offsetRef.current <= -pathLength && targetRef.current === null) offsetRef.current += pathLength;
        if (beamRef.current) beamRef.current.style.strokeDashoffset = String(offsetRef.current);

        const normalized = ((-offsetRef.current + 50) % pathLength + pathLength) % pathLength;
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

      <div className="p45-loop" onMouseEnter={() => setPause(true)} onMouseLeave={() => setPause(false)}>
        <div className="p45-watermark p45-prod">PROD</div>
        <div className="p45-watermark p45-ops">OPS</div>
        <svg viewBox="0 0 1200 600" className="p45-ribbon" role="img" aria-label="ProdSecOps eight-stage infinity workflow">
          <path id="p45-infinity-path" pathLength="800" fill="none" d="M 600 300 C 400 50, 100 50, 100 300 C 100 550, 400 550, 600 300 C 800 50, 1100 50, 1100 300 C 1100 550, 800 550, 600 300 Z" />
          <use href="#p45-infinity-path" className="p45-track" />
          {stages.map((stage, index) => (
            <use key={stage.number} href="#p45-infinity-path" className={`p45-segment ${activeStage === index ? "active" : ""}`} style={{ "--segment": stage.color }} strokeDashoffset={-(index * 100)} />
          ))}
          <use ref={beamRef} href="#p45-infinity-path" className="p45-beam" />
        </svg>

        <div className="p45-center">
          <TicketCheck aria-hidden="true" />
          <strong>RISM</strong>
          <span>CASE ORCHESTRATION</span>
          <small>Risk · Authority · Evidence</small>
        </div>

        {stages.map((stage, index) => {
          const Icon = stage.icon;
          return (
            <button type="button" key={stage.number} className={`p45-label ${labelClasses[index]} ${activeStage === index ? "active" : ""}`} style={{ "--segment": stage.color }} aria-current={activeStage === index ? "step" : undefined} onClick={() => selectStage(index)} onMouseEnter={() => { setPause(true); selectStage(index); }} onFocus={() => { setPause(true); selectStage(index); }} onBlur={() => setPause(false)}>
              <span>{stage.number}</span><Icon aria-hidden="true" /><b>{stage.title}</b>
            </button>
          );
        })}
      </div>

      <section className="p45-stage-summary" aria-live="polite">
        <div className="p45-summary-main">
          <div className="p45-summary-icon"><ActiveIcon aria-hidden="true" /></div>
          <div>
            <span>{active.phase} · STAGE {active.number}</span>
            <h4>{active.title}</h4>
            <p>{active.summary}</p>
          </div>
        </div>
        <div className={`p45-seclabs ${secLabsActive ? "active" : ""}`}>
          <TestTube2 aria-hidden="true" />
          <div><span>SECLABS</span><b>{secLabsActive ? "Active proving stage" : "Available when required"}</b><small>{active.secLabs}</small></div>
        </div>
        <div className="p45-output"><span>STAGE OUTPUT</span><b>{active.output}</b></div>
      </section>

      <article className="p45-narrative" aria-live="polite">
        <header className="p45-narrative-head">
          <div><span>STAGE PURPOSE</span><h4>{active.number} · {active.title}</h4></div>
          <p>{active.purpose}</p>
          <button type="button" onClick={() => setDetailsOpen((value) => !value)} aria-expanded={detailsOpen}>{detailsOpen ? "Hide detailed controls" : "Show detailed controls"}</button>
        </header>

        <div className="p45-five-d">
          {active.contributions.map(([dimension, text]) => (
            <div key={dimension}><span>{dimension}</span><p>{text}</p></div>
          ))}
        </div>

        {detailsOpen && (
          <div className="p45-control-grid">
            <section><span>GOVERNANCE GATE</span><p>{active.governance}</p></section>
            <section><span>LEAST PRIVILEGE · RBAC · PAM</span><p>{active.access}</p></section>
            <section><span>ACCOUNTABLE AUTHORITY</span><strong>{active.authority}</strong></section>
            <section><span>EXIT CRITERIA</span><p>{active.exit}</p></section>
            <section className="p45-wide"><span>ASSURED OUTCOME AND CONTINUITY</span><p>{active.outcome}</p></section>
          </div>
        )}
      </article>

      <p className="p45-continuity">Stage 08 returns the assured outcome, residual risk, evidence, production state, and trusted baseline to the next Stage 01 cycle.</p>
    </div>
  );
}

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
    summary: "Define scope, service, ownership, criticality and the governed Production-Risk Case.",
    output: "Governed scope",
    context: "Plan",
  },
  {
    number: "02",
    title: "Acquire",
    icon: Download,
    color: "#0072ff",
    summary: "Acquire authorized production state, packages, dependencies and evidence references.",
    output: "Trusted state package",
    context: "Plan",
  },
  {
    number: "03",
    title: "Build",
    icon: PackageOpen,
    color: "#2948ff",
    summary: "Reconstruct the purpose-bound GoldenVault mirror using approved production-state artifacts.",
    output: "Isolated target mirror",
    context: "Plan",
  },
  {
    number: "04",
    title: "Deploy",
    icon: Rocket,
    color: "#396afc",
    summary: "Deploy the scenario, telemetry, treatment candidate and recovery controls in SecLabs.",
    output: "Armed test scenario",
    context: "Do",
  },
  {
    number: "05",
    title: "Validate",
    icon: CircleCheck,
    color: "#7b2ff7",
    summary: "Validate relevance, compatibility, visibility, service impact, rollback and recovery.",
    output: "Validation evidence",
    context: "Do",
  },
  {
    number: "06",
    title: "Assess",
    icon: FileCheck2,
    color: "#b224ef",
    summary: "Assess treatment evidence, residual uncertainty, authority and execution readiness.",
    output: "Authorized risk decision",
    context: "Do",
  },
  {
    number: "07",
    title: "Execute",
    icon: Settings,
    color: "#12e0a2",
    summary: "Perform the authorized state-matched action and capture production evidence.",
    output: "Controlled execution",
    context: "Check",
  },
  {
    number: "08",
    title: "Assure",
    icon: RefreshCw,
    color: "#35cda5",
    summary: "Verify the outcome, residual risk, evidence completeness and trusted baseline.",
    output: "Assured closure",
    context: "Act",
  },
];

const labelClasses = ["p45-l1", "p45-l2", "p45-l3", "p45-l4", "p45-l5", "p45-l6", "p45-l7", "p45-l8"];

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

      <div
        className="p45-loop"
        onMouseEnter={() => setPause(true)}
        onMouseLeave={() => setPause(false)}
      >
        <div className="p45-watermark p45-prod">PROD</div>
        <div className="p45-watermark p45-ops">OPS</div>

        <svg viewBox="0 0 1200 600" className="p45-ribbon" role="img" aria-label="ProdSecOps eight-stage infinity workflow">
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
              className={`p45-label ${labelClasses[index]} ${activeStage === index ? "active" : ""}`}
              style={{ "--segment": stage.color }}
              aria-current={activeStage === index ? "step" : undefined}
              onClick={() => selectStage(index)}
              onMouseEnter={() => { setPause(true); selectStage(index); }}
              onFocus={() => { setPause(true); selectStage(index); }}
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
            <small>GoldenVault results return to the governed RISM record.</small>
          </div>
        </div>

        <div className="p45-output">
          <span>STAGE OUTPUT</span>
          <b>{active.output}</b>
        </div>
      </div>

      <p className="p45-continuity">
        Stage 08 returns the assured outcome, residual risk, evidence and trusted baseline to the next Stage 01 cycle.
      </p>
    </div>
  );
}

import { useEffect, useRef, useState } from "react";

const stages = [
  {
    number: "01",
    name: "Audit",
    pdca: "PLAN",
    color: "#00e5ff",
    purpose: "Establish the governed service context, ownership, criticality, risk criteria and evidence sources.",
    management: "Context, scope, interested-party requirements, objectives and accountable ownership.",
    exit: "The production-security condition is associated with a governed service and defined decision context.",
  },
  {
    number: "02",
    name: "Acquire",
    pdca: "PLAN",
    color: "#0072ff",
    purpose: "Acquire complete, current, attributable and integrity-verifiable production state.",
    management: "Assets, configuration, dependencies, telemetry, packages, exceptions and recovery references.",
    exit: "A versioned and verifiable state package is available for reconstruction and assessment.",
  },
  {
    number: "03",
    name: "Build",
    pdca: "PLAN",
    color: "#2948ff",
    purpose: "Reconstruct the relevant production condition in the isolated GoldenVault environment.",
    management: "Purpose-bound fidelity, isolation boundaries, approved package versions and reconstruction evidence.",
    exit: "The SecLabs proving environment is sufficiently representative for trusted validation.",
  },
  {
    number: "04",
    name: "Deploy",
    pdca: "DO",
    color: "#396afc",
    purpose: "Deploy the approved threat scenario, candidate treatment, monitoring and recovery controls in SecLabs.",
    management: "Playbook, treatment candidate, execution conditions, expected telemetry and rollback requirements.",
    exit: "The isolated environment is armed for controlled operational testing.",
  },
  {
    number: "05",
    name: "Validate",
    pdca: "DO",
    color: "#7b2ff7",
    purpose: "Prove applicability, effectiveness, compatibility, observability, rollback and recovery.",
    management: "ASP or TTP behavior, service impact, SIEM evidence, treatment performance and recovery timing.",
    exit: "Technical outcomes and attributable validation evidence are available for the risk decision.",
  },
  {
    number: "06",
    name: "Assess",
    pdca: "DO",
    color: "#b224ef",
    purpose: "Translate validated technical evidence into an integrated risk and authority decision.",
    management: "Business consequence, treatment priority, risk ownership, exception conditions and residual uncertainty.",
    exit: "An accountable decision exists to execute, monitor, defer or accept the defined condition.",
  },
  {
    number: "07",
    name: "Remediate",
    pdca: "CHECK",
    color: "#12e0a2",
    purpose: "Execute the approved, state-matched domain operation and verify production behavior.",
    management: "Segregation of duties, production-state match, monitoring, rollback authority and execution evidence.",
    exit: "The authorized action is applied and observed against the expected security and service outcome.",
  },
  {
    number: "08",
    name: "Recover",
    pdca: "ACT",
    color: "#35cda5",
    purpose: "Assure service restoration, residual risk, evidence completeness and continual improvement.",
    management: "Recovery objectives, return-to-service authority, updated baseline, lessons and corrective actions.",
    exit: "Outcome assurance is complete and the next trusted baseline is recorded.",
  },
];

const labelClasses = ["rl-1", "rl-2", "rl-3", "rl-4", "rl-5", "rl-6", "rl-7", "rl-8"];

export default function IsoPdcaInfinityWorkflow({ compact = false }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const beamRef = useRef(null);
  const offsetRef = useRef(0);
  const targetRef = useRef(null);
  const lastTimeRef = useRef(0);
  const activeRef = useRef(0);
  const pausedRef = useRef(false);

  useEffect(() => {
    pausedRef.current = paused;
  }, [paused]);

  useEffect(() => {
    let frameId;
    const pathLength = 800;
    const speed = 28;

    const animate = (now) => {
      if (!lastTimeRef.current) lastTimeRef.current = now;
      const delta = Math.min((now - lastTimeRef.current) / 1000, 0.05);
      lastTimeRef.current = now;

      if (!pausedRef.current && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        if (targetRef.current !== null) {
          const difference = targetRef.current - offsetRef.current;
          if (Math.abs(difference) < 1) {
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

        const normalized = Math.abs((offsetRef.current - 50) % pathLength);
        const next = Math.floor(normalized / 100);
        if (next !== activeRef.current && next >= 0 && next < stages.length) {
          activeRef.current = next;
          setActive(next);
        }
      }
      frameId = window.requestAnimationFrame(animate);
    };

    frameId = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  const selectStage = (index) => {
    activeRef.current = index;
    setActive(index);
    const pathLength = 800;
    const desired = -(index * 100);
    const base = Math.ceil(offsetRef.current / -pathLength) * -pathLength;
    let candidate = base + desired;
    if (candidate > offsetRef.current) candidate -= pathLength;
    targetRef.current = candidate;
  };

  const stage = stages[active];

  return (
    <div className={`v40-workflow ${compact ? "compact" : ""}`} style={{ "--stage": stage.color }}>
      <div className="v40-pdca-bands" aria-label="Plan Do Check Act mapping">
        <span className="plan"><b>PLAN</b>01–03</span>
        <span className="do"><b>DO</b>04–06</span>
        <span className="check"><b>CHECK</b>07</span>
        <span className="act"><b>ACT</b>08</span>
      </div>

      <div className="v40-loop" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
        <div className="v40-watermark wm-prod">PROD</div>
        <div className="v40-watermark wm-ops">OPS</div>

        <div className="v40-center-orb">
          <strong>RISM</strong>
          <span>TICKET ORCHESTRATION</span>
          <small>PDCA-controlled lifecycle</small>
        </div>

        <svg viewBox="0 0 1200 600" className="v40-ribbon-svg" role="img" aria-label="ProdSecOps eight-stage infinity workflow">
          <path id="v40-base-ribbon" pathLength="800" fill="none" d="M 600 300 C 400 50, 100 50, 100 300 C 100 550, 400 550, 600 300 C 800 50, 1100 50, 1100 300 C 1100 550, 800 550, 600 300 Z" />
          <use href="#v40-base-ribbon" className="v40-ribbon-track" />
          {stages.map((item, index) => (
            <use
              key={item.number}
              href="#v40-base-ribbon"
              className={`v40-ribbon-segment ${active === index ? "active" : ""}`}
              style={{ "--segment": item.color }}
              strokeDashoffset={-(index * 100)}
            />
          ))}
          <use ref={beamRef} href="#v40-base-ribbon" className="v40-ribbon-beam" />
        </svg>

        {stages.map((item, index) => (
          <button
            type="button"
            key={item.number}
            className={`v40-ribbon-label ${labelClasses[index]} ${active === index ? "active" : ""}`}
            style={{ "--segment": item.color }}
            aria-current={active === index ? "step" : undefined}
            onClick={() => selectStage(index)}
            onMouseEnter={() => { setPaused(true); selectStage(index); }}
            onFocus={() => { setPaused(true); selectStage(index); }}
            onBlur={() => setPaused(false)}
          >
            <span>{item.number}</span>
            <b>{item.name}</b>
          </button>
        ))}
      </div>

      <article className="v40-stage-detail" aria-live="polite">
        <div className="v40-stage-heading">
          <span>{stage.pdca} · STAGE {stage.number}</span>
          <h4>{stage.name}</h4>
        </div>
        <div className="v40-stage-grid">
          <section><small>OPERATING PURPOSE</small><p>{stage.purpose}</p></section>
          <section><small>MANAGEMENT CONTROL</small><p>{stage.management}</p></section>
          <section><small>EXIT CONDITION</small><p>{stage.exit}</p></section>
        </div>
      </article>

      <p className="v40-continuity-note">
        Stage 08 returns the assured outcome, updated Production-Risk Case, residual risk, evidence and trusted baseline to the next Stage 01 cycle.
      </p>
    </div>
  );
}

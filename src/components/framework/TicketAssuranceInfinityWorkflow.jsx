import { useEffect, useRef, useState } from "react";

const stages = [
  ["01", "Ingest", "Preserve the source event and create the base work log."],
  ["02", "Route", "Select the 5D phase, ticket type, ownership, and priority."],
  ["03", "Enrich", "Add production state, criticality, history, and risk criteria."],
  ["04", "Plan", "Attach treatment, authority, monitoring, rollback, and recovery conditions."],
  ["05", "Validate", "Prove behavior, impact, telemetry, compatibility, rollback, and recovery in SecLabs."],
  ["06", "Execute", "Authorize and perform the state-matched domain operation."],
  ["07", "Verify", "Confirm security effect, service health, and observability."],
  ["08", "Assure", "Close the record, update residual risk, and improve future models."],
];

const labelClasses = ["rl-1", "rl-2", "rl-3", "rl-4", "rl-5", "rl-6", "rl-7", "rl-8"];
const colors = ["#00e5ff", "#0072ff", "#2948ff", "#396afc", "#7b2ff7", "#b224ef", "#12e0a2", "#35cda5"];

export default function TicketAssuranceInfinityWorkflow({ activeDomain }) {
  const [activeStage, setActiveStage] = useState(0);
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
    setActiveStage(0);
    activeRef.current = 0;
    targetRef.current = 0;
  }, [activeDomain.ticket]);

  useEffect(() => {
    let frameId;
    const pathLength = 800;
    const speed = 28;

    const animate = (now) => {
      if (!lastTimeRef.current) lastTimeRef.current = now;
      const delta = Math.min((now - lastTimeRef.current) / 1000, 0.05);
      lastTimeRef.current = now;

      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (!pausedRef.current && !reducedMotion) {
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

        const normalized = ((-offsetRef.current % pathLength) + pathLength) % pathLength;
        const nextStage = Math.min(7, Math.floor(normalized / 100));
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

  const selectStage = (index) => {
    activeRef.current = index;
    setActiveStage(index);

    const pathLength = 800;
    const desiredWithinCycle = -(index * 100);
    const cycle = Math.floor(offsetRef.current / -pathLength);
    let candidate = -(cycle * pathLength) + desiredWithinCycle;

    if (candidate > offsetRef.current) candidate -= pathLength;
    targetRef.current = candidate;
  };

  const [number, name, detail] = stages[activeStage];
  const secLabsActive = activeStage >= 2 && activeStage <= 4;

  return (
    <div className="v41-ticket-workflow" style={{ "--domain": activeDomain.color, "--stage": colors[activeStage] }}>
      <div className="v41-event-card">
        <span>SOURCE EVENT</span>
        <b>{activeDomain.trigger}</b>
      </div>

      <div
        className="v41-loop"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="v41-watermark wm-prod">PROD</div>
        <div className="v41-watermark wm-ops">OPS</div>

        <div className="v41-center-orb">
          <small>RISM DOMAIN RECORD</small>
          <strong>{activeDomain.ticket}</strong>
          <span>TICKET TO ASSURANCE</span>
          <em>{activeDomain.ticketName}</em>
        </div>

        <svg viewBox="0 0 1200 600" className="v41-ribbon-svg" role="img" aria-label="Eight-stage ticket-to-assurance infinity workflow">
          <path
            id="v41-base-ribbon"
            pathLength="800"
            fill="none"
            d="M 600 300 C 400 50, 100 50, 100 300 C 100 550, 400 550, 600 300 C 800 50, 1100 50, 1100 300 C 1100 550, 800 550, 600 300 Z"
          />
          <use href="#v41-base-ribbon" className="v41-ribbon-track" />
          {stages.map((stage, index) => (
            <use
              key={stage[0]}
              href="#v41-base-ribbon"
              className={`v41-ribbon-segment ${activeStage === index ? "active" : ""}`}
              style={{ "--segment": colors[index] }}
              strokeDashoffset={-(index * 100)}
            />
          ))}
          <use ref={beamRef} href="#v41-base-ribbon" className="v41-ribbon-beam" />
        </svg>

        {stages.map(([stageNumber, stageName], index) => (
          <button
            type="button"
            key={stageNumber}
            className={`v41-ribbon-label ${labelClasses[index]} ${activeStage === index ? "active" : ""}`}
            style={{ "--segment": colors[index] }}
            aria-current={activeStage === index ? "step" : undefined}
            onClick={() => selectStage(index)}
            onMouseEnter={() => {
              setPaused(true);
              selectStage(index);
            }}
            onFocus={() => {
              setPaused(true);
              selectStage(index);
            }}
            onBlur={() => setPaused(false)}
          >
            <span>{stageNumber}</span>
            <b>{stageName}</b>
          </button>
        ))}
      </div>

      <div className="v41-stage-readout" aria-live="polite">
        <div>
          <span>ACTIVE STAGE {number}</span>
          <h4>{name}</h4>
          <p>{detail}</p>
        </div>
        <div className={`v41-seclabs-gate ${secLabsActive ? "active" : ""}`}>
          <span>SECLABS VALIDATION GATE</span>
          <b>{secLabsActive ? "Invoked by the workflow" : "Available when proving is required"}</b>
          <small>GoldenVault results return to {activeDomain.ticket}</small>
        </div>
      </div>

      <div className="v41-result-chain">
        <div><span>AUTHORIZED DOMAIN ACTION</span><p>{activeDomain.action}</p></div>
        <i aria-hidden="true">→</i>
        <div><span>ASSURANCE AND LEARNING</span><p>Verify the outcome, update residual risk, preserve evidence, and improve future threat models.</p></div>
      </div>
    </div>
  );
}

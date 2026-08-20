import { useEffect, useRef, useState } from "react";
import { FileCheck2, RefreshCw, TestTube2, Wrench } from "lucide-react";

const stages = [
  { number: "01", name: "Audit", color: "#00e5ff", purpose: "Establish the governed service, scope, ownership, criticality, evidence sources, and decision context." },
  { number: "02", name: "Acquire", color: "#0072ff", purpose: "Acquire complete, current, attributable, and integrity-verifiable production state." },
  { number: "03", name: "Build", color: "#2948ff", purpose: "Reconstruct the relevant production condition in a purpose-bound GoldenVault environment." },
  { number: "04", name: "Deploy", color: "#396afc", purpose: "Load the approved scenario, proposed treatment, monitoring content, and recovery controls." },
  { number: "05", name: "Validate", color: "#7b2ff7", purpose: "Prove applicability, effectiveness, compatibility, observability, rollback, and recovery." },
  { number: "06", name: "Assess", color: "#b224ef", purpose: "Translate technical evidence into an accountable risk, authority, and execution decision." },
  { number: "07", name: "Remediate", color: "#12e0a2", purpose: "Execute the approved, state-matched domain operation and verify production behavior." },
  { number: "08", name: "Recover", color: "#35cda5", purpose: "Assure service outcome, residual risk, evidence completeness, and the next trusted baseline." },
];

const labelClasses = ["rl-1", "rl-2", "rl-3", "rl-4", "rl-5", "rl-6", "rl-7", "rl-8"];

export default function TicketAssuranceInfinityWorkflow({ activeDomain }) {
  const [activeStage, setActiveStage] = useState(0);
  const [paused, setPaused] = useState(false);
  const beamRef = useRef(null);
  const offsetRef = useRef(0);
  const targetRef = useRef(null);
  const lastTimeRef = useRef(0);
  const activeRef = useRef(0);
  const pausedRef = useRef(false);

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
          if (Math.abs(difference) < 1) {
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

        const normalized = Math.abs((offsetRef.current - 50) % pathLength);
        const nextStage = Math.floor(normalized / 100);
        if (nextStage !== activeRef.current && nextStage >= 0 && nextStage < stages.length) {
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
    const desiredOffset = -(index * 100);
    const currentBase = Math.ceil(offsetRef.current / -800) * -800;
    let candidate = currentBase + desiredOffset;
    if (candidate > offsetRef.current) candidate -= 800;
    targetRef.current = candidate;
  };

  const stage = stages[activeStage];
  const validating = activeStage >= 2 && activeStage <= 5;

  return (
    <div className="v41-ticket-infinity" style={{ "--domain": activeDomain.color, "--stage": stage.color }}>
      <div className="v41-ticket-entry">
        <span>SOURCE EVENT</span><b>{activeDomain.trigger}</b>
        <i />
        <span>RISM DOMAIN RECORD</span><strong>{activeDomain.ticket}</strong><small>{activeDomain.ticketName}</small>
      </div>

      <div className="v41-workflow-bands">
        <span>CASE & STATE · 01–02</span>
        <span>RECONSTRUCTION, PROVING & DECISION · 03–06</span>
        <span>EXECUTION & ASSURANCE · 07–08</span>
      </div>

      <div className="v41-ribbon-loop" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
        <div className="v41-lobe-watermark prod">PROD</div>
        <div className="v41-lobe-watermark ops">OPS</div>
        <div className="v41-bridge-orb">
          <strong>{activeDomain.ticket}</strong>
          <span>RISM WORKFLOW</span>
          <small>TICKET TO ASSURANCE</small>
        </div>

        <svg viewBox="0 0 1200 600" className="v41-segmented-loop" role="img" aria-label={`${activeDomain.ticket} eight-stage infinity workflow`}>
          <path id="v41-base-ribbon" pathLength="800" fill="none" d="M 600 300 C 400 50, 100 50, 100 300 C 100 550, 400 550, 600 300 C 800 50, 1100 50, 1100 300 C 1100 550, 800 550, 600 300 Z" />
          <use href="#v41-base-ribbon" className="v41-ribbon-track" />
          {stages.map((item, index) => (
            <use key={item.number} href="#v41-base-ribbon" className={`v41-ribbon-segment ${activeStage === index ? "active" : ""}`} style={{ "--segment": item.color }} strokeDashoffset={-(index * 100)} />
          ))}
          <use ref={beamRef} href="#v41-base-ribbon" className="v41-ribbon-beam" />
        </svg>

        {stages.map((item, index) => (
          <button
            type="button"
            key={item.number}
            className={`v41-ribbon-label ${labelClasses[index]} ${activeStage === index ? "active" : ""}`}
            style={{ "--segment": item.color }}
            aria-current={activeStage === index ? "step" : undefined}
            onClick={() => selectStage(index)}
            onMouseEnter={() => { setPaused(true); selectStage(index); }}
            onFocus={() => { setPaused(true); selectStage(index); }}
            onBlur={() => setPaused(false)}
          ><span>{item.number}</span><b>{item.name}</b></button>
        ))}
      </div>

      <div className="v41-stage-readout" aria-live="polite">
        <div><span>ACTIVE STAGE · {stage.number}</span><h4>{stage.name}</h4><p>{stage.purpose}</p></div>
        <div className={`v41-seclabs-gate ${validating ? "active" : ""}`}>
          <TestTube2 /><span>SECLABS VALIDATION GATE</span><b>{validating ? "Invoked by the workflow" : "Available when proving is required"}</b><small>Mirror · Replay · Validate · Recover</small>
        </div>
      </div>

      <div className="v41-assurance-flow">
        <div><Wrench /><span>AUTHORIZED DOMAIN ACTION</span><p>{activeDomain.action}</p></div>
        <i>→</i>
        <div><FileCheck2 /><span>EVIDENCE RETURN</span><p>Results, approvals, execution logs, exceptions, monitoring, and recovery evidence return to {activeDomain.ticket}.</p></div>
        <i>→</i>
        <div><RefreshCw /><span>ASSURANCE & LEARNING</span><p>Residual risk, ERM reporting, threat models, playbooks, and the trusted baseline are updated.</p></div>
      </div>
    </div>
  );
}

import { useEffect, useRef, useState } from "react";
import { Box, CircleCheck, ClipboardList, Download, FileCheck2, RefreshCw, Rocket, Settings } from "lucide-react";

const stages = [
  ["01", "Audit", "Define scope, service, owner, criticality, and the governed Production-Risk Case.", ClipboardList],
  ["02", "Acquire", "Acquire authorized production state, packages, dependencies, and evidence references.", Download],
  ["03", "Build", "Reconstruct the purpose-bound SecLabs context from approved production-state artifacts.", Box],
  ["04", "Deploy", "Deploy the scenario, telemetry, proposed treatment, and recovery controls in GoldenVault.", Rocket],
  ["05", "Validate", "Validate relevance, compatibility, visibility, service impact, rollback, and recovery.", CircleCheck],
  ["06", "Assess", "Assess treatment evidence, residual uncertainty, authority, and execution readiness.", FileCheck2],
  ["07", "Execute", "Perform the authorized, state-matched domain action and record production evidence.", Settings],
  ["08", "Assure", "Verify the outcome, residual risk, evidence completeness, and the trusted baseline.", RefreshCw],
];

const labelClasses = ["rl-1", "rl-2", "rl-3", "rl-4", "rl-5", "rl-6", "rl-7", "rl-8"];
const colors = ["#00e5ff", "#0072ff", "#2948ff", "#396afc", "#7b2ff7", "#b224ef", "#12e0a2", "#35cda5"];

export default function TicketAssuranceInfinityWorkflow({ activeDomain }) {
  const [activeStage, setActiveStage] = useState(0);
  const [paused, setPaused] = useState(false);
  const beamRef = useRef(null);
  const offsetRef = useRef(0);
  const targetRef = useRef(null);
  const lastRef = useRef(0);
  const activeRef = useRef(0);
  const pausedRef = useRef(false);

  useEffect(() => { pausedRef.current = paused; }, [paused]);
  useEffect(() => { setActiveStage(0); activeRef.current = 0; targetRef.current = 0; }, [activeDomain.ticket]);

  useEffect(() => {
    let frame;
    const animate = (now) => {
      if (!lastRef.current) lastRef.current = now;
      const delta = Math.min((now - lastRef.current) / 1000, 0.05);
      lastRef.current = now;
      if (!pausedRef.current && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        if (targetRef.current !== null) {
          const diff = targetRef.current - offsetRef.current;
          if (Math.abs(diff) < 1) { offsetRef.current = targetRef.current; targetRef.current = null; }
          else offsetRef.current += diff * 10 * delta;
        } else offsetRef.current -= 28 * delta;
        if (offsetRef.current <= -800 && targetRef.current === null) offsetRef.current += 800;
        if (beamRef.current) beamRef.current.style.strokeDashoffset = String(offsetRef.current);
        const normalized = ((-offsetRef.current % 800) + 800) % 800;
        const next = Math.min(7, Math.floor(normalized / 100));
        if (next !== activeRef.current) { activeRef.current = next; setActiveStage(next); }
      }
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  const selectStage = (index) => {
    activeRef.current = index; setActiveStage(index);
    const cycle = Math.floor(offsetRef.current / -800);
    let candidate = -(cycle * 800) - index * 100;
    if (candidate > offsetRef.current) candidate -= 800;
    targetRef.current = candidate;
  };

  const [number, name, detail, ActiveIcon] = stages[activeStage];
  const labActive = activeStage >= 2 && activeStage <= 5;

  return (
    <div className="v42-workflow" style={{ "--domain": activeDomain.color, "--stage": colors[activeStage] }}>
      <div className="v42-event"><span>SOURCE EVENT</span><b>{activeDomain.trigger}</b></div>
      <div className="v42-loop" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
        <div className="v42-watermark prod">PROD</div><div className="v42-watermark ops">OPS</div>
        <div className="v42-orb"><small>RISM DOMAIN RECORD</small><strong>{activeDomain.ticket}</strong><span>TICKET TO ASSURANCE</span></div>
        <svg viewBox="0 0 1200 600" className="v42-svg" role="img" aria-label="Eight-stage infinity workflow">
          <path id="v42-path" pathLength="800" fill="none" d="M 600 300 C 400 50, 100 50, 100 300 C 100 550, 400 550, 600 300 C 800 50, 1100 50, 1100 300 C 1100 550, 800 550, 600 300 Z" />
          <use href="#v42-path" className="v42-track" />
          {stages.map((s, i) => <use key={s[0]} href="#v42-path" className={`v42-segment ${activeStage === i ? "active" : ""}`} style={{ "--segment": colors[i] }} strokeDashoffset={-(i * 100)} />)}
          <use ref={beamRef} href="#v42-path" className="v42-beam" />
        </svg>
        {stages.map(([n, title, , Icon], i) => (
          <button type="button" key={n} className={`v42-label ${labelClasses[i]} ${activeStage === i ? "active" : ""}`} style={{ "--segment": colors[i] }} onClick={() => selectStage(i)} onMouseEnter={() => selectStage(i)} onFocus={() => { setPaused(true); selectStage(i); }} onBlur={() => setPaused(false)} aria-current={activeStage === i ? "step" : undefined}>
            <span>{n}</span><Icon aria-hidden="true" /><b>{title}</b>
          </button>
        ))}
      </div>
      <div className="v42-readout">
        <div className="v42-current"><ActiveIcon /><div><span>ACTIVE STAGE {number}</span><h4>{name}</h4><p>{detail}</p></div></div>
        <div className={`v42-lab ${labActive ? "active" : ""}`}><span>SECLABS VALIDATION GATE</span><b>{labActive ? "Invoked by the workflow" : "Available when proving is required"}</b><small>GoldenVault evidence returns to {activeDomain.ticket}</small></div>
      </div>
    </div>
  );
}

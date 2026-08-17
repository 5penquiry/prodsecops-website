import {
  ClipboardList,
  Download,
  Box,
  Rocket,
  CircleCheck,
  FileCheck2,
  Settings,
  RefreshCw,
  Workflow,
} from "lucide-react";

const stages = [
  { n:"01", name:"Audit", x:413, y:164, icon:ClipboardList, detail:"Define scope, service, owner, criticality" },
  { n:"02", name:"Acquire", x:191, y:177, icon:Download, detail:"Acquire authorized state and packages" },
  { n:"03", name:"Build", x:191, y:423, icon:Box, detail:"Reconstruct purpose-bound SecLabs context" },
  { n:"04", name:"Deploy", x:413, y:436, icon:Rocket, detail:"Deploy scenarios, telemetry, recovery" },
  { n:"05", name:"Validate", x:787, y:164, icon:CircleCheck, detail:"Validate relevance, compatibility, visibility" },
  { n:"06", name:"Assess", x:1009, y:177, icon:FileCheck2, detail:"Assess impact, treatment, authority" },
  { n:"07", name:"Execute", x:1009, y:423, icon:Settings, detail:"Perform the authorized domain action" },
  { n:"08", name:"Assure", x:787, y:436, icon:RefreshCw, detail:"Verify outcome and trusted baseline" },
];

export default function PrecisionInfinityWorkflow({ compact = false }) {
  return (
    <div className={`v6-workflow ${compact ? "compact" : ""}`}>
      <div className="v6-infinity-wrap">
        <svg viewBox="0 0 1200 600" role="img" aria-label="ProdSecOps eight-stage governed lifecycle">
          <defs>
            <linearGradient id={`v6-track-${compact}`} x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#10376f" />
              <stop offset=".42" stopColor="#1857a7" />
              <stop offset=".58" stopColor="#49547d" />
              <stop offset="1" stopColor="#08745e" />
            </linearGradient>
            <filter id={`v6-beam-glow-${compact}`} x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>

          <path id={`v6-path-${compact}`} pathLength="1000" d="M600 300C438 80 116 68 94 286C72 505 390 530 600 300C810 70 1128 95 1106 314C1084 532 762 520 600 300Z" fill="none" />
          <use href={`#v6-path-${compact}`} className="v6-track-shadow" />
          <use href={`#v6-path-${compact}`} className="v6-track" stroke={`url(#v6-track-${compact})`} />
          <use href={`#v6-path-${compact}`} className="v6-only-beam" filter={`url(#v6-beam-glow-${compact})`} />

          <text className="v6-lobe-word prod" x="310" y="326">PROD</text>
          <text className="v6-lobe-word ops" x="890" y="326">OPS</text>

          {stages.map((stage) => (
            <g key={stage.n} className="v6-stage" transform={`translate(${stage.x} ${stage.y})`}>
              <rect x="-46" y="-24" width="92" height="48" rx="24" />
              <text className="v6-stage-number" textAnchor="middle" y="-3">{stage.n}</text>
              <text className="v6-stage-name" textAnchor="middle" y="14">{stage.name}</text>
            </g>
          ))}
        </svg>

        <div className="v6-workflow-core"><Workflow /><b>RISK</b><small>GOVERNANCE</small></div>
      </div>

      {!compact && (
        <div className="v6-stage-rail">
          {stages.map((stage, index) => {
            const Icon = stage.icon;
            return (
              <article key={stage.n}>
                <div className="v6-stage-top"><span>{stage.n}</span>{index < stages.length - 1 && <i>→</i>}</div>
                <Icon />
                <b>{stage.name}</b>
                <p>{stage.detail}</p>
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
}

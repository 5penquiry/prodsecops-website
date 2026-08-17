import { Workflow } from "lucide-react";

const stages = [
  { n:"01", name:"Audit", x:410, y:157 },
  { n:"02", name:"Acquire", x:190, y:171 },
  { n:"03", name:"Build", x:190, y:429 },
  { n:"04", name:"Deploy", x:410, y:443 },
  { n:"05", name:"Validate", x:790, y:157 },
  { n:"06", name:"Assess", x:1010, y:171 },
  { n:"07", name:"Execute", x:1010, y:429 },
  { n:"08", name:"Assure", x:790, y:443 },
];

export default function PrecisionInfinityWorkflow({ compact = false }) {
  return (
    <div className={`single-beam-workflow ${compact ? "compact" : ""}`}>
      <svg viewBox="0 0 1200 600" role="img" aria-label="ProdSecOps eight-stage governed lifecycle">
        <defs>
          <linearGradient id={`single-track-${compact}`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#10376f"/><stop offset=".42" stopColor="#1857a7"/>
            <stop offset=".58" stopColor="#49547d"/><stop offset="1" stopColor="#08745e"/>
          </linearGradient>
          <filter id={`single-glow-${compact}`} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>
        <path id={`single-path-${compact}`} pathLength="1000" d="M600 300C438 80 116 68 94 286C72 505 390 530 600 300C810 70 1128 95 1106 314C1084 532 762 520 600 300Z" fill="none"/>
        <use href={`#single-path-${compact}`} className="single-track-shadow"/>
        <use href={`#single-path-${compact}`} className="single-track" stroke={`url(#single-track-${compact})`}/>
        <use href={`#single-path-${compact}`} className="single-moving-beam" filter={`url(#single-glow-${compact})`}/>
        <text className="single-lobe-word prod" x="310" y="326">PROD</text>
        <text className="single-lobe-word ops" x="890" y="326">OPS</text>
        {stages.map((stage)=>(
          <g key={stage.n} className="single-stage" transform={`translate(${stage.x} ${stage.y})`}>
            <rect x="-47" y="-25" width="94" height="50" rx="25"/>
            <text className="single-stage-number" textAnchor="middle" y="-3">{stage.n}</text>
            <text className="single-stage-name" textAnchor="middle" y="14">{stage.name}</text>
          </g>
        ))}
      </svg>
      <div className="single-workflow-core"><Workflow/><b>RISK</b><small>GOVERNANCE</small></div>
    </div>
  );
}

import { useEffect, useState } from "react";

const dimensions = [
  { name: "ANTICIPATE", color: "#3b82f6", detail: "Relevant exposure" },
  { name: "OBSERVE", color: "#0ea5e9", detail: "Reliable visibility" },
  { name: "RESPOND", color: "#8b5cf6", detail: "Governed action" },
  { name: "RESTORE", color: "#10b981", detail: "Trusted recovery" },
  { name: "PROVE", color: "#4f46e5", detail: "Defensible outcome" },
];

const planePoints = [
  "360,58 98,238 238,360",
  "360,58 238,360 482,360",
  "360,58 482,360 622,238",
  "360,58 622,238 360,150",
  "360,58 360,150 98,238",
];

export default function FiveDConvergenceHero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(
      () => setActive((value) => (value + 1) % dimensions.length),
      4200,
    );
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="hero-convergence-model" aria-label="5D Intelligence convergence model">
      <svg viewBox="0 0 720 680" role="img">
        <defs>
          <linearGradient id="hero-basket" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#020617" />
            <stop offset=".5" stopColor="#24334a" />
            <stop offset="1" stopColor="#020617" />
          </linearGradient>
          <radialGradient id="hero-energy">
            <stop offset="0" stopColor="#fff" />
            <stop offset=".25" stopColor="#38bdf8" />
            <stop offset="1" stopColor="#040914" stopOpacity="0" />
          </radialGradient>
        </defs>

        <g className="hero-canopy">
          {planePoints.map((points, index) => (
            <polygon
              key={dimensions[index].name}
              points={points}
              className={active === index ? "active" : ""}
              style={{ "--plane-color": dimensions[index].color }}
              onClick={() => setActive(index)}
            />
          ))}
          {[
            ["RESTORE", 483, 150, 20],
            ["PROVE", 237, 150, -20],
            ["ANTICIPATE", 195, 242, -38],
            ["RESPOND", 525, 242, 38],
            ["OBSERVE", 360, 285, 0],
          ].map(([label, x, y, rotate], index) => (
            <text
              key={label}
              x={x}
              y={y}
              transform={`rotate(${rotate} ${x} ${y})`}
              className={active === [3, 4, 0, 2, 1][index] ? "active" : ""}
            >
              {label}
            </text>
          ))}
        </g>

        <g className="hero-convergence-lines">
          {[[315,540,238,360],[405,540,482,360],[435,520,622,238],[360,495,360,150],[285,520,98,238]].map((line,index) => (
            <line
              key={index}
              x1={line[0]} y1={line[1]} x2={line[2]} y2={line[3]}
              className={index === active ? "active" : ""}
              style={{ "--line-color": dimensions[index].color }}
            />
          ))}
        </g>

        <g className="hero-risk-core">
          <ellipse className="outer-orbit" cx="360" cy="520" rx="116" ry="38" />
          <path className="core-body" d="M275 520C275 585 315 605 360 605C405 605 445 585 445 520Z" />
          <ellipse className="core-rim" cx="360" cy="520" rx="85" ry="28" />
          <ellipse className="core-inner" cx="360" cy="520" rx="72" ry="22" />
          <ellipse className="core-signal" cx="360" cy="522" rx="58" ry="18" />
          <text className="core-title" x="360" y="562">RISK</text>
          <text className="core-subtitle" x="360" y="582">GOVERNANCE CORE</text>
        </g>
      </svg>

      <div className="hero-convergence-readout" style={{ "--readout": dimensions[active].color }}>
        <span>0{active + 1}</span>
        <div><b>{dimensions[active].name}</b><small>{dimensions[active].detail}</small></div>
      </div>
    </div>
  );
}

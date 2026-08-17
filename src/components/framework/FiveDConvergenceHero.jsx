import { useEffect, useState } from "react";

const perspectives = [
  { title: "ANTICIPATE", detail: "Relevant exposure", color: "#3b82f6" },
  { title: "OBSERVE", detail: "Reliable visibility", color: "#0ea5e9" },
  { title: "RESPOND", detail: "Governed action", color: "#8b5cf6" },
  { title: "RESTORE", detail: "Trusted recovery", color: "#10b981" },
  { title: "PROVE", detail: "Defensible outcome", color: "#4f46e5" },
];

const planes = [
  "360,60 100,240 240,360",
  "360,60 240,360 480,360",
  "360,60 480,360 620,240",
  "360,60 620,240 360,150",
  "360,60 360,150 100,240",
];

const connectors = [
  [315, 540, 240, 360],
  [405, 540, 480, 360],
  [435, 520, 620, 240],
  [360, 495, 360, 150],
  [285, 520, 100, 240],
];

export default function FiveDConvergenceHero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return undefined;

    const timer = window.setInterval(
      () => setActive((value) => (value + 1) % perspectives.length),
      4800,
    );

    return () => window.clearInterval(timer);
  }, [paused]);

  const activeEdges = [active, (active + 4) % perspectives.length];
  const current = perspectives[active];

  return (
    <div
      className="v13-five-model"
      aria-label="5D Threat Intelligence convergence model"
      onMouseLeave={() => setPaused(false)}
    >
      <div className="v13-grid" aria-hidden="true" />

      <div className="v13-visual">
        <svg viewBox="0 0 720 650" role="img">
          <defs>
            <linearGradient id="v13-core-metal" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#020617" />
              <stop offset=".5" stopColor="#263750" />
              <stop offset="1" stopColor="#020617" />
            </linearGradient>
            <radialGradient id="v13-core-energy" cx="50%" cy="50%" r="52%">
              <stop offset="0" stopColor="#ffffff" />
              <stop offset=".25" stopColor="#60a5fa" />
              <stop offset="1" stopColor="#040914" stopOpacity="0" />
            </radialGradient>
            <filter id="v13-plane-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>

          <g className="v13-plane-layer">
            {planes.map((points, index) => (
              <polygon
                key={perspectives[index].title}
                points={points}
                className={active === index ? "active" : ""}
                style={{ "--accent": perspectives[index].color }}
                onMouseEnter={() => {
                  setPaused(true);
                  setActive(index);
                }}
              />
            ))}
          </g>

          <g className="v13-connector-layer" aria-hidden="true">
            {connectors.map((line, index) => (
              <line
                key={index}
                x1={line[0]}
                y1={line[1]}
                x2={line[2]}
                y2={line[3]}
                className={activeEdges.includes(index) ? "active" : ""}
                style={{ "--accent": current.color }}
              />
            ))}
          </g>

          <g className="v13-core">
            <ellipse className="core-orbit" cx="360" cy="520" rx="116" ry="38" />
            <path className="core-body" d="M275 520C275 585 315 605 360 605C405 605 445 585 445 520Z" />
            <ellipse className="core-rim" cx="360" cy="520" rx="85" ry="28" />
            <ellipse className="core-inner" cx="360" cy="520" rx="72" ry="22" />
            <ellipse className="core-signal" cx="360" cy="522" rx="58" ry="18" />
            <text className="core-title" x="360" y="562">5D THREAT INTELLIGENCE</text>
            <text className="core-subtitle" x="360" y="581">INTEGRATED RISK GOVERNANCE</text>
          </g>
        </svg>
      </div>

      <div className="v13-menu" aria-label="Select a 5D intelligence perspective">
        {perspectives.map((item, index) => (
          <button
            key={item.title}
            type="button"
            className={active === index ? "active" : ""}
            style={{ "--item": item.color }}
            onMouseEnter={() => {
              setPaused(true);
              setActive(index);
            }}
            onFocus={() => {
              setPaused(true);
              setActive(index);
            }}
            onBlur={() => setPaused(false)}
            onClick={() => setActive(index)}
          >
            <span>0{index + 1}</span>
            <div>
              <b>{item.title}</b>
              <small>{item.detail}</small>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

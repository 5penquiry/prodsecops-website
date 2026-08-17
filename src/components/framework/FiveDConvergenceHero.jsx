import { useEffect, useState } from "react";

const perspectives = [
  { title: "PROACTIVE", detail: "Relevant exposure", color: "#3b82f6" },
  { title: "DETECTIVE", detail: "Reliable visibility", color: "#0ea5e9" },
  { title: "REACTIVE", detail: "Governed action", color: "#8b5cf6" },
  { title: "RECOVER", detail: "Trusted recovery", color: "#10b981" },
  { title: "COMPLIANCE", detail: "Defensible assurance", color: "#f3c34e" },
];

const planes = [
  "360,58 98,238 238,360",
  "360,58 238,360 482,360",
  "360,58 482,360 622,238",
  "360,58 622,238 360,150",
  "360,58 360,150 98,238",
];

const connectors = [
  [315, 540, 238, 360],
  [405, 540, 482, 360],
  [435, 520, 622, 238],
  [360, 495, 360, 150],
  [285, 520, 98, 238],
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

  const current = perspectives[active];
  const activeEdges = [active, (active + 4) % perspectives.length];

  return (
    <div
      className="v14-model"
      aria-label="5D Threat Intelligence convergence model"
      onMouseLeave={() => setPaused(false)}
    >
      <div className="v14-visual-zone">
        <div className="v14-grid" aria-hidden="true" />

        <svg viewBox="0 0 720 650" role="img">
          <defs>
            <linearGradient id="v14-core-metal" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#020617" />
              <stop offset=".5" stopColor="#263750" />
              <stop offset="1" stopColor="#020617" />
            </linearGradient>
            <radialGradient id="v14-core-energy" cx="50%" cy="50%" r="52%">
              <stop offset="0" stopColor="#ffffff" />
              <stop offset=".25" stopColor="#60a5fa" />
              <stop offset="1" stopColor="#040914" stopOpacity="0" />
            </radialGradient>
            <filter id="v14-plane-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>

          <g className="v14-plane-layer">
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

          <g className="v14-connector-layer" aria-hidden="true">
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

          <g className="v14-core">
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

      <aside className="v14-command-rail" aria-label="Threat-intelligence perspective controls">
        <header>
          <span>5D CONTROL PLANE</span>
          <b>Intelligence Perspectives</b>
          <small>Select a dimension to trace its paired convergence paths.</small>
        </header>

        <nav>
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
              <div><b>{item.title}</b><small>{item.detail}</small></div>
              <i aria-hidden="true">›</i>
            </button>
          ))}
        </nav>

        <footer style={{ "--status": current.color }}>
          <span>ACTIVE CONVERGENCE</span>
          <b>{current.title}</b>
          <small>One intelligence plane and two adjacent paths converge on Integrated Risk Governance.</small>
        </footer>
      </aside>
    </div>
  );
}

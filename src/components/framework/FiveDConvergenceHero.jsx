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

    const timer = window.setInterval(() => {
      setActive((value) => (value + 1) % perspectives.length);
    }, 4800);

    return () => window.clearInterval(timer);
  }, [paused]);

  const current = perspectives[active];
  const activeEdges = [active, (active + 4) % perspectives.length];

  const selectPerspective = (index) => {
    setPaused(true);
    setActive(index);
  };

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
            <linearGradient id="v15-core-metal" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#020617" />
              <stop offset=".5" stopColor="#263750" />
              <stop offset="1" stopColor="#020617" />
            </linearGradient>

            <radialGradient id="v15-core-energy" cx="50%" cy="50%" r="52%">
              <stop offset="0" stopColor="#ffffff" />
              <stop offset=".25" stopColor="#60a5fa" />
              <stop offset="1" stopColor="#040914" stopOpacity="0" />
            </radialGradient>

            <filter id="v14-plane-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <g className="v14-plane-layer">
            {planes.map((points, index) => (
              <polygon
                key={perspectives[index].title}
                points={points}
                className={active === index ? "active" : ""}
                style={{ "--accent": perspectives[index].color }}
                onMouseEnter={() => selectPerspective(index)}
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

          <g className="v15-governance-controller">
            <ellipse className="controller-orbit" cx="360" cy="503" rx="112" ry="34" />
            <ellipse className="controller-rim" cx="360" cy="500" rx="78" ry="24" />
            <ellipse className="controller-inner" cx="360" cy="500" rx="64" ry="18" />
            <ellipse className="controller-energy" cx="360" cy="501" rx="50" ry="15" />

            <rect className="burner-frame" x="322" y="522" width="76" height="24" rx="7" />
            <path
              className="burner-flame flame-outer"
              d="M345 530C336 502 354 487 360 456C371 488 385 503 374 530Z"
            />
            <path
              className="burner-flame flame-inner"
              d="M353 529C349 511 358 500 361 483C368 505 373 514 367 529Z"
            />

            <path className="basket-body" d="M315 545L405 545L397 604Q360 619 323 604Z" />
            <rect className="basket-rim" x="310" y="540" width="100" height="18" rx="7" />
            <path
              className="basket-weave"
              d="M325 565H395M323 584H397M338 558L333 606M360 558V614M382 558L387 606"
            />
          </g>
        </svg>

        <div className="v15-model-title">
          <span>5D THREAT-INTELLIGENCE MODEL</span>
          <b>5D Threat-Intelligence</b>
          <small>Balanced Through Integrated Risk Governance</small>
        </div>
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
              onMouseEnter={() => selectPerspective(index)}
              onFocus={() => selectPerspective(index)}
              onBlur={() => setPaused(false)}
              onClick={() => setActive(index)}
            >
              <span>0{index + 1}</span>
              <div>
                <b>{item.title}</b>
                <small>{item.detail}</small>
              </div>
              <i aria-hidden="true">›</i>
            </button>
          ))}
        </nav>

        <footer style={{ "--status": current.color }}>
          <span>ACTIVE CONVERGENCE</span>
          <b>{current.title}</b>
          <small>
            One intelligence plane and two adjacent paths converge on Integrated Risk Governance.
          </small>
        </footer>
      </aside>
    </div>
  );
}

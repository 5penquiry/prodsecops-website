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

const labels = [
  { title: "PROACTIVE", x: 182, y: 239, rotate: -38 },
  { title: "DETECTIVE", x: 360, y: 288, rotate: 0 },
  { title: "REACTIVE", x: 538, y: 239, rotate: 38 },
  { title: "RECOVER", x: 482, y: 151, rotate: 20 },
  { title: "COMPLIANCE", x: 230, y: 151, rotate: -20 },
];

const connectorLines = [
  [286, 512, 98, 238],
  [318, 535, 238, 360],
  [402, 535, 482, 360],
  [434, 512, 622, 238],
  [360, 497, 360, 150],
];

export default function FiveDConvergenceHero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(
      () => setActive((value) => (value + 1) % perspectives.length),
      4400,
    );
    return () => window.clearInterval(timer);
  }, []);

  const activeStrings = [active, (active + 1) % connectorLines.length];

  return (
    <div className="v6-five-hero" aria-label="Five-dimensional intelligence convergence model">
      <div className="v6-flight-grid" aria-hidden="true" />

      <svg viewBox="0 0 720 680" role="img">
        <defs>
          <linearGradient id="v6-basket-metal" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#020617" />
            <stop offset=".5" stopColor="#273a55" />
            <stop offset="1" stopColor="#020617" />
          </linearGradient>
          <radialGradient id="v6-flame" cx="50%" cy="45%" r="55%">
            <stop offset="0" stopColor="#ffffff" />
            <stop offset=".19" stopColor="#67e8f9" />
            <stop offset=".46" stopColor="#3b82f6" stopOpacity=".9" />
            <stop offset="1" stopColor="#040914" stopOpacity="0" />
          </radialGradient>
          <filter id="v6-core-glow" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="7" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        <g className="v6-canopy">
          {planes.map((points, index) => (
            <polygon
              key={perspectives[index].title}
              points={points}
              className={active === index ? "active" : ""}
              style={{ "--plane": perspectives[index].color }}
              onMouseEnter={() => setActive(index)}
              onFocus={() => setActive(index)}
            />
          ))}

          {labels.map((label, index) => (
            <text
              key={label.title}
              x={label.x}
              y={label.y}
              transform={`rotate(${label.rotate} ${label.x} ${label.y})`}
              className={active === index ? "active" : ""}
            >
              {label.title}
            </text>
          ))}
        </g>

        <g className="v6-suspension-lines">
          {connectorLines.map((line, index) => (
            <line
              key={index}
              x1={line[0]}
              y1={line[1]}
              x2={line[2]}
              y2={line[3]}
              className={activeStrings.includes(index) ? "active" : ""}
              style={{ "--string": perspectives[active].color }}
            />
          ))}
        </g>

        <g className="v6-governance-basket">
          <ellipse className="basket-orbit" cx="360" cy="529" rx="123" ry="42" />
          <ellipse className="basket-shadow" cx="360" cy="592" rx="79" ry="18" />
          <path className="basket-body" d="M279 521C282 565 306 606 360 620C414 606 438 565 441 521Z" />
          <ellipse className="basket-rim" cx="360" cy="521" rx="82" ry="28" />
          <ellipse className="basket-inner" cx="360" cy="521" rx="67" ry="21" />
          <ellipse className="basket-flame" cx="360" cy="512" rx="51" ry="34" filter="url(#v6-core-glow)" />
          <path className="flame-tongue flame-one" d="M345 521C337 498 354 486 360 468C369 491 382 500 373 521Z" />
          <path className="flame-tongue flame-two" d="M353 520C349 506 359 499 361 489C367 502 372 509 367 520Z" />
          <text className="basket-title" x="360" y="567">RISK GOVERNANCE</text>
          <text className="basket-subtitle" x="360" y="586">INTEGRATED CONTROL CORE</text>
        </g>
      </svg>

      <div className="v6-perspective-menu" aria-label="Select an intelligence perspective">
        {perspectives.map((item, index) => (
          <button
            key={item.title}
            type="button"
            className={active === index ? "active" : ""}
            style={{ "--item": item.color }}
            onMouseEnter={() => setActive(index)}
            onFocus={() => setActive(index)}
            onClick={() => setActive(index)}
          >
            <span>0{index + 1}</span>
            <div><b>{item.title}</b><small>{item.detail}</small></div>
          </button>
        ))}
      </div>
    </div>
  );
}

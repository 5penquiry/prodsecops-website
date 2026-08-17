import { useEffect, useState } from "react";

const perspectives = [
  { title: "PROACTIVE", detail: "Relevant exposure", color: "#3b82f6" },
  { title: "DETECTIVE", detail: "Reliable visibility", color: "#0ea5e9" },
  { title: "REACTIVE", detail: "Governed action", color: "#8b5cf6" },
  { title: "RECOVER", detail: "Trusted recovery", color: "#10b981" },
  { title: "COMPLIANCE", detail: "Defensible assurance", color: "#f3c34e" },
];

const crown = { x: 318, y: 58 };

/* Wider than the balloon silhouette so the load frame reads as externally tied. */
const outerRing = [
  { x: 318, y: 178 },
  { x: 558, y: 300 },
  { x: 464, y: 472 },
  { x: 172, y: 472 },
  { x: 78, y: 300 },
];

/* Physical tie points on the balloon perimeter. */
const tiePoints = [
  { x: 318, y: 116 },
  { x: 500, y: 256 },
  { x: 420, y: 430 },
  { x: 216, y: 430 },
  { x: 136, y: 256 },
];

const controllerAnchors = [
  { x: 318, y: 551 },
  { x: 358, y: 551 },
  { x: 344, y: 551 },
  { x: 292, y: 551 },
  { x: 278, y: 551 },
];

const loadPath = (index) => {
  const tie = tiePoints[index];
  const ring = outerRing[index];
  const anchor = controllerAnchors[index];

  return [
    `M${crown.x} ${crown.y}`,
    `Q${tie.x} ${tie.y - 18} ${tie.x} ${tie.y}`,
    `L${ring.x} ${ring.y}`,
    `Q${ring.x} ${ring.y + 55} ${anchor.x} ${anchor.y}`,
  ].join(" ");
};

const facePoints = (index) => {
  const first = outerRing[index];
  const second = outerRing[(index + 1) % outerRing.length];
  return `${crown.x},${crown.y} ${first.x},${first.y} ${second.x},${second.y}`;
};

export default function FiveDConvergenceHero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return undefined;

    const timer = window.setInterval(
      () => setActive((value) => (value + 1) % perspectives.length),
      4400,
    );

    return () => window.clearInterval(timer);
  }, [paused]);

  const activePair = [active, (active + 1) % perspectives.length];

  return (
    <div
      className="v11-model"
      aria-label="External pentagonal five-dimensional Risk Governance balloon"
      onMouseLeave={() => setPaused(false)}
    >
      <div className="v11-visual-zone">
        <div className="v11-flight-grid grid-far" aria-hidden="true" />
        <div className="v11-flight-grid grid-near" aria-hidden="true" />
        <div className="v11-flight-horizon" aria-hidden="true" />

        <svg viewBox="0 0 640 690" role="img">
          <defs>
            <radialGradient id="v11-canopy-depth" cx="30%" cy="17%" r="84%">
              <stop offset="0" stopColor="#1a426f" />
              <stop offset=".48" stopColor="#0b233e" />
              <stop offset="1" stopColor="#030a15" />
            </radialGradient>
            <linearGradient id="v11-canopy-sheen" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#ffffff" stopOpacity=".14" />
              <stop offset=".43" stopColor="#ffffff" stopOpacity="0" />
              <stop offset="1" stopColor="#38bdf8" stopOpacity=".05" />
            </linearGradient>
            <linearGradient id="v11-basket" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#07101e" />
              <stop offset=".5" stopColor="#304763" />
              <stop offset="1" stopColor="#07101e" />
            </linearGradient>
            <radialGradient id="v11-burner" cx="50%" cy="45%" r="55%">
              <stop offset="0" stopColor="#ffffff" />
              <stop offset=".2" stopColor="#67e8f9" />
              <stop offset=".5" stopColor="#3b82f6" stopOpacity=".9" />
              <stop offset="1" stopColor="#040914" stopOpacity="0" />
            </radialGradient>
            <filter id="v11-load-glow" x="-70%" y="-70%" width="240%" height="240%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
            <filter id="v11-flame-glow" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
            <clipPath id="v11-canopy-clip">
              <path d="M318 105C211 105 145 176 139 270C132 363 203 416 264 431C284 436 300 439 318 439C336 439 352 436 372 431C433 416 504 363 497 270C491 176 425 105 318 105Z" />
            </clipPath>
          </defs>

          {/* Smaller balloon envelope sits underneath the external load frame. */}
          <g className="v11-canopy">
            <path className="canopy-body" d="M318 105C211 105 145 176 139 270C132 363 203 416 264 431C284 436 300 439 318 439C336 439 352 436 372 431C433 416 504 363 497 270C491 176 425 105 318 105Z" />
            <g clipPath="url(#v11-canopy-clip)">
              <path className="canopy-sheen" d="M180 174C232 119 318 95 391 123C292 133 227 193 191 286C166 261 165 217 180 174Z" />
              <path className="canopy-seam" d="M147 236Q318 178 489 236" />
              <path className="canopy-seam" d="M144 306Q318 255 492 306" />
              <path className="canopy-seam" d="M174 376Q318 337 462 376" />
            </g>
            <ellipse className="canopy-mouth" cx="318" cy="433" rx="62" ry="14" />
          </g>

          {/* Broad translucent faces establish the external pentagonal pyramid. */}
          <g className="v11-faces" aria-hidden="true">
            {perspectives.map((item, index) => (
              <polygon
                key={item.title}
                points={facePoints(index)}
                className={active === index ? "active" : ""}
                style={{ "--face": item.color }}
              />
            ))}
          </g>

          <polygon
            className="v11-pentagon"
            points={outerRing.map((point) => `${point.x},${point.y}`).join(" ")}
          />

          {/* Tie nodes visibly attach the external frame to the balloon perimeter. */}
          <g className="v11-tie-system" aria-hidden="true">
            {tiePoints.map((point, index) => (
              <g key={index}>
                <line
                  x1={point.x}
                  y1={point.y}
                  x2={outerRing[index].x}
                  y2={outerRing[index].y}
                />
                <circle cx={point.x} cy={point.y} r="5" />
              </g>
            ))}
          </g>

          {/* One perspective equals one pyramid face and its adjacent pair of load strings. */}
          <g className="v11-load-system" aria-label="Five external dimensional load strings">
            {perspectives.map((item, index) => (
              <g
                key={item.title}
                className={`v11-load ${activePair.includes(index) ? "active" : ""}`}
                style={{ "--load": perspectives[active].color }}
              >
                <path
                  d={loadPath(index)}
                  filter={activePair.includes(index) ? "url(#v11-load-glow)" : undefined}
                />
                <circle cx={outerRing[index].x} cy={outerRing[index].y} r="5" />
              </g>
            ))}
            <circle className="v11-crown" cx={crown.x} cy={crown.y} r="7" />
          </g>

          <g className="v11-burner">
            <rect className="burner-frame" x="284" y="527" width="68" height="27" rx="8" />
            <ellipse className="burner-glow" cx="318" cy="522" rx="35" ry="29" filter="url(#v11-flame-glow)" />
            <path className="flame flame-outer" d="M304 533C295 505 312 492 318 465C328 493 342 506 331 533Z" />
            <path className="flame flame-inner" d="M311 532C307 514 316 504 319 489C326 508 330 517 325 532Z" />
          </g>

          <g className="v11-basket">
            <path className="basket-body" d="M271 549L365 549L356 619Q318 633 280 619Z" />
            <rect className="basket-rim" x="266" y="544" width="104" height="18" rx="8" />
            <path className="basket-weave" d="M281 568H355M279 587H357M278 605H358M295 561L289 620M318 561V628M341 561L347 620" />
          </g>
        </svg>

        <div className="v11-model-title">
          <span>EXTERNAL PENTAGONAL CONTROL FRAME</span>
          <b>5D Threat-Intelligence</b>
          <small>Balanced Through Integrated Risk Governance</small>
        </div>
      </div>

      <aside className="v11-command-rail" aria-label="Threat-intelligence perspective controls">
        <div className="v11-rail-heading">
          <span>5D CONTROL PLANE</span>
          <b>Intelligence Perspectives</b>
          <small>Select a dimension to trace its paired governance boundaries.</small>
        </div>

        <div className="v11-perspective-menu">
          {perspectives.map((item, index) => (
            <button
              key={item.title}
              type="button"
              className={active === index ? "active" : ""}
              style={{ "--item": item.color }}
              onMouseEnter={() => { setPaused(true); setActive(index); }}
              onFocus={() => { setPaused(true); setActive(index); }}
              onBlur={() => setPaused(false)}
              onClick={() => setActive(index)}
            >
              <span>0{index + 1}</span>
              <div><b>{item.title}</b><small>{item.detail}</small></div>
              <i aria-hidden="true">›</i>
            </button>
          ))}
        </div>

        <div className="v11-rail-status" style={{ "--status": perspectives[active].color }}>
          <span>ACTIVE PAIRED PATH</span>
          <b>{perspectives[active].title}</b>
          <small>Two adjacent load strings converge on the Risk Governance controller.</small>
        </div>
      </aside>
    </div>
  );
}

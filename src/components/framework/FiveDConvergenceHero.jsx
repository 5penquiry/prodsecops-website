import { useEffect, useState } from "react";

const perspectives = [
  { title: "PROACTIVE", detail: "Relevant exposure", color: "#3b82f6" },
  { title: "DETECTIVE", detail: "Reliable visibility", color: "#0ea5e9" },
  { title: "REACTIVE", detail: "Governed action", color: "#8b5cf6" },
  { title: "RECOVER", detail: "Trusted recovery", color: "#10b981" },
  { title: "COMPLIANCE", detail: "Defensible assurance", color: "#f3c34e" },
];

const crown = { x: 360, y: 72 };

/* Projected pentagonal load ring across the outer balloon envelope. */
const ring = [
  { x: 360, y: 204 },
  { x: 536, y: 320 },
  { x: 436, y: 466 },
  { x: 284, y: 466 },
  { x: 184, y: 320 },
];

/* Each ring vertex continues to a distinct controller anchor. */
const controllerAnchors = [
  { x: 360, y: 548 },
  { x: 402, y: 548 },
  { x: 382, y: 548 },
  { x: 338, y: 548 },
  { x: 318, y: 548 },
];

const pathFor = (index) => {
  const point = ring[index];
  const anchor = controllerAnchors[index];
  return `M${crown.x} ${crown.y} Q${point.x} ${point.y - 18} ${point.x} ${point.y} Q${point.x} ${point.y + 48} ${anchor.x} ${anchor.y}`;
};

const facePoints = (index) => {
  const a = ring[index];
  const b = ring[(index + 1) % ring.length];
  return `${crown.x},${crown.y} ${a.x},${a.y} ${b.x},${b.y}`;
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
      className="v10-pyramid-model"
      aria-label="Five-dimensional pentagonal Risk Governance balloon model"
      onMouseLeave={() => setPaused(false)}
    >
      <div className="v10-flight-grid grid-far" aria-hidden="true" />
      <div className="v10-flight-grid grid-near" aria-hidden="true" />
      <div className="v10-flight-horizon" aria-hidden="true" />

      <svg viewBox="0 0 720 720" role="img">
        <defs>
          <radialGradient id="v10-canopy-depth" cx="31%" cy="18%" r="82%">
            <stop offset="0" stopColor="#1a426f" />
            <stop offset=".48" stopColor="#0b233e" />
            <stop offset="1" stopColor="#030a15" />
          </radialGradient>
          <linearGradient id="v10-canopy-sheen" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#ffffff" stopOpacity=".14" />
            <stop offset=".43" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="1" stopColor="#38bdf8" stopOpacity=".05" />
          </linearGradient>
          <linearGradient id="v10-basket" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#07101e" />
            <stop offset=".5" stopColor="#304763" />
            <stop offset="1" stopColor="#07101e" />
          </linearGradient>
          <radialGradient id="v10-burner" cx="50%" cy="45%" r="55%">
            <stop offset="0" stopColor="#ffffff" />
            <stop offset=".2" stopColor="#67e8f9" />
            <stop offset=".5" stopColor="#3b82f6" stopOpacity=".9" />
            <stop offset="1" stopColor="#040914" stopOpacity="0" />
          </radialGradient>
          <filter id="v10-string-glow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="v10-flame-glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <clipPath id="v10-canopy-clip">
            <path d="M360 70C224 70 132 153 120 270C108 379 196 443 280 464C310 472 333 476 360 476C387 476 410 472 440 464C524 443 612 379 600 270C588 153 496 70 360 70Z" />
          </clipPath>
        </defs>

        <g className="v10-canopy">
          <path className="canopy-body" d="M360 70C224 70 132 153 120 270C108 379 196 443 280 464C310 472 333 476 360 476C387 476 410 472 440 464C524 443 612 379 600 270C588 153 496 70 360 70Z" />
          <g clipPath="url(#v10-canopy-clip)">
            <path className="canopy-sheen" d="M181 153C246 86 356 57 449 92C326 104 243 177 194 290C163 262 161 208 181 153Z" />
            <path className="canopy-seam" d="M132 238Q360 159 588 238" />
            <path className="canopy-seam" d="M128 319Q360 248 592 319" />
            <path className="canopy-seam" d="M166 396Q360 345 554 396" />
          </g>
          <ellipse className="canopy-mouth" cx="360" cy="469" rx="75" ry="17" />
        </g>

        {/* Five triangular faces form one projected pentagonal pyramid. */}
        <g className="v10-pyramid-faces" aria-hidden="true">
          {perspectives.map((item, index) => (
            <polygon
              key={item.title}
              points={facePoints(index)}
              className={active === index ? "active" : ""}
              style={{ "--face": item.color }}
            />
          ))}
        </g>

        {/* Pentagonal structural ring balances all five dimensional load paths. */}
        <polygon
          className="v10-pentagon-ring"
          points={ring.map((point) => `${point.x},${point.y}`).join(" ")}
        />

        {/* Each selected dimension highlights an adjacent pair from crown to controller base. */}
        <g className="v10-load-paths" aria-label="Five balanced dimensional load paths">
          {perspectives.map((item, index) => (
            <g
              key={item.title}
              className={`v10-load-path ${activePair.includes(index) ? "active" : ""}`}
              style={{ "--path-color": perspectives[active].color }}
            >
              <path d={pathFor(index)} filter={activePair.includes(index) ? "url(#v10-string-glow)" : undefined} />
              <circle cx={ring[index].x} cy={ring[index].y} r="4" />
            </g>
          ))}
          <circle className="v10-crown-node" cx={crown.x} cy={crown.y} r="6" />
        </g>

        <g className="v10-burner-assembly">
          <rect className="burner-frame" x="326" y="527" width="68" height="27" rx="8" />
          <ellipse className="burner-glow" cx="360" cy="522" rx="35" ry="29" filter="url(#v10-flame-glow)" />
          <path className="burner-flame flame-outer" d="M346 533C337 505 354 492 360 465C370 493 384 506 373 533Z" />
          <path className="burner-flame flame-inner" d="M353 532C349 514 358 504 361 489C368 508 372 517 367 532Z" />
        </g>

        <g className="v10-basket">
          <path className="basket-body" d="M313 549L407 549L398 619Q360 633 322 619Z" />
          <rect className="basket-rim" x="308" y="544" width="104" height="18" rx="8" />
          <path className="basket-weave" d="M323 568H397M321 587H399M320 605H400M337 561L331 620M360 561V628M383 561L389 620" />
        </g>
      </svg>

      <div className="v10-model-title">
        <span>PENTAGONAL 5D GOVERNANCE MODEL</span>
        <b>5D Threat-Intelligence</b>
        <small>Balanced Through Integrated Risk Governance</small>
      </div>

      <div className="v10-perspective-menu" aria-label="Select a threat-intelligence perspective">
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
          </button>
        ))}
      </div>
    </div>
  );
}

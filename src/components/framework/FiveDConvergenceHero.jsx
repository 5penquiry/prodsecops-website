import { useEffect, useState } from "react";

const perspectives = [
  { title: "PROACTIVE", detail: "Relevant exposure", color: "#3b82f6" },
  { title: "DETECTIVE", detail: "Reliable visibility", color: "#0ea5e9" },
  { title: "REACTIVE", detail: "Governed action", color: "#8b5cf6" },
  { title: "RECOVER", detail: "Trusted recovery", color: "#10b981" },
  { title: "COMPLIANCE", detail: "Defensible assurance", color: "#f3c34e" },
];

const crown = { x: 330, y: 60 };
const ring = [
  { x: 330, y: 181 },
  { x: 565, y: 303 },
  { x: 475, y: 475 },
  { x: 185, y: 475 },
  { x: 95, y: 303 },
];
const innerRing = [
  { x: 330, y: 220 },
  { x: 502, y: 310 },
  { x: 436, y: 435 },
  { x: 224, y: 435 },
  { x: 158, y: 310 },
];
const anchors = [
  { x: 330, y: 553 },
  { x: 371, y: 553 },
  { x: 353, y: 553 },
  { x: 307, y: 553 },
  { x: 289, y: 553 },
];

function stringPath(index) {
  const vertex = ring[index];
  const anchor = anchors[index];
  return `M${crown.x} ${crown.y} Q${vertex.x} ${vertex.y - 18} ${vertex.x} ${vertex.y} Q${vertex.x} ${vertex.y + 52} ${anchor.x} ${anchor.y}`;
}

function facePoints(index) {
  const first = ring[index];
  const second = ring[(index + 1) % ring.length];
  return `${crown.x},${crown.y} ${first.x},${first.y} ${second.x},${second.y}`;
}

export default function FiveDConvergenceHero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return undefined;
    const timer = window.setInterval(
      () => setActive((value) => (value + 1) % perspectives.length),
      4700,
    );
    return () => window.clearInterval(timer);
  }, [paused]);

  const activePair = [active, (active + 1) % perspectives.length];
  const current = perspectives[active];

  return (
    <div
      className="v12-model"
      aria-label="Five-dimensional threat-intelligence Risk Governance model"
      onMouseLeave={() => setPaused(false)}
    >
      <div className="v12-stage">
        <div className="v12-grid grid-back" aria-hidden="true" />
        <div className="v12-grid grid-front" aria-hidden="true" />
        <div className="v12-horizon" aria-hidden="true" />

        <svg viewBox="0 0 660 700" role="img">
          <defs>
            <radialGradient id="v12-envelope" cx="31%" cy="18%" r="83%">
              <stop offset="0" stopColor="#1c4777" />
              <stop offset=".5" stopColor="#0b233e" />
              <stop offset="1" stopColor="#030a15" />
            </radialGradient>
            <linearGradient id="v12-sheen" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#ffffff" stopOpacity=".14" />
              <stop offset=".5" stopColor="#ffffff" stopOpacity="0" />
              <stop offset="1" stopColor="#38bdf8" stopOpacity=".04" />
            </linearGradient>
            <linearGradient id="v12-basket" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#07101e" />
              <stop offset=".5" stopColor="#304763" />
              <stop offset="1" stopColor="#07101e" />
            </linearGradient>
            <radialGradient id="v12-energy" cx="50%" cy="45%" r="55%">
              <stop offset="0" stopColor="#fff" />
              <stop offset=".2" stopColor="#67e8f9" />
              <stop offset=".52" stopColor="#3b82f6" stopOpacity=".9" />
              <stop offset="1" stopColor="#040914" stopOpacity="0" />
            </radialGradient>
            <filter id="v12-path-glow" x="-70%" y="-70%" width="240%" height="240%">
              <feGaussianBlur stdDeviation="3.8" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
            <filter id="v12-flame-glow" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
            <clipPath id="v12-envelope-clip">
              <path d="M330 128C231 128 166 192 158 276C150 361 213 411 270 425C292 431 312 434 330 434C348 434 368 431 390 425C447 411 510 361 502 276C494 192 429 128 330 128Z" />
            </clipPath>
          </defs>

          <g className="v12-envelope">
            <path className="envelope-body" d="M330 128C231 128 166 192 158 276C150 361 213 411 270 425C292 431 312 434 330 434C348 434 368 431 390 425C447 411 510 361 502 276C494 192 429 128 330 128Z" />
            <g clipPath="url(#v12-envelope-clip)">
              <path className="envelope-sheen" d="M198 191C244 142 328 119 398 146C305 156 244 208 209 293C186 270 184 230 198 191Z" />
              <path className="envelope-seam" d="M166 246Q330 192 494 246" />
              <path className="envelope-seam" d="M163 311Q330 265 497 311" />
              <path className="envelope-seam" d="M194 375Q330 341 466 375" />
            </g>
            <ellipse className="envelope-mouth" cx="330" cy="428" rx="58" ry="13" />
          </g>

          <g className="v12-depth-cage" aria-hidden="true">
            <polygon points={innerRing.map((point) => `${point.x},${point.y}`).join(" ")} />
            {innerRing.map((point, index) => (
              <line key={index} x1={ring[index].x} y1={ring[index].y} x2={point.x} y2={point.y} />
            ))}
          </g>

          <g className="v12-faces" aria-hidden="true">
            {perspectives.map((item, index) => (
              <polygon
                key={item.title}
                points={facePoints(index)}
                className={active === index ? "active" : ""}
                style={{ "--face": item.color }}
              />
            ))}
          </g>

          <polygon className="v12-ring" points={ring.map((point) => `${point.x},${point.y}`).join(" ")} />

          <g className="v12-path-system" aria-label="Paired pentagonal intelligence paths">
            {perspectives.map((item, index) => (
              <g
                key={item.title}
                className={`v12-path ${activePair.includes(index) ? "active" : ""}`}
                style={{ "--path": current.color }}
              >
                <path d={stringPath(index)} filter={activePair.includes(index) ? "url(#v12-path-glow)" : undefined} />
                <circle cx={ring[index].x} cy={ring[index].y} r="5" />
              </g>
            ))}
            <circle className="v12-crown" cx={crown.x} cy={crown.y} r="7" />
          </g>

          <g className="v12-controller">
            <ellipse className="controller-orbit" cx="330" cy="519" rx="74" ry="20" />
            <rect className="controller-frame" x="296" y="528" width="68" height="27" rx="8" />
            <ellipse className="controller-energy" cx="330" cy="521" rx="35" ry="29" filter="url(#v12-flame-glow)" />
            <path className="controller-flame flame-outer" d="M316 534C307 506 324 493 330 466C340 494 354 507 343 534Z" />
            <path className="controller-flame flame-inner" d="M323 533C319 515 328 505 331 490C338 509 342 518 337 533Z" />
          </g>

          <g className="v12-basket">
            <path className="basket-body" d="M283 550L377 550L368 620Q330 634 292 620Z" />
            <rect className="basket-rim" x="278" y="545" width="104" height="18" rx="8" />
            <path className="basket-weave" d="M293 569H367M291 588H369M290 606H370M307 562L301 621M330 562V629M353 562L359 621" />
          </g>
        </svg>

        <div className="v12-caption">
          <span>5D PENTAGONAL GOVERNANCE CORE</span>
          <b>5D Threat-Intelligence</b>
          <small>Balanced Through Integrated Risk Governance</small>
        </div>
      </div>

      <aside className="v12-rail" aria-label="Five-dimensional intelligence controls">
        <header>
          <span>5D CONTROL PLANE</span>
          <b>Intelligence Perspectives</b>
          <small>Trace each dimension across its paired governance boundaries.</small>
        </header>

        <nav>
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
              <i>›</i>
            </button>
          ))}
        </nav>

        <footer style={{ "--status": current.color }}>
          <span>ACTIVE PAIRED PATH</span>
          <b>{current.title}</b>
          <small>Two adjacent load paths converge symmetrically on the Risk Governance controller.</small>
        </footer>
      </aside>
    </div>
  );
}

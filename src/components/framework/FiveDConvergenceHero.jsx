import { useEffect, useState } from "react";

const perspectives = [
  { title: "PROACTIVE", detail: "Relevant exposure", color: "#3b82f6" },
  { title: "DETECTIVE", detail: "Reliable visibility", color: "#0ea5e9" },
  { title: "REACTIVE", detail: "Governed action", color: "#8b5cf6" },
  { title: "RECOVER", detail: "Trusted recovery", color: "#10b981" },
  { title: "COMPLIANCE", detail: "Defensible assurance", color: "#f3c34e" },
];

/* All strings begin at the canopy mouth or lower skirt, never inside the canopy. */
const suspensionLines = [
  [286, 468, 318, 548],
  [322, 478, 339, 548],
  [360, 482, 360, 548],
  [398, 478, 381, 548],
  [434, 468, 402, 548],
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

  const activeStrings = [active, (active + 1) % suspensionLines.length];

  return (
    <div className="v8-balloon-model" aria-label="Integrated five-dimensional threat-intelligence balloon model">
      <div className="v8-flight-grid grid-far" aria-hidden="true" />
      <div className="v8-flight-grid grid-near" aria-hidden="true" />
      <div className="v8-flight-horizon" aria-hidden="true" />
      <div className="v8-air-streak streak-one" aria-hidden="true" />
      <div className="v8-air-streak streak-two" aria-hidden="true" />
      <div className="v8-air-streak streak-three" aria-hidden="true" />

      <svg viewBox="0 0 720 690" role="img">
        <defs>
          <radialGradient id="v8-canopy-depth" cx="32%" cy="19%" r="80%">
            <stop offset="0" stopColor="#183e69" />
            <stop offset=".48" stopColor="#0b233e" />
            <stop offset="1" stopColor="#030a15" />
          </radialGradient>
          <linearGradient id="v8-canopy-sheen" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#ffffff" stopOpacity=".13" />
            <stop offset=".44" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="1" stopColor="#38bdf8" stopOpacity=".05" />
          </linearGradient>
          <linearGradient id="v8-basket" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#07101e" />
            <stop offset=".5" stopColor="#304763" />
            <stop offset="1" stopColor="#07101e" />
          </linearGradient>
          <radialGradient id="v8-burner" cx="50%" cy="45%" r="55%">
            <stop offset="0" stopColor="#ffffff" />
            <stop offset=".2" stopColor="#67e8f9" />
            <stop offset=".5" stopColor="#3b82f6" stopOpacity=".88" />
            <stop offset="1" stopColor="#040914" stopOpacity="0" />
          </radialGradient>
          <filter id="v8-glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <clipPath id="v8-canopy-clip">
            <path d="M360 68C225 68 132 153 120 270C107 381 195 446 280 466C310 473 333 477 360 477C387 477 410 473 440 466C525 446 613 381 600 270C588 153 495 68 360 68Z" />
          </clipPath>
        </defs>

        <g className="v8-canopy">
          <path className="canopy-body" d="M360 68C225 68 132 153 120 270C107 381 195 446 280 466C310 473 333 477 360 477C387 477 410 473 440 466C525 446 613 381 600 270C588 153 495 68 360 68Z" />

          <g clipPath="url(#v8-canopy-clip)" className="v8-canopy-panels">
            {[0,1,2,3,4].map((index) => (
              <path
                key={index}
                className={active === index ? "active" : ""}
                style={{ "--panel": perspectives[index].color }}
                d={[
                  "M120 270Q180 150 360 68L280 466Q176 439 120 270Z",
                  "M208 120Q282 75 360 68L333 477Q304 474 280 466Z",
                  "M360 68Q438 75 512 120L440 466Q416 474 387 477Z",
                  "M512 120Q579 174 600 270Q544 439 440 466L360 68Z",
                  "M208 120Q360 34 512 120L360 68Z",
                ][index]}
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
              />
            ))}

            <path className="canopy-sheen" d="M181 153C246 85 357 56 449 91C326 103 242 177 194 291C163 262 161 207 181 153Z" />
            <path className="canopy-horizontal-seam" d="M132 237Q360 158 588 237" />
            <path className="canopy-horizontal-seam" d="M128 319Q360 247 592 319" />
            <path className="canopy-horizontal-seam" d="M166 397Q360 345 554 397" />
            <path className="canopy-vertical-seam" d="M360 68Q270 278 280 466" />
            <path className="canopy-vertical-seam" d="M360 68Q323 278 333 477" />
            <path className="canopy-vertical-seam" d="M360 68Q397 278 387 477" />
            <path className="canopy-vertical-seam" d="M360 68Q450 278 440 466" />
          </g>
          <ellipse className="canopy-mouth" cx="360" cy="469" rx="74" ry="17" />
        </g>

        {/* Suspension system stays below the canopy silhouette. */}
        <g className="v8-suspension">
          {suspensionLines.map((line, index) => (
            <line
              key={index}
              x1={line[0]} y1={line[1]} x2={line[2]} y2={line[3]}
              className={activeStrings.includes(index) ? "active" : ""}
              style={{ "--line": perspectives[active].color }}
            />
          ))}
        </g>

        <g className="v8-burner-assembly">
          <rect className="burner-frame" x="326" y="527" width="68" height="26" rx="8" />
          <ellipse className="burner-glow" cx="360" cy="522" rx="34" ry="28" filter="url(#v8-glow)" />
          <path className="burner-flame flame-outer" d="M346 532C337 505 354 492 360 465C370 493 384 505 373 532Z" />
          <path className="burner-flame flame-inner" d="M353 531C349 514 358 504 361 489C368 508 372 516 367 531Z" />
        </g>

        <g className="v8-basket">
          <path className="basket-body" d="M313 548L407 548L398 618Q360 632 322 618Z" />
          <rect className="basket-rim" x="308" y="543" width="104" height="18" rx="8" />
          <path className="basket-weave" d="M323 567H397M321 586H399M320 604H400M337 560L331 619M360 560V627M383 560L389 619" />
        </g>
      </svg>

      <div className="v8-model-title">
        <span>INTEGRATED 5D CONTEXT</span>
        <b>5D Threat-Intelligence</b>
        <small>Integrated Risk Governance</small>
      </div>

      <div className="v8-perspective-menu" aria-label="Select a threat-intelligence perspective">
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

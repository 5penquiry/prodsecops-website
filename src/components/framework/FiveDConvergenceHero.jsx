import { useEffect, useState } from "react";

const perspectives = [
  { title: "PROACTIVE", detail: "Relevant exposure", color: "#3b82f6" },
  { title: "DETECTIVE", detail: "Reliable visibility", color: "#0ea5e9" },
  { title: "REACTIVE", detail: "Governed action", color: "#8b5cf6" },
  { title: "RECOVER", detail: "Trusted recovery", color: "#10b981" },
  { title: "COMPLIANCE", detail: "Defensible assurance", color: "#f3c34e" },
];

/*
 * Each dimensional group contains three related load paths:
 * - one primary radial governance line from the crown to the burner frame,
 * - two secondary balancing lines from adjacent canopy-edge positions.
 * The groups are rendered above the canopy so the lines read as external
 * load-bearing cords, not as fabric seams.
 */
const stringGroups = [
  {
    primary: "M360 70 Q248 250 315 548",
    secondary: ["M360 70 Q166 245 305 548", "M360 70 Q284 300 332 548"],
  },
  {
    primary: "M360 70 Q308 255 338 548",
    secondary: ["M360 70 Q245 260 323 548", "M360 70 Q337 310 350 548"],
  },
  {
    primary: "M360 70 L360 548",
    secondary: ["M360 70 Q338 310 352 548", "M360 70 Q382 310 368 548"],
  },
  {
    primary: "M360 70 Q412 255 382 548",
    secondary: ["M360 70 Q383 310 370 548", "M360 70 Q475 260 397 548"],
  },
  {
    primary: "M360 70 Q472 250 405 548",
    secondary: ["M360 70 Q436 300 388 548", "M360 70 Q554 245 415 548"],
  },
];

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

  return (
    <div
      className="v9-balloon-model"
      aria-label="Five-dimensional threat-intelligence balloon with integrated Risk Governance"
      onMouseLeave={() => setPaused(false)}
    >
      <div className="v9-flight-grid grid-far" aria-hidden="true" />
      <div className="v9-flight-grid grid-near" aria-hidden="true" />
      <div className="v9-flight-horizon" aria-hidden="true" />
      <div className="v9-air-streak streak-one" aria-hidden="true" />
      <div className="v9-air-streak streak-two" aria-hidden="true" />
      <div className="v9-air-streak streak-three" aria-hidden="true" />

      <svg viewBox="0 0 720 720" role="img">
        <defs>
          <radialGradient id="v9-canopy-depth" cx="31%" cy="18%" r="82%">
            <stop offset="0" stopColor="#1a426f" />
            <stop offset=".48" stopColor="#0b233e" />
            <stop offset="1" stopColor="#030a15" />
          </radialGradient>
          <linearGradient id="v9-canopy-sheen" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#ffffff" stopOpacity=".14" />
            <stop offset=".43" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="1" stopColor="#38bdf8" stopOpacity=".05" />
          </linearGradient>
          <linearGradient id="v9-basket" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#07101e" />
            <stop offset=".5" stopColor="#304763" />
            <stop offset="1" stopColor="#07101e" />
          </linearGradient>
          <radialGradient id="v9-burner" cx="50%" cy="45%" r="55%">
            <stop offset="0" stopColor="#ffffff" />
            <stop offset=".2" stopColor="#67e8f9" />
            <stop offset=".5" stopColor="#3b82f6" stopOpacity=".9" />
            <stop offset="1" stopColor="#040914" stopOpacity="0" />
          </radialGradient>
          <filter id="v9-flame-glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="v9-string-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <clipPath id="v9-canopy-clip">
            <path d="M360 70C224 70 132 153 120 270C108 379 196 443 280 464C310 472 333 476 360 476C387 476 410 472 440 464C524 443 612 379 600 270C588 153 496 70 360 70Z" />
          </clipPath>
        </defs>

        {/* Balloon envelope */}
        <g className="v9-canopy">
          <path className="canopy-body" d="M360 70C224 70 132 153 120 270C108 379 196 443 280 464C310 472 333 476 360 476C387 476 410 472 440 464C524 443 612 379 600 270C588 153 496 70 360 70Z" />

          <g clipPath="url(#v9-canopy-clip)" className="v9-canopy-panels">
            {[0, 1, 2, 3, 4].map((index) => (
              <path
                key={index}
                className={active === index ? "active" : ""}
                style={{ "--panel": perspectives[index].color }}
                d={[
                  "M120 270Q180 150 360 70L280 464Q176 437 120 270Z",
                  "M207 121Q282 77 360 70L333 476Q304 473 280 464Z",
                  "M360 70Q438 77 513 121L440 464Q416 473 387 476Z",
                  "M513 121Q579 175 600 270Q544 437 440 464L360 70Z",
                  "M207 121Q360 35 513 121L360 70Z",
                ][index]}
              />
            ))}

            <path className="canopy-sheen" d="M181 153C246 86 356 57 449 92C326 104 243 177 194 290C163 262 161 208 181 153Z" />
            <path className="canopy-horizontal-seam" d="M132 238Q360 159 588 238" />
            <path className="canopy-horizontal-seam" d="M128 319Q360 248 592 319" />
            <path className="canopy-horizontal-seam" d="M166 396Q360 345 554 396" />
          </g>
          <ellipse className="canopy-mouth" cx="360" cy="469" rx="75" ry="17" />
        </g>

        {/* External five-dimensional cord groups. Drawn after canopy, therefore above its surface. */}
        <g className="v9-string-system" aria-label="Five integrated dimensional string groups">
          {stringGroups.map((group, index) => (
            <g
              key={perspectives[index].title}
              className={`v9-string-group ${active === index ? "active" : ""}`}
              style={{ "--string": perspectives[index].color }}
            >
              {group.secondary.map((path) => (
                <path key={path} className="secondary-string" d={path} />
              ))}
              <path className="primary-string" d={group.primary} filter={active === index ? "url(#v9-string-glow)" : undefined} />
              <circle className="crown-anchor" cx="360" cy="70" r="4" />
            </g>
          ))}
        </g>

        {/* Burner is the governance controller. */}
        <g className="v9-burner-assembly">
          <rect className="burner-frame" x="326" y="527" width="68" height="27" rx="8" />
          <ellipse className="burner-glow" cx="360" cy="522" rx="35" ry="29" filter="url(#v9-flame-glow)" />
          <path className="burner-flame flame-outer" d="M346 533C337 505 354 492 360 465C370 493 384 506 373 533Z" />
          <path className="burner-flame flame-inner" d="M353 532C349 514 358 504 361 489C368 508 372 517 367 532Z" />
        </g>

        <g className="v9-basket">
          <path className="basket-body" d="M313 549L407 549L398 619Q360 633 322 619Z" />
          <rect className="basket-rim" x="308" y="544" width="104" height="18" rx="8" />
          <path className="basket-weave" d="M323 568H397M321 587H399M320 605H400M337 561L331 620M360 561V628M383 561L389 620" />
        </g>
      </svg>

      <div className="v9-model-title">
        <span>FIVE BALANCED INTELLIGENCE DIMENSIONS</span>
        <b>5D Threat-Intelligence</b>
        <small>Integrated Risk Governance Core</small>
      </div>

      <div className="v9-perspective-menu" aria-label="Select a threat-intelligence perspective">
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

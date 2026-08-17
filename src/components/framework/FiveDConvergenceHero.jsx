import { useEffect, useState } from "react";

const perspectives = [
  { title: "PROACTIVE", detail: "Relevant exposure", color: "#3b82f6" },
  { title: "DETECTIVE", detail: "Reliable visibility", color: "#0ea5e9" },
  { title: "REACTIVE", detail: "Governed action", color: "#8b5cf6" },
  { title: "RECOVER", detail: "Trusted recovery", color: "#10b981" },
  { title: "COMPLIANCE", detail: "Defensible assurance", color: "#f3c34e" },
];

const suspensionLines = [
  [286, 455, 314, 548],
  [323, 466, 338, 548],
  [360, 470, 360, 548],
  [397, 466, 382, 548],
  [434, 455, 406, 548],
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
    <div className="v7-balloon-model" aria-label="Five-dimensional threat-intelligence balloon convergence model">
      <div className="v7-flight-grid grid-far" aria-hidden="true" />
      <div className="v7-flight-grid grid-near" aria-hidden="true" />
      <div className="v7-air-streak streak-one" aria-hidden="true" />
      <div className="v7-air-streak streak-two" aria-hidden="true" />
      <div className="v7-air-streak streak-three" aria-hidden="true" />

      <svg viewBox="0 0 720 680" role="img">
        <defs>
          <radialGradient id="v7-canopy-depth" cx="33%" cy="20%" r="78%">
            <stop offset="0" stopColor="#173a62" />
            <stop offset=".45" stopColor="#0b213c" />
            <stop offset="1" stopColor="#030a15" />
          </radialGradient>
          <linearGradient id="v7-canopy-sheen" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#ffffff" stopOpacity=".12" />
            <stop offset=".45" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="1" stopColor="#38bdf8" stopOpacity=".05" />
          </linearGradient>
          <linearGradient id="v7-basket" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#07101e" />
            <stop offset=".5" stopColor="#304763" />
            <stop offset="1" stopColor="#07101e" />
          </linearGradient>
          <radialGradient id="v7-burner" cx="50%" cy="45%" r="55%">
            <stop offset="0" stopColor="#ffffff" />
            <stop offset=".2" stopColor="#67e8f9" />
            <stop offset=".5" stopColor="#3b82f6" stopOpacity=".88" />
            <stop offset="1" stopColor="#040914" stopOpacity="0" />
          </radialGradient>
          <filter id="v7-glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <clipPath id="v7-canopy-clip">
            <path d="M360 55C210 55 112 151 104 278C96 401 205 467 285 477C310 481 330 483 360 483C390 483 410 481 435 477C515 467 624 401 616 278C608 151 510 55 360 55Z" />
          </clipPath>
        </defs>

        <g className="v7-canopy">
          <path className="canopy-body" d="M360 55C210 55 112 151 104 278C96 401 205 467 285 477C310 481 330 483 360 483C390 483 410 481 435 477C515 467 624 401 616 278C608 151 510 55 360 55Z" />

          <g clipPath="url(#v7-canopy-clip)" className="v7-canopy-panels">
            {[0,1,2,3,4].map((index) => (
              <path
                key={index}
                className={active === index ? "active" : ""}
                style={{ "--panel": perspectives[index].color }}
                d={[
                  "M104 278Q170 140 360 55L285 477Q165 452 104 278Z",
                  "M190 115Q277 65 360 55L330 483Q302 482 285 477Z",
                  "M360 55Q443 65 530 115L435 477Q418 482 390 483Z",
                  "M530 115Q597 170 616 278Q555 452 435 477L360 55Z",
                  "M190 115Q360 18 530 115L360 55Z",
                ][index]}
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
              />
            ))}

            <path className="canopy-sheen" d="M171 148C244 71 365 43 464 83C327 95 236 179 185 302C153 274 148 210 171 148Z" />
            <path className="canopy-horizontal-seam seam-one" d="M116 244Q360 155 604 244" />
            <path className="canopy-horizontal-seam seam-two" d="M111 330Q360 250 609 330" />
            <path className="canopy-horizontal-seam seam-three" d="M151 409Q360 350 569 409" />
            <path className="canopy-vertical-seam" d="M360 55Q265 280 285 477" />
            <path className="canopy-vertical-seam" d="M360 55Q320 280 330 483" />
            <path className="canopy-vertical-seam" d="M360 55Q400 280 390 483" />
            <path className="canopy-vertical-seam" d="M360 55Q455 280 435 477" />
          </g>

          <ellipse className="canopy-mouth" cx="360" cy="473" rx="76" ry="18" />
        </g>

        <g className="v7-suspension">
          {suspensionLines.map((line, index) => (
            <line
              key={index}
              x1={line[0]}
              y1={line[1]}
              x2={line[2]}
              y2={line[3]}
              className={activeStrings.includes(index) ? "active" : ""}
              style={{ "--line": perspectives[active].color }}
            />
          ))}
        </g>

        <g className="v7-burner-assembly">
          <rect className="burner-frame" x="324" y="526" width="72" height="28" rx="8" />
          <ellipse className="burner-glow" cx="360" cy="522" rx="36" ry="29" filter="url(#v7-glow)" />
          <path className="burner-flame flame-outer" d="M345 532C335 504 354 491 360 463C371 493 386 505 374 532Z" />
          <path className="burner-flame flame-inner" d="M353 531C348 513 358 503 361 488C369 508 373 516 367 531Z" />
        </g>

        <g className="v7-basket">
          <path className="basket-body" d="M311 548L409 548L400 626Q360 642 320 626Z" />
          <rect className="basket-rim" x="306" y="543" width="108" height="19" rx="8" />
          <path className="basket-weave" d="M322 565H398M320 585H400M319 605H401M336 560L330 626M360 560V635M384 560L390 626" />
          <text className="basket-title" x="360" y="581">5D THREAT-INTELLIGENCE</text>
          <text className="basket-subtitle" x="360" y="600">INTEGRATED RISK GOVERNANCE</text>
        </g>
      </svg>

      <div className="v7-perspective-menu" aria-label="Select a threat-intelligence perspective">
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

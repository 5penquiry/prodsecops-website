export default function AnimatedLogo({ footer = false }) {
  const suffix = footer ? "footer" : "header";

  return (
    <span className={`approved-logo ${footer ? "approved-logo-footer" : ""}`}>
      <svg viewBox="45 5 260 90" role="img" aria-label="ProdSecOps logo">
        <defs>
          <linearGradient id={`pg-${suffix}`} x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#0052cc" />
            <stop offset=".3" stopColor="#3b82f6" />
            <stop offset="1" stopColor="#003380" />
          </linearGradient>
          <linearGradient id={`og-${suffix}`} x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#059669" />
            <stop offset=".4" stopColor="#34d399" />
            <stop offset="1" stopColor="#047857" />
          </linearGradient>
          <filter id={`glow-${suffix}`} x="-30%" y="-70%" width="160%" height="240%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id={`word-glow-${suffix}`} x="-35%" y="-80%" width="170%" height="260%">
            <feGaussianBlur stdDeviation="1.35" result="wordBlur" />
            <feMerge>
              <feMergeNode in="wordBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <circle className="logo-ring ring-a" cx="175" cy="50" r="40" />
        <circle className="logo-ring ring-b" cx="175" cy="50" r="50" />

        <path
          fill="none"
          stroke={`url(#pg-${suffix})`}
          strokeWidth="11"
          strokeLinecap="round"
          d="M175 50C140 18 65 18 65 50s75 32 110 0"
        />
        <path
          fill="none"
          stroke={`url(#og-${suffix})`}
          strokeWidth="11"
          strokeLinecap="round"
          d="M175 50c35-32 110-32 110 0s-75 32-110 0"
        />
        <path
          className="logo-beam"
          pathLength="100"
          fill="none"
          stroke="#f4f7fb"
          strokeWidth="3"
          strokeLinecap="round"
          filter={`url(#glow-${suffix})`}
          d="M175 50C140 18 65 18 65 50s75 32 110 0c35-32 110-32 110 0s-75 32-110 0"
        />

        <circle className="logo-badge" cx="175" cy="50" r="19" />
        <circle cx="175" cy="50" r="16.5" fill="none" stroke="#3b82f6" strokeWidth="1.5" />

        <text
          className="logo-word logo-prod"
          x="112"
          y="55.5"
          textAnchor="middle"
          filter={`url(#word-glow-${suffix})`}
        >
          PROD
        </text>
        <text
          className="logo-word logo-ops"
          x="238"
          y="55.5"
          textAnchor="middle"
          filter={`url(#word-glow-${suffix})`}
        >
          OPS
        </text>
        <text className="logo-sec" x="175" y="54.5" textAnchor="middle">
          SEC
        </text>
      </svg>
    </span>
  );
}

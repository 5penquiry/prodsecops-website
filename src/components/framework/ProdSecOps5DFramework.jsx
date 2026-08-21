import { useEffect, useMemo, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import {
  Activity,
  AlertTriangle,
  BrainCircuit,
  ChevronRight,
  CircleCheck,
  Clock3,
  CloudCog,
  Crosshair,
  DatabaseBackup,
  Factory,
  FlaskConical,
  Gavel,
  Gauge,
  Layers3,
  LifeBuoy,
  Network,
  Radar,
  RefreshCcw,
  Scale,
  ScanSearch,
  ShieldCheck,
  Sparkles,
  Wrench,
  Workflow,
  Zap,
} from "lucide-react";

const AUTO_PLAY_INTERVAL = 5500;

const dimensions = [
  {
    id: "threat",
    short: "Sense",
    title: "Threat Intelligence",
    eyebrow: "Dimension 01",
    icon: Radar,
    color: "#35D7FF",
    glow: "rgba(53, 215, 255, 0.42)",
    statement:
      "Continuously senses external intelligence and internal telemetry, converting indicators, vulnerabilities, behaviors and exposures into threat hypotheses for integrated 5D interpretation.",
    steps: [
      "Collect external intelligence and internal telemetry",
      "Enrich entities, vulnerabilities, behaviors and exposures",
      "Map signals to identities, assets and production services",
      "Create prioritized threat hypotheses for 5D correlation",
    ],
    outcome:
      "Contextualized threat hypotheses ready for operational validation",
  },
  {
    id: "operations",
    short: "Detect",
    title: "Security Operations",
    eyebrow: "Dimension 02",
    icon: ShieldCheck,
    color: "#7C8CFF",
    glow: "rgba(124, 140, 255, 0.45)",
    statement:
      "Correlates findings, alerts, identities, behaviors and attack paths to validate active conditions, establish evidence confidence and determine response ownership.",
    steps: [
      "Correlate findings, alerts, identities and attack paths",
      "Validate evidence and suppress duplicate or unsupported noise",
      "Qualify the condition and establish incident confidence",
      "Create a unified operational narrative and response owner",
    ],
    outcome:
      "Validated security conditions with accountable response ownership",
  },
  {
    id: "production",
    short: "Understand",
    title: "Production Context",
    eyebrow: "Dimension 03",
    icon: Factory,
    color: "#A66CFF",
    glow: "rgba(166, 108, 255, 0.45)",
    statement:
      "Resolves affected services, runtime state, dependencies, business criticality and blast radius so treatment and recovery decisions reflect actual production consequences.",
    steps: [
      "Resolve affected services, assets and environments",
      "Trace runtime, data and dependency relationships",
      "Assess blast radius, criticality and customer exposure",
      "Determine resilience, continuity and business impact",
    ],
    outcome:
      "Production-aware prioritization grounded in actual service impact",
  },
  {
    id: "governance",
    short: "Decide",
    title: "Governance Context",
    eyebrow: "Dimension 04",
    icon: Gavel,
    color: "#FF6EAC",
    glow: "rgba(255, 110, 172, 0.42)",
    statement:
      "Applies integrated risk criteria, policies, obligations, authority and evidence standards so every action is proportionate, authorized, explainable and auditable.",
    steps: [
      "Evaluate integrated risk, obligations and control requirements",
      "Determine decision authority and required response time",
      "Authorize treatment, exception, recovery or risk acceptance",
      "Preserve accountability, residual risk and assurance evidence",
    ],
    outcome:
      "Defensible risk decisions aligned with authority and obligations",
  },
  {
    id: "orchestration",
    short: "Act",
    title: "Integrated Orchestration",
    eyebrow: "Dimension 05",
    icon: Workflow,
    color: "#FFB55E",
    glow: "rgba(255, 181, 94, 0.43)",
    statement:
      "Converts shared 5D context and authorized decisions into coordinated human and automated actions across security, engineering, operations, resilience, risk and leadership.",
    steps: [
      "Select the authorized operational pathway",
      "Assign accountable owners and enforce execution boundaries",
      "Coordinate remediation, response, recovery and monitoring",
      "Return outcomes, evidence and lessons to the shared context",
    ],
    outcome:
      "Controlled execution, measurable learning and continuous resilience",
  },
];

const orbitPositions = [
  { x: 0, y: -190 },
  { x: 180, y: -58 },
  { x: 112, y: 155 },
  { x: -112, y: 155 },
  { x: -180, y: -58 },
];

const riskFactors = [
  { label: "Threat likelihood", icon: Radar },
  { label: "Exposure and vulnerability", icon: ScanSearch },
  { label: "Business impact", icon: Gauge },
  { label: "Control weakness", icon: ShieldCheck },
  { label: "Recovery uncertainty", icon: LifeBuoy },
  { label: "Obligations and compliance", icon: Scale },
];

const riskOutputs = [
  "Risk priority",
  "Decision time",
  "Recommended pathway",
  "Required authority",
  "Residual risk",
];

const capabilities = [
  {
    id: "soc",
    title: "SOC Intelligence",
    verb: "Correlate and prioritize",
    icon: BrainCircuit,
    color: "#35D7FF",
    description:
      "Converts threat intelligence, security evidence and production exposure into prioritized operational intelligence.",
    items: [
      "Correlation and threat hunting",
      "Detection engineering",
      "Context-enriched investigation",
      "Situation awareness",
    ],
  },
  {
    id: "remediate",
    title: "Remediate",
    verb: "Treat and reduce risk",
    icon: Wrench,
    color: "#A7E85C",
    description:
      "Transforms an authorized risk decision into controlled treatment while preserving production safety.",
    items: [
      "Remove or reduce",
      "Isolate or compensate",
      "Accept with authority",
      "Verify risk reduction",
    ],
  },
  {
    id: "respond",
    title: "Incident Response",
    verb: "Contain and resolve",
    icon: AlertTriangle,
    color: "#FF6E6E",
    description:
      "Coordinates declaration, containment, investigation, eradication, recovery and assurance.",
    items: [
      "Declare and classify",
      "Contain and investigate",
      "Eradicate and recover",
      "Assure and learn",
    ],
  },
  {
    id: "resilience",
    title: "Resilience Operations",
    verb: "Maintain and restore",
    icon: DatabaseBackup,
    color: "#51C9FF",
    description:
      "Preserves and restores critical services through continuity, failover, disaster recovery and restoration.",
    items: [
      "Business continuity",
      "Failover and degraded mode",
      "Disaster recovery",
      "Restoration and exercises",
    ],
  },
];

const workflowStages = [
  {
    number: "01",
    title: "Observe",
    icon: Radar,
    color: "#35D7FF",
    summary: "Collect signals, monitor the environment and detect changes.",
    output: "Signals",
    domains: "Sense + Detect",
  },
  {
    number: "02",
    title: "Contextualize",
    icon: Network,
    color: "#45B8FF",
    summary: "Enrich and correlate assets, identities, threats and business context.",
    output: "Shared context",
    domains: "Sense + Understand",
  },
  {
    number: "03",
    title: "Validate",
    icon: CircleCheck,
    color: "#7C8CFF",
    summary: "Validate the condition, evidence confidence and materiality.",
    output: "Validated condition",
    domains: "Detect",
  },
  {
    number: "04",
    title: "Assess",
    icon: Gauge,
    color: "#A66CFF",
    summary: "Assess exposure, impact, blast radius, risk and recovery uncertainty.",
    output: "Risk and impact",
    domains: "Understand + Decide",
  },
  {
    number: "05",
    title: "Authorize",
    icon: Gavel,
    color: "#FF6EAC",
    summary: "Select the pathway and apply policy, authority and treatment criteria.",
    output: "Authorized plan",
    domains: "Decide",
  },
  {
    number: "06",
    title: "Test in SecLabs",
    icon: FlaskConical,
    color: "#C16CFF",
    summary: "Test efficacy, production safety, rollback and recovery readiness.",
    output: "Validated plan",
    domains: "Decide + Validate",
  },
  {
    number: "07",
    title: "Execute and Recover",
    icon: Zap,
    color: "#FFB55E",
    summary: "Execute the controlled action, monitor production and recover services.",
    output: "Treatment deployed",
    domains: "Act",
  },
  {
    number: "08",
    title: "Assure and Learn",
    icon: ShieldCheck,
    color: "#75DE8D",
    summary: "Verify risk reduction, capture evidence and improve controls and playbooks.",
    output: "Assured closure",
    domains: "Decide + Act",
  },
];

const secLabsControls = [
  {
    title: "Security efficacy",
    question: "Does the treatment reduce, stop or detect the risk?",
    icon: ShieldCheck,
  },
  {
    title: "Production safety",
    question: "Does the treatment preserve services and dependencies?",
    icon: Factory,
  },
  {
    title: "Automation safety",
    question: "Are preconditions, scope boundaries and rollback correct?",
    icon: Workflow,
  },
  {
    title: "Recovery readiness",
    question: "Can affected services and data recover quickly and safely?",
    icon: LifeBuoy,
  },
  {
    title: "Evidence quality",
    question: "Is evidence complete, attributable and auditable?",
    icon: Crosshair,
  },
];

const secLabsOutcomes = [
  { label: "Validated", color: "#75DE8D" },
  { label: "Validated with constraints", color: "#51C9FF" },
  { label: "Requires improvement", color: "#FFB55E" },
  { label: "Rejected", color: "#FF6E6E" },
  { label: "Emergency use only", color: "#C16CFF" },
];

function MiniSignal({ color, delay = 0, reduceMotion = false }) {
  if (reduceMotion) return null;

  return (
    <motion.span
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 rounded-[26px] border"
      style={{ borderColor: color }}
      initial={{ opacity: 0.65, scale: 1 }}
      animate={{ opacity: 0, scale: 1.25 }}
      transition={{ duration: 1.8, repeat: Infinity, delay, ease: "easeOut" }}
    />
  );
}

function DimensionButton({ item, active, onClick, reduceMotion }) {
  const Icon = item.icon;

  return (
    <motion.button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      aria-label={`Explore ${item.title}: ${item.short}`}
      className="group relative min-h-[122px] w-full overflow-hidden rounded-[28px] border p-px text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050714]"
      style={{
        borderColor: active ? item.color : "rgba(255,255,255,.12)",
        transformStyle: "preserve-3d",
        perspective: 900,
      }}
      initial={false}
      animate={
        reduceMotion
          ? {}
          : {
              y: active ? -10 : 0,
              scale: active ? 1.035 : 1,
              rotateX: active ? -3 : 0,
              z: active ? 25 : 0,
              boxShadow: active
                ? `0 24px 70px ${item.glow}, inset 0 1px 0 rgba(255,255,255,.3)`
                : "0 12px 32px rgba(0,0,0,.2)",
            }
      }
      whileHover={reduceMotion ? {} : { y: -8, scale: 1.025, rotateX: -2, z: 20 }}
      whileTap={reduceMotion ? {} : { scale: 0.985 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
    >
      {active && <MiniSignal color={item.color} reduceMotion={reduceMotion} />}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[.12] via-white/[.035] to-transparent" />
      <motion.div
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-1 rounded-full"
        style={{ background: item.color }}
        initial={false}
        animate={{ width: active ? "100%" : "0%" }}
        transition={{
          duration: reduceMotion || !active ? 0.2 : AUTO_PLAY_INTERVAL / 1000,
          ease: "linear",
        }}
      />
      <div className="relative flex h-full items-center gap-4 p-5">
        <div
          className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-white/15 bg-black/25"
          style={{
            color: item.color,
            boxShadow: active ? `0 0 30px ${item.glow}` : undefined,
            transform: "translateZ(18px)",
          }}
        >
          <Icon aria-hidden="true" size={27} strokeWidth={1.8} />
        </div>
        <div className="min-w-0" style={{ transform: "translateZ(12px)" }}>
          <p className="mb-1 text-[11px] font-bold uppercase tracking-[.22em] text-white/45">
            {item.eyebrow}
          </p>
          <p className="text-lg font-semibold leading-tight text-white">{item.short}</p>
          <p className="mt-1 truncate text-sm text-white/[.58]">{item.title}</p>
        </div>
        <ChevronRight
          aria-hidden="true"
          size={18}
          className={`ml-auto shrink-0 transition-transform duration-300 ${
            active ? "translate-x-1 text-white" : "text-white/25 group-hover:translate-x-1"
          }`}
        />
      </div>
    </motion.button>
  );
}

function CapabilityCard({ item, active, onClick, reduceMotion }) {
  const Icon = item.icon;

  return (
    <motion.button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className="relative overflow-hidden rounded-[26px] border bg-[#090d1c]/90 p-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
      style={{ borderColor: active ? item.color : "rgba(255,255,255,.1)" }}
      animate={
        reduceMotion
          ? {}
          : {
              y: active ? -6 : 0,
              boxShadow: active ? `0 18px 50px ${item.color}32` : "0 12px 30px rgba(0,0,0,.25)",
            }
      }
      whileHover={reduceMotion ? {} : { y: -6 }}
    >
      <div className="flex items-start gap-4">
        <div
          className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/[.05]"
          style={{ color: item.color }}
        >
          <Icon aria-hidden="true" size={25} />
        </div>
        <div>
          <h4 className="text-lg font-semibold">{item.title}</h4>
          <p className="mt-1 text-sm font-medium" style={{ color: item.color }}>
            {item.verb}
          </p>
        </div>
      </div>
      <p className="mt-4 text-sm leading-6 text-white/60">{item.description}</p>
      <ul className="mt-4 space-y-2 text-sm text-white/75">
        {item.items.map((value) => (
          <li key={value} className="flex gap-2">
            <span style={{ color: item.color }}>•</span>
            <span>{value}</span>
          </li>
        ))}
      </ul>
    </motion.button>
  );
}

export default function ProdSecOps5DFramework() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeCapability, setActiveCapability] = useState(0);
  const [activeStage, setActiveStage] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();

  const active = dimensions[activeIndex];
  const ActiveIcon = active.icon;

  useEffect(() => {
    if (paused || reduceMotion) return undefined;
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % dimensions.length);
    }, AUTO_PLAY_INTERVAL);
    return () => window.clearInterval(timer);
  }, [paused, reduceMotion]);

  useEffect(() => {
    if (paused || reduceMotion) return undefined;
    const timer = window.setInterval(() => {
      setActiveStage((current) => (current + 1) % workflowStages.length);
    }, 3200);
    return () => window.clearInterval(timer);
  }, [paused, reduceMotion]);

  const particles = useMemo(
    () =>
      Array.from({ length: 24 }, (_, index) => ({
        left: `${(index * 41) % 100}%`,
        top: `${(index * 67) % 96}%`,
        delay: (index % 7) * 0.5,
        size: 1 + (index % 3),
      })),
    []
  );

  return (
    <section
      id="prodsecops-5d-framework"
      aria-labelledby="prodsecops-5d-heading"
      className="relative overflow-hidden bg-[#050714] px-5 py-16 font-sans text-white sm:px-8 lg:px-12"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 -top-28 h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute -right-40 top-28 h-[620px] w-[620px] rounded-full bg-violet-500/10 blur-[140px]" />
        <div className="absolute bottom-[-220px] left-1/3 h-[520px] w-[720px] rounded-full bg-fuchsia-500/10 blur-[150px]" />
        <div
          className="absolute inset-0 opacity-[.13]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
            maskImage: "linear-gradient(to bottom, black, transparent 88%)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent 88%)",
          }}
        />
        {!reduceMotion &&
          particles.map((particle, index) => (
            <motion.span
              key={`particle-${index}`}
              className="absolute rounded-full bg-cyan-200"
              style={{
                left: particle.left,
                top: particle.top,
                width: particle.size,
                height: particle.size,
              }}
              animate={{ opacity: [0.1, 0.7, 0.1], y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: particle.delay }}
            />
          ))}
      </div>

      <div className="relative mx-auto max-w-[1600px]">
        <header className="mb-11 flex flex-col justify-between gap-6 xl:flex-row xl:items-end">
          <div className="max-w-6xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[.07] px-4 py-2 text-sm font-semibold tracking-wide text-cyan-100">
              <Sparkles aria-hidden="true" size={16} />
              Integrated Security Domain Operations
            </div>
            <h2
              id="prodsecops-5d-heading"
              className="max-w-6xl text-4xl font-semibold leading-[1.04] tracking-[-.035em] sm:text-5xl lg:text-7xl"
            >
              ProdSecOps{" "}
              <span className="bg-gradient-to-r from-cyan-200 via-indigo-300 to-fuchsia-300 bg-clip-text text-transparent">
                5D Integrated Framework
              </span>
            </h2>
            <p className="mt-6 max-w-5xl text-lg leading-8 text-white/[.68] sm:text-xl">
              Five dimensions create shared operational context. Integrated Risk Management determines priority,
              authority and treatment. SecLabs validates efficacy, production safety and recovery readiness.
              Orchestration coordinates SOC Intelligence, remediation, incident response and resilience operations.
            </p>
          </div>
          <div className="flex items-center gap-3 self-start rounded-2xl border border-white/10 bg-white/[.055] px-4 py-3 backdrop-blur-xl xl:self-auto">
            <Activity aria-hidden="true" className="text-emerald-300" size={20} />
            <div>
              <p className="text-xs font-bold uppercase tracking-[.18em] text-white/40">Framework state</p>
              <p className="text-sm font-semibold text-white/[.85]">Continuous risk-governed loop</p>
            </div>
            <span
              aria-hidden="true"
              className={`ml-2 h-2.5 w-2.5 rounded-full bg-emerald-300 shadow-[0_0_16px_#6ee7b7] ${
                reduceMotion ? "" : "animate-pulse"
              }`}
            />
          </div>
        </header>

        <div className="grid items-stretch gap-7 xl:grid-cols-[1.02fr_.98fr]">
          <div className="relative min-h-[620px] overflow-hidden rounded-[36px] border border-white/10 bg-white/[.045] p-5 shadow-[0_35px_100px_rgba(0,0,0,.45)] backdrop-blur-xl sm:p-8">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/70 to-transparent" />
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[.24em] text-cyan-200/70">5D shared context engine</p>
                <h3 className="mt-2 text-2xl font-semibold sm:text-3xl">Every signal is resolved through 5D</h3>
              </div>
              <Layers3 aria-hidden="true" className="hidden text-cyan-200/70 sm:block" size={30} />
            </div>

            <div
              className="relative mx-auto mt-7 hidden h-[475px] max-w-[620px] place-items-center sm:grid"
              style={{ perspective: 1200, transformStyle: "preserve-3d" }}
            >
              <motion.div
                aria-hidden="true"
                className="absolute h-[370px] w-[370px] rounded-full border border-cyan-200/15"
                style={{ transform: "rotateX(67deg)", boxShadow: "0 0 90px rgba(53,215,255,.1)" }}
                animate={reduceMotion ? {} : { rotateZ: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                aria-hidden="true"
                className="absolute h-[440px] w-[440px] rounded-full border border-dashed border-violet-200/10"
                style={{ transform: "rotateX(68deg)" }}
                animate={reduceMotion ? {} : { rotateZ: -360 }}
                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="relative z-20 grid h-52 w-52 place-items-center rounded-full border border-cyan-100/30 bg-[#071329]/95 text-center shadow-[0_0_90px_rgba(53,215,255,.22),inset_0_0_50px_rgba(124,140,255,.17)]"
                style={{ transformStyle: "preserve-3d" }}
                animate={reduceMotion ? {} : { y: [0, -9, 0], rotateY: [0, 8, 0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="absolute inset-3 rounded-full border border-white/10" />
                <div className="relative" style={{ transform: "translateZ(28px)" }}>
                  <BrainCircuit aria-hidden="true" className="mx-auto mb-3 text-cyan-200" size={38} />
                  <p className="text-xs font-bold uppercase tracking-[.2em] text-cyan-100/[.55]">5D correlation</p>
                  <p className="mt-2 text-xl font-semibold">Shared Operational Context</p>
                  <p className="mt-1 text-sm text-white/50">One operational truth</p>
                </div>
              </motion.div>

              {dimensions.map((item, index) => {
                const Icon = item.icon;
                const position = orbitPositions[index];
                const isActive = index === activeIndex;
                return (
                  <motion.button
                    type="button"
                    key={item.id}
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Select ${item.title}`}
                    aria-pressed={isActive}
                    className="absolute z-30 grid h-[104px] w-[138px] place-items-center rounded-[24px] border bg-[#0a0d20]/95 p-3 text-center backdrop-blur-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                    style={{
                      left: "50%",
                      top: "50%",
                      marginLeft: -69,
                      marginTop: -52,
                      borderColor: isActive ? item.color : "rgba(255,255,255,.13)",
                      transformStyle: "preserve-3d",
                    }}
                    animate={
                      reduceMotion
                        ? { x: position.x, y: position.y }
                        : {
                            x: position.x,
                            y: position.y,
                            scale: isActive ? 1.14 : 1,
                            z: isActive ? 45 : 0,
                            boxShadow: isActive
                              ? `0 18px 55px ${item.glow}`
                              : "0 13px 30px rgba(0,0,0,.38)",
                          }
                    }
                    whileHover={reduceMotion ? {} : { scale: 1.1, z: 35 }}
                    transition={{ type: "spring", stiffness: 230, damping: 22 }}
                  >
                    {isActive && (
                      <MiniSignal color={item.color} delay={0.1} reduceMotion={reduceMotion} />
                    )}
                    <Icon aria-hidden="true" size={25} style={{ color: item.color }} />
                    <span className="mt-1 text-[13px] font-semibold leading-tight">{item.title}</span>
                  </motion.button>
                );
              })}

              {orbitPositions.map((position, index) => {
                const connectorLength = Math.hypot(position.x, position.y) - 85;
                const connectorAngle = (Math.atan2(position.y, position.x) * 180) / Math.PI;
                return (
                  <motion.div
                    aria-hidden="true"
                    key={`beam-${dimensions[index].id}`}
                    className="pointer-events-none absolute left-1/2 top-1/2 h-px origin-left"
                    style={{
                      width: connectorLength,
                      background: `linear-gradient(90deg, ${dimensions[index].color}77, transparent)`,
                      rotate: `${connectorAngle}deg`,
                    }}
                    animate={{
                      opacity:
                        index === activeIndex && !reduceMotion
                          ? [0.25, 1, 0.25]
                          : index === activeIndex
                            ? 0.8
                            : 0.18,
                    }}
                    transition={{ duration: 1.5, repeat: reduceMotion ? 0 : Infinity }}
                  />
                );
              })}
            </div>

            <div className="mt-6 grid gap-3 sm:hidden">
              {dimensions.map((item, index) => {
                const Icon = item.icon;
                const isActive = index === activeIndex;
                return (
                  <button
                    type="button"
                    key={item.id}
                    onClick={() => setActiveIndex(index)}
                    aria-pressed={isActive}
                    className="flex items-center gap-3 rounded-2xl border p-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                    style={{
                      borderColor: isActive ? item.color : "rgba(255,255,255,.1)",
                      background: isActive ? item.glow : "rgba(255,255,255,.03)",
                    }}
                  >
                    <Icon aria-hidden="true" style={{ color: item.color }} />
                    <span className="font-semibold">{item.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div
            className="relative overflow-hidden rounded-[36px] border border-white/10 bg-[#090b1b]/90 p-6 shadow-[0_35px_100px_rgba(0,0,0,.42)] sm:p-9"
            aria-live="polite"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 18, rotateX: 4 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                exit={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -14 }}
                transition={{ duration: reduceMotion ? 0 : 0.42 }}
              >
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[.24em]" style={{ color: active.color }}>
                      {active.eyebrow}
                    </p>
                    <h3 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">{active.title}</h3>
                  </div>
                  <motion.div
                    aria-hidden="true"
                    className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl border border-white/15 bg-white/[.06]"
                    style={{ color: active.color, boxShadow: `0 0 35px ${active.glow}` }}
                    animate={reduceMotion ? {} : { rotateY: [0, 360] }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                  >
                    <ActiveIcon size={31} />
                  </motion.div>
                </div>
                <p
                  className="mt-7 border-l-2 pl-5 text-lg leading-8 text-white/70"
                  style={{ borderColor: active.color }}
                >
                  {active.statement}
                </p>
                <div className="mt-8">
                  <div className="mb-5 flex items-center gap-3">
                    <Network aria-hidden="true" size={20} style={{ color: active.color }} />
                    <h4 className="text-sm font-bold uppercase tracking-[.2em] text-white/55">Function flow</h4>
                  </div>
                  <div className="space-y-3">
                    {active.steps.map((step, index) => (
                      <motion.div
                        key={step}
                        className="relative flex items-center gap-4 overflow-hidden rounded-2xl border border-white/[.08] bg-white/[.035] p-4"
                        initial={reduceMotion ? { opacity: 1 } : { opacity: 0, x: 22 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: reduceMotion ? 0 : index * 0.1 }}
                      >
                        <div
                          className="grid h-9 w-9 shrink-0 place-items-center rounded-xl text-sm font-bold text-[#050714]"
                          style={{ background: active.color }}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </div>
                        <p className="text-[15px] font-medium leading-6 text-white/[.82]">{step}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div className="mt-7 rounded-[24px] border border-white/10 bg-gradient-to-r from-white/[.08] to-transparent p-5">
                  <p className="text-xs font-bold uppercase tracking-[.2em] text-white/40">Operational outcome</p>
                  <div className="mt-2 flex items-start gap-3">
                    <Crosshair aria-hidden="true" className="mt-1 shrink-0" size={20} style={{ color: active.color }} />
                    <p className="text-lg font-semibold leading-7">{active.outcome}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <section
          aria-labelledby="prodsecops-dimension-controls"
          className="mt-8"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
        >
          <div className="mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.22em] text-white/40">Explore the context engine</p>
              <h3 id="prodsecops-dimension-controls" className="mt-2 text-2xl font-semibold sm:text-3xl">
                Select a dimension to reveal its function flow
              </h3>
            </div>
            <p className="text-sm text-white/45">
              {reduceMotion
                ? "Select a dimension to explore"
                : paused
                  ? "Guided preview paused • Move away to resume"
                  : "Auto-guided preview • Hover to pause • Click to explore"}
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {dimensions.map((item, index) => (
              <DimensionButton
                key={item.id}
                item={item}
                active={index === activeIndex}
                onClick={() => setActiveIndex(index)}
                reduceMotion={reduceMotion}
              />
            ))}
          </div>
        </section>

        <section className="mt-12 grid gap-7 xl:grid-cols-[1.08fr_.92fr]">
          <div className="rounded-[34px] border border-emerald-300/15 bg-emerald-300/[.035] p-6 sm:p-8">
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-[.22em] text-emerald-200/70">
                  Integrated Risk Management and Governance
                </p>
                <h3 className="mt-2 text-2xl font-semibold sm:text-3xl">
                  Risk is calculated from integrated context across all five dimensions
                </h3>
              </div>
              <Scale aria-hidden="true" className="hidden text-emerald-300 sm:block" size={34} />
            </div>
            <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {riskFactors.map((factor) => {
                const Icon = factor.icon;
                return (
                  <div key={factor.label} className="rounded-2xl border border-white/[.08] bg-black/20 p-4">
                    <Icon aria-hidden="true" className="text-emerald-300" size={22} />
                    <p className="mt-3 text-sm font-semibold text-white/85">{factor.label}</p>
                  </div>
                );
              })}
            </div>
            <div className="mt-6 rounded-2xl border border-emerald-300/15 bg-black/20 p-5">
              <p className="text-xs font-bold uppercase tracking-[.2em] text-emerald-200/60">Risk decision outputs</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {riskOutputs.map((output) => (
                  <span key={output} className="rounded-full border border-emerald-300/15 bg-emerald-300/[.06] px-3 py-2 text-sm text-emerald-50/80">
                    {output}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-[34px] border border-cyan-300/15 bg-cyan-300/[.035] p-6 sm:p-8">
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-[.22em] text-cyan-200/70">Real-time decision engine</p>
                <h3 className="mt-2 text-2xl font-semibold sm:text-3xl">Context continuously updates the next safe action</h3>
              </div>
              <Zap aria-hidden="true" className="hidden text-cyan-300 sm:block" size={34} />
            </div>
            <div className="mt-7 space-y-4">
              {[
                [Activity, "Continuous ingestion", "External intelligence, telemetry, service health and change events update the context."],
                [BrainCircuit, "Shared 5D correlation", "Threat, evidence, production impact, authority and response feasibility are evaluated together."],
                [Clock3, "Decision latency", "Conditions are classified as immediate, urgent or planned so action occurs at the right speed."],
                [ShieldCheck, "Governed execution", "Pre-authorized, human-approved or human-led pathways are selected according to risk."],
              ].map(([Icon, title, text]) => (
                <div key={title} className="flex gap-4 rounded-2xl border border-white/[.08] bg-black/20 p-4">
                  <Icon aria-hidden="true" className="mt-1 shrink-0 text-cyan-300" size={22} />
                  <div>
                    <p className="font-semibold">{title}</p>
                    <p className="mt-1 text-sm leading-6 text-white/60">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-12">
          <div className="mb-6">
            <p className="text-xs font-bold uppercase tracking-[.22em] text-amber-200/70">Operational capability pathways</p>
            <h3 className="mt-2 text-2xl font-semibold sm:text-3xl">Enabled by shared 5D context and governed risk decisions</h3>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {capabilities.map((item, index) => (
              <CapabilityCard
                key={item.id}
                item={item}
                active={index === activeCapability}
                onClick={() => setActiveCapability(index)}
                reduceMotion={reduceMotion}
              />
            ))}
          </div>
        </section>

        <section
          className="mt-12 rounded-[36px] border border-cyan-300/15 bg-white/[.035] p-6 sm:p-8"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
        >
          <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.22em] text-cyan-200/70">8-stage governed workflow</p>
              <h3 className="mt-2 text-2xl font-semibold sm:text-3xl">A continuous closed loop from signal to assurance</h3>
            </div>
            <p className="text-sm text-white/45">Select any stage to inspect its role and output</p>
          </div>
          <div className="mt-7 grid gap-3 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-8">
            {workflowStages.map((stage, index) => {
              const Icon = stage.icon;
              const isActive = index === activeStage;
              return (
                <motion.button
                  type="button"
                  key={stage.number}
                  onClick={() => setActiveStage(index)}
                  aria-pressed={isActive}
                  className="relative min-h-[235px] overflow-hidden rounded-[24px] border bg-[#080c1b]/90 p-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  style={{ borderColor: isActive ? stage.color : "rgba(255,255,255,.09)" }}
                  animate={
                    reduceMotion
                      ? {}
                      : {
                          y: isActive ? -7 : 0,
                          boxShadow: isActive ? `0 18px 45px ${stage.color}2E` : "0 10px 24px rgba(0,0,0,.18)",
                        }
                  }
                  whileHover={reduceMotion ? {} : { y: -6 }}
                >
                  <div className="flex items-center justify-between">
                    <span className="grid h-10 w-10 place-items-center rounded-full border font-bold" style={{ color: stage.color, borderColor: `${stage.color}66` }}>
                      {stage.number}
                    </span>
                    <Icon aria-hidden="true" size={22} style={{ color: stage.color }} />
                  </div>
                  <h4 className="mt-4 font-semibold" style={{ color: isActive ? stage.color : "white" }}>
                    {stage.title}
                  </h4>
                  <p className="mt-3 text-sm leading-6 text-white/60">{stage.summary}</p>
                  <div className="mt-4 border-t border-white/[.08] pt-3 text-xs">
                    <p className="text-white/35">Output</p>
                    <p className="mt-1 font-semibold text-white/75">{stage.output}</p>
                    <p className="mt-3 text-white/35">Primary domains</p>
                    <p className="mt-1" style={{ color: stage.color }}>{stage.domains}</p>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </section>

        <section className="mt-12 grid gap-7 xl:grid-cols-[1fr_.78fr]">
          <div className="rounded-[36px] border border-fuchsia-300/20 bg-fuchsia-300/[.035] p-6 sm:p-8">
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-[.22em] text-fuchsia-200/70">SecLabs testbed validation fabric</p>
                <h3 className="mt-2 text-2xl font-semibold sm:text-3xl">Validate before change, or immediately after urgent action</h3>
              </div>
              <FlaskConical aria-hidden="true" className="hidden text-fuchsia-300 sm:block" size={36} />
            </div>
            <div className="mt-7 grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
              {secLabsControls.map((control) => {
                const Icon = control.icon;
                return (
                  <div key={control.title} className="rounded-2xl border border-fuchsia-300/15 bg-black/20 p-4">
                    <Icon aria-hidden="true" className="text-fuchsia-300" size={23} />
                    <p className="mt-3 font-semibold">{control.title}</p>
                    <p className="mt-2 text-sm leading-6 text-white/55">{control.question}</p>
                  </div>
                );
              })}
            </div>
            <div className="mt-6 rounded-2xl border border-fuchsia-300/15 bg-black/20 p-5">
              <p className="text-xs font-bold uppercase tracking-[.2em] text-fuchsia-200/60">SecLabs integration chain</p>
              <div className="mt-4 grid gap-3 text-center sm:grid-cols-5">
                {["Authorized treatment", "Representative scenario", "Execute tests", "Measure and validate", "Release or return"].map((value, index) => (
                  <div key={value} className="relative rounded-xl border border-white/[.08] bg-white/[.035] px-3 py-4 text-sm text-white/70">
                    {value}
                    {index < 4 && <ChevronRight aria-hidden="true" className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 text-fuchsia-300 sm:block" size={18} />}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-[36px] border border-fuchsia-300/20 bg-[#0b0818]/90 p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[.22em] text-fuchsia-200/70">Validation outcomes</p>
            <div className="mt-5 space-y-3">
              {secLabsOutcomes.map((outcome) => (
                <div key={outcome.label} className="flex items-center gap-3 rounded-2xl border border-white/[.08] bg-white/[.035] p-4">
                  <CircleCheck aria-hidden="true" size={21} style={{ color: outcome.color }} />
                  <span className="font-medium">{outcome.label}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-amber-300/15 bg-amber-300/[.05] p-5">
              <p className="font-semibold text-amber-100">Emergency pathway</p>
              <p className="mt-2 text-sm leading-6 text-white/60">
                Urgent containment may use a bounded pre-authorized action, followed by mandatory retrospective SecLabs validation, evidence review and playbook improvement.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12 grid gap-7 lg:grid-cols-3">
          <div className="rounded-[30px] border border-cyan-300/15 bg-cyan-300/[.035] p-6">
            <Gauge aria-hidden="true" className="text-cyan-300" size={28} />
            <h3 className="mt-4 text-xl font-semibold">Dynamic recovery confidence</h3>
            <p className="mt-3 text-sm leading-6 text-white/60">
              Service criticality, dependency health, backup status, failover availability, recovery objectives and recent test evidence influence every risk decision.
            </p>
          </div>
          <div className="rounded-[30px] border border-violet-300/15 bg-violet-300/[.035] p-6">
            <CloudCog aria-hidden="true" className="text-violet-300" size={28} />
            <h3 className="mt-4 text-xl font-semibold">SecLabs recovery testing</h3>
            <p className="mt-3 text-sm leading-6 text-white/60">
              Failover, restoration, data recovery, restart ordering and rollback procedures are validated against production-representative scenarios.
            </p>
          </div>
          <div className="rounded-[30px] border border-emerald-300/15 bg-emerald-300/[.035] p-6">
            <RefreshCcw aria-hidden="true" className="text-emerald-300" size={28} />
            <h3 className="mt-4 text-xl font-semibold">Assurance and learning</h3>
            <p className="mt-3 text-sm leading-6 text-white/60">
              Production outcomes are compared with SecLabs expectations so controls, runbooks, recovery procedures and risk decisions improve continuously.
            </p>
          </div>
        </section>

        <div className="mt-10 flex flex-col justify-between gap-3 border-t border-white/10 py-7 text-sm text-white/45 md:flex-row">
          <p>ProdSecOps 5D • Contextual intelligence → risk-governed decisions → validated actions → resilient outcomes</p>
          <p>Observe → Contextualize → Validate → Assess → Authorize → Test → Execute and Recover → Assure</p>
        </div>
      </div>
    </section>
  );
}

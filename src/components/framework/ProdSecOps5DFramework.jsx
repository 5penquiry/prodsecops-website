import { useEffect, useMemo, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import {
  Activity,
  BrainCircuit,
  ChevronRight,
  Crosshair,
  Factory,
  Gavel,
  Layers3,
  Network,
  Radar,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

const AUTO_PLAY_INTERVAL = 4500;

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
      "Continuously senses external and internal signals. Threat Intelligence does not operate as a stand-alone feed. Its context is interpreted through every integrated ProdSecOps dimension.",
    steps: [
      "Collect external intelligence and internal telemetry",
      "Enrich identities, assets, vulnerabilities and behaviors",
      "Map signals to exposed production services",
      "Prioritize evidence using risk and governance criteria",
    ],
    outcome:
      "Contextualized threat hypotheses ready for validation and action",
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
      "Correlates findings, alerts and incidents to determine whether threat hypotheses are active, material and actionable.",
    steps: [
      "Correlate findings, alerts, identities and attack paths",
      "Validate evidence and suppress duplicate noise",
      "Create a unified incident narrative",
      "Coordinate detection, investigation and response",
    ],
    outcome:
      "Verified operational risk with accountable response ownership",
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
      "Explains what is running, how services depend on one another, and where a security condition can affect resilience, availability or customers.",
    steps: [
      "Resolve affected services, assets and environments",
      "Trace runtime, data and dependency relationships",
      "Assess blast radius and service criticality",
      "Connect remediation to engineering workflows",
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
      "Applies criteria, authority and obligations so that each decision is risk-based, authorized, explainable and auditable.",
    steps: [
      "Apply policies, controls and regulatory obligations",
      "Determine risk acceptance and escalation authority",
      "Set remediation criteria, timelines and evidence requirements",
      "Preserve decisions for assurance and audit",
    ],
    outcome:
      "Defensible decisions aligned with organizational obligations",
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
      "Converts shared 5D context into coordinated action across security, engineering, operations, risk and leadership.",
    steps: [
      "Select the response path from combined 5D evidence",
      "Assign accountable owners and automate authorized actions",
      "Track remediation, exceptions and service recovery",
      "Feed outcomes back into sensing and control improvement",
    ],
    outcome:
      "Closed-loop action, measurable learning and continuous resilience",
  },
];

const orbitPositions = [
  { x: 0, y: -190 },
  { x: 180, y: -58 },
  { x: 112, y: 155 },
  { x: -112, y: 155 },
  { x: -180, y: -58 },
];

function MiniSignal({ color, delay = 0, reduceMotion = false }) {
  if (reduceMotion) {
    return null;
  }

  return (
    <motion.span
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 rounded-[26px] border"
      style={{ borderColor: color }}
      initial={{
        opacity: 0.65,
        scale: 1,
      }}
      animate={{
        opacity: 0,
        scale: 1.25,
      }}
      transition={{
        duration: 1.8,
        repeat: Infinity,
        delay,
        ease: "easeOut",
      }}
    />
  );
}

function DimensionButton({
  item,
  active,
  onClick,
  reduceMotion,
}) {
  const Icon = item.icon;

  return (
    <motion.button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      aria-label={`Explore ${item.title}: ${item.short}`}
      className="group relative min-h-[116px] w-full overflow-hidden rounded-[28px] border p-px text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050714]"
      style={{
        borderColor: active
          ? item.color
          : "rgba(255, 255, 255, 0.12)",
        transformStyle: "preserve-3d",
        perspective: 900,
      }}
      initial={false}
      animate={
        reduceMotion
          ? {
              borderColor: active
                ? item.color
                : "rgba(255, 255, 255, 0.12)",
            }
          : {
              y: active ? -10 : 0,
              scale: active ? 1.035 : 1,
              rotateX: active ? -3 : 0,
              z: active ? 25 : 0,
              boxShadow: active
                ? `0 24px 70px ${item.glow}, inset 0 1px 0 rgba(255, 255, 255, 0.30)`
                : "0 12px 32px rgba(0, 0, 0, 0.20)",
            }
      }
      whileHover={
        reduceMotion
          ? {}
          : {
              y: -8,
              scale: 1.025,
              rotateX: -2,
              z: 20,
            }
      }
      whileTap={
        reduceMotion
          ? {}
          : {
              scale: 0.985,
            }
      }
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 22,
      }}
    >
      {active && (
        <MiniSignal
          color={item.color}
          reduceMotion={reduceMotion}
        />
      )}

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-white/[.12] via-white/[.035] to-transparent"
      />

      <motion.div
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-1 rounded-full"
        style={{
          background: item.color,
        }}
        initial={false}
        animate={{
          width: active ? "100%" : "0%",
        }}
        transition={{
          duration:
            reduceMotion || !active
              ? 0.2
              : AUTO_PLAY_INTERVAL / 1000,
          ease: "linear",
        }}
      />

      <div className="relative flex h-full items-center gap-4 p-5">
        <div
          className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-white/15 bg-black/25 shadow-inner"
          style={{
            color: item.color,
            boxShadow: active
              ? `0 0 30px ${item.glow}`
              : undefined,
            transform: "translateZ(18px)",
          }}
        >
          <Icon
            aria-hidden="true"
            size={27}
            strokeWidth={1.8}
          />
        </div>

        <div
          className="min-w-0"
          style={{
            transform: "translateZ(12px)",
          }}
        >
          <p className="mb-1 text-[11px] font-bold uppercase tracking-[.22em] text-white/45">
            {item.eyebrow}
          </p>

          <p className="text-lg font-semibold leading-tight text-white">
            {item.short}
          </p>

          <p className="mt-1 truncate text-sm text-white/[.58]">
            {item.title}
          </p>
        </div>

        <ChevronRight
          aria-hidden="true"
          size={18}
          className={`ml-auto shrink-0 transition-transform duration-300 ${
            active
              ? "translate-x-1 text-white"
              : "text-white/25 group-hover:translate-x-1"
          }`}
        />
      </div>
    </motion.button>
  );
}

export default function ProdSecOps5DFramework() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const reduceMotion = useReducedMotion();

  const active = dimensions[activeIndex];
  const ActiveIcon = active.icon;

  useEffect(() => {
    if (paused || reduceMotion) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveIndex(
        (current) => (current + 1) % dimensions.length
      );
    }, AUTO_PLAY_INTERVAL);

    return () => {
      window.clearInterval(timer);
    };
  }, [paused, reduceMotion]);

  const particles = useMemo(
    () =>
      Array.from({ length: 22 }, (_, index) => ({
        left: `${(index * 41) % 100}%`,
        top: `${(index * 67) % 96}%`,
        delay: (index % 7) * 0.5,
        size: 1 + (index % 3),
      })),
    []
  );

  function selectDimension(index) {
    setActiveIndex(index);
  }

  return (
    <section
      id="prodsecops-5d-framework"
      aria-labelledby="prodsecops-5d-heading"
      className="relative overflow-hidden bg-[#050714] px-5 py-16 font-sans text-white sm:px-8 lg:px-12"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -left-32 -top-28 h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="absolute -right-40 top-28 h-[620px] w-[620px] rounded-full bg-violet-500/10 blur-[140px]" />

        <div className="absolute bottom-[-220px] left-1/3 h-[520px] w-[720px] rounded-full bg-fuchsia-500/10 blur-[150px]" />

        <div
          className="absolute inset-0 opacity-[.13]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
            maskImage:
              "linear-gradient(to bottom, black, transparent 80%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black, transparent 80%)",
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
              animate={{
                opacity: [0.1, 0.7, 0.1],
                y: [0, -12, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: particle.delay,
              }}
            />
          ))}
      </div>

      <div className="relative mx-auto max-w-[1500px]">
        <header className="mb-11 flex flex-col justify-between gap-6 xl:flex-row xl:items-end">
          <div className="max-w-5xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[.07] px-4 py-2 text-sm font-semibold tracking-wide text-cyan-100">
              <Sparkles
                aria-hidden="true"
                size={16}
              />

              <span>
                Integrated Security Domain Operations
              </span>
            </div>

            <h2
              id="prodsecops-5d-heading"
              className="max-w-5xl text-4xl font-semibold leading-[1.04] tracking-[-.035em] sm:text-5xl lg:text-7xl"
            >
              ProdSecOps{" "}
              <span className="bg-gradient-to-r from-cyan-200 via-indigo-300 to-fuchsia-300 bg-clip-text text-transparent">
                5D Integrated Framework
              </span>
            </h2>

            <p className="mt-6 max-w-4xl text-lg leading-8 text-white/[.66] sm:text-xl">
              A unified operating model that identifies,
              interprets and acts on external and internal
              threat context across five connected dimensions,
              not through Threat Intelligence alone.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start rounded-2xl border border-white/10 bg-white/[.055] px-4 py-3 backdrop-blur-xl xl:self-auto">
            <Activity
              aria-hidden="true"
              className="text-emerald-300"
              size={20}
            />

            <div>
              <p className="text-xs font-bold uppercase tracking-[.18em] text-white/40">
                Framework state
              </p>

              <p className="text-sm font-semibold text-white/[.85]">
                Continuous context loop
              </p>
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
          <div className="relative min-h-[590px] overflow-hidden rounded-[36px] border border-white/10 bg-white/[.045] p-5 shadow-[0_35px_100px_rgba(0,0,0,.45)] backdrop-blur-xl sm:p-8">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/70 to-transparent"
            />

            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[.24em] text-cyan-200/70">
                  Integrated context engine
                </p>

                <h3 className="mt-2 text-2xl font-semibold sm:text-3xl">
                  Every signal is resolved through 5D
                </h3>
              </div>

              <Layers3
                aria-hidden="true"
                className="hidden text-cyan-200/70 sm:block"
                size={30}
              />
            </div>

            <div
              className="relative mx-auto mt-4 hidden h-[455px] max-w-[590px] place-items-center sm:grid"
              style={{
                perspective: 1200,
                transformStyle: "preserve-3d",
              }}
            >
              <motion.div
                aria-hidden="true"
                className="absolute h-[360px] w-[360px] rounded-full border border-cyan-200/15"
                style={{
                  transform: "rotateX(67deg)",
                  boxShadow:
                    "0 0 80px rgba(53, 215, 255, 0.08)",
                }}
                animate={
                  reduceMotion
                    ? {}
                    : {
                        rotateZ: 360,
                      }
                }
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <motion.div
                aria-hidden="true"
                className="absolute h-[430px] w-[430px] rounded-full border border-dashed border-violet-200/10"
                style={{
                  transform: "rotateX(68deg)",
                }}
                animate={
                  reduceMotion
                    ? {}
                    : {
                        rotateZ: -360,
                      }
                }
                transition={{
                  duration: 45,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <motion.div
                className="relative z-20 grid h-52 w-52 place-items-center rounded-full border border-cyan-100/30 bg-[#071329]/95 text-center shadow-[0_0_90px_rgba(53,215,255,.22),inset_0_0_50px_rgba(124,140,255,.17)]"
                style={{
                  transformStyle: "preserve-3d",
                }}
                animate={
                  reduceMotion
                    ? {}
                    : {
                        y: [0, -9, 0],
                        rotateY: [0, 8, 0, -8, 0],
                      }
                }
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-3 rounded-full border border-white/10"
                />

                <div
                  className="relative"
                  style={{
                    transform: "translateZ(28px)",
                  }}
                >
                  <BrainCircuit
                    aria-hidden="true"
                    className="mx-auto mb-3 text-cyan-200"
                    size={38}
                  />

                  <p className="text-xs font-bold uppercase tracking-[.2em] text-cyan-100/[.55]">
                    5D correlation
                  </p>

                  <p className="mt-2 text-xl font-semibold">
                    Shared Context
                  </p>

                  <p className="mt-1 text-sm text-white/50">
                    One operational truth
                  </p>
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
                    onClick={() => selectDimension(index)}
                    aria-label={`Select ${item.title}`}
                    aria-pressed={isActive}
                    className="absolute z-30 grid h-[104px] w-[132px] place-items-center rounded-[24px] border bg-[#0a0d20]/95 p-3 text-center backdrop-blur-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                    style={{
                      left: "50%",
                      top: "50%",
                      marginLeft: -66,
                      marginTop: -52,
                      borderColor: isActive
                        ? item.color
                        : "rgba(255, 255, 255, 0.13)",
                      transformStyle: "preserve-3d",
                    }}
                    animate={
                      reduceMotion
                        ? {
                            x: position.x,
                            y: position.y,
                          }
                        : {
                            x: position.x,
                            y: position.y,
                            scale: isActive ? 1.14 : 1,
                            z: isActive ? 45 : 0,
                            boxShadow: isActive
                              ? `0 18px 55px ${item.glow}`
                              : "0 13px 30px rgba(0, 0, 0, 0.38)",
                          }
                    }
                    whileHover={
                      reduceMotion
                        ? {}
                        : {
                            scale: 1.1,
                            z: 35,
                          }
                    }
                    transition={{
                      type: "spring",
                      stiffness: 230,
                      damping: 22,
                    }}
                  >
                    {isActive && (
                      <MiniSignal
                        color={item.color}
                        delay={0.1}
                        reduceMotion={reduceMotion}
                      />
                    )}

                    <Icon
                      aria-hidden="true"
                      size={25}
                      style={{
                        color: item.color,
                      }}
                    />

                    <span className="mt-1 text-[13px] font-semibold leading-tight">
                      {item.title}
                    </span>
                  </motion.button>
                );
              })}

              {orbitPositions.map((position, index) => {
                const connectorLength =
                  Math.hypot(position.x, position.y) - 85;

                const connectorAngle =
                  (Math.atan2(position.y, position.x) *
                    180) /
                  Math.PI;

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
                    transition={{
                      duration: 1.5,
                      repeat: reduceMotion ? 0 : Infinity,
                    }}
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
                    onClick={() => selectDimension(index)}
                    aria-pressed={isActive}
                    className="flex items-center gap-3 rounded-2xl border p-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                    style={{
                      borderColor: isActive
                        ? item.color
                        : "rgba(255, 255, 255, 0.10)",
                      background: isActive
                        ? item.glow
                        : "rgba(255, 255, 255, 0.03)",
                    }}
                  >
                    <Icon
                      aria-hidden="true"
                      style={{
                        color: item.color,
                      }}
                    />

                    <span className="font-semibold">
                      {item.title}
                    </span>
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
                initial={
                  reduceMotion
                    ? {
                        opacity: 1,
                      }
                    : {
                        opacity: 0,
                        y: 18,
                        rotateX: 4,
                      }
                }
                animate={{
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                }}
                exit={
                  reduceMotion
                    ? {
                        opacity: 1,
                      }
                    : {
                        opacity: 0,
                        y: -14,
                      }
                }
                transition={{
                  duration: reduceMotion ? 0 : 0.42,
                }}
              >
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p
                      className="text-xs font-bold uppercase tracking-[.24em]"
                      style={{
                        color: active.color,
                      }}
                    >
                      {active.eyebrow}
                    </p>

                    <h3 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
                      {active.title}
                    </h3>
                  </div>

                  <motion.div
                    aria-hidden="true"
                    className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl border border-white/15 bg-white/[.06]"
                    style={{
                      color: active.color,
                      boxShadow: `0 0 35px ${active.glow}`,
                    }}
                    animate={
                      reduceMotion
                        ? {}
                        : {
                            rotateY: [0, 360],
                          }
                    }
                    transition={{
                      duration: 1.2,
                      ease: "easeInOut",
                    }}
                  >
                    <ActiveIcon size={31} />
                  </motion.div>
                </div>

                <p
                  className="mt-7 border-l-2 pl-5 text-lg leading-8 text-white/70"
                  style={{
                    borderColor: active.color,
                  }}
                >
                  {active.statement}
                </p>

                <div className="mt-8">
                  <div className="mb-5 flex items-center gap-3">
                    <Network
                      aria-hidden="true"
                      size={20}
                      style={{
                        color: active.color,
                      }}
                    />

                    <h4 className="text-sm font-bold uppercase tracking-[.2em] text-white/55">
                      Function flow
                    </h4>
                  </div>

                  <div className="space-y-3">
                    {active.steps.map((step, index) => (
                      <motion.div
                        key={step}
                        className="relative flex items-center gap-4 overflow-hidden rounded-2xl border border-white/[.08] bg-white/[.035] p-4"
                        initial={
                          reduceMotion
                            ? {
                                opacity: 1,
                              }
                            : {
                                opacity: 0,
                                x: 22,
                              }
                        }
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{
                          delay: reduceMotion
                            ? 0
                            : index * 0.1,
                        }}
                      >
                        <div
                          className="grid h-9 w-9 shrink-0 place-items-center rounded-xl text-sm font-bold text-[#050714]"
                          style={{
                            background: active.color,
                          }}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </div>

                        <p className="text-[15px] font-medium leading-6 text-white/[.82]">
                          {step}
                        </p>

                        {index < active.steps.length - 1 && (
                          <div
                            aria-hidden="true"
                            className="absolute -bottom-4 left-[33px] h-5 w-px"
                            style={{
                              background: active.color,
                            }}
                          />
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="mt-7 rounded-[24px] border border-white/10 bg-gradient-to-r from-white/[.08] to-transparent p-5">
                  <p className="text-xs font-bold uppercase tracking-[.2em] text-white/40">
                    Operational outcome
                  </p>

                  <div className="mt-2 flex items-start gap-3">
                    <Crosshair
                      aria-hidden="true"
                      className="mt-1 shrink-0"
                      size={20}
                      style={{
                        color: active.color,
                      }}
                    />

                    <p className="text-lg font-semibold leading-7">
                      {active.outcome}
                    </p>
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
              <p className="text-xs font-bold uppercase tracking-[.22em] text-white/40">
                Explore the operating model
              </p>

              <h3
                id="prodsecops-dimension-controls"
                className="mt-2 text-2xl font-semibold sm:text-3xl"
              >
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
                onClick={() => selectDimension(index)}
                reduceMotion={reduceMotion}
              />
            ))}
          </div>
        </section>

        <div className="mt-8 flex flex-col justify-between gap-3 border-t border-white/10 py-6 text-sm text-white/40 md:flex-row">
          <p>
            ProdSecOps 5D • Integrated, contextual and
            action-oriented by design
          </p>

          <p>
            Sense → Detect → Understand → Decide → Act →
            Learn
          </p>
        </div>
      </div>
    </section>
  );
}
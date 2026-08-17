import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  Database,
  ShieldEllipsis,
  TestTube2,
} from "lucide-react";

import { domains } from "../data/domains";

import FrameworkHero from "../components/framework/FrameworkHero";
import ContextPanel from "../components/framework/ContextPanel";
import FrameworkComponentVisuals from "../components/framework/FrameworkComponentVisuals";
import EnterpriseFrameworkCommandCenter from "../components/framework/EnterpriseFrameworkCommandCenter";
import {
  FrameworkIntroduction,
  IntegrationNarrative,
  OperatingModelNarrative,
  PrinciplesBenefitsCoordination,
} from "../components/framework/FrameworkNarrativeSections";
import StageRail from "../components/framework/StageRail";
import GlowCard from "../components/common/GlowCard";
import SectionHeader from "../components/common/SectionHeader";

export default function FrameworkPage() {
  const [activeKey, setActiveKey] = useState("remediation");
  const [activeStage, setActiveStage] = useState(0);
  const active = domains[activeKey];

  useEffect(() => {
    const id = window.setInterval(() => {
      setActiveStage((stage) => (stage + 1) % 8);
    }, 2500);

    return () => window.clearInterval(id);
  }, [activeKey]);

  return (
    <>
      <FrameworkHero
        activeKey={activeKey}
        setActiveKey={setActiveKey}
      />

      <FrameworkIntroduction />
      
      <section
        id="framework-structure"
        className="px-5 py-20"
      >
        <div className="mx-auto max-w-[1550px]">
          <SectionHeader
            eyebrow="ENTERPRISE FRAMEWORK STRUCTURE"
            title="One operating context coordinates risk, security, compliance, and resilience"
            body="The Production-Risk Case connects exact production state, 5D Intelligence, RGSM governance, isolated SecLabs evidence, controlled execution, monitoring, recovery, and assurance."
          />

          <EnterpriseFrameworkCommandCenter />
        </div>
      </section>

      <IntegrationNarrative />

      <section
        id="architecture"
        className="border-y border-sky-950 bg-[#020b17]/70 px-5 py-24"
      >
        <div className="mx-auto max-w-[1450px]">
          <SectionHeader
            eyebrow="DOMAIN-ORCHESTRATED FRAMEWORK"
            title="Select an intelligence domain and watch the operating context change"
            body="The selected domain changes authoritative sources, RGSM functions, SecLabs scenarios, workflow activities, outputs, and risk conclusions while 5D Intelligence preserves one integrated risk context."
          />

          <div className="grid gap-4 rounded-3xl border border-sky-900 bg-[#041223] p-4 shadow-2xl lg:grid-cols-[250px_1fr]">
            <aside className="grid gap-2">
              {Object.entries(domains).map(([key, domain]) => {
                const Icon = domain.icon;

                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => {
                      setActiveKey(key);
                      setActiveStage(0);
                    }}
                    className="flex items-center gap-3 rounded-xl border bg-[#06182c] p-3 text-left transition"
                    style={{
                      borderColor:
                        key === activeKey
                          ? domain.color
                          : "#195f88",
                      boxShadow:
                        key === activeKey
                          ? `inset 3px 0 ${domain.color}, 0 0 22px ${domain.color}22`
                          : "none",
                    }}
                  >
                    <Icon
                      className="h-5 w-5 shrink-0"
                      style={{ color: domain.color }}
                    />

                    <span>
                      <b className="block text-xs">
                        {domain.label}
                      </b>

                      <span className="mt-1 block text-[9px] leading-4 text-slate-500">
                        {domain.purpose.slice(0, 62)}…
                      </span>
                    </span>
                  </button>
                );
              })}
            </aside>

            <div className="grid gap-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeKey}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="grid gap-3 rounded-2xl border bg-[#06182b] p-5 md:grid-cols-[1.3fr_.7fr]"
                  style={{
                    borderColor: `${active.color}88`,
                  }}
                >
                  <div>
                    <div
                      className="text-[10px] font-bold tracking-[.13em]"
                      style={{ color: active.color }}
                    >
                      {active.short.toUpperCase()} OPERATING VIEW
                    </div>

                    <h3 className="mt-1 font-[Manrope] text-2xl font-extrabold">
                      {active.label}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {active.purpose}
                    </p>
                  </div>

                  <div className="border-l border-sky-900 pl-4">
                    <b className="text-[10px] tracking-wider text-slate-200">
                      AUTHORITATIVE SOURCE CONTEXT
                    </b>

                    <p className="mt-2 text-xs leading-5 text-slate-400">
                      {active.source}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="grid gap-4 lg:grid-cols-[1fr_220px_1fr]">
                <ContextPanel
                  icon={Database}
                  title="RGSM"
                  subtitle="Governance and workflow tracking"
                  items={active.rgsm}
                  color={active.color}
                />

                <motion.div
                  key={`core-${activeKey}`}
                  initial={{ scale: 0.94, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="relative grid min-h-64 place-content-center overflow-hidden rounded-full border-2 text-center"
                  style={{
                    borderColor: active.color,
                    background:
                      "radial-gradient(circle,#122c42,#061424 68%)",
                    boxShadow: `0 0 44px ${active.color}33`,
                  }}
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 14,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-4 rounded-full border border-dashed opacity-40"
                    style={{ borderColor: active.color }}
                  />

                  <BrainCircuit
                    className="mx-auto h-7 w-7"
                    style={{ color: active.color }}
                  />

                  <small
                    className="mt-2 font-bold tracking-[.13em]"
                    style={{ color: active.color }}
                  >
                    5D INTELLIGENCE
                  </small>

                  <b className="font-[Manrope] text-sm">
                    INTEGRATED RISK
                    <br />
                    ASSESSMENT
                  </b>

                  <span className="mx-auto mt-2 max-w-32 text-[9px] leading-4 text-slate-400">
                    Orchestrates {active.short} through shared
                    state, evidence, and RGSM risk criteria.
                  </span>
                </motion.div>

                <ContextPanel
                  icon={TestTube2}
                  title="SecLabs"
                  subtitle="GoldenVault test and evidence"
                  items={active.labs}
                  color={active.color}
                />
              </div>

              <StageRail
                domain={active}
                activeStage={activeStage}
                setActiveStage={setActiveStage}
              />

              <div className="flex flex-wrap gap-2">
                {active.outputs.map((output) => (
                  <span
                    key={output}
                    className="rounded-full border px-3 py-1.5 text-[10px] text-slate-300"
                    style={{
                      borderColor: `${active.color}88`,
                    }}
                  >
                    {output}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="components"
        className="px-5 py-24"
      >
        <div className="mx-auto max-w-[1450px]">
          <SectionHeader
            eyebrow="THREE FRAMEWORK COMPONENTS"
            title="Proving, governance, and execution remain separate but connected"
            body="Each premium visual explains a distinct operating responsibility while preserving one governed production-risk context."
          />

          <FrameworkComponentVisuals />
        </div>
      </section>

      <OperatingModelNarrative />

      <section
        id="domains"
        className="border-y border-sky-950 bg-[#020b17]/70 px-5 py-24"
      >
        <div className="mx-auto max-w-[1450px]">
          <SectionHeader
            eyebrow="FIVE INTELLIGENCE DOMAINS"
            title="Different objectives, one integrated risk assessment"
            body="Each domain maintains its own operational objective, ticket, evidence, and authority while contributing to one governed production-risk context."
          />

          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
            {Object.entries(domains).map(([key, domain]) => {
              const Icon = domain.icon;

              return (
                <GlowCard
                  key={key}
                  color={domain.color}
                  className="p-5"
                >
                  <Icon
                    className="h-9 w-9"
                    style={{ color: domain.color }}
                  />

                  <h3 className="mt-4 font-[Manrope] text-base font-extrabold">
                    {domain.label}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-slate-400">
                    {domain.purpose}
                  </p>

                  <button
                    type="button"
                    onClick={() => {
                      setActiveKey(key);
                      setActiveStage(0);
                      document
                        .querySelector("#architecture")
                        ?.scrollIntoView({
                          behavior: "smooth",
                        });
                    }}
                    className="mt-5 flex items-center gap-2 text-[11px] font-bold"
                    style={{ color: domain.color }}
                  >
                    Open operating view
                    <ArrowRight className="h-3 w-3" />
                  </button>
                </GlowCard>
              );
            })}
          </div>
        </div>
      </section>

      <PrinciplesBenefitsCoordination />

      <section
        id="ai-governance"
        className="px-5 py-24"
      >
        <div className="mx-auto max-w-[1450px]">
          <SectionHeader
            eyebrow="RISK-DRIVEN AI OPERATIONS"
            title="Use AI through isolated proving and bounded authority"
            body="Specialized AI capabilities may assist analysis and testing, but accountable organizational roles retain risk, change, incident, recovery, and return-to-service authority."
          />

          <div className="grid gap-4 lg:grid-cols-2">
            <GlowCard
              color="#a276ff"
              className="p-7"
            >
              <Bot className="h-10 w-10 text-violet-300" />

              <h3 className="mt-4 font-[Manrope] text-xl font-extrabold">
                5 Pilot support
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                Specialized AI capabilities may assist analysis,
                test preparation, comparison, evidence
                correlation, and recommendations inside SecLabs
                and RGSM boundaries.
              </p>
            </GlowCard>

            <GlowCard
              color="#ff806f"
              className="p-7"
            >
              <ShieldEllipsis className="h-10 w-10 text-orange-300" />

              <h3 className="mt-4 font-[Manrope] text-xl font-extrabold">
                Production authority boundary
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                AI does not independently accept risk, approve
                exceptions, authorize production change,
                activate recovery, close a governed case, or
                approve return to service.
              </p>
            </GlowCard>
          </div>
        </div>
      </section>
    </>
  );
}

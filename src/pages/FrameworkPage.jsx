import { useEffect,useState } from "react";
import { AnimatePresence,motion } from "framer-motion";
import { ArrowRight,Bot,BrainCircuit,Database,ShieldEllipsis,TestTube2 } from "lucide-react";
import { domains } from "../data/domains";
import FrameworkHero from "../components/framework/FrameworkHero";
import ContextPanel from "../components/framework/ContextPanel";
import FrameworkComponentVisuals from "../components/framework/FrameworkComponentVisuals";
import EnterpriseFrameworkCommandCenter from "../components/framework/EnterpriseFrameworkCommandCenter";
import StageRail from "../components/framework/StageRail";
import GlowCard from "../components/common/GlowCard";
import SectionHeader from "../components/common/SectionHeader";

export default function FrameworkPage() {
  const [activeKey, setActiveKey] =
    useState("remediation");

  const [activeStage, setActiveStage] =
    useState(0);

  const active = domains[activeKey];

  useEffect(() => {
    const id = setInterval(() => {
      setActiveStage((stage) => (stage + 1) % 8);
    }, 2500);

    return () => clearInterval(id);
  }, [activeKey]);

  return (
    <>
      <FrameworkHero
        activeKey={activeKey}
        setActiveKey={setActiveKey}
      />

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

      <section
        id="architecture"
        className="border-y border-sky-950 bg-[#020b17]/70 px-5 py-24"><div className="mx-auto max-w-[1450px]"><SectionHeader eyebrow="DOMAIN-ORCHESTRATED FRAMEWORK" title="Select an intelligence domain and watch the operating context change" body="The selected domain changes authoritative sources, RGSM functions, SecLabs scenarios, workflow activities, outputs, and risk conclusions."/><div className="grid gap-4 rounded-3xl border border-sky-900 bg-[#041223] p-4 shadow-2xl lg:grid-cols-[250px_1fr]"><aside className="grid gap-2">{Object.entries(domains).map(([key,d])=>{const Icon=d.icon;return <button key={key} onClick={()=>{setActiveKey(key);setActiveStage(0)}} className="flex items-center gap-3 rounded-xl border bg-[#06182c] p-3 text-left" style={{borderColor:key===activeKey?d.color:"#195f88"}}><Icon className="h-5 w-5" style={{color:d.color}}/><div><b className="block text-xs">{d.label}</b><span className="text-[9px] text-slate-500">{d.purpose.slice(0,62)}…</span></div></button>})}</aside><div className="grid gap-4"><AnimatePresence mode="wait"><motion.div key={activeKey} initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-8}} className="grid gap-3 rounded-2xl border bg-[#06182b] p-5 md:grid-cols-[1.3fr_.7fr]" style={{borderColor:`${active.color}88`}}><div><div className="text-[10px] font-bold" style={{color:active.color}}>{active.short.toUpperCase()} OPERATING VIEW</div><h3 className="mt-1 text-2xl font-extrabold">{active.label}</h3><p className="mt-2 text-sm text-slate-400">{active.purpose}</p></div><div className="border-l border-sky-900 pl-4"><b className="text-[10px]">AUTHORITATIVE SOURCE CONTEXT</b><p className="mt-2 text-xs text-slate-400">{active.source}</p></div></motion.div></AnimatePresence><div className="grid gap-4 lg:grid-cols-[1fr_220px_1fr]"><ContextPanel icon={Database} title="RGSM" subtitle="Governance and workflow tracking" items={active.rgsm} color={active.color}/><motion.div key={`core-${activeKey}`} initial={{scale:.94,opacity:0}} animate={{scale:1,opacity:1}} className="relative grid min-h-64 place-content-center overflow-hidden rounded-full border-2 text-center" style={{borderColor:active.color,background:"radial-gradient(circle,#122c42,#061424 68%)",boxShadow:`0 0 44px ${active.color}33`}}><motion.div animate={{rotate:360}} transition={{duration:14,repeat:Infinity,ease:"linear"}} className="absolute inset-4 rounded-full border border-dashed opacity-40" style={{borderColor:active.color}}/><BrainCircuit className="mx-auto h-7 w-7" style={{color:active.color}}/><small className="mt-2 font-bold" style={{color:active.color}}>5D INTELLIGENCE</small><b className="text-sm">INTEGRATED RISK<br/>ASSESSMENT</b></motion.div><ContextPanel icon={TestTube2} title="SecLabs" subtitle="GoldenVault test and evidence" items={active.labs} color={active.color}/></div><StageRail domain={active} activeStage={activeStage} setActiveStage={setActiveStage}/><div className="flex flex-wrap gap-2">{active.outputs.map(x=><span key={x} className="rounded-full border px-3 py-1.5 text-[10px]" style={{borderColor:`${active.color}88`}}>{x}</span>)}</div></div></div></div></section>
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
  <section className="border-y border-sky-950 bg-[#020b17]/70 px-5 py-24"><div className="mx-auto max-w-[1450px]"><SectionHeader eyebrow="FIVE INTELLIGENCE DOMAINS" title="Different objectives, one integrated risk assessment"/><div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">{Object.entries(domains).map(([key,d])=>{const Icon=d.icon;return <GlowCard key={key} color={d.color} className="p-5"><Icon className="h-9 w-9" style={{color:d.color}}/><h3 className="mt-4 font-[Manrope] text-base font-extrabold">{d.label}</h3><p className="mt-2 text-xs leading-5 text-slate-400">{d.purpose}</p><button onClick={()=>{setActiveKey(key);document.querySelector('#architecture')?.scrollIntoView({behavior:'smooth'})}} className="mt-5 flex items-center gap-2 text-[11px] font-bold" style={{color:d.color}}>Open operating view <ArrowRight className="h-3 w-3"/></button></GlowCard>})}</div></div></section>
 <section className="px-5 py-24"><div className="mx-auto max-w-[1450px]"><SectionHeader eyebrow="RISK-DRIVEN AI OPERATIONS" title="Use AI through isolated proving and bounded authority"/><div className="grid gap-4 lg:grid-cols-2"><GlowCard color="#a276ff" className="p-7"><Bot className="h-10 w-10 text-violet-300"/><h3 className="mt-4 text-xl font-extrabold">5 Pilot support</h3><p className="mt-3 text-sm text-slate-400">Specialized AI capabilities may assist analysis, test preparation, comparison, and evidence correlation inside SecLabs and RGSM boundaries.</p></GlowCard><GlowCard color="#ff806f" className="p-7"><ShieldEllipsis className="h-10 w-10 text-orange-300"/><h3 className="mt-4 text-xl font-extrabold">Production authority boundary</h3><p className="mt-3 text-sm text-slate-400">AI does not independently accept risk, approve exceptions, authorize production change, activate recovery, or approve return to service.</p></GlowCard></div></div></section>
 </>
}

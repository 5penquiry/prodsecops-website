import { useEffect, useState } from "react";
import {
  Activity, ArrowRight, Bot, Boxes, BrainCircuit, CheckCircle2,
  CloudCog, Database, FileCheck2, GitBranch, Radar, RefreshCw,
  ShieldCheck, TestTube2, Workflow, Zap
} from "lucide-react";

const dimensions = [
  ["01", "ANTICIPATE", "Exposure, vulnerability, threat paths", "#3b82f6"],
  ["02", "OBSERVE", "Monitoring, telemetry, detection", "#0ea5e9"],
  ["03", "RESPOND", "Treatment, containment, escalation", "#8b5cf6"],
  ["04", "RESTORE", "Rollback, recovery, return to service", "#10b981"],
  ["05", "PROVE", "Evidence, assurance, learning", "#f3c34e"],
];

const stages = ["Audit", "Acquire", "Build", "Deploy", "Validate", "Assess", "Execute", "Assure"];
const stageColors = ["#00e5ff", "#0072ff", "#2948ff", "#396afc", "#7b2ff7", "#b224ef", "#12e0a2", "#35cda5"];

const secLabsSteps = [
  [Boxes, "Reconstruct", "Exact State"],
  [ShieldCheck, "Attack Surface", "ASP Tests"],
  [TestTube2, "Treatment", "Validation"],
  [Activity, "Drift", "Compatibility"],
  [Radar, "SIEM", "Behavior"],
  [RefreshCw, "Rollback", "Recovery"],
];

const remediationSteps = [
  [TestTube2, "Validated", "Evidence"],
  [FileCheck2, "ARCT", "Created"],
  [GitBranch, "CI/CD", "Trigger"],
  [ShieldCheck, "State", "Verify"],
  [CloudCog, "Automated", "Execution"],
  [Activity, "Post-checks", "Monitor"],
  [Database, "Evidence", "Returned"],
];

function Panel({ title, eyebrow, children, className = "", color = "#38bdf8" }) {
  return <section className={`ecc-panel ${className}`} style={{ "--panel-color": color }}>
    <header className="ecc-panel-head"><div><small>{eyebrow}</small><h3>{title}</h3></div><span className="ecc-status"><i /> LIVE MODEL</span></header>
    {children}
  </section>;
}

function IntelligenceRail() {
  return <Panel title="5D Intelligence Foundation" eyebrow="ONE CONTINUOUS RISK CONTEXT" className="ecc-intelligence" color="#3b82f6">
    <div className="ecc-dimension-list">{dimensions.map(([n,t,d,c]) => <article key={n} style={{ "--d": c }}><span>{n}</span><div><b>{t}</b><p>{d}</p></div></article>)}</div>
    <p className="ecc-rail-note">One intelligence context connects exposure, monitoring, response, recovery, and assurance.</p>
  </Panel>;
}

function RiskCore() {
  const [active, setActive] = useState(0);
  useEffect(() => { const id=setInterval(()=>setActive(x=>(x+1)%4),2200); return()=>clearInterval(id); }, []);
  const nodes = [[Database,"CPDB","State & relationships"],[ShieldCheck,"Risk Criteria","Policy & priority"],[CloudCog,"ARCT Console","Authorized change"],[FileCheck2,"Exception Register","Obligations"]];
  return <Panel title="Risk Governance Service Management" eyebrow="RGSM · GOVERNANCE & ORCHESTRATION" className="ecc-risk-core" color="#a276ff">
    <div className="ecc-core-map">
      <div className="ecc-orbit orbit-a"/><div className="ecc-orbit orbit-b"/>
      <div className="ecc-case-core"><BrainCircuit/><small>SINGLE SOURCE OF TRUTH</small><strong>PRODUCTION-RISK<br/>CASE</strong><p>Context · Authority · Evidence · Outcome</p></div>
      {nodes.map(([Icon,t,s],i)=><article key={t} className={`ecc-core-node node-${i} ${active===i?"active":""}`}><Icon/><div><b>{t}</b><span>{s}</span></div></article>)}
      <svg className="ecc-core-lines" viewBox="0 0 600 390" aria-hidden="true"><path d="M300 195L120 80M300 195L480 80M300 195L120 310M300 195L480 310"/></svg>
    </div>
  </Panel>;
}

function WorkflowLoop() {
  const [active, setActive] = useState(0);
  useEffect(()=>{const id=setInterval(()=>setActive(x=>(x+1)%8),1800);return()=>clearInterval(id)},[]);
  return <Panel title="Governed Eight-Stage Lifecycle" eyebrow="AUDIT THROUGH ASSURE" className="ecc-workflow" color="#38e2a8">
    <div className="ecc-infinity">
      <span className="ecc-watermark prod">PROD</span><span className="ecc-watermark ops">OPS</span>
      <svg viewBox="0 0 1200 600" role="img" aria-label="ProdSecOps eight-stage lifecycle"><path id="ecc-inf" pathLength="800" d="M600 300C400 50 100 50 100 300s300 250 500 0c200-250 500-250 500 0s-300 250-500 0Z"/><use href="#ecc-inf" className="ecc-track"/>{stageColors.map((c,i)=><use key={c} href="#ecc-inf" className={`ecc-segment ${active===i?"active":""}`} stroke={c} strokeDasharray="98 702" strokeDashoffset={-i*100}/>)}<use href="#ecc-inf" className="ecc-beam"/></svg>
      <div className="ecc-loop-core"><Workflow/><b>RGSM</b><small>ORCHESTRATION</small></div>
      {stages.map((s,i)=><button key={s} className={`ecc-stage s${i+1} ${active===i?"active":""}`} style={{"--s":stageColors[i]}} onClick={()=>setActive(i)}><span>0{i+1}</span><b>{s}</b></button>)}
    </div>
    <div className="ecc-stage-caption"><b style={{color:stageColors[active]}}>Stage 0{active+1} · {stages[active]}</b><span>{["Define scope, relevance, service criticality, and evidence sources.","Acquire the trusted state and authorized package context.","Reconstruct the relevant GoldenVault environment.","Deploy scenarios, telemetry, treatment, and rollback definitions.","Prove applicability, effectiveness, compatibility, and observability.","Translate evidence into risk, authority, and execution conditions.","Run the authorized state-matched action through CI/CD.","Verify outcome, monitoring, residual risk, and the next baseline."][active]}</span></div>
  </Panel>;
}

function SecLabs() {
  return <Panel title="Role of SecLabs" eyebrow="ISOLATED VALIDATION & ASSURANCE ENGINE" className="ecc-seclabs" color="#b26cff">
    <p className="ecc-lead"><b>SecLabs is the framework's isolated proving layer.</b> GoldenVault reconstructs the relevant production state from authorized packages, validates whether a condition is material, proves the proposed treatment, and verifies monitoring, rollback, and recovery without granting production authority.</p>
    <div className="ecc-process">{secLabsSteps.map(([Icon,a,b],i)=><div className="ecc-process-step" key={a}><Icon/><b>{a}</b><span>{b}</span>{i<secLabsSteps.length-1&&<ArrowRight className="ecc-arrow"/>}</div>)}</div>
    <div className="ecc-delivers"><b>What SecLabs delivers</b><ul><li>Applicability and exploitability evidence tied to exact state</li><li>Proven remediation, compatibility, and rollback evidence</li><li>SIEM behavior profiles and recovery-test results</li><li>Versioned, repeatable records returned to the governed case</li></ul></div>
    <div className="ecc-principle">SecLabs proves. RGSM governs. Authorized roles approve. CI/CD executes.</div>
  </Panel>;
}

function AutomatedRemediation() {
  const guards=["Exact state match","Authority & policy","Monitoring active","Rollback ready","Uncertainty threshold","Segregation of duties"];
  return <Panel title="Automated Remediation Integrated with CI/CD" eyebrow="GOVERNED ARCT EXECUTION" className="ecc-remediation" color="#32d8ed">
    <div className="ecc-process remediation">{remediationSteps.map(([Icon,a,b],i)=><div className="ecc-process-step" key={a}><Icon/><b>{a}</b><span>{b}</span>{i<remediationSteps.length-1&&<ArrowRight className="ecc-arrow"/>}</div>)}</div>
    <div className="ecc-guardrails">{guards.map(x=><span key={x}><CheckCircle2/>{x}</span>)}</div>
    <div className="ecc-remediation-copy"><p><b>1. Prove:</b> SecLabs validates the candidate remediation against the applicable state, dependencies, telemetry, rollback, and recovery conditions.</p><p><b>2. Govern:</b> RGSM creates the ARCT with scope, approved artifact, authority, execution window, policy class, monitoring profile, rollback trigger, and assurance criteria.</p><p><b>3. Execute:</b> CI/CD verifies state and authorization, retrieves the signed artifact, runs pre-checks, executes the exact approved action, and streams evidence.</p><p><b>4. Assure:</b> Post-checks confirm service health and risk reduction. Drift or threshold breach triggers rollback, recovery, or reassessment.</p></div>
    <div className="ecc-outcome">Outcome: fast, safe, repeatable, and accountable remediation without compromising production stability.</div>
  </Panel>;
}

function TruthModel() {
  const items=[[Activity,"Security Platforms","Findings & exposure"],[Database,"CPDB","State & dependencies"],[Boxes,"CaBC Packages","Trusted reconstruction"],[TestTube2,"SecLabs","Test evidence"],[Radar,"SIEM / SOAR","Telemetry & incidents"],[BrainCircuit,"RGSM Case","Risk decision record"]];
  return <Panel title="Source-of-Truth Model" eyebrow="AUTHORITATIVE BY RESPONSIBILITY" className="ecc-truth" color="#38bdf8"><div className="ecc-truth-grid">{items.map(([I,t,s])=><article key={t}><I/><b>{t}</b><span>{s}</span></article>)}</div><p>Everything is linked by the Production-Risk Case across the full lifecycle.</p></Panel>
}

export default function EnterpriseFrameworkCommandCenter(){return <section className="ecc-shell" aria-label="ProdSecOps enterprise framework structure"><div className="ecc-heading"><div><small>PRODSECOPS ENTERPRISE OPERATING MODEL</small><h2><span>Prod</span>Sec<strong>Ops</strong> Framework</h2><p>One integrated intelligence context connects risk governance, isolated proving, authorized CI/CD execution, monitoring, recovery, and assurance.</p></div><div className="ecc-metrics"><span><b>5</b> Intelligence dimensions</span><span><b>3</b> Framework components</span><span><b>8</b> Governed lifecycle stages</span></div></div><div className="ecc-dashboard"><IntelligenceRail/><RiskCore/><SecLabs/><WorkflowLoop/><AutomatedRemediation/><TruthModel/></div><div className="ecc-boundary"><div><b>Framework boundary</b><span>ProdSecOps governs infrastructure and production-system security operations. It does not replace scanners, CI/CD, SIEM, backup platforms, or authorized human accountability.</span></div><a href="mailto:enquiry@vpilot.org">Request Executive Briefing <ArrowRight/></a></div></section>}

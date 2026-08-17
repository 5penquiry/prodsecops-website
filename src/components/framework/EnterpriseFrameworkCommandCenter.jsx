import { Activity, Boxes, BrainCircuit, Database, Radar, ShieldCheck, TestTube2 } from "lucide-react";
import PrecisionInfinityWorkflow from "./PrecisionInfinityWorkflow";

const dimensions=[
 ["01","ANTICIPATE","Exposure, criticality, threat paths","#3b82f6"],
 ["02","OBSERVE","Telemetry, monitoring, detection","#0ea5e9"],
 ["03","RESPOND","Treatment, containment, authority","#8b5cf6"],
 ["04","RESTORE","Rollback, recovery, return to service","#10b981"],
 ["05","PROVE","Evidence, assurance, learning","#4f46e5"],
];
const domains=["Remediation","SOC","Incident Response","Resilience","Compliance"];
function Panel({eyebrow,title,className="",children}){return <section className={`v5-ecc-panel ${className}`}><header><small>{eyebrow}</small><h3>{title}</h3></header>{children}</section>}
export default function EnterpriseFrameworkCommandCenter(){return <div className="v5-ecc">
 <div className="v5-ecc-heading"><div><small>PRODSECOPS ENTERPRISE OPERATING MODEL</small><h2><span>Prod</span>Sec<strong>Ops</strong> Framework</h2><p>One integrated intelligence and governance context coordinates isolated proving, systematic domain operations, monitoring, recovery, evidence, and continual assurance.</p></div><div className="v5-ecc-metrics"><span><b>5</b> intelligence perspectives</span><span><b>3</b> shared components</span><span><b>5</b> domain operations</span><span><b>8</b> governed lifecycle stages</span></div></div>
 <div className="v5-ecc-grid">
  <Panel eyebrow="CONTINUOUS INTELLIGENCE" title="5D Intelligence Foundation" className="v5-ecc-five"><div className="v5-ecc-dimensions">{dimensions.map(([n,t,d,c])=><article key={n} style={{"--c":c}}><span>{n}</span><div><b>{t}</b><p>{d}</p></div></article>)}</div></Panel>
  <Panel eyebrow="INTEGRATED CONTROL PLANE" title="Production-Risk Case and Risk Governance" className="v5-ecc-core"><div className="v5-risk-map"><i/><i/><div className="v5-risk-core"><BrainCircuit/><small>SINGLE SOURCE OF TRUTH</small><b>PRODUCTION-RISK<br/>CASE</b><p>Context · Authority · Evidence · Outcome</p></div>{[[Database,"CPDB","State & relationships","a"],[ShieldCheck,"Risk Criteria","Policy & priority","b"],[Activity,"Domain Tickets","Controlled work","c"],[Boxes,"Registers","Risk & assurance","d"]].map(([I,t,s,p])=><article className={p} key={t}><I/><div><b>{t}</b><span>{s}</span></div></article>)}</div></Panel>
  <Panel eyebrow="ISOLATED PROVING" title="SecLabs Shared Validation Context" className="v5-ecc-labs"><p>GoldenVault reconstructs purpose-relevant production context and validates applicability, treatment, observability, compatibility, rollback, and recovery across the five domains.</p><div className="v5-lab-flow">{["RECONSTRUCT","VALIDATE","OBSERVE","ROLLBACK","RECOVER","EVIDENCE"].map((x,i)=><span key={x}><TestTube2/>{x}</span>)}</div><b className="v5-authority-line">SecLabs proves · Risk Governance governs · Authorized roles approve</b></Panel>
  <Panel eyebrow="GOVERNED LIFECYCLE" title="Eight-Stage Shared Workflow" className="v5-ecc-workflow"><PrecisionInfinityWorkflow compact/></Panel>
  <Panel eyebrow="FIVE DISTINCT OBJECTIVES" title="Integrated Domain Operations" className="v5-ecc-domains"><div>{domains.map((x,i)=><span key={x}><b>0{i+1}</b>{x}</span>)}</div><p>Each domain retains its own objective, source evidence, ticket, authority, Stage 07 action, and closure criteria while contributing to one integrated risk position.</p></Panel>
  <Panel eyebrow="AUTHORITATIVE BY RESPONSIBILITY" title="Source-of-Truth Model" className="v5-ecc-truth"><div>{[[Activity,"Security platforms"],[Database,"CPDB"],[Boxes,"Trusted packages"],[TestTube2,"SecLabs"],[Radar,"SIEM / SOAR"],[BrainCircuit,"Risk Case"]].map(([I,t])=><span key={t}><I/><b>{t}</b></span>)}</div><p>Everything is linked by the Production-Risk Case without replacing source-system authority.</p></Panel>
 </div>
 <div className="v5-ecc-boundary"><b>Framework boundary</b><span>ProdSecOps governs production-security operations. The framework does not replace scanners, CI/CD, SIEM, backup platforms, service ownership, or accountable organizational authority.</span></div>
 </div>}

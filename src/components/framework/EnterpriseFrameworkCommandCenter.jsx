import { useEffect, useState } from "react";
import { Link } from "react-router";
import {
  Activity,
  ArrowDown,
  ArrowRight,
  Boxes,
  BrainCircuit,
  CheckCircle2,
  Database,
  FileCheck2,
  Radar,
  RefreshCw,
  ShieldCheck,
  TestTube2,
  Workflow,
} from "lucide-react";

const principles = [
  ["Integrated", "Risk intelligence remains connected to governance and operational decisions."],
  ["Structured", "Tickets, stages, evidence and decisions follow a repeatable method."],
  ["Customized", "Criteria, authority and workflow content adapt to organizational context."],
  ["Inclusive", "Risk, service, security, response, resilience and compliance roles contribute."],
  ["Dynamic", "Changing threats, production state and service conditions update the case."],
  ["Best information", "Decisions use attributable state, telemetry, evidence and uncertainty."],
  ["Human factors", "Authority, competence, culture and accountable judgment remain explicit."],
  ["Improvement", "Outcomes improve criteria, rules, packages, playbooks and baselines."],
];

const domains = [
  {
    key: "remediation", number: "01", label: "Auto Remediation", ticket: "ARCT", path: "/remediation-intelligence", color: "#3b82f6",
    source: "Vulnerability findings, CPDB target state, service criticality and recovery references",
    action: "Apply approved, state-matched remediation or record a governed exception",
    outputs: ["Remediation Code", "Risk Profile", "SIEM ASP Rule", "Recovery-Verified Package"],
  },
  {
    key: "soc", number: "02", label: "SOC Intelligence", ticket: "ADCT", path: "/soc-intelligence", color: "#06b6d4",
    source: "SIEM/SOAR alerts, telemetry, configuration profile, active exceptions and detection coverage",
    action: "Publish validated detection, correlation, monitoring and escalation content",
    outputs: ["Monitoring Profile", "Detection Rule", "Exception Watch", "Escalation Evidence"],
  },
  {
    key: "incident", number: "03", label: "Incident Response", ticket: "IRCT", path: "/incident-response-intelligence", color: "#8b5cf6",
    source: "Incident evidence, affected services, WAF or firewall changes, containment and recovery context",
    action: "Execute the authorized response, containment or incident-control change",
    outputs: ["Response Playbook", "Containment Package", "Evidence Record", "Recovery Coordination"],
  },
  {
    key: "resilience", number: "04", label: "Resilience", ticket: "BCPCT", path: "/resilience-intelligence", color: "#10b981",
    source: "BIA, RTO/RPO, backups, dependencies, recovery packages and trusted baselines",
    action: "Perform the approved rollback, reconstruction, restore or return-to-service operation",
    outputs: ["Recovery Profile", "Restore Evidence", "Dependency Sequence", "Service Assurance"],
  },
  {
    key: "compliance", number: "05", label: "Compliance", ticket: "CCAT", path: "/compliance-intelligence", color: "#f3c34e",
    source: "Control obligations, applicability, evidence, exceptions, compensating controls and owners",
    action: "Apply treatment, compensating control or a governed exception with assurance evidence",
    outputs: ["Control Evidence", "Exception Record", "Assurance Profile", "Residual-Risk Conclusion"],
  },
];

const stages = ["Audit", "Acquire", "Build", "Deploy", "Validate", "Assess", "Execute", "Assure"];

function PrincipleWheel({ active, setActive }) {
  return (
    <div className="v36-principle-wheel" aria-label="Value creation and protection principles">
      <div className="v36-value-core"><ShieldCheck /><small>RISK MANAGEMENT PURPOSE</small><b>VALUE CREATION<br />AND PROTECTION</b></div>
      {principles.map(([name], index) => (
        <button key={name} type="button" className={active === index ? "active" : ""} style={{ "--angle": `${index * 45}deg` }} onMouseEnter={() => setActive(index)} onFocus={() => setActive(index)} onClick={() => setActive(index)}><span>{name}</span></button>
      ))}
      <svg viewBox="0 0 560 560" aria-hidden="true"><circle cx="280" cy="280" r="242" pathLength="100" /><circle className="signal" cx="280" cy="280" r="242" pathLength="100" /></svg>
    </div>
  );
}

function ArchitectureFlow({ domain, activeStage, setActiveStage }) {
  return (
    <div className="v36-architecture" style={{ "--domain": domain.color }}>
      <div className="v36-controller-banner">
        <BrainCircuit /><div><small>MANAGEMENT AND ORCHESTRATION CONTROLLER</small><b>5D THREAT INTELLIGENCE</b><p>Directs the five domain operations through one integrated risk process.</p></div>
        <div className="v36-domain-pills">{domains.map((item) => <span key={item.key} className={item.key === domain.key ? "active" : ""} style={{ "--pill": item.color }}>{item.number} {item.label}</span>)}</div>
      </div>

      <div className="v36-component-chain">
        <article className="rism">
          <header><span>COMPONENT 01</span><h4>RISM Service-Management Control Plane</h4><p>Creates and maintains the governed record for the selected domain engagement.</p></header>
          <div className="v36-ticket"><FileCheck2 /><div><small>ACTIVE DOMAIN TICKET</small><b>{domain.ticket}</b><span>{domain.label}</span></div></div>
          <div className="v36-case"><BrainCircuit /><small>PRODUCTION-RISK CASE</small><b>Context · Criteria · Authority · Evidence · Outcome</b></div>
          <div className="v36-module-grid">
            {[[Database,"CPDB"],[Activity,"Risk Registers"],[FileCheck2,"Ticket Management"],[ShieldCheck,"Risk Criteria"],[Boxes,"Authority & Evidence"],[BrainCircuit,"Residual Risk"]].map(([Icon,name])=><span key={name}><Icon />{name}</span>)}
          </div>
        </article>

        <div className="v36-chain-arrow"><ArrowRight /><small>ticket instantiates process</small></div>

        <article className="workflow">
          <header><span>COMPONENT 02</span><h4>Shared Eight-Stage Ticket Workflow</h4><p>The systematic lifecycle extends from the active RISM ticket.</p></header>
          <div className="v36-stage-orbit">
            <div className="v36-stage-core"><Workflow /><small>{domain.ticket}</small><b>8-STAGE<br />WORKFLOW</b></div>
            {stages.map((name,index)=><button type="button" key={name} className={activeStage===index?"active":""} style={{"--angle":`${index*45}deg`}} onMouseEnter={()=>setActiveStage(index)} onFocus={()=>setActiveStage(index)} onClick={()=>setActiveStage(index)}><span>0{index+1}</span><b>{name}</b></button>)}
            <svg viewBox="0 0 520 520" aria-hidden="true"><circle cx="260" cy="260" r="208" pathLength="100" /></svg>
          </div>
        </article>

        <div className="v36-chain-arrow"><ArrowRight /><small>proving stages invoke lab</small></div>

        <article className="labs">
          <header><span>COMPONENT 03</span><h4>SecLabs Validation Extension</h4><p>Purpose-bound proving is invoked where the workflow requires technical validation.</p></header>
          <div className="v36-golden-vault"><TestTube2 /><small>ISOLATED TESTBED</small><b>GOLDENVAULT</b></div>
          <div className="v36-lab-grid">{["Target acquisition","GoldenVault build","ASP / TTP test","Treatment validation","Impact assessment","Restore validation"].map((item,index)=><span key={item} className={activeStage>=1&&activeStage<=5&&index<=activeStage-1?"active":""}>0{index+1} {item}</span>)}</div>
          <p className="v36-return">Every test result returns to the active RISM ticket and Production-Risk Case.</p>
        </article>
      </div>

      <div className="v36-domain-result">
        <div><small>SOURCE OF TRUTH</small><p>{domain.source}</p></div>
        <ArrowDown />
        <div><small>DOMAIN ACTION</small><p>{domain.action}</p></div>
        <div className="v36-outputs">{domain.outputs.map((item)=><span key={item}><CheckCircle2 />{item}</span>)}</div>
        <Link to={domain.path}>Explore {domain.label} workflow <ArrowRight /></Link>
      </div>
    </div>
  );
}

export default function EnterpriseFrameworkCommandCenter() {
  const [activePrinciple, setActivePrinciple] = useState(0);
  const [activeDomain, setActiveDomain] = useState(0);
  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
    const principlesTimer = window.setInterval(() => setActivePrinciple((value) => (value + 1) % principles.length), 3600);
    const stageTimer = window.setInterval(() => setActiveStage((value) => (value + 1) % stages.length), 3000);
    return () => { window.clearInterval(principlesTimer); window.clearInterval(stageTimer); };
  }, []);

  const [principle, principleText] = principles[activePrinciple];
  const domain = domains[activeDomain];

  return (
    <div className="v36-ecc">
      <section className="v36-principles-section">
        <div className="v36-principles-copy">
          <span>PART 01 · GOVERNING PRINCIPLES</span>
          <h3>Value creation and protection guide every security operation.</h3>
          <p>ProdSecOps applies an ISO 31000-inspired risk-management purpose to infrastructure security: every engagement should protect service value, support organizational objectives, preserve accountability and improve the quality of future decisions.</p>
          <div className="v36-principle-readout"><small>{principle}</small><b>{principleText}</b></div>
          <div className="v36-benefit-strip"><span>Consistent decisions</span><span>Shared context</span><span>Resource reuse</span><span>Traceable authority</span><span>Continual learning</span></div>
        </div>
        <PrincipleWheel active={activePrinciple} setActive={setActivePrinciple} />
      </section>

      <section className="v36-framework-section">
        <header>
          <span>PART 02 · OPERATING FRAMEWORK AND PROCESS</span>
          <h3>Three components convert integrated risk direction into systematic domain operations.</h3>
          <p>5D Threat Intelligence governs how the five domains work together. RISM records the engagement, the ticket extends through the eight-stage workflow, and SecLabs is invoked from workflow validation stages. The resulting evidence returns to RISM for authority, residual-risk and assurance decisions.</p>
        </header>

        <div className="v36-domain-tabs">{domains.map((item,index)=><button type="button" key={item.key} className={activeDomain===index?"active":""} style={{"--domain":item.color}} onClick={()=>{setActiveDomain(index);setActiveStage(0)}}><span>{item.number}</span><div><b>{item.ticket}</b><small>{item.label}</small></div></button>)}</div>

        <ArchitectureFlow domain={domain} activeStage={activeStage} setActiveStage={setActiveStage} />
      </section>

      <div className="v36-boundary"><ShieldCheck /><p><b>Framework boundary:</b> ProdSecOps supports risk-based infrastructure-security operations informed by ISO/IEC 27001 and ISO 31000. It does not replace an ISMS, enterprise risk management, source systems, service ownership or accountable organizational authority.</p></div>
    </div>
  );
}

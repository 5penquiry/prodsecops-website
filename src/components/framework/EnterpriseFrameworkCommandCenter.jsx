import { Activity, Boxes, BrainCircuit, Database, Radar, ShieldCheck, TestTube2 } from "lucide-react";
import PrecisionInfinityWorkflow from "./PrecisionInfinityWorkflow";

const dimensions = [
  ["01", "PROACTIVE", "Exposure, criticality, emerging threat paths", "#3b82f6"],
  ["02", "DETECTIVE", "Telemetry, visibility, monitoring coverage", "#0ea5e9"],
  ["03", "REACTIVE", "Treatment, response, containment authority", "#8b5cf6"],
  ["04", "RECOVER", "Rollback, reconstruction, return to service", "#10b981"],
  ["05", "COMPLIANCE", "Evidence, obligations, defensible assurance", "#f3c34e"],
];

const domains = ["Remediation", "SOC", "Incident Response", "Resilience", "Compliance"];

function Panel({ eyebrow, title, className = "", children }) {
  return <section className={`v6-ecc-panel ${className}`}><header><small>{eyebrow}</small><h3>{title}</h3></header>{children}</section>;
}

export default function EnterpriseFrameworkCommandCenter() {
  return (
    <div className="v6-ecc">
      <div className="v6-ecc-grid">
        <Panel eyebrow="FIVE PERSISTENT PERSPECTIVES" title="5D Threat Intelligence Foundation" className="v6-ecc-five">
          <div className="v6-ecc-dimensions">
            {dimensions.map(([n, title, detail, color]) => (
              <article key={n} style={{ "--dimension": color }}><span>{n}</span><div><b>{title}</b><p>{detail}</p></div></article>
            ))}
          </div>
        </Panel>

        <Panel eyebrow="INTEGRATED CONTROL CORE" title="Production-Risk Case and Risk Governance" className="v6-ecc-core">
          <div className="v6-risk-map">
            <i /><i />
            <div className="v6-risk-core"><BrainCircuit /><small>SINGLE SOURCE OF TRUTH</small><b>PRODUCTION-RISK<br />CASE</b><p>Context · Authority · Evidence · Outcome</p></div>
            {[
              [Database, "CPDB", "State and relationships", "a"],
              [ShieldCheck, "Risk Criteria", "Policy and priority", "b"],
              [Activity, "Domain Tickets", "Controlled work", "c"],
              [Boxes, "Registers", "Risk and assurance", "d"],
            ].map(([Icon, title, detail, position]) => (
              <article className={position} key={title}><Icon /><div><b>{title}</b><span>{detail}</span></div></article>
            ))}
          </div>
        </Panel>

        <Panel eyebrow="ISOLATED PROVING" title="SecLabs Shared Validation Context" className="v6-ecc-labs">
          <p>GoldenVault reconstructs purpose-relevant production context and validates applicability, treatment, observability, compatibility, rollback, and recovery across the five domain operations.</p>
          <div className="v6-lab-flow">{["RECONSTRUCT", "VALIDATE", "OBSERVE", "ROLLBACK", "RECOVER", "EVIDENCE"].map((item) => <span key={item}><TestTube2 />{item}</span>)}</div>
          <b className="v6-authority-line">SecLabs proves · Risk Governance governs · Authorized roles approve</b>
        </Panel>

        <Panel eyebrow="SHARED GOVERNED LIFECYCLE" title="Eight-Stage Workflow" className="v6-ecc-workflow">
          <PrecisionInfinityWorkflow compact />
        </Panel>

        <Panel eyebrow="FIVE DISTINCT OBJECTIVES" title="Integrated Domain Operations" className="v6-ecc-domains">
          <div>{domains.map((item, index) => <span key={item}><b>0{index + 1}</b>{item}</span>)}</div>
          <p>Each domain retains its own purpose, evidence, ticket, authority, Stage 07 action, and closure criteria while contributing to one integrated risk position.</p>
        </Panel>

        <Panel eyebrow="AUTHORITATIVE BY RESPONSIBILITY" title="Source-of-Truth Model" className="v6-ecc-truth">
          <div>{[[Activity,"Security platforms"],[Database,"CPDB"],[Boxes,"Trusted packages"],[TestTube2,"SecLabs"],[Radar,"SIEM / SOAR"],[BrainCircuit,"Risk Case"]].map(([Icon,title]) => <span key={title}><Icon /><b>{title}</b></span>)}</div>
          <p>Everything is linked by the Production-Risk Case without replacing source-system authority.</p>
        </Panel>
      </div>

      <div className="v6-ecc-boundary"><b>Framework boundary</b><span>ProdSecOps governs production-security operations. The framework does not replace scanners, CI/CD, SIEM, backup platforms, service ownership, or accountable organizational authority.</span></div>
    </div>
  );
}

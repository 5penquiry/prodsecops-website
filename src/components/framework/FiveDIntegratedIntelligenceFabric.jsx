import { useEffect, useState } from "react";
import {
  Activity, ArrowRight, BrainCircuit, Database, FileCheck2, Gauge,
  Layers3, Radar, RefreshCw, ScanSearch, ShieldCheck, Siren,
  SlidersHorizontal, TicketCheck, Workflow,
} from "lucide-react";

const operatingContexts = [
  [Activity, "Security Signals", "Vulnerabilities, alerts, incidents, control drift and recovery events"],
  [Database, "Production State", "Assets, services, configuration, identity, dependencies and trusted baselines"],
  [Gauge, "Business Context", "Service criticality, business consequence, objectives and tolerance"],
  [ShieldCheck, "Governance Context", "Risk criteria, accountable authority, obligations, exceptions and evidence"],
];

const dimensionIcons = [ScanSearch, Radar, Siren, RefreshCw, FileCheck2];

export default function FiveDIntegratedIntelligenceFabric({ domains, activeIndex, setActiveIndex }) {
  const active = domains[activeIndex];
  const ActiveDimensionIcon = dimensionIcons[activeIndex];
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % domains.length);
    }, 2400);
    return () => window.clearInterval(timer);
  }, [paused, setActiveIndex, domains.length]);

  return (
    <div
      className="v44-intelligence-fabric"
      style={{ "--active": active.color }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="v44-definition-strip">
        <div>
          <span>PRODSECOPS INNOVATION</span>
          <h4>5D Integrated Threat Intelligence Orchestrator</h4>
          <p>ProdSecOps creates operational threat intelligence by correlating authoritative security, production, business and governance context across five connected SecOps dimensions.</p>
        </div>
        <aside>
          <span>NOT A STANDALONE THREAT FEED</span>
          <p>External and internal threat information is one security-signal source. The intelligence outcome is created through integrated operational analysis, production context and governed decision criteria.</p>
        </aside>
      </div>

      <div className="v44-fabric-grid">
        <section className="v44-context-plane">
          <header><span>AUTHORITATIVE OPERATING CONTEXT</span><b>Evidence entering the 5D analysis</b></header>
          <div className="v44-context-stack">
            {operatingContexts.map(([Icon, title, detail], index) => (
              <article key={title} style={{ "--delay": `${index * 0.18}s` }}>
                <Icon aria-hidden="true" />
                <div><b>{title}</b><small>{detail}</small></div>
                <i aria-hidden="true" />
              </article>
            ))}
          </div>
          <div className="v44-context-rule"><SlidersHorizontal /><span>Organization-defined criteria qualify relevance, priority, authority and required evidence.</span></div>
        </section>

        <section className="v44-core-column">
          <div className="v44-core-crown"><span>INTEGRATED MANAGEMENT CORE</span><b>5D INTELLIGENCE</b><small>One coordinated operational intelligence picture</small></div>
          <div className="v44-core-reactor">
            <div className="v44-reactor-ring ring-one" /><div className="v44-reactor-ring ring-two" /><div className="v44-reactor-ring ring-three" />
            <BrainCircuit aria-hidden="true" />
            <span>THREAT INTELLIGENCE IS CREATED HERE</span>
            <b>Correlate</b>
            <small>Relevance · State · Consequence · Authority · Evidence</small>
          </div>
          <div className="v44-core-operations"><span>CLASSIFY</span><i /><span>CONNECT</span><i /><span>DIRECT</span><i /><span>LEARN</span></div>
        </section>

        <section className="v44-direction-plane">
          <header><span>DIRECTED SECOPS OUTCOME</span><b>Integrated intelligence translated into governed action</b></header>
          <div className="v44-active-dimension">
            <ActiveDimensionIcon aria-hidden="true" />
            <div><span>ACTIVE DIMENSION</span><b>{active.phase}</b><small>{active.domain}</small></div>
          </div>
          <div className="v44-direction-detail"><span>INTELLIGENCE PURPOSE</span><p>{active.intent}</p></div>
          <div className="v44-direction-detail"><span>CORRELATED VIEW</span><p>{active.intelligence}</p></div>
          <div className="v44-rism-output">
            <TicketCheck aria-hidden="true" />
            <div><span>GOVERNED RISM RECORD</span><b>{active.ticket}</b><small>{active.ticketName}</small></div>
            <ArrowRight aria-hidden="true" />
          </div>
        </section>
      </div>

      <div className="v44-dimension-stage" aria-label="Select a 5D intelligence dimension">
        <div className="v44-stage-line" aria-hidden="true"><i style={{ "--active-index": activeIndex }} /></div>
        {domains.map((domain, index) => {
          const DimensionIcon = dimensionIcons[index];
          return (
            <button
              type="button" key={domain.phase}
              className={index === activeIndex ? "active" : ""}
              style={{ "--domain": domain.color }}
              onClick={() => setActiveIndex(index)}
              onFocus={() => { setPaused(true); setActiveIndex(index); }}
              onBlur={() => setPaused(false)}
              aria-pressed={index === activeIndex}
            >
              <span>0{index + 1}</span><DimensionIcon aria-hidden="true" />
              <div><b>{domain.phase}</b><small>{domain.domain}</small></div><em>{domain.ticket}</em>
            </button>
          );
        })}
      </div>

      <div className="v44-framework-outcome">
        <span><Layers3 />Integrated enterprise risk visibility</span>
        <span><Workflow />Security operations governance</span>
        <span><RefreshCw />Resource optimization and continual learning</span>
      </div>
    </div>
  );
}

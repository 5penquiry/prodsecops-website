import { Link } from "react-router";
const groups=[
  ["Framework", [["Homepage","/"],["5D Threat Intelligence","/#five-dimensional-intelligence"],["Risk Governance","/#risk-governance"],["Architecture","/#architecture"],["Operating workflow","/#workflow"]]],
  ["Intelligence", [["Auto Remediation","/remediation-intelligence"],["SOC Intelligence","/soc-intelligence"],["Incident Response","/incident-response-intelligence"],["Resilience","/resilience-intelligence"],["Compliance","/compliance-intelligence"]]],
  ["Engage", [["Contact","/contact"],["Terms of Use","/terms"],["Privacy Notice","/privacy"],["Accessibility","/accessibility"]]],
  ["Planned", [["Solutions","/solutions"],["Research","/research"],["Publications","/publications"],["Releases","/releases"]]],
];
export default function SitemapPage(){return <article className="v25-page-shell"><header className="v25-page-hero"><div><span>WEBSITE DIRECTORY</span><h1>Sitemap</h1><p>Navigate the ProdSecOps framework, intelligence domains, engagement channels, and governance information.</p></div></header><div className="v25-sitemap-grid">{groups.map(([title,links])=><section key={title}><h2>{title}</h2>{links.map(([label,path])=><Link key={path} to={path}>{label}<span>›</span></Link>)}</section>)}</div></article>}

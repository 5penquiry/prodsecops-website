import { Link } from "react-router";
import AnimatedLogo from "./AnimatedLogo";

const footerGroups = [
  {
    title: "Framework",
    links: [
      ["Overview", "/"],
      ["5D Threat Intelligence", "/#five-dimensional-intelligence"],
      ["Risk Governance", "/#risk-governance"],
      ["Architecture", "/#architecture"],
      ["Operating workflow", "/#workflow"],
    ],
  },
  {
    title: "Intelligence",
    links: [
      ["Remediation", "/remediation-intelligence"],
      ["SOC", "/soc-intelligence"],
      ["Incident Response", "/incident-response-intelligence"],
      ["Resilience", "/resilience-intelligence"],
      ["Compliance", "/compliance-intelligence"],
    ],
  },
  {
    title: "Resources",
    links: [
      ["Solutions", "/solutions"],
      ["Research", "/research"],
      ["Insights and Blog", "/research#insights"],
      ["Framework publications", "/research#publications"],
      ["Release history", "/research#releases"],
    ],
  },
];

export default function Footer() {
  return (
    <footer className="premium-footer v20-footer" id="contact">
      <div className="v20-footer-main">
        <div className="v20-footer-brand">
          <Link to="/" aria-label="ProdSecOps home">
            <AnimatedLogo footer />
          </Link>
          <b>Threat-Informed Infrastructure Security</b>
          <b>Management and Operations Framework</b>
          <p>Risk-driven security operations aligned through five-dimensional threat intelligence and accountable Risk Governance.</p>
          <span>Framework Preview 1.0</span>
        </div>

        {footerGroups.map((group) => (
          <section className="v20-footer-group" key={group.title}>
            <h2>{group.title}</h2>
            <div>
              {group.links.map(([label, path]) => <Link to={path} key={label}>{label}</Link>)}
            </div>
          </section>
        ))}

        <section className="v20-footer-group">
          <h2>Connect</h2>
          <div>
            <Link to="/contact">Contact</Link>
            <a href="mailto:enquiry@vpilot.org">Executive Briefing</a>
            <a href="mailto:framework@vpilot.org">Framework Feedback</a>
            <a href="mailto:enquiry@vpilot.org">General Enquiries</a>
          </div>
        </section>
      </div>

      <div className="v20-footer-bottom">
        <span>© 2026 V Pilot Cyber Solutions LLP</span>
        <nav aria-label="Legal navigation">
          <Link to="/terms">Terms</Link>
          <Link to="/privacy">Privacy</Link>
          <Link to="/accessibility">Accessibility</Link>
          <Link to="/sitemap">Sitemap</Link>
        </nav>
      </div>
    </footer>
  );
}

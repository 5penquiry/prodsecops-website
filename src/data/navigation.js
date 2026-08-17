export const navigationItems = [
  {
    label: "Framework",
    path: "/",
    eyebrow: "Operating model",
    title: "ProdSecOps Framework",
    description: "Risk-driven infrastructure security management and operations, coordinated through five-dimensional threat intelligence.",
    links: [
      { label: "Framework overview", path: "/" },
      { label: "5D Threat Intelligence", path: "/#five-dimensional-intelligence" },
      { label: "Risk Governance", path: "/#risk-governance" },
      { label: "Architecture", path: "/#architecture" },
      { label: "Operating workflow", path: "/#workflow" },
      { label: "Framework principles", path: "/#principles" },
    ],
  },
  {
    label: "Remediation",
    path: "/remediation-intelligence",
    eyebrow: "Proactive intelligence",
    title: "Remediation Intelligence",
    description: "Prioritize exploitable exposure, govern remediation decisions, and verify treatment against the exact production state.",
    links: [
      { label: "Exposure prioritization", path: "/remediation-intelligence#prioritization" },
      { label: "Vulnerability context", path: "/remediation-intelligence#context" },
      { label: "Remediation governance", path: "/remediation-intelligence#governance" },
      { label: "Validation and closure", path: "/remediation-intelligence#validation" },
    ],
  },
  {
    label: "SOC",
    path: "/soc-intelligence",
    eyebrow: "Detective intelligence",
    title: "SOC Intelligence",
    description: "Improve signal quality, production-aware detection, observability, and accountable security operations.",
    links: [
      { label: "Detection engineering", path: "/soc-intelligence#detection" },
      { label: "Telemetry assurance", path: "/soc-intelligence#telemetry" },
      { label: "Alert qualification", path: "/soc-intelligence#qualification" },
      { label: "Operational visibility", path: "/soc-intelligence#visibility" },
    ],
  },
  {
    label: "Incident Response",
    path: "/incident-response-intelligence",
    eyebrow: "Reactive intelligence",
    title: "Incident Response Intelligence",
    description: "Coordinate governed containment, evidence, recovery decisions, and production-safe response execution.",
    links: [
      { label: "Incident triage", path: "/incident-response-intelligence#triage" },
      { label: "Containment governance", path: "/incident-response-intelligence#containment" },
      { label: "Evidence integrity", path: "/incident-response-intelligence#evidence" },
      { label: "Response workflow", path: "/incident-response-intelligence#workflow" },
    ],
  },
  {
    label: "Resilience",
    path: "/resilience-intelligence",
    eyebrow: "Recovery intelligence",
    title: "Resilience Intelligence",
    description: "Prove recoverability, validate trusted state, and manage rollback and restoration as governed security controls.",
    links: [
      { label: "Trusted recovery", path: "/resilience-intelligence#recovery" },
      { label: "Rollback assurance", path: "/resilience-intelligence#rollback" },
      { label: "Continuity validation", path: "/resilience-intelligence#continuity" },
      { label: "Recovery evidence", path: "/resilience-intelligence#evidence" },
    ],
  },
  {
    label: "Compliance",
    path: "/compliance-intelligence",
    eyebrow: "Assurance intelligence",
    title: "Compliance Intelligence",
    description: "Convert operational evidence into defensible assurance, control traceability, and measurable governance outcomes.",
    links: [
      { label: "Control evidence", path: "/compliance-intelligence#evidence" },
      { label: "Assurance mapping", path: "/compliance-intelligence#mapping" },
      { label: "Governance reporting", path: "/compliance-intelligence#reporting" },
      { label: "Audit readiness", path: "/compliance-intelligence#audit" },
    ],
  },
];

export const moreNavigation = {
  label: "More",
  eyebrow: "Explore ProdSecOps",
  title: "Solutions, research, and engagement",
  description: "Explore implementation guidance, applied research, enterprise solutions, and ways to engage with the ProdSecOps framework.",
  columns: [
    {
      title: "Solutions",
      links: [
        { label: "Enterprise solutions", path: "/solutions" },
        { label: "Platform capabilities", path: "/solutions#capabilities" },
        { label: "Integration approach", path: "/solutions#integration" },
        { label: "SecLabs proving", path: "/solutions#seclabs" },
      ],
    },
    {
      title: "Research",
      links: [
        { label: "Research and insights", path: "/research" },
        { label: "Framework publications", path: "/research#publications" },
        { label: "Insights and blog", path: "/research#insights" },
        { label: "Release history", path: "/research#releases" },
      ],
    },
    {
      title: "Connect",
      links: [
        { label: "Contact", path: "/contact" },
        { label: "Executive briefing", path: "mailto:enquiry@vpilot.org", external: true },
        { label: "Framework feedback", path: "mailto:framework@vpilot.org", external: true },
        { label: "General enquiries", path: "mailto:enquiry@vpilot.org", external: true },
      ],
    },
  ],
};

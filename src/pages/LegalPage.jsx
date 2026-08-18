import { Link } from "react-router";

const pageContent = {
  terms: {
    eyebrow: "LEGAL AND GOVERNANCE",
    title: "Terms of Use",
    summary: "The terms governing access to prodsecops.com and use of the ProdSecOps framework materials.",
    updated: "18 August 2026",
    sections: [
      ["Informational purpose", "ProdSecOps materials describe a threat-informed infrastructure security management and operations framework, related operating concepts, research, and solution direction. Website content is provided for general information and does not constitute legal, regulatory, audit, certification, investment, or professional advice."],
      ["Intellectual property", "ProdSecOps, 5D Threat Intelligence, Risk Governance, CaBC, SecLabs, GoldenVault, PUDICA ART, diagrams, text, software concepts, and visual assets may be proprietary to V Pilot Cyber Solutions LLP or their respective owners. Access to this website does not grant a license to reproduce, modify, distribute, commercialize, or create derivative works from protected materials."],
      ["Acceptable use", "Visitors must not misuse the website, interfere with its security or availability, attempt unauthorized access, perform abusive automated collection, misrepresent the framework, submit malicious content, or reproduce protected material without authorization."],
      ["Standards and framework references", "References to ISO/IEC standards, NIST publications, laws, regulations, or industry practices describe alignment and research concepts only. Such references do not imply endorsement, accreditation, certification, or a guarantee of compliance."],
      ["Security decisions", "ProdSecOps emphasizes accountable Risk Governance. Visitors remain responsible for evaluating risks, approvals, production changes, recovery actions, and control decisions within their own legal, technical, and organizational context."],
      ["External services", "Links to third-party websites, platforms, social networks, and services are provided for convenience. Third-party services operate under their own terms, privacy notices, availability commitments, and security controls."],
      ["Availability and limitation", "Content may be changed, suspended, or withdrawn without notice. To the extent permitted by applicable law, the website and its materials are provided without guarantees of completeness, fitness, uninterrupted availability, or suitability for a particular purpose."],
      ["Contact", "Questions about these terms may be sent to enquiry@vpilot.org. Security or technical support enquiries may be sent to support@vpilot.org, and privacy matters to privacy@vpilot.org."],
    ],
  },
  privacy: {
    eyebrow: "TRUST AND TRANSPARENCY",
    title: "Privacy Notice",
    summary: "How V Pilot Cyber Solutions LLP handles information submitted through the ProdSecOps website.",
    updated: "18 August 2026",
    sections: [
      ["Scope", "This notice applies to personal information submitted through prodsecops.com, including contact requests, executive briefing enquiries, framework feedback, research collaboration enquiries, and related communications."],
      ["Information collected", "Information may include a name, business email address, organization, role, subject, message, communication preferences, and technical request information. Visitors should not submit passwords, secret keys, sensitive production data, regulated records, or undisclosed vulnerability details through general website forms or email."],
      ["Purpose of processing", "Information is used to respond to enquiries, arrange briefings, provide requested information, manage framework feedback, evaluate research or partnership requests, maintain communication records, protect the website, and meet legal or operational obligations."],
      ["Lawful handling and consent", "Where consent is relied upon, information is submitted voluntarily for the stated purpose. A visitor may withdraw consent by contacting privacy@vpilot.org, subject to records that must be retained for legal, security, or legitimate operational requirements."],
      ["Sharing and processors", "Information may be handled by authorized personnel and service providers supporting hosting, email, communications, security, or professional services. Personal information is not sold. Information may be disclosed where required by law or necessary to protect rights, systems, users, or the public."],
      ["Retention", "Information is retained only for as long as reasonably necessary for the purpose of the communication, applicable contractual needs, security records, dispute handling, or legal obligations, after which it is deleted or anonymized where appropriate."],
      ["Security", "Reasonable administrative, technical, and organizational safeguards are used to protect information. No internet transmission or storage method can be guaranteed to be completely secure."],
      ["Rights and grievances", "Requests for access, correction, deletion, consent withdrawal, or privacy grievances may be sent to privacy@vpilot.org. Requests may require identity verification before action is taken."],
      ["Updates", "This notice may be updated to reflect changes in the website, services, legal requirements, or operating practices. The effective date on this page identifies the latest published version."],
    ],
  },
  accessibility: {
    eyebrow: "INCLUSIVE EXPERIENCE",
    title: "Accessibility Statement",
    summary: "Our commitment to making the ProdSecOps website clear, operable, and usable across devices and assistive technologies.",
    updated: "18 August 2026",
    sections: [
      ["Commitment", "ProdSecOps aims to provide an inclusive digital experience through semantic structure, keyboard-operable navigation, readable contrast, responsive layouts, meaningful labels, and reduced-motion support."],
      ["Current measures", "The website uses structured headings, accessible link names, visible focus behavior, alternative text where appropriate, scalable typography, responsive navigation, and motion preferences that respect browser and operating-system settings."],
      ["Known limitations", "Some complex animated framework visuals may be more effectively understood with accompanying text. Social media and other third-party destinations are governed by their own accessibility capabilities."],
      ["Feedback", "If any content, control, form, navigation path, or visual is difficult to access, contact framework@vpilot.org with the page URL, the issue encountered, the browser or assistive technology used, and the preferred response format."],
    ],
  },
};

export default function LegalPage({ pageType }) {
  const page = pageContent[pageType];

  return (
    <article className="v25-page-shell">
      <header className="v25-page-hero">
        <div>
          <span>{page.eyebrow}</span>
          <h1>{page.title}</h1>
          <p>{page.summary}</p>
          <small>Last updated: {page.updated}</small>
        </div>
      </header>

      <div className="v25-legal-layout">
        <aside className="v25-page-index">
          <b>On this page</b>
          {page.sections.map(([title], index) => (
            <a href={`#section-${index + 1}`} key={title}>{title}</a>
          ))}
        </aside>

        <main className="v25-legal-content">
          <div className="v25-legal-notice">
            This publication is general website information and should be reviewed against applicable legal, regulatory, contractual, and organizational requirements.
          </div>
          {page.sections.map(([title, body], index) => (
            <section id={`section-${index + 1}`} key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div><h2>{title}</h2><p>{body}</p></div>
            </section>
          ))}
          <div className="v25-page-actions">
            <Link to="/contact">Contact the framework team</Link>
            <a href="mailto:privacy@vpilot.org">Privacy enquiry</a>
          </div>
        </main>
      </div>
    </article>
  );
}

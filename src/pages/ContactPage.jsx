import { useState } from "react";
import { Building2, Mail, MessageSquare, Send, User } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", organization: "", interest: "ProdSecOps executive briefing", message: "" });
  const update = (event) => setForm((current) => ({ ...current, [event.target.name]: event.target.value }));

  const submit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(`${form.interest} | ${form.organization || form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}
Business email: ${form.email}
Organization: ${form.organization}
Area of interest: ${form.interest}

${form.message}`);
    window.location.href = `mailto:framework@vpilot.org?subject=${subject}&body=${body}`;
  };

  return (
    <article className="v25-page-shell">
      <header className="v25-page-hero v25-contact-hero">
        <div><span>ENTERPRISE ENGAGEMENT</span><h1>Start a ProdSecOps conversation.</h1><p>Discuss the framework, five-dimensional threat intelligence, Risk Governance, Auto Remediation, SOC Intelligence, or an adoption roadmap.</p></div>
      </header>

      <div className="v25-contact-layout">
        <form className="v25-contact-form" onSubmit={submit}>
          <div className="v25-form-heading"><span>SECURE ENQUIRY</span><h2>Tell us what you are working on.</h2><p>The form prepares an email in the visitor's default email application. The website does not store the entered information.</p></div>
          <div className="v25-form-grid">
            <label><span><User />Name</span><input required name="name" value={form.name} onChange={update} autoComplete="name" /></label>
            <label><span><Mail />Business email</span><input required type="email" name="email" value={form.email} onChange={update} autoComplete="email" /></label>
          </div>
          <label><span><Building2 />Organization</span><input name="organization" value={form.organization} onChange={update} autoComplete="organization" /></label>
          <label><span><MessageSquare />Area of interest</span><select name="interest" value={form.interest} onChange={update}><option>ProdSecOps executive briefing</option><option>Auto Remediation intelligence</option><option>SOC Intelligence</option><option>5D Threat Intelligence</option><option>Research or partnership enquiry</option><option>Support</option></select></label>
          <label><span><MessageSquare />Message</span><textarea required rows="7" name="message" value={form.message} onChange={update} placeholder="Describe the operating challenge, desired outcome, or requested discussion." /></label>
          <button type="submit"><Send />PREPARE ENQUIRY EMAIL</button>
        </form>

        <aside className="v25-contact-panel">
          <span>DIRECT CONTACT</span><h2>Choose the right channel.</h2>
          <div><b>Framework and executive briefings</b><a href="mailto:framework@vpilot.org">framework@vpilot.org</a></div>
          <div><b>General and commercial enquiries</b><a href="mailto:enquiry@vpilot.org">enquiry@vpilot.org</a></div>
          <div><b>Product and technical support</b><a href="mailto:support@vpilot.org">support@vpilot.org</a></div>
          <div><b>Privacy requests and grievances</b><a href="mailto:privacy@vpilot.org">privacy@vpilot.org</a></div>
          <p>Do not submit passwords, secret keys, sensitive production data, regulated records, or undisclosed vulnerability details through this form.</p>
        </aside>
      </div>
    </article>
  );
}

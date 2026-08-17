import { useEffect, useState } from "react";
import { Mail, X } from "lucide-react";

export default function ContactModal({ open, onClose }) {
  const [form, setForm] = useState({ name: "", email: "", organization: "", subject: "", message: "" });

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open) return null;

  const update = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const submit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(form.subject || "ProdSecOps website enquiry");
    const body = encodeURIComponent(
      `Name: ${form.name}
Email: ${form.email}
Organization: ${form.organization}

${form.message}`,
    );
    window.location.href = `mailto:framework@vpilot.org?subject=${subject}&body=${body}`;
  };

  return (
    <div className="v21-contact-backdrop" role="presentation" onMouseDown={onClose}>
      <section
        className="v21-contact-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <header>
          <div>
            <span>PRODSECOPS ENGAGEMENT</span>
            <h2 id="contact-modal-title">Contact the framework team</h2>
            <p>Submit an enquiry, request an executive briefing, or share framework feedback.</p>
          </div>
          <button type="button" onClick={onClose} aria-label="Close contact form"><X /></button>
        </header>

        <form onSubmit={submit}>
          <div className="v21-form-grid">
            <label>Name<input required name="name" value={form.name} onChange={update} /></label>
            <label>Email<input required type="email" name="email" value={form.email} onChange={update} /></label>
            <label>Organization<input name="organization" value={form.organization} onChange={update} /></label>
            <label>Subject<input name="subject" value={form.subject} onChange={update} /></label>
          </div>
          <label>Message<textarea required rows="5" name="message" value={form.message} onChange={update} /></label>
          <div className="v21-contact-actions">
            <small>This static-site form opens the visitor's email application addressed to framework@vpilot.org.</small>
            <button type="submit"><Mail size={15} /> PREPARE EMAIL</button>
          </div>
        </form>
      </section>
    </div>
  );
}

import { useEffect, useState } from "react";
import {
  Building2,
  Mail,
  MessageSquare,
  Send,
  User,
  X,
} from "lucide-react";

export default function ContactModal({
  open = false,
  isOpen = false,
  show = false,
  onClose = () => {},
}) {
  const visible = open || isOpen || show;

  const [form, setForm] = useState({
    name: "",
    email: "",
    organization: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    if (!visible) {
      return undefined;
    }

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener(
      "keydown",
      handleEscape,
    );

    return () => {
      document.body.style.overflow =
        previousOverflow;

      document.removeEventListener(
        "keydown",
        handleEscape,
      );
    };
  }, [visible, onClose]);

  if (!visible) {
    return null;
  }

  const updateField = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      value,
    }));
  };

  const prepareEmail = (event) => {
    event.preventDefault();

    const subject =
      form.subject.trim() ||
      "ProdSecOps Framework Enquiry";

    const body = [
      "ProdSecOps Framework Enquiry",
      "",
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Organization: ${form.organization}`,
      "",
      "Message:",
      form.message,
    ].join("\n");

    const mailto = [
      "mailto:framework@vpilot.org",
      `?subject=${encodeURIComponent(subject)}`,
      `&body=${encodeURIComponent(body)}`,
    ].join("");

    window.location.href = mailto;
  };

  return (
    <div
      className="contact-modal-backdrop"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <section
        className="contact-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
      >
        <header className="contact-modal-header">
          <div>
            <span className="contact-modal-eyebrow">
              PRODSECOPS FRAMEWORK
            </span>

            <h2 id="contact-modal-title">
              Contact Us
            </h2>

            <p>
              Submit an enquiry about the framework,
              enterprise implementation, research,
              collaboration, or an executive briefing.
            </p>
          </div>

          <button
            type="button"
            className="contact-modal-close"
            onClick={onClose}
            aria-label="Close contact form"
          >
            <X aria-hidden="true" />
          </button>
        </header>

        <form
          className="contact-modal-form"
          onSubmit={prepareEmail}
        >
          <div className="contact-form-grid">
            <label>
              <span>
                <User aria-hidden="true" />
                Name
              </span>

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={updateField}
                autoComplete="name"
                required
              />
            </label>

            <label>
              <span>
                <Mail aria-hidden="true" />
                Email
              </span>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={updateField}
                autoComplete="email"
                required
              />
            </label>
          </div>

          <label>
            <span>
              <Building2 aria-hidden="true" />
              Organization
            </span>

            <input
              type="text"
              name="organization"
              value={form.organization}
              onChange={updateField}
              autoComplete="organization"
            />
          </label>

          <label>
            <span>
              <MessageSquare aria-hidden="true" />
              Subject
            </span>

            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={updateField}
              placeholder="Framework enquiry"
            />
          </label>

          <label>
            <span>
              <MessageSquare aria-hidden="true" />
              Message
            </span>

            <textarea
              name="message"
              rows="6"
              value={form.message}
              onChange={updateField}
              required
              placeholder="Describe the enquiry or requested discussion."
            />
          </label>

          <div className="contact-modal-notice">
            Submitting this form opens the default
            email application and prepares an email to
            framework@vpilot.org. The website does not
            transmit or store the entered information.
          </div>

          <footer className="contact-modal-actions">
            <button
              type="button"
              className="contact-modal-cancel"
              onClick={onClose}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="contact-modal-submit"
            >
              <Send aria-hidden="true" />
              Prepare Email
            </button>
          </footer>
        </form>
      </section>
    </div>
  );
}

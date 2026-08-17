import { useEffect, useState } from "react";
import { ChevronDown, Mail, Menu, X } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router";
import AnimatedLogo from "./AnimatedLogo";
import ContactModal from "./ContactModal";
import { moreNavigation, navigationItems } from "../../data/navigation";

function MegaLink({ item, onClick }) {
  if (item.external) {
    return <a href={item.path} onClick={onClick}>{item.label}</a>;
  }
  return <Link to={item.path} onClick={onClick}>{item.label}</Link>;
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [contactOpen, setContactOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setActiveMenu(null);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveMenu(null);
        setMobileOpen(false);
        setContactOpen(false);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  const navClass = ({ isActive }) => `premium-nav-link ${isActive ? "active" : ""}`;
  const closeMenus = () => setActiveMenu(null);

  return (
    <>
      <header className="premium-header v21-header" onMouseLeave={closeMenus}>
        <div className="v21-header-row">
          <NavLink to="/" aria-label="ProdSecOps home" className="v21-brand-link">
            <AnimatedLogo />
          </NavLink>

          <nav className="v21-primary-nav" aria-label="Primary navigation">
            {navigationItems.map((item, index) => (
              <div
                className="v21-nav-item"
                key={item.path}
                onMouseEnter={() => setActiveMenu(index)}
                onFocus={() => setActiveMenu(index)}
              >
                <NavLink to={item.path} className={navClass}>
                  {item.label}
                  <ChevronDown size={12} aria-hidden="true" />
                </NavLink>
              </div>
            ))}

            <div
              className="v21-nav-item"
              onMouseEnter={() => setActiveMenu("more")}
              onFocus={() => setActiveMenu("more")}
            >
              <button
                type="button"
                className={`premium-nav-link ${activeMenu === "more" ? "active" : ""}`}
              >
                MORE
                <ChevronDown size={12} aria-hidden="true" />
              </button>
            </div>
          </nav>

          <button
            type="button"
            className="v21-contact-cta"
            onClick={() => setContactOpen(true)}
          >
            <Mail size={14} aria-hidden="true" />
            CONTACT US
          </button>

          <button
            type="button"
            className="v21-mobile-toggle"
            onClick={() => setMobileOpen((value) => !value)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>

        <div className={`v21-mega-layer ${activeMenu !== null ? "open" : ""}`}>
          {navigationItems.map((item, index) => (
            <section
              key={item.path}
              className={`v21-mega-panel ${activeMenu === index ? "active" : ""}`}
              aria-hidden={activeMenu !== index}
            >
              <div className="v21-mega-intro">
                <span>{item.eyebrow}</span>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <Link className="v21-mega-primary" to={item.path} onClick={closeMenus}>
                  Explore {item.label}
                </Link>
              </div>
              <div className="v21-mega-links">
                <span>Explore this domain</span>
                {item.links.map((link) => (
                  <MegaLink key={link.label} item={link} onClick={closeMenus} />
                ))}
              </div>
            </section>
          ))}

          <section
            className={`v21-mega-panel v21-mega-more ${activeMenu === "more" ? "active" : ""}`}
            aria-hidden={activeMenu !== "more"}
          >
            <div className="v21-mega-intro">
              <span>{moreNavigation.eyebrow}</span>
              <h2>{moreNavigation.title}</h2>
              <p>{moreNavigation.description}</p>
            </div>
            {moreNavigation.columns.map((column) => (
              <div className="v21-mega-links" key={column.title}>
                <span>{column.title}</span>
                {column.links.map((link) => (
                  <MegaLink key={link.label} item={link} onClick={closeMenus} />
                ))}
              </div>
            ))}
          </section>
        </div>

        {mobileOpen && (
          <nav className="v21-mobile-nav" aria-label="Mobile navigation">
            {navigationItems.map((item) => (
              <NavLink key={item.path} to={item.path} onClick={() => setMobileOpen(false)}>
                {item.label}
              </NavLink>
            ))}
            <button type="button" onClick={() => { setContactOpen(true); setMobileOpen(false); }}>
              CONTACT US
            </button>
          </nav>
        )}
      </header>

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}

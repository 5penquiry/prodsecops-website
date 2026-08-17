import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router";
import AnimatedLogo from "./AnimatedLogo";
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
  const headerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setActiveMenu(null);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setActiveMenu(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, []);

  const navClass = ({ isActive }) => `premium-nav-link ${isActive ? "active" : ""}`;
  const closeMenus = () => setActiveMenu(null);

  return (
    <header className="premium-header v20-header" ref={headerRef} onMouseLeave={closeMenus}>
      <div className="v20-header-row">
        <NavLink to="/" aria-label="ProdSecOps home" className="v20-brand-link">
          <AnimatedLogo />
        </NavLink>

        <nav className="v20-primary-nav" aria-label="Primary navigation">
          {navigationItems.map((item, index) => (
            <div
              className="v20-nav-item"
              key={item.path}
              onMouseEnter={() => setActiveMenu(index)}
              onFocus={() => setActiveMenu(index)}
            >
              <NavLink to={item.path} className={navClass}>
                {item.label}
                <ChevronDown size={13} aria-hidden="true" />
              </NavLink>
            </div>
          ))}

          <div
            className="v20-nav-item"
            onMouseEnter={() => setActiveMenu("more")}
            onFocus={() => setActiveMenu("more")}
          >
            <button type="button" className={`premium-nav-link ${activeMenu === "more" ? "active" : ""}`}>
              More
              <ChevronDown size={13} aria-hidden="true" />
            </button>
          </div>
        </nav>

        <a className="nav-cta" href="mailto:enquiry@vpilot.org">
          Executive Briefing
        </a>

        <button
          type="button"
          className="v20-mobile-toggle"
          onClick={() => setMobileOpen((value) => !value)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      <div className={`v20-mega-layer ${activeMenu !== null ? "open" : ""}`}>
        {navigationItems.map((item, index) => (
          <section
            key={item.path}
            className={`v20-mega-panel ${activeMenu === index ? "active" : ""}`}
            aria-hidden={activeMenu !== index}
          >
            <div className="v20-mega-intro">
              <span>{item.eyebrow}</span>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <Link className="v20-mega-primary" to={item.path} onClick={closeMenus}>
                Explore {item.label}
              </Link>
            </div>
            <div className="v20-mega-links">
              <span>Explore this domain</span>
              {item.links.map((link) => <MegaLink key={link.label} item={link} onClick={closeMenus} />)}
            </div>
          </section>
        ))}

        <section className={`v20-mega-panel v20-mega-more ${activeMenu === "more" ? "active" : ""}`} aria-hidden={activeMenu !== "more"}>
          <div className="v20-mega-intro">
            <span>{moreNavigation.eyebrow}</span>
            <h2>{moreNavigation.title}</h2>
            <p>{moreNavigation.description}</p>
          </div>
          {moreNavigation.columns.map((column) => (
            <div className="v20-mega-links" key={column.title}>
              <span>{column.title}</span>
              {column.links.map((link) => <MegaLink key={link.label} item={link} onClick={closeMenus} />)}
            </div>
          ))}
        </section>
      </div>

      {mobileOpen && (
        <nav className="v20-mobile-nav" aria-label="Mobile navigation">
          {navigationItems.map((item, index) => (
            <div className="v20-mobile-section" key={item.path}>
              <button type="button" onClick={() => setActiveMenu(activeMenu === index ? null : index)}>
                {item.label}
                <ChevronDown size={15} className={activeMenu === index ? "rotated" : ""} />
              </button>
              {activeMenu === index && (
                <div>
                  <NavLink to={item.path}>Overview</NavLink>
                  {item.links.map((link) => <MegaLink key={link.label} item={link} />)}
                </div>
              )}
            </div>
          ))}
          <div className="v20-mobile-section">
            <button type="button" onClick={() => setActiveMenu(activeMenu === "more" ? null : "more")}>
              More
              <ChevronDown size={15} className={activeMenu === "more" ? "rotated" : ""} />
            </button>
            {activeMenu === "more" && moreNavigation.columns.map((column) => (
              <div key={column.title}>
                <strong>{column.title}</strong>
                {column.links.map((link) => <MegaLink key={link.label} item={link} />)}
              </div>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

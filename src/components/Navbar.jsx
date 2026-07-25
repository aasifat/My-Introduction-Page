import { useEffect, useState } from "react";
import { navItems } from "../data/content.js";
import useScrollSpy from "../hooks/useScrollSpy.js";

export default function Navbar() {
  const ids = navItems.map((item) => item.id);
  const activeId = useScrollSpy(ids);

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <>
      <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
        <div className="wrap nav-inner">
          <a href="#home" className="brand">
            <span className="num">10</span> SIFAT
          </a>

          <nav className="nav-links">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={activeId === item.id ? "active" : ""}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            className={`hamburger ${menuOpen ? "open" : ""}`}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {navItems.map((item, i) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={() => setMenuOpen(false)}
          >
            <span>{String(i).padStart(2, "0")}</span>
            {item.label}
          </a>
        ))}
      </div>
    </>
  );
}

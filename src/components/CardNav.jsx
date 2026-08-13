import { useState, useEffect, useRef, useCallback } from "react";

const NAV_ITEMS = [
  { label: "خانه", url: "#home" },
  { label: "درباره من", url: "#founder" },
  { label: "مهارت‌ها", url: "#skills" },
  { label: "نمونه کارها", url: "#work" },
  { label: "قیمت‌ها", url: "#pricing" },
  { label: "تماس", url: "#contact" },
];

const EXTERNAL_LINKS = [
  {
    label: "اینستاگرام",
    url: "https://www.instagram.com/like_reza.ir",
  },
  { label: "گیت هاب", url: "#" },
];

function CardNav({ logo }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#home");
  const navRef = useRef(null);
  const toggleRef = useRef(null);

  const updateActive = useCallback(() => {
    const targets = document.querySelectorAll("header[id], section[id], footer[id]");
    let current = "#home";
    for (const el of targets) {
      if (el.getBoundingClientRect().top <= 140) {
        current = "#" + el.id;
      }
    }
    setActiveHash(current);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", updateActive, { passive: true });
    updateActive();
    return () => window.removeEventListener("scroll", updateActive);
  }, [updateActive]);

  useEffect(() => {
    if (!menuOpen) return;

    const handleClickOutside = (e) => {
      if (
        navRef.current &&
        !navRef.current.contains(e.target) &&
        toggleRef.current &&
        !toggleRef.current.contains(e.target)
      ) {
        setMenuOpen(false);
      }
    };

    const handleEscape = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onHashChange = () => setActiveHash(window.location.hash || "#home");
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar" id="navbar">
      <a href="#home" className="brand">
        <span className="brand-mark">IR</span>
        <span className="brand-text">Like Reza</span>
      </a>

      <ul
        ref={navRef}
        className={`nav-links${menuOpen ? " open" : ""}`}
        id="navLinks"
      >
        <div className="nav-links-head">
          <span className="brand-mark" style={{ width: 24, height: 24, fontSize: ".65rem" }}>IR</span>
          <span style={{ fontWeight: 600, fontSize: ".9rem" }}>Like Reza</span>
        </div>

        {NAV_ITEMS.map((item) => (
          <li key={item.url}>
            <a
              href={item.url}
              className={activeHash === item.url ? "active" : ""}
              onClick={closeMenu}
            >
              <span>{item.label}</span>
              {activeHash === item.url && <span className="nav-active-dot" />}
            </a>
          </li>
        ))}

        <li className="nav-mobile-extras">
          {EXTERNAL_LINKS.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
        </li>
      </ul>

      {menuOpen && <div className="nav-overlay" onClick={closeMenu} />}

      <div className="nav-actions">
        <a href="#contact" className="btn btn-ghost btn-sm magnetic">
          تماس
        </a>
        <a href="#contact" className="btn btn-primary btn-sm magnetic">
          رزرو جلسه
        </a>

        <button
          ref={toggleRef}
          className={`nav-toggle${menuOpen ? " open" : ""}`}
          id="navToggle"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
        </button>
      </div>
    </nav>
  );
}

export default CardNav;

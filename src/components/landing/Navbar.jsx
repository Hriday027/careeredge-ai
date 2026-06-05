import { useState } from "react";
import Logo from "../ui/Logo";
import { useScrollSpy, scrollToRef } from "../../hooks/useScrollSpy";
import { useIsMobile } from "../../hooks/useMediaQuery";

export default function Navbar({ onEnter, refs }) {
  const scrolled = useScrollSpy(40);
  const isMobile = useIsMobile();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Features", ref: refs.features },
    { label: "How It Works", ref: refs.howItWorks },
    { label: "About", ref: refs.about },
  ];

  const handleNavClick = (ref) => {
    setMenuOpen(false);
    scrollToRef(ref);
  };

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: isMobile ? "0 20px" : "0 48px", height: 64,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: scrolled || menuOpen ? "rgba(8,8,15,0.96)" : "transparent",
        backdropFilter: scrolled || menuOpen ? "blur(20px)" : "none",
        borderBottom: scrolled || menuOpen ? "1px solid rgba(255,255,255,0.07)" : "none",
        transition: "all 0.3s",
      }}>
        <Logo size={isMobile ? "sm" : "md"} />

        {/* Desktop nav links */}
        {!isMobile && (
          <div style={{ display: "flex", gap: 32 }}>
            {navLinks.map((item) => (
              <button key={item.label} onClick={() => scrollToRef(item.ref)}
                style={{ background: "none", border: "none", color: "rgba(255,255,255,0.5)", fontSize: 14, fontWeight: 500, cursor: "pointer", fontFamily: "'Outfit', sans-serif", transition: "color 0.2s", padding: 0 }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}>
                {item.label}
              </button>
            ))}
          </div>
        )}

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          {/* Desktop CTA */}
          {!isMobile && (
            <button onClick={onEnter}
              style={{ background: "linear-gradient(135deg, #7c6ef5, #4a3fa8)", border: "none", color: "#fff", padding: "10px 22px", borderRadius: 12, fontSize: 13.5, fontWeight: 600, cursor: "pointer", fontFamily: "'Outfit', sans-serif", transition: "opacity 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}>
              Get Started Free →
            </button>
          )}

          {/* Mobile hamburger */}
          {isMobile && (
            <button onClick={() => setMenuOpen((o) => !o)}
              style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", color: "#fff", width: 40, height: 40, borderRadius: 10, cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 5, padding: 0 }}>
              {menuOpen ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              ) : (
                <>
                  <span style={{ width: 18, height: 2, background: "#fff", borderRadius: 2 }} />
                  <span style={{ width: 14, height: 2, background: "rgba(255,255,255,0.6)", borderRadius: 2 }} />
                  <span style={{ width: 18, height: 2, background: "#fff", borderRadius: 2 }} />
                </>
              )}
            </button>
          )}
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {isMobile && menuOpen && (
        <div style={{
          position: "fixed", top: 64, left: 0, right: 0, zIndex: 99,
          background: "rgba(8,8,15,0.98)", backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          padding: "16px 20px 24px",
          animation: "slideDown 0.2s ease",
        }}>
          {navLinks.map((item) => (
            <button key={item.label} onClick={() => handleNavClick(item.ref)}
              style={{ display: "block", width: "100%", textAlign: "left", background: "none", border: "none", color: "rgba(255,255,255,0.7)", fontSize: 16, fontWeight: 500, cursor: "pointer", fontFamily: "'Outfit', sans-serif", padding: "14px 0", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
              {item.label}
            </button>
          ))}
          <button onClick={() => { setMenuOpen(false); onEnter(); }}
            style={{ width: "100%", marginTop: 16, background: "linear-gradient(135deg, #7c6ef5, #4a3fa8)", border: "none", color: "#fff", padding: "14px", borderRadius: 12, fontSize: 15, fontWeight: 700, cursor: "pointer", fontFamily: "'Outfit', sans-serif" }}>
            Get Started Free →
          </button>
        </div>
      )}
    </>
  );
}

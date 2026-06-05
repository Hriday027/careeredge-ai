import Logo from "../ui/Logo";
import { scrollToRef } from "../../hooks/useScrollSpy";
import { useIsMobile } from "../../hooks/useMediaQuery";

export default function Footer({ refs }) {
  const isMobile = useIsMobile();

  const navLinks = [
    { label: "Features", ref: refs.features },
    { label: "How It Works", ref: refs.howItWorks },
    { label: "About", ref: refs.about },
  ];

  return (
    <footer style={{ padding: isMobile ? "24px 20px" : "32px 48px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", flexDirection: isMobile ? "column" : "row", justifyContent: "space-between", alignItems: isMobile ? "flex-start" : "center", gap: isMobile ? 16 : 16 }}>
        <Logo size="sm" />
        <div style={{ display: "flex", gap: isMobile ? 20 : 28, flexWrap: "wrap" }}>
          {navLinks.map((item) => (
            <button key={item.label} onClick={() => scrollToRef(item.ref)}
              style={{ background: "none", border: "none", color: "rgba(255,255,255,0.35)", fontSize: 13, cursor: "pointer", fontFamily: "'Outfit', sans-serif", transition: "color 0.2s", padding: 0 }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}>
              {item.label}
            </button>
          ))}
        </div>
        <p style={{ color: "rgba(255,255,255,0.25)", fontSize: 12, margin: 0 }}>
          © 2024 CareerEdge AI · Built for students, by students.
        </p>
      </div>
    </footer>
  );
}

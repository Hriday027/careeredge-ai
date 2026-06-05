import { scrollToRef } from "../../hooks/useScrollSpy";
import { useIsMobile, useIsTablet } from "../../hooks/useMediaQuery";

export default function CtaBanner({ onEnter, aboutRef }) {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();

  return (
    <section style={{ padding: isMobile ? "40px 20px 60px" : isTablet ? "50px 32px 70px" : "60px 48px 80px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <div style={{ background: "linear-gradient(135deg, #1a1440 0%, #2d1a5e 50%, #1a3340 100%)", border: "1px solid rgba(124,110,245,0.3)", borderRadius: isMobile ? 20 : 28, padding: isMobile ? "40px 24px" : isTablet ? "50px 36px" : "60px 48px", textAlign: "center", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: -80, right: -80, width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, #7c6ef525, transparent 70%)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", bottom: -60, left: -60, width: 220, height: 220, borderRadius: "50%", background: "radial-gradient(circle, #2dd4a020, transparent 70%)", pointerEvents: "none" }} />

          <h2 style={{ fontSize: "clamp(22px, 4vw, 42px)", fontWeight: 800, letterSpacing: "-0.04em", marginBottom: 14, color: "#f0f0ff", position: "relative" }}>
            Ready to Ace Your Next Interview?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: isMobile ? 14 : 16, marginBottom: 30, position: "relative" }}>
            Join thousands of students who landed their dream jobs with CareerEdge AI.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", position: "relative" }}>
            <button onClick={onEnter}
              style={{ background: "linear-gradient(135deg, #7c6ef5, #2dd4a0)", border: "none", color: "#fff", padding: isMobile ? "14px 28px" : "18px 44px", borderRadius: 14, fontSize: isMobile ? 14 : 16, fontWeight: 700, cursor: "pointer", letterSpacing: "-0.02em", boxShadow: "0 16px 50px rgba(124,110,245,0.35)", transition: "transform 0.2s", fontFamily: "'Outfit', sans-serif", width: isMobile ? "100%" : "auto" }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "none")}>
              Open CareerEdge AI Dashboard →
            </button>
            {!isMobile && (
              <button onClick={() => scrollToRef(aboutRef)}
                style={{ background: "transparent", border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.75)", padding: "18px 36px", borderRadius: 14, fontSize: 15, fontWeight: 600, cursor: "pointer", fontFamily: "'Outfit', sans-serif", transition: "all 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.08)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}>
                Learn More About Us
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

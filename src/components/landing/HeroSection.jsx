import { STATS } from "../../data/stats";
import { scrollToRef } from "../../hooks/useScrollSpy";
import { useIsMobile, useIsTablet } from "../../hooks/useMediaQuery";

export default function HeroSection({ onEnter, featuresRef }) {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();

  return (
    <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", padding: isMobile ? "100px 20px 60px" : isTablet ? "110px 32px 70px" : "120px 48px 80px" }}>
      {/* Background orbs — scaled down on mobile */}
      {!isMobile && <>
        <div style={{ position: "absolute", top: "15%", left: "10%", width: isTablet ? 300 : 500, height: isTablet ? 300 : 500, borderRadius: "50%", background: "radial-gradient(circle, #7c6ef520 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "10%", right: "8%", width: isTablet ? 250 : 400, height: isTablet ? 250 : 400, borderRadius: "50%", background: "radial-gradient(circle, #2dd4a015 0%, transparent 70%)", pointerEvents: "none" }} />
      </>}

      <div style={{ maxWidth: 860, textAlign: "center", position: "relative", zIndex: 1, width: "100%" }}>
        {/* Live badge */}
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 24, background: "rgba(124,110,245,0.12)", border: "1px solid rgba(124,110,245,0.3)", padding: "7px 16px", borderRadius: 40 }}>
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#2dd4a0", display: "inline-block", animation: "pulse 2s ease infinite", flexShrink: 0 }} />
          <span style={{ color: "#c4bbff", fontSize: isMobile ? 11 : 13, fontWeight: 500 }}>AI-Powered Career Acceleration Platform</span>
        </div>

        {/* Headline */}
        <h1 style={{ fontSize: isMobile ? "clamp(34px, 10vw, 48px)" : "clamp(46px, 7vw, 80px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.04em", marginBottom: 20, color: "#f5f5ff" }}>
          Land Your Dream Job{" "}
          <span style={{ background: "linear-gradient(135deg, #7c6ef5 0%, #2dd4a0 50%, #f59e0b 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            With AI by Your Side
          </span>
        </h1>

        <p style={{ fontSize: isMobile ? 15 : 18, color: "rgba(255,255,255,0.55)", lineHeight: 1.75, maxWidth: 600, margin: "0 auto", marginBottom: isMobile ? 32 : 44, fontWeight: 400 }}>
          Six powerful AI tools built for students and freshers — from mock interviews to resume reviews, career roadmaps to company-specific prep. Practice smarter, get placed faster.
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <button onClick={onEnter}
            style={{ background: "linear-gradient(135deg, #7c6ef5, #4a3fa8)", border: "none", color: "#fff", padding: isMobile ? "14px 28px" : "16px 36px", borderRadius: 14, fontSize: isMobile ? 15 : 16, fontWeight: 700, cursor: "pointer", letterSpacing: "-0.02em", boxShadow: "0 12px 40px #7c6ef540", transition: "transform 0.2s, box-shadow 0.2s", fontFamily: "'Outfit', sans-serif", width: isMobile ? "100%" : "auto" }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 20px 50px #7c6ef555"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 12px 40px #7c6ef540"; }}>
            Start Preparing Now →
          </button>
          <button onClick={() => scrollToRef(featuresRef)}
            style={{ background: "transparent", border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.8)", padding: isMobile ? "14px 28px" : "16px 36px", borderRadius: 14, fontSize: isMobile ? 15 : 16, fontWeight: 600, cursor: "pointer", transition: "all 0.2s", fontFamily: "'Outfit', sans-serif", width: isMobile ? "100%" : "auto" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.06)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}>
            View All Features
          </button>
        </div>

        {/* Stats row */}
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)", gap: 0, marginTop: isMobile ? 48 : 72, border: "1px solid rgba(255,255,255,0.07)", borderRadius: 20, overflow: "hidden" }}>
          {STATS.map((s, i) => (
            <div key={s.label} style={{ padding: isMobile ? "16px 12px" : "20px 28px", textAlign: "center", borderRight: (!isMobile && i < STATS.length - 1) ? "1px solid rgba(255,255,255,0.08)" : "none", borderBottom: (isMobile && i < 2) ? "1px solid rgba(255,255,255,0.08)" : "none", background: "rgba(255,255,255,0.02)" }}>
              <div style={{ fontSize: isMobile ? 24 : 32, fontWeight: 800, letterSpacing: "-0.04em", background: "linear-gradient(135deg, #7c6ef5, #2dd4a0)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{s.value}</div>
              <div style={{ color: "rgba(255,255,255,0.4)", fontSize: isMobile ? 11 : 13, marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

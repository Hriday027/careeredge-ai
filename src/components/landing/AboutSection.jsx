import { forwardRef } from "react";
import { scrollToRef } from "../../hooks/useScrollSpy";
import { useIsMobile, useIsTablet } from "../../hooks/useMediaQuery";

const VALUE_CARDS = [
  { icon: "🎓", title: "100% Free", desc: "Every tool, every session, every piece of feedback. No paywalls, no subscriptions.", color: "#7c6ef5" },
  { icon: "🏢", title: "200+ Companies", desc: "Prep material and HR question banks for top Indian and MNC employers.", color: "#2dd4a0" },
  { icon: "🌐", title: "Hindi + English", desc: "Chat in whichever language you're comfortable with. The AI adapts to you.", color: "#f59e0b" },
  { icon: "⚡", title: "Instant Feedback", desc: "No waiting. Every answer you give is scored and explained in real time.", color: "#f87171" },
  { icon: "📱", title: "24/7 Access", desc: "Practice any time from any device — your hostel, home, or on the go.", color: "#c084fc" },
  { icon: "🔒", title: "Private & Safe", desc: "Your resume, your answers, your data — never shared, never stored.", color: "#38bdf8" },
];

const AboutSection = forwardRef(function AboutSection({ onEnter, howItWorksRef }, ref) {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();

  return (
    <section ref={ref} style={{ padding: isMobile ? "60px 20px" : isTablet ? "70px 32px" : "100px 48px", background: "rgba(255,255,255,0.01)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: isMobile || isTablet ? "1fr" : "1fr 1fr", gap: isMobile ? 40 : isTablet ? 48 : 80, alignItems: "center" }}>

          {/* Story copy */}
          <div>
            <div style={{ color: "#c084fc", fontSize: 13, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 14 }}>About Us</div>
            <h2 style={{ fontSize: "clamp(26px, 4vw, 42px)", fontWeight: 800, letterSpacing: "-0.04em", marginBottom: 18, color: "#f0f0ff", lineHeight: 1.15 }}>
              Built by Students,<br />
              <span style={{ background: "linear-gradient(135deg, #c084fc, #7c6ef5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>For Students</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: isMobile ? 14 : 15.5, lineHeight: 1.8, marginBottom: 16 }}>
              CareerEdge AI was born out of a simple frustration — placement preparation in India is broken. Students spend thousands on coaching classes that teach theory but not confidence. They practice alone without feedback. They walk into interviews unprepared for the real questions companies actually ask.
            </p>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: isMobile ? 14 : 15.5, lineHeight: 1.8, marginBottom: 16 }}>
              We built this platform to fix that. Six AI-powered tools, each targeting a specific gap — whether it's English communication anxiety, not knowing what Infosys really asks in HR rounds, or having a resume that ATS systems reject before a human even reads it.
            </p>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: isMobile ? 14 : 15.5, lineHeight: 1.8, marginBottom: 28 }}>
              Every tool is free. Every piece of feedback is specific. And unlike a coaching class, you can practice at 2 AM in your hostel room, as many times as you need, without judgment.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <button onClick={onEnter}
                style={{ background: "linear-gradient(135deg, #c084fc, #7c6ef5)", border: "none", color: "#fff", padding: "12px 24px", borderRadius: 12, fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: "'Outfit', sans-serif", transition: "opacity 0.2s", flex: isMobile ? 1 : "none" }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}>
                Start for Free →
              </button>
              <button onClick={() => scrollToRef(howItWorksRef)}
                style={{ background: "transparent", border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.7)", padding: "12px 24px", borderRadius: 12, fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: "'Outfit', sans-serif", transition: "all 0.2s", flex: isMobile ? 1 : "none" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.06)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}>
                See How It Works
              </button>
            </div>
          </div>

          {/* Value cards grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: isMobile ? 10 : 16 }}>
            {VALUE_CARDS.map((card) => (
              <div key={card.title}
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 16, padding: isMobile ? "16px 14px" : "20px 18px", transition: "all 0.2s" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; e.currentTarget.style.borderColor = `${card.color}40`; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.03)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; }}>
                <div style={{ fontSize: isMobile ? 18 : 22, marginBottom: 8 }}>{card.icon}</div>
                <div style={{ fontWeight: 700, fontSize: isMobile ? 13 : 14, color: "#f0f0ff", marginBottom: 5, letterSpacing: "-0.02em" }}>{card.title}</div>
                <div style={{ color: "rgba(255,255,255,0.4)", fontSize: isMobile ? 11.5 : 12.5, lineHeight: 1.6 }}>{card.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

export default AboutSection;

import { useState, forwardRef } from "react";
import { HOW_STEPS } from "../../data/howSteps";
import { useIsMobile, useIsTablet } from "../../hooks/useMediaQuery";

const HowItWorks = forwardRef(function HowItWorks({ onEnter }, ref) {
  const [expandedStep, setExpandedStep] = useState(null);
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();

  return (
    <section ref={ref} style={{ padding: isMobile ? "60px 20px" : isTablet ? "70px 32px" : "100px 48px" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: isMobile ? 36 : 64 }}>
          <div style={{ color: "#2dd4a0", fontSize: 13, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>Process</div>
          <h2 style={{ fontSize: "clamp(24px, 5vw, 44px)", fontWeight: 800, letterSpacing: "-0.04em", marginBottom: 14, color: "#f0f0ff" }}>Simple. Powerful. Effective.</h2>
          <p style={{ color: "rgba(255,255,255,0.45)", fontSize: isMobile ? 14 : 16, maxWidth: 520, margin: "0 auto" }}>Four steps — from opening the app to walking out of your interview with confidence.</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)", gap: isMobile ? 12 : 20 }}>
          {HOW_STEPS.map((item, idx) => {
            const isExpanded = expandedStep === idx;
            return (
              <div key={item.step} onClick={() => setExpandedStep(isExpanded ? null : idx)}
                style={{ padding: isMobile ? "20px" : "28px", background: isExpanded ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.03)", border: isExpanded ? `1px solid ${item.color}40` : "1px solid rgba(255,255,255,0.07)", borderRadius: 20, cursor: "pointer", transition: "all 0.3s", position: "relative", overflow: "hidden" }}>

                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, ${item.color}, transparent)`, opacity: isExpanded ? 1 : 0, transition: "opacity 0.3s" }} />

                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 12 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: item.color, letterSpacing: "0.1em" }}>STEP {item.step}</div>
                  <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 20, transition: "transform 0.3s", transform: isExpanded ? "rotate(45deg)" : "none", display: "inline-block", lineHeight: 1 }}>+</span>
                </div>

                <div style={{ fontSize: isMobile ? 26 : 30, marginBottom: 10 }}>{item.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: isMobile ? 16 : 18, marginBottom: 8, letterSpacing: "-0.03em", color: "#f0f0ff" }}>{item.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: isMobile ? 13 : 14, lineHeight: 1.7, marginBottom: isExpanded ? 14 : 0 }}>{item.desc}</p>

                {isExpanded && (
                  <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 14, animation: "fadeSlideUp 0.25s ease" }}>
                    <p style={{ color: "rgba(255,255,255,0.7)", fontSize: isMobile ? 13 : 13.5, lineHeight: 1.75, margin: 0 }}>{item.detail}</p>
                    <button onClick={(e) => { e.stopPropagation(); onEnter(); }}
                      style={{ marginTop: 14, background: `${item.color}22`, border: `1px solid ${item.color}44`, color: item.color, padding: "9px 18px", borderRadius: 10, cursor: "pointer", fontSize: 13, fontWeight: 600, fontFamily: "'Outfit', sans-serif", transition: "all 0.2s", width: isMobile ? "100%" : "auto" }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = `${item.color}38`)}
                      onMouseLeave={(e) => (e.currentTarget.style.background = `${item.color}22`)}>
                      Try This Now →
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
});

export default HowItWorks;

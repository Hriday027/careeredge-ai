import { useIsMobile, useIsTablet } from "../../hooks/useMediaQuery";

const TESTIMONIALS = [
  { quote: "I practiced mock interviews for TCS for 3 days using CareerEdge. They asked almost the same questions in the real round. Got selected!", name: "Priya Sharma", role: "B.Tech CSE, 2024 · Placed at TCS", color: "#7c6ef5" },
  { quote: "My resume was getting rejected everywhere. After the ATS scoring tool fixed my keywords and format, I got 4 callbacks in one week.", name: "Rahul Mehta", role: "MBA HR, 2024 · Placed at Wipro", color: "#2dd4a0" },
  { quote: "The English coach helped me so much. I used to freeze during HR rounds. Now I can answer confidently and even make small talk.", name: "Anjali Verma", role: "B.Com, 2024 · Placed at HDFC Bank", color: "#f59e0b" },
];

export default function Testimonials() {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();

  return (
    <section style={{ padding: isMobile ? "60px 20px" : isTablet ? "70px 32px" : "80px 48px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: isMobile ? 32 : 52 }}>
          <div style={{ color: "#f59e0b", fontSize: 13, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>Student Stories</div>
          <h2 style={{ fontSize: "clamp(22px, 4vw, 38px)", fontWeight: 800, letterSpacing: "-0.04em", color: "#f0f0ff" }}>Real Students. Real Results.</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : isTablet ? "repeat(2, 1fr)" : "repeat(3, 1fr)", gap: isMobile ? 14 : 20 }}>
          {TESTIMONIALS.map((t, i) => (
            // On tablet 2-col, hide last card to keep grid even
            (isTablet && !isMobile && i === 2) ? null :
            <div key={t.name} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 20, padding: isMobile ? "20px 18px" : "28px 24px", position: "relative" }}>
              <div style={{ fontSize: 32, color: t.color, opacity: 0.4, fontFamily: "Georgia, serif", lineHeight: 1, marginBottom: 10 }}>"</div>
              <p style={{ color: "rgba(255,255,255,0.65)", fontSize: isMobile ? 13 : 14, lineHeight: 1.75, marginBottom: 18, fontStyle: "italic" }}>{t.quote}</p>
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: 14, display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 34, height: 34, borderRadius: "50%", background: `linear-gradient(135deg, ${t.color}60, ${t.color}20)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700, color: t.color, flexShrink: 0 }}>
                  {t.name[0]}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 13, color: "#f0f0ff" }}>{t.name}</div>
                  <div style={{ color: "rgba(255,255,255,0.35)", fontSize: 11 }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
          {/* On tablet show 3rd card full-width */}
          {isTablet && !isMobile && (
            <div key={TESTIMONIALS[2].name} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 20, padding: "28px 24px", gridColumn: "1 / -1" }}>
              <div style={{ fontSize: 32, color: TESTIMONIALS[2].color, opacity: 0.4, fontFamily: "Georgia, serif", lineHeight: 1, marginBottom: 10 }}>"</div>
              <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 14, lineHeight: 1.75, marginBottom: 18, fontStyle: "italic" }}>{TESTIMONIALS[2].quote}</p>
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: 14, display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 34, height: 34, borderRadius: "50%", background: `linear-gradient(135deg, ${TESTIMONIALS[2].color}60, ${TESTIMONIALS[2].color}20)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700, color: TESTIMONIALS[2].color }}>{TESTIMONIALS[2].name[0]}</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 13, color: "#f0f0ff" }}>{TESTIMONIALS[2].name}</div>
                  <div style={{ color: "rgba(255,255,255,0.35)", fontSize: 11 }}>{TESTIMONIALS[2].role}</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

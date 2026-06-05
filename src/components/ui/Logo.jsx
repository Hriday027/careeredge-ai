// Logo mark — reused in Navbar, Dashboard nav, and Footer

export default function Logo({ size = "md" }) {
  const sizes = { sm: { box: 28, font: 13, text: 15 }, md: { box: 34, font: 17, text: 19 }, lg: { box: 40, font: 20, text: 22 } };
  const s = sizes[size] || sizes.md;

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <div style={{
        width: s.box, height: s.box, borderRadius: Math.round(s.box * 0.29),
        background: "linear-gradient(135deg, #7c6ef5, #2dd4a0)",
        display: "flex", alignItems: "center", justifyContent: "center", fontSize: s.font,
        flexShrink: 0,
      }}>🎓</div>
      <span style={{ fontWeight: 800, fontSize: s.text, letterSpacing: "-0.04em", color: "#f0f0ff" }}>
        CareerEdge{" "}
        <span style={{ background: "linear-gradient(90deg, #7c6ef5, #2dd4a0)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          AI
        </span>
      </span>
    </div>
  );
}

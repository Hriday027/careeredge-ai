function renderText(text, lightAccent) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((p, i) =>
    p.startsWith("**") && p.endsWith("**")
      ? <strong key={i} style={{ color: lightAccent, fontWeight: 600 }}>{p.slice(2, -2)}</strong>
      : p.split("\n").map((line, j) => <span key={`${i}-${j}`}>{line}{j < p.split("\n").length - 1 && <br />}</span>)
  );
}

export default function MessageBubble({ message, feature, isMobile }) {
  const isUser = message.role === "user";

  return (
    <div style={{ display: "flex", justifyContent: isUser ? "flex-end" : "flex-start", marginBottom: isMobile ? 12 : 16, animation: "fadeSlideUp 0.3s ease" }}>
      {!isUser && (
        <div style={{ width: isMobile ? 28 : 32, height: isMobile ? 28 : 32, borderRadius: "50%", background: feature.gradient, display: "flex", alignItems: "center", justifyContent: "center", fontSize: isMobile ? 13 : 15, flexShrink: 0, marginRight: isMobile ? 8 : 10, marginTop: 2 }}>
          {feature.icon}
        </div>
      )}
      <div style={{
        maxWidth: isMobile ? "85%" : "72%",
        padding: isMobile ? "10px 13px" : "12px 16px",
        background: isUser ? `linear-gradient(135deg, ${feature.accent}90, ${feature.accent}60)` : "rgba(255,255,255,0.06)",
        borderRadius: 18,
        borderBottomRightRadius: isUser ? 4 : 18,
        borderBottomLeftRadius: !isUser ? 4 : 18,
        border: !isUser ? "1px solid rgba(255,255,255,0.08)" : "none",
        color: "#e8e8f0", fontSize: isMobile ? 13.5 : 14.5, lineHeight: 1.7,
      }}>
        {renderText(message.text, feature.lightAccent)}
      </div>
    </div>
  );
}

// Animated three-dot typing indicator shown while AI is responding

export default function TypingIndicator({ accent }) {
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: 6,
      padding: "10px 14px",
      background: "rgba(255,255,255,0.06)",
      borderRadius: 16, borderBottomLeftRadius: 4,
      width: "fit-content", marginTop: 8,
    }}>
      {[0, 1, 2].map((i) => (
        <span key={i} style={{
          width: 7, height: 7, borderRadius: "50%",
          background: accent,
          animation: `bounce 1.2s ease-in-out ${i * 0.2}s infinite`,
        }} />
      ))}
    </div>
  );
}

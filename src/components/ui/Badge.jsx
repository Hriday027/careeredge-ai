// Pill badge — "Most Popular", "New", etc.

export default function Badge({ label, accent, lightAccent }) {
  if (!label) return null;
  return (
    <span style={{
      position: "absolute", top: 16, right: 16,
      background: `${accent}22`, color: lightAccent,
      fontSize: 10.5, fontWeight: 600,
      padding: "3px 10px", borderRadius: 20,
      border: `1px solid ${accent}40`,
      letterSpacing: "0.05em", textTransform: "uppercase",
    }}>
      {label}
    </span>
  );
}

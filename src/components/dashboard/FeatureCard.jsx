import { useState } from "react";
import Badge from "../ui/Badge";
import { useIsMobile } from "../../hooks/useMediaQuery";

export default function FeatureCard({ feature, onSelect }) {
  const [hovered, setHovered] = useState(false);
  const isMobile = useIsMobile();

  return (
    <div
      onClick={() => onSelect(feature)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "rgba(255,255,255,0.07)" : "rgba(255,255,255,0.03)",
        border: hovered ? `1px solid ${feature.accent}60` : "1px solid rgba(255,255,255,0.08)",
        borderRadius: 20, padding: isMobile ? "20px 18px" : "28px 24px",
        cursor: "pointer", position: "relative", overflow: "hidden",
        transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
        transform: hovered && !isMobile ? "translateY(-4px)" : "none",
        boxShadow: hovered ? `0 20px 60px ${feature.accent}20` : "none",
        WebkitTapHighlightColor: "transparent",
      }}
    >
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: feature.gradient, opacity: hovered ? 1 : 0.4, transition: "opacity 0.3s" }} />
      <div style={{ position: "absolute", top: -60, right: -60, width: 160, height: 160, borderRadius: "50%", background: feature.accent, opacity: hovered ? 0.06 : 0.02, transition: "opacity 0.3s", pointerEvents: "none" }} />

      <Badge label={feature.badge} accent={feature.accent} lightAccent={feature.lightAccent} />

      <div style={{ fontSize: isMobile ? 28 : 36, marginBottom: 12 }}>{feature.icon}</div>

      <h3 style={{ color: "#f0f0ff", fontWeight: 700, fontSize: isMobile ? 16 : 18, marginBottom: 5, letterSpacing: "-0.03em" }}>
        {feature.title}
      </h3>
      <p style={{ color: feature.lightAccent, fontSize: isMobile ? 11.5 : 12.5, fontWeight: 500, marginBottom: 10 }}>
        {feature.subtitle}
      </p>
      <p style={{ color: "rgba(255,255,255,0.5)", fontSize: isMobile ? 13 : 13.5, lineHeight: 1.65, marginBottom: 16 }}>
        {feature.description}
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
        {feature.tags.map((tag) => (
          <span key={tag} style={{ background: `${feature.accent}18`, color: feature.lightAccent, fontSize: isMobile ? 10 : 11, padding: "3px 9px", borderRadius: 20, border: `1px solid ${feature.accent}30` }}>
            {tag}
          </span>
        ))}
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 6, color: feature.accent, fontSize: 13, fontWeight: 600 }}>
        Start Session
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
          style={{ transition: "transform 0.2s", transform: hovered ? "translateX(4px)" : "none" }}>
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </div>
    </div>
  );
}

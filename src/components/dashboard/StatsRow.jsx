import { DASHBOARD_STATS } from "../../data/stats";
import { useIsMobile } from "../../hooks/useMediaQuery";

export default function StatsRow() {
  const isMobile = useIsMobile();

  return (
    <div style={{ display: "grid", gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)", gap: isMobile ? 10 : 14, marginBottom: isMobile ? 32 : 48 }}>
      {DASHBOARD_STATS.map((s) => (
        <div key={s.label} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: isMobile ? 14 : 16, padding: isMobile ? "14px 16px" : "18px 20px", display: "flex", alignItems: "center", gap: isMobile ? 10 : 14 }}>
          <span style={{ fontSize: isMobile ? 20 : 24 }}>{s.icon}</span>
          <div>
            <div style={{ fontSize: isMobile ? 18 : 22, fontWeight: 800, color: s.color, letterSpacing: "-0.04em" }}>{s.value}</div>
            <div style={{ color: "rgba(255,255,255,0.4)", fontSize: isMobile ? 10 : 12, marginTop: 2 }}>{s.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

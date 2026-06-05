import { useState } from "react";
import Logo from "../ui/Logo";
import { useIsMobile } from "../../hooks/useMediaQuery";

const FILTERS = ["All", "Interview", "Resume", "Career", "Communication"];

export default function DashboardNav({ activeFilter, onFilter, toolCount, onBack }) {
  const isMobile = useIsMobile();
  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <nav style={{
      padding: isMobile ? "0 16px" : "0 40px", height: isMobile ? 60 : 68,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      background: "rgba(8,8,15,0.95)", backdropFilter: "blur(20px)",
      borderBottom: "1px solid rgba(255,255,255,0.07)",
      position: "sticky", top: 0, zIndex: 50, gap: 12,
    }}>
      {/* Left: back + logo */}
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <button onClick={onBack}
          style={{ background: "transparent", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.6)", padding: isMobile ? "5px 10px" : "6px 14px", borderRadius: 8, cursor: "pointer", fontSize: isMobile ? 12 : 13, fontFamily: "'Outfit', sans-serif", transition: "all 0.2s", whiteSpace: "nowrap" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}>
          ← {isMobile ? "" : "Back"}
        </button>
        <Logo size="sm" />
      </div>

      {/* Desktop filter tabs */}
      {!isMobile && (
        <div style={{ display: "flex", gap: 6, background: "rgba(255,255,255,0.04)", padding: "5px 6px", borderRadius: 12, border: "1px solid rgba(255,255,255,0.08)" }}>
          {FILTERS.map((f) => (
            <button key={f} onClick={() => onFilter(f)}
              style={{ background: activeFilter === f ? "rgba(124,110,245,0.25)" : "transparent", border: activeFilter === f ? "1px solid rgba(124,110,245,0.4)" : "1px solid transparent", color: activeFilter === f ? "#c4bbff" : "rgba(255,255,255,0.45)", padding: "6px 14px", borderRadius: 8, cursor: "pointer", fontSize: 13, fontWeight: 500, fontFamily: "'Outfit', sans-serif", transition: "all 0.2s" }}>
              {f}
            </button>
          ))}
        </div>
      )}

      {/* Mobile: filter dropdown trigger + count */}
      {isMobile && (
        <button onClick={() => setFilterOpen((o) => !o)}
          style={{ background: "rgba(124,110,245,0.15)", border: "1px solid rgba(124,110,245,0.3)", color: "#c4bbff", padding: "7px 12px", borderRadius: 8, cursor: "pointer", fontSize: 12, fontWeight: 600, fontFamily: "'Outfit', sans-serif", display: "flex", alignItems: "center", gap: 6 }}>
          {activeFilter} ▾
        </button>
      )}

      <div style={{ color: "rgba(255,255,255,0.35)", fontSize: isMobile ? 11 : 13, whiteSpace: "nowrap" }}>{toolCount} tools</div>

      {/* Mobile filter dropdown */}
      {isMobile && filterOpen && (
        <div style={{ position: "absolute", top: 60, left: 0, right: 0, background: "rgba(8,8,15,0.98)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(255,255,255,0.08)", zIndex: 99, padding: "8px 16px 16px", animation: "slideDown 0.2s ease" }}>
          {FILTERS.map((f) => (
            <button key={f} onClick={() => { onFilter(f); setFilterOpen(false); }}
              style={{ display: "block", width: "100%", textAlign: "left", background: activeFilter === f ? "rgba(124,110,245,0.15)" : "transparent", border: "none", color: activeFilter === f ? "#c4bbff" : "rgba(255,255,255,0.6)", padding: "12px 8px", borderRadius: 8, cursor: "pointer", fontSize: 14, fontWeight: activeFilter === f ? 600 : 400, fontFamily: "'Outfit', sans-serif" }}>
              {f} {activeFilter === f && "✓"}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

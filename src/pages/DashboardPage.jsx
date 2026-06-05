import { useState } from "react";
import { GLOBAL_KEYFRAMES } from "../styles/globals";
import { FILTER_MAP } from "../data/features";
import DashboardNav from "../components/dashboard/DashboardNav";
import StatsRow from "../components/dashboard/StatsRow";
import FeatureCard from "../components/dashboard/FeatureCard";
import { useIsMobile, useIsTablet } from "../hooks/useMediaQuery";

export default function DashboardPage({ onSelectFeature, onBack }) {
  const [activeFilter, setActiveFilter] = useState("All");
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const visibleFeatures = FILTER_MAP[activeFilter] || FILTER_MAP["All"];

  return (
    <div style={{ background: "#08080f", minHeight: "100vh", fontFamily: "'Outfit', sans-serif", color: "#e8e8f0" }}>
      <style>{GLOBAL_KEYFRAMES}</style>
      <DashboardNav activeFilter={activeFilter} onFilter={setActiveFilter} toolCount={visibleFeatures.length} onBack={onBack} />
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: isMobile ? "28px 16px" : isTablet ? "36px 28px" : "48px 40px" }}>
        <div style={{ marginBottom: isMobile ? 28 : 48 }}>
          <h1 style={{ fontSize: isMobile ? "clamp(22px, 6vw, 30px)" : "clamp(28px, 4vw, 40px)", fontWeight: 800, letterSpacing: "-0.04em", marginBottom: 8, color: "#f0f0ff" }}>Welcome back 👋</h1>
          <p style={{ color: "rgba(255,255,255,0.45)", fontSize: isMobile ? 13 : 15 }}>Choose a tool to start your session. Each module is powered by a specialized AI assistant.</p>
        </div>
        <StatsRow />
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : isTablet ? "repeat(2, 1fr)" : "repeat(auto-fit, minmax(340px, 1fr))", gap: isMobile ? 12 : 20 }}>
          {visibleFeatures.map((f) => <FeatureCard key={f.id} feature={f} onSelect={onSelectFeature} />)}
        </div>
      </div>
    </div>
  );
}

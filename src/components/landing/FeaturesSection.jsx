import { forwardRef } from "react";
import { FEATURES } from "../../data/features";
import FeatureCard from "../dashboard/FeatureCard";
import { useIsMobile, useIsTablet } from "../../hooks/useMediaQuery";

const FeaturesSection = forwardRef(function FeaturesSection({ onSelect }, ref) {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();

  return (
    <section ref={ref} style={{ padding: isMobile ? "60px 20px" : isTablet ? "70px 32px" : "80px 48px", background: "rgba(255,255,255,0.01)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: isMobile ? 40 : 64 }}>
          <div style={{ color: "#7c6ef5", fontSize: 13, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>Platform Features</div>
          <h2 style={{ fontSize: "clamp(26px, 5vw, 48px)", fontWeight: 800, letterSpacing: "-0.04em", marginBottom: 16, color: "#f0f0ff" }}>Everything You Need to Get Placed</h2>
          <p style={{ color: "rgba(255,255,255,0.45)", fontSize: isMobile ? 14 : 16, maxWidth: 500, margin: "0 auto" }}>Six dedicated AI modules, each built for a specific stage of your placement journey.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : isTablet ? "repeat(2, 1fr)" : "repeat(auto-fit, minmax(340px, 1fr))", gap: isMobile ? 14 : 20 }}>
          {FEATURES.map((f) => <FeatureCard key={f.id} feature={f} onSelect={onSelect} />)}
        </div>
      </div>
    </section>
  );
});

export default FeaturesSection;

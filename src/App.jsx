import { useState } from "react";
import LandingPage from "./pages/LandingPage";
import DashboardPage from "./pages/DashboardPage";
import ChatPage from "./pages/ChatPage";

/**
 * App — root screen router
 *
 * Screens:
 *   "landing"   → LandingPage
 *   "dashboard" → DashboardPage (feature picker)
 *   "chat"      → ChatPage (active AI session)
 */
export default function App() {
  const [screen, setScreen] = useState("landing");
  const [activeFeature, setActiveFeature] = useState(null);

  // Called from landing CTAs and feature cards
  const handleEnterDashboard = (feature) => {
    if (feature && feature.id) {
      // Direct feature select (from landing feature cards)
      setActiveFeature(feature);
      setScreen("chat");
    } else {
      setScreen("dashboard");
    }
  };

  const handleSelectFeature = (feature) => {
    setActiveFeature(feature);
    setScreen("chat");
  };

  if (screen === "chat" && activeFeature) {
    return <ChatPage feature={activeFeature} onBack={() => setScreen("dashboard")} />;
  }

  if (screen === "dashboard") {
    return (
      <DashboardPage
        onSelectFeature={handleSelectFeature}
        onBack={() => setScreen("landing")}
      />
    );
  }

  return <LandingPage onEnter={handleEnterDashboard} />;
}

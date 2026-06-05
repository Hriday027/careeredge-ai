import { useRef } from "react";
import { GLOBAL_KEYFRAMES } from "../styles/globals";
import Navbar from "../components/landing/Navbar";
import HeroSection from "../components/landing/HeroSection";
import FeaturesSection from "../components/landing/FeaturesSection";
import HowItWorks from "../components/landing/HowItWorks";
import AboutSection from "../components/landing/AboutSection";
import Testimonials from "../components/landing/Testimonials";
import CtaBanner from "../components/landing/CtaBanner";
import Footer from "../components/landing/Footer";

export default function LandingPage({ onEnter }) {
  const featuresRef = useRef(null);
  const howItWorksRef = useRef(null);
  const aboutRef = useRef(null);

  const refs = { features: featuresRef, howItWorks: howItWorksRef, about: aboutRef };

  return (
    <div style={{ background: "#08080f", minHeight: "100vh", fontFamily: "'Outfit', sans-serif", color: "#e8e8f0", overflowX: "hidden" }}>
      <style>{GLOBAL_KEYFRAMES}</style>

      <Navbar onEnter={onEnter} refs={refs} />
      <HeroSection onEnter={onEnter} featuresRef={featuresRef} />
      <FeaturesSection ref={featuresRef} onSelect={onEnter} />
      <HowItWorks ref={howItWorksRef} onEnter={onEnter} />
      <AboutSection ref={aboutRef} onEnter={onEnter} howItWorksRef={howItWorksRef} />
      <Testimonials />
      <CtaBanner onEnter={onEnter} aboutRef={aboutRef} />
      <Footer refs={refs} />
    </div>
  );
}

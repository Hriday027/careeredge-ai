import { useState, useEffect } from "react";

/**
 * useScrollSpy
 * Returns true when page has scrolled past `threshold` pixels.
 * Used by the Navbar to switch from transparent → frosted glass.
 */
export function useScrollSpy(threshold = 40) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > threshold);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return scrolled;
}

/**
 * scrollToRef — smoothly scrolls to a React ref target
 */
export function scrollToRef(ref) {
  ref?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
}

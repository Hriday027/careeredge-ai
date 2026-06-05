import { useState, useEffect } from "react";

/**
 * useMediaQuery — returns true while the window matches the query.
 * Usage: const isMobile = useMediaQuery("(max-width: 640px)");
 */
export function useMediaQuery(query) {
  const [matches, setMatches] = useState(
    () => window.matchMedia(query).matches
  );
  useEffect(() => {
    const mq = window.matchMedia(query);
    const handler = (e) => setMatches(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [query]);
  return matches;
}

/** Convenience breakpoint hooks */
export function useIsMobile()  { return useMediaQuery("(max-width: 640px)"); }
export function useIsTablet()  { return useMediaQuery("(max-width: 1024px)"); }

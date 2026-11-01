import { useEffect, useState } from "react";

/**
 * Returns true while the given media query matches. SSR-safe-ish: falls back to
 * false when `window` is unavailable.
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia(query).matches : false
  );

  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = (e: MediaQueryListEvent) => setMatches(e.matches);
    setMatches(mql.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [query]);

  return matches;
}

/** Convenience: true below the 768px breakpoint (mobile view). */
export function useIsMobile(): boolean {
  return useMediaQuery("(max-width: 767px)");
}

/** True below 992px — phones and tablets get the touch layout. */
export function useIsTouch(): boolean {
  return useMediaQuery("(max-width: 991px)");
}

/** Current viewport width in px, updated on resize. */
export function useWindowWidth(): number {
  const [width, setWidth] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return width;
}

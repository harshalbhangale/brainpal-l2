"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Custom hook that uses the Intersection Observer API to detect when an
 * element scrolls into the viewport. Once triggered, it stays true (one-shot)
 * so animations only play once.
 *
 * Options are read only on mount (not reactive). Callers do not need to
 * memoize the options object since the effect intentionally runs once.
 *
 * NOTE: For richer spring-physics and gesture-based animations, consider
 * adding framer-motion as a dependency when packages can be installed.
 */
export function useInView<T extends HTMLElement = HTMLElement>(
  options?: IntersectionObserverInit
) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  const optionsRef = useRef(options);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, ...optionsRef.current }
    );

    observer.observe(element);

    return () => observer.disconnect();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { ref, inView };
}

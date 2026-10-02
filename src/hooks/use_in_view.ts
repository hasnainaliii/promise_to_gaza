"use client";

import { useEffect, useRef, useState } from "react";

/** Flips to true the first time the element scrolls into view, then stops
    observing, so reveal animations play once rather than on every pass. */
export function useInView<T extends Element>(
  threshold = 0.15,
  rootMargin = "0px 0px -8% 0px",
) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || inView) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [inView, threshold, rootMargin]);

  return [ref, inView] as const;
}

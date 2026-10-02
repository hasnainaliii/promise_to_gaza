"use client";

import type { CSSProperties, ReactNode, RefObject } from "react";
import { useInView } from "@/hooks/use_in_view";

type RevealEffect = "rise" | "fade" | "unveil" | "draw";
type RevealTag = "div" | "li" | "span" | "figure" | "section" | "ol" | "ul";

interface RevealProps {
  children: ReactNode;
  /** rise: fade up · fade: opacity only · unveil: photo wipes up from the
      bottom · draw: strokes marked `data-draw` trace themselves in. */
  effect?: RevealEffect;
  delay?: number;
  as?: RevealTag;
  className?: string;
}

export function Reveal({
  children,
  effect = "rise",
  delay = 0,
  as: Tag = "div",
  className,
}: RevealProps) {
  const [ref, inView] = useInView<HTMLElement>();
  const style = delay
    ? ({ "--reveal-delay": `${delay}ms` } as CSSProperties)
    : undefined;

  return (
    <Tag
      ref={ref as unknown as RefObject<never>}
      data-reveal={effect}
      data-inview={inView || undefined}
      style={style}
      className={className}
    >
      {children}
    </Tag>
  );
}

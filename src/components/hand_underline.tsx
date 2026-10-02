import type { ReactNode } from "react";
import { Reveal } from "@/components/reveal";

/** A hand-drawn stroke that traces itself under a word once it scrolls in. */
export function HandUnderline({
  children,
  colorClass = "text-berry",
}: {
  children: ReactNode;
  colorClass?: string;
}) {
  return (
    <Reveal
      as="span"
      effect="draw"
      delay={250}
      className="relative inline-block whitespace-nowrap"
    >
      {children}
      <svg
        viewBox="0 0 220 12"
        preserveAspectRatio="none"
        aria-hidden="true"
        className={`pointer-events-none absolute -bottom-1 left-0 h-2.5 w-full ${colorClass}`}
        fill="none"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      >
        <path data-draw pathLength={1} d="M3 8C40 3 70 10 104 6c36-4 64 3 113-2" />
      </svg>
    </Reveal>
  );
}

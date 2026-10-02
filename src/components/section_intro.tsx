import type { ReactNode } from "react";
import { Reveal } from "@/components/reveal";

interface SectionIntroProps {
  eyebrow?: string;
  /** Small chapter number shown before the eyebrow, e.g. "01". */
  index?: string;
  title: ReactNode;
  lede?: ReactNode;
  align?: "left" | "center";
  level?: "h1" | "h2";
  tone?: "light" | "dark";
  /** Off for content that is already on screen at load. */
  reveal?: boolean;
  className?: string;
}

export function SectionIntro({
  eyebrow,
  index,
  title,
  lede,
  align = "left",
  level = "h2",
  tone = "light",
  reveal = true,
  className = "",
}: SectionIntroProps) {
  const Heading = level;
  const dark = tone === "dark";
  const alignment =
    align === "center" ? "text-center items-center" : "text-left items-start";
  const size = level === "h1" ? "text-display" : "text-headline";

  const parts = [
    eyebrow ? (
      <span
        key="eyebrow"
        className={`inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-eyebrow ${
          dark ? "text-sand" : "text-palestine-green"
        }`}
      >
        {index ? (
          <span
            className={`font-heading text-sm font-normal italic tracking-normal normal-case ${
              dark ? "text-on-forest-muted" : "text-berry"
            }`}
          >
            {index}
          </span>
        ) : null}
        <span aria-hidden="true" className="h-px w-8 bg-current opacity-50" />
        {eyebrow}
      </span>
    ) : null,
    <Heading
      key="title"
      className={`font-heading ${size} text-balance ${
        dark ? "text-on-forest" : "text-charcoal"
      }`}
    >
      {title}
    </Heading>,
    lede ? (
      <p
        key="lede"
        className={`max-w-narrow text-lg leading-relaxed text-pretty ${
          dark ? "text-on-forest-muted" : "text-warm-gray"
        }`}
      >
        {lede}
      </p>
    ) : null,
  ].filter(Boolean);

  return (
    <div className={`flex flex-col gap-5 ${alignment} ${className}`}>
      {reveal
        ? parts.map((part, i) => (
            <Reveal key={i} delay={i * 90}>
              {part}
            </Reveal>
          ))
        : parts}
    </div>
  );
}

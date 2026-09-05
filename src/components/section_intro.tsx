import type { ReactNode } from "react";

interface SectionIntroProps {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  align?: "left" | "center";
  level?: "h1" | "h2";
  className?: string;
}

export function SectionIntro({
  eyebrow,
  title,
  lede,
  align = "left",
  level = "h2",
  className = "",
}: SectionIntroProps) {
  const Heading = level;
  const alignment =
    align === "center" ? "text-center items-center" : "text-left items-start";
  const size =
    level === "h1"
      ? "text-4xl sm:text-5xl lg:text-6xl"
      : "text-3xl sm:text-4xl";

  return (
    <div className={`flex flex-col gap-4 ${alignment} ${className}`}>
      {eyebrow ? (
        <span className="inline-flex items-center gap-2.5 text-sm font-medium text-olive">
          <span aria-hidden="true" className="size-2 rotate-45 bg-olive-soft" />
          {eyebrow}
        </span>
      ) : null}
      <Heading
        className={`font-heading ${size} leading-[1.1] tracking-tight text-balance text-charcoal`}
      >
        {title}
      </Heading>
      {lede ? (
        <p className="max-w-narrow text-lg leading-relaxed text-warm-gray text-pretty">
          {lede}
        </p>
      ) : null}
    </div>
  );
}

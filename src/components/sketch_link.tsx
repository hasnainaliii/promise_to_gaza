import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

interface SketchLinkProps extends Omit<ComponentProps<typeof Link>, "className" | "children"> {
  children: ReactNode;
  className?: string;
  size?: "md" | "lg";
  seed?: number;
}

/**
 * Hand-drawn wobbly sketch outline button matching the "Drive 1" badge style
 * from our-work / drive_timeline.
 */
export function SketchLink({
  href,
  children,
  className = "",
  size = "lg",
  seed = 1,
  ...props
}: SketchLinkProps) {
  const a = 1 + (seed % 3) * 0.4;
  const b = 1.5 - (seed % 2) * 0.6;

  const sizeClasses =
    size === "lg"
      ? "min-h-12 px-6 py-3 text-base font-medium"
      : "min-h-10 px-4 py-2 text-sm font-medium";

  return (
    <Link
      href={href}
      className={`group relative inline-flex items-center justify-center text-charcoal transition-all duration-200 ease-soft hover:-translate-y-0.5 hover:text-olive-deep active:translate-y-0 active:scale-[0.98] ${sizeClasses} ${className}`}
      {...props}
    >
      {/* Hand-drawn wobbly sketched SVG border */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 size-full text-charcoal transition-all duration-200 ease-soft group-hover:text-olive-deep group-hover:scale-[1.01]"
        viewBox="0 0 120 40"
        preserveAspectRatio="none"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      >
        <path
          d={`M4 ${3 + a} C20 ${2 + b},100 ${2 + a},117 ${4 + b} C118 15,118 25,117 ${36 - a} C100 ${38 - b},20 ${38 + a},4 ${37 - b} C3 25,3 15,4 ${3 + a} Z`}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </Link>
  );
}

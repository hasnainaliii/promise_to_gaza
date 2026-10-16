import type { ReactNode } from "react";

/** Marks content that is a stand-in, so the skeleton never reads as real. */
export function PlaceholderNote({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`inline-flex items-start gap-2.5 rounded-soft border border-dashed border-clay bg-parchment-light px-4 py-2.5 text-sm leading-relaxed text-jet-muted ${className}`}
    >
      <span aria-hidden="true" className="mt-1.5 size-1.5 shrink-0 rounded-full bg-clay" />
      <span>{children}</span>
    </p>
  );
}

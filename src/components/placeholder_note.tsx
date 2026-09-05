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
      className={`inline-flex items-start gap-2.5 rounded-soft border border-dashed border-sand-deep bg-surface px-4 py-2.5 text-sm leading-relaxed text-warm-gray ${className}`}
    >
      <span aria-hidden="true" className="mt-1.5 size-2 shrink-0 rotate-45 bg-sand-deep" />
      <span>{children}</span>
    </p>
  );
}

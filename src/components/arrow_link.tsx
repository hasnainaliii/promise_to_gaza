import Link from "next/link";
import type { ReactNode } from "react";

/** Quiet inline link for "read more" style journeys between pages. */
export function ArrowLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2.5 font-semibold text-palestine-green transition-colors duration-300 hover:text-palestine-green-deep ${className}`}
    >
      <span className="relative after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-500 after:ease-soft group-hover:after:scale-x-100">
        {children}
      </span>
      <span
        aria-hidden="true"
        className="flex size-8 items-center justify-center rounded-full border border-current/25 transition-all duration-500 ease-soft group-hover:translate-x-1 group-hover:border-current group-hover:bg-palestine-green group-hover:text-paper"
      >
        <svg
          viewBox="0 0 24 24"
          className="size-3.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </span>
    </Link>
  );
}

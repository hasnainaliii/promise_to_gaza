import Link from "next/link";
import { Reveal } from "@/components/reveal";
import type { ReliefDrive } from "@/types/content";

/** Compact, linkable list of drives; each row jumps to its full entry on the
    Our Work page. */
export function DriveLedger({ drives }: { drives: ReliefDrive[] }) {
  return (
    <Reveal as="ol" delay={150} className="mt-10 border-t border-line">
      {drives.map((drive) => (
        <li key={drive.id}>
          <Link
            href={`/our-work#${drive.id}`}
            className="group flex items-center gap-4 border-b border-line py-4 transition-colors duration-300 ease-soft hover:bg-cream sm:gap-6 sm:px-3"
          >
            <span className="w-24 shrink-0 text-sm text-warm-gray sm:w-32">
              {drive.date}
            </span>
            <span className="flex-1 font-heading text-lg leading-snug text-charcoal transition-colors duration-300 group-hover:text-palestine-green">
              {drive.focus}
            </span>
            <span className="hidden text-xs font-medium text-warm-gray sm:inline">
              {drive.label}
            </span>
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="size-4 shrink-0 -translate-x-1 text-palestine-green opacity-0 transition-all duration-300 ease-soft group-hover:translate-x-0 group-hover:opacity-100"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </li>
      ))}
    </Reveal>
  );
}

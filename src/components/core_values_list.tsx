import type { ReactNode } from "react";
import { Reveal } from "@/components/reveal";
import type { CoreValueIcon } from "@/content/about";

const ICON_PATHS: Record<CoreValueIcon, ReactNode> = {
  heart: (
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  ),
  shield: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
  people: (
    <>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  ),
};

interface CoreValuesListProps {
  values: { title: string; description: string; icon: CoreValueIcon }[];
}

/** Editorial rows rather than cards: each value reads like a line in a
    manifesto, and leans in slightly on hover. */
export function CoreValuesList({ values }: CoreValuesListProps) {
  return (
    <ol className="border-t border-charcoal/15">
      {values.map((value, i) => (
        <Reveal
          as="li"
          key={value.title}
          delay={i * 120}
          className="group border-b border-charcoal/15"
        >
          <div className="grid gap-4 py-8 transition-transform duration-500 ease-soft sm:grid-cols-12 sm:items-center sm:gap-8 sm:py-10 sm:group-hover:translate-x-2">
            <span className="font-heading text-sm italic text-berry sm:col-span-1">
              0{i + 1}
            </span>
            <h3 className="font-heading text-headline text-charcoal transition-colors duration-500 group-hover:text-palestine-green sm:col-span-5">
              {value.title}
            </h3>
            <p className="text-lg leading-relaxed text-warm-gray sm:col-span-5">
              {value.description}
            </p>
            <span
              aria-hidden="true"
              className="hidden size-14 items-center justify-center justify-self-end rounded-full border border-charcoal/15 text-palestine-green transition-all duration-500 ease-soft group-hover:rotate-6 group-hover:border-palestine-green group-hover:bg-palestine-green group-hover:text-paper sm:col-span-1 sm:flex"
            >
              <svg
                viewBox="0 0 24 24"
                className="size-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {ICON_PATHS[value.icon]}
              </svg>
            </span>
          </div>
        </Reveal>
      ))}
    </ol>
  );
}

import type { ReactNode } from "react";
import { OliveBranch } from "@/components/olive_branch";
import { PlantDonateButton } from "@/components/plant_donate_button";
import { Reveal } from "@/components/reveal";
import { SketchLink } from "@/components/sketch_link";

interface ClosingInvitationProps {
  eyebrow: string;
  title: ReactNode;
  body: ReactNode;
  secondary: { href: string; label: string };
}

/** The calm "here is how to help" block that closes a page. */
export function ClosingInvitation({
  eyebrow,
  title,
  body,
  secondary,
}: ClosingInvitationProps) {
  return (
    <section className="mx-auto max-w-page px-5 py-section-lg sm:px-8">
      <Reveal className="relative isolate overflow-hidden rounded-blob bg-cream px-6 pb-12 pt-14 paper-grain sm:px-12 sm:pb-16 sm:pt-20 lg:px-16">
        <OliveBranch className="pointer-events-none absolute -right-6 -top-4 -z-10 hidden w-80 text-olive-soft sm:block" />
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 tatreez-band h-3 text-cream-deep" />

        <div className="grid items-end gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-eyebrow text-palestine-green">
              <span aria-hidden="true" className="h-px w-8 bg-current opacity-50" />
              {eyebrow}
            </span>
            <h2 className="mt-5 font-heading text-headline text-balance text-charcoal">
              {title}
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-warm-gray">
              {body}
            </p>
          </div>

          <div className="flex flex-col items-start gap-5 lg:col-span-5 lg:items-end">
            <div className="flex flex-wrap items-center gap-4 sm:gap-5">
              <PlantDonateButton href="/donate">Donate now</PlantDonateButton>
              <SketchLink href={secondary.href} size="lg">
                {secondary.label}
              </SketchLink>
            </div>
            <p className="text-sm text-warm-gray lg:text-right">
              Easypaisa, Sadapay, or any Pakistani bank via Raast.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

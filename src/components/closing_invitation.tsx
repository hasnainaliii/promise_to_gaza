import type { ReactNode } from "react";
import { ActionLink } from "@/components/action_button";
import { OliveBranch } from "@/components/olive_branch";
import { PlantDonateButton } from "@/components/plant_donate_button";
import { Reveal } from "@/components/reveal";
import { DONATION_ACCOUNT } from "@/content/site";

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
    <section className="relative isolate overflow-hidden border-t border-rule">
      <OliveBranch className="pointer-events-none absolute -right-8 top-10 -z-10 hidden w-md text-accent/30 sm:block" />
      <div className="mx-auto max-w-page px-5 py-section-lg sm:px-8 lg:py-section-xl">
        <Reveal className="grid items-end gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-eyebrow text-accent">
              <span aria-hidden="true" className="h-px w-8 bg-current opacity-50" />
              {eyebrow}
            </span>
            <h2 className="mt-5 font-heading text-headline text-balance text-ink">
              {title}
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-muted">
              {body}
            </p>
          </div>

          <div className="flex flex-col items-start gap-5 lg:col-span-5 lg:items-end">
            <div className="flex flex-wrap items-center gap-4 sm:gap-5">
              <PlantDonateButton />
              <ActionLink href={secondary.href} variant="quiet" size="lg">
                {secondary.label}
              </ActionLink>
            </div>
            <p className="text-sm text-ink-muted lg:text-right">
              {DONATION_ACCOUNT.providers.join(", ")}, or any Pakistani bank via Raast.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

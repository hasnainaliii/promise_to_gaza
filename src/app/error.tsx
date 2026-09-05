"use client";

import { ActionButton, ActionLink } from "@/components/action_button";

export default function ErrorBoundary({ reset }: { reset: () => void }) {
  return (
    <section className="mx-auto flex max-w-narrow flex-col items-start gap-6 px-5 py-section-lg sm:px-8">
      <h1 className="font-heading text-4xl leading-tight tracking-tight text-charcoal sm:text-5xl">
        Something went wrong at our end.
      </h1>
      <p className="text-lg leading-relaxed text-warm-gray">
        This information did not load. It is a problem on our side, not
        something you did. Trying again often clears it.
      </p>
      <div className="flex flex-col gap-3 sm:flex-row">
        <ActionButton variant="secondary" size="lg" onClick={reset}>
          Try loading it again
        </ActionButton>
        <ActionLink href="/contact" variant="quiet" size="lg">
          Let us know it happened
        </ActionLink>
      </div>
    </section>
  );
}

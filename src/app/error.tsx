"use client";

import { ActionButton, ActionLink } from "@/components/action_button";

// retry re-fetches the segment; reset would only re-render the same failed
// Server Component payload.
export default function ErrorBoundary({ retry }: { retry: () => void }) {
  return (
    <section className="mx-auto flex max-w-narrow flex-col items-start gap-6 px-5 py-section-lg sm:px-8">
      <h1 className="font-heading text-4xl leading-tight tracking-tight text-ink sm:text-5xl">
        Something went wrong at our end.
      </h1>
      <p className="text-lg leading-relaxed text-ink-muted">
        This information did not load. It is a problem on our side, not
        something you did. Trying again often clears it.
      </p>
      <div className="flex flex-col gap-3 sm:flex-row">
        <ActionButton variant="secondary" size="lg" onClick={() => retry()}>
          Try loading it again
        </ActionButton>
        <ActionLink href="/contact" variant="quiet" size="lg">
          Let us know on WhatsApp
        </ActionLink>
      </div>
    </section>
  );
}

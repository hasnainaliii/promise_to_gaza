import { ActionLink } from "@/components/action_button";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-narrow flex-col items-start gap-6 px-5 py-section-lg sm:px-8">
      <h1 className="font-heading text-4xl leading-tight tracking-tight text-charcoal sm:text-5xl">
        We could not find that page.
      </h1>
      <p className="text-lg leading-relaxed text-warm-gray">
        The link may be out of date, or the page may not have been published
        yet. Nothing has gone wrong on your end.
      </p>
      <div className="flex flex-col gap-3 sm:flex-row">
        <ActionLink href="/" variant="secondary" size="lg">
          Back to the home page
        </ActionLink>
        <ActionLink href="/contact" variant="quiet" size="lg">
          Tell us about the broken link
        </ActionLink>
      </div>
    </section>
  );
}

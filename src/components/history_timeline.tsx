import { Reveal } from "@/components/reveal";
import type { HistoryStep } from "@/content/about";

function withHighlight({ body, highlight }: HistoryStep) {
  if (!highlight || !body.includes(highlight)) return body;
  const [before, after] = body.split(highlight);
  return (
    <>
      {before}
      <strong className="font-semibold text-charcoal">{highlight}</strong>
      {after}
    </>
  );
}

/** Vertical on phones, horizontal from laptop up. The connecting line draws
    itself in once the timeline scrolls into view. */
export function HistoryTimeline({ steps }: { steps: HistoryStep[] }) {
  return (
    <Reveal as="ol" effect="fade" className="group relative grid gap-12 lg:grid-cols-4 lg:gap-8">
      <span
        aria-hidden="true"
        className="absolute bottom-6 left-6 top-6 w-px origin-top scale-y-0 bg-palestine-green/30 transition-transform delay-300 duration-1600 ease-soft group-data-inview:scale-y-100 lg:hidden"
      />
      <span
        aria-hidden="true"
        className="absolute left-6 right-0 top-6 hidden h-px origin-left scale-x-0 bg-palestine-green/30 transition-transform delay-300 duration-1600 ease-soft group-data-inview:scale-x-100 lg:block"
      />

      {steps.map((step, i) => (
        <Reveal
          as="li"
          key={step.title}
          delay={200 + i * 180}
          className="relative flex gap-5 lg:block"
        >
          <span
            className={`relative flex size-12 shrink-0 items-center justify-center rounded-full font-heading text-lg ${
              step.current
                ? "bg-palestine-green text-paper animate-pulse-dot"
                : "border border-palestine-green/30 bg-paper text-palestine-green"
            }`}
          >
            {i + 1}
          </span>
          <div className="pt-2.5 lg:pr-4 lg:pt-8">
            <span
              className={`text-xs font-semibold uppercase tracking-eyebrow ${
                step.current ? "text-berry" : "text-palestine-green"
              }`}
            >
              {step.marker}
            </span>
            <h3 className="mt-3 font-heading text-2xl leading-tight tracking-tight text-charcoal">
              {step.title}
            </h3>
            <p className="mt-3 leading-relaxed text-warm-gray">
              {withHighlight(step)}
            </p>
          </div>
        </Reveal>
      ))}
    </Reveal>
  );
}

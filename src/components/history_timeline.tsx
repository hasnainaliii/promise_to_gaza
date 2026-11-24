import { Reveal } from "@/components/reveal";
import type { HistoryStep } from "@/content/about";

function withHighlight({ body, highlight }: HistoryStep) {
  if (!highlight || !body.includes(highlight)) return body;
  const [before, after] = body.split(highlight);
  return (
    <>
      {before}
      <strong className="font-semibold text-ink">{highlight}</strong>
      {after}
    </>
  );
}

/** Vertical on phones, horizontal from laptop up. */
export function HistoryTimeline({ steps }: { steps: HistoryStep[] }) {
  return (
    <Reveal as="ol" effect="fade" className="relative grid gap-12 lg:grid-cols-4 lg:gap-8">
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
                ? "bg-action text-on-action animate-pulse-dot"
                : "border border-accent/30 bg-raised text-accent"
            }`}
          >
            {i + 1}
          </span>
          <div className="pt-2.5 lg:pr-4 lg:pt-8">
            <span
              className={`text-xs font-semibold uppercase tracking-eyebrow ${
                step.current ? "text-accent-soft" : "text-accent"
              }`}
            >
              {step.marker}
            </span>
            <h3 className="mt-3 font-heading text-2xl leading-tight tracking-tight text-ink">
              {step.title}
            </h3>
            <p className="mt-3 leading-relaxed text-ink-muted">
              {withHighlight(step)}
            </p>
          </div>
        </Reveal>
      ))}
    </Reveal>
  );
}

import { Reveal } from "@/components/reveal";

const RING_DELAYS = [
  "animate-delay-900",
  "animate-delay-2400",
  "animate-delay-3900",
  "animate-delay-5400",
];

/** "Small drops, infinite ocean": one drop falls and keeps rippling outward
    behind the weekly amount. Purely decorative. */
export function RipplePool({ amount, unit }: { amount: string; unit: string }) {
  return (
    <Reveal
      effect="fade"
      className="relative mx-auto flex aspect-square w-full max-w-md items-center justify-center"
    >
      <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center">
        <span className="absolute inset-1/8 rounded-full bg-forest-soft" />
        {RING_DELAYS.map((delay) => (
          <span
            key={delay}
            data-loop
            className={`absolute inset-0 rounded-full border border-sand/40 opacity-0 animate-ripple ${delay}`}
          />
        ))}
        <span data-loop className="absolute inset-0 opacity-0 animate-drop-fall">
          <svg
            viewBox="0 0 24 32"
            className="absolute top-1/16 left-1/2 size-7 -translate-x-1/2 fill-sand"
          >
            <path d="M12 1C12 1 2 13.5 2 20a10 10 0 0 0 20 0C22 13.5 12 1 12 1Z" />
          </svg>
        </span>
      </div>

      <p className="relative flex flex-col items-center text-center">
        <span className="font-heading text-mega text-on-forest">{amount}</span>
        <span className="mt-3 text-xs font-semibold uppercase tracking-eyebrow text-sand">
          {unit}
        </span>
      </p>
    </Reveal>
  );
}

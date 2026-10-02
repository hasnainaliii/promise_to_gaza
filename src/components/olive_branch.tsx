import { Reveal } from "@/components/reveal";

const LEAF = "M0 0C-7-7-7.5-17 0-26C7.5-17 7-7 0 0Z";

/* [x, y, rotation] for each leaf along the stem, alternating sides. */
const LEAVES: [number, number, number][] = [
  [34, 101, -28],
  [52, 93, 118],
  [72, 82, -18],
  [92, 70, 128],
  [112, 58, -8],
  [134, 45, 136],
  [156, 33, 4],
  [178, 22, 140],
  [206, 9, 64],
];

/** Line-drawn olive branch that sketches itself in when revealed. */
export function OliveBranch({ className = "" }: { className?: string }) {
  return (
    <Reveal as="span" effect="draw" className={`block ${className}`}>
      <svg
        viewBox="0 0 220 120"
        aria-hidden="true"
        className="size-full"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path data-draw pathLength={1} d="M6 114C48 98 92 76 128 50S192 14 212 6" />
        {LEAVES.map(([x, y, r]) => (
          <path
            key={`${x}-${y}`}
            data-draw
            pathLength={1}
            d={LEAF}
            transform={`translate(${x} ${y}) rotate(${r})`}
          />
        ))}
      </svg>
    </Reveal>
  );
}

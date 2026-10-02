import Image from "next/image";

/** Round stamp with the heart logo and a slowly turning ring of text, like a
    wax seal on a letter of promise. Position it from the caller. */
export function SealBadge({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`size-28 rounded-full bg-paper shadow-lift sm:size-32 ${className}`}
    >
      <svg
        viewBox="0 0 120 120"
        className="absolute inset-0 size-full animate-spin-slow text-charcoal"
      >
        <defs>
          <path
            id="seal-ring"
            d="M60 60m-45 0a45 45 0 1 1 90 0a45 45 0 1 1-90 0"
          />
        </defs>
        <text
          className="fill-current font-sans font-semibold uppercase"
          fontSize="8.5"
        >
          <textPath href="#seal-ring" textLength="279" lengthAdjust="spacing">
            Promise to Gaza · A project of My Network ·
          </textPath>
        </text>
      </svg>
      <Image
        src="/images/Logos/Promise to Gaza Transparent Logo.png"
        alt=""
        width={64}
        height={64}
        className="absolute inset-1/4 size-1/2 object-contain"
      />
    </div>
  );
}

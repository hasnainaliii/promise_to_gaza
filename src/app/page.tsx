import Link from "next/link";
import Image from "next/image";
import { PlantDonateButton } from "@/components/plant_donate_button";
import { SketchLink } from "@/components/sketch_link";
import { HeroSlideshow } from "@/components/hero_slideshow";
import { SectionIntro } from "@/components/section_intro";


export default function HomePage() {
  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] overflow-hidden -mt-24 bg-neutral-900 lg:min-h-screen">
        {/* Rotating smooth background photographs */}
        <HeroSlideshow />

        {/* Ambient overlay — subtle center wash for text contrast and gentle bottom fade */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-16 inset-x-0 bottom-0 z-10"
          style={{
            background:
              "radial-gradient(ellipse 80% 65% at 50% 50%, rgba(18, 22, 19, 0.5) 0%, rgba(18, 22, 19, 0.25) 60%, transparent 100%), linear-gradient(to top, var(--color-paper) 0%, rgba(255, 255, 255, 0.5) 3%, transparent 7%)",
          }}
        />

        {/* Centred hero content */}
        <div className="relative z-20 flex min-h-[90vh] flex-col items-center justify-end px-5 pb-20 pt-28 text-center sm:px-8 sm:pt-32 lg:min-h-screen lg:justify-center lg:pb-24">
          <h1 className="mx-auto max-w-3xl font-heading text-4xl leading-[1.08] tracking-tight text-balance text-white drop-shadow-[0_2px_16px_rgba(0,0,0,0.65)] sm:text-5xl md:text-6xl lg:text-7xl">
            Keeping a{" "}
            <span className="relative whitespace-nowrap">
              promise
              <svg
                viewBox="0 0 200 12"
                preserveAspectRatio="none"
                aria-hidden="true"
                className="absolute -bottom-1 left-0 h-2.5 w-full text-berry drop-shadow-sm"
                fill="none"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
              >
                <path d="M3 8C40 3 70 10 104 6c36-4 64 3 93-2" />
              </svg>
            </span>{" "}
            to families in Gaza.
          </h1>

          <div className="mt-28 sm:mt-36 lg:mt-44 flex flex-col items-center justify-center gap-4 sm:gap-5 sm:flex-row">
            <PlantDonateButton href="/donate" className="shrink-0">
              Donate now
            </PlantDonateButton>
            <Link
              href="/our-work"
              className="shrink-0 inline-flex min-h-[48px] items-center justify-center rounded-lg border border-neutral-200/90 bg-white px-7 py-3 text-base font-semibold text-charcoal shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:border-neutral-300 hover:shadow-md active:translate-y-0 active:scale-[0.99]"
            >
              Learn about our work
            </Link>
          </div>
        </div>

        {/* Organic wave transition to next section — decreased height */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg
            viewBox="0 0 1440 80"
            preserveAspectRatio="none"
            aria-hidden="true"
            className="relative block h-7 w-full sm:h-9 lg:h-11"
            fill="var(--color-paper)"
          >
            <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z" />
          </svg>
        </div>
      </section>

      {/* ── Who We Are ───────────────────────────────────────────── */}
      <section className="bg-paper overflow-hidden">
        <div className="mx-auto max-w-page px-5 pt-section pb-0 sm:px-8">

          {/* Top label */}
          <span className="inline-flex items-center text-xs sm:text-sm font-semibold tracking-wider uppercase text-olive">
            Who we are
          </span>

          {/* Giant headline */}
          <h2 className="mt-5 font-heading text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-balance text-charcoal max-w-3xl">
            Filling the gap so{" "}
            <span className="relative inline-block">
              everyone
              {/* hand-drawn underline */}
              <svg
                viewBox="0 0 220 10"
                preserveAspectRatio="none"
                aria-hidden="true"
                className="absolute -bottom-1 left-0 h-2 w-full text-olive"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              >
                <path d="M2 7 C 40 2, 100 9, 160 5 C 185 3, 205 7, 218 5" />
              </svg>
            </span>{" "}
            can play their part.
          </h2>

          {/* Two-column body */}
          <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16 pb-section">

            {/* Left col — narrative */}
            <div className="flex flex-col gap-6">
              <p className="text-lg leading-relaxed text-warm-gray">
                <strong className="text-charcoal font-semibold">Promise to Gaza</strong> is a project initiated by{" "}
                <strong className="text-charcoal font-semibold">MyNetwork</strong>, an Islamic movement. Our goal is to fill the gap, especially for people who cannot donate financially, or who feel they simply cannot do anything.
              </p>
              <p className="text-lg leading-relaxed text-warm-gray">
                We provide a way for every individual to play their part, turning moral concern into tangible action and solidarity for families in Gaza.
              </p>

              {/* Pull quote */}
              <blockquote className="mt-2 border-l-[3px] border-olive pl-5">
                <p className="font-heading text-xl leading-snug tracking-tight text-charcoal">
                  &ldquo;Moral concern is not enough. We turn it into something real.&rdquo;
                </p>
              </blockquote>
            </div>

            {/* Right col — Our vision card */}
            <div className="flex flex-col gap-6">
              {/* Section label inside right col */}
              <span className="inline-flex items-center text-xs font-bold tracking-widest uppercase text-palestine-green">
                Our vision
              </span>

              <h3 className="font-heading text-2xl sm:text-3xl leading-tight tracking-tight text-palestine-green">
                Why focus on Gaza?
              </h3>

              <p className="leading-relaxed text-warm-gray">
                Our hearts stand with the oppressed everywhere. Gaza today represents an urgent, visible humanitarian crisis unfolding before the world.
              </p>
              <p className="leading-relaxed text-warm-gray">
                Gaza is a global headline, and in our initial stage we need a place to stand and build a strong foundation. Starting with Gaza allows us to focus our relief efforts, establish trust, and turn global attention into direct impact. From here, our vision is to expand so we can stand with every oppressed person throughout the world.
              </p>

              {/* Three small feature rows */}
              <ul className="mt-2 flex flex-col gap-5">
                <li className="flex items-start gap-3.5">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-palestine-green-tint text-palestine-green"
                  >
                    <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" y1="12" x2="22" y2="12" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-semibold text-charcoal leading-snug">A Global Headline</p>
                    <p className="mt-0.5 text-sm leading-relaxed text-warm-gray">We channel global visibility into urgent, accountable relief.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3.5">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-palestine-green-tint text-palestine-green"
                  >
                    <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-semibold text-charcoal leading-snug">A Place to Stand</p>
                    <p className="mt-0.5 text-sm leading-relaxed text-warm-gray">A dedicated ground to mobilize, prove transparency, and build trust.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3.5">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-palestine-green-tint text-palestine-green"
                  >
                    <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m15 3 6 6-6 6" />
                      <path d="M21 9H9a6 6 0 0 0 0 12h3" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-semibold text-charcoal leading-snug">Expanding to All Oppressed</p>
                    <p className="mt-0.5 text-sm leading-relaxed text-warm-gray">Starting here, our vision reaches every oppressed community worldwide.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Full-bleed ruled separator */}
          <div aria-hidden="true" className="border-t border-line/60" />
        </div>
      </section>

      {/* ── Power of 100 PKR ─────────────────────────────────── */}
      <section className="bg-surface">
        <div className="mx-auto grid max-w-page items-center gap-10 px-5 py-section sm:px-8 lg:grid-cols-[1fr_1fr]">
          <div className="flex flex-col gap-5">
            <SectionIntro
              eyebrow="How we give"
              title="The Power of 100 PKR"
              lede="Small Drops. Infinite Ocean."
            />
            <p className="leading-relaxed text-warm-gray">
              100 Rupees is just the cost of a daily cup of tea. Individually,
              it feels small. Collectively, thousands of students contributing
              100&nbsp;PKR every week create an unbroken pipeline of relief for
              families in need.
            </p>
            <div className="pt-1">
              <SketchLink href="/donate" size="lg">
                Give 100 PKR this week
              </SketchLink>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative flex flex-col items-center gap-4 rounded-card bg-paper p-10 shadow-soft">
              <span className="font-heading text-7xl leading-none tracking-tight text-olive sm:text-8xl">
                100
              </span>
              <span className="font-sans text-sm font-medium uppercase tracking-widest text-warm-gray">
                PKR per week
              </span>
              <div
                aria-hidden="true"
                className="absolute -right-5 -top-5 size-16 sm:size-20 overflow-hidden rounded-full shadow-soft ring-4 ring-paper"
              >
                <Image
                  src="/images/Downloaded/palestine-metallic-flag-textured-flag-grunge-flag.jpg"
                  alt=""
                  fill
                  className="object-cover object-center"
                  sizes="80px"
                />
              </div>
              <div
                aria-hidden="true"
                className="absolute -bottom-4 -left-4 size-12 sm:size-14 overflow-hidden rounded-full shadow-soft ring-4 ring-paper"
              >
                <Image
                  src="/images/Downloaded/palestine-metallic-flag-textured-flag-grunge-flag.jpg"
                  alt=""
                  fill
                  className="object-cover object-center"
                  sizes="60px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-page px-5 py-section sm:px-8">
        <div className="relative overflow-hidden rounded-card bg-olive-tint px-6 py-12 sm:px-12">
          {/* Right side textured flag art — extends further inward to the left */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-0 bottom-0 w-full sm:w-3/5 md:w-[50%] lg:w-[45%]"
            style={{
              maskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.5) 20%, black 100%)",
              WebkitMaskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.5) 20%, black 100%)",
            }}
          >
            <Image
              src="/images/Downloaded/palestine-metallic-flag-textured-flag-grunge-flag.jpg"
              alt=""
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 45vw"
            />
          </div>

          <div className="relative z-10 flex max-w-narrow flex-col items-start gap-5">
            <h2 className="font-heading text-3xl leading-tight tracking-tight text-balance text-charcoal sm:text-4xl">
              Give once, give monthly, or simply stay in touch.
            </h2>
            <p className="leading-relaxed text-olive-deep">
              Monthly commitments are the most useful, because
              <br />
              they let work be planned rather than improvised.
            </p>
            <div className="pt-8 sm:pt-12 flex flex-col items-center gap-4 sm:gap-5 sm:flex-row">
              <PlantDonateButton href="/donate">
                Donate now
              </PlantDonateButton>
              <SketchLink href="/contact" size="lg">
                Get in touch
              </SketchLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

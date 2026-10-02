import Link from "next/link";
import { ArrowLink } from "@/components/arrow_link";
import { ClosingInvitation } from "@/components/closing_invitation";
import { DriveLedger } from "@/components/drive_ledger";
import { FramedPhoto } from "@/components/framed_photo";
import { HandUnderline } from "@/components/hand_underline";
import { HeroSlideshow } from "@/components/hero_slideshow";
import { PlantDonateButton } from "@/components/plant_donate_button";
import { Reveal } from "@/components/reveal";
import { RipplePool } from "@/components/ripple_pool";
import { SectionIntro } from "@/components/section_intro";
import { SketchLink } from "@/components/sketch_link";
import { RELIEF_DRIVES } from "@/content/relief_drives";

const ICON_PROPS = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  className: "size-5",
  "aria-hidden": true,
} as const;

const VISION_PILLARS = [
  {
    title: "A global headline",
    text: "We channel global visibility into urgent, accountable relief.",
    icon: (
      <svg {...ICON_PROPS}>
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    title: "A place to stand",
    text: "A dedicated ground to mobilise, prove transparency, and build trust.",
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    title: "Expanding to all oppressed",
    text: "Starting here, our vision reaches every oppressed community worldwide.",
    icon: (
      <svg {...ICON_PROPS}>
        <path d="m15 3 6 6-6 6" />
        <path d="M21 9H9a6 6 0 0 0 0 12h3" />
      </svg>
    ),
  },
];

const FIELD_PHOTOS = [
  {
    src: "/images/ourwork/water-drive-tanker-distribution-1.png",
    alt: "A smiling boy holds up the Promise to Gaza emblem beside a water tanker",
  },
  {
    src: "/images/ourwork/water-drive-tanker-distribution-3.png",
    alt: "A boy holds the Promise to Gaza emblem while water containers are filled",
  },
];

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

      {/* ── 01 Who we are ───────────────────────────────────────── */}
      <section>
        <div className="mx-auto grid max-w-page items-center gap-16 px-5 pb-section-lg pt-section sm:px-8 lg:grid-cols-12 lg:gap-10 lg:pt-section-lg">
          <div className="lg:col-span-6">
            <SectionIntro
              index="01"
              eyebrow="Who we are"
              title={
                <>
                  Filling the gap so{" "}
                  <HandUnderline colorClass="text-palestine-green">
                    everyone
                  </HandUnderline>{" "}
                  can play their part.
                </>
              }
            />
            <Reveal
              delay={200}
              className="mt-8 flex flex-col gap-5 text-lg leading-relaxed text-warm-gray"
            >
              <p>
                <strong className="font-semibold text-charcoal">Promise to Gaza</strong>{" "}
                is a project initiated by{" "}
                <strong className="font-semibold text-charcoal">MyNetwork</strong>,
                an Islamic movement. Our goal is to fill the gap, especially for
                people who cannot donate financially, or who feel they simply
                cannot do anything.
              </p>
              <p>
                We provide a way for every individual to play their part,
                turning moral concern into tangible action and solidarity for
                families in Gaza.
              </p>
            </Reveal>
            <Reveal delay={300} className="mt-10">
              <ArrowLink href="/about">Read our story</ArrowLink>
            </Reveal>
          </div>

          <div className="relative lg:col-span-5 lg:col-start-8">
            <FramedPhoto
              src="/images/ourwork/ourwork-hero.png"
              alt="A girl in Gaza holds a Promise to Gaza sign in front of a clean water tanker"
              sizes="(min-width: 1024px) 34vw, (min-width: 640px) 28rem, 90vw"
              crop="object-[46%_50%]"
              className="mx-auto w-full max-w-md"
            />
            <Reveal
              delay={450}
              className="relative z-10 -mt-14 ml-auto max-w-xs rounded-card bg-paper p-6 shadow-lift sm:mr-6 lg:absolute lg:-bottom-10 lg:-left-24 lg:mr-0 lg:mt-0"
            >
              <span aria-hidden="true" className="block h-8 font-heading text-6xl leading-none text-berry">
                &ldquo;
              </span>
              <p className="font-heading text-xl leading-snug text-charcoal">
                Moral concern is not enough. We turn it into something real.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 02 Why Gaza ─────────────────────────────────────────── */}
      <section className="bg-cream paper-grain">
        <div className="mx-auto max-w-page px-5 py-section-lg sm:px-8">
          <div className="grid gap-10 lg:grid-cols-12">
            <SectionIntro
              className="lg:col-span-5"
              index="02"
              eyebrow="Our vision"
              title="Why focus on Gaza?"
            />
            <Reveal
              delay={150}
              className="flex flex-col gap-6 lg:col-span-6 lg:col-start-7 lg:pt-10"
            >
              <p className="font-heading text-title text-charcoal">
                Our hearts stand with the oppressed everywhere. Gaza today
                represents an urgent, visible humanitarian crisis unfolding
                before the world.
              </p>
              <p className="text-lg leading-relaxed text-warm-gray">
                Gaza is a global headline, and in our initial stage we need a
                place to stand and build a strong foundation. Starting with Gaza
                allows us to focus our relief efforts, establish trust, and turn
                global attention into direct impact. From here, our vision is to
                expand so we can stand with every oppressed person throughout
                the world.
              </p>
            </Reveal>
          </div>

          <ol className="mt-16 grid gap-10 sm:grid-cols-3 sm:gap-8 lg:mt-20">
            {VISION_PILLARS.map((pillar, i) => (
              <Reveal
                as="li"
                key={pillar.title}
                delay={i * 120}
                className="group border-t border-charcoal/15 pt-6"
              >
                <div className="flex items-center justify-between">
                  <span className="flex size-11 items-center justify-center rounded-full bg-paper text-palestine-green shadow-soft transition-colors duration-500 ease-soft group-hover:bg-palestine-green group-hover:text-paper">
                    {pillar.icon}
                  </span>
                  <span className="font-heading text-sm italic text-warm-gray-soft">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-6 font-heading text-2xl tracking-tight text-charcoal">
                  {pillar.title}
                </h3>
                <p className="mt-2 leading-relaxed text-warm-gray">{pillar.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ── 03 Where support goes ───────────────────────────────── */}
      <section>
        <div className="mx-auto grid max-w-page gap-16 px-5 py-section-lg sm:px-8 lg:grid-cols-12 lg:gap-10">
          <div className="order-last lg:order-first lg:col-span-5">
            <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:sticky lg:top-32">
              {FIELD_PHOTOS.map((photo, i) => (
                <FramedPhoto
                  key={photo.src}
                  src={photo.src}
                  alt={photo.alt}
                  sizes="(min-width: 1024px) 15vw, 45vw"
                  crop="object-[50%_35%]"
                  delay={i * 180}
                  className={i === 1 ? "mt-16" : undefined}
                />
              ))}
              <Reveal delay={300} className="col-span-2 flex items-center gap-3 text-sm text-warm-gray">
                <span aria-hidden="true" className="size-2 shrink-0 rounded-full bg-palestine-green animate-pulse-dot" />
                Field photos from our clean water drives in Gaza.
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <SectionIntro
              index="03"
              eyebrow="Where support goes"
              title="Nine relief drives, documented on the ground."
              lede="From cooked meals in August 2025 to clean water tankers in September 2026, this is where support has gone so far."
            />
            <DriveLedger drives={RELIEF_DRIVES} />
            <Reveal delay={200} className="mt-10">
              <ArrowLink href="/our-work">See every drive in detail</ArrowLink>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 04 The power of 100 PKR ─────────────────────────────── */}
      <section className="relative isolate overflow-hidden bg-forest">
        <div className="mx-auto grid max-w-page items-center gap-14 px-5 py-section-lg sm:px-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <SectionIntro
              tone="dark"
              index="04"
              eyebrow="The power of 100 PKR"
              title={
                <>
                  Small drops.
                  <br />
                  <em className="text-sand">Infinite ocean.</em>
                </>
              }
              lede="100 Rupees is just the cost of a daily cup of tea. Individually, it feels small. Collectively, thousands of students contributing 100 PKR every week create an unbroken pipeline of relief for families in need."
            />
            <Reveal delay={300} className="mt-10">
              <SketchLink href="/donate" tone="light">
                Give 100 PKR this week
              </SketchLink>
            </Reveal>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <RipplePool amount="100" unit="PKR · every week" />
          </div>
        </div>
      </section>

      <ClosingInvitation
        eyebrow="Ways to help"
        title="Give once, give monthly, or simply stay in touch."
        body="Monthly commitments are the most useful, because they let work be planned rather than improvised."
        secondary={{ href: "/contact", label: "Get in touch" }}
      />
    </>
  );
}

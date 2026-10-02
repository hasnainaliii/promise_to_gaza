import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SectionIntro } from "@/components/section_intro";

export const metadata: Metadata = {
  title: "Who We Are — Promise to Gaza",
  description:
    "Learn about Promise to Gaza — our history, mission, vision, purpose, core values, and the deeper truth behind why we do what we do.",
};

const CORE_VALUES = [
  {
    number: "01",
    title: "Compassion",
    description:
      "Standing with people who are suffering and responding to their needs with sincerity and care.",
    icon: (
      <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Responsibility",
    description:
      "Recognising our responsibility towards the Ummah and taking meaningful action instead of remaining passive.",
    icon: (
      <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Collective Action",
    description:
      "Believing that lasting impact comes when people come together, contribute what they can, and support one another.",
    icon: (
      <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

const TONE_ATTRIBUTES = [
  {
    label: "Compassionate & Purposeful",
    description: "Every word carries weight and intent, driven by genuine care.",
  },
  {
    label: "Empathetic & Resilient",
    description: "We feel deeply, yet we stand firm in our resolve to act.",
  },
  {
    label: "Warm, Sincere & Urgent",
    description: "We speak from the heart with a sense of pressing responsibility.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Immersive Full-Bleed Hero Image ──────────────────────── */}
      <section className="relative min-h-[75vh] sm:min-h-[85vh] lg:min-h-screen overflow-hidden -mt-24 bg-neutral-900">
        <div
          className="absolute -top-16 inset-x-0 bottom-0 overflow-hidden pointer-events-none bg-neutral-900"
          aria-hidden="true"
        >
          <Image
            src="/images/about/mynetwork-water-tanker-drive-gaza.jpeg"
            alt="Young Palestinian boy holding My Network sign in front of clean water tanker relief drive in Gaza"
            fill
            priority
            sizes="100vw"
            className="object-contain object-center"
          />
        </div>

        {/* Soft bottom fade */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-24 z-10 bg-gradient-to-t from-[var(--color-paper)] to-transparent opacity-80"
        />

        {/* Organic wave transition */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20">
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

      {/* ── 1. Who We Are ────────────────────────────────────────── */}
      <section className="mx-auto max-w-page px-5 py-section sm:px-8">
        <div className="max-w-narrow">
          <SectionIntro
            level="h1"
            eyebrow="Promise to Gaza"
            title="Who We Are"
          />
          <p className="mt-8 text-lg leading-relaxed text-warm-gray">
            Promise to Gaza is a project initiated by{" "}
            <strong className="text-charcoal font-semibold">My Network</strong>,
            a community working towards the revival of Islam through different
            initiatives. In response to the ongoing crisis in Gaza, we are
            working to provide immediate humanitarian relief to those in need.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-warm-gray">
            At the same time, we see this effort as part of a broader,
            long-term journey towards the revival and strengthening of the
            Ummah.
          </p>
        </div>
      </section>

      <div aria-hidden="true" className="mx-auto max-w-page border-t border-line/60" />

      {/* ── 2. History ───────────────────────────────────────────── */}
      <section className="bg-surface">
        <div className="mx-auto max-w-page px-5 py-section sm:px-8">
          <SectionIntro
            eyebrow="Our Journey"
            title="History"
            lede="From a single department to a multi-university movement."
          />

          {/* Timeline */}
          <div className="mt-12 relative">
            {/* Vertical line */}
            <div className="absolute left-[18px] sm:left-[22px] top-0 bottom-0 w-px bg-line/80" aria-hidden="true" />

            <div className="flex flex-col gap-0">
              {/* Origin */}
              <div className="relative flex gap-6 sm:gap-8 pb-10">
                <div className="relative z-10 flex size-[38px] sm:size-[46px] shrink-0 items-center justify-center rounded-full border-2 border-olive bg-paper shadow-xs">
                  <span className="font-heading text-sm sm:text-base font-bold text-olive">1</span>
                </div>
                <div className="pt-1.5 sm:pt-2">
                  <span className="font-sans text-xs font-bold uppercase tracking-wider text-olive">
                    6 August 2025
                  </span>
                  <h3 className="mt-2 font-heading text-xl sm:text-2xl tracking-tight text-charcoal">
                    The Spark — UET Taxila
                  </h3>
                  <p className="mt-3 leading-relaxed text-warm-gray max-w-xl">
                    Promise to Gaza began as a student-led campaign at UET Taxila,
                    initially launched within the Department of Computer Science
                    under the name <strong className="text-charcoal">UET Taxila Donation Drive</strong>.
                  </p>
                </div>
              </div>

              {/* Campus expansion */}
              <div className="relative flex gap-6 sm:gap-8 pb-10">
                <div className="relative z-10 flex size-[38px] sm:size-[46px] shrink-0 items-center justify-center rounded-full border-2 border-olive bg-paper shadow-xs">
                  <span className="font-heading text-sm sm:text-base font-bold text-olive">2</span>
                </div>
                <div className="pt-1.5 sm:pt-2">
                  <h3 className="font-heading text-xl sm:text-2xl tracking-tight text-charcoal">
                    Campus-Wide Expansion
                  </h3>
                  <p className="mt-3 leading-relaxed text-warm-gray max-w-xl">
                    Following its initial success, the campaign expanded beyond
                    the Computer Science Department to cover departments across
                    the entire UET Taxila campus, through which donations were
                    collected from the university community on multiple occasions.
                  </p>
                </div>
              </div>

              {/* Formal project */}
              <div className="relative flex gap-6 sm:gap-8 pb-10">
                <div className="relative z-10 flex size-[38px] sm:size-[46px] shrink-0 items-center justify-center rounded-full border-2 border-olive bg-paper shadow-xs">
                  <span className="font-heading text-sm sm:text-base font-bold text-olive">3</span>
                </div>
                <div className="pt-1.5 sm:pt-2">
                  <h3 className="font-heading text-xl sm:text-2xl tracking-tight text-charcoal">
                    A Formal Project of My Network
                  </h3>
                  <p className="mt-3 leading-relaxed text-warm-gray max-w-xl">
                    As the initiative grew beyond its original campus-level
                    efforts, it was later developed into a formal project of
                    My Network under the name{" "}
                    <strong className="text-charcoal">Promise to Gaza (PTG)</strong>.
                  </p>
                </div>
              </div>

              {/* Multi-university */}
              <div className="relative flex gap-6 sm:gap-8">
                <div className="relative z-10 flex size-[38px] sm:size-[46px] shrink-0 items-center justify-center rounded-full border-2 border-olive bg-olive shadow-xs">
                  <span className="font-heading text-sm sm:text-base font-bold text-paper">4</span>
                </div>
                <div className="pt-1.5 sm:pt-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-olive-tint px-3 py-0.5 text-xs font-semibold text-olive-deep">
                    <span className="size-1.5 rounded-full bg-olive animate-pulse" />
                    Current Phase
                  </span>
                  <h3 className="mt-2 font-heading text-xl sm:text-2xl tracking-tight text-charcoal">
                    Multi-University Expansion
                  </h3>
                  <p className="mt-3 leading-relaxed text-warm-gray max-w-xl">
                    Building on this journey, PTG is now being expanded to three
                    additional universities, with the intention, In Sha Allah, of
                    extending the initiative to more universities in the future.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div aria-hidden="true" className="mx-auto max-w-page border-t border-line/60" />

      {/* ── 3. Mission & Vision ──────────────────────────────────── */}
      <section className="mx-auto max-w-page px-5 py-section sm:px-8">
        <div className="grid gap-12 lg:gap-16 md:grid-cols-2">
          {/* Mission */}
          <div>
            <SectionIntro
              eyebrow="Our Mission"
              title="What Drives Us"
            />
            <p className="mt-6 text-lg leading-relaxed text-warm-gray">
              Our mission is to stand with people in need, especially those
              facing oppression, hardship, and crisis, and to provide meaningful
              support wherever help is required.
            </p>
            <p className="mt-4 leading-relaxed text-warm-gray">
              While Promise to Gaza begins with providing immediate relief to
              the people of Gaza, our vision extends beyond one place or one
              crisis. We want to build a way of serving the Ummah where people
              come together to support those who are suffering and to respond
              whenever and wherever help is needed.
            </p>
          </div>

          {/* Vision */}
          <div>
            <SectionIntro
              eyebrow="Our Vision"
              title="What We Aspire To"
            />
            <p className="mt-6 text-lg leading-relaxed text-warm-gray">
              Our vision is to build an Ummah that does not remain silent in
              the face of oppression, suffering, or injustice, but stands
              together with a strong sense of responsibility and
              accountability.
            </p>
            <p className="mt-4 leading-relaxed text-warm-gray">
              We envision a community where people recognise their
              responsibility towards one another, raise their voices for those
              who are oppressed, and come together to serve those in need.
            </p>
            <blockquote className="mt-6 border-l-[3px] border-olive pl-5">
              <p className="font-heading text-lg leading-snug tracking-tight text-charcoal italic">
                Ultimately, we aspire to contribute towards the revival of an
                Ummah that is conscious of its Islamic identity, united in its
                responsibilities, and committed to justice, compassion, and
                collective action.
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      <div aria-hidden="true" className="mx-auto max-w-page border-t border-line/60" />

      {/* ── 4. Purpose — Short & Long Term ───────────────────────── */}
      <section className="bg-surface">
        <div className="mx-auto max-w-page px-5 py-section sm:px-8">
          <SectionIntro
            eyebrow="Our Purpose"
            title="Why We Exist"
            lede="Relief today. Revival tomorrow."
          />

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {/* Short-Term */}
            <div className="flex flex-col justify-between rounded-card border border-line bg-paper p-7 sm:p-9 shadow-xs">
              <div>
                <div className="flex items-center gap-3">
                  <span className="flex size-9 items-center justify-center rounded-full bg-olive-tint text-olive">
                    <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </span>
                  <span className="font-sans text-xs font-semibold uppercase tracking-wider text-olive-deep">
                    Immediate Focus
                  </span>
                </div>
                <h3 className="mt-4 font-heading text-2xl tracking-tight text-charcoal">
                  Short-Term Purpose
                </h3>
                <p className="mt-5 leading-relaxed text-warm-gray">
                  At our current stage, our focus is on providing immediate
                  relief to the people of Gaza by supporting essential needs
                  such as food, water, medical supplies, and other basic
                  necessities.
                </p>
                <p className="mt-3 leading-relaxed text-warm-gray">
                  We are starting with what we have and doing what we can with
                  the resources available to us.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-line/60 text-xs text-warm-gray-soft">
                Focus: Food, water, medical supplies &amp; basic necessities.
              </div>
            </div>

            {/* Long-Term */}
            <div className="flex flex-col justify-between rounded-card border border-line bg-paper p-7 sm:p-9 shadow-xs">
              <div>
                <div className="flex items-center gap-3">
                  <span className="flex size-9 items-center justify-center rounded-full bg-sand text-charcoal">
                    <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                    </svg>
                  </span>
                  <span className="font-sans text-xs font-semibold uppercase tracking-wider text-olive-deep">
                    Long-Term Horizon
                  </span>
                </div>
                <h3 className="mt-4 font-heading text-2xl tracking-tight text-charcoal">
                  Long-Term Purpose
                </h3>
                <p className="mt-5 leading-relaxed text-warm-gray">
                  Our long-term purpose is to grow beyond a single crisis and
                  build the capacity to support people facing oppression,
                  hardship, and struggle wherever they may be.
                </p>
                <p className="mt-3 leading-relaxed text-warm-gray">
                  As we grow, we aim to contribute towards the broader revival
                  of the Ummah by creating a culture where people come together
                  to care for those in need and take responsibility for one
                  another.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-line/60 text-xs text-warm-gray-soft">
                Focus: Expanding support, building culture of collective responsibility.
              </div>
            </div>
          </div>
        </div>
      </section>

      <div aria-hidden="true" className="mx-auto max-w-page border-t border-line/60" />

      {/* ── 5. The Unspoken Truth ────────────────────────────────── */}
      <section className="mx-auto max-w-page px-5 py-section sm:px-8">
        <div className="relative overflow-hidden rounded-card border-2 border-olive/30 bg-olive-tint/50 p-8 sm:p-12 lg:p-16">
          {/* Decorative subtle background shape */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-olive/[0.06]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-12 -bottom-16 size-56 rounded-full bg-olive/[0.04]"
          />

          <div className="relative z-10 max-w-narrow">
            <span className="font-sans text-xs font-bold uppercase tracking-widest text-olive-deep">
              The Unspoken Truth
            </span>
            <h2 className="mt-4 font-heading text-3xl sm:text-4xl leading-[1.15] tracking-tight text-charcoal">
              Relief is essential, but relief alone cannot be the answer.
            </h2>
            <div className="mt-8 flex flex-col gap-5">
              <p className="text-lg leading-relaxed text-charcoal/80">
                Food, water, medical aid, and other necessities can help people
                survive today, but lasting change requires more than temporary
                responses to recurring crises.
              </p>
              <p className="leading-relaxed text-charcoal/75">
                The deeper challenge is building a generation that refuses to
                remain indifferent to the suffering of others and is willing to
                take meaningful, sustained action.
              </p>
              <p className="leading-relaxed text-charcoal/75">
                If we want to see lasting change, our response must go beyond
                moments of sympathy and temporary relief — towards
                responsibility, collective action, and the long-term revival
                of the Ummah.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div aria-hidden="true" className="mx-auto max-w-page border-t border-line/60" />

      {/* ── 6. Core Values ───────────────────────────────────────── */}
      <section className="bg-surface">
        <div className="mx-auto max-w-page px-5 py-section sm:px-8">
          <SectionIntro
            eyebrow="What We Stand For"
            title="Core Values"
            lede="The principles that shape everything we do."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {CORE_VALUES.map((value) => (
              <div
                key={value.title}
                className="group relative flex flex-col rounded-card border border-line bg-paper p-7 sm:p-8 shadow-xs transition-all duration-300 hover:border-olive/40 hover:shadow-soft hover:-translate-y-0.5"
              >
                <div className="flex items-center justify-between">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-olive-tint text-olive transition-colors duration-300 group-hover:bg-olive group-hover:text-paper">
                    {value.icon}
                  </div>
                  <span className="font-heading text-3xl font-bold text-sand-deep/60">
                    {value.number}
                  </span>
                </div>
                <h3 className="mt-6 font-heading text-xl tracking-tight text-charcoal">
                  {value.title}
                </h3>
                <p className="mt-3 leading-relaxed text-warm-gray flex-1">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div aria-hidden="true" className="mx-auto max-w-page border-t border-line/60" />

      {/* ── 7. Target Audience & Brand Messaging ─────────────────── */}
      <section className="mx-auto max-w-page px-5 py-section sm:px-8">
        <div className="grid gap-12 lg:gap-16 md:grid-cols-2">
          {/* Target Audience */}
          <div>
            <SectionIntro
              eyebrow="Who We Speak To"
              title="Target Audience"
            />
            <p className="mt-6 text-lg leading-relaxed text-warm-gray">
              Everyone who believes in humanity and justice.
            </p>
            <p className="mt-4 leading-relaxed text-warm-gray">
              We aim to reach every conscious mind, inspiring individuals to
              step forward, speak up, and take action for those in need.
            </p>
          </div>

          {/* Brand Messaging */}
          <div>
            <SectionIntro
              eyebrow="Our Message"
              title="Brand Messaging"
            />
            <div className="mt-6">
              <p className="font-heading text-2xl sm:text-3xl leading-tight tracking-tight text-charcoal">
                Rise for Truth.
                <br />
                Stand with the Oppressed.
              </p>
              <p className="mt-5 text-lg leading-relaxed text-warm-gray">
                Support the cause and be the action Gaza needs today.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div aria-hidden="true" className="mx-auto max-w-page border-t border-line/60" />

      {/* ── 8. Tone of Voice ─────────────────────────────────────── */}
      <section className="bg-surface">
        <div className="mx-auto max-w-page px-5 py-section sm:px-8">
          <SectionIntro
            eyebrow="How We Communicate"
            title="Tone of Voice"
            lede="Our words carry the weight of our commitment."
          />

          <div className="mt-12 flex flex-col gap-5 max-w-narrow">
            {TONE_ATTRIBUTES.map((attr) => (
              <div
                key={attr.label}
                className="flex items-start gap-5 rounded-xl border border-line/60 bg-paper p-6 transition-all duration-200 hover:border-olive/30 hover:shadow-xs"
              >
                <span className="mt-0.5 flex size-3 shrink-0 rounded-full bg-olive" aria-hidden="true" />
                <div>
                  <p className="font-heading text-lg text-charcoal tracking-tight">
                    {attr.label}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-warm-gray">
                    {attr.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────────── */}
      <section className="mx-auto max-w-page px-5 py-section sm:px-8">
        <div className="relative overflow-hidden rounded-card bg-olive-deep p-8 text-paper sm:p-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 size-64 rounded-full bg-white/[0.04]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-8 -bottom-12 size-48 rounded-full bg-white/[0.03]"
          />

          <div className="relative z-10 flex flex-col items-start gap-6 max-w-2xl">
            <span className="font-sans text-xs font-bold uppercase tracking-widest text-sand">
              Rise for Truth
            </span>
            <h3 className="font-heading text-3xl sm:text-4xl leading-tight">
              Stand with the oppressed.
              <br />
              Be the action Gaza needs today.
            </h3>
            <p className="leading-relaxed text-sand/90 text-base sm:text-lg">
              Whether it&apos;s through donation, spreading the word, or simply
              staying informed — every step counts.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/donate"
                className="inline-flex items-center justify-center rounded-lg bg-sand px-6 py-3 text-base font-semibold text-charcoal shadow-xs transition-all duration-200 hover:bg-white hover:-translate-y-0.5"
              >
                Donate Now &rarr;
              </Link>
              <Link
                href="/our-work"
                className="inline-flex items-center justify-center rounded-lg border border-sand/40 bg-transparent px-6 py-3 text-base font-semibold text-paper transition-all duration-200 hover:bg-paper/10 hover:-translate-y-0.5"
              >
                See Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

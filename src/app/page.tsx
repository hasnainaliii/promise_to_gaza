import Image from "next/image";
import { ActionLink } from "@/components/action_button";
import { CampaignCard } from "@/components/campaign_card";
import { IllustrationFrame } from "@/components/illustration_frame";
import { PlaceholderNote } from "@/components/placeholder_note";
import { SectionIntro } from "@/components/section_intro";
import { TatreezDivider } from "@/components/tatreez_divider";
import { campaigns, workAreas } from "@/content/placeholder_content";

const ACCOUNTABILITY_STEPS = [
  {
    title: "You choose an amount",
    body: "You decide what to give and whether it is a one-off gift or a monthly one. The amount and currency are shown before you confirm.",
  },
  {
    title: "The gift is confirmed",
    body: "Nothing is treated as given until the payment itself is confirmed. If something fails or is cancelled, we say so plainly.",
  },
  {
    title: "It is assigned to a programme",
    body: "Each gift is recorded against the area of work it supports, so it can be traced later rather than disappearing into a general pot.",
  },
  {
    title: "We publish what happened",
    body: "Updates and spending reports are published so supporters can see the outcome, not just the appeal.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] overflow-hidden -mt-20 lg:min-h-screen">
        {/* Background photograph */}
        <Image
          src="/images/mohammed-ibrahim-ZupwcgqWjcU-unsplash.jpg"
          alt="Two young people sitting together in Gaza"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_35%]"
        />

        {/* Warm gradient overlay — soft wash at top for navbar legibility, solid paper at bottom */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, var(--color-paper-90) 0%, var(--color-paper-40) 80px, var(--color-paper-0) 140px), linear-gradient(to top, var(--color-paper) 0%, var(--color-paper-90) 25%, var(--color-paper-70) 45%, var(--color-paper-0) 75%)",
          }}
        />

        {/* Centred hero content */}
        <div className="relative flex min-h-[90vh] flex-col items-center justify-end px-5 pb-20 pt-36 text-center sm:px-8 lg:min-h-screen lg:justify-center lg:pb-28">
          <span className="mb-6 inline-flex items-center gap-2.5 rounded-full bg-olive-deep/80 px-5 py-2 text-sm font-medium text-paper shadow-soft backdrop-blur-sm">
            <span aria-hidden="true" className="size-2 rotate-45 bg-sand" />
            Welfare and relief work for Gaza
          </span>

          <h1 className="mx-auto max-w-3xl font-heading text-4xl leading-[1.08] tracking-tight text-balance text-charcoal sm:text-5xl md:text-6xl lg:text-7xl">
            Keeping a{" "}
            <span className="relative whitespace-nowrap">
              promise
              <svg
                viewBox="0 0 200 12"
                preserveAspectRatio="none"
                aria-hidden="true"
                className="absolute -bottom-1 left-0 h-2.5 w-full text-berry"
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

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-warm-gray text-pretty sm:text-xl">
            Promise to Gaza is a welfare effort supporting families in Gaza
            with everyday essentials and care, and showing openly where that
            support goes.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ActionLink href="/donate" variant="primary" size="lg">
              Donate now
            </ActionLink>
            <ActionLink href="/our-work" variant="quiet" size="lg">
              Learn about our work
            </ActionLink>
          </div>

          <PlaceholderNote className="mt-8 max-w-lg">
            This site is still being built. Programme details, impact
            reporting and published accounts will follow.
          </PlaceholderNote>
        </div>

        {/* Organic wave transition to next section */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg
            viewBox="0 0 1440 80"
            preserveAspectRatio="none"
            aria-hidden="true"
            className="relative block h-12 w-full sm:h-16 lg:h-20"
            fill="var(--color-paper)"
          >
            <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z" />
          </svg>
        </div>
      </section>

      <TatreezDivider className="mx-auto max-w-page text-sand-deep" />

      <section className="bg-surface">
        <div className="mx-auto max-w-page px-5 py-section sm:px-8">
          <div className="max-w-narrow">
            <SectionIntro
              eyebrow="Who we are"
              title="A small effort, run with care."
              lede="Promise to Gaza exists to get practical help to people in Gaza, and to be straightforward about what happens to every gift."
            />
            <p className="mt-6 leading-relaxed text-warm-gray">
              Our full story, how we started and who we work alongside, is being
              written and will be published on this site rather than reduced to
              a slogan.
            </p>
            <ActionLink href="/about" variant="quiet" className="mt-7">
              Read about us
            </ActionLink>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-page px-5 py-section sm:px-8">
        <SectionIntro
          eyebrow="What we do"
          title="Where our attention goes."
          lede="Four areas of everyday need. Each will get its own detail as the work is documented."
        />
        <ul className="mt-10 grid gap-px overflow-hidden rounded-card bg-line sm:grid-cols-2">
          {workAreas.map((area) => (
            <li key={area.slug} className="flex gap-5 bg-paper p-6 sm:p-8">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-olive-tint">
                <Image
                  src={area.iconSrc}
                  alt=""
                  width={26}
                  height={26}
                  unoptimized
                />
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="font-heading text-xl tracking-tight text-charcoal">
                  {area.title}
                </h3>
                <p className="leading-relaxed text-warm-gray">
                  {area.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <PlaceholderNote className="mt-6">
          These areas are provisional and need confirming with the team before
          launch.
        </PlaceholderNote>
      </section>

      <section className="bg-olive-deep text-paper">
        <div className="mx-auto grid max-w-page items-center gap-12 px-5 py-section sm:px-8 lg:grid-cols-2">
          <IllustrationFrame
            src="/images/impact/placeholder_route.svg"
            alt="Illustration of a route crossing hills towards a marked destination"
            aspect="photo"
            flip
            sizes="(min-width: 1024px) 45vw, 90vw"
          />
          <div className="flex flex-col gap-5">
            <span className="inline-flex items-center gap-2.5 text-sm font-medium text-sand">
              <span aria-hidden="true" className="size-2 rotate-45 bg-sand" />
              Where support goes
            </span>
            <h2 className="font-heading text-3xl leading-tight tracking-tight text-balance sm:text-4xl">
              You should be able to follow the money.
            </h2>
            <p className="leading-relaxed text-sand">
              A donation is a trust, not a transaction. We would rather publish a
              plain breakdown than an impressive-sounding number, so this section
              will carry the real allocation once the figures are verified.
            </p>
            <PlaceholderNote className="border-olive-soft/60 bg-olive/40 text-sand">
              Spending breakdown and published accounts are not available yet.
            </PlaceholderNote>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-page px-5 py-section sm:px-8">
        <SectionIntro
          eyebrow="Campaigns"
          title="What we are raising for."
          lede="Each campaign will show its purpose, its funding position and the updates that came out of it."
        />
        <PlaceholderNote className="mt-6">
          The three campaigns below are placeholders so the layout can be
          reviewed. None is live, and no funding figures are real.
        </PlaceholderNote>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {campaigns.map((campaign, index) => (
            <CampaignCard
              key={campaign.slug}
              campaign={campaign}
              flip={index % 2 === 1}
            />
          ))}
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto grid max-w-page gap-12 px-5 py-section sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionIntro
            eyebrow="How it works"
            title="From your gift to the ground."
            lede="The steps a donation passes through, and the point at which we will and will not say it has happened."
          />
          <ol className="flex flex-col">
            {ACCOUNTABILITY_STEPS.map((step, index) => (
              <li key={step.title} className="grid grid-cols-[auto_1fr] gap-x-5">
                <div className="flex flex-col items-center">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-olive font-heading text-base text-paper">
                    {index + 1}
                  </span>
                  {index < ACCOUNTABILITY_STEPS.length - 1 ? (
                    <span
                      aria-hidden="true"
                      className="w-px flex-1 bg-sand-deep"
                    />
                  ) : null}
                </div>
                <div className="pb-9">
                  <h3 className="font-heading text-xl tracking-tight text-charcoal">
                    {step.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-warm-gray">
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-page px-5 py-section sm:px-8">
        <div className="relative overflow-hidden rounded-card bg-olive-tint px-6 py-12 sm:px-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 size-64 rounded-full bg-paper/50"
          />
          <div className="relative flex max-w-narrow flex-col items-start gap-5">
            <h2 className="font-heading text-3xl leading-tight tracking-tight text-balance text-charcoal sm:text-4xl">
              Give once, give monthly, or simply stay in touch.
            </h2>
            <p className="leading-relaxed text-olive-deep">
              Monthly gifts are the most useful, because they let work be planned
              rather than improvised. One-off gifts help just as much.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <ActionLink href="/donate" variant="primary" size="lg">
                Donate now
              </ActionLink>
              <ActionLink href="/contact" variant="quiet" size="lg">
                Get in touch
              </ActionLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

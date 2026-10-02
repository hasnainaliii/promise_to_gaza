import type { Metadata } from "next";
import { ClosingInvitation } from "@/components/closing_invitation";
import { CoreValuesList } from "@/components/core_values_list";
import { FramedPhoto } from "@/components/framed_photo";
import { HandUnderline } from "@/components/hand_underline";
import { HistoryTimeline } from "@/components/history_timeline";
import { OliveBranch } from "@/components/olive_branch";
import { Reveal } from "@/components/reveal";
import { SealBadge } from "@/components/seal_badge";
import { SectionIntro } from "@/components/section_intro";
import { CORE_VALUES, HISTORY, TONE_ATTRIBUTES } from "@/content/about";

export const metadata: Metadata = {
  title: { absolute: "About Promise to Gaza" },
  description:
    "Learn about Promise to Gaza — our history, mission, vision, purpose, core values, and the deeper truth behind why we do what we do.",
};

const FACTS = [
  { term: "Began", detail: "6 August 2025" },
  { term: "Where", detail: "UET Taxila" },
  { term: "A project of", detail: "My Network" },
];

const EYEBROW =
  "inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-eyebrow";

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="overflow-hidden">
        <div className="mx-auto grid max-w-page items-center gap-16 px-5 pb-section pt-10 sm:px-8 lg:grid-cols-12 lg:gap-10 lg:pb-section-lg lg:pt-16">
          <div className="lg:col-span-6">
            <div className="animate-rise-in">
              <SectionIntro
                level="h1"
                reveal={false}
                eyebrow="About Promise to Gaza"
                title={
                  <>
                    Who we <em className="text-palestine-green">are</em>.
                  </>
                }
              />
            </div>
            <div className="mt-8 flex flex-col gap-5 text-lg leading-relaxed text-warm-gray animate-rise-in animate-delay-150">
              <p>
                Promise to Gaza is a project initiated by{" "}
                <strong className="font-semibold text-charcoal">My Network</strong>,
                a community working towards the revival of Islam through
                different initiatives. In response to the ongoing crisis in
                Gaza, we are working to provide immediate humanitarian relief to
                those in need.
              </p>
              <p>
                At the same time, we see this effort as part of a broader,
                long-term journey towards the revival and strengthening of the
                Ummah.
              </p>
            </div>
            <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-line pt-6 animate-rise-in animate-delay-300">
              {FACTS.map((fact) => (
                <div key={fact.term}>
                  <dt className="text-xs font-medium uppercase tracking-eyebrow text-warm-gray">
                    {fact.term}
                  </dt>
                  <dd className="mt-1.5 font-heading text-lg leading-snug text-charcoal sm:text-xl">
                    {fact.detail}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:col-span-5 lg:col-start-8">
            <FramedPhoto
              onLoad
              src="/images/about/mynetwork-water-tanker-drive-gaza.jpeg"
              alt="A young boy in Gaza holds a My Network sign in front of a clean water tanker"
              sizes="(min-width: 1024px) 34vw, (min-width: 640px) 28rem, 90vw"
              crop="object-[50%_70%]"
            />
            <SealBadge className="absolute -top-10 left-4 animate-rise-in animate-delay-600 sm:-left-12 sm:top-10" />
          </div>
        </div>
      </section>

      {/* ── 01 History ──────────────────────────────────────────── */}
      <section className="bg-cream paper-grain">
        <div className="mx-auto max-w-page px-5 py-section-lg sm:px-8">
          <SectionIntro
            index="01"
            eyebrow="Our journey"
            title="From a single department to a multi-university movement."
            className="max-w-3xl"
          />
          <div className="mt-14 lg:mt-20">
            <HistoryTimeline steps={HISTORY} />
          </div>
        </div>
      </section>

      {/* ── 02 Mission & vision ─────────────────────────────────── */}
      <section className="mx-auto max-w-page px-5 py-section-lg sm:px-8">
        <SectionIntro
          index="02"
          eyebrow="Mission & vision"
          title="What drives us, and what we aspire to."
          className="max-w-3xl"
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h3 className={`${EYEBROW} text-palestine-green`}>
              <span aria-hidden="true" className="size-2 rotate-45 bg-berry" />
              Our mission
            </h3>
            <p className="mt-5 font-heading text-title text-charcoal">
              Our mission is to stand with people in need, especially those
              facing oppression, hardship, and crisis, and to provide meaningful
              support wherever help is required.
            </p>
            <p className="mt-5 leading-relaxed text-warm-gray">
              While Promise to Gaza begins with providing immediate relief to the
              people of Gaza, our vision extends beyond one place or one crisis.
              We want to build a way of serving the Ummah where people come
              together to support those who are suffering and to respond
              whenever and wherever help is needed.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <h3 className={`${EYEBROW} text-palestine-green`}>
              <span aria-hidden="true" className="size-2 rotate-45 bg-berry" />
              Our vision
            </h3>
            <p className="mt-5 font-heading text-title text-charcoal">
              Our vision is to build an Ummah that does not remain silent in the
              face of oppression, suffering, or injustice, but stands together
              with a strong sense of responsibility and accountability.
            </p>
            <p className="mt-5 leading-relaxed text-warm-gray">
              We envision a community where people recognise their
              responsibility towards one another, raise their voices for those
              who are oppressed, and come together to serve those in need.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid items-center gap-10 lg:mt-24 lg:grid-cols-12">
          <figure className="lg:col-span-7">
            <FramedPhoto
              shape="soft"
              src="/images/about/al-aqsa-jerusalem.jpg"
              alt="The Dome of the Rock at Al-Aqsa, rising above the old city of Jerusalem"
              aspect="wide"
              sizes="(min-width: 1024px) 44rem, 92vw"
            />
            <figcaption className="mt-3 text-sm text-warm-gray">
              Al-Aqsa, Jerusalem.
            </figcaption>
          </figure>
          <Reveal as="figure" delay={200} className="lg:col-span-5">
            <span aria-hidden="true" className="block h-12 font-heading text-8xl leading-none text-berry">
              &ldquo;
            </span>
            <blockquote className="font-heading text-title italic text-charcoal">
              Ultimately, we aspire to contribute towards the revival of an
              Ummah that is conscious of its Islamic identity, united in its
              responsibilities, and committed to justice, compassion, and
              collective action.
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* ── 03 Purpose ──────────────────────────────────────────── */}
      <section className="bg-cream paper-grain">
        <div className="mx-auto max-w-page px-5 py-section-lg sm:px-8">
          <SectionIntro
            index="03"
            eyebrow="Why we exist"
            title={
              <>
                Relief today. <em className="text-palestine-green">Revival tomorrow.</em>
              </>
            }
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <Reveal className="flex flex-col rounded-blob bg-paper p-8 shadow-soft sm:p-10">
              <div className="flex items-center justify-between">
                <span className={`${EYEBROW} text-palestine-green`}>Immediate focus</span>
                <span className="font-heading italic text-warm-gray-soft">Now</span>
              </div>
              <h3 className="mt-8 font-heading text-title text-charcoal">
                Short-term purpose
              </h3>
              <p className="mt-4 leading-relaxed text-warm-gray">
                At our current stage, our focus is on providing immediate relief
                to the people of Gaza by supporting essential needs such as food,
                water, medical supplies, and other basic necessities.
              </p>
              <p className="mt-3 leading-relaxed text-warm-gray">
                We are starting with what we have and doing what we can with the
                resources available to us.
              </p>
              <ul className="mt-auto flex flex-wrap gap-2 pt-8">
                {["Food", "Water", "Medical supplies", "Basic necessities"].map((need) => (
                  <li key={need} className="rounded-full bg-cream px-3.5 py-1.5 text-sm text-charcoal">
                    {need}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={150} className="relative isolate flex flex-col overflow-hidden rounded-blob bg-forest p-8 text-on-forest sm:p-10">
              <OliveBranch className="pointer-events-none absolute -bottom-6 -right-8 -z-10 w-64 text-on-forest-line" />
              <div className="flex items-center justify-between">
                <span className={`${EYEBROW} text-sand`}>Long-term horizon</span>
                <span className="font-heading italic text-on-forest-muted">Next</span>
              </div>
              <h3 className="mt-8 font-heading text-title">Long-term purpose</h3>
              <p className="mt-4 leading-relaxed text-on-forest-muted">
                Our long-term purpose is to grow beyond a single crisis and build
                the capacity to support people facing oppression, hardship, and
                struggle wherever they may be.
              </p>
              <p className="mt-3 leading-relaxed text-on-forest-muted">
                As we grow, we aim to contribute towards the broader revival of
                the Ummah by creating a culture where people come together to
                care for those in need and take responsibility for one another.
              </p>
              <ul className="mt-auto flex flex-wrap gap-2 pt-8">
                {["Expanding support", "A culture of collective responsibility"].map((aim) => (
                  <li key={aim} className="rounded-full border border-on-forest-line px-3.5 py-1.5 text-sm">
                    {aim}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 04 The unspoken truth ───────────────────────────────── */}
      <section className="mx-auto max-w-page px-5 py-section-xl sm:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <span className={`${EYEBROW} text-palestine-green`}>
              <span className="font-heading text-sm font-normal italic normal-case tracking-normal text-berry">
                04
              </span>
              <span aria-hidden="true" className="h-px w-8 bg-current opacity-50" />
              The unspoken truth
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-6 font-heading text-display text-balance text-charcoal">
              Relief is essential, but relief{" "}
              <HandUnderline>alone</HandUnderline> cannot be the answer.
            </h2>
          </Reveal>
          <Reveal delay={200} className="mx-auto mt-10 flex max-w-2xl flex-col gap-5 text-lg leading-relaxed text-warm-gray">
            <p className="text-xl text-charcoal">
              Food, water, medical aid, and other necessities can help people
              survive today, but lasting change requires more than temporary
              responses to recurring crises.
            </p>
            <p>
              The deeper challenge is building a generation that refuses to
              remain indifferent to the suffering of others and is willing to
              take meaningful, sustained action.
            </p>
            <p>
              If we want to see lasting change, our response must go beyond
              moments of sympathy and temporary relief — towards responsibility,
              collective action, and the long-term revival of the Ummah.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── 05 Core values ──────────────────────────────────────── */}
      <section className="bg-cream paper-grain">
        <div className="mx-auto max-w-page px-5 py-section-lg sm:px-8">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <SectionIntro
              index="05"
              eyebrow="What we stand for"
              title="Core values"
              className="lg:col-span-6"
            />
            <Reveal delay={150} className="lg:col-span-5 lg:col-start-8">
              <p className="text-lg leading-relaxed text-warm-gray">
                The principles that shape everything we do.
              </p>
            </Reveal>
          </div>
          <div className="mt-12">
            <CoreValuesList values={CORE_VALUES} />
          </div>
        </div>
      </section>

      {/* ── 06 Our message ──────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden bg-forest text-on-forest">
        <OliveBranch className="pointer-events-none absolute -right-10 top-16 -z-10 w-72 text-on-forest-line sm:w-md" />
        <div className="mx-auto max-w-page px-5 py-section-xl sm:px-8">
          <Reveal>
            <span className={`${EYEBROW} text-sand`}>
              <span className="font-heading text-sm font-normal italic normal-case tracking-normal text-on-forest-muted">
                06
              </span>
              <span aria-hidden="true" className="h-px w-8 bg-current opacity-50" />
              Our message
            </span>
          </Reveal>
          <h2 className="mt-8 font-heading text-display">
            <Reveal as="span" className="block">
              Rise for truth.
            </Reveal>
            <Reveal as="span" delay={150} className="block">
              <em className="text-sand">Stand with the oppressed.</em>
            </Reveal>
          </h2>
          <Reveal delay={250}>
            <p className="mt-8 max-w-xl text-xl leading-relaxed text-on-forest-muted">
              Support the cause and be the action Gaza needs today.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-12 border-t border-on-forest-line pt-12 lg:mt-24 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <h3 className={`${EYEBROW} text-sand`}>Who we speak to</h3>
              <p className="mt-5 font-heading text-title">
                Everyone who believes in humanity and justice.
              </p>
              <p className="mt-4 leading-relaxed text-on-forest-muted">
                We aim to reach every conscious mind, inspiring individuals to
                step forward, speak up, and take action for those in need.
              </p>
            </Reveal>
            <Reveal delay={150} className="lg:col-span-6 lg:col-start-7">
              <h3 className={`${EYEBROW} text-sand`}>How we speak</h3>
              <ul className="mt-5 flex flex-col">
                {TONE_ATTRIBUTES.map((attr) => (
                  <li
                    key={attr.label}
                    className="flex gap-4 border-b border-on-forest-line py-4 first:pt-0 last:border-0"
                  >
                    <span aria-hidden="true" className="mt-2.5 size-2 shrink-0 rotate-45 bg-berry" />
                    <div>
                      <p className="font-heading text-xl">{attr.label}</p>
                      <p className="mt-1 text-on-forest-muted">{attr.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <ClosingInvitation
        eyebrow="Ways to help"
        title="Be the action Gaza needs today."
        body="Whether it's through donation, spreading the word, or simply staying informed — every step counts."
        secondary={{ href: "/our-work", label: "See our work" }}
      />
    </>
  );
}

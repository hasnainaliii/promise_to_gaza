import type { Metadata } from "next";
import { ActionLink } from "@/components/action_button";
import { IllustrationFrame } from "@/components/illustration_frame";
import { PageHeader } from "@/components/page_header";
import { PlaceholderNote } from "@/components/placeholder_note";
import { SectionIntro } from "@/components/section_intro";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Who Promise to Gaza is, the principles the work is held to, and how we intend to account for every donation.",
};

const PRINCIPLES = [
  {
    title: "Say only what we can show",
    body: "No invented figures, no borrowed photographs, no claims we cannot evidence. If we do not know something yet, the site says so.",
  },
  {
    title: "Dignity before impact",
    body: "We will not use distressing imagery as decoration, or press on someone's worst moment to raise money faster.",
  },
  {
    title: "Money that can be traced",
    body: "Gifts are recorded against the work they support, and spending is published rather than summarised into a single reassuring percentage.",
  },
  {
    title: "Plain language",
    body: "Anyone should be able to read this site once and understand who we are, what we do and where their support goes.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="Who is behind Promise to Gaza."
        lede="We would rather publish this carefully than quickly. What follows is the shape of it; the detail is being confirmed with the team."
      />

      <section className="mx-auto grid max-w-page items-center gap-12 px-5 py-section sm:px-8 lg:grid-cols-[1fr_0.85fr]">
        <div className="flex flex-col gap-5">
          <SectionIntro
            eyebrow="Our story"
            title="How this started."
            lede="Promise to Gaza is a welfare effort supporting families in Gaza with everyday essentials and care."
          />
          <p className="max-w-narrow leading-relaxed text-warm-gray">
            The account of how the organisation began, the people running it and
            the partners it works alongside will be published here once it has
            been written and approved. We have deliberately left it blank rather
            than filling the space with something that sounds right.
          </p>
          <PlaceholderNote>
            Founding story, team and partner details are still to be supplied.
          </PlaceholderNote>
        </div>
        <IllustrationFrame
          src="/images/stories/placeholder_doorway.svg"
          alt="Illustration of an open, arched doorway with a plant beside it"
          aspect="portrait"
          sizes="(min-width: 1024px) 38vw, 90vw"
        />
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-page px-5 py-section sm:px-8">
          <SectionIntro
            eyebrow="Our principles"
            title="What we hold ourselves to."
            lede="These are commitments about how we work and communicate, not claims about results."
          />
          <ul className="mt-10 grid gap-px overflow-hidden rounded-card bg-line sm:grid-cols-2">
            {PRINCIPLES.map((principle, index) => (
              <li key={principle.title} className="flex gap-5 bg-paper p-6 sm:p-8">
                <span className="font-heading text-2xl text-olive-soft">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="font-heading text-xl tracking-tight text-charcoal">
                    {principle.title}
                  </h3>
                  <p className="leading-relaxed text-warm-gray">
                    {principle.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-page px-5 py-section sm:px-8">
        <div className="flex max-w-narrow flex-col items-start gap-5">
          <SectionIntro
            eyebrow="Questions"
            title="Something you want to ask?"
            lede="If you want to know how we operate, how funds are handled, or how to help in another way, please ask."
          />
          <ActionLink href="/contact" variant="secondary" size="lg">
            Get in touch
          </ActionLink>
        </div>
      </section>
    </>
  );
}

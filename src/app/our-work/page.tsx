import type { Metadata } from "next";
import { CampaignCard } from "@/components/campaign_card";
import { IllustrationFrame } from "@/components/illustration_frame";
import { PageHeader } from "@/components/page_header";
import { PlaceholderNote } from "@/components/placeholder_note";
import { SectionIntro } from "@/components/section_intro";
import { campaigns, workAreas } from "@/content/placeholder_content";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "The areas of everyday need Promise to Gaza focuses on, and the campaigns raising funds for them.",
};

export default function OurWorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our work"
        title="Practical help, in four areas."
        lede="These are the needs we organise around. Detailed descriptions of how each one runs will be published as the work is documented."
      />

      <div className="mx-auto flex max-w-page flex-col gap-section px-5 py-section sm:px-8">
        {workAreas.map((area, index) => (
          <section
            key={area.slug}
            aria-labelledby={`${area.slug}-heading`}
            className="grid items-center gap-10 lg:grid-cols-2"
          >
            <IllustrationFrame
              src={area.imageSrc}
              alt={area.imageAlt}
              aspect="photo"
              flip={index % 2 === 1}
              sizes="(min-width: 1024px) 45vw, 90vw"
              className={index % 2 === 1 ? "lg:order-last" : undefined}
            />
            <div className="flex flex-col gap-4">
              <span className="inline-flex items-center gap-2.5 text-sm font-medium text-olive">
                <span aria-hidden="true" className="size-2 rotate-45 bg-olive-soft" />
                Area {index + 1} of {workAreas.length}
              </span>
              <h2
                id={`${area.slug}-heading`}
                className="font-heading text-3xl leading-tight tracking-tight text-balance text-charcoal sm:text-4xl"
              >
                {area.title}
              </h2>
              <p className="max-w-narrow text-lg leading-relaxed text-warm-gray">
                {area.description}
              </p>
              <PlaceholderNote>
                Full detail for this area, including how it is delivered, is
                still to be written.
              </PlaceholderNote>
            </div>
          </section>
        ))}
      </div>

      <section className="bg-surface">
        <div className="mx-auto max-w-page px-5 py-section sm:px-8">
          <SectionIntro
            eyebrow="Campaigns"
            title="Current campaigns."
            lede="Each campaign will show what it funds, where its funding stands and the updates that came out of it."
          />
          <PlaceholderNote className="mt-6">
            These campaigns are placeholders. None is live, and no funding
            figures are real.
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
        </div>
      </section>
    </>
  );
}

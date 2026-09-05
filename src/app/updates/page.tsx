import type { Metadata } from "next";
import { ActionLink } from "@/components/action_button";
import { PageHeader } from "@/components/page_header";
import { PlaceholderNote } from "@/components/placeholder_note";
import { SectionIntro } from "@/components/section_intro";
import { UpdateCard } from "@/components/update_card";
import { stories, updates } from "@/content/placeholder_content";

export const metadata: Metadata = {
  title: "Updates",
  description:
    "Field updates, spending reports and stories from the work Promise to Gaza supports.",
};

export default function UpdatesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Updates"
        title="What has actually happened."
        lede="Updates are where we report back: what was done, what it cost and what is still outstanding."
      />

      <section className="mx-auto max-w-page px-5 py-section sm:px-8">
        <PlaceholderNote>
          No updates have been published yet. The entries below are placeholders
          showing how a published update will look.
        </PlaceholderNote>
        <ul className="mt-10 flex flex-col gap-10 divide-y divide-line">
          {updates.map((update) => (
            <li key={update.slug} className="pt-10 first:pt-0">
              <UpdateCard update={update} />
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-page px-5 py-section sm:px-8">
          <SectionIntro
            eyebrow="Stories"
            title="Stories from the people we support."
            lede="We will only publish a story when someone has chosen to share it and agreed to how it is told."
          />
          {stories.length === 0 ? (
            <div className="mt-8 flex flex-col items-start gap-4 rounded-card border border-dashed border-sand-deep bg-paper p-8">
              <p className="max-w-narrow leading-relaxed text-warm-gray">
                There are no stories here yet. Rather than fill this space with
                something invented, we have left it empty until a real,
                consented story exists.
              </p>
              <ActionLink href="/contact" variant="quiet">
                Ask about sharing a story
              </ActionLink>
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
}

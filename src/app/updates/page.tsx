import type { Metadata } from "next";
import { ActionLink } from "@/components/action_button";
import { PageHeader } from "@/components/page_header";
import { PlaceholderNote } from "@/components/placeholder_note";
import { SectionIntro } from "@/components/section_intro";
import { UpdateCard } from "@/components/update_card";
import { stories, updates } from "@/content/placeholder_content";
import { SITE_NAME } from "@/content/site";

export const metadata: Metadata = {
  title: "Updates",
  description:
    `Field updates, spending reports and stories from the work ${SITE_NAME} supports.`,
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
        <ul className="mt-10 flex flex-col gap-10 divide-y divide-rule">
          {updates.map((update) => (
            <li key={update.slug} className="pt-10 first:pt-0">
              <UpdateCard update={update} />
            </li>
          ))}
        </ul>
      </section>

      <section className="surface-parchment">
        <div className="mx-auto max-w-page px-5 py-section sm:px-8">
          <SectionIntro
            eyebrow="Stories"
            title="Stories from the people we support."
            lede="We will only publish a story when someone has chosen to share it and agreed to how it is told."
          />
          {stories.length === 0 ? (
            <div className="mt-8 flex flex-col items-start gap-4 rounded-card border border-dashed border-accent-soft bg-raised p-8">
              <p className="max-w-narrow leading-relaxed text-ink-muted">
                There are no stories here yet. Rather than fill this space with
                something invented, we have left it empty until a real,
                consented story exists.
              </p>
              <ActionLink href="/contact" variant="quiet">
                Reach out on WhatsApp
              </ActionLink>
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
}

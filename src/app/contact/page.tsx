import type { Metadata } from "next";
import { ContactForm } from "@/components/contact_form";
import { PageHeader } from "@/components/page_header";
import { PlaceholderNote } from "@/components/placeholder_note";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Ask Promise to Gaza a question about the work, about giving, or about other ways to help.",
};

const REASONS = [
  "Questions about how a donation is handled or how to give another way.",
  "Offers of help, whether practical, professional or in kind.",
  "Press and partnership enquiries.",
  "Anything you think we have got wrong on this site.",
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get in touch."
        lede="Whether you want to give differently, help in another way, or just ask something, we would rather hear from you than not."
      />

      <section className="mx-auto grid max-w-page items-start gap-10 px-5 py-section sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
        <ContactForm />

        <aside className="flex flex-col gap-8">
          <div className="rounded-card bg-surface p-6 sm:p-8">
            <h2 className="font-heading text-2xl tracking-tight text-charcoal">
              What people usually write about
            </h2>
            <ul className="mt-5 flex flex-col gap-4">
              {REASONS.map((reason) => (
                <li key={reason} className="flex gap-3 leading-relaxed text-warm-gray">
                  <span
                    aria-hidden="true"
                    className="mt-2 size-2 shrink-0 rotate-45 bg-olive-soft"
                  />
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4 rounded-card border border-line p-6 sm:p-8">
            <h2 className="font-heading text-2xl tracking-tight text-charcoal">
              Direct contact details
            </h2>
            <PlaceholderNote>
              Email address, postal address and registered details will be
              published here once confirmed. We are not listing anything we
              cannot yet stand behind.
            </PlaceholderNote>
          </div>
        </aside>
      </section>
    </>
  );
}

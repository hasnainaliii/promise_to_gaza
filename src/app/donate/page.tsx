import type { Metadata } from "next";
import { DonationAmountPicker } from "@/components/donation_amount_picker";
import { PageHeader } from "@/components/page_header";
import { PlaceholderNote } from "@/components/placeholder_note";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Give once or monthly to Promise to Gaza. Amounts, currency and what happens after you give are shown up front.",
};

const AFTER_YOU_GIVE = [
  "You will see the amount, the currency and whether the gift is one-off or monthly before anything is confirmed.",
  "A gift is only described as complete once the payment itself is confirmed. If it fails or is cancelled, we tell you which.",
  "We ask for the details needed to process and acknowledge the gift, and nothing beyond that.",
  "A monthly gift can be stopped at any time by getting in touch.",
];

export default function DonatePage() {
  return (
    <>
      <PageHeader
        eyebrow="Donate"
        title="Give once, or give every month."
        lede="Choose an amount that suits you. Everything that affects your gift is shown on this page before you confirm it."
      />

      <section className="mx-auto grid max-w-page items-start gap-10 px-5 py-section sm:px-8 lg:grid-cols-[1.15fr_0.85fr]">
        <DonationAmountPicker />

        <aside className="flex flex-col gap-8">
          <div className="rounded-card bg-surface p-6 sm:p-8">
            <h2 className="font-heading text-2xl tracking-tight text-charcoal">
              What happens after you give
            </h2>
            <ul className="mt-5 flex flex-col gap-4">
              {AFTER_YOU_GIVE.map((item) => (
                <li key={item} className="flex gap-3 leading-relaxed text-warm-gray">
                  <span
                    aria-hidden="true"
                    className="mt-2 size-2 shrink-0 rotate-45 bg-olive-soft"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4 rounded-card border border-line p-6 sm:p-8">
            <h2 className="font-heading text-2xl tracking-tight text-charcoal">
              Other ways to give
            </h2>
            <p className="leading-relaxed text-warm-gray">
              Some people prefer a direct bank transfer, or to give through an
              organisation they already support. We are happy to arrange either.
            </p>
            <PlaceholderNote>
              Bank details and any handling fees will be published here once
              confirmed. Nothing is listed yet.
            </PlaceholderNote>
          </div>
        </aside>
      </section>
    </>
  );
}

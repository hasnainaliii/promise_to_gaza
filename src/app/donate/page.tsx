import type { Metadata } from "next";
import Link from "next/link";
import { DonateAccountCard } from "@/components/donate_account_card";
import { PageHeader } from "@/components/page_header";
import {
  DONATION_ACCOUNT,
  SITE_NAME,
  WHATSAPP_DISPLAY,
  WHATSAPP_DISPLAY_2,
  WHATSAPP_NUMBER,
  WHATSAPP_NUMBER_2,
} from "@/content/site";

const PROVIDERS_TEXT = DONATION_ACCOUNT.providers.join(" or ");
const PROVIDERS_LIST = DONATION_ACCOUNT.providers.join(", ");

export const metadata: Metadata = {
  title: "Donate Now - Direct Relief for Families in Gaza",
  description:
    `Official account details for ${SITE_NAME}. Send donations via ${PROVIDERS_TEXT} to ${DONATION_ACCOUNT.display} (${DONATION_ACCOUNT.title}). 100% direct ground deployment.`,
};

const HOW_TO_DONATE_STEPS = [
  {
    step: "1",
    title: "Open App",
    desc: `Open ${PROVIDERS_LIST}, or your regular banking app (via Raast / IBFT).`,
  },
  {
    step: "2",
    title: "Enter Account",
    desc: `Select Send Money and enter Mobile / Account Number: ${DONATION_ACCOUNT.display}.`,
  },
  {
    step: "3",
    title: "Verify Title",
    desc: `Confirm that the receiver name displays ${DONATION_ACCOUNT.title}.`,
  },
  {
    step: "4",
    title: "Confirm Amount",
    desc: "Enter your donation (e.g. Rs. 100 weekly micro-donation or any amount) and send.",
  },
];

const DIRECT_IMPACT_POINTS = [
  {
    title: "Zero Administrative Leakage",
    desc: "100% of your donation is deployed directly for food parcels and clean water tankers.",
  },
  {
    title: "Verified Ground Execution",
    desc: "Coordination with verified local teams and volunteers navigating high-scarcity zones.",
  },
  {
    title: "Transparent Field Documentation",
    desc: "Every completed relief drive is documented with ground photographs and videos.",
  },
];

export default function DonatePage() {
  return (
    <>
      <PageHeader
        eyebrow="Donate Now"
        title="Direct Relief for Families in Gaza"
        lede={`Send your contribution directly via ${PROVIDERS_TEXT}. Every single rupee goes directly towards emergency food rations, clean water tankers, and essential survival aid on the ground in Gaza.`}
      />

      <section className="mx-auto grid max-w-page items-start gap-10 px-5 py-section sm:px-8 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Left Column: Account Details & Step-by-Step Guide */}
        <div className="flex flex-col gap-8">
          <DonateAccountCard />

          {/* Transfer Instructions */}
          <div className="rounded-card border border-line bg-parchment-light p-6 sm:p-8 shadow-xs">
            <h3 className="font-heading text-xl font-bold tracking-tight text-jet">
              How to Send Your Donation
            </h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {HOW_TO_DONATE_STEPS.map((s) => (
                <div
                  key={s.step}
                  className="flex flex-col justify-between rounded-xl border border-line/70 bg-parchment p-4"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="flex size-7 items-center justify-center rounded-full bg-crimson text-xs font-bold text-parchment">
                      {s.step}
                    </span>
                    <h4 className="font-heading text-base font-semibold text-jet">
                      {s.title}
                    </h4>
                  </div>
                  <p className="mt-2.5 text-xs leading-relaxed text-jet-muted">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Impact & Verification */}
        <aside className="flex flex-col gap-8">
          {/* Direct Impact Card */}
          <div className="rounded-card border border-line bg-parchment-light p-6 sm:p-8 shadow-xs">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-clay-tint px-2.5 py-0.5 text-xs font-semibold text-clay-deep">
              Our Commitment
            </span>
            <h3 className="mt-3 font-heading text-2xl tracking-tight text-jet">
              Where Your Support Goes
            </h3>
            <ul className="mt-6 flex flex-col gap-5">
              {DIRECT_IMPACT_POINTS.map((pt) => (
                <li key={pt.title} className="flex items-start gap-3">
                  <span aria-hidden="true" className="mt-1.5 size-2 shrink-0 rounded-full bg-crimson" />
                  <div>
                    <h4 className="font-heading text-base font-semibold text-jet">
                      {pt.title}
                    </h4>
                    <p className="mt-1 text-sm leading-relaxed text-jet-muted">
                      {pt.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 border-t border-line/70 pt-6">
              <Link
                href="/our-work#drives"
                className="inline-flex items-center gap-2 text-sm font-semibold text-crimson-deep hover:underline"
              >
                <span>View verified field proof from 9 relief drives</span>
                <span aria-hidden="true">-&gt;</span>
              </Link>
            </div>
          </div>

          {/* Rs. 100 Micro-Donation Callout */}
          <div className="rounded-card border border-crimson/20 bg-crimson-tint/50 p-6 sm:p-8">
            <h4 className="font-heading text-lg font-bold text-crimson-deep">
              The Weekly Rs. 100 (~$0.35 USD) Model
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-jet/90">
              Initiated first at UET Taxila, {SITE_NAME} is designed so that everyone can play their
              part without financial strain. When hundreds of students contribute just
              Rs. 100 every week, the collective pool deploys full clean water tankers and
              large-scale food ration drives.
            </p>
          </div>

          {/* Assistance & WhatsApp Help */}
          <div className="rounded-card border border-line bg-parchment-light p-6 shadow-xs">
            <h4 className="font-heading text-base font-semibold text-jet">
              Need help or international bank info?
            </h4>
            <p className="mt-2 text-xs leading-relaxed text-jet-muted">
              If you are outside Pakistan or require alternate transfer arrangements, reach
              out to our team on WhatsApp.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg bg-crimson px-4 py-2 text-xs font-semibold text-parchment shadow-xs transition-all hover:bg-crimson-deep"
              >
                WhatsApp {WHATSAPP_DISPLAY}
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER_2}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-parchment px-4 py-2 text-xs font-semibold text-jet transition-all hover:bg-parchment-light"
              >
                WhatsApp {WHATSAPP_DISPLAY_2}
              </a>
            </div>
          </div>
        </aside>
      </section>
    </>
  );
}

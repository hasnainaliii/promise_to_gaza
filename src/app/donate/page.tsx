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
          <div className="rounded-card border border-rule bg-raised p-6 sm:p-8 shadow-xs">
            <h3 className="font-heading text-xl font-bold tracking-tight text-ink">
              How to Send Your Donation
            </h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {HOW_TO_DONATE_STEPS.map((s) => (
                <div
                  key={s.step}
                  className="flex flex-col justify-between rounded-xl border border-rule/70 bg-ink/5 p-4"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="flex size-7 items-center justify-center rounded-full bg-action text-xs font-bold text-on-action">
                      {s.step}
                    </span>
                    <h4 className="font-heading text-base font-semibold text-ink">
                      {s.title}
                    </h4>
                  </div>
                  <p className="mt-2.5 text-xs leading-relaxed text-ink-muted">
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
          <div className="rounded-card border border-rule bg-raised p-6 sm:p-8 shadow-xs">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/15 px-2.5 py-0.5 text-xs font-semibold text-accent">
              Our Commitment
            </span>
            <h3 className="mt-3 font-heading text-2xl tracking-tight text-ink">
              Where Your Support Goes
            </h3>
            <ul className="mt-6 flex flex-col gap-5">
              {DIRECT_IMPACT_POINTS.map((pt) => (
                <li key={pt.title} className="flex items-start gap-3">
                  <span aria-hidden="true" className="mt-1.5 size-2 shrink-0 rounded-full bg-accent" />
                  <div>
                    <h4 className="font-heading text-base font-semibold text-ink">
                      {pt.title}
                    </h4>
                    <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                      {pt.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 border-t border-rule/70 pt-6">
              <Link
                href="/our-work#drives"
                className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
              >
                <span>View verified field proof from 9 relief drives</span>
                <span aria-hidden="true">-&gt;</span>
              </Link>
            </div>
          </div>

          {/* Rs. 100 Micro-Donation Callout */}
          <div className="rounded-card border border-accent/20 bg-accent/10 p-6 sm:p-8">
            <h4 className="font-heading text-lg font-bold text-accent">
              The Weekly Rs. 100 (~$0.35 USD) Model
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-ink/90">
              Initiated first at UET Taxila, {SITE_NAME} is designed so that everyone can play their
              part without financial strain. When hundreds of students contribute just
              Rs. 100 every week, the collective pool deploys full clean water tankers and
              large-scale food ration drives.
            </p>
          </div>

          {/* Assistance & WhatsApp Help */}
          <div className="rounded-card border border-rule bg-raised p-6 shadow-xs">
            <h4 className="font-heading text-base font-semibold text-ink">
              Need help or international bank info?
            </h4>
            <p className="mt-2 text-xs leading-relaxed text-ink-muted">
              If you are outside Pakistan or require alternate transfer arrangements, reach
              out to our team on WhatsApp.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg bg-action px-4 py-2 text-xs font-semibold text-on-action shadow-xs transition-all hover:bg-action-hover"
              >
                WhatsApp {WHATSAPP_DISPLAY}
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER_2}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-rule bg-ink/5 px-4 py-2 text-xs font-semibold text-ink transition-all hover:bg-ink/10"
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

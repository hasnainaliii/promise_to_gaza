import type { Metadata } from "next";
import { PageHeader } from "@/components/page_header";
import {
  SITE_NAME,
  WHATSAPP_NUMBER,
  WHATSAPP_DISPLAY,
  WHATSAPP_NAME,
  WHATSAPP_NUMBER_2,
  WHATSAPP_DISPLAY_2,
  WHATSAPP_NAME_2,
} from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    `Reach the ${SITE_NAME} team on WhatsApp - whether you have questions about giving, want to help, or need anything else.`,
};

const CONTACTS = [
  {
    name: WHATSAPP_NAME,
    number: WHATSAPP_NUMBER,
    display: WHATSAPP_DISPLAY,
    role: "Donations & general enquiries",
  },
  {
    name: WHATSAPP_NAME_2,
    number: WHATSAPP_NUMBER_2,
    display: WHATSAPP_DISPLAY_2,
    role: "General enquiries",
  },
];

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
        title="Reach us on WhatsApp."
        lede="Whether you want to give differently, help in another way, or just ask something - message us directly on WhatsApp."
      />

      <section className="mx-auto grid max-w-page items-start gap-10 px-5 py-section sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
        {/* WhatsApp contact cards */}
        <div className="flex flex-col gap-6">
          {CONTACTS.map((contact) => (
            <div
              key={contact.number}
              className="flex flex-col gap-4 rounded-card border border-line bg-parchment-light p-6 shadow-soft sm:p-8"
            >
              <div className="flex flex-col gap-1">
                <h2 className="font-heading text-2xl tracking-tight text-jet">
                  {contact.name}
                </h2>
                <p className="text-sm text-jet-muted">{contact.role}</p>
              </div>
              <p className="font-heading text-xl text-jet tracking-tight">
                {contact.display}
              </p>
              <a
                href={`https://wa.me/${contact.number}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-2.5 rounded-lg bg-crimson px-6 py-3 font-semibold text-parchment shadow-soft transition-all duration-300 ease-soft hover:-translate-y-0.5 hover:bg-crimson-deep"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="size-5 fill-current"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Message on WhatsApp
              </a>
            </div>
          ))}
        </div>

        <aside className="flex flex-col gap-8">
          <div className="rounded-card bg-parchment-deep p-6 sm:p-8">
            <h2 className="font-heading text-2xl tracking-tight text-jet">
              What people usually write about
            </h2>
            <ul className="mt-5 flex flex-col gap-4">
              {REASONS.map((reason) => (
                <li key={reason} className="flex gap-3 leading-relaxed text-jet-muted">
                  <span
                    aria-hidden="true"
                    className="mt-2 size-2 shrink-0 rounded-full bg-clay"
                  />
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </section>
    </>
  );
}

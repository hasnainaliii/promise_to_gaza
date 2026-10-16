/** Kept in parts so the wordmark can set the connecting word in italic. */
export const SITE_WORDMARK = { lead: "Promise", connector: "for", tail: "Ummah" } as const;
export const SITE_NAME = `${SITE_WORDMARK.lead} ${SITE_WORDMARK.connector} ${SITE_WORDMARK.tail}`;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/our-work", label: "Our Work" },
  { href: "/about", label: "About" },
] as const;

/** The only place the receiving account is defined. Every page that tells a
    donor where to send money reads it from here, so a change cannot leave a
    stale copy behind. */
export const DONATION_ACCOUNT = {
  number: "03359756566",
  display: "0335 9756566",
  title: "Muhammad Hassan Azmat",
  providers: ["Easypaisa", "Sadapay"],
} as const;

/** Published on the donate page as the organisation's contact line. */
export const WHATSAPP_NUMBER = "923359756566";
export const WHATSAPP_DISPLAY = "+92 335 9756566";
export const WHATSAPP_NAME = "Muhammad Hassan Azmat";

/** Second team contact - Hasnain Ali. */
export const WHATSAPP_NUMBER_2 = "923203608738";
export const WHATSAPP_DISPLAY_2 = "+92 320 3608738";
export const WHATSAPP_NAME_2 = "Hasnain Ali";

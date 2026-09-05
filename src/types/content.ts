export type CurrencyCode = "USD" | "GBP" | "EUR";

export type DonationFrequency = "one_time" | "monthly";

/** The donation lifecycle. The UI must never skip ahead of the real stage. */
export type DonationStage =
  | "form_submitted"
  | "payment_initiated"
  | "payment_confirmed"
  | "payment_failed"
  | "payment_cancelled";

/** Amounts are integer minor units (cents/pence) so nothing is ever rounded. */
export interface Money {
  currency: CurrencyCode;
  minorUnits: number;
}

export type CampaignStatus = "draft" | "active" | "funded" | "closed";

export interface CampaignFunding {
  raised: Money;
  goal: Money;
}

export interface Campaign {
  slug: string;
  title: string;
  summary: string;
  imageSrc: string;
  imageAlt: string;
  status: CampaignStatus;
  /** Only set once the organisation has published verified figures. */
  funding?: CampaignFunding;
}

export interface WorkArea {
  slug: string;
  title: string;
  description: string;
  iconSrc: string;
  imageSrc: string;
  imageAlt: string;
}

export interface Update {
  slug: string;
  title: string;
  summary: string;
  /** ISO date. Absent while the update is unpublished. */
  publishedAt?: string;
  imageSrc: string;
  imageAlt: string;
}

export interface Story {
  slug: string;
  title: string;
  excerpt: string;
  imageSrc: string;
  imageAlt: string;
}

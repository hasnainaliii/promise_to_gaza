import { ActionLink } from "@/components/action_button";
import { IllustrationFrame } from "@/components/illustration_frame";
import { formatMoney } from "@/lib/money";
import type { Campaign } from "@/types/content";

const STATUS_LABELS: Record<Campaign["status"], string> = {
  draft: "Not yet published",
  active: "Open for support",
  funded: "Fully funded",
  closed: "Closed",
};

export function CampaignCard({
  campaign,
  flip = false,
}: {
  campaign: Campaign;
  flip?: boolean;
}) {
  const { funding, status } = campaign;
  const percentFunded = funding
    ? Math.min(
        100,
        Math.round((funding.raised.minorUnits / funding.goal.minorUnits) * 100),
      )
    : null;

  return (
    <article className="flex flex-col gap-4 rounded-card border border-line bg-white p-4 transition-shadow duration-300 ease-soft hover:shadow-lift">
      <IllustrationFrame
        src={campaign.imageSrc}
        alt={campaign.imageAlt}
        aspect="photo"
        flip={flip}
        sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
      />

      <div className="flex flex-col gap-3 px-1 pb-1">
        <span className="inline-flex w-fit items-center gap-2 rounded-full bg-surface px-3 py-1 text-xs font-medium text-warm-gray">
          <span aria-hidden="true" className="size-1.5 rotate-45 bg-olive-soft" />
          {STATUS_LABELS[status]}
        </span>

        <h3 className="font-heading text-2xl leading-snug tracking-tight text-charcoal">
          {campaign.title}
        </h3>
        <p className="leading-relaxed text-warm-gray">{campaign.summary}</p>

        {funding && percentFunded !== null ? (
          <div className="flex flex-col gap-2">
            <div
              className="h-2 overflow-hidden rounded-full bg-surface"
              role="progressbar"
              aria-valuenow={percentFunded}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={`${campaign.title} funding progress`}
            >
              <div
                className="h-full rounded-full bg-olive"
                style={{ width: `${percentFunded}%` }}
              />
            </div>
            <p className="text-sm text-warm-gray">
              {formatMoney(funding.raised)} raised of {formatMoney(funding.goal)}
              <span className="sr-only"> ({percentFunded} percent)</span>
            </p>
          </div>
        ) : (
          <p className="text-sm text-warm-gray-soft">
            Funding progress appears here once this campaign is live.
          </p>
        )}

        {status === "active" ? (
          <ActionLink href="/donate" variant="quiet" className="mt-1 w-fit">
            Support this campaign
          </ActionLink>
        ) : null}
      </div>
    </article>
  );
}

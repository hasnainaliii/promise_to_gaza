import { IllustrationFrame } from "@/components/illustration_frame";
import type { Update } from "@/types/content";

export function UpdateCard({ update }: { update: Update }) {
  return (
    <article className="grid gap-5 sm:grid-cols-[minmax(0,14rem)_1fr] sm:items-center">
      <IllustrationFrame
        src={update.imageSrc}
        alt={update.imageAlt}
        aspect="photo"
        sizes="(min-width: 640px) 14rem, 90vw"
      />
      <div className="flex flex-col gap-2.5">
        {update.publishedAt ? (
          <time
            dateTime={update.publishedAt}
            className="text-sm font-medium text-crimson"
          >
            {new Date(update.publishedAt).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </time>
        ) : (
          <span className="text-sm font-medium text-jet-faint">
            Not yet published
          </span>
        )}
        <h3 className="font-heading text-2xl leading-snug tracking-tight text-jet">
          {update.title}
        </h3>
        <p className="max-w-narrow leading-relaxed text-jet-muted">
          {update.summary}
        </p>
      </div>
    </article>
  );
}

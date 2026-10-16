import { Reveal } from "@/components/reveal";

const WEEKS_IN_A_YEAR = 52;
const GROUP_SIZES = [1, 100, 1000];

/** What a weekly gift adds up to over a year as more people give it. Plain
    arithmetic, not a target or a total raised. */
export function WeeklyGivingTally({
  weeklyAmount,
  currency,
}: {
  weeklyAmount: number;
  currency: string;
}) {
  const format = (value: number) => value.toLocaleString("en-US");

  return (
    <div>
      <Reveal>
        <h3 className="font-heading text-title text-balance text-jet">
          What {format(weeklyAmount)} {currency} a week adds up to in a year
        </h3>
      </Reveal>

      <dl className="mt-8 border-t border-line">
        {GROUP_SIZES.map((people, i) => {
          const isLast = i === GROUP_SIZES.length - 1;
          return (
            <Reveal
              key={people}
              delay={150 + i * 120}
              className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-line py-5 sm:py-6"
            >
              <dt className="text-jet-muted">
                {people === 1 ? "One person" : `${format(people)} people`}
              </dt>
              <dd
                className={`whitespace-nowrap font-heading text-2xl tabular-nums sm:text-3xl ${
                  isLast ? "text-crimson" : "text-jet"
                }`}
              >
                {format(weeklyAmount * WEEKS_IN_A_YEAR * people)} {currency}
              </dd>
            </Reveal>
          );
        })}
      </dl>

      <Reveal delay={600}>
        <p className="mt-4 text-sm text-jet-muted">
          {format(weeklyAmount)} {currency} &times; {WEEKS_IN_A_YEAR} weeks &times;
          the number of people giving.
        </p>
      </Reveal>
    </div>
  );
}

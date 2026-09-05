"use client";

import Link from "next/link";
import { useId, useState } from "react";
import { ActionButton } from "@/components/action_button";
import {
  DONATION_CURRENCY,
  DONATION_MAX_MINOR_UNITS,
  DONATION_MIN_MINOR_UNITS,
  DONATION_PRESETS_MINOR_UNITS,
} from "@/content/site";
import { formatMinorUnits, parseAmountToMinorUnits } from "@/lib/money";
import type { DonationFrequency } from "@/types/content";

const FREQUENCIES: { value: DonationFrequency; label: string }[] = [
  { value: "one_time", label: "Give once" },
  { value: "monthly", label: "Give monthly" },
];

function CheckMark() {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden="true"
      className="size-4 shrink-0 opacity-0 transition-opacity duration-200 ease-soft peer-checked:opacity-100"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 8.5 6.5 12 13 4.5" />
    </svg>
  );
}

const OPTION_CLASSES =
  "flex min-h-13 cursor-pointer items-center justify-center gap-2 rounded-full border border-line bg-white px-4 text-base font-medium text-charcoal transition-colors duration-200 ease-soft hover:border-olive-soft peer-checked:border-olive peer-checked:bg-olive-tint peer-checked:text-olive-deep peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-olive-deep";

export function DonationAmountPicker() {
  const groupId = useId();
  const [frequency, setFrequency] = useState<DonationFrequency>("one_time");
  const [preset, setPreset] = useState<number | null>(
    DONATION_PRESETS_MINOR_UNITS[1],
  );
  const [customValue, setCustomValue] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const customMinorUnits =
    customValue.trim() === "" ? null : parseAmountToMinorUnits(customValue);
  const amount = customValue.trim() === "" ? preset : customMinorUnits;

  let error: string | null = null;
  if (customValue.trim() !== "" && customMinorUnits === null) {
    error = "Enter an amount in numbers, using at most two decimal places.";
  } else if (amount === null) {
    error = "Choose an amount, or enter your own.";
  } else if (amount < DONATION_MIN_MINOR_UNITS) {
    error = `The smallest amount we can process is ${formatMinorUnits(DONATION_MIN_MINOR_UNITS, DONATION_CURRENCY)}.`;
  } else if (amount > DONATION_MAX_MINOR_UNITS) {
    error = `For gifts above ${formatMinorUnits(DONATION_MAX_MINOR_UNITS, DONATION_CURRENCY)}, please get in touch so we can arrange it properly.`;
  }

  const showError = submitted && error !== null;

  return (
    <form
      noValidate
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
      className="flex flex-col gap-7 rounded-card border border-line bg-white p-6 shadow-soft sm:p-8"
    >
      <fieldset className="flex flex-col gap-3">
        <legend className="font-heading text-xl tracking-tight text-charcoal">
          How would you like to give?
        </legend>
        <div className="grid grid-cols-2 gap-3">
          {FREQUENCIES.map((option) => (
            <div key={option.value}>
              <input
                type="radio"
                id={`${groupId}-freq-${option.value}`}
                name={`${groupId}-frequency`}
                value={option.value}
                checked={frequency === option.value}
                onChange={() => setFrequency(option.value)}
                className="peer sr-only"
              />
              <label
                htmlFor={`${groupId}-freq-${option.value}`}
                className={OPTION_CLASSES}
              >
                <CheckMark />
                {option.label}
              </label>
            </div>
          ))}
        </div>
      </fieldset>

      <fieldset className="flex flex-col gap-3">
        <legend className="font-heading text-xl tracking-tight text-charcoal">
          Choose an amount
        </legend>
        <p className="text-sm text-warm-gray">
          All amounts are in US dollars ({DONATION_CURRENCY}).
        </p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {DONATION_PRESETS_MINOR_UNITS.map((value) => (
            <div key={value}>
              <input
                type="radio"
                id={`${groupId}-amount-${value}`}
                name={`${groupId}-amount`}
                value={value}
                checked={customValue.trim() === "" && preset === value}
                onChange={() => {
                  setPreset(value);
                  setCustomValue("");
                }}
                className="peer sr-only"
              />
              <label
                htmlFor={`${groupId}-amount-${value}`}
                className={OPTION_CLASSES}
              >
                <CheckMark />
                {formatMinorUnits(value, DONATION_CURRENCY)}
              </label>
            </div>
          ))}
        </div>
      </fieldset>

      <div className="flex flex-col gap-2">
        <label
          htmlFor={`${groupId}-custom`}
          className="font-medium text-charcoal"
        >
          Or enter your own amount
        </label>
        <div className="flex items-center gap-2 rounded-full border border-line bg-white px-5 focus-within:border-olive">
          <span aria-hidden="true" className="text-warm-gray">
            $
          </span>
          <input
            id={`${groupId}-custom`}
            type="text"
            inputMode="decimal"
            autoComplete="off"
            placeholder="0.00"
            value={customValue}
            aria-describedby={showError ? `${groupId}-error` : undefined}
            aria-invalid={showError || undefined}
            onChange={(event) => setCustomValue(event.target.value)}
            className="min-h-13 w-full bg-transparent text-base text-charcoal outline-none placeholder:text-warm-gray-soft"
          />
        </div>
      </div>

      {showError ? (
        <p
          id={`${groupId}-error`}
          role="alert"
          className="rounded-soft bg-berry-tint px-4 py-3 text-sm text-berry-deep"
        >
          {error}
        </p>
      ) : null}

      <div className="flex flex-col gap-4 border-t border-line pt-6">
        <p aria-live="polite" className="text-warm-gray">
          {amount !== null && error === null ? (
            <>
              You are choosing to give{" "}
              <strong className="font-semibold text-charcoal">
                {formatMinorUnits(amount, DONATION_CURRENCY)}
              </strong>{" "}
              {frequency === "monthly" ? "every month" : "as a one-off gift"}.
            </>
          ) : (
            "Pick an amount to see your summary here."
          )}
        </p>

        <ActionButton type="submit" variant="primary" size="lg">
          Continue to give
        </ActionButton>

        {submitted && error === null ? (
          <div
            role="status"
            className="rounded-soft border border-dashed border-sand-deep bg-surface px-4 py-3 text-sm leading-relaxed text-warm-gray"
          >
            <strong className="font-semibold text-charcoal">
              Nothing has been charged.
            </strong>{" "}
            No payment provider is connected to this site yet, so your donation
            has not been taken. Please{" "}
            <Link href="/contact" className="text-berry-deep underline">
              get in touch
            </Link>{" "}
            and we will arrange it with you directly.
          </div>
        ) : null}
      </div>
    </form>
  );
}

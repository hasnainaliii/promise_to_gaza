"use client";

import { useId, useState } from "react";
import { ActionButton } from "@/components/action_button";

const FIELD_CLASSES =
  "min-h-13 w-full rounded-soft border border-line bg-white px-4 text-base text-charcoal outline-none transition-colors duration-200 ease-soft placeholder:text-warm-gray-soft focus:border-olive";

export function ContactForm() {
  const formId = useId();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const errors = {
    name: name.trim() === "" ? "Please tell us what to call you." : null,
    email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
      ? "Please enter an email address we can reply to."
      : null,
    message: message.trim() === "" ? "Please write your message." : null,
  };
  const hasErrors = Object.values(errors).some(Boolean);

  const fieldError = (key: keyof typeof errors) =>
    submitted && errors[key] ? errors[key] : null;

  const renderError = (key: keyof typeof errors) => {
    const error = fieldError(key);
    if (!error) return null;
    return (
      <p id={`${formId}-${key}-error`} role="alert" className="text-sm text-berry-deep">
        {error}
      </p>
    );
  };

  return (
    <form
      noValidate
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
      className="flex flex-col gap-6 rounded-card border border-line bg-white p-6 shadow-soft sm:p-8"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor={`${formId}-name`} className="font-medium text-charcoal">
          Your name
        </label>
        <input
          id={`${formId}-name`}
          name="name"
          type="text"
          autoComplete="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          aria-invalid={Boolean(fieldError("name")) || undefined}
          aria-describedby={fieldError("name") ? `${formId}-name-error` : undefined}
          className={FIELD_CLASSES}
        />
        {renderError("name")}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor={`${formId}-email`} className="font-medium text-charcoal">
          Email address
        </label>
        <input
          id={`${formId}-email`}
          name="email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          aria-invalid={Boolean(fieldError("email")) || undefined}
          aria-describedby={fieldError("email") ? `${formId}-email-error` : undefined}
          className={FIELD_CLASSES}
        />
        {renderError("email")}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor={`${formId}-message`} className="font-medium text-charcoal">
          Your message
        </label>
        <textarea
          id={`${formId}-message`}
          name="message"
          rows={6}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          aria-invalid={Boolean(fieldError("message")) || undefined}
          aria-describedby={
            fieldError("message") ? `${formId}-message-error` : undefined
          }
          className={`${FIELD_CLASSES} min-h-40 resize-y py-3 leading-relaxed`}
        />
        {renderError("message")}
      </div>

      <p className="text-sm leading-relaxed text-warm-gray">
        We only ask for what we need to reply to you, and we will not pass your
        details to anyone else.
      </p>

      <ActionButton type="submit" variant="secondary" size="lg" className="w-fit">
        Send message
      </ActionButton>

      {submitted && !hasErrors ? (
        <div
          role="status"
          className="rounded-soft border border-dashed border-sand-deep bg-surface px-4 py-3 text-sm leading-relaxed text-warm-gray"
        >
          <strong className="font-semibold text-charcoal">
            Your message has not been sent.
          </strong>{" "}
          This form is not connected to an inbox yet, so nothing left your
          browser. A working contact route will be published here shortly.
        </div>
      ) : null}
    </form>
  );
}

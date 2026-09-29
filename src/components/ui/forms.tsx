"use client";

import { useId, useState, type FormEvent } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, LoaderCircle, Mail } from "lucide-react";
import { field, pinkButton, yellowButton } from "./page-ui";
import { site } from "@/lib/site";

function useSubmission(endpoint: string) {
  const [state, setState] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );
  const [error, setError] = useState("");
  const [receipt, setReceipt] = useState<{
    demo?: boolean;
    downloadUrl?: string;
    email?: string;
  }>({});
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (state === "sending") return;
    const form = event.currentTarget;
    setState("sending");
    setError("");
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const data = await response.json();
      if (!response.ok)
        throw new Error(
          data.error || "Something went wrong. Please try again."
        );
      setReceipt(data);
      setState("success");
      form.reset();
    } catch (cause) {
      setError(
        cause instanceof Error
          ? cause.message
          : "We couldn’t connect. Please try again."
      );
      setState("error");
    }
  }
  return { state, error, submit, receipt };
}

function Honeypot() {
  return (
    <div className="hidden" aria-hidden="true">
      <label>
        Leave this field empty
        <input name="website" type="text" tabIndex={-1} autoComplete="off" />
      </label>
    </div>
  );
}

export function ActivityRequestForm({
  activityId = "kindness",
  compact = false,
}: {
  activityId?: string;
  compact?: boolean;
}) {
  const id = useId();
  const { state, error, submit, receipt } = useSubmission(
    "/api/activities/request"
  );
  if (state === "success")
    return (
      <div
        role="status"
        className="rounded-2xl bg-[#e3efd8] p-5 text-[max(14px,1vw)]"
      >
        <CheckCircle2 className="mb-3 size-6 text-[#37804d]" />
        <strong>
          {receipt.demo ? "Your demo email is ready." : "Check your inbox!"}
        </strong>
        {receipt.demo ? (
          <>
            <p className="mt-2 wrap-break-word">To: {receipt.email}</p>
            <p className="mt-2">
              Here’s your little kindness activity. Print it, add some crayons,
              and enjoy a moment together.
            </p>
            <a
              href={receipt.downloadUrl}
              download
              className="mt-4 inline-flex min-h-11 items-center rounded-full bg-white px-5 py-2 font-extrabold underline underline-offset-4"
            >
              Download the PDF attachment
            </a>
            <p className="mt-3 text-[.85em]">
              Demo preview only. No email was sent.
            </p>
          </>
        ) : (
          <p className="mt-1">
            Your activity is on its way. Look in your spam folder too.
          </p>
        )}
      </div>
    );
  return (
    <form
      onSubmit={submit}
      className="space-y-4"
      aria-label="Email an activity"
      aria-busy={state === "sending"}
    >
      <input type="hidden" name="activityId" value={activityId} />
      <Honeypot />
      {site.demo && (
        <p className="rounded-xl bg-[#fff1cf] px-3 py-2 text-[max(11px,.8vw)]">
          Demo: see an email preview and download the PDF. No email is sent.
        </p>
      )}
      <div>
        <label
          className={`${compact ? "sr-only" : "mb-2 block"} text-[max(14px,1vw)] font-extrabold`}
          htmlFor={`${id}-email`}
        >
          Your email address
        </label>
        <div className={compact ? "flex flex-wrap gap-2" : "space-y-4"}>
          <input
            className={`${field} ${compact ? "flex-1 basis-40" : ""}`}
            id={`${id}-email`}
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
            placeholder="you@example.com"
            aria-describedby={error ? `${id}-error` : `${id}-privacy`}
          />
          <button
            className={yellowButton}
            disabled={state === "sending"}
            type="submit"
          >
            {state === "sending" ? (
              <>
                <LoaderCircle className="animate-spin" /> Sending…
              </>
            ) : (
              <>
                {compact ? "Send it" : "Email me the PDF"}
                <Mail />
              </>
            )}
          </button>
        </div>
      </div>
      <p
        id={`${id}-privacy`}
        className="text-[max(11px,.8vw)] leading-relaxed text-[#576b71]"
      >
        We’ll only use your email to send this activity. No newsletter signup.{" "}
        <Link href="/privacy" className="underline underline-offset-2">
          Privacy details
        </Link>
        .
      </p>
      {error && (
        <p
          id={`${id}-error`}
          role="alert"
          className="rounded-xl bg-[#fff0ee] p-3 text-sm text-[#a13237]"
        >
          {error}
        </p>
      )}
    </form>
  );
}

export function ContactForm() {
  const id = useId();
  const { state, error, submit, receipt } = useSubmission("/api/contact");
  if (state === "success")
    return (
      <div role="status" className="rounded-3xl bg-[#e3efd8] p-9 text-center">
        <CheckCircle2 className="mx-auto mb-5 size-12 text-[#37804d]" />
        <h2 className="text-3xl">
          {receipt.demo
            ? "Your demo message is complete."
            : "Your message is on its way."}
        </h2>
        <p className="mt-4">
          {receipt.demo
            ? "The form worked! This is a demo, so your message was not emailed or saved."
            : "Thank you for getting in touch. The FeelieBees team will reply to the email address you shared."}
        </p>
        <Link className={`${yellowButton} mt-7`} href="/activities">
          Explore a free activity <ArrowRight />
        </Link>
      </div>
    );
  return (
    <form
      onSubmit={submit}
      className="space-y-5"
      aria-label="Contact FeelieBees"
      aria-busy={state === "sending"}
    >
      <Honeypot />
      {site.demo && (
        <p className="rounded-xl bg-[#fff1cf] p-3 text-[max(12px,.9vw)]">
          Demo form — try it out. Your message won’t be sent or saved.
        </p>
      )}
      <div className="grid gap-5 tablet:grid-cols-2">
        <label className="block text-[max(14px,1.05vw)] font-extrabold">
          Your name
          <input
            className={`${field} mt-2 font-semibold`}
            name="name"
            autoComplete="name"
            required
            minLength={2}
            maxLength={100}
            placeholder="Your name"
          />
        </label>
        <label className="block text-[max(14px,1.05vw)] font-extrabold">
          Email address
          <input
            className={`${field} mt-2 font-semibold`}
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
            placeholder="you@example.com"
          />
        </label>
      </div>
      <label className="block text-[max(14px,1.05vw)] font-extrabold">
        What’s on your mind?
        <select
          name="topic"
          className={`${field} mt-2 font-semibold`}
          defaultValue="General question"
        >
          <option>General question</option>
          <option>Heartly’s gift set</option>
          <option>Free activities</option>
          <option>Educators & partnerships</option>
          <option>Something else</option>
        </select>
      </label>
      <label className="block text-[max(14px,1.05vw)] font-extrabold">
        Your message
        <textarea
          name="message"
          className={`${field} mt-2 min-h-44 resize-y font-semibold`}
          required
          minLength={10}
          maxLength={4000}
          rows={6}
          placeholder="We’d love to hear from you…"
        />
      </label>
      <label className="flex items-start gap-3 text-[max(12px,.9vw)] leading-relaxed">
        <input
          name="consent"
          type="checkbox"
          required
          value="yes"
          className="mt-1 size-4 shrink-0 accent-[#318358]"
        />
        <span>
          I agree that FeelieBees can use my details to respond to this message.{" "}
          <Link href="/privacy" className="underline underline-offset-2">
            Read our privacy details
          </Link>
          .
        </span>
      </label>
      {error && (
        <p
          id={`${id}-error`}
          role="alert"
          className="rounded-xl bg-[#fff0ee] p-4 text-sm text-[#a13237]"
        >
          {error}
        </p>
      )}
      <button
        disabled={state === "sending"}
        className={pinkButton}
        type="submit"
      >
        {state === "sending" ? (
          <>
            <LoaderCircle className="animate-spin" />
            Sending…
          </>
        ) : (
          <>
            Send your message <ArrowRight />
          </>
        )}
      </button>
    </form>
  );
}

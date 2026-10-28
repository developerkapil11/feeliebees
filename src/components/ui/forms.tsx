"use client";

import { CheckCircle2, LoaderCircle } from "lucide-react";
import Link from "next/link";
import { FormEvent, useId, useState } from "react";

export function ContactForm() {
  const id = useId();
  const { state, error, submit, receipt } = useSubmission("/api/contact");

  if (state === "success") {
    return (
      <div
        role="status"
        className="rounded-2xl bg-[#e3efd8] p-6 text-center tablet:p-8"
      >
        <CheckCircle2 className="mx-auto mb-3 size-9 text-[#37804d]" />

        <h2 className="text-2xl font-extrabold text-navy">
          {receipt.demo
            ? "Your demo message is complete."
            : "Your message is on its way."}
        </h2>

        <p className="mt-2 text-sm leading-relaxed text-navy tablet:text-base">
          {receipt.demo
            ? "The form worked! This is a demo, so your message was not emailed or saved."
            : "Thank you for getting in touch. The FeelieBees team will reply to the email address you shared."}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={submit}
      className="space-y-3"
      aria-label="Contact FeelieBees"
      aria-busy={state === "sending"}
    >
      <div className="grid gap-3 tablet:grid-cols-2 tablet:gap-5">
        <label className="block text-sm font-extrabold text-navy tablet:text-base">
          Name
          <input
            className="mt-1.5 min-h-11 w-full rounded-xl border border-[#d8d9dc] bg-white px-3 py-2 text-sm font-medium text-navy outline-none transition focus:border-[#438451] focus:ring-2 focus:ring-[#438451]/20"
            name="name"
            autoComplete="name"
            required
            minLength={2}
            maxLength={100}
          />
        </label>

        <label className="block text-sm font-extrabold text-navy tablet:text-base">
          Email
          <input
            className="mt-1.5 min-h-11 w-full rounded-xl border border-[#d8d9dc] bg-white px-3 py-2 text-sm font-medium text-navy outline-none transition focus:border-[#438451] focus:ring-2 focus:ring-[#438451]/20"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
          />
        </label>
      </div>

      <label className="block text-sm font-extrabold text-navy tablet:text-base">
        Message
        <textarea
          name="message"
          className="mt-1.5 min-h-24 w-full resize-y rounded-xl border border-[#d8d9dc] bg-white px-3 py-2 text-sm font-medium text-navy outline-none transition focus:border-[#438451] focus:ring-2 focus:ring-[#438451]/20"
          required
          minLength={10}
          maxLength={4000}
          rows={3}
        />
      </label>

      {error && (
        <p
          id={`${id}-error`}
          role="alert"
          className="rounded-xl bg-[#fff0ee] p-3 text-sm text-[#a13237]"
        >
          {error}
        </p>
      )}

      <div className="flex flex-col items-center">
        <Link
          href="/privacy"
          className="text-sm text-navy underline decoration-1 underline-offset-4 transition hover:text-orange"
        >
          Privacy Policy
        </Link>

        <button
          disabled={state === "sending"}
          className="mt-3 inline-flex min-h-11 w-full max-w-xs items-center justify-center gap-2 rounded-xl border-2 border-orange bg-orange px-6 py-2 text-base font-extrabold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#f47e39] hover:shadow-md disabled:translate-y-0 disabled:opacity-50"
          type="submit"
        >
          {state === "sending" ? (
            <>
              <LoaderCircle className="size-5 animate-spin" />
              Sending…
            </>
          ) : (
            "Send Message"
          )}
        </button>
      </div>
    </form>
  );
}


function useSubmission(endpoint: string) {
  const [state, setState] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

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

      if (!response.ok) {
        throw new Error(
          data.error || "Something went wrong. Please try again."
        );
      }

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


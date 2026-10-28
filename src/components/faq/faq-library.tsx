
"use client";

import { useState } from "react";
import Link from "next/link";
import { Minus, Plus } from "lucide-react";
import type { FaqItem } from "@/content/faqs";

export function FaqLibrary({ faqs }: { faqs: FaqItem[] }) {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id ?? null);

  return (
    <div className="flex flex-col gap-3">
      {faqs.map((faq) => {
        const isOpen = openId === faq.id;
        const panelId = `faq-panel-${faq.id}`;

        return (
          <article
            key={faq.id}
            className={`overflow-hidden rounded-3xl border border-[#eff2df] transition-colors duration-300 ${
              isOpen ? "bg-[#fff0e3]" : "bg-[#eff2df]"
            }`}
          >
            <h2>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenId(isOpen ? null : faq.id)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-[clamp(17px,1.5vw,24px)] font-extrabold leading-snug text-navy tablet:gap-6 tablet:px-9 tablet:py-5"
              >
                <span>{faq.question}</span>

                <span
                  aria-hidden="true"
                  className="grid size-10 shrink-0 place-items-center rounded-full bg-[#fffaf0] text-orange transition-transform duration-300 tablet:size-14"
                >
                  {isOpen ? (
                    <Minus size={25} strokeWidth={2.5} />
                  ) : (
                    <Plus size={25} strokeWidth={2.5} />
                  )}
                </span>
              </button>
            </h2>

            <div
              id={panelId}
              aria-hidden={!isOpen}
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="min-h-0 overflow-hidden">
                <div className="max-w-[80ch] px-5 pb-5 text-[15px] leading-relaxed text-navy tablet:px-9 tablet:pb-7 tablet:text-[clamp(16px,1.35vw,24px)] tablet:leading-[1.55]">
                  <p>{faq.answer}</p>

                  {faq.steps?.length ? (
                    <ol className="mt-3 list-decimal space-y-2 pl-6 marker:font-extrabold marker:text-orange">
                      {faq.steps.map((step) => (
                        <li key={step} className="pl-1">
                          {step}
                        </li>
                      ))}
                    </ol>
                  ) : null}

                  {faq.link ? (
                    <p className="mt-3">
                      {faq.link.leadIn
                        ? `${faq.link.leadIn} `
                        : null}
                      <Link
                        href={faq.link.href}
                        className="font-extrabold text-orange underline decoration-2 underline-offset-4 hover:opacity-80"
                      >
                        {faq.link.label}
                      </Link>
                      .
                    </p>
                  ) : null}
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { Minus, Plus } from "lucide-react";
import type { FaqItem } from "@/content/faqs";

export function FaqLibrary({ faqs }: { faqs: FaqItem[] }) {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id ?? null);

  return (
    <div className="border-t border-[#dfdacd]">
      {faqs.map((faq) => {
        const isOpen = openId === faq.id;
        const panelId = `faq-panel-${faq.id}`;

        return (
          <article key={faq.id} className="border-b border-[#dfdacd]">
            <h2>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenId(isOpen ? null : faq.id)}
                className="flex w-full items-center justify-between gap-5 py-5 text-left text-[clamp(17px,1.35vw,22px)] font-extrabold text-[#422f27] tablet:py-6"
              >
                <span>{faq.question}</span>
                <span
                  aria-hidden="true"
                  className="grid size-9 shrink-0 place-items-center rounded-full text-orange transition-colors hover:bg-button-orange-soft"
                >
                  {isOpen ? <Minus size={23} /> : <Plus size={23} />}
                </span>
              </button>
            </h2>

            <div
              id={panelId}
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
            >
              <div className="overflow-hidden">
                <div className="max-w-[72ch] pb-6 pr-12 text-[15px] leading-7 text-[#5e554e] tablet:pb-7 tablet:text-[clamp(15px,1.05vw,18px)]">
                  <p>{faq.answer}</p>

                  {faq.steps?.length ? (
                    <ol className="mt-3 list-decimal space-y-1.5 pl-6 marker:font-extrabold marker:text-orange">
                      {faq.steps.map((step) => (
                        <li key={step} className="pl-1">
                          {step}
                        </li>
                      ))}
                    </ol>
                  ) : null}

                  {faq.link ? (
                    <p className="mt-3">
                      {faq.link.leadIn ? `${faq.link.leadIn} ` : null}
                      <Link
                        href={faq.link.href}
                        className="font-extrabold text-[#327a4d] underline decoration-2 underline-offset-4 hover:text-[#245c39]"
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

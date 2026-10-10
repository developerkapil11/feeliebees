"use client";

import { useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import { faqGroups } from "@/content/faqs";
import { Emblem } from "@/components/ui/brand";
import { field } from "@/components/ui/page-ui";

export function FaqLibrary() {
  const [query, setQuery] = useState("");
  const groups = faqGroups
    .map((group) => ({
      ...group,
      questions: group.questions.filter(([question, answer]) =>
        `${question} ${answer}`.toLowerCase().includes(query.toLowerCase())
      ),
    }))
    .filter((group) => group.questions.length);
  return (
    <>
      <label className="relative mx-auto mb-10 block max-w-[38em]">
        <span className="sr-only">Search frequently asked questions</span>
        <Search className="absolute top-1/2 left-4 size-5 -translate-y-1/2 text-[#6b7d6e]" />
        <input
          className={`${field} pl-12`}
          placeholder="Try delivery, ages, or downloads…"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </label>
      <div className="grid items-start gap-8 tablet:grid-cols-[.55fr_1.8fr]">
        <nav
          aria-label="FAQ topics"
          className="flex flex-wrap gap-3 tablet:sticky tablet:top-8 tablet:grid"
        >
          {faqGroups.map((group, index) => (
            <a
              key={group.title}
              href={`#${index === 1 ? "orders" : index === 2 ? "downloads" : "heartly"}`}
              className="flex items-center gap-3 rounded-2xl border border-[#e5dfce] bg-white px-5 py-3 text-[max(14px,1.05vw)] font-extrabold hover:border-[#99b88d]"
            >
              <Emblem type={group.icon} />
              {group.title}
            </a>
          ))}
        </nav>
        <div className="space-y-10">
          {groups.map((group) => (
            <section
              id={
                group.title === "Orders & gifting"
                  ? "orders"
                  : group.title === "Free activities"
                    ? "downloads"
                    : "heartly"
              }
              key={group.title}
            >
              <h2 className="mb-5 text-[max(29px,2.5vw)]">{group.title}</h2>
              <div className="overflow-hidden rounded-3xl border border-[#e7e0d0] bg-white">
                {group.questions.map(([question, answer]) => (
                  <details
                    key={question}
                    className="group border-b border-[#eee8db] px-5 last:border-0 tablet:px-[2vw]"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-[max(16px,1.2vw)] font-extrabold [&::-webkit-details-marker]:hidden">
                      {question}
                      <ChevronDown className="size-5 shrink-0 text-[#64805c] transition-transform group-open:rotate-180" />
                    </summary>
                    <p className="pb-6 text-[max(14px,1.05vw)] leading-relaxed text-[#405771]">
                      {answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>
          ))}
          {!groups.length && (
            <p role="status" className="rounded-3xl bg-white p-9">
              No answers match that search. Try another word, or send us a
              message.
            </p>
          )}
        </div>
      </div>
    </>
  );
}

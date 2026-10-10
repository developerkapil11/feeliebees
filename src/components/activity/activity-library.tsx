"use client";

import Image from "next/image";
import { useState } from "react";
import { Download, Mail, Search, X } from "lucide-react";
import { activities } from "@/content/activities";
import { primaryButton } from "@/components/ui/page-ui";
import { Dialog } from "@/components/ui/dialog";
import { ActivityRequestForm } from "@/components/ui/forms";

export function ActivityLibrary() {
  const [filter, setFilter] = useState("All activities");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<(typeof activities)[number] | null>(
    null
  );
  const filtered = activities.filter(
    (activity) =>
      (filter === "All activities" || activity.category === filter) &&
      `${activity.title} ${activity.description}`
        .toLowerCase()
        .includes(query.toLowerCase())
  );
  return (
    <>
      <p className="mb-5 text-[max(12px,.9vw)] text-[#657365]" role="status">
        {filtered.length} {filtered.length === 1 ? "activity" : "activities"} to
        explore · Free A4 PDFs
      </p>
      <div className="grid items-stretch gap-6 sm:grid-cols-2 tablet:grid-cols-3">
        {filtered.map((activity) => (
          <article
            key={activity.id}
            className="flex flex-col overflow-hidden rounded-3xl border border-[#e8e1d2] bg-white shadow-[0_8px_30px_#08296505]"
          >
            <div
              className={`relative p-7 ${
                activity.id === "feelings"
                  ? "bg-[#e6f4ef]"
                  : activity.id === "colouring"
                  ? "bg-[#fff0d5]"
                  : "bg-[#fce4e8]"
              }`}
            >
              <Image
                src={activity.preview}
                alt={`${activity.title} printable preview`}
                width={794}
                height={1123}
                sizes="(max-width: 900px) 80vw, 30vw"
                className="mx-auto h-auto w-[75%] -rotate-3 rounded-md shadow-md transition duration-300 hover:rotate-0"
              />
              <span className="absolute top-4 right-4 rounded-full bg-white px-3 py-1.5 text-[max(10px,.75vw)] font-black">
                {activity.access === "direct"
                  ? "INSTANT DOWNLOAD"
                  : "SENT BY EMAIL"}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-6 tablet:p-[2vw]">
              <p className="text-[max(11px,.85vw)] font-extrabold text-[#4d855a]">
                {activity.category}
              </p>
              <h3 className="mt-3 text-[max(23px,1.9vw)]">{activity.title}</h3>
              <p className="mt-3 mb-6 flex-1 text-[max(14px,1.05vw)] leading-relaxed">
                {activity.description}
              </p>
              {activity.access === "direct" ? (
                <a href={activity.file!} download className={primaryButton}>
                  Download PDF <Download />
                </a>
              ) : (
                <button
                  className={primaryButton}
                  onClick={() => setSelected(activity)}
                >
                  Email me this activity <Mail />
                </button>
              )}
            </div>
          </article>
        ))}
      </div>
      {!filtered.length && (
        <div className="rounded-3xl border border-dashed border-[#cdd5c3] p-12 text-center">
          <h3 className="text-2xl">No little matches just yet.</h3>
          <p className="mt-3">
            Try a different word or explore all the activities.
          </p>
          <button
            className={`${primaryButton} mt-6`}
            onClick={() => {
              setQuery("");
              setFilter("All activities");
            }}
          >
            Clear filters <X />
          </button>
        </div>
      )}
      {selected && (
        <Dialog
          title="A little kindness, delivered."
          close={() => setSelected(null)}
        >
          <p className="mb-5 text-base leading-relaxed">
            Enter your email and we’ll send <strong>{selected.title}</strong> as
            a ready-to-print PDF.
          </p>
          <ActivityRequestForm activityId={selected.id} />
        </Dialog>
      )}
    </>
  );
}

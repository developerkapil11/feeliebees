"use client";

import Image from "next/image";
import { Download, Mail } from "lucide-react";
import { useState } from "react";

import { activities } from "@/content/activities";
import { primaryButton } from "@/components/ui/page-ui";
import { Dialog } from "@/components/ui/dialog";
import { ActivityRequestForm } from "@/components/ui/forms";

export function ActivityLibrary() {
  const [selected, setSelected] = useState<
    (typeof activities)[number] | null
  >(null);

  const activity = activities[0];

  if (!activity) return null;

  return (
    <>
      <section className="mx-auto w-full max-w-6xl px-4 tablet:px-0">
        <article className="group overflow-hidden rounded-[2.5rem] border border-[#eadfce] bg-white shadow-[0_18px_55px_rgba(40,65,40,0.08)]">
          <div className="grid tablet:grid-cols-[1fr_1fr]">
            {/* =========================
                LEFT - ACTIVITY PREVIEW
            ========================== */}
            <div className="relative flex min-h-[430px] items-center justify-center overflow-hidden bg-[#fff0d5] px-8 py-12 tablet:min-h-[560px] tablet:px-12">
              {/* Decorative background shapes */}
              <div className="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-white/50" />

              <div className="absolute -bottom-20 -right-10 h-56 w-56 rounded-full bg-white/50" />

              <div className="absolute left-8 top-8 z-20 rounded-full bg-white px-4 py-2 text-xs font-extrabold tracking-wide text-[#4d604c] shadow-[0_4px_12px_rgba(0,0,0,0.06)]">
                FREE ACTIVITY
              </div>

              {/* Preview */}
              <div className="relative z-10 w-full max-w-[390px]">
                <Image
                  src={activity.preview}
                  alt={`${activity.title} printable preview`}
                  width={794}
                  height={1123}
                  sizes="(max-width: 900px) 80vw, 390px"
                  className="mx-auto h-auto w-full -rotate-2 rounded-xl bg-white p-2 shadow-[0_22px_45px_rgba(40,40,20,0.16)] transition duration-500 group-hover:rotate-0 group-hover:scale-[1.02]"
                />
              </div>
            </div>

            {/* =========================
                RIGHT - CONTENT
            ========================== */}
            <div className="flex flex-col justify-center px-8 py-10 tablet:px-12 tablet:py-14">
              {/* Category */}
              <span className="mb-5 inline-flex w-fit rounded-full bg-[#edf5e9] px-4 py-2 text-xs font-extrabold uppercase tracking-wide text-[#4d855a]">
                {activity.category}
              </span>

              {/* Title */}
              <h2 className="max-w-xl text-[34px] leading-[1.08] text-[#243524] tablet:text-[46px]">
                {activity.title}
              </h2>

              {/* Description */}
              <p className="mt-5 max-w-xl text-[16px] leading-7 text-[#657365] tablet:text-[17px]">
                {activity.description}
              </p>

              {/* CTA */}
              <div className="mt-8">
                {activity.access === "direct" ? (
                  <a
                    href={activity.file!}
                    download
                    className={`${primaryButton} flex w-full items-center justify-center gap-2`}
                  >
                    Download Free PDF
                    <Download size={19} />
                  </a>
                ) : (
                  <button
                    className={`${primaryButton} flex w-full items-center justify-center gap-2`}
                    onClick={() => setSelected(activity)}
                  >
                    Email Me This Activity
                    <Mail size={19} />
                  </button>
                )}
              </div>

              {/* Benefits */}
              <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-[#788276]">
                <span className="flex items-center gap-1.5">
                  <span className="font-bold text-[#6d8c70]">✓</span>
                  Free printable PDF
                </span>

                <span className="flex items-center gap-1.5">
                  <span className="font-bold text-[#6d8c70]">✓</span>
                  Child-friendly
                </span>

                <span className="flex items-center gap-1.5">
                  <span className="font-bold text-[#6d8c70]">✓</span>
                  A4 printable
                </span>
              </div>
            </div>
          </div>
        </article>
      </section>

      {/* Email dialog */}
      {selected && (
        <Dialog
          title="A little kindness, delivered."
          close={() => setSelected(null)}
        >
          <p className="mb-5 text-base leading-relaxed text-[#657365]">
            Enter your email and we’ll send{" "}
            <strong className="text-[#243524]">{selected.title}</strong> as a
            ready-to-print PDF.
          </p>

          <ActivityRequestForm activityId={selected.id} />
        </Dialog>
      )}
    </>
  );
}
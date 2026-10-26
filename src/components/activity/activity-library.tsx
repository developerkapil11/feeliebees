
"use client";

import Image from "next/image";
import { useState } from "react";
import { Mail, X } from "lucide-react";
import { activities } from "@/content/activities";
import { primaryButton } from "@/components/ui/page-ui";
import { Dialog } from "@/components/ui/dialog";

type Activity = (typeof activities)[number];

export function ActivityLibrary() {
  const [filter, setFilter] = useState("All activities");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Activity | null>(null);
  const [email, setEmail] = useState("");
  const [joinMailingList, setJoinMailingList] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const filtered = activities.filter(
    (activity) =>
      (filter === "All activities" || activity.category === filter) &&
      `${activity.title} ${activity.description}`
        .toLowerCase()
        .includes(query.toLowerCase())
  );

  function openActivity(activity: Activity) {
    setSelected(activity);
    setEmail("");
    setJoinMailingList(false);
    setError("");
    setSubmitted(false);
  }

  function closeDialog() {
    if (loading) return;

    setSelected(null);
    setError("");
    setSubmitted(false);
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!selected) return;

    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/activity-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          activityId: selected.id,
          email,
          joinMailingList,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error || "We couldn't send your activity. Please try again."
        );
      }

      setSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <h3 className="mt-1.5 text-xl leading-tight text-navy">
          Choose a free activity and we’ll email you the PDF.
        </h3>
      </div>

      <div className="grid items-stretch gap-4 sm:grid-cols-2 tablet:grid-cols-3">
        {filtered.map((activity) => (
          <article
            key={activity.id}
            className="flex min-w-0 flex-col overflow-hidden rounded-2xl border border-[#e8e1d2] bg-white shadow-[0_5px_20px_#08296505]"
          >
            <div className="relative flex h-52 items-center justify-center bg-[#eff2df] p-3 sm:h-56">
              <Image
                src={activity.preview}
                alt={`${activity.title} full-page printable preview`}
                width={794}
                height={1123}
                sizes="(max-width: 639px) 60vw, (max-width: 1023px) 35vw, 20vw"
                className="h-full w-auto max-w-[70%] object-contain shadow-md transition-transform duration-300 hover:scale-[1.02]"
              />
            </div>

            <div className="flex flex-1 flex-col p-4">
              <p className="text-xs font-extrabold text-[#f28c28]">
                {activity.category}
              </p>

              <h3 className="mt-1.5 text-xl leading-tight">
                {activity.title}
              </h3>

              <p className="mt-2 mb-4 flex-1 text-sm leading-relaxed text-navy">
                {activity.description}
              </p>

              <button
                type="button"
                className={`${primaryButton} w-full justify-center`}
                onClick={() => openActivity(activity)}
              >
                Get this activity <Mail size={17} />
              </button>
            </div>
          </article>
        ))}
      </div>

      <p className="mt-4 text-xs leading-relaxed text-navy">
        Free for personal and classroom use. Please do not resell.
      </p>

      {!filtered.length && (
        <div className="mt-4 rounded-2xl border border-dashed border-[#cdd5c3] p-8 text-center">
          <h3 className="text-xl">No little matches just yet.</h3>

          <p className="mt-2 text-sm text-navy">
            Try a different word or explore all the activities.
          </p>

          <button
            type="button"
            className={`${primaryButton} mt-4`}
            onClick={() => {
              setQuery("");
              setFilter("All activities");
            }}
          >
            Clear filters <X size={17} />
          </button>
        </div>
      )}

      {selected && (
        <Dialog
          title={
            submitted
              ? "Check your inbox!"
              : "Your free activity is just one step away!"
          }
          close={closeDialog}
        >
          {submitted ? (
            <div className="py-2">
              <p className="text-base leading-relaxed text-navy">
                Your request for <strong>{selected.title}</strong> has been
                received. Please check your inbox for your activity PDF or
                download link.
              </p>

              {joinMailingList && (
                <p className="mt-3 text-sm leading-relaxed text-navy">
                  You also asked to receive new activities and updates from
                  FeelieBees.
                </p>
              )}

              <button
                type="button"
                className={`${primaryButton} mt-5 w-full justify-center`}
                onClick={closeDialog}
              >
                Done
              </button>
            </div>
          ) : (
            <>
              <p className="mb-4 text-sm leading-relaxed text-navy">
                Enter your email and we’ll send you a download link for{" "}
                <strong>{selected.title}</strong>.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="activity-email"
                    className="mb-1.5 block text-sm font-semibold text-navy"
                  >
                    Email address
                  </label>

                  <input
                    id="activity-email"
                    type="email"
                    autoComplete="email"
                    required
                    maxLength={254}
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-[#d8dfd2] px-4 py-3 text-sm text-navy outline-none focus:border-[#398357]"
                  />
                </div>

                <label className="flex items-start gap-3 text-sm leading-relaxed text-navy">
                  <input
                    type="checkbox"
                    checked={joinMailingList}
                    onChange={(event) =>
                      setJoinMailingList(event.target.checked)
                    }
                    className="mt-1 size-4 shrink-0 accent-[#398357]"
                  />

                  <span>
                    I’d also like to receive new activities and updates from
                    FeelieBees.
                  </span>
                </label>

                {error && (
                  <p className="text-sm text-red-700" role="alert">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className={`${primaryButton} w-full justify-center disabled:cursor-not-allowed disabled:opacity-60`}
                >
                  {loading ? "Sending..." : "Send me the PDF"}
                  {!loading && <Mail size={17} />}
                </button>
              </form>
            </>
          )}
        </Dialog>
      )}
    </>
  );
}

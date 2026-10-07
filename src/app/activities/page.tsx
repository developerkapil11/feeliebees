import type { Metadata } from "next";
import { Emblem } from "@/components/ui/brand";
import { PageIntro, pageWidth } from "@/components/ui/page-ui";
import { ActivityLibrary } from "@/components/activity/activity-library";

export const metadata: Metadata = {
  title: "Free Activities | FeelieBees",
  description:
    "Download free feelings check-ins, Heartly colouring pages and kindness activities for children ages 3–7. Print, play and connect.",
};
export default function ActivitiesPage() {
  return (
    <main id="main">
      <PageIntro
        eyebrow="A little play. A lot of discovery."
        title="Small activities. Happy discoveries."
        art="activities"
      >
        <p>
          Make a little time for big feelings. Free printables for curious
          children and the grown-ups who love them.
        </p>
      </PageIntro>
      <section className={pageWidth} aria-label="Free activity library">
        <ActivityLibrary />
      </section>
      <section className="bg-[#fff3dc] px-[6%] py-12 tablet:py-[4vw]">
        <h2 className="text-center text-[max(34px,3vw)]">
          Just add crayons and a little company.
        </h2>
        <div className="mx-auto mt-9 grid gap-8 tablet:grid-cols-3">
          {[
            {
              icon: "cards" as const,
              title: "1. Pick & print",
              text: "Download a PDF straight away, or have an activity sent to your inbox.",
            },
            {
              icon: "palette" as const,
              title: "2. Make it your own",
              text: "Colour, draw, and explore. There’s no right or wrong way to join in.",
            },
            {
              icon: "heart" as const,
              title: "3. Connect together",
              text: "Follow your child’s lead and see where a little conversation takes you.",
            },
          ].map(({ icon, title, text }) => (
            <div key={title} className="text-center">
              <Emblem
                type={icon}
                className="mx-auto mb-4 size-[max(56px,4vw)]!"
              />
              <h3 className="text-[max(21px,1.6vw)]">{title}</h3>
              <p className="mx-auto mt-3 max-w-[36ch] text-[max(14px,1.05vw)] leading-relaxed">
                {text}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-9 text-center text-[max(12px,.9vw)] text-[#62765d]">
          Free for personal and classroom use. Enjoy with a grown-up. Please do
          not resell.
        </p>
      </section>
    </main>
  );
}

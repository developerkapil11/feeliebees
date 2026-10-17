
import type { Metadata } from "next";
import { PageIntro, pageWidth } from "@/components/ui/page-ui";
import { ActivityLibrary } from "@/components/activity/activity-library";

export const metadata: Metadata = {
  title: "Free Activities | FeelieBees",
  description:
    "Explore free printable feelings check-ins, Heartly colouring pages and kindness activities for children ages 3–7. Request your activity by email.",
};

export default function ActivitiesPage() {
  return (
    <main id="main">
      <PageIntro title="Free Activities" art="activities">
        <p>
          Play, create, and explore feelings together with free printable
          activities inspired by Heartly’s world.
        </p>
      </PageIntro>

      <section
        className={`${pageWidth} pb-8`}
        aria-label="Free activity library"
      >
        <ActivityLibrary />
      </section>
    </main>
  );
}

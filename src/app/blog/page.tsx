import type { Metadata } from "next";
import { PageIntro, pageWidth, TogetherBanner } from "@/components/ui/page-ui";
import { BlogLibrary } from "@/components/blog/blog-library";

export const metadata: Metadata = {
  title: "The FeelieBees Blog | Stories for Growing Hearts",
  description:
    "Practical ideas, gentle encouragement and playful activities for parents, caregivers and educators helping children explore feelings.",
};
export default function BlogPage() {
  return (
    <main id="main">
      <PageIntro
        eyebrow="For their little world. And yours."
        title="Little reads for growing hearts."
      >
        <p>
          Practical tips, playful ideas, and a little encouragement for parents,
          caregivers, and educators.
        </p>
      </PageIntro>
      <section className={pageWidth} aria-label="Articles">
        <BlogLibrary />
      </section>
      <TogetherBanner />
    </main>
  );
}

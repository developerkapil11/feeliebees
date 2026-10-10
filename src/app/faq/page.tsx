import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FaqLibrary } from "@/components/faq/faq-library";
import { PageIntro, pageWidth, primaryButton } from "@/components/ui/page-ui";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | FeelieBees",
  description:
    "Find answers about Heartly’s gift set, ages, Amazon orders, free activity downloads, and classroom use.",
};
export default function FaqPage() {
  return (
    <main id="main">
      <PageIntro
        eyebrow="A little help, right here"
        title="Big questions. Friendly answers."
      >
        <p>
          Curious about Heartly, an order, or a free activity? Let’s find the
          answer together.
        </p>
      </PageIntro>
      <section className={pageWidth} aria-label="Frequently asked questions">
        <FaqLibrary />
      </section>
      <section className="bg-[#fce7e9] px-[6%] py-12 text-center tablet:py-[4vw]">
        <h2 className="text-[max(34px,3vw)]">Still have a little question?</h2>
        <p className="mt-4 text-[max(15px,1.15vw)]">
          We’d love to help you find your way.
        </p>
        <Link href="/contact" className={`${primaryButton} mt-6`}>
          Get in touch <ArrowRight />
        </Link>
      </section>
    </main>
  );
}

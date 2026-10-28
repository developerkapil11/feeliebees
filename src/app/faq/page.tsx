
import type { Metadata } from "next";
import Link from "next/link";
import { FaqLibrary } from "@/components/faq/faq-library";
import { getFaqs } from "@/lib/faqs";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | FeelieBees",
  description:
    "Find answers about Heartly's Pocket of Feelings, what's included, how to use the set, and product safety.",
};

export default async function FaqPage() {
  const faqs = await getFaqs();

  return (
    <main id="main" className="bg-cream pt-28 tablet:pt-32">
      <section
        className="mx-auto w-[88%] max-w-5xl pb-12 tablet:pb-16"
        aria-labelledby="faq-title"
      >
        <h1
          id="faq-title"
          className="mb-8 text-center font-display text-[clamp(38px,4.2vw,66px)] leading-tight text-orange tablet:mb-10"
        >
          Frequently Asked Questions
        </h1>

        <FaqLibrary faqs={faqs} />

        <div className="mt-10 text-center tablet:mt-12">
          <p className="text-base text-navy tablet:text-lg">
            Still have a little question?{" "}
            <Link
              href="/contact"
              className="font-medium text-orange underline decoration-1 underline-offset-4 transition hover:opacity-80"
            >
              Contact us
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}

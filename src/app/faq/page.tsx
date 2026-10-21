import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
    <main id="main" className="bg-[#fffaf0] pt-28 tablet:pt-32">
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

        <div className="mx-auto mt-10 max-w-2xl text-center tablet:mt-12">
          <div className="flex items-end justify-center gap-2 tablet:gap-4">
            <Image
              src="/assets/illustrated-icons/sprout.webp"
              alt=""
              width={360}
              height={360}
              className="mb-1 w-14 shrink-0 -rotate-12 tablet:w-20"
            />
            <div>
              <h2 className="text-3xl text-orange tablet:text-4xl">
                Still have a question?
              </h2>
              <p className="mt-2 text-base text-[#5e554e] tablet:text-lg">
                We’d love to hear from you.
              </p>
            </div>
            <Image
              src="/assets/illustrated-icons/sprout.webp"
              alt=""
              width={360}
              height={360}
              className="mb-1 w-14 shrink-0 rotate-12 scale-x-[-1] tablet:w-20"
            />
          </div>
          <Link
            href="/contact"
            className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-full border-2 border-[#438451] px-7 py-2.5 text-base font-extrabold text-[#397448] transition hover:-translate-y-0.5 hover:bg-[#438451] hover:text-white"
          >
            Contact Us <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}

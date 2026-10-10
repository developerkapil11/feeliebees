import Link from "next/link";

import { PageIntro } from "@/components/ui/page-ui";

export const metadata = {
  title: "Terms of Use | FeelieBees",
  description:
    "Read the Terms of Use for the FeelieBees website, content, printable activities, downloads, and blog.",
};

export default function TermsPage() {
  return (
    <main id="main">
      <PageIntro
        eyebrow="A few simple guidelines"
        title="Terms of Use"
      >
        <p>
          Please read these terms before using the FeelieBees website,
          activities, downloads, and other resources.
        </p>
      </PageIntro>

      <article
        className="
          mx-auto
          w-[88%]
          max-w-[900px]
          py-12
          text-[max(16px,1.05vw)]
          leading-relaxed

          tablet:py-[5vw]
        "
      >
        {/* Last Updated */}
        <div className="mb-10 rounded-2xl bg-[#fff8e8] px-6 py-5">
          <p className="text-[14px] text-black/65">
            <span className="font-semibold text-[#173b70]">
              Last updated:
            </span>{" "}
            July 2026
          </p>

          <p className="mt-2">
            Welcome to FeelieBees. By using this website, you agree to these
            Terms of Use. If you do not agree, please do not use this website.
          </p>
        </div>

        {/* Our Content */}
        <section className="border-b border-black/10 pb-8">
          <h2 className="mb-4 text-2xl font-semibold text-[#173b70] tablet:text-3xl">
            Our Content
          </h2>

          <p>
            Unless otherwise stated, all content on this website — including
            illustrations, characters, stories, text, photographs, graphics,
            downloads, logos, and other materials — is the property of{" "}
            <strong>FeelieBees</strong> and is protected by copyright and
            trademark laws.
          </p>

          <p className="mt-4">
            You may not copy, reproduce, distribute, modify, or sell any
            content without our written permission.
          </p>
        </section>

        {/* Personal Use */}
        <section className="border-b border-black/10 py-8">
          <h2 className="mb-4 text-2xl font-semibold text-[#173b70] tablet:text-3xl">
            Personal Use
          </h2>

          <p>
            We encourage families and educators to enjoy our printable
            activities and resources for personal and classroom use, unless
            otherwise stated.
          </p>

          <p className="mt-4">
            Commercial use or redistribution of our materials is not permitted.
          </p>
        </section>

        {/* Educational Information */}
        <section className="border-b border-black/10 py-8">
          <h2 className="mb-4 text-2xl font-semibold text-[#173b70] tablet:text-3xl">
            Educational Information
          </h2>

          <p>
            The content on this website is provided for educational and
            informational purposes only.
          </p>

          <p className="mt-4">
            It is not intended to replace medical, psychological, therapeutic,
            or professional advice.
          </p>

          <p className="mt-4">
            If you have concerns about your child&apos;s health or development,
            please consult a qualified professional.
          </p>
        </section>

        {/* External Links */}
        <section className="border-b border-black/10 py-8">
          <h2 className="mb-4 text-2xl font-semibold text-[#173b70] tablet:text-3xl">
            External Links
          </h2>

          <p>
            Our website may include links to third-party websites such as
            Amazon.
          </p>

          <p className="mt-4">
            We are not responsible for the content, products, or services
            provided by those websites.
          </p>
        </section>

        {/* Purchases */}
        <section className="border-b border-black/10 py-8">
          <h2 className="mb-4 text-2xl font-semibold text-[#173b70] tablet:text-3xl">
            Purchases
          </h2>

          <p>
            FeelieBees products are currently sold through Amazon.
          </p>

          <p className="mt-4">
            Any purchases are completed through Amazon and are subject to
            Amazon&apos;s own terms, policies, and customer service.
          </p>
        </section>

        {/* Printable Activities & Downloads */}
        <section className="border-b border-black/10 py-8">
          <h2 className="mb-4 text-2xl font-semibold text-[#173b70] tablet:text-3xl">
            Printable Activities &amp; Downloads
          </h2>

          <p>
            Unless otherwise stated, all printable resources available on the
            FeelieBees website are provided for{" "}
            <strong>personal and classroom use only</strong>.
          </p>

          <p className="mt-4">
            Feel free to download, print, and enjoy these activities at home or
            in your classroom.
          </p>

          <p className="mt-4">
            Please do not sell, modify, redistribute, or upload them to another
            website.
          </p>

          <p className="mt-4">
            If you&apos;d like to share them with others, we&apos;d love for
            you to direct them to{" "}
            <Link
              href="/"
              className="
                font-semibold
                text-[#358453]
                underline
                underline-offset-4
                transition-colors
                hover:text-[#f15a29]
              "
            >
              www.feelie-bees.com
            </Link>{" "}
            so they can download their own copy.
          </p>
        </section>

        {/* Blog Content */}
        <section className="border-b border-black/10 py-8">
          <h2 className="mb-4 text-2xl font-semibold text-[#173b70] tablet:text-3xl">
            Blog Content
          </h2>

          <p>
            The articles, guides, images, and other content published on the
            FeelieBees blog are the intellectual property of FeelieBees and are
            protected by copyright laws.
          </p>

          <p className="mt-4">
            You&apos;re welcome to read, share links to our articles, and
            reference our content with proper credit.
          </p>

          <p className="mt-4">
            Please do not copy, reproduce, republish, translate, or distribute
            our blog content in whole or in part without our prior written
            permission.
          </p>
        </section>

        {/* Changes */}
        <section className="pt-8">
          <h2 className="mb-4 text-2xl font-semibold text-[#173b70] tablet:text-3xl">
            Changes
          </h2>

          <p>
            We may update these Terms of Use at any time. Continued use of the
            website means you accept any updated terms.
          </p>
        </section>

        {/* Contact CTA */}
        <div
          className="
            mt-12
            rounded-3xl
            bg-[#eff2df]
            p-6
            text-center

            tablet:p-8
          "
        >
          <h2 className="text-xl font-semibold text-[#173b70] tablet:text-2xl">
            Have questions about these terms?
          </h2>

          <p className="mx-auto mt-2 max-w-[55ch] text-[15px]">
            If you have questions about using FeelieBees content, activities,
            downloads, or other resources, please get in touch with us.
          </p>

          <Link
            href="/contact"
            className="
              mt-5
              inline-flex
              items-center
              justify-center
              rounded-full
              bg-[#f15a29]
              px-6
              py-3
              font-semibold
              text-white
              transition-all
              hover:bg-[#d94c20]
              hover:shadow-md
            "
          >
            Contact FeelieBees
          </Link>
        </div>
      </article>
    </main>
  );
}
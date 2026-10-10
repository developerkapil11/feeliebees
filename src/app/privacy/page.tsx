import Link from "next/link";

import { PageIntro } from "@/components/ui/page-ui";

export const metadata = {
  title: "Privacy Policy | FeelieBees",
  description:
    "Learn how FeelieBees collects, uses, and protects your information.",
};

export default function PrivacyPage() {
  return (
    <main id="main">
      <PageIntro
        eyebrow="Your privacy matters"
        title="Privacy Policy"
      >
        <p>
          Learn how FeelieBees collects, uses, and protects the information you
          choose to share with us.
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
            Welcome to FeelieBees. Your privacy matters to us. This Privacy
            Policy explains what information we collect, how we use it, and the
            choices you have regarding your information when you visit our
            website.
          </p>
        </div>

        {/* Information We Collect */}
        <section className="border-b border-black/10 pb-8">
          <h2 className="mb-4 text-2xl font-semibold text-[#173b70] tablet:text-3xl">
            Information We Collect
          </h2>

          <p className="mb-4">
            We may collect information that you choose to share with us,
            including:
          </p>

          <ul className="list-disc space-y-2 pl-6">
            <li>Your name</li>
            <li>Your email address</li>
            <li>Messages you send through our contact form</li>
          </ul>

          <p className="mt-5">
            We may also collect basic website usage information through cookies
            or analytics tools to help us understand how visitors use our
            website.
          </p>
        </section>

        {/* How We Use Your Information */}
        <section className="border-b border-black/10 py-8">
          <h2 className="mb-4 text-2xl font-semibold text-[#173b70] tablet:text-3xl">
            How We Use Your Information
          </h2>

          <p className="mb-4">We use your information to:</p>

          <ul className="list-disc space-y-2 pl-6">
            <li>Respond to your questions</li>
            <li>
              Send newsletters and updates (only if you choose to subscribe)
            </li>
            <li>Improve our website and content</li>
            <li>Understand how visitors use our website</li>
            <li>
              Share new products, activities, and resources you may enjoy
            </li>
          </ul>
        </section>

        {/* Email Newsletter */}
        <section className="border-b border-black/10 py-8">
          <h2 className="mb-4 text-2xl font-semibold text-[#173b70] tablet:text-3xl">
            Email Newsletter
          </h2>

          <p>
            If you subscribe to our newsletter, you may receive updates about
            new products, printable activities, blog posts, and special
            announcements.
          </p>

          <p className="mt-4">
            You can unsubscribe at any time by clicking the unsubscribe link
            in any email.
          </p>
        </section>

        {/* Cookies */}
        <section className="border-b border-black/10 py-8">
          <h2 className="mb-4 text-2xl font-semibold text-[#173b70] tablet:text-3xl">
            Cookies
          </h2>

          <p>
            Our website may use cookies to improve your browsing experience and
            help us understand how visitors use the site.
          </p>

          <p className="mt-4">
            You can disable cookies through your browser settings at any time.
            Please note that some features of the website may not function as
            intended if cookies are disabled.
          </p>
        </section>

        {/* Third-Party Services */}
        <section className="border-b border-black/10 py-8">
          <h2 className="mb-4 text-2xl font-semibold text-[#173b70] tablet:text-3xl">
            Third-Party Services
          </h2>

          <p>
            Our website may contain links to third-party websites, including
            Amazon. When you click these links, you leave the FeelieBees
            website. We are not responsible for the privacy practices or
            content of third-party websites.
          </p>

          <p className="mt-4">
            Purchases of FeelieBees products are currently completed through
            Amazon, and we do not collect or process payment information
            through this website.
          </p>
        </section>

        {/* Children's Privacy */}
        <section className="border-b border-black/10 py-8">
          <h2 className="mb-4 text-2xl font-semibold text-[#173b70] tablet:text-3xl">
            Children&apos;s Privacy
          </h2>

          <p>
            FeelieBees creates products for children, but this website is
            intended for parents, caregivers, and educators.
          </p>

          <p className="mt-4">
            We do not knowingly collect personal information from children
            under the age of 13.
          </p>
        </section>

        {/* Your Rights */}
        <section className="border-b border-black/10 py-8">
          <h2 className="mb-4 text-2xl font-semibold text-[#173b70] tablet:text-3xl">
            Your Rights
          </h2>

          <p>
            If you would like to update, correct, or delete your personal
            information, or if you have questions about this Privacy Policy,
            please contact us through our{" "}
            <Link
              href="/contact"
              className="
                font-semibold
                text-[#358453]
                underline
                underline-offset-4
                transition-colors
                hover:text-[#f15a29]
              "
            >
              Contact page
            </Link>
            .
          </p>
        </section>

        {/* Changes to This Policy */}
        <section className="pt-8">
          <h2 className="mb-4 text-2xl font-semibold text-[#173b70] tablet:text-3xl">
            Changes to This Policy
          </h2>

          <p>
            We may update this Privacy Policy from time to time. Any updates
            will be posted on this page.
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
            Questions about your privacy?
          </h2>

          <p className="mx-auto mt-2 max-w-[55ch] text-[15px]">
            We&apos;re happy to help if you have questions about this Privacy
            Policy or information you&apos;ve shared with FeelieBees.
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
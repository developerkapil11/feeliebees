
import type { Metadata } from "next";
import Image from "next/image";
import { Mail } from "lucide-react";
import { ContactForm } from "@/components/ui/forms";
import { SocialIcon } from "@/components/ui/social-icon";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact | FeelieBees",
  description:
    "Get in touch with FeelieBees about Heartly, free activities, classroom resources, or partnerships.",
};

export default function ContactPage() {
  return (
    <main
      id="main"
      className="relative isolate overflow-hidden bg-cream px-[6%] pb-8 pt-28 tablet:pt-32"
    >
      <Image
        src="/assets/contact/woodland-side-border.png"
        alt=""
        aria-hidden="true"
        fill
        priority
        sizes="100vw"
        className="pointer-events-none absolute inset-0 z-0 hidden h-full w-full object-fill object-top select-none min-[1280px]:block"
      />

      <div className="relative z-10 mx-auto max-w-5xl">
        <section
          className="grid items-center gap-1 text-center tablet:grid-cols-[.8fr_1.2fr] tablet:gap-3 tablet:text-left"
          aria-labelledby="contact-title"
        >
          <div className="relative mx-auto h-52 w-72 tablet:h-60 tablet:w-80">
            <Image
              src="/assets/contact/heartly-grass-patch.png"
              alt=""
              aria-hidden="true"
              width={520}
              height={174}
              className="absolute bottom-0 left-1/2 z-0 w-64 -translate-x-1/2 object-contain opacity-90 tablet:w-72"
            />

            <Image
              src="/assets/illustrated-icons/fox.webp"
              alt="Heartly the fox sitting in the garden"
              width={360}
              height={360}
              priority
              className="absolute bottom-0 left-1/2 z-10 w-48 -translate-x-1/2 object-contain tablet:w-56"
            />
          </div>

          <div className="pb-3 tablet:pb-0">
            <div className="relative inline-block">
              <h1
                id="contact-title"
                className="text-[clamp(40px,4vw,60px)] leading-[1.05] tracking-[-.04em] text-orange"
              >
                Let’s connect
              </h1>
            </div>

            <p className="mt-2 text-[clamp(18px,1.4vw,23px)] font-extrabold text-navy">
              We’d love to hear from you.
            </p>
          </div>
        </section>

        <section
          className="mt-1 tablet:mt-2"
          aria-label="Send FeelieBees a message"
        >
          <ContactForm />
        </section>

        {/* Compact contact information banner */}
        <aside className="mt-6 rounded-2xl bg-[#eff2df] px-4 py-4 text-center tablet:mt-8 tablet:px-8 tablet:py-5">
          <h2 className="text-2xl font-extrabold text-orange tablet:text-3xl">
            FeelieBees
          </h2>

          <div className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-3 text-sm text-navy tablet:gap-x-5 tablet:text-base">
            {site.email && (
              <a
                href={`mailto:${site.email}`}
                className="inline-flex min-w-0 items-center gap-2 break-all transition-opacity hover:opacity-70"
              >
                <Mail
                  aria-hidden="true"
                  className="size-5 shrink-0"
                  strokeWidth={1.8}
                />
                <span>{site.email}</span>
              </a>
            )}

            {site.email && site.instagram && (
              <span
                aria-hidden="true"
                className="hidden h-6 border-l border-[#cbd4b9] sm:block"
              />
            )}

            {site.instagram && (
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-opacity hover:opacity-70"
              >
                <SocialIcon name="instagram" />
                <span>Find us on Instagram</span>
              </a>
            )}
          </div>
        </aside>
      </div>
    </main>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Mail } from "lucide-react";
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
    <main id="main" className="bg-cream px-[6%] pb-12 pt-28 tablet:pt-32">
      <div className="mx-auto max-w-5xl">
        <section
          className="grid items-center gap-3 text-center tablet:grid-cols-[.8fr_1.2fr] tablet:text-left"
          aria-labelledby="contact-title"
        >
          <div className="relative mx-auto h-52 w-72 tablet:h-60 tablet:w-80">
            <Image
              src="/assets/illustrated-icons/sprout.webp"
              alt=""
              width={360}
              height={360}
              className="absolute bottom-3 left-0 w-24 -rotate-12 opacity-80"
            />
            <Image
              src="/assets/illustrated-icons/fox.webp"
              alt="Heartly the fox sitting in the garden"
              width={360}
              height={360}
              priority
              className="absolute bottom-0 left-1/2 z-10 w-48 -translate-x-1/2 object-contain tablet:w-56"
            />
            <Image
              src="/assets/illustrated-icons/butterfly.webp"
              alt=""
              width={360}
              height={360}
              className="absolute right-5 top-5 w-11 rotate-12"
            />
          </div>

          <div className="pb-5 tablet:pb-0">
            <h1
              id="contact-title"
              className="text-[clamp(48px,5vw,74px)] leading-none tracking-[-.04em] text-orange"
            >
              Let’s connect
            </h1>
            <p className="mt-3 text-[clamp(20px,1.75vw,28px)] font-extrabold text-[#49362d]">
              We’d love to hear from you.
            </p>
          </div>
        </section>

        <section className="mt-3" aria-label="Send FeelieBees a message">
          <ContactForm />
        </section>

        <aside className="relative mt-10 overflow-hidden rounded-3xl bg-[#eef2df] px-6 py-7 tablet:px-10 tablet:py-8">
          <Image
            src="/assets/illustrated-icons/sprout.webp"
            alt=""
            width={360}
            height={360}
            className="pointer-events-none absolute -bottom-5 -left-3 w-28 -rotate-12 opacity-75 tablet:w-36"
          />
          <Image
            src="/assets/illustrated-icons/sprout.webp"
            alt=""
            width={360}
            height={360}
            className="pointer-events-none absolute -bottom-5 -right-3 w-28 rotate-12 opacity-75 tablet:w-36"
          />

          <div className="relative z-10 mx-auto w-fit min-w-0">
            <h2 className="text-3xl text-[#49362d] tablet:text-4xl">
              FeelieBees
            </h2>
            <div className="mt-4 space-y-3 text-base text-[#49362d] tablet:text-lg">
              {site.email ? (
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-3 break-all transition-colors hover:text-[#327a4d]"
                >
                  <Mail className="size-6 shrink-0 text-[#5a713f]" />
                  {site.email}
                </a>
              ) : null}
              {site.instagram ? (
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 font-extrabold text-[#327a4d] underline decoration-1 underline-offset-4 hover:text-[#245c39]"
                >
                  <SocialIcon name="instagram" />
                  Find us on Instagram
                  <ArrowRight className="size-5 shrink-0" />
                </a>
              ) : null}
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}

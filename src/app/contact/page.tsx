import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
import { ContactForm } from "@/components/ui/forms";
import { SocialIcon } from "@/components/ui/social-icon";
import { PageIntro, pageWidth } from "@/components/ui/page-ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact | FeelieBees",
  description:
    "Get in touch with FeelieBees about Heartly, free activities, classroom resources, or partnerships.",
};
export default function ContactPage() {
  return (
    <main id="main">
      <PageIntro eyebrow="Good things start with hello" title="Let’s connect.">
        <p>
          A question, a little idea, or something you’d like to share? We’re
          glad you’re here.
        </p>
      </PageIntro>
      <section
        className={`${pageWidth} grid items-start gap-8 tablet:grid-cols-[1.5fr_1fr] tablet:gap-[4vw]`}
      >
        <div className="rounded-4xl border border-[#e8e1d0] bg-white p-6 shadow-[0_10px_40px_#08296505] tablet:p-[3vw]">
          <h2 className="text-[max(32px,2.7vw)]">Send a little hello</h2>
          <p className="mt-4 mb-7 text-[max(14px,1.05vw)] leading-relaxed">
            For questions about your Amazon order, please visit Your Orders on
            Amazon. For everything FeelieBees, leave us a note.
          </p>
          <ContactForm />
        </div>
        <aside className="space-y-6">
          <div className="rounded-4xl bg-[#eaf1df] p-6 tablet:p-[2.5vw]">
            <p className="mb-3 text-[max(11px,.85vw)] font-black tracking-widest text-[#598455] uppercase">
              {site.demo
                ? "Demo business details"
                : "Our little corner of the world"}
            </p>
            <h2 className="text-[max(30px,2.5vw)]">FeelieBees</h2>
            <p className="mt-3 text-[max(14px,1.05vw)]">
              Big Feelings. Brighter Tomorrows.
            </p>
            <div className="mt-7 space-y-5 text-[max(14px,1.05vw)]">
              {site.email && (
                <a
                  className="flex items-start gap-3 break-all hover:text-[#2e7f53]"
                  href={`mailto:${site.email}`}
                >
                  <Mail className="size-[1.3em] shrink-0" />
                  {site.email}
                </a>
              )}
              {site.phone && (
                <a
                  className="flex items-start gap-3 hover:text-[#2e7f53]"
                  href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}
                >
                  <Phone className="size-[1.3em] shrink-0" />
                  {site.phone}
                </a>
              )}
              {site.address && (
                <p className="flex items-start gap-3">
                  <MapPin className="size-[1.3em] shrink-0" />
                  <span>{site.address}</span>
                </p>
              )}
            </div>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 flex items-center gap-3 rounded-2xl bg-white p-4 text-[max(14px,1.05vw)] font-extrabold hover:text-coral"
            >
              <SocialIcon name="instagram" />
              Find us on Instagram
              <ArrowUpRight className="ml-auto size-5" />
            </a>
          </div>
          <div className="overflow-hidden rounded-4xl border border-[#e8e1d0] bg-[#fff4df]">
            <Image
              src="/assets/homepage/benefits-foxes-butterflies.webp"
              alt="Heartly and a young fox discovering butterflies together"
              width={2048}
              height={768}
              sizes="(max-width: 900px) 90vw, 35vw"
              className="h-auto w-full"
            />
            <div className="p-6">
              <h3 className="text-[max(22px,1.7vw)]">
                A quick answer might be waiting.
              </h3>
              <p className="mt-3 text-[max(14px,1.05vw)]">
                Visit our FAQ for helpful answers about the gift set and free
                downloads.
              </p>
              <Link
                className="mt-4 inline-block text-[max(14px,1.05vw)] font-extrabold text-[#3b8053] underline underline-offset-4"
                href="/faq"
              >
                Explore the FAQ
              </Link>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}

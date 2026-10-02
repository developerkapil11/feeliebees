import { FooterArt } from "@/components/ui/footer-art";
import Link from "next/link";
import { Logo } from "@/components/ui/brand";
import { SocialIcon } from "@/components/ui/social-icon";
import { ActivityRequestForm } from "@/components/ui/forms";
import { navigation, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer relative isolate grid overflow-hidden bg-[#eff2df]">
      <FooterArt />
      <div className="footer-content relative mx-auto grid w-[86%] grid-cols-2 gap-x-6 gap-y-8 pt-10 pb-32 text-[max(13px,1vw)] desktop:col-start-1 desktop:row-start-1 tablet:grid-cols-[1.3fr_.7fr_.8fr_1.4fr] tablet:gap-[3vw] tablet:pt-[3vw] tablet:pb-[10vw]">
        <div className="footer-brand col-span-full tablet:col-span-1">
          <Link href="/" aria-label="FeelieBees home">
            <Logo />
          </Link>
          <p className="mt-5 max-w-[30ch] text-[max(13px,1.05vw)] leading-relaxed">
            Playful tools to help children build emotional awareness, confidence
            and kindness.
          </p>
          {site.instagram && (
            <a
              className="mt-4 inline-flex min-h-11 items-center gap-3 text-[max(13px,1vw)] hover:text-coral"
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialIcon name="instagram" />
              Find us on Instagram
            </a>
          )}
        </div>
        <div className="footer-links">
          <h3 className="mb-4 text-[max(16px,1.3vw)]">Quick Links</h3>
          <nav aria-label="Footer navigation" className="grid gap-1">
            {navigation.map((item) => (
              <Link
                className="w-fit py-0.5 hover:text-orange"
                key={item.href}
                href={item.href}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="footer-links">
          <h3 className="mb-4 text-[max(16px,1.3vw)]">Helpful Info</h3>
          <nav aria-label="Helpful information" className="grid gap-2">
            <Link href="/faq#orders" className="hover:text-orange">
              Shipping & Returns
            </Link>
            <Link href="/faq" className="hover:text-orange">
              Product questions
            </Link>
            <Link href="/activities" className="hover:text-orange">
              For Parents & Educators
            </Link>
            <Link href="/privacy" className="hover:text-orange">
              Privacy
            </Link>
            <Link href="/contact" className="hover:text-orange">
              Get in touch
            </Link>
          </nav>
        </div>
        <div className="col-span-full tablet:col-span-1">
          <h3 className="mb-4 text-[max(16px,1.3vw)]">
            A little joy in your inbox
          </h3>
          <p className="mb-5 text-[max(13px,1.05vw)]">
            Get our free kindness activity to print and share.
          </p>
          <ActivityRequestForm compact />
        </div>
      </div>
      <p className="absolute bottom-5 left-[7%] text-[max(11px,.95vw)] text-white tablet:bottom-[5%]">
        © {new Date().getFullYear()} FeelieBees. All rights reserved.
      </p>
    </footer>
  );
}

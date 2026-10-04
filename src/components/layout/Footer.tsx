import Image from "next/image";
import Link from "next/link";

import { FooterLogo } from "@/components/ui/brand";
import { SocialIcon } from "@/components/ui/social-icon";
import { navigation, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer relative isolate overflow-hidden bg-[#eff2df]">
      {/* Main Footer Content */}
      <div className="footer-content mx-auto w-[86%] py-10 tablet:py-[4vw]">
        <div className="grid grid-cols-1 gap-10 tablet:grid-cols-[1.2fr_0.8fr_0.9fr] tablet:gap-[5vw]">
          {/* Brand */}
          <div className="footer-brand">
            <Link href="/" aria-label="FeelieBees home">
              <FooterLogo />
            </Link>
            <p className="mt-5 max-w-[38ch] text-[max(13px,1.05vw)] leading-relaxed">
              Thoughtfully designed stories and playful tools that help children
              recognize, understand, and share their feelings with the grownups
              they love.
            </p>
            {site.instagram && (
              <a
                className="mt-5 inline-flex min-h-11 items-center gap-3 text-[max(13px,1vw)] transition-colors hover:text-coral"
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SocialIcon name="instagram" />
                Find us on Instagram
              </a>
            )}
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h3 className="mb-4 text-[max(16px,1.3vw)] font-medium">
              Quick Links
            </h3>

            <nav
              aria-label="Footer navigation"
              className="grid gap-2 text-[max(13px,1vw)]"
            >
              {navigation.map((item) => (
                <Link
                  className="w-fit transition-colors hover:text-orange"
                  key={item.href}
                  href={item.href}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Heartly Illustration */}
          <div className="flex items-end justify-start tablet:justify-end">
            <div className="relative h-55 w-55 tablet:h-65 tablet:w-65">
              <Image
                src="/assets/footer/footer_right_img.png"
                alt="Heartly holding a heart"
                fill
                className="object-contain object-bottom"
                sizes="(max-width: 768px) 220px, 260px"
              />
            </div>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="mt-10 border-t border-black/15 pt-5 tablet:mt-[4vw] tablet:pt-[1.5vw]">
          <div className="flex flex-col gap-4 text-[max(11px,.95vw)] tablet:flex-row tablet:items-center tablet:justify-between">
            {/* Copyright */}
            <p className="text-black/75">
              © {new Date().getFullYear()} FeelieBees. All rights reserved.
            </p>

            {/* Legal Links */}
            <nav
              aria-label="Legal navigation"
              className="flex flex-wrap items-center gap-3"
            >
              <Link
                href="/privacy"
                className="transition-colors hover:text-orange"
              >
                Privacy Policy
              </Link>

              <span
                aria-hidden="true"
                className="text-black/40"
              >
                |
              </span>

              <Link
                href="/terms"
                className="transition-colors hover:text-orange"
              >
                Terms of Use
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
import Image from "next/image";
import Link from "next/link";

import { FooterLogo } from "@/components/ui/brand";
import { SocialIcon } from "@/components/ui/social-icon";

import { navigation, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer relative isolate overflow-hidden bg-[#eff2df]">
      {/* Main Footer Content */}
      <div className="relative z-10 mx-auto w-[86%]">
        <div
          className="
            grid
            grid-cols-1
            gap-8
            pt-8
            pb-6

            tablet:grid-cols-[1fr_2fr_1fr]
            tablet:items-start
            tablet:gap-[4vw]
            tablet:pt-[3vw]
            tablet:pb-4
          "
        >
          {/* Logo */}
          {/* Logo */}
          <div className="flex items-start justify-center tablet:justify-start">
            <Link
              href="/"
              aria-label="FeelieBees home"
              className="
                block
                w-47.5
                tablet:w-40
                desktop:w-65
                [&_svg]:block
                [&_svg]:h-auto
                [&_svg]:w-full
                [&_img]:block
                [&_img]:h-auto
                [&_img]:w-full
              "
            >
              <FooterLogo />
            </Link>
          </div>

          {/* Center Content */}
          <div className="pt-1 text-center tablet:pt-2 tablet:text-left">
            {/* Description */}
            <p
              className="
                max-w-[60ch]
                text-[14px]
                leading-[1.55]
                tablet:text-[max(13px,1.05vw)]
              "
            >
              Thoughtfully designed stories and playful tools that help children
              recognize, understand, and share their feelings with the grownups
              they love.
            </p>

            {/* Instagram */}
            {site.instagram && (
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-4
                  inline-flex
                  min-h-10
                  items-center
                  gap-3
                  text-[14px]
                  transition-colors
                  hover:text-orange
                  tablet:text-[max(13px,1vw)]
                "
              >
                <SocialIcon name="instagram" />
                Find us on Instagram
              </a>
            )}

            {/* Navigation */}
            <nav
              aria-label="Footer navigation"
              className="
                mt-6
                flex
                flex-wrap
                items-center
                justify-center
                gap-x-7
                gap-y-3
                text-[14px]
                tablet:justify-start
                tablet:text-[max(13px,1vw)]
              "
            >
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="whitespace-nowrap transition-colors hover:text-orange"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right Spacer */}
          <div className="hidden tablet:block" />
        </div>
      </div>

      {/* Meadow + Heartly */}
      <div
        className="
          relative
          mt-2
          h-37.5
          w-full
          tablet:mt-0
          tablet:h-43.75
          desktop:h-47.5
        "
      >
        {/* Full Meadow Image */}
        <Image
          src="/assets/footer/footer-meadow-border.png"
          alt=""
          width={2172}
          height={724}
          priority
          sizes="100vw"
          className="
            absolute
            -bottom-2.5
            left-0
            block
            h-auto
            w-full
            max-w-none
            tablet:-bottom-3.75
            desktop:-bottom-5
            "
          />

        {/* Heartly - positioned closer to the content and slightly above grass */}
        <div
          className="
            pointer-events-none
            absolute
            bottom-10
            right-[10%]
            z-10
            w-28.75
            tablet:bottom-18.75
            tablet:right-[12%]
            tablet:w-41.25
            desktop:bottom-12.5
            desktop:right-[12%]
            desktop:w-48.75
          "
        >
          <Image
            src="/assets/footer/heartly-holding-heart.png"
            alt="Heartly holding a heart"
            width={400}
            height={600}
            className="block h-auto w-full object-contain"
            sizes="
              (max-width: 767px) 115px,
              (max-width: 1024px) 165px,
              195px
            "
          />
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="relative z-20 mx-auto w-[86%] border-t border-black/10">
        <div
          className="
            flex
            min-h-14.5
            flex-col
            justify-center
            gap-3
            py-4
            text-[12px]

            tablet:flex-row
            tablet:items-center
            tablet:justify-between
            tablet:text-[max(11px,.95vw)]
          "
        >
          {/* Copyright */}
          <p className="text-black/65">
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

            <span aria-hidden="true" className="text-black/40">
              |
            </span>

            <Link href="/terms" className="transition-colors hover:text-orange">
              Terms of Use
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

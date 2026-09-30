import Image from "next/image";
import Link from "next/link";
import { v2Classes } from "../v2-styles";
import { ArrowRight } from "lucide-react";
import { site } from "@/lib/site";
import { DoodleHeart } from "@/components/ui/brand";
import { Emblem } from "@/components/ui/brand";

const buttonStyles = {
  base: "inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-[26px] border-2 border-white/60 px-[25px] py-3 text-[max(14px,1.45vw)] leading-[1.15] font-[850] whitespace-nowrap shadow-[0_3px_0_#a9791811,inset_0_0_0_1px_#fff3] transition duration-200 hover:-translate-y-[3px] hover:shadow-[0_6px_12px_#10234416] active:translate-y-0 [&>svg]:size-[21px] wide:min-h-[2.6em] wide:gap-[.5em] wide:rounded-[1.4em] wide:px-[1.25em] wide:py-[.6em] wide:[&>svg]:size-[1.1em]",
  pink: "bg-linear-[110deg,#ff5c86,#ff507c] text-white shadow-[0_4px_0_#f3a28b15,inset_0_0_0_1px_#ff98ae]",
  yellow: "bg-linear-[110deg,#ffca35,#ffc42c]",
  white:
    "border-[#f0e8d8] bg-[#fffefa] shadow-[0_3px_1px_#d7c5a12b]",
};

const amazonUrl = site.amazon;

function AmazonButton({ light = false }: { light?: boolean }) {
  return (
    <a
      href={amazonUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`button amazon-button ${buttonStyles.base} ${
        light ? buttonStyles.white : buttonStyles.yellow
      }`}
    >
      <span
        className="amazon-a relative -top-0.5 mr-0.5 font-[Georgia,serif] text-[29px] leading-6 font-extrabold after:absolute after:-bottom-0.5 after:-left-0.75 after:h-1.75 after:w-5 after:-rotate-9 after:rounded-[50%] after:border-b-[3px] after:border-[#ff9e00] after:content-[''] wide:text-[1.5em] wide:leading-none wide:after:bottom-[-0.08em] wide:after:left-[-0.1em] wide:after:h-[.3em] wide:after:w-[.8em] wide:after:border-b-[.12em]"
        aria-hidden="true"
      >
        a
      </span>

      Buy on Amazon
    </a>
  );
}

function BannerArt({
  name,
  alt = "",
  className = "",
  priority = false,
}: {
  name: string;
  alt?: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <picture className={className}>
      <source
        media="(max-width: 700px)"
        srcSet={`/assets/homepage/hero-portrait-mobile.webp`}
      />

      <Image
        src={`/assets/homepage/hero_banner_home.png`}
        alt={alt}
        width={1536}
        height={name === "story" ? 512 : 1024}
        unoptimized
        priority={priority}
      />
    </picture>
  );
}

export default function HeroV2() {
  return (
    <section
        className={v2Classes("v2-hero")}
        aria-labelledby="v2-hero-title"
      >
        <BannerArt
          name="hero"
          className={v2Classes("v2-hero-art")}
          alt="Heartly the fox explores happy, sad, thoughtful and excited feelings in a sunny woodland."
          priority
        />

        <div className={v2Classes("v2-hero-copy")}>
          <p className={v2Classes("v2-eyebrow")}>
            Emotional learning through play
          </p>

          <h1 id="v2-hero-title">
            Growing Emotional &amp;
            <br className={v2Classes("v2-desktop-break")} />
            Social Skills Through
            <br className={v2Classes("v2-desktop-break")} />
            <span>Play.</span> <DoodleHeart />
          </h1>

          <p className={v2Classes("v2-intro")}>
            At FeelieBees, we create playful stories, games, and hands-on
            activities that help children recognize, understand, and share
            their feelings while strengthening their connections with the
            people who care for them.
          </p>

          <div className={v2Classes("v2-hero-actions")}>
            <Link
              className={v2Classes("v2-button v2-coral")}
              href="/shop/heartlys-pocket-of-feelings"
            >
              Explore Heartly

              <span className={v2Classes("v2-arrow-circle")}>
                <ArrowRight />
              </span>
            </Link>

            <AmazonButton />
          </div>

          <ul className={v2Classes("v2-benefit-list")}>
            <li>
            <span className={v2Classes("v2-benefit-icon")}>
            <Emblem type="heart" />
            </span>

              <span>
                Builds
                <br />
                confidence
              </span>
            </li>

            <li>
            <span className={v2Classes("v2-benefit-icon")}>
            <Emblem type="sprout" />
            </span>

              <span>
                Supports
                <br />
                emotional growth
              </span>
            </li>

            <li>
            <span className={v2Classes("v2-benefit-icon")}>
            <Emblem type="people" />
            </span>

              <span>
                Strengthens
                <br />
                family connections
              </span>
            </li>
          </ul>
        </div>
      </section>
  );
}
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { Emblem } from "./brand";

export const button =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-2 px-6 py-3 text-[max(14px,1.05vw)] font-extrabold leading-tight shadow-sm transition hover:-translate-y-0.5 hover:shadow-md disabled:translate-y-0 disabled:opacity-50 [&>svg]:size-[1.1em]";
export const primaryButton = `${button} button-orange`;
export const amazonButton = `${button} button-amazon`;
export const field =
  "w-full min-w-0 rounded-2xl border border-[#dedfce] bg-white px-4 py-3 text-[max(15px,1.05vw)] outline-none placeholder:text-[#7e8792] focus:border-[#1b8db0] focus:ring-2 focus:ring-[#1b8db0]/20";
export const pageWidth = "mx-auto w-[88%] py-12 tablet:py-[4vw]";

type PageIntroArt =
  "story" | "shop" | "activities" | "blog" | "faq" | "contact" | "privacy";

const introArt: Record<
  PageIntroArt,
  { src: string; mobileSrc: string; align: "left" | "center" }
> = {
  story: {
    src: "/assets/hero-banners/story-mirrored-family.webp",
    mobileSrc: "/assets/hero-banners/story-family-mobile.png",
    align: "center",
  },
  shop: {
    src: "/assets/hero-banners/heartly-sunlit-meadow.webp",
    mobileSrc: "/assets/hero-banners/activities-fox-forest-mobile.png",
    align: "left",
  },
  activities: {
    src: "/assets/hero-banners/activities-woodland-meadow.webp",
    mobileSrc: "/assets/hero-banners/free-activities-woodland-mobile.png",
    align: "left",
  },
  blog: {
    src: "/assets/hero-banners/adventure-dreamy-foxes.webp",
    mobileSrc: "/assets/hero-banners/adventure-fox-meadow-mobile.png",
    align: "center",
  },
  faq: {
    src: "/assets/hero-banners/benefits-foxes-butterflies.webp",
    mobileSrc: "/assets/hero-banners/benefits-foxes-butterflies-mobile.png",
    align: "left",
  },
  contact: {
    src: "/assets/hero-banners/story-mirrored-family.webp",
    mobileSrc: "/assets/hero-banners/footer-fox-meadow-mobile.png",
    align: "center",
  },
  privacy: {
    src: "/assets/hero-banners/benefits-foxes-butterflies.webp",
    mobileSrc: "/assets/hero-banners/benefits-foxes-butterflies-mobile.png",
    align: "left",
  },
};

const introArtByTitle: Record<string, PageIntroArt> = {
  "Every little feeling matters.": "story",
  "Little gifts. Big feelings.": "shop",
  "Small activities. Happy discoveries.": "activities",
  "Little reads for growing hearts.": "blog",
  "Big questions. Friendly answers.": "faq",
  "Let’s connect.": "contact",
  "Privacy, in plain words.": "privacy",
};

export function PageIntro({
  eyebrow,
  title,
  children,
  art,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
  art?: PageIntroArt;
}) {
  const artwork = introArt[art ?? introArtByTitle[title] ?? "story"];
  const leftAligned = artwork.align === "left";
  return (
    <section className="relative grid aspect-square overflow-hidden border-b border-[#e8e6d6] bg-[#fff9e9] pt-20 tablet:aspect-auto tablet:min-h-[clamp(360px,34vw,540px)] tablet:pt-24">
      <Image
        src={artwork.mobileSrc}
        alt=""
        fill
        priority
        sizes="100vw"
        className="pointer-events-none z-0 object-cover object-center tablet:hidden"
      />
      <Image
        src={artwork.src}
        alt=""
        fill
        priority
        sizes="100vw"
        className="pointer-events-none z-0 hidden object-cover object-center tablet:block"
      />
      <div
        className={`pointer-events-none absolute inset-0 z-1 ${leftAligned ? "bg-[linear-gradient(90deg,#fff9e9fa_0%,#fff9e9e8_31%,#fff9e96b_52%,transparent_72%)] max-tablet:bg-[#fff9e9b8]" : "bg-[radial-gradient(ellipse_at_center,#fff9e9f7_0%,#fff9e9e8_30%,#fff9e975_58%,#fff9e914_82%)]"}`}
      />
      <div
        className={`relative z-2 col-start-1 row-start-1 mx-auto flex w-[88%] flex-col justify-center py-10 tablet:py-[3vw] ${leftAligned ? "items-center text-center tablet:items-start tablet:text-left" : "items-center text-center"}`}
      >
        <p className="mb-4 flex items-center gap-2 text-[max(11px,.85vw)] font-black tracking-[.15em] text-[#398357] uppercase">
          <Emblem type="heart" className="size-5!" />
          {eyebrow}
        </p>
        <h1
          className={`${leftAligned ? "tablet:max-w-[12ch]" : "max-w-[18ch]"} max-w-[18ch] text-[clamp(40px,4.5vw,180px)] leading-[1.04] tracking-[-.035em]`}
        >
          {title}
        </h1>
        <div
          className={`mt-5 max-w-[52ch] text-[max(15px,1.2vw)] leading-relaxed ${leftAligned ? "tablet:max-w-[38ch]" : ""}`}
        >
          {children}
        </div>
      </div>
    </section>
  );
}

export function TogetherBanner() {
  return (
    <section className="relative grid overflow-hidden border-y border-white bg-[#e5f6f9]">
      <Image
        src="/assets/hero-banners/story-family-mobile.png"
        alt="Fox families sharing a cozy moment together"
        width={1024}
        height={1536}
        sizes="(max-width: 900px) 100vw, 0px"
        className="col-start-1 row-start-1 aspect-square w-full self-end object-cover object-center opacity-35 tablet:hidden"
      />
      <Image
        src="/assets/hero-banners/story-mirrored-family.webp"
        alt=""
        width={2048}
        height={768}
        sizes="(min-width: 901px) 100vw, 0px"
        className="col-start-1 row-start-1 hidden h-auto w-full self-end tablet:block"
      />
      <div className="relative col-start-1 row-start-1 mx-auto flex w-[88%] flex-col items-center justify-center py-12 text-center tablet:w-[48%] tablet:py-[3vw]">
        <h2 className="text-[max(34px,3.2vw)]">
          Every little feeling belongs.
        </h2>
        <p className="mt-4 max-w-[40ch] text-[max(15px,1.15vw)]">
          A shared story. A little play. A moment to connect. There’s a place to
          start for every growing heart.
        </p>
        <Link href="/activities" className={`${primaryButton} mt-6`}>
          Find a free activity <ArrowRight />
        </Link>
      </div>
    </section>
  );
}

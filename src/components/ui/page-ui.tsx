import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart } from "lucide-react";
import type { ReactNode } from "react";

export const button =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-white/70 px-6 py-3 text-[max(14px,1.05vw)] font-extrabold leading-tight shadow-sm transition hover:-translate-y-0.5 hover:shadow-md disabled:translate-y-0 disabled:opacity-50 [&>svg]:size-[1.1em]";
export const yellowButton = `${button} bg-sunshine text-navy`;
export const pinkButton = `${button} bg-coral text-white`;
export const field =
  "w-full min-w-0 rounded-2xl border border-[#dedfce] bg-white px-4 py-3 text-[max(15px,1.05vw)] outline-none placeholder:text-[#7e8792] focus:border-[#1b8db0] focus:ring-2 focus:ring-[#1b8db0]/20";
export const pageWidth = "mx-auto w-[88%] py-12 tablet:py-[4vw]";

export function PageIntro({
  eyebrow,
  title,
  children,
  art = "story",
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
  art?: "story" | "activities";
}) {
  return (
    <section className="relative isolate grid overflow-hidden border-b border-[#e8e6d6] bg-[#fff9e9]">
      <Image
        src={`/assets/${art}.webp`}
        alt=""
        width={2172}
        height={724}
        priority
        sizes="100vw"
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover opacity-25 desktop:relative desktop:inset-auto desktop:col-start-1 desktop:row-start-1 desktop:h-auto desktop:self-center desktop:object-contain tablet:opacity-40"
      />
      <div className="col-start-1 row-start-1 mx-auto flex w-[88%] flex-col items-center justify-center py-12 text-center tablet:py-[4.5vw]">
        <p className="mb-4 flex items-center gap-2 text-[max(11px,.85vw)] font-black tracking-[.15em] text-[#398357] uppercase">
          <Heart className="size-4 fill-[#ffb1bf] text-coral" />
          {eyebrow}
        </p>
        <h1 className="max-w-[18ch] text-[clamp(40px,4.5vw,180px)] leading-[1.04] tracking-[-.035em]">
          {title}
        </h1>
        <div className="mt-5 max-w-[52ch] text-[max(15px,1.2vw)] leading-relaxed">
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
        src="/assets/story.webp"
        alt="Heartly and his woodland friends among the flowers"
        width={2172}
        height={724}
        sizes="100vw"
        className="col-start-1 row-start-1 h-auto w-full self-end max-tablet:opacity-35"
      />
      <div className="relative col-start-1 row-start-1 mx-auto flex w-[88%] flex-col items-center justify-center py-12 text-center tablet:w-[48%] tablet:py-[3vw]">
        <h2 className="text-[max(34px,3.2vw)]">
          Every little feeling belongs.
        </h2>
        <p className="mt-4 max-w-[40ch] text-[max(15px,1.15vw)]">
          A shared story. A little play. A moment to connect. There’s a place to
          start for every growing heart.
        </p>
        <Link href="/activities" className={`${yellowButton} mt-6`}>
          Find a free activity <ArrowRight />
        </Link>
      </div>
    </section>
  );
}

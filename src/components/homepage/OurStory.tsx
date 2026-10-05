import Image from "next/image";

export default function OurStory({ src }: { src: string }) {
  return (
    <section
      className="story-section relative h-87.5 overflow-hidden desktop:grid desktop:h-auto desktop:grid-cols-1 max-desktop:[&>.section-art]:top-auto max-desktop:[&>.section-art]:bottom-0 max-desktop:[&>.section-art]:h-41.25 max-desktop:[&>.section-art]:object-contain"
      id="our-story"
      aria-labelledby="story-title"
    >
      <Image
        src={src}
        unoptimized
        alt="Joyful forest friends splashing together in a woodland puddle"
        width={2048}
        height={768}
        sizes="100vw"
        className="section-art pointer-events-none absolute inset-0 z-0 h-full w-full object-cover desktop:relative desktop:inset-auto desktop:col-start-1 desktop:row-start-1 desktop:block desktop:h-auto desktop:object-contain"
      />

      <div className="story-copy relative mx-auto w-[94%] pt-6.5 text-left desktop:col-start-1 desktop:row-start-1 desktop:z-1 desktop:mx-0 desktop:ml-[6%] desktop:w-[38%] desktop:self-center desktop:py-4 [&_h2]:text-[35px] [&_h2]:whitespace-nowrap desktop:[&_h2]:text-[clamp(24px,3.1vw,64px)] [&>p]:mx-auto [&>p]:mt-3.25 [&>p]:mb-4.25 [&>p]:max-w-82.5 [&>p]:px-1.25 [&>p]:text-[13px] [&>p]:leading-[1.35] desktop:[&>p]:my-3 desktop:[&>p]:max-w-none desktop:[&>p]:px-0 desktop:[&>p]:text-[11px] desktop:[&>p]:leading-[1.27] tablet:[&>p]:text-[max(12px,1.3vw)] wide:[&>p]:mt-[.7em] wide:[&>p]:mb-[.9em] [&>.button]:min-h-11 [&>.button]:min-w-40 [&>.button]:text-sm desktop:[&>.button]:min-h-10 desktop:[&>.button]:min-w-38.75 desktop:[&>.button]:text-[13px] tablet:[&>.button]:min-h-11.25 tablet:[&>.button]:text-[max(14px,1.45vw)] min-[71.9375rem]:[&>.button]:min-h-13 min-[71.9375rem]:[&>.button]:min-w-47.5 wide:[&>.button]:min-h-[2.6em] wide:[&>.button]:min-w-[9.1em]">

      <div className="relative z-10 flex items-center gap-1">
        <span
          className="relative z-10 block h-6 w-6 shrink-0 desktop:h-8 desktop:w-8"
          aria-hidden="true"
        >
          <Image
            src="/icons/bee_icon.png"
            alt=""
            width={32}
            height={32}
            unoptimized
            sizes="32px"
            className="block h-full w-full object-contain"
          />
        </span>

        <h2 id="story-title">
          Meet FeelieBees
        </h2>
      </div>

        <p>
          Inspired by Dr. Gordon Neufeld’s developmental attachment approach,
          FeelieBees is rooted in the belief that children grow through warm,
          trusting relationships. Our products nurture connection, creating a
          safe and playful space for children and grownups to explore feelings
          together.
        </p>

        <p>
          We believe all feelings are natural and welcome. Each one plays a
          meaningful role in helping children grow, learn, and make sense of
          the world around them. Welcoming feelings goes hand in hand with
          setting caring boundaries and helping children express themselves in
          ways that are safe for themselves and others.
        </p>
      </div>
    </section>
  );
}
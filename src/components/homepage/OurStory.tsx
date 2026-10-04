import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const buttonStyles = {
  base: "inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-[26px] border-2 px-[25px] py-3 text-[max(14px,1.45vw)] leading-[1.15] font-[850] whitespace-nowrap shadow-[0_3px_0_#a9791811,inset_0_0_0_1px_#fff3] transition duration-200 hover:-translate-y-[3px] hover:shadow-[0_6px_12px_#10234416] active:translate-y-0 [&>svg]:size-[21px] wide:min-h-[2.6em] wide:gap-[.5em] wide:rounded-[1.4em] wide:px-[1.25em] wide:py-[.6em] wide:[&>svg]:size-[1.1em]",
  orange: "button-orange",
};

export default function OurStory({ src }: { src: string }) {
  const router = useRouter();
  return (
    <section
        className="story-section relative h-87.5 overflow-hidden desktop:grid desktop:h-auto desktop:grid-cols-1 max-desktop:[&>.section-art]:top-auto max-desktop:[&>.section-art]:bottom-0 max-desktop:[&>.section-art]:h-41.25 max-desktop:[&>.section-art]:object-contain"
        id="our-story"
        aria-labelledby="story-title"
      >
        <Image
          src={src}
          unoptimized
          alt="Fox families cuddling on green sofas on either side of a bright, cozy room"
          width={2048}
          height={768}
          sizes="100vw"
          className="section-art pointer-events-none absolute inset-0 z-0 h-full w-full object-cover desktop:relative desktop:inset-auto desktop:col-start-1 desktop:row-start-1 desktop:block desktop:h-auto desktop:object-contain"
        />
        <div className="story-copy relative mx-auto w-[94%] pt-6.5 text-center desktop:col-start-1 desktop:row-start-1 desktop:z-1 desktop:w-[40%] desktop:self-center desktop:py-4 [&>h2]:text-[35px] [&>h2]:whitespace-nowrap desktop:[&>h2]:text-[clamp(24px,3.1vw,64px)] [&>p]:mx-auto [&>p]:mt-3.25 [&>p]:mb-4.25 [&>p]:max-w-82.5 [&>p]:px-1.25 [&>p]:text-[13px] [&>p]:leading-[1.35] desktop:[&>p]:my-3 desktop:[&>p]:max-w-none desktop:[&>p]:px-0 desktop:[&>p]:text-[11px] desktop:[&>p]:leading-[1.27] tablet:[&>p]:text-[max(12px,1.3vw)] wide:[&>p]:mt-[.7em] wide:[&>p]:mb-[.9em] [&>.button]:min-h-11 [&>.button]:min-w-40 [&>.button]:text-sm desktop:[&>.button]:min-h-10 desktop:[&>.button]:min-w-38.75 desktop:[&>.button]:text-[13px] tablet:[&>.button]:min-h-11.25 tablet:[&>.button]:text-[max(14px,1.45vw)] min-[71.9375rem]:[&>.button]:min-h-13 min-[71.9375rem]:[&>.button]:min-w-47.5 wide:[&>.button]:min-h-[2.6em] wide:[&>.button]:min-w-[9.1em]">
          <h2 id="story-title">
            Meet FeelieBees
          </h2>
          <p>
            Inspired by Dr. Gordon Neufeld’s developmental attachment approach, FeelieBees is rooted in the belief that children grow through warm, trusting relationships. Our products nurture connection, creating a safe and playful space for children and grownups to explore feelings together.
          </p>
          <p>
            We believe all feelings are natural and welcome. Each one plays a meaningful role in helping children grow, learn, and make sense of the world around them. Welcoming feelings goes hand in hand with setting caring boundaries and helping children express themselves in ways that are safe for themselves and others.
          </p>
        </div>
      </section>
  );
}

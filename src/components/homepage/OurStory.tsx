import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const buttonStyles = {
  base: "inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-[26px] border-2 border-white/60 px-[25px] py-3 text-[max(14px,1.45vw)] leading-[1.15] font-[850] whitespace-nowrap shadow-[0_3px_0_#a9791811,inset_0_0_0_1px_#fff3] transition duration-200 hover:-translate-y-[3px] hover:shadow-[0_6px_12px_#10234416] active:translate-y-0 [&>svg]:size-[21px] wide:min-h-[2.6em] wide:gap-[.5em] wide:rounded-[1.4em] wide:px-[1.25em] wide:py-[.6em] wide:[&>svg]:size-[1.1em]",
  pink: "bg-linear-[110deg,#ff5c86,#ff507c] text-white shadow-[0_4px_0_#f3a28b15,inset_0_0_0_1px_#ff98ae]",
  yellow: "bg-linear-[110deg,#ffca35,#ffc42c]",
  white: "border-[#f0e8d8] bg-[#fffefa] shadow-[0_3px_1px_#d7c5a12b]",
};

export default function OurStory() {
  const router = useRouter();
  return (
    <section
      className="story-section relative h-[350px] overflow-hidden border-t-2 border-white/40 desktop:grid desktop:h-auto desktop:grid-cols-1 max-desktop:[&>.section-art]:top-auto max-desktop:[&>.section-art]:bottom-0 max-desktop:[&>.section-art]:h-[165px] max-desktop:[&>.section-art]:object-contain"
      id="our-story"
      aria-labelledby="story-title"
    >
      <Image
        src="/assets/homepage/story.webp"
        alt="Heartly, a little snail, and a friendly bunny in a flower-filled garden"
        width={2172}
        height={724}
        sizes="100vw"
        className="section-art pointer-events-none absolute inset-0 z-0 h-full w-full object-cover desktop:relative desktop:inset-auto desktop:col-start-1 desktop:row-start-1 desktop:block desktop:h-auto desktop:object-contain"
      />
      <div className="story-copy relative mx-auto w-[94%] pt-[26px] text-center desktop:col-start-1 desktop:row-start-1 desktop:z-1 desktop:w-[51%] desktop:self-center desktop:pt-0 desktop:pb-[4%] [&>h2]:text-[35px] [&>h2]:whitespace-nowrap desktop:[&>h2]:text-[38px] tablet:[&>h2]:text-[max(39px,4.4vw)] [&>p]:mx-auto [&>p]:mt-[13px] [&>p]:mb-[17px] [&>p]:max-w-[330px] [&>p]:px-[5px] [&>p]:text-[13px] [&>p]:leading-[1.35] desktop:[&>p]:my-3 desktop:[&>p]:max-w-none desktop:[&>p]:px-0 desktop:[&>p]:text-[11px] desktop:[&>p]:leading-[1.27] tablet:[&>p]:text-[max(12px,1.3vw)] wide:[&>p]:mt-[.7em] wide:[&>p]:mb-[.9em] [&>.button]:min-h-11 [&>.button]:min-w-40 [&>.button]:text-sm desktop:[&>.button]:min-h-10 desktop:[&>.button]:min-w-[155px] desktop:[&>.button]:text-[13px] tablet:[&>.button]:min-h-[45px] tablet:[&>.button]:text-[max(14px,1.45vw)] min-[71.9375rem]:[&>.button]:min-h-[52px] min-[71.9375rem]:[&>.button]:min-w-[190px] wide:[&>.button]:min-h-[2.6em] wide:[&>.button]:min-w-[9.1em]">
        <h2 id="story-title">
          <span
            className="sun-rays mr-0 inline-block align-middle font-[Arial,sans-serif] text-[.6em] text-[#ffb71c] desktop:mr-1.5 desktop:text-[.66em]"
            aria-hidden="true"
          >
            ☀
          </span>{" "}
          Meet FeelieBees{" "}
          <span
            className="little-leaf inline-block -rotate-45 align-middle font-[Georgia,serif] text-[.65em] text-[#438746] desktop:text-[.75em]"
            aria-hidden="true"
          >
            ❧
          </span>
        </h2>
        <p>
          At FeelieBees, we believe every feeling matters. Our resources
          <br className="desktop-break hidden desktop:inline" /> are created to
          help children build emotional awareness,
          <br className="desktop-break hidden desktop:inline" /> confidence and
          kindness — for a happier, brighter tomorrow.
        </p>
        <button
          className={`button button-yellow ${buttonStyles.base} ${buttonStyles.yellow}`}
          onClick={() => router.push("/our-story")}
        >
          Our Story <ArrowRight />
        </button>
      </div>
    </section>
  );
}

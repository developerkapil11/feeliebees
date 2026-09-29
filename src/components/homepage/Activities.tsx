import Image from "next/image"
import { DoodleHeart } from "@/components/ui/brand";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const buttonStyles = {
    base: "inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-[26px] border-2 border-white/60 px-[25px] py-3 text-[max(14px,1.45vw)] leading-[1.15] font-[850] whitespace-nowrap shadow-[0_3px_0_#a9791811,inset_0_0_0_1px_#fff3] transition duration-200 hover:-translate-y-[3px] hover:shadow-[0_6px_12px_#10234416] active:translate-y-0 [&>svg]:size-[21px] wide:min-h-[2.6em] wide:gap-[.5em] wide:rounded-[1.4em] wide:px-[1.25em] wide:py-[.6em] wide:[&>svg]:size-[1.1em]",
    pink: "bg-linear-[110deg,#ff5c86,#ff507c] text-white shadow-[0_4px_0_#f3a28b15,inset_0_0_0_1px_#ff98ae]",
    yellow: "bg-linear-[110deg,#ffca35,#ffc42c]",
    white: "border-[#f0e8d8] bg-[#fffefa] shadow-[0_3px_1px_#d7c5a12b]",
  };

export default function Activities() {
    const router = useRouter();
    return (
        <section
        className="activities-section relative h-100 overflow-hidden bg-[#b5eaff] desktop:grid desktop:h-auto desktop:grid-cols-1 max-desktop:[&>.section-art]:top-auto max-desktop:[&>.section-art]:bottom-0 max-desktop:[&>.section-art]:left-[-60%] max-desktop:[&>.section-art]:h-52.5 max-desktop:[&>.section-art]:w-[160%] max-desktop:[&>.section-art]:max-w-none max-desktop:[&>.section-art]:object-right"
        id="activities"
        aria-labelledby="activities-title"
        >
        <Image
          src="/assets/homepage/activities.webp"
          alt="Printable feelings charts, a Heartly picture, and a fox colouring page with colourful pencils"
          width={2172}
          height={724}
          sizes="100vw"
          className="section-art pointer-events-none absolute inset-0 z-0 h-full w-full object-cover desktop:relative desktop:inset-auto desktop:col-start-1 desktop:row-start-1 desktop:block desktop:h-auto desktop:object-contain"
        />
        <div className="activities-copy relative z-1 w-full px-[5%] pt-6.75 text-center desktop:col-start-1 desktop:row-start-1 desktop:w-[40%] desktop:self-center desktop:pt-0 desktop:pr-0 desktop:pl-[6%] desktop:text-left [&>h2]:text-[37px] tablet:[&>h2]:text-[max(39px,4.4vw)] [&_.doodle-heart]:ml-2.25] [&_.doodle-heart]:text-[.65em] [&>p]:mx-auto [&>p]:mt-3 [&>p]:mb-4.25 [&>p]:max-w-87.5 [&>p]:text-[13px] [&>p]:leading-[1.3] desktop:[&>p]:mx-0 desktop:[&>p]:mt-2.5 desktop:[&>p]:mb-4 desktop:[&>p]:max-w-none desktop:[&>p]:text-[11px] tablet:[&>p]:text-[max(13px,1.35vw)] wide:[&>p]:mt-[.5em] wide:[&>p]:mb-[.8em] [&>.button]:min-h-11.75 [&>.button]:min-w-66.25 [&>.button]:text-sm desktop:[&>.button]:min-h-10.5 desktop:[&>.button]:min-w-56.25 desktop:[&>.button]:text-[13px] tablet:[&>.button]:min-h-11.75 tablet:[&>.button]:min-w-60 tablet:[&>.button]:text-[max(14px,1.45vw)] min-[71.min-[71.9375rem]:[&>.button]:min-h-13 min-[71.9375rem]:[&>.button]:min-w-75 wide:[&>.button]:min-h-[2.6em] wide:[&>.button]:min-w-[14.4em]">
          <h2 id="activities-title">
            Free Activities <DoodleHeart />
          </h2>
          <p>
            Fun and engaging resources to help children learn about feelings
            <br className="desktop-break hidden desktop:inline" /> through play,
            creativity and connection.
          </p>
          <button
            className={`button button-yellow ${buttonStyles.base} ${buttonStyles.yellow}`}
            onClick={() => router.push("/activities")}
          >
            Explore Free Activities <ArrowRight />
          </button>
        </div>
        </section>
    )
}

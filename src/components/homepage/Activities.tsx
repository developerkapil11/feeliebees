import Image from "next/image";
import { DoodleHeart } from "@/components/ui/brand";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const buttonStyles = {
  base: "inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-[26px] border-2 px-[25px] py-3 text-[max(14px,1.45vw)] leading-[1.15] font-[850] whitespace-nowrap shadow-[0_3px_0_#a9791811,inset_0_0_0_1px_#fff3] transition duration-200 hover:-translate-y-[3px] hover:shadow-[0_6px_12px_#10234416] active:translate-y-0 [&>svg]:size-[21px] wide:min-h-[2.6em] wide:gap-[.5em] wide:rounded-[1.4em] wide:px-[1.25em] wide:py-[.6em] wide:[&>svg]:size-[1.1em]",
  orange: "button-orange",
};

export default function Activities({ src }: { src: string }) {
  const router = useRouter();
  return (
    <section
      className="activities-section relative flex flex-col overflow-hidden bg-[#fff3dc] desktop:grid desktop:min-h-110 desktop:grid-cols-[42%_58%]"
      id="activities"
      aria-labelledby="activities-title"
    >
      <div className="activities-copy relative z-1 order-1 w-full px-[6%] pt-9 pb-6 text-left desktop:col-start-1 desktop:row-start-1 desktop:self-center desktop:py-[5vw] desktop:pr-[4%] desktop:pl-[14%] [&>h2]:text-[37px] tablet:[&>h2]:text-[max(39px,4.4vw)] [&_.doodle-heart]:ml-2.25 [&_.doodle-heart]:text-[.65em] [&>p]:mx-0 [&>p]:mt-3 [&>p]:mb-4.25 [&>p]:max-w-87.5 [&>p]:text-[13px] [&>p]:leading-[1.3] desktop:[&>p]:mt-2.5 desktop:[&>p]:mb-4 desktop:[&>p]:max-w-none desktop:[&>p]:text-[11px] tablet:[&>p]:text-[max(13px,1.35vw)] wide:[&>p]:mt-[.5em] wide:[&>p]:mb-[.8em] [&>.button]:min-h-11.75 [&>.button]:min-w-66.25 [&>.button]:text-sm desktop:[&>.button]:min-h-10.5 desktop:[&>.button]:min-w-56.25 desktop:[&>.button]:text-[13px] tablet:[&>.button]:min-h-11.75 tablet:[&>.button]:min-w-60 tablet:[&>.button]:text-[max(14px,1.45vw)] min-[71.9375rem]:[&>.button]:min-h-13 min-[71.9375rem]:[&>.button]:min-w-75 wide:[&>.button]:min-h-[2.6em] wide:[&>.button]:min-w-[14.4em]">
        <h2 id="activities-title">
          Free Activities <DoodleHeart />
        </h2>
        <p>
          Explore free printable activities that invite children and grownups to play, create, and talk about feelings together.
        </p>
        <button
          className={`button ${buttonStyles.base} ${buttonStyles.orange}`}
          onClick={() => router.push("/activities")}
        >
          Explore Free Activities <ArrowRight />
        </button>
      </div>
      <div className="relative order-2 min-h-77 px-[5%] pt-4 pb-8 desktop:col-start-2 desktop:row-start-1 desktop:min-h-110 desktop:self-center desktop:px-[5%] desktop:py-[7%]">
        <Image
          src="/assets/homepage/activity_img_pencils.png"
          alt="Two woodland coloring sheets with colored pencils"
          width={1664}
          height={1200}
          sizes="(max-width: 700px) 90vw, 48vw"
          className="relative z-1 mx-auto w-[92%] desktop:mr-[8%] desktop:w-[86%]"
        />
      </div>
    </section>
  );
}

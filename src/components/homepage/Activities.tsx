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
      className="activities-section relative flex flex-col overflow-hidden bg-cream desktop:grid desktop:min-h-[440px] desktop:grid-cols-1"
      id="activities"
      aria-labelledby="activities-title"
    >
      <Image
        src={src}
        unoptimized
        alt="Heartly, fox family and woodland friends celebrating in a flower-filled meadow"
        width={1958}
        height={803}
        sizes="100vw"
        className="section-art pointer-events-none relative order-2 block h-auto w-full self-center desktop:col-start-1 desktop:row-start-1 desktop:h-full desktop:self-stretch desktop:object-cover"
      />
      <div className="activities-copy relative z-1 order-1 w-full px-[5%] pt-[27px] pb-6 text-left desktop:col-start-1 desktop:row-start-1 desktop:w-[50%] desktop:self-center desktop:py-[3vw] desktop:pr-[6%] desktop:pl-[6%] desktop:text-left [&>h2]:text-[37px] tablet:[&>h2]:text-[max(39px,4.4vw)] [&_.doodle-heart]:ml-[9px] [&_.doodle-heart]:text-[.65em] [&>p]:mx-0 [&>p]:mt-3 [&>p]:mb-[17px] [&>p]:max-w-[350px] [&>p]:text-[13px] [&>p]:leading-[1.3] desktop:[&>p]:mx-0 desktop:[&>p]:mt-2.5 desktop:[&>p]:mb-4 desktop:[&>p]:max-w-none desktop:[&>p]:text-[11px] tablet:[&>p]:text-[max(13px,1.35vw)] wide:[&>p]:mt-[.5em] wide:[&>p]:mb-[.8em] [&>.button]:min-h-[47px] [&>.button]:min-w-[265px] [&>.button]:text-sm desktop:[&>.button]:min-h-[42px] desktop:[&>.button]:min-w-[225px] desktop:[&>.button]:text-[13px] tablet:[&>.button]:min-h-[47px] tablet:[&>.button]:min-w-60 tablet:[&>.button]:text-[max(14px,1.45vw)] min-[71.9375rem]:[&>.button]:min-h-[52px] min-[71.9375rem]:[&>.button]:min-w-[300px] wide:[&>.button]:min-h-[2.6em] wide:[&>.button]:min-w-[14.4em]">
        <h2 id="activities-title">
          Free Activities <DoodleHeart />
        </h2>
        <p>
          Fun and engaging resources to help children learn about feelings
          <br className="desktop-break hidden desktop:inline" /> through play,
          creativity and connection.
        </p>
        <button
          className={`button ${buttonStyles.base} ${buttonStyles.orange}`}
          onClick={() => router.push("/activities")}
        >
          Explore Free Activities <ArrowRight />
        </button>
      </div>
    </section>
  );
}

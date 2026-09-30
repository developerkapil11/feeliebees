import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { site } from "@/lib/site";
import { type EmblemType } from "@/components/ui/brand";
import { Emblem } from "@/components/ui/brand";

const buttonStyles = {
  base: "inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-[26px] border-2 border-white/60 px-[25px] py-3 text-[max(14px,1.45vw)] leading-[1.15] font-[850] whitespace-nowrap shadow-[0_3px_0_#a9791811,inset_0_0_0_1px_#fff3] transition duration-200 hover:-translate-y-[3px] hover:shadow-[0_6px_12px_#10234416] active:translate-y-0 [&>svg]:size-[21px] wide:min-h-[2.6em] wide:gap-[.5em] wide:rounded-[1.4em] wide:px-[1.25em] wide:py-[.6em] wide:[&>svg]:size-[1.1em]",
  pink: "bg-linear-[110deg,#ff5c86,#ff507c] text-white shadow-[0_4px_0_#f3a28b15,inset_0_0_0_1px_#ff98ae]",
  yellow: "bg-linear-[110deg,#ffca35,#ffc42c]",
  white: "border-[#f0e8d8] bg-[#fffefa] shadow-[0_3px_1px_#d7c5a12b]",
};

const amazonUrl = site.amazon;

function AmazonButton({ light = false }: { light?: boolean }) {
  return (
    <a
      href={amazonUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`button amazon-button ${buttonStyles.base} ${light ? buttonStyles.white : buttonStyles.yellow}`}
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

export default function Hero({ src }: { src: string }) {
    return (
      <section
        className="hero relative flex min-h-195 flex-col overflow-hidden bg-[#fff9eb] desktop:grid desktop:min-h-0 desktop:grid-cols-1 [&_h1]:mb-4.75 [&_h1]:text-center [&_h1]:text-[clamp(39px,8.7vw,54px)] [&_h1]:leading-none [&_h1]:tracking-[-.035em] [&_h1>span]:text-orange max-desktop:[&_h1>br:first-of-type]:hidden desktop:[&_h1]:mb-4.5 desktop:[&_h1]:text-left desktop:[&_h1]:text-[41px] desktop:[&_h1]:leading-[.91] tablet:[&_h1]:text-[max(43px,4.4vw)] min-[71.9375rem]:[&_h1]:mb-6.25 wide:[&_h1]:mb-[.4em]"
        aria-labelledby="hero-title"
      >
        <Image
          src={src}
          alt="Heartly the smiling fox with his storybook, colourful feelings cards and heart tokens in a magical woodland"
          width={1774}
          height={887}
          priority
          sizes="100vw"
          className="section-art pointer-events-none absolute inset-0 z-0 h-full w-full object-cover desktop:relative desktop:inset-auto desktop:col-start-1 desktop:row-start-1 desktop:block desktop:h-auto desktop:object-contain hero-art max-desktop:top-auto max-desktop:bottom-0 max-desktop:left-[-70%] max-desktop:h-85 max-desktop:w-[170%] max-desktop:max-w-none max-desktop:object-right"
        />
        <div className="hero-inner relative px-[6%] pt-8 desktop:col-start-1 desktop:row-start-1 desktop:z-1 desktop:pt-[4%] desktop:pr-0 desktop:pl-[9%] min-[71.9375rem]:pt-[4.7%] min-[71.9375rem]:pl-[10%] max-[23.75rem]:px-[5%]">
          <div className="hero-copy relative z-1 w-full desktop:w-[47%] tablet:w-[46%] min-[71.9375rem]:w-[44%]">
            <p className="eyebrow mb-3 text-center text-[10px] font-[850] tracking-[.015em] uppercase desktop:mb-2.75 desktop:text-left tablet:text-[max(10px,1.17vw)] wide:mb-[.65em]">
              A kinder, brighter way to explore emotions
            </p>
            <h1 id="hero-title">
              Helping little hearts <br />
              understand
              <br />
              <span>big feelings</span>
            </h1>
            <p className="hero-description mx-auto max-w-101.25 text-center text-sm leading-[1.45] font-[750] desktop:mx-0 desktop:max-w-none desktop:text-left desktop:text-xs tablet:text-sm min-[71.9375rem]:text-[max(13px,1.36vw)] max-[23.75rem]:text-[13px]">
              Heartly’s Pocket of Feelings helps children
              <br className="desktop-break hidden desktop:inline" /> recognize,
              understand and express their emotions
              <br className="desktop-break hidden desktop:inline" /> through fun
              stories, activities and gentle guidance.
            </p>
            <div className="hero-buttons mt-5 flex justify-center gap-3 desktop:mt-4.5 desktop:justify-start desktop:gap-2.5 min-[71.9375rem]:mt-5.75 min-[71.9375rem]:gap-3.75 wide:mt-[1.15em] wide:gap-[.75em] [&>.button]:min-h-11.75 [&>.button]:px-4.25 [&>.button]:py-2.75 [&>.button]:text-[13px] desktop:[&>.button]:min-h-10.5 desktop:[&>.button]:px-3 desktop:[&>.button]:text-xs tablet:[&>.button]:min-h-11.5 tablet:[&>.button]:px-3.75 tablet:[&>.button]:text-[max(13px,1.31vw)] min-[71.9375rem]:[&>.button]:min-h-13.5 min-[71.9375rem]:[&>.button]:px-5.25 min-[71.9375rem]:[&>.button]:py-3.25 wide:[&>.button]:min-h-[2.85em] wide:[&>.button]:px-[1.1em] wide:[&>.button]:py-[.7em] max-[23.75rem]:gap-2 max-[23.75rem]:[&>.button]:px-3 max-[23.75rem]:[&>.button]:text-xs">
              <Link
                className={`button button-pink ${buttonStyles.base} ${buttonStyles.pink}`}
                href="/shop"
              >
                Explore Heartly <ArrowRight />
              </Link>
              <AmazonButton light />
            </div>
            <div className="hero-features relative isolate mx-auto mt-6 flex w-full max-w-97.5 items-start gap-3 desktop:mx-0 desktop:mt-5 desktop:w-[95%] desktop:max-w-none desktop:gap-[4%] tablet:mt-5.5 min-[71.9375rem]:mt-[clamp(22px,2.45vw,45px)] min-[71.9375rem]:w-[94%] wide:mt-[2.45vw] desktop:before:absolute desktop:before:-inset-x-3 desktop:before:-inset-y-2.5 desktop:before:-z-1 desktop:before:rounded-[40%] desktop:before:bg-[#fff9ebdf] desktop:before:blur-[13px] desktop:before:content-[''] [&>div]:flex [&>div]:flex-1 [&>div]:flex-col [&>div]:items-center [&>div]:text-center [&>div>span:last-child]:mt-1.75 [&>div>span:last-child]:text-[10px] [&>div>span:last-child]:leading-[1.15] [&>div>span:last-child]:font-black desktop:[&>div>span:last-child]:text-[11px] tablet:[&>div>span:last-child]:text-[max(10px,.95vw)] wide:[&>div>span:last-child]:mt-[.5em] max-desktop:[&_.emblem]:size-8.5">
              {(
                [
                  {
                    icon: "heart",
                    text: (
                      <>
                        Builds
                        <br />
                        Emotional Skills
                      </>
                    ),
                  },
                  {
                    icon: "sprout",
                    text: (
                      <>
                        Fun &amp;
                        <br />
                        Engaging
                      </>
                    ),
                  },
                  {
                    icon: "star",
                    text: (
                      <>
                        Loved by
                        <br />
                        Families &amp; Educators
                      </>
                    ),
                  },
                  {
                    icon: "people",
                    text: (
                      <>
                        Ages
                        <br />
                        3–7
                      </>
                    ),
                  },
                ] as { icon: EmblemType; text: ReactNode }[]
              ).map(({ icon, text }) => (
                <div key={icon}>
                  <Emblem type={icon} />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
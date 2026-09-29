import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import type { ReactNode } from "react";
import { type EmblemType } from "@/components/ui/brand";
import { Emblem } from "@/components/ui/brand";

export default function Product() {
    const router = useRouter();
    return (
        <section
        className="product-section flex flex-col bg-[radial-gradient(ellipse_at_30%_60%,#fffdf8,#fbf5e8)] desktop:grid desktop:grid-cols-[43%_57%]"
        id="shop"
        aria-labelledby="product-title"
      >
        <div className="product-copy w-full self-center px-[6%] pt-8.75 pb-7.5 text-center desktop:py-[6.5%] desktop:pr-[6%] desktop:pb-[4%] desktop:pl-[13%] desktop:text-left min-[71.9375rem]:pl-[13.8%] [&>h2]:mb-3.75 [&>h2]:text-[41px] desktop:[&>h2]:mb-4.25 desktop:[&>h2]:text-[37px] tablet:[&>h2]:text-[max(39px,4.4vw)] wide:[&>h2]:mb-[.27em] [&>p]:mx-auto [&>p]:max-w-85 [&>p]:text-sm [&>p]:leading-[1.4] desktop:[&>p]:mx-0 desktop:[&>p]:max-w-none desktop:[&>p]:text-xs tablet:[&>p]:text-[max(14px,1.4vw)]">
          <h2 id="product-title">
            Heartly’s
            <br />
            Pocket of Feelings
          </h2>
          <p>
            A playful and meaningful way for children to
            <br className="desktop-break hidden desktop:inline" /> explore,
            understand and express their emotions.
          </p>
          <div className="product-features mx-auto my-6 grid max-w-95 grid-cols-4 gap-3 desktop:mx-0 desktop:my-4.5 desktop:max-w-none desktop:gap-1 tablet:gap-1.5 min-[71.9375rem]:mt-6 min-[71.9375rem]:mb-5.5 min-[71.9375rem]:gap-2.5 wide:mt-[1.2em] wide:mb-[1.1em] wide:gap-[.5em] [&>div]:flex [&>div]:flex-col [&>div]:items-center [&>div]:text-center [&>div]:text-[13px] [&>div]:leading-[1.17] desktop:[&>div]:text-[11px] tablet:[&>div]:text-[max(12px,1.35vw)] [&_.emblem-circle]:mb-2.5 [&_.emblem-circle]:size-16 desktop:[&_.emblem-circle]:size-13.25 tablet:[&_.emblem-circle]:size-15.25 min-[71.9375rem]:[&_.emblem-circle]:size-[clamp(66px,6.65vw,109px)] wide:[&_.emblem-circle]:mb-[.5em] wide:[&_.emblem-circle]:size-[6.65vw] [&_.emblem-heart]:bg-[#ffebc3] [&_.emblem-heart_svg]:fill-white [&_.emblem-heart_svg]:stroke-orange [&_.emblem-heart_svg]:stroke-3 max-[23.75rem]:gap-1.75 max-[23.75rem]:[&_.emblem-circle]:size-14.75">
            {(
              [
                {
                  icon: "book",
                  text: (
                    <>
                      Beautiful
                      <br />
                      Storybook
                    </>
                  ),
                },
                {
                  icon: "cards",
                  text: (
                    <>
                      9 Feeling
                      <br />
                      Hearts
                    </>
                  ),
                },
                {
                  icon: "heart",
                  text: (
                    <>
                      9 Emotion
                      <br />
                      Cards
                    </>
                  ),
                },
                {
                  icon: "sprout",
                  text: (
                    <>
                      Plush Fox
                      <br />
                      Companion
                    </>
                  ),
                },
              ] as { icon: EmblemType; text: ReactNode }[]
            ).map(({ icon, text }) => (
              <div key={icon}>
                <Emblem type={icon} circle />
                <span>{text}</span>
              </div>
            ))}
          </div>
          <button
            className="button inline-flex min-h-13 items-center justify-center gap-2.5 rounded-[26px] border-2 border-white/60 px-6.25 py-3 text-[max(14px,1.45vw)] leading-[1.15] font-[850] whitespace-nowrap shadow-[0_3px_0_#a9791811,inset_0_0_0_1px_#fff3] transition duration-200 hover:-translate-y-0.75 hover:shadow-[0_6px_12px_#10234416] active:translate-y-0 [&>svg]:size-5.25 wide:min-h-[2.6em] wide:gap-[.5em] wide:rounded-[1.4em] wide:px-[1.25em] wide:py-[.6em] wide:[&>svg]:size-[1.1em] button-pink bg-linear-[110deg,#ff5c86,#ff507c] text-white shop-now min-w-52.5 text-base desktop:min-h-11.5 desktop:min-w-45 tablet:min-h-13 tablet:text-[max(14px,1.45vw)] min-[71.9375rem]:min-h-15.5 min-[71.9375rem]:min-w-56.25 wide:min-w-[10.8em]"
            onClick={() => router.push("/shop")}
          >
            Shop Now <ArrowRight />
          </button>
        </div>
        <div className="product-image relative aspect-[1.5] w-full self-center overflow-hidden desktop:aspect-auto desktop:border-l-2 desktop:border-white [&>img]:h-full [&>img]:w-full [&>img]:object-contain desktop:[&>img]:relative desktop:[&>img]:block desktop:[&>img]:h-auto">
          <Image
            src="/assets/homepage/product.webp"
            alt="The complete Heartly’s Pocket of Feelings set: illustrated book, fox, drawstring bag, emotion cards and colourful heart tokens"
            width={1536}
            height={1024}
            sizes="(max-width: 700px) 100vw, 57vw"
            className="object-cover"
          />
        </div>
      </section>
    )
}

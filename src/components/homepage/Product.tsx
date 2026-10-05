import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const productFeatures = [
  {
    image: "/assets/product-icons/story-book-cutout.png",
    alt: "Heartly's Pocket of Feelings storybook",
    lines: ["Beautiful", "Storybook"],
    imageClass: "object-contain",
  },
  {
    image: "/assets/product-icons/fox-plush-cutout.png",
    alt: "Heartly plush fox companion",
    lines: ["Plush Fox", "Companion"],
    imageClass: "object-contain",
  },
  {
    image: "/assets/product-icons/feeling-hearts-sheet.png",
    alt: "Nine illustrated feeling hearts",
    lines: ["9 Feeling", "Hearts"],
    imageClass: "object-contain",
  },
  {
    image: "/assets/product-icons/emotion-cards-fan.png",
    alt: "Nine Heartly emotion cards",
    lines: ["9 Emotion", "Cards"],
    imageClass: "object-contain",
  },
];

export default function Product({ src }: { src: string }) {
  const router = useRouter();
  return (
    <section
      className="product-section flex flex-col bg-white desktop:grid desktop:grid-cols-[43%_57%]"
      id="shop"
      aria-labelledby="product-title"
    >
      <div className="product-copy relative z-1 w-full self-center desktop:col-start-1 desktop:row-start-1 px-[6%] pt-8.75 pb-7.5 text-center desktop:py-[6.5%] desktop:pr-[6%] desktop:pb-[4%] desktop:pl-[13%] desktop:text-left min-[71.9375rem]:pl-[13.8%] [&>h2]:mb-3.75 [&>h2]:text-[41px] desktop:[&>h2]:mb-4.25 desktop:[&>h2]:text-[37px] tablet:[&>h2]:text-[max(39px,4.4vw)] wide:[&>h2]:mb-[.27em] [&>p]:mx-auto [&>p]:max-w-85 [&>p]:text-sm [&>p]:leading-[1.4] desktop:[&>p]:mx-0 desktop:[&>p]:max-w-none desktop:[&>p]:text-xs tablet:[&>p]:text-[max(14px,1.4vw)]">
        <span className="eyebrow mb-3 text-center text-[10px] font-[850] tracking-[.015em] uppercase desktop:mb-2.75 desktop:text-left tablet:text-[max(10px,1.17vw)] wide:mb-[.65em]">
          Discover Our Signature Gift Set 
        </span>
        <h2 id="product-title">
          Heartly’s
          <br />
          Pocket of Feelings
        </h2>
        <p>
        A playful gift set that makes talking about feelings easier, more natural, and more fun.
        How It Works- Read Heartly’s story, choose a feeling heart from his pocket, and place it on his chest to share how you feel. Explore the matching emotion card together to keep the conversation going.
 
        </p>
        <div className="product-features mx-auto my-6 grid max-w-95 grid-cols-4 gap-3 desktop:mx-0 desktop:my-4.5 desktop:max-w-none desktop:gap-1 tablet:gap-1.5 min-[71.9375rem]:mt-6 min-[71.9375rem]:mb-5.5 min-[71.9375rem]:gap-2.5 wide:mt-[1.2em] wide:mb-[1.1em] wide:gap-[.5em] [&>div]:flex [&>div]:flex-col [&>div]:items-center [&>div]:text-center [&>div]:text-[13px] [&>div]:leading-[1.17] desktop:[&>div]:text-[11px] tablet:[&>div]:text-[max(12px,1.35vw)] max-[23.75rem]:gap-1.75">
          {productFeatures.map(({ image, alt, lines, imageClass }) => (
            <div key={image}>
              <div className="relative mb-2.5 h-20 w-full max-w-22 overflow-hidden desktop:h-18 desktop:max-w-20 tablet:h-21 tablet:max-w-23 min-[71.9375rem]:h-[clamp(82px,6.65vw,109px)] min-[71.9375rem]:max-w-[clamp(90px,7.4vw,120px)] wide:mb-[.5em] max-[23.75rem]:h-18 max-[23.75rem]:max-w-19">
                <Image
                  src={image}
                  alt={alt}
                  fill
                  unoptimized
                  sizes="(min-width: 1151px) 7.4vw, (min-width: 768px) 92px, 88px"
                  className={imageClass}
                />
              </div>
              <span>
                {lines[0]}
                <br />
                {lines[1]}
              </span>
            </div>
          ))}
        </div>
        <button
          className="button inline-flex min-h-13 items-center justify-center gap-2.5 rounded-[26px] border-2 px-6.25 py-3 text-[max(14px,1.45vw)] leading-[1.15] font-[850] whitespace-nowrap shadow-[0_3px_0_#a9791811,inset_0_0_0_1px_#fff3] transition duration-200 hover:-translate-y-0.75 hover:shadow-[0_6px_12px_#10234416] active:translate-y-0 [&>svg]:size-5.25 wide:min-h-[2.6em] wide:gap-[.5em] wide:rounded-[1.4em] wide:px-[1.25em] wide:py-[.6em] wide:[&>svg]:size-[1.1em] button-orange shop-now min-w-52.5 text-base desktop:min-h-11.5 desktop:min-w-45 tablet:min-h-13 tablet:text-[max(14px,1.45vw)] min-[71.9375rem]:min-h-15.5 min-[71.9375rem]:min-w-56.25 wide:min-w-[10.8em]"
          onClick={() => router.push("/shop")}
        >
          Learn More <ArrowRight />
        </button>
      </div>
      <div className="product-image relative aspect-2078/757 w-full self-stretch overflow-hidden desktop:col-span-2 desktop:col-start-1 desktop:row-start-1">
        <Image
          src={src}
          unoptimized
          alt="Heartly holding yellow flowers in a sunny meadow filled with colorful blossoms"
          width={2078}
          height={757}
          sizes="100vw"
          className="absolute inset-0 h-full w-full object-contain min-[71.9375rem]:object-cover"
        />
      </div>
    </section>
  );
}

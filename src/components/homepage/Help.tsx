import Image from "next/image"
import { type EmblemType } from "@/components/ui/brand";
import { Emblem } from "@/components/ui/brand";

const benefits: { icon: EmblemType; title: string; text: string }[] = [
    {
      icon: "bulb",
      title: "Recognize Feelings",
      text: "Helps children identify and name their emotions.",
    },
    {
      icon: "heart",
      title: "Build Confidence",
      text: "Encourages self-expression and builds emotional resilience.",
    },
    {
      icon: "people",
      title: "Stronger Relationships",
      text: "Promotes empathy, kindness and positive social skills.",
    },
    {
      icon: "sprout",
      title: "Real-Life Skills",
      text: "Prepares children for everyday situations in a gentle and fun way.",
    },
];
  
export default function Help() {
    return (
        <section
        className="benefits-section relative overflow-hidden bg-[#fffaf1] pb-73.75 desktop:grid desktop:grid-cols-1 desktop:pb-0"
        aria-labelledby="benefits-title"
        >
        <div className="benefits-photo absolute right-0 bottom-0 h-73.75 w-full desktop:relative desktop:inset-auto desktop:col-start-1 desktop:row-start-1 desktop:ml-auto desktop:h-auto desktop:w-[45%] desktop:self-end [&>img]:h-full [&>img]:w-full [&>img]:object-contain [&>img]:object-center [&>img]:mask-[linear-gradient(to_bottom,transparent,#000_8%)] desktop:[&>img]:relative desktop:[&>img]:block desktop:[&>img]:h-auto desktop:[&>img]:mask-[linear-gradient(to_right,transparent,#000_13%)]">
          <Image
            src="/assets/homepage/hug.webp"
            alt="A happy child cuddles her soft Heartly fox"
            width={1536}
            height={1024}
            sizes="(max-width: 700px) 70vw, 38vw"
            className="object-cover"
          />
        </div>
        <div className="benefits-content relative z-1 w-full px-[5%] pt-6.75 pb-5 desktop:col-start-1 desktop:row-start-1 desktop:w-[66%] desktop:pt-[2%] desktop:pr-0 desktop:pb-[3%] desktop:pl-[4.7%] [&>h2]:mb-6 [&>h2]:flex [&>h2]:w-full [&>h2]:items-center [&>h2]:justify-center [&>h2]:gap-4.25 [&>h2]:text-[35px] desktop:[&>h2]:mb-3.75 desktop:[&>h2]:w-[150%] desktop:[&>h2]:gap-5.5 desktop:[&>h2]:text-[33px] tablet:[&>h2]:text-[max(35px,3.6vw)] min-[71.9375rem]:[&>h2]:mb-5 wide:[&>h2]:mb-[.4em] wide:[&>h2]:gap-[.425em] [&>h2_.emblem]:h-8.5 [&>h2_.emblem]:w-7 [&>h2_.emblem:first-child]:-rotate-20 [&>h2_.emblem:last-child]:rotate-20 wide:[&>h2_.emblem]:h-[.66em] wide:[&>h2_.emblem]:w-[.55em]">
          <h2 id="benefits-title">
            <Emblem type="sprout" />
            How It Helps
            <Emblem type="sprout" />
          </h2>
          <div className="benefits-grid grid grid-cols-2 gap-x-1.25 gap-y-6 desktop:grid-cols-4 desktop:gap-0">
            {benefits.map((benefit) => (
              <div
                className="benefit relative px-3.5 text-center desktop:px-2 tablet:px-2.25 min-[71.9375rem]:px-3.75 wide:px-[.75em] before:absolute before:top-1/4 before:bottom-0 before:left-0 before:w-px before:bg-[#e3dfd5] even:before:content-[''] desktop:not-first:before:content-[''] [&_.emblem-circle]:mb-2.5 [&_.emblem-circle]:size-19.25 desktop:[&_.emblem-circle]:size-15 tablet:[&_.emblem-circle]:size-[clamp(66px,7.3vw,123px)] wide:[&_.emblem-circle]:mb-[.5em] wide:[&_.emblem-circle]:size-[7.3vw] [&>h3]:mx-auto [&>h3]:mb-1.75 [&>h3]:max-w-40 [&>h3]:text-[17px] desktop:[&>h3]:max-w-37.5 desktop:[&>h3]:text-xs tablet:[&>h3]:text-sm min-[71.9375rem]:[&>h3]:text-[max(13px,1.48vw)] wide:[&>h3]:mb-[.33em] wide:[&>h3]:max-w-[7em] [&>p]:mx-auto [&>p]:max-w-45 [&>p]:text-[13px] [&>p]:leading-[1.35] desktop:[&>p]:max-w-none desktop:[&>p]:text-[10px] tablet:[&>p]:text-[11px] min-[71.9375rem]:[&>p]:text-[max(11px,1.1vw)]"
                key={benefit.title}
              >
                <Emblem type={benefit.icon} circle />
                <h3>{benefit.title}</h3>
                <p>{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
        </section>
    )
}

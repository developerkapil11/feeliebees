import Image from "next/image";
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

export default function Help({ src }: { src: string }) {
  return (
    <section
      className="benefits-section relative flex flex-col overflow-hidden bg-[#fffaf1] desktop:grid desktop:min-h-[37.5vw]"
      aria-labelledby="benefits-title"
    >
      <Image
        src={src}
        unoptimized
        alt="Heartly and a young fox watch blue butterflies beside a woodland castle"
        width={2048}
        height={768}
        sizes="100vw"
        className="section-art pointer-events-none relative order-2 h-auto w-full desktop:absolute desktop:inset-0 desktop:h-full desktop:object-cover desktop:object-center"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-1 bg-[#fff9ebdf]"
      />
      <div className="benefits-content relative z-2 mx-auto w-[90%] self-center py-8 text-center desktop:w-[88%] desktop:py-[3vw]">
        <h2
          id="benefits-title"
          className="mb-7 flex items-center justify-center gap-4 text-[35px] tablet:mb-[2vw] tablet:text-[max(35px,3.6vw)] [&_.emblem]:h-[.75em] [&_.emblem]:w-[.6em] [&_.emblem:first-child]:-rotate-20 [&_.emblem:last-child]:rotate-20"
        >
          <Emblem type="star" />
          How It Helps
          <Emblem type="heart" />
        </h2>
        <div className="benefits-grid mx-auto grid grid-cols-2 gap-3 desktop:grid-cols-4 tablet:gap-[1.5vw]">
          {benefits.map((benefit) => (
            <div
              className="benefit px-3 py-5 text-center tablet:px-[1.3vw] tablet:py-[1.8vw] [&_.emblem-circle]:mb-3 [&_.emblem-circle]:size-[77px] tablet:[&_.emblem-circle]:size-[clamp(77px,7.3vw,123px)] [&>h3]:mx-auto [&>h3]:mb-2 [&>h3]:max-w-[15ch] [&>h3]:text-[17px] tablet:[&>h3]:text-[max(17px,1.48vw)] [&>p]:mx-auto [&>p]:max-w-[25ch] [&>p]:text-[13px] [&>p]:leading-[1.4] tablet:[&>p]:text-[max(13px,1.1vw)]"
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
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, Heart } from "lucide-react";
import { notFound } from "next/navigation";

import { ProductGallery } from "@/components/shop/product-gallery";
import { button } from "@/components/ui/page-ui";
import { products } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Heartly’s Pocket of Feelings | FeelieBees",
  description:
    "A playful emotional learning kit that helps children understand, express, and share their feelings.",
};

const LEARN_MORE_URL = "/blog/discover-heartlys-pocket-of-feelings";
const VIDEO_URL = process.env.NEXT_PUBLIC_HEARTLY_VIDEO_URL || "";

const insideItems = [
  "Storybook",
  "Heartly plush",
  "9 feeling hearts",
  "9 emotion cards",
];

const benefits = [
  "Meaningful Conversations",
  "Confidence & Self-Awareness",
  "Self-Expression",
  "Empathy & Connection",
  "Healthy Coping Skills",
];

const steps = [
  {
    title: "Read the story",
    description: "Join Heartly on a heartwarming adventure about feelings.",
    image: "/assets/product-icons/story-book-cutout.png",
    alt: "Heartly's Pocket of Feelings storybook",
    tone: "bg-[#eef4dc]",
  },
  {
    title: "Choose a heart",
    description: "Pick the feeling heart that matches how you feel.",
    image: "/assets/product-icons/feeling-hearts-sheet.png",
    alt: "Nine feeling hearts",
    tone: "bg-[#fff0dd]",
  },
  {
    title: "Place & share",
    description: "Put the heart with Heartly and talk about it together.",
    image: "/assets/product-icons/fox-plush-cutout.png",
    alt: "Heartly plush fox with a feeling heart",
    tone: "bg-[#eef4dc]",
  },
  {
    title: "Explore a card",
    description: "Look at the matching card to discover more about the feeling.",
    image: "/assets/product-icons/emotion-cards-fan.png",
    alt: "Heartly emotion cards",
    tone: "bg-[#fff0dd]",
  },
];

export default function ShopPage() {
  const product = products.find(
    (item) => item.slug === "heartlys-pocket-of-feelings"
  );

  if (!product) notFound();

  const amazonUrl = product.amazonUrl || site.amazon;

  return (
    <main id="main" className="bg-[#fffaf0]">
      <section
        className="px-[6%] pb-11 pt-28 tablet:pb-14 tablet:pt-32"
        aria-labelledby="product-title"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-8 tablet:grid-cols-[1.18fr_.82fr] tablet:gap-[4vw]">
          <ProductGallery videoUrl={VIDEO_URL} />

          <div>
            <h1
              id="product-title"
              className="max-w-[10ch] text-[clamp(43px,4.8vw,75px)] leading-[.97] tracking-[-.04em] text-orange"
            >
              Heartly’s Pocket of Feelings
            </h1>
            <p className="mt-5 max-w-[36ch] text-[clamp(17px,1.35vw,21px)] leading-relaxed text-[#49362d]">
              A playful emotional learning kit that helps children understand,
              express, and share their feelings.
            </p>

            <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#e3edce] px-5 py-2 text-base font-extrabold text-[#48623d]">
              <span aria-hidden="true">Ages</span>
              <span>3–7</span>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row tablet:flex-col desktop:flex-row">
              <a
                href={amazonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${button} button-orange px-7`}
              >
                Buy on Amazon <ExternalLink size={18} />
              </a>
              <Link
                href={LEARN_MORE_URL}
                className={`${button} border-[#4d8052] bg-transparent px-7 text-[#397148] shadow-none hover:bg-[#e4efdc]`}
              >
                Learn More <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        className="border-y border-[#e9e0cf] bg-[#fffdf7] px-[6%] py-11 tablet:py-14"
        aria-label="What's inside and the benefits of growing through play"
      >
        <div className="mx-auto grid max-w-7xl gap-9 tablet:grid-cols-[.7fr_1.5fr] tablet:gap-12">
          <div className="tablet:border-r tablet:border-[#ded9ca] tablet:pr-12">
            <h2 className="text-[clamp(36px,3.5vw,54px)] text-orange">
              What’s Inside
            </h2>
            <ul className="mt-6 space-y-3 text-[clamp(17px,1.25vw,21px)] font-extrabold text-[#49362d]">
              {insideItems.map((item) => (
                <li key={item} className="flex items-center gap-4">
                  <span className="size-2.5 shrink-0 rounded-full bg-orange" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[clamp(36px,3.5vw,54px)] text-orange">
              Growing Through Play
            </h2>
            <p className="mt-5 max-w-[72ch] text-[clamp(16px,1.18vw,19px)] leading-relaxed text-[#58463d]">
              Through stories, imaginative play, and shared conversations,
              Heartly helps children recognize and name feelings, explore ways
              to express them, and build emotional connection with the grownups
              they love.
            </p>

            <ul className="mt-5 flex max-w-4xl flex-wrap gap-x-5 gap-y-2 text-[15px] font-extrabold text-[#564038] tablet:text-[clamp(15px,1.05vw,18px)]">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-2.5">
                  <span className="size-1.5 rounded-full bg-orange" />
                  {benefit}
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <p className="flex items-center gap-2 text-xl font-extrabold text-[#49362d]">
                Designed with love
                <Heart className="size-5 fill-[#f26672] text-[#f26672]" />
              </p>
              <p className="mt-1 text-base text-[#6a5a50]">
                Created to help little hearts thrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="px-[6%] py-11 tablet:py-14"
        aria-labelledby="how-it-works-title"
      >
        <div className="mx-auto max-w-7xl">
          <h2
            id="how-it-works-title"
            className="text-[clamp(38px,3.8vw,58px)] text-orange"
          >
            How It Works
          </h2>

          <ol className="mt-8 grid gap-6 sm:grid-cols-2 tablet:grid-cols-4 tablet:gap-5">
            {steps.map((step, index) => (
              <li key={step.title} className="text-center">
                <div
                  className={`relative mx-auto flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-3xl ${step.tone}`}
                >
                  <span className="absolute left-4 top-4 z-10 grid size-11 place-items-center rounded-full bg-orange text-xl font-extrabold text-white shadow-sm">
                    {index + 1}
                  </span>
                  <Image
                    src={step.image}
                    alt={step.alt}
                    width={520}
                    height={420}
                    sizes="(max-width: 700px) 44vw, 23vw"
                    className="h-[85%] w-[85%] object-contain"
                  />
                </div>
                <h3 className="mt-4 text-xl text-[#49362d] tablet:text-[clamp(18px,1.3vw,22px)]">
                  {step.title}
                </h3>
                <p className="mx-auto mt-2 max-w-[27ch] text-[15px] leading-relaxed text-[#6a5a50] tablet:text-base">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        id="shop-cta"
        aria-labelledby="shop-cta-title"
        className="relative isolate flex min-h-72 items-center justify-center overflow-hidden px-[6%] py-12 text-center tablet:min-h-80 tablet:py-14"
      >
        <Image
          src="/assets/shop/whimsical-meadow-valley-banner.png"
          alt=""
          fill
          sizes="100vw"
          className="-z-20 object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,#fffaf0ed_0%,#fffaf0c9_35%,#fffaf04d_66%,transparent_82%)]" />
        <div>
          <h2
            id="shop-cta-title"
            className="text-[clamp(34px,3.4vw,52px)] text-orange"
          >
            Make room for every feeling.
          </h2>
          <p className="mt-3 text-base text-[#40513f] tablet:text-lg">
            Heartly helps little hearts understand big feelings.
          </p>
          <a
            href={amazonUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${button} button-orange mt-6 px-8`}
          >
            Buy on Amazon <ExternalLink size={18} />
          </a>
        </div>
      </section>
    </main>
  );
}

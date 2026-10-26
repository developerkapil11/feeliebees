
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

// Replace this path when the new Growing Through Play banner is ready.
const GROWING_BANNER = "/assets/shop/whimsical-meadow-valley-banner.png";

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
    description:
      "Join Heartly on a heartwarming adventure about feelings.",
    image: "/assets/product-icons/story-book-cutout.png",
    alt: "Heartly's Pocket of Feelings storybook",
    tone: "bg-[#eef4dc]",
  },
  {
    title: "Choose a heart",
    description:
      "Pick the feeling heart that matches how you feel.",
    image: "/assets/product-icons/feeling-hearts-sheet.png",
    alt: "Nine feeling hearts",
    tone: "bg-[#fff0dd]",
  },
  {
    title: "Place & share",
    description:
      "Put the heart with Heartly and talk about it together.",
    image: "/assets/product-icons/fox-plush-cutout.png",
    alt: "Heartly plush fox with a feeling heart",
    tone: "bg-[#eef4dc]",
  },
  {
    title: "Explore a card",
    description:
      "Look at the matching card to discover more about the feeling.",
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
    <main id="main" className="bg-cream text-navy">
      {/* Product hero */}
      <section
        className="px-[5%] pb-7 pt-24 tablet:pb-9 tablet:pt-28"
        aria-labelledby="product-title"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-6 tablet:grid-cols-[1.18fr_.82fr] tablet:gap-10">
          <ProductGallery videoUrl={VIDEO_URL} />

          <div>
            <h1
              id="product-title"
              className="max-w-[10ch] text-[clamp(40px,4.5vw,68px)] leading-[.97] tracking-[-.04em] text-orange"
            >
              Heartly’s Pocket of Feelings
            </h1>

            <p className="mt-3 max-w-[36ch] text-[clamp(16px,1.25vw,19px)] leading-relaxed text-navy">
              A playful emotional learning kit that helps children understand,
              express, and share their feelings.
            </p>

            <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#e3edce] px-4 py-1.5 text-sm font-extrabold text-navy">
              <span aria-hidden="true">Ages</span>
              <span>3–7</span>
            </div>

            <div className="mt-5 flex flex-col gap-2.5 sm:flex-row tablet:flex-col desktop:flex-row">
              <a
                href={amazonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${button} button-orange px-6`}
              >
                Buy on Amazon <ExternalLink size={18} />
              </a>

              <Link
                href={LEARN_MORE_URL}
                className={`${button} border-[#4d8052] bg-transparent px-6 text-[#397148] shadow-none hover:bg-[#e4efdc]`}
              >
                Learn More <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Growing Through Play: full-width banner, no overlay */}
      <section
        className="relative isolate overflow-hidden border-y border-[#e9e0cf] px-[5%] py-8 tablet:py-10"
        aria-labelledby="growing-title"
      >
        <Image
          src="/assets/homepage/heartly-sunlit-meadow.webp"
          alt=""
          fill
          sizes="100vw"
          className="-z-20 object-cover object-center"
        />

        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <h2
              id="growing-title"
              className="text-[clamp(32px,3.2vw,46px)] leading-tight text-orange"
            >
              Growing Through Play
            </h2>

            <p className="mt-3 max-w-[65ch] text-base leading-relaxed text-navy">
              Through stories, imaginative play, and shared conversations,
              Heartly helps children recognize and name feelings, explore ways
              to express them, and build emotional connection with the grownups
              they love.
            </p>

            <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm font-extrabold text-navy tablet:text-base">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className="size-1.5 shrink-0 rounded-full bg-orange"
                  />
                  {benefit}
                </li>
              ))}
            </ul>

            <div className="mt-4">
              <p className="flex items-center gap-2 text-lg font-extrabold text-navy">
                Designed with love
                <Heart className="size-5 fill-[#f26672] text-[#f26672]" />
              </p>

              <p className="mt-0.5 text-sm text-navy">
                Created to help little hearts thrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Inside + How It Works */}
      <section
        className="px-[5%] py-8 tablet:py-10"
        aria-label="What's inside and how it works"
      >
        <div className="mx-auto grid max-w-7xl gap-7 tablet:grid-cols-[.6fr_1.8fr] tablet:gap-8">
          {/* Compact component list */}
          <div className="tablet:border-r tablet:border-[#ded9ca] tablet:pr-6">
            <h2 className="text-[clamp(30px,2.8vw,40px)] leading-tight text-orange">
              What’s Inside
            </h2>

            <ul className="mt-4 space-y-3 text-base font-extrabold text-navy">
              {insideItems.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span
                    aria-hidden="true"
                    className="mt-2 size-2 shrink-0 rounded-full bg-orange"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* How It Works: existing product illustrations */}
          <div>
            <h2
              id="how-it-works-title"
              className="text-[clamp(32px,3.2vw,46px)] leading-tight text-orange"
            >
              How It Works
            </h2>

            <ol className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 desktop:grid-cols-4 desktop:gap-3">
              {steps.map((step, index) => (
                <li key={step.title} className="min-w-0 text-center">
                  <div
                    className={`relative mx-auto flex aspect-4/3 w-full items-center justify-center overflow-hidden rounded-2xl ${step.tone}`}
                  >
                    <span className="absolute left-2.5 top-2.5 z-10 grid size-8 place-items-center rounded-full bg-orange text-base font-extrabold text-white shadow-sm">
                      {index + 1}
                    </span>

                    <Image
                      src={step.image}
                      alt={step.alt}
                      width={520}
                      height={420}
                      sizes="(max-width: 639px) 90vw, (max-width: 1023px) 42vw, 18vw"
                      className="h-[85%] w-[85%] object-contain"
                    />
                  </div>

                  <h3 className="mt-3 text-base font-extrabold text-navy">
                    {step.title}
                  </h3>

                  <p className="mx-auto mt-1 max-w-[27ch] text-sm leading-snug text-navy">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section
        id="shop-cta"
        aria-labelledby="shop-cta-title"
        className="relative isolate flex min-h-60 items-center justify-center overflow-hidden px-[5%] py-8 text-center tablet:min-h-64 tablet:py-10"
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
            className="text-[clamp(30px,3.2vw,44px)] leading-tight text-orange"
          >
            Make room for every feeling.
          </h2>

          <p className="mt-2 text-base text-navy">
            Heartly helps little hearts understand big feelings.
          </p>

          <a
            href={amazonUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${button} button-orange mt-4 px-7`}
          >
            Buy on Amazon <ExternalLink size={18} />
          </a>
        </div>
      </section>
    </main>
  );
}

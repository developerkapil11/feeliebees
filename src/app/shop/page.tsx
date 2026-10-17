
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { notFound } from "next/navigation";

import { products } from "@/lib/content";
import { site } from "@/lib/site";
import { pageWidth, amazonButton } from "@/components/ui/page-ui";

export const metadata: Metadata = {
  title: "Heartly’s Pocket of Feelings | FeelieBees",
  description:
    "A playful emotional learning kit that helps children understand, express, and share their feelings. Discover Heartly’s plush fox, storybook, feeling hearts, and emotion cards.",
};

const LEARN_MORE_URL =
  "/blog";

const VIDEO_URL =
  process.env.NEXT_PUBLIC_HEARTLY_VIDEO_URL || "";

const productFeatures = [
  {
    title: "1 Heartly Plush",
    description:
      "A soft and cuddly fox friend with a special pocket for feelings, helping children share their emotions through imaginative play.",
    image: "/assets/product-icons/fox-plush-cutout.png",
    alt: "Heartly plush fox companion",
  },
  {
    title: "9 Feeling Hearts",
    description:
      "Children can choose the heart that best matches how they feel and place it on Heartly’s chest.",
    image: "/assets/product-icons/feeling-hearts-sheet.png",
    alt: "Nine illustrated feeling hearts",
  },
  {
    title: "1 Storybook",
    description:
      "A heartwarming story designed to help children understand, name, and share their emotions.",
    image: "/assets/product-icons/story-book-cutout.png",
    alt: "Heartly’s Pocket of Feelings storybook",
  },
  {
    title: "9 Emotion Cards",
    description:
      "Each card explores a feeling and offers simple, child-friendly ways to respond, reminding children that every feeling is welcome.",
    image: "/assets/product-icons/emotion-cards-fan.png",
    alt: "Nine Heartly emotion cards",
  },
];

const steps = [
  "Read Heartly’s story.",
  "Choose a feeling heart from his pocket.",
  "Place it on his chest to share how you feel.",
  "Explore the matching emotion card together to keep the conversation going.",
];

const benefits = [
  "Meaningful Conversations",
  "Confidence & Self-Awareness",
  "Self-Expression",
  "Empathy & Connection",
  "Healthy Coping Skills",
];

export default function ShopPage() {
  const product = products.find(
    (item) => item.slug === "heartlys-pocket-of-feelings"
  );

  if (!product) {
    notFound();
  }

  const amazonUrl = product.amazonUrl || site.amazon;

  return (
    <main id="main">
      {/* 1. HERO — Warm cream */}
      <section
        className="bg-[#fff8eb] py-12 tablet:py-20"
        aria-labelledby="product-title"
      >
        <div
          className={`${pageWidth} grid items-center gap-10 tablet:grid-cols-2 tablet:gap-16`}
        >
          <div>
            <h1
              id="product-title"
              className="font-display text-4xl font-extrabold leading-tight tracking-tight tablet:text-6xl"
            >
              Heartly’s Pocket of Feelings
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#526257]">
              A playful emotional learning kit that helps children
              understand, express, and share their feelings.
            </p>

            <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-[#e5d8b8] bg-white px-4 py-2">
              <span
                aria-label="Suitable for ages three and up"
                className="flex size-10 items-center justify-center rounded-full bg-[#438451] font-extrabold text-white"
              >
                3+
              </span>

              <span className="font-bold text-[#354d3b]">
                Made for little learners
              </span>
            </div>

            <div className="mt-8">
              <a
                href={amazonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={amazonButton}
              >
                Buy on Amazon <ExternalLink size={18} />
              </a>
            </div>

            <p className="mt-4 max-w-md text-sm leading-relaxed text-[#65706c]">
              Check Amazon for pricing, availability, and delivery.
              Your purchase, payment, and delivery are handled by Amazon.
            </p>
          </div>

          <div className="overflow-hidden rounded-4xl bg-[#f4e6cd] shadow-sm">
            {VIDEO_URL ? (
              <video
                controls
                playsInline
                preload="metadata"
                poster={product.image}
                className="aspect-4/3 w-full object-cover"
                aria-label="Heartly’s Pocket of Feelings product video"
              >
                <source src={VIDEO_URL} type="video/mp4" />
                Your browser does not support video playback.
              </video>
            ) : (
              <Image
                src={product.image}
                alt={`${product.name} complete set`}
                width={1536}
                height={1024}
                priority
                sizes="(max-width: 900px) 100vw, 50vw"
                className="aspect-4/3 w-full object-cover transition duration-500 hover:scale-[1.02]"
              />
            )}
          </div>
        </div>
      </section>

      {/* 2. WHAT'S INSIDE — Lavender */}
      <section
        className="bg-[#fff3dc] py-16 tablet:py-24"
        aria-labelledby="inside-title"
      >
        <div className={pageWidth}>
          <div className="max-w-2xl">
            <h2
              id="inside-title"
              className="mt-3 font-display text-3xl font-extrabold tablet:text-5xl"
            >
              What’s Inside
            </h2>

            <p className="mt-4 leading-relaxed text-[#615773]">
              Four thoughtful pieces to help little hearts explore big feelings.
            </p>
          </div>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 tablet:grid-cols-4">
            {productFeatures.map((item, index) => (
              <article key={item.title} className="min-w-0">
                <div className="flex aspect-square items-center justify-center overflow-hidden rounded-3xl bg-white p-5">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={700}
                    height={700}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="h-full w-full object-contain"
                  />
                </div>

                <p className="mt-5 text-sm font-extrabold text-[#79609e]">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <h3 className="mt-2 text-xl font-extrabold text-[#332846]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#615773]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS + THE SET ENCOURAGES */}
      <section
        className="bg-cream px-5 py-16 tablet:py-24"
        aria-label="How Heartly’s Pocket of Feelings works and what it encourages"
      >
        <div
          className={`${pageWidth} grid items-stretch gap-8 tablet:grid-cols-2 tablet:gap-10`}
        >
          {/* LEFT SIDE — How It Works */}
          <div
            className="rounded-[2rem] bg-[#eaf5e9] p-7 shadow-sm sm:p-10"
            aria-labelledby="how-title"
          >
            <h2
              id="how-title"
              className="mt-3 font-display text-3xl font-extrabold tablet:text-4xl"
            >
              How It Works
            </h2>

            <p className="mt-5 text-lg leading-relaxed text-[#405c48]">
              There’s no right or wrong feeling — just an invitation
              to play, share, and connect.
            </p>

            <ol className="mt-8 space-y-6">
              {steps.map((step, index) => (
                <li key={step} className="flex items-start gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#438451] text-lg font-extrabold text-white">
                    {index + 1}
                  </span>

                  <p className="pt-1.5 text-base leading-relaxed text-[#354d3b]">
                    {step}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          {/* RIGHT SIDE — The Set Encourages */}
          <div
            className="flex flex-col rounded-[2rem] bg-[#fff0e6] p-7 shadow-sm sm:p-10"
            aria-labelledby="benefits-title"
          >
           <h2
              id="benefits-title"
              className="mt-3 font-display text-3xl font-extrabold tablet:text-4xl"
            >
              The Set Encourages
            </h2>

            <p className="mt-5 leading-relaxed text-[#75472f]">
              Little moments with Heartly can help children build skills
              that support them as they grow.
            </p>

            <ul className="mt-8 flex flex-wrap gap-3">
              {benefits.map((benefit, index) => (
                <li
                  key={benefit}
                  className={`rounded-full border px-4 py-3 text-sm font-bold ${
                    index % 2 === 0
                      ? "border-[#f0cfb8] bg-white text-[#865037]"
                      : "border-[#e7c2a8] bg-[#fce1d0] text-[#865037]"
                  }`}
                >
                  {benefit}
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-10">
              <p className="text-xl font-extrabold leading-relaxed text-[#75472f] tablet:text-2xl">
                Designed with love ❤️
              </p>

              <p className="mt-2 leading-relaxed text-[#75472f]">
                Created to help little hearts thrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FINAL PURCHASE CTA — Pale yellow */}
      <section
        className="bg-[#fff3dc] px-5 py-16 tablet:py-24"
        aria-labelledby="final-cta-title"
      >
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="final-cta-title"
            className="font-display text-3xl font-extrabold tablet:text-5xl"
          >
            Make room for every feeling.
          </h2>

          <p className="mt-5 leading-relaxed text-[#665b3c]">
            Discover a playful way to explore emotions and connect
            with your little one.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-5">
            <a
              href={amazonUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={amazonButton}
            >
              Buy on Amazon <ExternalLink size={18} />
            </a>

            <Link
              href={LEARN_MORE_URL}
              className="inline-flex items-center font-bold text-[#357d51] underline underline-offset-4 hover:text-[#244d34]"
            >
              Learn More
            </Link>
          </div>

          <p className="mt-5 text-sm leading-relaxed text-[#71684f]">
            Check Amazon for pricing, availability, and delivery.
          </p>
        </div>
      </section>
    </main>
  );
}

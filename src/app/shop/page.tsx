import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, Gift } from "lucide-react";
import { Emblem } from "@/components/ui/brand";
import { products } from "@/lib/content";
import { site } from "@/lib/site";
import {
  PageIntro,
  pageWidth,
  amazonButton,
  TogetherBanner,
} from "@/components/ui/page-ui";

export const metadata: Metadata = {
  title: "Shop | FeelieBees",
  description:
    "Meet Heartly’s Pocket of Feelings: a storybook, plush fox, nine feeling hearts and nine emotion cards for children. Available through Amazon.",
};

export default function ShopPage() {
  return (
    <main id="main">
      <PageIntro
        eyebrow="Thoughtful gifts for growing hearts"
        title="Little gifts. Big feelings."
      >
        <p>
          Playful companions for everyday emotions. Discover a little world of
          stories, cuddles, and connection.
        </p>
      </PageIntro>
      <section className={pageWidth} aria-labelledby="collection-title">
        <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-[max(12px,.9vw)] font-black tracking-widest text-[#438451] uppercase">
              The FeelieBees collection
            </p>
            <h2 id="collection-title" className="text-[max(32px,2.8vw)]">
              Made for little hearts
            </h2>
          </div>
          <span className="rounded-full bg-[#eeeede] px-4 py-2 text-[max(12px,.95vw)]">
            {products.length}{" "}
            {products.length === 1 ? "thoughtful gift" : "thoughtful gifts"}
          </span>
        </div>
        <div
          className={
            products.length === 1
              ? "grid gap-8"
              : "grid gap-8 tablet:grid-cols-2"
          }
        >
          {products.map((product) => (
            <article
              key={product.slug}
              className={`overflow-hidden rounded-4xl border border-[#ece4d4] bg-white shadow-[0_10px_40px_#08296508] ${products.length === 1 ? "tablet:grid tablet:grid-cols-[1.12fr_1fr]" : ""}`}
            >
              <Link
                href={`/shop/${product.slug}`}
                className="relative block self-center overflow-hidden bg-[#fff2db]"
              >
                <Image
                  src={product.image}
                  alt={`${product.name} gift set with a plush fox, book, feeling hearts and emotion cards`}
                  width={1536}
                  height={1024}
                  sizes="(max-width: 900px) 100vw, 50vw"
                  priority
                  className="h-auto w-full transition duration-500 hover:scale-[1.02]"
                />
                <span className="absolute top-5 left-5 inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-[max(12px,.9vw)] font-extrabold">
                  <Gift size={17} /> A gift full of feelings
                </span>
              </Link>
              <div className="flex flex-col justify-center p-6 tablet:p-[3vw]">
                <p className="mb-4 text-[max(12px,.9vw)] font-black tracking-widest text-[#438451] uppercase">
                  {product.category}
                </p>
                <h3 className="font-display text-[max(34px,3.3vw)]! leading-[1.05]! tracking-tight">
                  <Link href={`/shop/${product.slug}`}>{product.name}</Link>
                </h3>
                <p className="mt-5 text-[max(15px,1.15vw)] leading-relaxed">
                  {product.description}
                </p>
                <ul className="my-6 grid gap-2.5 text-[max(14px,1.05vw)]">
                  {product.contents.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <Emblem type="heart" className="size-[1.2em]!" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap items-center gap-5">
                  <a
                    href={product.amazonUrl || site.amazon}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={amazonButton}
                  >
                    Buy on Amazon <ExternalLink />
                  </a>
                  <Link
                    href={`/shop/${product.slug}`}
                    className="inline-flex items-center gap-2 text-[max(14px,1vw)] font-extrabold hover:text-orange"
                  >
                    Meet the set <ArrowRight size={18} />
                  </Link>
                </div>
                <p className="mt-4 text-[max(11px,.85vw)] text-[#65706c]">
                  See Amazon for pricing, availability, and delivery.
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section
        className="bg-[#f3f0e3] px-[6%] py-12 tablet:py-[4vw]"
        aria-labelledby="inside-title"
      >
        <div className="mb-9 text-center">
          <h2 id="inside-title" className="text-[max(34px,3vw)]">
            One little set. So many ways to connect.
          </h2>
          <p className="mt-4 text-[max(15px,1.1vw)]">
            Everything you need to begin a gentle conversation.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 tablet:grid-cols-4">
          {[
            {
              image: "/assets/product-icons/story-book-cutout.png",
              alt: "Heartly's Pocket of Feelings storybook",
              imageClass: "object-contain",
            },
            {
              image: "/assets/product-icons/fox-plush-cutout.png",
              alt: "Heartly plush fox companion",
              imageClass: "object-contain",
            },
            {
              image: "/assets/product-icons/feeling-hearts-sheet.png",
              alt: "Nine illustrated feeling hearts",
              imageClass: "object-contain",
            },
            {
              image: "/assets/product-icons/emotion-cards-fan.png",
              alt: "Nine Heartly emotion cards",
              imageClass: "object-contain",
            },
          ].map(({ image, alt, imageClass }) => (
            <div
              key={alt}
              className="rounded-3xl border border-white bg-[#fffcf5] p-6 text-center tablet:p-[2vw]"
            >
              <img
                src={image}
                alt={alt}
                className={`mx-auto mb-5 size-[max(64px,5vw)] ${imageClass}`}
              />
              <h3 className="text-[max(19px,1.5vw)]">{alt}</h3>
            </div>
          ))}
        </div>
      </section>
      <TogetherBanner />
    </main>
  );
}

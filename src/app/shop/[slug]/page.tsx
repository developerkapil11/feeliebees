import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, ExternalLink } from "lucide-react";
import { products } from "@/lib/content";
import { site } from "@/lib/site";
import {
  pageWidth,
  amazonButton,
  TogetherBanner,
} from "@/components/ui/page-ui";
import { ProductCardSlider } from "@/components/shop/product-card-slider";

export const dynamicParams = false;
export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  return {
    title: product ? `${product.name} | FeelieBees` : "Product not found",
    description: product?.description,
  };
}
export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) notFound();
  return (
    <main id="main">
      <div className={pageWidth}>
        <Link
          className="mb-7 inline-flex items-center gap-2 text-[max(14px,1vw)] font-extrabold hover:text-orange"
          href="/shop"
        >
          <ArrowLeft size={18} />
          Back to the shop
        </Link>
        <div className="grid items-start gap-8 tablet:grid-cols-2 tablet:gap-[4vw]">
          <Image
            src={product.image}
            alt={`${product.name} complete gift set`}
            width={1536}
            height={1024}
            priority
            sizes="(max-width: 900px) 100vw, 45vw"
            className="h-auto w-full rounded-3xl"
          />
          <div>
            <span className="rounded-full bg-[#e2efdb] px-4 py-2 text-[max(12px,.9vw)] font-extrabold">
              Made for children
            </span>
            <h1 className="mt-6 text-[max(40px,3.8vw)] leading-[1.05]">
              {product.name}
            </h1>
            <p className="mt-6 text-[max(16px,1.2vw)] leading-relaxed">
              {product.description}
            </p>
            <h2 className="mt-8 text-[max(26px,2vw)]">A peek inside the box</h2>
            <ul className="my-5 space-y-3 text-[max(15px,1.1vw)]">
              {product.contents.map((item) => (
                <li className="flex gap-3" key={item}>
                  <Check className="size-[1.2em] shrink-0 text-[#378550]" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={product.amazonUrl || site.amazon}
              target="_blank"
              rel="noopener noreferrer"
              className={`${amazonButton} mt-3`}
            >
              Buy on Amazon <ExternalLink />
            </a>
            <p className="mt-4 text-[max(12px,.9vw)] text-[#617069]">
              Your purchase, payment, and delivery are handled by Amazon.
            </p>
            <div className="mt-8 rounded-2xl bg-white p-6">
              <h3 className="text-[max(18px,1.3vw)]">A little time together</h3>
              <p className="mt-3 text-[max(14px,1vw)] leading-relaxed">
                Read the story. Choose a card. Let your child pick a heart for
                Heartly. Follow their curiosity and make room for whatever they
                feel.
              </p>
              <Link
                href="/faq"
                className="mt-4 inline-block text-[max(14px,1vw)] font-bold text-[#357d51] underline underline-offset-4"
              >
                Questions about the set?
              </Link>
            </div>
          </div>
        </div>
        <ProductCardSlider />
      </div>
      <TogetherBanner />
    </main>
  );
}

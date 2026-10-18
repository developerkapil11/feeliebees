
import type { Metadata } from "next";
import Image from "next/image";
import { pageWidth } from "@/components/ui/page-ui";
import { BlogLibrary } from "@/components/blog/blog-library";

export const metadata: Metadata = {
  title: "The FeelieBees Blog | Understanding Feelings",
  description:
    "Thoughts and guidance for parents, caregivers, and educators to better understand children's emotional worlds and build deeper connections.",
};

export default function BlogPage() {
  return (
    <main id="main">
      {/* Blog Hero */}
      <section className="relative grid aspect-square overflow-hidden border-b border-[#e8e6d6] bg-[#fff9e9] pt-16 tablet:aspect-auto tablet:min-h-[clamp(300px,28vw,440px)] tablet:pt-16">
        <Image
          src="/assets/hero-banners/adventure-fox-meadow-mobile.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="pointer-events-none z-0 object-cover object-center tablet:hidden"
        />

        <Image
          src="/assets/hero-banners/adventure-dreamy-foxes.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="pointer-events-none z-0 hidden object-cover object-center tablet:block"
        />

        <div className="pointer-events-none absolute inset-0 z-1 bg-[radial-gradient(ellipse_at_center,#fff9e9f7_0%,#fff9e9e8_30%,#fff9e975_58%,#fff9e914_82%)]" />

        <div className="relative z-2 col-start-1 row-start-1 mx-auto flex w-[88%] flex-col items-center justify-center py-8 text-center tablet:py-[2vw]">
          <h1 className="max-w-[22ch] text-[clamp(34px,4vw,160px)] leading-[1.04] tracking-[-.035em]">
            Understanding Feelings. Growing Connection.
          </h1>

          <p className="mt-4 max-w-[58ch] text-[max(15px,1.1vw)] leading-relaxed">
            Thoughts and guidance for parents, caregivers, and educators to
            better understand children’s emotional worlds and build deeper
            connections, through everyday joys and challenges.
          </p>
        </div>
      </section>

      {/* Blog Articles */}
      <section
        className={pageWidth}
        aria-label="Articles"
      >
        <BlogLibrary />
      </section>
    </main>
  );
}

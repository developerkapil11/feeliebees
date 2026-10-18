import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { posts } from "@/lib/content";
import { PostCard } from "@/components/blog/blog-library";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);

  return {
    title: post ? `${post.title} | FeelieBees` : "Story not found",
    description: post?.intro,
    openGraph: post
      ? {
          title: post.title,
          description: post.intro,
          type: "article",
          publishedTime: post.publishedAt,
          modifiedTime: post.updatedAt,
          // Keep the image for social sharing, even though it is
          // not displayed on the individual article page.
          images: [`/assets/blog/${post.image}.png`],
        }
      : undefined,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);

  if (!post) notFound();

  const related = posts
    .filter((item) => item.slug !== slug)
    .slice(0, 3);

  return (
    <main id="main">
      <article className="mx-auto w-[88%] py-10 tablet:w-[72%] tablet:py-[3vw]">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-[max(14px,1vw)] font-extrabold hover:text-button-orange"
        >
          <ArrowLeft size={18} />
          Back to the blog
        </Link>

        <header className="mx-auto my-8 max-w-[52ch] text-center tablet:my-[3vw]">
          <h1 className="text-[max(36px,3.7vw)] leading-[1.08] tracking-tight text-button-orange">
            {post.title}
          </h1>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[max(12px,.9vw)] text-[#65736b]">
          <div className="relative z-10 flex items-center gap-1.5">
            <span className="inline-flex items-center">
              {post.author}
            </span>
            <span
              className="relative block size-4 shrink-0 desktop:size-5"
              aria-hidden="true"
            >
              <Image
                src="/icons/bee_icon.png"
                alt=""
                width={20}
                height={20}
                unoptimized
                className="block size-full object-contain"
              />
            </span>
          </div>
           
            <time dateTime={post.updatedAt}>
              {new Date(`${post.updatedAt}T12:00:00Z`).toLocaleDateString(
                "en-GB",
                {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                  timeZone: "UTC",
                }
              )}
            </time>
          </div>
        </header>

        <div className="mx-auto max-w-[65ch] text-[max(16px,1.25vw)] leading-[1.85]">
          <p className="text-[max(18px,1.45vw)] font-extrabold">
            {post.intro}
          </p>

          {post.sections.map(([title, text]) => (
            <section
              className="mt-8 tablet:mt-[2.5vw]"
              key={title}
            >
              <h2 className="mb-4 text-[max(27px,2.1vw)] leading-tight text-button-orange">
                {title}
              </h2>

              <p>{text}</p>
            </section>
          ))}

          
          <aside className="relative my-12 overflow-hidden rounded-3xl border border-[#F3D8B8] bg-linear-to-br from-[#FFF8ED] via-[#FFFDF8] to-[#FFF0E8] p-6 shadow-sm sm:p-8 tablet:my-[3vw]">
            {/* Decorative accent */}
            <div
              aria-hidden="true"
              className="absolute left-0 top-0 h-full w-1.5 bg-orange"
            />

            <div className="relative">
              <div className="mb-4 flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white text-xl shadow-sm"
                >
                  <Image
                    src="/icons/bee_icon.png"
                    alt=""
                    width={32}
                    height={32}
                    unoptimized
                    sizes="32px"
                    className="block h-full w-full object-contain"
                  />
                </span>

                <div>
                  <h3 className="mt-1 text-lg font-extrabold text-button-orange sm:text-xl">
                    From the FeelieBees team
                  </h3>
                </div>
              </div>

              <p className="text-sm leading-7 text-[#5F554B] sm:text-base">
                The information shared on the FeelieBees blog is intended for
                educational purposes and reflects our philosophy of supporting
                children’s emotional development through play, connection, and
                meaningful conversations.
              </p>

              <div className="my-5 h-px bg-[#EEDCC8]" />

              <p className="text-sm leading-7 text-[#5F554B] sm:text-base">
                It is not intended as medical, psychological, or therapeutic advice.
                If you have concerns about a child’s health or development, seek
                guidance from a qualified professional.
              </p>
            </div>
          </aside>

        </div>
      </article>

      {related.length > 0 && (
        <section className="bg-[#f1efdf] px-[6%] py-12 tablet:py-[4vw]">
          <h2 className="mb-8 text-[max(32px,2.8vw)] text-button-orange">
            A little more inspiration
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 tablet:grid-cols-3">
            {related.map((item) => (
              <PostCard key={item.slug} post={item} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
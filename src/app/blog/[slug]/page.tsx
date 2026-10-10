import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Heart, ArrowRight, Clock3 } from "lucide-react";
import { posts } from "@/lib/content";
import { PostCard } from "@/components/blog/blog-library";
import { primaryButton } from "@/components/ui/page-ui";

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
          images: [`/assets/blog/${post.image}.webp`],
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
  const related = posts.filter((item) => item.slug !== slug).slice(0, 3);
  return (
    <main id="main">
      <article className="mx-auto w-[88%] py-10 tablet:w-[72%] tablet:py-[3vw]">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-[max(14px,1vw)] font-extrabold hover:text-orange"
        >
          <ArrowLeft size={18} />
          Back to the blog
        </Link>
        <header className="mx-auto my-8 max-w-[52ch] text-center tablet:my-[3vw]">
          <p className="mb-4 text-[max(12px,.95vw)] font-black tracking-widest text-[#438557] uppercase">
            {post.category}
          </p>
          <h1 className="text-[max(36px,3.7vw)] leading-[1.08] tracking-tight">
            {post.title}
          </h1>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[max(12px,.9vw)] text-[#65736b]">
            <span>By {post.author}</span>
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
            <span className="inline-flex items-center gap-1.5">
              <Clock3 className="size-[1em]" />
              {post.readingMinutes} min read
            </span>
          </div>
        </header>
        <Image
          src={`/assets/blog/${post.image}.webp`}
          alt={post.title}
          width={1536}
          height={1024}
          priority
          sizes="(max-width: 900px) 88vw, 72vw"
          className="h-auto w-full rounded-3xl"
        />
        <div className="mx-auto mt-8 max-w-[65ch] text-[max(16px,1.25vw)] leading-[1.85]">
          <p className="text-[max(18px,1.45vw)] font-extrabold">{post.intro}</p>
          {post.sections.map(([title, text]) => (
            <section className="mt-8 tablet:mt-[2.5vw]" key={title}>
              <h2 className="mb-4 text-[max(27px,2.1vw)] leading-tight">
                {title}
              </h2>
              <p>{text}</p>
            </section>
          ))}
          <aside className="my-9 rounded-3xl bg-[#ffe6e9] p-6 text-center tablet:p-[2vw]">
            <Heart className="mx-auto mb-4 size-8 fill-[#ffb8c9] text-coral" />
            <p className="font-extrabold">
              Every feeling belongs.
              <br />
              Every little conversation counts.
            </p>
            <Link href="/activities" className={`${primaryButton} mt-6`}>
              Try a free activity together <ArrowRight />
            </Link>
          </aside>
        </div>
      </article>
      {related.length > 0 && (
        <section className="bg-[#f1efdf] px-[6%] py-12 tablet:py-[4vw]">
          <h2 className="mb-8 text-[max(32px,2.8vw)]">
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

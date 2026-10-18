
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Search } from "lucide-react";
import { posts, type Post } from "@/lib/content";
import { field, primaryButton } from "@/components/ui/page-ui";

export function PostCard({ post }: { post: Post }) {
  return (
    <article className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-[#eae2d3] bg-white shadow-[0_4px_18px_#08296505] transition duration-300 hover:-translate-y-1 hover:shadow-md">
      <Link
        href={`/blog/${post.slug}`}
        aria-label={`Read ${post.title}`}
        className="block overflow-hidden"
      >
        <Image
          src={`/assets/blog/${post.image}.png`}
          alt={post.title}
          width={1536}
          height={1024}
          sizes="(max-width: 639px) 88vw, (max-width: 899px) 44vw, 28vw"
          className="h-40 w-full object-cover transition duration-500 group-hover:scale-[1.03] sm:h-44"
        />
      </Link>

      <div className="flex flex-1 flex-col p-4 tablet:p-5">
        <h2 className="text-[max(19px,1.45vw)] leading-tight font-bold">
          <Link
            href={`/blog/${post.slug}`}
            className="transition hover:text-[#20698b]"
          >
            {post.title}
          </Link>
        </h2>

        <p className="mt-2 mb-4 flex-1 text-[max(14px,.95vw)] leading-relaxed text-[#5f6870]">
          {post.intro}
        </p>

        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex w-fit items-center gap-2 text-[max(14px,1vw)] font-extrabold text-orange"
        >
          Read the article
          <ArrowRight className="size-[1em] transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}

export function BlogLibrary() {
  const [category, setCategory] = useState("All stories");
  const [query, setQuery] = useState("");

  const filtered = posts.filter(
    (post) =>
      (category === "All stories" || category === post.category) &&
      `${post.title} ${post.intro}`
        .toLowerCase()
        .includes(query.trim().toLowerCase())
  );

  return (
    <>
      <div className="mb-6">
        <label className="relative block w-full tablet:max-w-sm">
          <span className="sr-only">Search articles</span>
          <Search
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 left-4 size-5 -translate-y-1/2 text-[#6a7b6b]"
          />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search articles…"
            className={`${field} pl-12`}
          />
        </label>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 tablet:grid-cols-3 tablet:gap-5">
        {filtered.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>

      {!filtered.length && (
        <div className="rounded-2xl border border-dashed border-[#cdd5c3] p-8 text-center tablet:p-12">
          <h2 className="text-2xl font-bold">No articles found</h2>
          <p className="mt-3 text-[#5f6870]">
            Try a different search term to find an article.
          </p>
          <button
            type="button"
            className={`${primaryButton} mt-5`}
            onClick={() => {
              setQuery("");
              setCategory("All stories");
            }}
          >
            Show all articles <ArrowRight />
          </button>
        </div>
      )}
    </>
  );
}

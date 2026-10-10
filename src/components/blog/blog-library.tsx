"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Search } from "lucide-react";
import { posts, type Post } from "@/lib/content";
import { field, primaryButton } from "@/components/ui/page-ui";

export function PostCard({ post }: { post: Post }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-[#eae2d3] bg-white shadow-[0_8px_30px_#08296505]">
      <Link
        href={`/blog/${post.slug}`}
        aria-label={`Read ${post.title}`}
        className="overflow-hidden"
      >
        <Image
          src={`/assets/blog/${post.image}.webp`}
          alt={post.title}
          width={1536}
          height={1024}
          sizes="(max-width: 900px) 90vw, 30vw"
          className="h-auto w-full transition duration-500 group-hover:scale-[1.03]"
        />
      </Link>
      <div className="flex flex-1 flex-col p-6 tablet:p-[2vw]">
        <p className="text-[max(11px,.85vw)] font-black text-[#438658]">
          {post.category} · {post.readingMinutes} min read
        </p>
        <h3 className="mt-4 text-[max(22px,1.8vw)] leading-tight">
          <Link href={`/blog/${post.slug}`} className="hover:text-[#20698b]">
            {post.title}
          </Link>
        </h3>
        <p className="mt-4 mb-6 flex-1 text-[max(14px,1.05vw)] leading-relaxed">
          {post.intro}
        </p>
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex w-fit items-center gap-2 text-[max(14px,1vw)] font-extrabold text-orange"
        >
          Read the story <ArrowRight className="size-[1em]" />
        </Link>
      </div>
    </article>
  );
}

export function BlogLibrary() {
  const [category, setCategory] = useState("All stories");
  const [query, setQuery] = useState("");
  const categories = [
    "All stories",
    ...new Set(posts.map((post) => post.category)),
  ];
  const filtered = posts.filter(
    (post) =>
      (category === "All stories" || category === post.category) &&
      `${post.title} ${post.intro}`.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <>
      <div className="mb-8 flex flex-col gap-5 tablet:flex-row tablet:items-center tablet:justify-between">
        <label className="relative tablet:w-[23%]">
          <span className="sr-only">Search articles</span>
          <Search className="absolute top-1/2 left-4 size-5 -translate-y-1/2 text-[#6a7b6b]" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Find a little inspiration…"
            className={`${field} pl-12`}
          />
        </label>
      </div>
      <p role="status" className="mb-5 text-[max(12px,.9vw)] text-[#68786b]">
        {filtered.length} {filtered.length === 1 ? "story" : "stories"} for
        growing together
      </p>
      <div className="grid gap-6 sm:grid-cols-2 tablet:grid-cols-3">
        {filtered.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
      {!filtered.length && (
        <div className="rounded-3xl border border-dashed border-[#cdd5c3] p-12 text-center">
          <h2 className="text-3xl">No stories found just yet.</h2>
          <p className="mt-4">Try another word or explore all our stories.</p>
          <button
            className={`${primaryButton} mt-6`}
            onClick={() => {
              setQuery("");
              setCategory("All stories");
            }}
          >
            Show all stories <ArrowRight />
          </button>
        </div>
      )}
    </>
  );
}

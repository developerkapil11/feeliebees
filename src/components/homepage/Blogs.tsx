import Image from "next/image"
import { ArrowRight } from "lucide-react";
import { DoodleHeart } from "@/components/ui/brand";
import { useRouter } from "next/navigation";
import { posts as articles } from "@/lib/content";

export default function Blogs() {
    const router = useRouter()
    return (
        <section
        className="blog-section relative bg-cream px-[6%] pt-7 pb-8.75 desktop:pt-5 desktop:pb-6 tablet:pt-[1.8%] tablet:pb-[2.6%]"
        id="blog"
        aria-labelledby="blog-title"
        >
        <div className="blog-heading mb-5.5 flex items-start justify-between gap-2.5 desktop:mb-3.75 desktop:items-center desktop:gap-5 wide:mb-[.75em] wide:gap-[1em] [&_h2]:text-[30px] desktop:[&_h2]:text-[33px] tablet:[&_h2]:text-[max(36px,3.65vw)] [&_.doodle-heart]:ml-px [&_.doodle-heart]:text-[.57em] desktop:[&_.doodle-heart]:ml-2.5 [&_p]:mt-1.75 [&_p]:text-xs [&_p]:leading-[1.4] desktop:[&_p]:mt-0.5 desktop:[&_p]:text-[10px] tablet:[&_p]:text-[max(12px,1.3vw)] wide:[&_p]:mt-[.15em]">
          <div>
            <h2 id="blog-title">
              From Our Blog <DoodleHeart />
            </h2>
            <p>
              Practical tips, stories and resources for parents, caregivers and
              educators.
            </p>
          </div>
          <button
            className="text-button mt-3 inline-flex items-center gap-1 text-[10px] font-black whitespace-nowrap hover:text-orange desktop:mt-0 desktop:gap-2.25 desktop:text-[11px] tablet:text-[max(12px,1.15vw)] wide:gap-[.55em] [&>svg]:w-3.25 desktop:[&>svg]:w-4.25 wide:[&>svg]:size-[1em]"
            onClick={() => router.push("/blog")}
          >
            View All Posts <ArrowRight size={17} />
          </button>
        </div>
        <div className="blog-grid grid grid-cols-1 gap-5 desktop:grid-cols-3 desktop:gap-3.5 tablet:gap-4.25 min-[71.9375rem]:gap-6 wide:gap-[1.2em]">
          {articles.slice(0, 3).map((article, index) => (
            <article
              className="blog-card group overflow-hidden rounded-xl border border-[#efe6d9] bg-white transition duration-250 hover:-translate-y-1 hover:shadow-[0_10px_25px_#5541240d] desktop:rounded-[9px] wide:rounded-[.45em] [&_h3]:text-[19px] desktop:[&_h3]:min-h-[2.35em] desktop:[&_h3]:text-sm tablet:[&_h3]:text-[max(16px,1.55vw)] [&_h3>button]:text-left"
              key={article.title}
            >
              <button
                className="blog-card-image relative block aspect-[2.1] w-full overflow-hidden desktop:aspect-auto [&>img]:h-full [&>img]:w-full [&>img]:object-cover [&>img]:transition-transform [&>img]:duration-400 group-hover:[&>img]:scale-[1.04] desktop:[&>img]:relative desktop:[&>img]:block desktop:[&>img]:h-auto desktop:[&>img]:object-contain"
                onClick={() => router.push(`/blog/${articles[index].slug}`)}
                aria-label={`Read ${article.title}`}
              >
                <Image
                  src={`/assets/blog/${article.image}.webp`}
                  alt={
                    index === 0
                      ? "A mother and daughter sharing a happy moment"
                      : index === 1
                        ? "A hand holding colourful emotion cards"
                        : "A child enjoying a colouring activity"
                  }
                  width={1536}
                  height={1024}
                  sizes="(max-width: 600px) 90vw, 30vw"
                  className="object-cover"
                />
              </button>
              <div className="blog-card-copy px-5 py-4.25 desktop:px-3 desktop:pt-2.5 desktop:pb-3.25 min-[71.9375rem]:px-4.5 min-[71.9375rem]:pt-3 min-[71.9375rem]:pb-3.75 wide:px-[.9em] wide:pt-[.6em] wide:pb-[.75em]">
                <h3>
                  <button
                    onClick={() => router.push(`/blog/${articles[index].slug}`)}
                  >
                    {article.title}
                  </button>
                </h3>
                <button
                  className="read-more mt-3.25 inline-flex items-center gap-1 text-[13px] font-[850] text-[#f24b12] desktop:mt-2.75 desktop:text-[max(12px,1.05vw)] wide:mt-[.75em] wide:gap-[.3em] wide:[&>svg]:size-[1em]"
                  onClick={() => router.push(`/blog/${articles[index].slug}`)}
                >
                  Read More <ArrowRight size={15} />
                </button>
              </div>
            </article>
          ))}
        </div>
        </section>
    )
}
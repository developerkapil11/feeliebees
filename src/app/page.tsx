"use client";

import Image from "next/image";

const features = [
  {
    icon: "💛",
    title: "Builds Emotional Skills",
  },
  {
    icon: "🌱",
    title: "Fun & Engaging",
  },
  {
    icon: "⭐",
    title: "Loved by Families",
  },
];

const productFeatures = [
  {
    icon: "📖",
    title: "Beautiful Storybook",
  },
  {
    icon: "💌",
    title: "Feeling Cards",
  },
  {
    icon: "🌱",
    title: "Guided Activities",
  },
  {
    icon: "❤️",
    title: "Real-Life Tools",
  },
];

const activities = [
  {
    emoji: "😊",
    title: "My Feelings Chart",
    description: "Help children identify and talk about their emotions.",
  },
  {
    emoji: "🦊",
    title: "Breathe Like a Fox",
    description: "A playful breathing activity for big feelings.",
  },
  {
    emoji: "🎨",
    title: "Feelings Coloring",
    description: "A creative way to explore different emotions.",
  },
];

const posts = [
  {
    category: "Parents",
    title: "5 Simple Ways to Help Children Talk About Their Feelings",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9",
  },
  {
    category: "Emotional Learning",
    title: "Why Emotional Learning Matters in Early Childhood",
    image: "https://images.unsplash.com/photo-1472162072942-cd5147eb3902",
  },
  {
    category: "Activities",
    title: "Fun Activities to Explore Feelings at Home",
    image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#FFFDF8] text-[#173B5E]">
      <Navbar />

      <Hero />

      <BrandStory />

      <ProductSection />

      <ActivitiesSection />

      <BlogSection />

      <CTA />

      <Footer />
    </main>
  );
}

/* ---------------------------------- */
/* NAVBAR */
/* ---------------------------------- */

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-orange-100/50 bg-[#FFFDF8]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFD45C] text-xl">
            🐝
          </div>

          <div>
            <div className="text-xl font-extrabold tracking-tight text-[#173B5E]">
              Feelie<span className="text-[#F47D8A]">Bees</span>
            </div>

            <div className="text-[9px] font-semibold uppercase tracking-wider text-[#7B8B9A]">
              Big Feelings. Brighter Tomorrows.
            </div>
          </div>
        </a>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-7 text-sm font-semibold lg:flex">
          <a href="#" className="transition hover:text-[#F47D8A]">
            Home
          </a>
          <a href="#shop" className="transition hover:text-[#F47D8A]">
            Shop
          </a>
          <a href="#activities" className="transition hover:text-[#F47D8A]">
            Activities
          </a>
          <a href="#blog" className="transition hover:text-[#F47D8A]">
            Blog
          </a>
          <a href="#faq" className="transition hover:text-[#F47D8A]">
            FAQ
          </a>
          <a href="#contact" className="transition hover:text-[#F47D8A]">
            Contact
          </a>
        </nav>

        <div className="hidden lg:block">
          <AmazonButton />
        </div>

        {/* Mobile menu */}
        <button className="rounded-full bg-white p-3 shadow-sm lg:hidden">
          ☰
        </button>
      </div>
    </header>
  );
}

/* ---------------------------------- */
/* AMAZON BUTTON */
/* ---------------------------------- */

function AmazonButton() {
  return (
    <button className="rounded-full bg-[#FFD45C] px-6 py-3 text-sm font-bold text-[#173B5E] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <span className="mr-2">a</span>
      Buy on Amazon
    </button>
  );
}

/* ---------------------------------- */
/* HERO */
/* ---------------------------------- */

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#FFFDF8] via-[#FFF3EE] to-[#EAF8F7]">
      {/* Decorative shapes */}
      <div className="absolute left-5 top-16 text-3xl opacity-70">🌼</div>
      <div className="absolute right-10 top-24 text-3xl opacity-70">💛</div>
      <div className="absolute bottom-10 left-1/3 text-2xl opacity-50">
        ✨
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 lg:grid-cols-2 lg:px-8 lg:py-24">
        {/* Content */}
        <div>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#F47D8A]">
            A kinder, brighter way to explore emotions
          </p>

          <h1 className="max-w-xl text-5xl font-black leading-[1.05] tracking-tight text-[#173B5E] sm:text-6xl">
            Helping little hearts understand{" "}
            <span className="relative inline-block">
              big feelings
              <span className="absolute -right-8 -top-4 text-3xl">❤️</span>
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-[#52677A]">
            Heartly&apos;s Pocket of Feelings helps children recognize,
            understand, and express their emotions through stories, activities
            and gentle guidance.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-full bg-[#F47D8A] px-7 py-4 font-bold text-white shadow-lg shadow-pink-100 transition hover:-translate-y-1">
              Explore Heartly →
            </button>

            <button className="rounded-full border-2 border-[#173B5E]/15 bg-white px-7 py-4 font-bold text-[#173B5E] transition hover:border-[#FFD45C]">
              <span className="mr-2">a</span>
              Buy on Amazon
            </button>
          </div>

          {/* Features */}
          <div className="mt-10 grid max-w-xl grid-cols-3 gap-4">
            {features.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="mb-2 text-2xl">{feature.icon}</div>
                <p className="text-xs font-bold leading-4 text-[#52677A]">
                  {feature.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Product visual */}
        <div className="relative flex min-h-[480px] items-center justify-center">
          <div className="absolute h-[420px] w-[420px] rounded-full bg-[#FFDDE1] blur-2xl" />

          <div className="relative">
            {/* Fox */}
            <div className="relative z-10 flex h-72 w-64 items-center justify-center rounded-[45%] bg-gradient-to-b from-[#F49A62] to-[#E87548] shadow-xl">
              <div className="absolute -top-12 text-8xl">🦊</div>

              <div className="mt-20 flex h-24 w-24 items-center justify-center rounded-full bg-white/80 text-5xl">
                ❤️
              </div>
            </div>

            {/* Product box */}
            <div className="absolute -bottom-4 -right-20 z-20 w-48 rotate-3 rounded-2xl border-4 border-white bg-[#A8D8D5] p-4 shadow-2xl">
              <div className="rounded-xl bg-[#FFF8E8] p-4">
                <p className="text-center text-xs font-bold uppercase tracking-wide">
                  Heartly&apos;s
                </p>
                <p className="mt-1 text-center text-xl font-black leading-tight">
                  Pocket of Feelings
                </p>

                <div className="mt-4 text-center text-5xl">🦊</div>
              </div>
            </div>

            {/* Emotion cards */}
            <div className="absolute -bottom-16 -left-16 z-30 flex gap-2">
              {["😊", "😌", "💗", "⭐"].map((emoji, index) => (
                <div
                  key={index}
                  className={`flex h-16 w-14 rotate-${
                    index % 2 === 0 ? "2" : "[-3deg]"
                  } items-center justify-center rounded-xl bg-white text-3xl shadow-lg`}
                >
                  {emoji}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- */
/* BRAND STORY */
/* ---------------------------------- */

function BrandStory() {
  return (
    <section className="relative bg-[#FFFDF8] px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <div className="mb-4 text-3xl">🐝</div>

        <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
          Meet FeelieBees
        </h2>

        <p className="mt-6 text-lg leading-8 text-[#52677A]">
          At FeelieBees, we believe every feeling matters. Our resources help
          children build emotional awareness, confidence and kindness through
          playful stories, meaningful activities and everyday conversations.
        </p>

        <button className="mt-8 rounded-full bg-[#FFD45C] px-7 py-3 font-bold text-[#173B5E]">
          Our Story →
        </button>
      </div>
    </section>
  );
}

/* ---------------------------------- */
/* PRODUCT */
/* ---------------------------------- */

function ProductSection() {
  return (
    <section id="shop" className="bg-[#FFF3DF] px-5 py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        <div>
          <p className="font-bold uppercase tracking-widest text-[#F47D8A]">
            Our first product
          </p>

          <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
            Heartly&apos;s Pocket of Feelings
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#52677A]">
            A playful and meaningful way for children ages 3–7 to explore,
            understand and express their emotions.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            {productFeatures.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-white p-5 shadow-sm"
              >
                <div className="text-3xl">{item.icon}</div>
                <p className="mt-3 text-sm font-bold">{item.title}</p>
              </div>
            ))}
          </div>

          <button className="mt-8 rounded-full bg-[#F47D8A] px-7 py-4 font-bold text-white">
            Shop Now →
          </button>
        </div>

        <div className="relative flex justify-center">
          <div className="absolute h-80 w-80 rounded-full bg-[#D7EFEB]" />

          <div className="relative z-10 w-full max-w-md rounded-3xl bg-[#B9DCD7] p-8 shadow-xl">
            <div className="rounded-2xl bg-[#FFF8E8] p-8">
              <div className="text-center text-sm font-bold uppercase tracking-wider">
                Heartly&apos;s
              </div>

              <div className="mt-2 text-center text-3xl font-black">
                Pocket of Feelings
              </div>

              <div className="py-8 text-center text-8xl">🦊</div>

              <div className="flex justify-center gap-3">
                {["😊", "😌", "🥰", "⭐"].map((emoji) => (
                  <div
                    key={emoji}
                    className="flex h-14 w-12 items-center justify-center rounded-xl bg-white shadow-sm"
                  >
                    {emoji}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- */
/* ACTIVITIES */
/* ---------------------------------- */

function ActivitiesSection() {
  return (
    <section
      id="activities"
      className="bg-[#DDF3F1] px-5 py-20 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="font-bold uppercase tracking-widest text-[#F47D8A]">
              Free resources
            </p>

            <h2 className="mt-3 text-4xl font-black sm:text-5xl">
              Free Activities
            </h2>

            <p className="mt-5 max-w-lg text-lg leading-8 text-[#52677A]">
              Fun and engaging resources to help children learn about
              feelings, creativity and connection.
            </p>

            <button className="mt-8 rounded-full bg-[#FFD45C] px-7 py-4 font-bold text-[#173B5E]">
              Explore Free Activities →
            </button>
          </div>

          <div className="grid gap-5 sm:grid-cols-3">
            {activities.map((activity) => (
              <div
                key={activity.title}
                className="rounded-3xl bg-white p-5 shadow-md"
              >
                <div className="flex aspect-square items-center justify-center rounded-2xl bg-[#FFF3DF] text-6xl">
                  {activity.emoji}
                </div>

                <h3 className="mt-5 font-black">{activity.title}</h3>

                <p className="mt-2 text-sm leading-6 text-[#6B7C8C]">
                  {activity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- */
/* BLOG */
/* ---------------------------------- */

function BlogSection() {
  return (
    <section id="blog" className="bg-[#FFFDF8] px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-end justify-between gap-5">
          <div>
            <p className="font-bold uppercase tracking-widest text-[#F47D8A]">
              From our blog
            </p>

            <h2 className="mt-2 text-4xl font-black sm:text-5xl">
              Ideas for growing hearts
            </h2>
          </div>

          <button className="hidden font-bold sm:block">
            View All Posts →
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="overflow-hidden rounded-3xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative h-52 overflow-hidden bg-[#DDEFEA]">
                <Image
                  src={post.image}
                  alt=""
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>

              <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-[#F47D8A]">
                  {post.category}
                </p>

                <h3 className="mt-3 text-xl font-black leading-7">
                  {post.title}
                </h3>

                <button className="mt-5 font-bold text-[#F47D8A]">
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- */
/* CTA */
/* ---------------------------------- */

function CTA() {
  return (
    <section className="px-5 py-16 lg:px-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[40px] bg-[#173B5E] px-8 py-16 text-center text-white sm:px-16">
        <div className="text-4xl">💛 🐝 ❤️</div>

        <h2 className="mx-auto mt-5 max-w-2xl text-4xl font-black sm:text-5xl">
          Big feelings deserve little tools that help.
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-white/75">
          Explore FeelieBees resources and discover playful ways to help little
          hearts understand their emotions.
        </p>

        <button className="mt-8 rounded-full bg-[#FFD45C] px-8 py-4 font-bold text-[#173B5E]">
          Explore FeelieBees →
        </button>
      </div>
    </section>
  );
}

/* ---------------------------------- */
/* FOOTER */
/* ---------------------------------- */

function Footer() {
  return (
    <footer id="contact" className="border-t border-orange-100 bg-[#FFF8EA]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFD45C]">
              🐝
            </div>

            <div className="text-xl font-black">
              Feelie<span className="text-[#F47D8A]">Bees</span>
            </div>
          </div>

          <p className="mt-4 max-w-xs text-sm leading-6 text-[#6B7C8C]">
            Helping little hearts understand big feelings through playful
            resources and meaningful connection.
          </p>
        </div>

        <div>
          <h3 className="font-black">Explore</h3>

          <div className="mt-4 space-y-3 text-sm text-[#6B7C8C]">
            <a href="#shop" className="block hover:text-[#F47D8A]">
              Shop
            </a>
            <a href="#activities" className="block hover:text-[#F47D8A]">
              Free Activities
            </a>
            <a href="#blog" className="block hover:text-[#F47D8A]">
              Blog
            </a>
            <a href="#faq" className="block hover:text-[#F47D8A]">
              FAQ
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-black">Connect</h3>

          <div className="mt-4 space-y-3 text-sm text-[#6B7C8C]">
            <a href="#" className="block hover:text-[#F47D8A]">
              Instagram
            </a>

            <a href="#" className="block hover:text-[#F47D8A]">
              Contact Us
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-black">Legal</h3>

          <div className="mt-4 space-y-3 text-sm text-[#6B7C8C]">
            <a href="#" className="block hover:text-[#F47D8A]">
              Privacy Policy
            </a>

            <a href="#" className="block hover:text-[#F47D8A]">
              Terms of Use
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-orange-100 px-5 py-6 text-center text-sm text-[#7B8B9A]">
        © 2026 FeelieBees. All rights reserved.
      </div>
    </footer>
  );
}
"use client";

import { v2Header } from "@/components/v2-styles";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowRight, Menu, Search, X, ExternalLink } from "lucide-react";
import Logo from "@/components/ui/logo";
import { navigation, site } from "@/lib/site";
import { posts, products } from "@/lib/content";
import { Dialog } from "@/components/ui/dialog";

export function Header2() {
  const pathname = usePathname();

  const links = navigation
    .filter((item) => item.label !== "Our Story")
    .map((item) => ({
      ...item,
      label: item.label === "Free Activities" ? "Activities" : item.label,
    }));

  const active = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));

  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState(false);
  const [query, setQuery] = useState("");

  const results = [
    ...products.map((product) => ({
      label: product.name,
      href: `/shop/${product.slug}`,
      category: "Shop",
    })),
    {
      label: "Free printable activities",
      href: "/activities",
      category: "Play & learn",
    },
    {
      label: "Frequently asked questions",
      href: "/faq",
      category: "Helpful answers",
    },
    ...posts.map((post) => ({
      label: post.title,
      href: `/blog/${post.slug}`,
      category: post.category,
    })),
  ].filter((item) =>
    `${item.label} ${item.category}`
      .toLowerCase()
      .includes(query.toLowerCase())
  );

  return (
    <>
      <a
        href="#main"
        className="fixed -top-24 left-4 z-100 rounded-xl bg-white px-5 py-3 focus:top-3"
      >
        Skip to content
      </a>
  
      <header
        id="contact-header"
        data-variant="v2"
        data-page="inner"
        className="absolute top-0 left-0 z-50 w-full"
      >
        <div className="mx-auto mt-6 w-[92%] tablet:w-[85%]">
          <div className="header-inner flex min-h-19 items-center justify-between gap-3 rounded-full bg-white/85 px-6 py-2 shadow-[0_8px_30px_rgba(16,35,68,0.08)] wide:min-h-[5.8vw] wide:gap-[1.2vw] wide:px-[2vw]">
  
            {/* Logo */}
            <Link
              href="/"
              className="shrink-0"
              aria-label="FeelieBees home"
              onClick={() => setMenu(false)}
            >
              <Logo />
            </Link>
  
            {/* DesktopNavigation */}
            <nav
              aria-label="Main navigation"
              className="desktop-nav ml-auto hidden items-center gap-[1.7vw] tablet:flex"
            >
              {links.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={
                    active(item.href) ? "page" : undefined
                  }
                  className={`relative rounded-full px-4 py-3 text-[max(11px,.98vw)] font-black whitespace-nowrap transition-colors ${
                    active(item.href)
                      ? "bg-[#ffdfe3] text-[#ff5c72]"
                      : "text-navy hover:text-orange"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
  
            {/* Actions */}
            <div className="flex items-center gap-1 wide:gap-[.7vw]">
  
              <button
                aria-label="Search FeelieBees"
                onClick={() => {
                  setSearch(true);
                  setMenu(false);
                }}
                className="grid size-11 place-items-center rounded-full hover:bg-cream wide:size-[3vw]"
              >
                <Search className="size-[max(21px,1.5vw)]" />
              </button>
  
              <a
                href={site.amazon}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden items-center gap-2 rounded-full border-2 border-[#ffe99a] bg-sunshine px-[1.2em] py-[.7em] text-[max(11px,.95vw)] font-black min-[75rem]:inline-flex"
              >
                Buy on Amazon
                <ExternalLink className="size-[1em]" />
              </a>
  
              <button
                aria-label={menu ? "Close navigation" : "Open navigation"}
                aria-expanded={menu}
                aria-controls="mobile-nav"
                onClick={() => setMenu(!menu)}
                className="grid size-11 place-items-center rounded-full hover:bg-cream tablet:hidden"
              >
                {menu ? <X /> : <Menu />}
              </button>
  
            </div>
          </div>
  
          {/* Mobile menu */}
          {menu && (
            <nav
              id="mobile-nav"
              aria-label="Mobile navigation"
              className="absolute inset-x-0 mt-2 grid rounded-3xl border border-[#e9e3d1] bg-white px-[6%] pb-5 shadow-lg tablet:hidden"
            >
              {links.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenu(false)}
                  className="flex items-center justify-between border-b border-[#f1ecdf] py-3 font-extrabold"
                >
                  {item.label}
                  <ArrowRight size={17} />
                </Link>
              ))}
            </nav>
          )}
        </div>
      </header>
  
      {/* Search Dialog */}
      {search && (
        <Dialog
            title="A little help finding things"
            close={() => setSearch(false)} children={undefined}        >
          {/* your existing search content */}
        </Dialog>
      )}
    </>
  );
}
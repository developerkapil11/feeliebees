"use client";

import { headerClasses, headerStyles } from "./header-styles";
import Image from "next/image";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight, Menu, Search, ShoppingBag, X } from "lucide-react";
import { navigation } from "@/lib/site";
import { posts, products } from "@/lib/content";
import { CART_UPDATED_EVENT, getCartCount } from "@/lib/cart";
import { Dialog } from "@/components/ui/dialog";
import { field } from "@/components/ui/page-ui";

export function Header() {
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
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const syncCartCount = () => setCartCount(getCartCount());
    syncCartCount();
    window.addEventListener(CART_UPDATED_EVENT, syncCartCount);
    window.addEventListener("storage", syncCartCount);

    return () => {
      window.removeEventListener(CART_UPDATED_EVENT, syncCartCount);
      window.removeEventListener("storage", syncCartCount);
    };
  }, []);

  if (pathname.startsWith("/studio")) {
    return null;
  }

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
    `${item.label} ${item.category}`.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <>
      <div className="relative z-50 h-0">
        <header
          id="home"
          data-variant="v2"
          className={`site-header relative z-50 ${headerStyles}`}
        >
          <div className="header-inner mx-auto flex min-h-19 w-[92%] items-center justify-between gap-3 py-2 tablet:w-[90%] wide:min-h-[5.8vw] wide:gap-[1.2vw]">
            <Link
              href="/"
              className="shrink-0"
              aria-label="FeelieBees home"
              onClick={() => setMenu(false)}
            >
              <Image
                src="/assets/logo/logo.png"
                alt="Feelie Bees"
                width={588}
                height={191}
                className={headerClasses("v2-logo")}
                priority
              />
            </Link>
            <nav
              aria-label="Main navigation"
              className="desktop-nav ml-auto hidden items-center gap-[1.7vw] tablet:flex"
            >
              {links.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active(item.href) ? "page" : undefined}
                  className={`relative py-3 text-[max(11px,.98vw)] font-black whitespace-nowrap transition-colors hover:text-orange ${active(item.href) ? "text-orange after:absolute after:inset-x-0 after:bottom-1 after:h-0.5 after:bg-orange" : ""}`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="flex items-center gap-1 wide:gap-[.7vw]">
              <Link
                href="/cart"
                aria-label={`Shopping cart${cartCount ? ` with ${cartCount} ${cartCount === 1 ? "item" : "items"}` : ""}`}
                aria-current={active("/cart") ? "page" : undefined}
                className="relative grid size-11 place-items-center rounded-full border-2 border-orange bg-white text-orange transition hover:-translate-y-0.5 hover:bg-[#fff7ee]"
                onClick={() => setMenu(false)}
              >
                <ShoppingBag className="size-[max(20px,1.4vw)]" aria-hidden="true" />
                {cartCount > 0 && (
                  <span className="absolute -right-1 -top-1 grid min-h-5 min-w-5 place-items-center rounded-full bg-navy px-1 text-[10px] font-black leading-none text-white">
                    {cartCount > 99 ? "99+" : cartCount}
                  </span>
                )}
              </Link>
              <button
                aria-label="Search FeelieBees"
                onClick={() => {
                  setSearch(true);
                  setMenu(false);
                }}
                className="grid size-11 place-items-center rounded-full button-orange wide:size-[3vw]"
              >
                <Search className="size-[max(21px,1.5vw)]" />
              </button>
              <button
                aria-label={menu ? "Close navigation" : "Open navigation"}
                aria-expanded={menu}
                aria-controls="mobile-nav"
                onClick={() => setMenu(!menu)}
                className="grid size-11 place-items-center rounded-full button-orange tablet:hidden"
              >
                {menu ? <X /> : <Menu />}
              </button>
            </div>
          </div>
          {menu && (
            <nav
              id="mobile-nav"
              aria-label="Mobile navigation"
              className="absolute inset-x-0 grid border-b border-[#e9e3d1] bg-white px-[6%] pb-5 shadow-lg tablet:hidden"
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
        </header>
      </div>
      {search && (
        <Dialog
          title="A little help finding things"
          close={() => setSearch(false)}
        >
          <label htmlFor="site-search" className="sr-only">
            Search content
          </label>
          <input
            autoFocus
            id="site-search"
            className={field}
            placeholder="Try feelings, activities, or Heartly…"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <div className="mt-5 grid gap-1" aria-live="polite">
            {results.length ? (
              results.map((result) => (
                <Link
                  key={result.href}
                  href={result.href}
                  onClick={() => setSearch(false)}
                  className="flex items-center justify-between gap-4 rounded-xl border-b border-[#ede5d6] p-3 text-base hover:bg-[#fff0d0]"
                >
                  <span>
                    <strong>{result.label}</strong>
                    <span className="mt-1 block text-xs text-[#637369]">
                      {result.category}
                    </span>
                  </span>
                  <ArrowRight className="size-5 shrink-0" />
                </Link>
              ))
            ) : (
              <p className="py-5 text-base">
                No matches yet. Try “feelings” or “activities”.
              </p>
            )}
          </div>
        </Dialog>
      )}
    </>
  );
}

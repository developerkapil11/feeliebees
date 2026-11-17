"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Minus,
  Plus,
  RotateCcw,
  ShieldCheck,
  ShoppingBag,
  Trash2,
  Truck,
} from "lucide-react";

import {
  CART_UPDATED_EVENT,
  cartProduct,
  clearCart,
  formatCartPrice,
  getProductQuantity,
  setProductQuantity,
} from "@/lib/cart";
import { button } from "@/components/ui/page-ui";

export function CartPage() {
  const [quantity, setQuantity] = useState<number | null>(null);

  useEffect(() => {
    const syncCart = () => setQuantity(getProductQuantity());
    syncCart();

    window.addEventListener(CART_UPDATED_EVENT, syncCart);
    window.addEventListener("storage", syncCart);
    return () => {
      window.removeEventListener(CART_UPDATED_EVENT, syncCart);
      window.removeEventListener("storage", syncCart);
    };
  }, []);

  function updateQuantity(nextQuantity: number) {
    setQuantity(setProductQuantity(nextQuantity));
  }

  function removeItem() {
    clearCart();
    setQuantity(0);
  }

  const isLoading = quantity === null;
  const subtotal = cartProduct.price * (quantity || 0);

  return (
    <main id="main" className="min-h-[70vh] bg-cream px-[6%] pb-14 pt-28 tablet:pb-20 tablet:pt-32">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-3 border-b border-[#ded9ca] pb-5">
          <div>
            <p className="text-sm font-black tracking-[.14em] text-[#438451] uppercase">
              FeelieBees shop
            </p>
            <h1 className="mt-1 text-[clamp(42px,5vw,68px)] leading-none text-orange">
              Your cart
            </h1>
          </div>
          {!isLoading && quantity > 0 && (
            <p className="text-sm font-extrabold text-navy">
              {quantity} {quantity === 1 ? "item" : "items"}
            </p>
          )}
        </div>

        {isLoading ? (
          <div className="mt-8 h-72 animate-pulse rounded-3xl bg-white/70" />
        ) : quantity === 0 ? (
          <section className="mx-auto flex max-w-xl flex-col items-center py-16 text-center tablet:py-24">
            <span className="grid size-20 place-items-center rounded-full bg-[#e7efd9] text-[#438451]">
              <ShoppingBag className="size-9" aria-hidden="true" />
            </span>
            <h2 className="mt-6 text-[clamp(30px,3vw,42px)] text-navy">
              Your cart is waiting for a little joy.
            </h2>
            <p className="mt-3 max-w-md text-base leading-relaxed text-[#52616c]">
              Add Heartly’s Pocket of Feelings to begin your order preview.
            </p>
            <Link href="/shop" className={`${button} button-orange mt-6`}>
              Shop Heartly <ArrowRight aria-hidden="true" />
            </Link>
          </section>
        ) : (
          <div className="mt-8 grid items-start gap-8 desktop:grid-cols-[1.45fr_.75fr] desktop:gap-12">
            <section aria-labelledby="cart-items-title">
              <h2 id="cart-items-title" className="sr-only">
                Cart items
              </h2>

              <article className="grid gap-5 rounded-3xl border border-[#e8dfcc] bg-white p-4 shadow-[0_12px_35px_#6f4b2210] sm:grid-cols-[180px_1fr] tablet:p-6">
                <Link
                  href="/shop"
                  className="relative aspect-4/3 overflow-hidden rounded-2xl bg-[#f8f1df]"
                  aria-label={`View ${cartProduct.name}`}
                >
                  <Image
                    src={cartProduct.image}
                    alt={cartProduct.name}
                    fill
                    sizes="(max-width: 639px) 88vw, 180px"
                    className="object-cover"
                  />
                </Link>

                <div className="flex min-w-0 flex-col justify-between gap-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <Link href="/shop" className="hover:text-orange">
                        <h2 className="text-2xl font-extrabold leading-tight text-navy">
                          {cartProduct.name}
                        </h2>
                      </Link>
                      <p className="mt-2 max-w-xl text-sm leading-relaxed text-[#5e6a72]">
                        {cartProduct.description}
                      </p>
                      <p className="mt-2 text-xs font-bold text-[#738078]">
                        Demo price for layout preview
                      </p>
                    </div>
                    <p className="shrink-0 text-lg font-black text-navy">
                      {formatCartPrice(cartProduct.price * quantity)}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div
                      className="inline-flex items-center rounded-full border border-[#d9d9cc] bg-[#fffdf7] p-1"
                      aria-label="Product quantity"
                    >
                      <button
                        type="button"
                        onClick={() => updateQuantity(quantity - 1)}
                        className="grid size-9 place-items-center rounded-full transition hover:bg-[#edf3e1]"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="size-4" aria-hidden="true" />
                      </button>
                      <span className="min-w-9 text-center text-sm font-black" aria-live="polite">
                        {quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(quantity + 1)}
                        className="grid size-9 place-items-center rounded-full transition hover:bg-[#edf3e1]"
                        aria-label="Increase quantity"
                      >
                        <Plus className="size-4" aria-hidden="true" />
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={removeItem}
                      className="inline-flex items-center gap-2 text-sm font-extrabold text-[#8c4444] transition hover:text-[#bd3939]"
                    >
                      <Trash2 className="size-4" aria-hidden="true" />
                      Remove
                    </button>
                  </div>
                </div>
              </article>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {[
                  {
                    icon: Truck,
                    title: "Delivery",
                    description: "Calculated at checkout",
                  },
                  {
                    icon: RotateCcw,
                    title: "Easy changes",
                    description: "Adjust your cart anytime",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Safe preview",
                    description: "No payment is collected",
                  },
                ].map(({ icon: Icon, title, description }) => (
                  <div key={title} className="rounded-2xl bg-[#eef2df] p-4">
                    <Icon className="size-5 text-[#438451]" aria-hidden="true" />
                    <p className="mt-2 text-sm font-black text-navy">{title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-[#5e6a72]">
                      {description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <aside className="rounded-3xl border border-[#e8dfcc] bg-white p-6 shadow-[0_16px_45px_#6f4b2214] desktop:sticky desktop:top-6">
              <h2 className="text-2xl font-extrabold text-navy">Order summary</h2>
              <dl className="mt-5 space-y-3 text-sm">
                <div className="flex justify-between gap-4">
                  <dt>Subtotal</dt>
                  <dd className="font-extrabold">{formatCartPrice(subtotal)}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt>Shipping</dt>
                  <dd className="text-right font-extrabold">Calculated next</dd>
                </div>
                <div className="flex justify-between gap-4 border-t border-[#e9e3d6] pt-4 text-lg">
                  <dt className="font-black">Estimated total</dt>
                  <dd className="font-black">{formatCartPrice(subtotal)}</dd>
                </div>
              </dl>

              <Link href="/checkout" className={`${button} button-orange mt-6 w-full`}>
                Proceed to Checkout <ArrowRight aria-hidden="true" />
              </Link>
              <p className="mt-3 text-center text-xs leading-relaxed text-[#6e7772]">
                Checkout is a visual preview. Payments are not enabled yet.
              </p>
            </aside>
          </div>
        )}
      </div>
    </main>
  );
}

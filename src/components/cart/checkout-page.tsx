
"use client";

import { FormEvent, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, LockKeyhole } from "lucide-react";

import {
  CART_UPDATED_EVENT,
  cartProduct,
  formatCartPrice,
  getProductQuantity,
} from "@/lib/cart";
import { button, field } from "@/components/ui/page-ui";

export function CheckoutPage() {
  const [quantity, setQuantity] = useState<number | null>(null);
  const [showDemoNotice, setShowDemoNotice] = useState(false);

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

  function previewOrder(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setShowDemoNotice(true);
  }

  if (quantity === null) {
    return <main id="main" className="min-h-[70vh] bg-cream pt-28" />;
  }

  if (quantity === 0) {
    return (
      <main
        id="main"
        className="min-h-[70vh] bg-cream px-[6%] pb-16 pt-32"
      >
        <div className="mx-auto max-w-xl rounded-3xl bg-white p-8 text-center shadow-sm tablet:p-12">
          <h1 className="text-[clamp(38px,4vw,54px)] text-orange">
            Your cart is empty
          </h1>

          <p className="mt-3 text-base text-[#5e6a72]">
            Add Heartly’s Pocket of Feelings before previewing checkout.
          </p>

          <Link href="/shop" className={`${button} button-orange mt-6`}>
            Return to the shop
          </Link>
        </div>
      </main>
    );
  }

  const subtotal = cartProduct.price * quantity;

  return (
    <main
      id="main"
      className="min-h-[70vh] bg-cream px-[6%] pb-16 pt-28 tablet:pb-20 tablet:pt-32"
    >
      <div className="mx-auto max-w-6xl">

        {/* Back to cart */}
        <Link
          href="/cart"
          className="inline-flex items-center gap-2 text-sm font-extrabold text-navy hover:text-orange"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          Return to cart
        </Link>

        {/* Checkout Heading - Full Width */}
        <div className="mb-7 mt-7 border-b border-[#e8dfcc] pb-6">
          <h1 className="text-[clamp(40px,4vw,58px)] leading-none text-orange">
            Checkout
          </h1>

          <p className="mt-3 text-base text-[#5e6a72]">
            A gentle preview of the future checkout experience.
          </p>
        </div>

        {/* Delivery + Order Summary - Same Row */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.75fr)] lg:gap-12">

          {/* Left: Delivery Form */}
          <form onSubmit={previewOrder} className="min-w-0 space-y-6">

            <section
              className="rounded-3xl border border-[#e8dfcc] bg-white p-5 tablet:p-7"
              aria-labelledby="delivery-title"
            >
              <h2
                id="delivery-title"
                className="text-2xl font-extrabold text-navy"
              >
                Delivery details
              </h2>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">

                <label className="block text-sm font-extrabold text-navy">
                  First name
                  <input
                    className={`${field} mt-1.5`}
                    autoComplete="given-name"
                  />
                </label>

                <label className="block text-sm font-extrabold text-navy">
                  Last name
                  <input
                    className={`${field} mt-1.5`}
                    autoComplete="family-name"
                  />
                </label>

                <label className="block text-sm font-extrabold text-navy sm:col-span-2">
                  Address
                  <input
                    className={`${field} mt-1.5`}
                    autoComplete="street-address"
                  />
                </label>

                <label className="block text-sm font-extrabold text-navy">
                  Town or city
                  <input
                    className={`${field} mt-1.5`}
                    autoComplete="address-level2"
                  />
                </label>

                <label className="block text-sm font-extrabold text-navy">
                  Postcode
                  <input
                    className={`${field} mt-1.5`}
                    autoComplete="postal-code"
                  />
                </label>

              </div>
            </section>

            {/* Preview Order Button */}
            <button
              type="submit"
              className={`${button} button-orange w-full`}
            >
              <LockKeyhole aria-hidden="true" />
              Preview order
            </button>

            {showDemoNotice && (
              <p
                role="status"
                className="flex items-start gap-2 rounded-2xl bg-[#e5f0dc] p-4 text-sm font-bold text-[#315e3d]"
              >
                <CheckCircle2
                  className="mt-0.5 size-5 shrink-0"
                  aria-hidden="true"
                />

                Preview complete. No order was created and no information was sent.
              </p>
            )}
          </form>

          {/* Right: Order Summary */}
          <aside className="min-w-0 rounded-3xl border border-[#e8dfcc] bg-white p-5 shadow-[0_16px_45px_#6f4b2214] tablet:p-6 lg:top-6">

            <h2 className="text-2xl font-extrabold text-navy">
              Order summary
            </h2>

            {/* Product */}
            <div className="mt-5 flex gap-4">

              <div className="relative size-24 shrink-0 overflow-hidden rounded-2xl bg-[#f8f1df]">
                <Image
                  src={cartProduct.image}
                  alt=""
                  fill
                  sizes="96px"
                  className="object-cover"
                />

                <span className="absolute right-1 top-1 grid size-6 place-items-center rounded-full bg-navy text-xs font-black text-white">
                  {quantity}
                </span>
              </div>

              <div className="min-w-0 flex-1">
                <p className="font-extrabold leading-snug text-navy">
                  {cartProduct.name}
                </p>

                <p className="mt-1 text-xs text-[#738078]">
                  Demo price
                </p>

                <p className="mt-2 font-black text-navy">
                  {formatCartPrice(subtotal)}
                </p>
              </div>

            </div>

            {/* Price Details */}
            <dl className="mt-6 space-y-3 border-t border-[#e9e3d6] pt-5 text-sm">

              <div className="flex justify-between gap-4">
                <dt>Subtotal</dt>
                <dd className="font-extrabold">
                  {formatCartPrice(subtotal)}
                </dd>
              </div>

              <div className="flex justify-between gap-4">
                <dt>Shipping</dt>
                <dd className="font-extrabold">
                  Free{" "}
                  <span className="font-medium text-[#738078]">
                    (demo)
                  </span>
                </dd>
              </div>

              <div className="flex justify-between gap-4 border-t border-[#e9e3d6] pt-4 text-lg">
                <dt className="font-black">Total</dt>
                <dd className="font-black">
                  {formatCartPrice(subtotal)}
                </dd>
              </div>

            </dl>
          </aside>

        </div>
      </div>
    </main>
  );
}

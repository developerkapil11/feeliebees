import type { Metadata } from "next";

import { CartPage } from "@/components/cart/cart-page";

export const metadata: Metadata = {
  title: "Your Cart | FeelieBees",
  description: "Review Heartly’s Pocket of Feelings in your FeelieBees cart.",
};

export default function CartRoute() {
  return <CartPage />;
}

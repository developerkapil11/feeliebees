import type { Metadata } from "next";

import { CheckoutPage } from "@/components/cart/checkout-page";

export const metadata: Metadata = {
  title: "Checkout Preview | FeelieBees",
  description: "Preview the future FeelieBees checkout experience.",
};

export default function CheckoutRoute() {
  return <CheckoutPage />;
}

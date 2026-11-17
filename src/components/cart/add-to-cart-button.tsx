"use client";

import { useEffect, useRef, useState } from "react";
import { Check, ShoppingCart } from "lucide-react";

import { addProductToCart } from "@/lib/cart";

export function AddToCartButton({
  className = "",
  label = "Add to Cart",
}: {
  className?: string;
  label?: string;
}) {
  const [added, setAdded] = useState(false);
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (resetTimer.current) clearTimeout(resetTimer.current);
    },
    [],
  );

  function handleAdd() {
    addProductToCart();
    setAdded(true);

    if (resetTimer.current) clearTimeout(resetTimer.current);
    resetTimer.current = setTimeout(() => setAdded(false), 1800);
  }

  return (
    <button type="button" onClick={handleAdd} className={className}>
      {added ? <Check aria-hidden="true" /> : <ShoppingCart aria-hidden="true" />}
      {added ? "Added to Cart" : label}
    </button>
  );
}

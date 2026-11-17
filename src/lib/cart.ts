export const CART_STORAGE_KEY = "feeliebees-cart";
export const CART_UPDATED_EVENT = "feeliebees-cart-updated";

const MAX_QUANTITY = 20;

export const cartProduct = {
  slug: "heartlys-pocket-of-feelings",
  name: "Heartly’s Pocket of Feelings",
  image: "/assets/shop/heartlys-product-set.png",
  price: 39.99,
  currency: "GBP",
  description: "Storybook, Heartly plush, 9 feeling hearts, and 9 emotion cards",
} as const;

export type CartItem = {
  slug: typeof cartProduct.slug;
  quantity: number;
};

function clampQuantity(quantity: number) {
  return Math.min(MAX_QUANTITY, Math.max(0, Math.round(quantity)));
}

export function readCart(): CartItem[] {
  if (typeof window === "undefined") return [];

  try {
    const parsed: unknown = JSON.parse(
      window.localStorage.getItem(CART_STORAGE_KEY) || "[]",
    );

    if (!Array.isArray(parsed)) return [];

    return parsed.flatMap((item) => {
      if (!item || typeof item !== "object") return [];

      const candidate = item as Record<string, unknown>;
      if (
        candidate.slug !== cartProduct.slug ||
        typeof candidate.quantity !== "number"
      ) {
        return [];
      }

      const quantity = clampQuantity(candidate.quantity);
      return quantity ? [{ slug: cartProduct.slug, quantity }] : [];
    });
  } catch {
    return [];
  }
}

function writeCart(items: CartItem[]) {
  if (typeof window === "undefined") return;

  try {
    if (items.length) {
      window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    } else {
      window.localStorage.removeItem(CART_STORAGE_KEY);
    }

    window.dispatchEvent(new Event(CART_UPDATED_EVENT));
  } catch {
    // The cart remains a progressive enhancement if storage is unavailable.
  }
}

export function getProductQuantity() {
  return readCart().find((item) => item.slug === cartProduct.slug)?.quantity || 0;
}

export function getCartCount() {
  return readCart().reduce((total, item) => total + item.quantity, 0);
}

export function addProductToCart() {
  const quantity = clampQuantity(getProductQuantity() + 1);
  writeCart([{ slug: cartProduct.slug, quantity }]);
  return quantity;
}

export function setProductQuantity(quantity: number) {
  const nextQuantity = clampQuantity(quantity);
  writeCart(
    nextQuantity ? [{ slug: cartProduct.slug, quantity: nextQuantity }] : [],
  );
  return nextQuantity;
}

export function clearCart() {
  writeCart([]);
}

export function formatCartPrice(amount: number) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: cartProduct.currency,
  }).format(amount);
}

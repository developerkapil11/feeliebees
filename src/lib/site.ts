const demo = process.env.NEXT_PUBLIC_DEMO_MODE !== "false";

export const site = {
  demo,
  name: "FeelieBees",
  email: process.env.NEXT_PUBLIC_BUSINESS_EMAIL || (demo ? "hello@feeliebees.example" : ""),
  phone: process.env.NEXT_PUBLIC_BUSINESS_PHONE || (demo ? "+1 (202) 555-0147" : ""),
  address: process.env.NEXT_PUBLIC_BUSINESS_ADDRESS || (demo ? "123 Kindness Lane, Meadow Town (demo address)" : ""),
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://www.instagram.com/",
  amazon: process.env.NEXT_PUBLIC_AMAZON_URL || "https://www.amazon.com/s?k=Heartly%27s+Pocket+of+Feelings+FeelieBees",
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "Free Activities", href: "/activities" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  title: "FeelieBees | Little hearts. Big feelings.",
  description:
    "Help little hearts understand big feelings. Meet Heartly and explore playful stories, feelings cards, and free activities for children.",
  icons: { icon: "/bees.jpg" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className="scroll-smooth scroll-pt-6 motion-reduce:scroll-auto"
    >
      <body className="m-0 w-full bg-cream font-sans text-[15px] leading-[1.4] font-[650] text-navy antialiased desktop:text-[max(14px,1.38vw)] [&_h1]:font-display [&_h1]:font-bold [&_h2]:font-display [&_h2]:leading-[.98] [&_h2]:font-bold [&_h2]:tracking-[-.045em] [&_h3]:leading-[1.18] [&_h3]:font-[850] [&_button]:cursor-pointer [&_button]:touch-manipulation [&_a]:touch-manipulation [&_button:disabled]:cursor-not-allowed [&_button:disabled]:opacity-45 [&_:is(button,a,input)]:[-webkit-tap-highlight-color:transparent] [&_:is(button,a,summary):focus-visible]:rounded-[5px] [&_:is(button,a,summary):focus-visible]:outline-3 [&_:is(button,a,summary):focus-visible]:outline-offset-5 [&_:is(button,a,summary):focus-visible]:outline-[#1581be] [&_input:focus-visible]:outline-2 [&_input:focus-visible]:outline-offset-2 [&_input:focus-visible]:outline-[#1581be] motion-reduce:**:animate-nonemotion-reduce:**:transition-none">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

import Image from "next/image";

export function AdventureArt() {
  const art = (
    <Image
      src="/assets/homepage/adventure-with-board-text.webp"
      alt="Heartly leaps over a woodland bridge beside a sign reading: Builds emotional awareness; Encourages kindness and empathy; Supports real-life situations; Fun, hands-on learning."
      width={2172}
      height={724}
      sizes="100vw"
      className="section-art pointer-events-none absolute inset-0 z-0 h-full w-full object-cover desktop:relative desktop:inset-auto desktop:col-start-1 desktop:row-start-1 desktop:block desktop:h-auto desktop:object-contain"
    />
  );
  return art;
}

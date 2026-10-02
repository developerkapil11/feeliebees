import Image from "next/image";

export function AdventureArt({ src }: { src: string }) {
  const art = (
    <Image
      src={src}
      unoptimized
      alt="Playful foxes explore a woodland clearing while a fox family shares a quiet moment beside a green sofa"
      width={2172}
      height={724}
      sizes="100vw"
      className="section-art pointer-events-none absolute inset-0 z-0 h-full w-full object-cover desktop:relative desktop:inset-auto desktop:col-start-1 desktop:row-start-1 desktop:block desktop:h-auto desktop:object-contain"
    />
  );
  return art;
}

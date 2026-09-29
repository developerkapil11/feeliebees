import Image from "next/image";

export function FooterArt() {
  const art = (
    <Image
      src="/assets/footer/footer.webp"
      alt=""
      loading="eager"
      unoptimized
      width={2164}
      height={727}
      sizes="100vw"
      className="section-art footer-art pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover object-bottom desktop:relative desktop:col-start-1 desktop:row-start-1 desktop:h-auto desktop:self-end desktop:object-contain"
    />
  );
  return art;
}

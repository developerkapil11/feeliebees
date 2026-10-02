import Image from "next/image";

export function FooterArt() {
  return (
    <>
      <Image
        src="/assets/footer/footer-fox-meadow-mobile.png"
        alt=""
        loading="eager"
        unoptimized
        width={945}
        height={1663}
        sizes="(max-width: 700px) 100vw, 0px"
        className="section-art footer-art pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover object-center desktop:hidden"
      />
      <Image
        src="/assets/footer/footer-fox-meadow.png"
        alt=""
        loading="eager"
        unoptimized
        width={2087}
        height={753}
        sizes="(min-width: 701px) 100vw, 0px"
        className="section-art footer-art pointer-events-none relative col-start-1 row-start-1 hidden h-auto w-full self-end object-cover object-center desktop:block"
      />
    </>
  );
}

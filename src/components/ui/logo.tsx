"use client";

import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/assets/logo/logo.png"
      alt="Feelie Bees"
      width={2000}
      height={2000}
      className="h-19 w-21.5 object-contain min-[1900px]:h-[5vw] min-[1900px]:w-[5.8vw] min-[701px]:max-[1101px]:h-16 min-[701px]:max-[1101px]:w-18.5 max-desktop:size-17"
      priority
    />
  );
}

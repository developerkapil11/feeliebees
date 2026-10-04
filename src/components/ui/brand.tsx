import Image from "next/image";

export function Bee({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 88 76"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="bee-yellow" x1="25" y1="24" x2="57" y2="63">
          <stop stopColor="#fff37a" />
          <stop offset="1" stopColor="#ffb800" />
        </linearGradient>
        <linearGradient id="bee-wing" x1="20" y1="0" x2="40" y2="35">
          <stop stopColor="#ecfcff" />
          <stop offset="1" stopColor="#65d7ff" />
        </linearGradient>
      </defs>
      <path
        d="M33 31C8 26 13 9 23 13c10 3 15 13 16 18M43 27C29 5 43 0 48 9c5 8 1 15-2 20"
        fill="url(#bee-wing)"
        stroke="#38b9e8"
        strokeWidth="2"
      />
      <path d="m15 49-9 5 9 2" fill="#132127" />
      <ellipse
        cx="39"
        cy="45"
        rx="26"
        ry="19"
        transform="rotate(-23 39 45)"
        fill="url(#bee-yellow)"
        stroke="#e9a600"
        strokeWidth="1.5"
      />
      <path
        d="M25 29c-4 13 3 29 14 33M39 24c-4 14 4 29 15 32"
        stroke="#18232b"
        strokeWidth="8"
      />
      <ellipse
        cx="62"
        cy="32"
        rx="15"
        ry="17"
        transform="rotate(-20 62 32)"
        fill="url(#bee-yellow)"
      />
      <ellipse cx="59" cy="27" rx="3.2" ry="5" fill="#fff" />
      <ellipse cx="68" cy="24" rx="3.2" ry="5" fill="#fff" />
      <ellipse cx="60" cy="28" rx="1.8" ry="3" fill="#12243b" />
      <ellipse cx="69" cy="25" rx="1.8" ry="3" fill="#12243b" />
      <path
        d="M62 37q6 4 9-3M54 17q-4-7-7-6M66 14q0-8 4-9"
        stroke="#253644"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <circle cx="58" cy="36" r="3" fill="#ff9155" />
      <path
        d="m30 63-4 6m20-10 1 7"
        stroke="#253644"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M11 64Q0 66 3 73"
        stroke="#76b8be"
        strokeWidth="1.5"
        strokeDasharray="3 3"
      />
    </svg>
  );
}

export function Logo() {
  return (
    <Image
      src="/assets/logo/logo.png"
      alt="Feelie Bees"
      width={588}
      height={191}
      className="h-auto w-55 max-w-full object-contain desktop:w-[clamp(220px,16vw,290px)]"
    />
  );
}

export function FooterLogo() {
  return (
    <Image
      src="/assets/logo/footer_logo.png"
      alt="Feelie Bees"
      width={2000}
      height={2000}
      className="h-19 w-21.5 object-contain min-[1900px]:h-[5vw] min-[1900px]:w-[5.8vw] min-[701px]:max-[1101px]:h-16 min-[701px]:max-[1101px]:w-18.5 max-desktop:size-17"
      priority
    />
  );
}

export function DoodleHeart({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`doodle-heart inline-block size-[1em] rotate-9 align-middle ${className}`}
    >
      <Image
        src="/assets/illustrated-icons/heart.webp"
        alt=""
        width={384}
        height={384}
        unoptimized
        className="size-full object-contain"
      />
    </span>
  );
}

export type EmblemType =
  | "heart"
  | "sprout"
  | "star"
  | "people"
  | "book"
  | "cards"
  | "bulb"
  | "fox"
  | "palette"
  | "butterfly";

export function Emblem({
  type,
  circle = false,
  className = "",
}: {
  type: EmblemType;
  circle?: boolean;
  className?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={`emblem emblem-${type} inline-flex shrink-0 items-center justify-center ${circle ? "emblem-circle size-[clamp(66px,6.65vw,109px)] wide:size-[6.65vw]" : "size-[clamp(34px,3.4vw,57px)] wide:size-[3.4vw]"} ${className}`}
    >
      <Image
        src={`/assets/illustrated-icons/${type}.webp`}
        alt=""
        width={384}
        height={384}
        unoptimized
        className="size-full object-contain"
      />
    </span>
  );
}

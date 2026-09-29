import {
    BookOpen,
    Heart,
    Lightbulb,
    Sprout,
    Star,
    UsersRound,
    Layers,
  } from "lucide-react";
  
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
  
  export function DoodleHeart({ className = "" }: { className?: string }) {
    return (
      <svg
        className={`doodle-heart inline-block size-[1em] rotate-9 align-middle text-[#ff5b86] ${className}`}
        viewBox="0 0 45 48"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M22 40C12 29 2 21 6 11c4-10 15-5 15 5 1-10 12-17 17-8 6 12-8 24-16 32Z"
          stroke="currentColor"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 14q-2 4 2 9"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  
  export type EmblemType =
    | "heart"
    | "sprout"
    | "star"
    | "people"
    | "book"
    | "cards"
    | "bulb";
  const iconMap = {
    heart: Heart,
    sprout: Sprout,
    star: Star,
    people: UsersRound,
    book: BookOpen,
    cards: Layers,
    bulb: Lightbulb,
  };
  const iconColors: Record<EmblemType, string> = {
    heart: "text-[#ff396a] [&>svg]:fill-[#ff8ea5] [&>svg]:stroke-[#fb3960]",
    sprout: "text-[#328e51] [&>svg]:fill-[#83c88a]",
    star: "text-[#ffa500] [&>svg]:fill-[#fff2b0] [&>svg]:stroke-[2.5]",
    people: "text-[#8a64c9] [&>svg]:fill-[#b99aea]",
    book: "text-[#7941bb] [&>svg]:fill-[#b67be7]",
    cards: "text-[#ff4b70] [&>svg]:fill-[#ffadc0] [&>svg]:-rotate-12",
    bulb: "text-[#ffad00] [&>svg]:fill-[#ffd570]",
  };
  const circleColors: Record<EmblemType, string> = {
    heart: "bg-[#ffe2e3]",
    sprout: "bg-[#e2eed6]",
    star: "bg-[#ffe2e3]",
    people: "bg-[#dcf4fc] text-[#159fd2] [&>svg]:fill-[#81d9f3]",
    book: "bg-[#e9def7]",
    cards: "bg-[#ffdddf]",
    bulb: "bg-[#ffebc6]",
  };
  export function Emblem({
    type,
    circle = false,
  }: {
    type: EmblemType;
    circle?: boolean;
  }) {
    const Icon = iconMap[type];
    const colors =
      circle && type === "people"
        ? circleColors.people
        : `${iconColors[type]} ${circle ? circleColors[type] : ""}`;
    return (
      <span
        className={`emblem emblem-${type} inline-flex items-center justify-center [&>svg]:drop-shadow-[0_2px_1px_#0c3b4620] ${colors} ${
          circle
            ? "emblem-circle size-[clamp(66px,6.65vw,109px)] rounded-full shadow-[inset_0_0_0_1px_#fff9] [&>svg]:size-[55%] wide:size-[6.65vw]"
            : "size-[clamp(34px,3.4vw,57px)] [&>svg]:size-[85%] wide:size-[3.4vw]"
        }`}
      >
        <Icon aria-hidden="true" strokeWidth={1.8} />
      </span>
    );
  }
  
"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const cards = [
  "Angry",
  "Happy",
  "Calm",
  "Love",
  "Sad",
  "Confused",
  "Scared",
  "Excited",
  "Proud",
] as const;

const MOBILE_CARDS = 2;
const DESKTOP_CARDS = 4;

export function ProductCardSlider() {
  const [page, setPage] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(MOBILE_CARDS);
  const pageCount = Math.ceil(cards.length / cardsPerPage);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 900px)");
    const updateCardsPerPage = () => {
      setCardsPerPage(mediaQuery.matches ? DESKTOP_CARDS : MOBILE_CARDS);
      setPage(0);
    };

    updateCardsPerPage();
    mediaQuery.addEventListener("change", updateCardsPerPage);
    return () => mediaQuery.removeEventListener("change", updateCardsPerPage);
  }, []);

  const showPage = (index: number) => setPage((index + pageCount) % pageCount);
  const visibleCards = cards.slice(page * cardsPerPage, (page + 1) * cardsPerPage);

  return (
    <section aria-labelledby="emotion-cards-title" className="mt-16 tablet:mt-24">
      <div className="mx-auto mb-7 max-w-2xl text-center">
        <p className="mb-2 text-[max(12px,.9vw)] font-black tracking-widest text-[#438451] uppercase">
          Nine feelings to explore
        </p>
        <h2 id="emotion-cards-title" className="text-[max(32px,2.8vw)]">
          Meet the emotion cards
        </h2>
        <p className="mt-4 text-[max(15px,1.1vw)] leading-relaxed">
          Each illustrated card gives children a friendly face and a simple word to help them notice, name, and share how they feel.
        </p>
      </div>

      <div className="relative mx-auto px-12 tablet:px-16">
        <div className="grid grid-cols-2 gap-3 tablet:grid-cols-4 tablet:gap-5">
          {visibleCards.map((card) => (
            <figure key={card} className="min-w-0 rounded-[1.25rem] bg-white p-2 shadow-[0_12px_35px_#26433618] tablet:rounded-[1.75rem] tablet:p-3">
              <Image
                src={`/assets/emotion-cards/${card.toLowerCase()}.webp`}
                alt={`${card} emotion card featuring Heartly the fox`}
                width={602}
                height={884}
                sizes="(max-width: 899px) 40vw, 20vw"
                className="h-auto w-full rounded-[.9rem] tablet:rounded-[1.25rem]"
              />
              <figcaption className="px-1 pt-2 pb-1 text-center text-sm font-extrabold text-[#52635c] tablet:text-base">{card}</figcaption>
            </figure>
          ))}
        </div>
          <button
            type="button"
            onClick={() => showPage(page - 1)}
            aria-label="Show previous emotion cards"
            className="absolute top-1/2 left-0 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-white text-[#273f36] shadow-lg transition hover:scale-105 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#e99032] tablet:size-12"
          >
            <ChevronLeft aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => showPage(page + 1)}
            aria-label="Show next emotion cards"
            className="absolute top-1/2 right-0 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-white text-[#273f36] shadow-lg transition hover:scale-105 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#e99032] tablet:size-12"
          >
            <ChevronRight aria-hidden="true" />
          </button>
      </div>
        <div className="mt-5 flex justify-center gap-2" role="group" aria-label="Choose a group of emotion cards">
          {Array.from({ length: pageCount }, (_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => showPage(index)}
              aria-label={`Show card group ${index + 1}`}
              aria-current={index === page ? "true" : undefined}
              className={`size-2.5 rounded-full transition ${index === page ? "scale-125 bg-[#dc6c32]" : "bg-[#c8d4c9] hover:bg-[#8fab91]"}`}
            />
          ))}
        </div>
        <p className="mt-3 text-center text-sm font-bold text-[#617069]" aria-live="polite">
          Showing cards {page * cardsPerPage + 1}–{Math.min((page + 1) * cardsPerPage, cards.length)} of {cards.length}
        </p>
    </section>
  );
}

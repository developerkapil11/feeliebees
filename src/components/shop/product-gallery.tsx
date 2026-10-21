"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

type GalleryItem = {
  id: string;
  src: string;
  alt: string;
};

const galleryItems: GalleryItem[] = [
  {
    id: "overview",
    src: "/assets/shop/heartlys-foxes-meadow.png",
    alt: "Heartly's Pocket of Feelings story and characters",
  },
  {
    id: "heartly",
    src: "/assets/product-icons/fox-plush-cutout.png",
    alt: "Heartly plush fox",
  },
  {
    id: "storybook",
    src: "/assets/product-icons/story-book-cutout.png",
    alt: "Heartly's Pocket of Feelings storybook",
  },
  {
    id: "hearts",
    src: "/assets/product-icons/feeling-hearts-sheet.png",
    alt: "Nine interchangeable feeling hearts",
  },
  {
    id: "cards",
    src: "/assets/product-icons/emotion-cards-fan.png",
    alt: "Heartly emotion cards",
  },
];

export function ProductGallery({ videoUrl }: { videoUrl?: string }) {
  const [activeId, setActiveId] = useState(videoUrl ? "video" : "overview");
  const activeImage = galleryItems.find((item) => item.id === activeId);

  return (
    <div>
      <div className="relative aspect-16/10 overflow-hidden rounded-[28px] border border-[#eee2ca] bg-[#f4eedc] shadow-[0_18px_50px_#6f4b2220]">
        {activeId === "video" && videoUrl ? (
          <video
            key={videoUrl}
            controls
            playsInline
            preload="metadata"
            poster="/assets/shop/heartlys-foxes-meadow.png"
            className="h-full w-full object-cover"
            aria-label="Heartly's Pocket of Feelings product video"
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support video playback.
          </video>
        ) : activeImage ? (
          <Image
            src={activeImage.src}
            alt={activeImage.alt}
            fill
            priority={activeImage.id === "overview"}
            sizes="(max-width: 900px) 88vw, 52vw"
            className={`object-contain ${activeImage.id === "overview" ? "object-cover" : "p-[8%]"}`}
          />
        ) : null}
      </div>

      <div className="mt-3 grid grid-cols-5 gap-2.5" aria-label="Product gallery">
        {videoUrl ? (
          <button
            type="button"
            onClick={() => setActiveId("video")}
            aria-label="Show product video"
            aria-pressed={activeId === "video"}
            className={`relative aspect-4/3 overflow-hidden rounded-xl border-2 bg-[#f4eedc] transition ${activeId === "video" ? "border-orange shadow-sm" : "border-transparent hover:border-[#b9c7a8]"}`}
          >
            <Image
              src="/assets/shop/heartlys-foxes-meadow.png"
              alt=""
              fill
              sizes="12vw"
              className="object-cover"
            />
            <span className="absolute inset-0 grid place-items-center bg-[#2e251b]/18">
              <span className="grid size-8 place-items-center rounded-full bg-white text-orange shadow-sm">
                <Play size={16} fill="currentColor" />
              </span>
            </span>
          </button>
        ) : (
          <GalleryThumbnail
            item={galleryItems[0]}
            active={activeId === galleryItems[0].id}
            onSelect={setActiveId}
          />
        )}

        {galleryItems.slice(videoUrl ? 0 : 1, videoUrl ? 4 : 5).map((item) => (
          <GalleryThumbnail
            key={item.id}
            item={item}
            active={activeId === item.id}
            onSelect={setActiveId}
          />
        ))}
      </div>
    </div>
  );
}

function GalleryThumbnail({
  item,
  active,
  onSelect,
}: {
  item: GalleryItem;
  active: boolean;
  onSelect: (id: string) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onSelect(item.id)}
      aria-label={`Show ${item.alt}`}
      aria-pressed={active}
      className={`relative aspect-4/3 overflow-hidden rounded-xl border-2 bg-[#f8f1df] transition ${active ? "border-orange shadow-sm" : "border-transparent hover:border-[#b9c7a8]"}`}
    >
      <Image
        src={item.src}
        alt=""
        fill
        sizes="12vw"
        className={item.id === "overview" ? "object-cover" : "object-contain p-1.5"}
      />
    </button>
  );
}

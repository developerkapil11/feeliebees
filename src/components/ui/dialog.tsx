"use client";

import { useEffect, useId, useRef, type ReactNode } from "react";
import { X } from "lucide-react";

export function Dialog({
  title,
  children,
  close,
}: {
  title: string;
  children: ReactNode;
  close: () => void;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    ref.current?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = overflow;
      previous?.focus();
    };
  }, []);
  return (
    <dialog
      ref={ref}
      aria-labelledby={titleId}
      onCancel={close}
      onClick={(event) => {
        if (event.target === event.currentTarget) close();
      }}
      className="fixed inset-0 m-auto max-h-[90dvh] w-[calc(100%-32px)] max-w-[680px] overflow-y-auto rounded-3xl border-0 bg-cream p-0 text-navy shadow-2xl backdrop:bg-navy/50 backdrop:backdrop-blur-sm"
    >
      <div className="p-6 tablet:p-9">
        <div className="mb-6 flex items-start justify-between gap-4">
          <h2
            id={titleId}
            className="text-[32px] leading-tight tablet:text-[38px]"
          >
            {title}
          </h2>
          <button
            onClick={close}
            aria-label="Close dialog"
            className="grid size-11 shrink-0 place-items-center rounded-full bg-[#f1eada] hover:bg-[#e8dcc2]"
          >
            <X size={22} />
          </button>
        </div>
        {children}
      </div>
    </dialog>
  );
}

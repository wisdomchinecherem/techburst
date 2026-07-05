"use client";

import { ArrowLeft, ArrowRight, ImageIcon, X } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";

interface CarouselItem {
  title: string;
  label: string;
  image?: string | StaticImageData;
}

interface ImageCarouselModalProps {
  items: CarouselItem[];
  isOpen: boolean;
  onClose: () => void;
  initialIndex?: number;
}

export default function ImageCarouselModal({
  items,
  isOpen,
  onClose,
  initialIndex = 0,
}: ImageCarouselModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
    }
  }, [isOpen, initialIndex]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
      if (event.key === "ArrowRight") {
        setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
      }
      if (event.key === "ArrowLeft") {
        setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, items.length, onClose]);

  if (!isOpen || items.length === 0) {
    return null;
  }

  const currentItem = items[currentIndex];
  const goPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center bg-black/90 p-2 backdrop-blur-sm sm:p-4"
      onClick={onClose}
    >
      <div
        className="flex h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-orange/40 bg-surface shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-3 border-b border-border px-3 py-3 sm:px-4">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-orange">
              Gallery preview
            </p>
            <p className="mt-1 text-sm font-semibold text-white sm:text-base">
              {currentItem.title}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-border p-2 text-white/70 transition hover:border-orange hover:text-orange"
            aria-label="Close gallery"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="flex-1 p-2 sm:p-3">
          <div className="relative flex h-full w-full flex-col items-center justify-center gap-3 overflow-hidden rounded-xl border border-dashed border-border bg-black/70 px-4 py-6 text-center sm:px-6 sm:py-8">
            {currentItem.image ? (
              <Image
                src={currentItem.image}
                alt={currentItem.label}
                fill
                className="object-contain"
              />
            ) : (
              <>
                <ImageIcon
                  className="h-10 w-10 text-white/25"
                  strokeWidth={1.5}
                />
                <div className="max-w-xl">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/30">
                    Placeholder slide
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white sm:text-xl">
                    {currentItem.label}
                  </p>
                  <p className="mt-2 text-sm text-white/60 sm:text-base">
                    This gallery is sized to fit the screen while keeping the
                    title and controls visible.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border px-3 py-3 sm:px-4">
          <button
            type="button"
            onClick={goPrevious}
            className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-2 text-sm text-white/70 transition hover:border-orange hover:text-orange"
          >
            <ArrowLeft className="h-4 w-4" />
            Previous
          </button>

          <div className="flex flex-wrap justify-center gap-2">
            {items.map((item, index) => (
              <button
                key={`${item.title}-${index}`}
                type="button"
                onClick={() => setCurrentIndex(index)}
                className={`h-2.5 rounded-full transition ${
                  index === currentIndex ? "w-8 bg-orange" : "w-2.5 bg-white/20"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={goNext}
            className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-2 text-sm text-white/70 transition hover:border-orange hover:text-orange"
          >
            Next
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

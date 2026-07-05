"use client";

import Image from "next/image";
import { useState } from "react";
import ImageCarouselModal from "./ImageCarouselModal";
import ImagePlaceholder from "./ImagePlaceholder";

interface CaseStudySlide {
  title: string;
  label: string;
  image?: string;
}

interface CaseStudy {
  title: string;
  result: string;
  slides: CaseStudySlide[];
}

const caseStudies: CaseStudy[] = [
  {
    title: "Nairobi Campus Tour",
    result: "1,200+ students reached across 4 universities in 3 weeks.",
    slides: [
      {
        title: "Nairobi campus activation",
        label: "Interactive workshop in Nairobi",
        image: "/nairabo campus/nairobi1.jpeg",
      },
      {
        title: "Nairobi mentoring",
        label: "Hands-on development clinics",
        image: "/nairabo campus/nairobi2.jpeg",
      },
      {
        title: "Nairobi showcase",
        label: "Student project demos",
        image: "/nairabo campus/nairobi3.jpeg",
      },
    ],
  },
  {
    title: "Lagos Builder Summit",
    result: "300 attendees, 49 partner-led breakout sessions.",
    slides: [
      {
        title: "Gallery pending",
        label: "Image gallery will be added once assets are available.",
      },
    ],
  },
  {
    title: "Accra Onboarding Sprint",
    result: "126 developers shipped their first on-chain transaction.",
    slides: [
      {
        title: "Gallery pending",
        label: "Image gallery will be added once assets are available.",
      },
    ],
  },
];

export default function CaseStudiesSection() {
  const [activeStudyIndex, setActiveStudyIndex] = useState<number | null>(null);

  const activeSlides =
    activeStudyIndex !== null ? caseStudies[activeStudyIndex].slides : [];

  return (
    <section
      id="case-studies"
      className="scroll-mt-24 border-b border-border px-6 py-12 sm:px-10 sm:py-16"
    >
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-orange">
          Case Studies
        </p>
        <h2 className="max-w-2xl font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl">
          Proof of work, not promises.
        </h2>
        <p className="mt-6 max-w-xl text-base text-white/60 sm:text-lg">
          See event-level proof points from our campus activations, summit
          activations, and rapid onboarding programs — each card opens a gallery
          of real event imagery.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {caseStudies.map((study, index) => {
            const preview = study.slides[0];

            return (
              <div
                key={study.title}
                className="overflow-hidden rounded-xl border border-border bg-surface"
              >
                <button
                  type="button"
                  onClick={() => setActiveStudyIndex(index)}
                  className="group w-full text-left"
                >
                  <div className="relative h-56 overflow-hidden bg-[#0B0B0B] transition duration-200 group-hover:-translate-y-0.5">
                    {preview?.image ? (
                      <Image
                        src={preview.image}
                        alt={preview.label}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <ImagePlaceholder label={study.title} aspect="video" />
                    )}
                    <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/85 to-transparent px-4 py-4">
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
                        View gallery
                      </p>
                    </div>
                  </div>

                  <div className="p-4 sm:p-5">
                    <h3 className="font-display text-base font-bold text-white">
                      {study.title}
                    </h3>
                    <p className="mt-2 text-sm text-white/55">{study.result}</p>
                  </div>
                </button>
              </div>
            );
          })}
        </div>
      </div>

      <ImageCarouselModal
        items={activeSlides}
        isOpen={activeStudyIndex !== null}
        onClose={() => setActiveStudyIndex(null)}
      />
    </section>
  );
}

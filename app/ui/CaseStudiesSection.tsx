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
        title: "Nairobi 1",
        label: "Campus photo 1",
        image: "/nairobi/DSC09967.jpg",
      },
      {
        title: "Nairobi 2",
        label: "Campus photo 2",
        image: "/nairobi/DSC09968.jpg",
      },
      {
        title: "Nairobi 3",
        label: "Campus photo 3",
        image: "/nairobi/DSC09969.jpg",
      },
      {
        title: "Nairobi 4",
        label: "Campus photo 4",
        image: "/nairobi/DSC09972.jpg",
      },
      {
        title: "Nairobi 5",
        label: "Campus photo 5",
        image: "/nairobi/DSC09973.jpg",
      },
      {
        title: "Nairobi 6",
        label: "Campus photo 6",
        image: "/nairobi/DSC09974.jpg",
      },
      {
        title: "Nairobi 7",
        label: "Campus photo 7",
        image: "/nairobi/DSC09975.jpg",
      },
      {
        title: "Nairobi 8",
        label: "Campus photo 8",
        image: "/nairobi/DSC09976.jpg",
      },
      {
        title: "Nairobi 9",
        label: "Campus photo 9",
        image: "/nairobi/DSC09982.jpg",
      },
    ],
  },
  {
    title: "GDG Lagos Dev Fest",
    result: "1,000+ attendees, 49 partner-led breakout sessions.",
    slides: [
      {
        title: "Lagos main stage",
        label: "Crowd gathered for the Lagos builder summit",
        image: "/lagos/FFX03755.jpg",
      },
      {
        title: "Lagos workshop",
        label: "Hands-on developer session in Lagos",
        image: "/lagos/KOP06412.jpg",
      },
      {
        title: "Lagos networking",
        label: "Attendees networking during the summit",
        image: "/lagos/KOP06446.jpg",
      },
      {
        title: "Lagos breakout",
        label: "Small group collaboration at the summit",
        image: "/lagos/KOP06447.jpg",
      },
      {
        title: "Lagos showcase",
        label: "Teams presenting their Web3 projects",
        image: "/lagos/MHO_0082.jpg",
      },
      {
        title: "Lagos closing",
        label: "Summit closing session with the audience",
        image: "/lagos/MHO_5671.jpg",
      },
    ],
  },
  {
    title: "Web3 Mashinani Pilot",
    result: "126 developers shipped their first on-chain transaction.",
    slides: [
      {
        title: "Accra registration",
        label: "Developers register for the Accra onboarding sprint",
        image: "/accra/_MGL6205.JPG",
      },
      {
        title: "Accra learning",
        label: "A session in progress during the Accra event",
        image: "/accra/_MGL6206.JPG",
      },
      {
        title: "Accra collaboration",
        label: "Participants collaborating during Accra workshops",
        image: "/accra/_MGL6207.JPG",
      },
      {
        title: "Accra keynote",
        label: "Keynote presentation at the Accra sprint",
        image: "/accra/_MGL6211.JPG",
      },
      {
        title: "Accra demo day",
        label: "Teams sharing results at the Accra showcase",
        image: "/accra/_MGL6221.JPG",
      },
      {
        title: "Accra closing",
        label: "Final wrap-up at the Accra onboarding sprint",
        image: "/accra/_MGL6225.JPG",
      },
      {
        title: "Accra networking",
        label: "Networking and community building in Accra",
        image: "/accra/_MGL6227.JPG",
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

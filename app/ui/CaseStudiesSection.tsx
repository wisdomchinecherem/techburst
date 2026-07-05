"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import ImageCarouselModal from "./ImageCarouselModal";
import ImagePlaceholder from "./ImagePlaceholder";
import Campus39 from "@/public/nairabo campus/WhatsApp Image 2026-07-05 at 10.03.39 AM.jpeg";
import Campus38 from "@/public/nairabo campus/WhatsApp Image 2026-07-05 at 10.03.38 AM.jpeg";
import Campus38b from "@/public/nairabo campus/WhatsApp Image 2026-07-05 at 10.03.38 AM (1).jpeg";
import Campus37 from "@/public/nairabo campus/WhatsApp Image 2026-07-05 at 10.03.37 AM.jpeg";
import Campus36 from "@/public/nairabo campus/WhatsApp Image 2026-07-05 at 10.03.36 AM.jpeg";
import TeamA from "@/public/teams/WhatsApp Image 2026-07-05 at 9.33.52 AM.jpeg";
import TeamB from "@/public/teams/WhatsApp Image 2026-07-05 at 9.33.52 AM (1).jpeg";
import TeamC from "@/public/teams/WhatsApp Image 2026-07-05 at 9.33.51 AM.jpeg";
import ProjectPreview from "@/public/webprojects/Screenshot 2026-07-04 233056.png";

interface CaseStudySlide {
  title: string;
  label: string;
  image?: StaticImageData;
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
        title: "Campus activation",
        label: "Interactive workshop in Nairobi",
        image: Campus39,
      },
      {
        title: "On-site mentoring",
        label: "Hands-on development clinics",
        image: Campus38,
      },
      {
        title: "Team showcase",
        label: "Student project demos",
        image: Campus38b,
      },
    ],
  },
  {
    title: "Lagos Builder Summit",
    result: "300 attendees, 49 partner-led breakout sessions.",
    slides: [
      {
        title: "Summit hall",
        label: "Partner spotlight and networking",
        image: TeamA,
      },
      {
        title: "Workshop studio",
        label: "Builders pitching new ideas",
        image: TeamB,
      },
    ],
  },
  {
    title: "Accra Onboarding Sprint",
    result: "126 developers shipped their first on-chain transaction.",
    slides: [
      {
        title: "Launch day",
        label: "Sprint kickoff in Accra",
        image: Campus37,
      },
      {
        title: "Product demo",
        label: "Prototype review with mentors",
        image: ProjectPreview,
      },
      { title: "Final showcase", label: "Teams presenting live", image: TeamC },
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
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent px-4 py-4">
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

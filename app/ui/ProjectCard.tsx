"use client";

import { useState } from "react";
import TechChip from "./TechChip";
import ImagePlaceholder from "./ImagePlaceholder";
import ImageCarouselModal from "./ImageCarouselModal";
import { Web3Project } from "../types";

interface ProjectCardProps {
  project: Web3Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const galleryItems = [
    {
      title: project.name,
      label: `${project.name} preview placeholder`,
    },
    {
      title: `${project.name} architecture`,
      label: `${project.name} interface placeholder`,
    },
    {
      title: `${project.name} impact`,
      label: `${project.name} impact snapshot placeholder`,
    },
    {
      title: `${project.name} roadmap`,
      label: `${project.name} roadmap placeholder`,
    },
    {
      title: `${project.name} community`,
      label: `${project.name} community proof placeholder`,
    },
  ];

  return (
    <div className="group overflow-hidden rounded-xl border border-border bg-surface transition-all duration-200 hover:-translate-y-0.5 hover:border-orange hover:shadow-[0_8px_24px_-8px_rgba(255,106,0,0.28)]">
      <div className="p-3 pb-0">
        <button
          type="button"
          onClick={() => setIsGalleryOpen(true)}
          className="w-full text-left"
        >
          <ImagePlaceholder
            label={`${project.name} screenshot`}
            aspect="video"
          />
        </button>
      </div>
      <div className="p-4 sm:p-5">
        <h3 className="font-display text-lg font-bold text-white sm:text-xl">
          {project.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-white/60">
          {project.vision}
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <TechChip key={tech} label={tech} />
          ))}
        </div>
      </div>

      <ImageCarouselModal
        items={galleryItems}
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
      />
    </div>
  );
}

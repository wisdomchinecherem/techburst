import TechChip from "./TechChip";
import ImagePlaceholder from "./ImagePlaceholder";
import { Web3Project } from "../types";

interface ProjectCardProps {
  project: Web3Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group overflow-hidden rounded-xl border border-border bg-surface transition-all duration-200 hover:-translate-y-1 hover:border-orange hover:shadow-[0_12px_40px_-8px_rgba(245,166,35,0.25)]">
      <div className="p-4 pb-0">
        <ImagePlaceholder label={`${project.name} screenshot`} aspect="video" />
      </div>
      <div className="p-7">
        <h3 className="font-display text-xl font-bold text-white">
          {project.name}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-white/60">
          {project.vision}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <TechChip key={tech} label={tech} />
          ))}
        </div>
      </div>
    </div>
  );
}

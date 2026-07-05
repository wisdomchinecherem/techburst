import { Web3Project } from "../types";

interface ProjectCardProps {
  project: Web3Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const initials = project.name
    .split(" ")
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  return (
    <article className="p-4 sm:p-5">
      <div className="flex items-start gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-orange/20 bg-orange/10 text-sm font-semibold text-orange">
          {initials}
        </div>
        <div>
          <h3 className="font-display text-lg font-semibold text-white">
            {project.name}
          </h3>
          <p className="mt-1 text-sm leading-relaxed text-white/60">
            {project.vision}
          </p>
        </div>
      </div>
    </article>
  );
}

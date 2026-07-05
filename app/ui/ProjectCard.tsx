import { Car, Globe2, HeartPulse, Zap } from "lucide-react";
import type { ReactElement } from "react";
import { Web3Project } from "../types";

interface ProjectCardProps {
  project: Web3Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const iconMap: Record<string, ReactElement> = {
    RideX: <Car className="h-5 w-5" strokeWidth={1.8} />,
    NomadLink: <Globe2 className="h-5 w-5" strokeWidth={1.8} />,
    LifeLedger: <HeartPulse className="h-5 w-5" strokeWidth={1.8} />,
    EnerLink: <Zap className="h-5 w-5" strokeWidth={1.8} />,
  };

  return (
    <article className="p-4 sm:p-5">
      <div className="flex items-start gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-orange/20 bg-orange/10 text-orange">
          {iconMap[project.name] ?? (
            <Globe2 className="h-5 w-5" strokeWidth={1.8} />
          )}
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

"use client";

import { featuredStats, featuredTech, web3Projects } from "../types/projects";
import TechChip from "./TechChip";
import ProjectCard from "./ProjectCard";
import ImagePlaceholder from "./ImagePlaceholder";
import Web3VoiceImage from "@/public/webprojects/Screenshot 2026-07-04 233034.png";

export default function HackathonsSection() {
  return (
    <section
      id="hackathons"
      className="scroll-mt-24 border-b border-border px-6 py-8 sm:px-10 sm:py-10"
    >
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-orange">
          Hackathons &amp; Web3 Projects
        </p>
        <h2 className="max-w-3xl font-display text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
          A portfolio of modular Web3 solutions.
        </h2>
        <p className="mt-6 max-w-2xl text-base text-white/60 sm:text-lg">
          High-impact, community-driven builds bridging real-world needs with
          decentralized technology — spanning healthcare, travel, energy, and
          automotive markets, each leveraging blockchain for transparency,
          ownership, and scale.
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {web3Projects.slice(0, 4).map((project) => {
            const initials = project.name
              .split(" ")
              .slice(0, 2)
              .map((word) => word[0])
              .join("")
              .toUpperCase();

            return (
              <div
                key={project.slug}
                className="rounded-2xl border border-border bg-surface p-4 text-center transition-colors hover:border-orange/50"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-orange/20 bg-orange/10 text-lg font-semibold text-orange">
                  {initials}
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-white">
                  {project.name}
                </h3>
              </div>
            );
          })}
        </div>

        <div className="mt-8 rounded-2xl border border-border bg-surface p-3 sm:p-5">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
            <div className="overflow-hidden rounded-2xl border border-border bg-black/70">
              <ImagePlaceholder
                label="Web3Voice project image / screenshot"
                src={Web3VoiceImage}
                className="object-cover object-center"
                aspect="wide"
              />
            </div>

            <div>
              <div className="mb-4 flex items-center gap-2">
                <span className="text-2xl">🏆</span>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange">
                  Featured Win
                </p>
              </div>

              <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
                Web3Voice
              </h3>
              <p className="mt-1 text-sm font-medium text-white/50">
                The Decentralized Knowledge Layer
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/70 sm:text-base">
                A premier example of AI and blockchain convergence, Web3Voice
                tokenizes human discourse and rewards meaningful contributions.
                Its modular architecture runs a high-performance data engine
                that distills insight from X Spaces and anchors it on-chain,
                solving information overload and misinformation by creating a
                community-owned knowledge layer where voices are validated and
                rewarded through{" "}
                <span className="font-semibold text-orange">VOICE tokens</span>.
              </p>

              <div className="mt-4 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-4">
                {featuredStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-black px-4 py-4 sm:px-5 sm:py-5"
                  >
                    <div className="font-display text-lg font-bold text-orange sm:text-xl">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-xs text-white/50">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {featuredTech.map((tech) => (
                  <TechChip key={tech} label={tech} />
                ))}
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-border bg-black p-3 sm:p-4">
                  <h4 className="font-display text-base font-semibold text-white">
                    Technical Excellence
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    Built on Filecoin/IPFS for decentralized storage, with
                    advanced LLM pipelines handling insight extraction and
                    sentiment analysis at scale.
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-black p-4 sm:p-5">
                  <h4 className="font-display text-base font-semibold text-white">
                    Funding &amp; Acceleration
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    Secured $15,000 in funding, with the founding team now
                    scaling the ecosystem at the Founders Forge accelerator
                    program.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="font-display text-xl font-bold text-white sm:text-2xl">
            Project Portfolio
          </h3>
          <div className="mt-4 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-surface">
            {web3Projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

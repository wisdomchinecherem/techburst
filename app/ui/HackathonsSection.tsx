"use client";

import Image from "next/image";
import { featuredStats, featuredTech, web3Projects } from "../types/projects";
import TechChip from "./TechChip";
import ProjectCard from "./ProjectCard";
import Web3VoiceImage from "@/public/webprojects/Screenshot 2026-07-04 233034.png";
import circleLogo from "@/public/logos/Circle_.png";
import Tether from "@/public/logos/Tether.png";
import EthSafari from "@/public/logos/ETH SAFARI.png";
import Hackmara from "@/public/logos/MARA.png";

const showcaseProjects = [
  { name: "Circle", image: circleLogo },
  { name: "Tether", image: Tether },
  { name: "ETH safari", image: EthSafari },
  { name: "Hack The Mara", image: Hackmara },
];

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
          {showcaseProjects.map((project) => (
            <div
              key={project.name}
              className="rounded-2xl border border-border bg-[#0f1011] p-4 text-center transition-all duration-200 hover:-translate-y-1 hover:border-[#FF8C42]/60 hover:bg-[#161616]"
            >
              <div className="mx-auto flex h-24 w-full max-w-45 items-center justify-center overflow-hidden rounded-2xl p-3 ">
                <Image
                  src={project.image}
                  alt={`${project.name} logo`}
                  width={160}
                  height={160}
                  className="max-h-full max-w-full object-contain object-center"
                />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-white">
                {project.name}
              </h3>
            </div>
          ))}
        </div>

        <div className="mt-8 overflow-hidden rounded-[32px] bg-[#090909] shadow-[0_40px_120px_rgba(0,0,0,0.25)]">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-stretch">
            <div className="flex flex-col justify-center gap-8 p-8 sm:p-10 lg:p-12">
              <div className="inline-flex items-center gap-3 rounded-full bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-orange">
                <span className="text-lg">🏆</span>
                <span>Featured Win</span>
              </div>

              <div>
                <h3 className="font-display text-4xl font-bold text-white sm:text-5xl">
                  Web3Voice
                </h3>
                <p className="mt-4 max-w-3xl text-base leading-8 text-white/70 sm:text-lg">
                  A premier example of AI and blockchain convergence, Web3Voice tokenizes human discourse and rewards meaningful contributions. Its modular architecture distills insight from X Spaces and anchors it on-chain, creating a community-owned knowledge layer where voices are validated and rewarded through
                  <span className="font-semibold text-orange"> VOICE tokens.</span>
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {featuredStats.map((stat) => (
                  <div key={stat.label} className="rounded-3xl bg-[#040404] p-5 ring-1 ring-white/5">
                    <div className="font-display text-2xl font-bold text-orange sm:text-3xl">
                      {stat.value}
                    </div>
                    <p className="mt-2 text-xs uppercase tracking-[0.22em] text-white/50">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid gap-4 lg:grid-cols-2">
                <div className="rounded-3xl bg-[#040404] p-5 ring-1 ring-white/5">
                  <h4 className="font-display text-base font-semibold text-white">
                    Technical Excellence
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    Built on Filecoin/IPFS for decentralized storage, with advanced LLM pipelines handling insight extraction and sentiment analysis at scale.
                  </p>
                </div>
                <div className="rounded-3xl bg-[#040404] p-5 ring-1 ring-white/5">
                  <h4 className="font-display text-base font-semibold text-white">
                    Funding &amp; Acceleration
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    Secured $15,000 in funding, with the founding team now scaling the ecosystem at the Founders Forge accelerator program.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {featuredTech.map((tech) => (
                  <TechChip key={tech} label={tech} />
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden bg-[#0B0B0B] lg:rounded-l-none">
              <div className="relative h-[420px] sm:h-[520px] lg:h-full">
                <Image
                  src={Web3VoiceImage}
                  alt="Web3Voice dashboard preview"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute left-6 bottom-6 rounded-full border border-white/10 bg-black/70 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-orange">
                Web3Voice
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

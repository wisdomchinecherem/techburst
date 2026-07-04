import { featuredStats, featuredTech, web3Projects } from "../types/projects";
import TechChip from "./TechChip";
import ProjectCard from "./ProjectCard";
import ImagePlaceholder from "./ImagePlaceholder";

export default function HackathonsSection() {
  return (
    <section
      id="hackathons"
      className="scroll-mt-24 border-b border-border px-6 py-20 sm:px-10"
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

        {/* Featured Win: Web3Voice */}
        <div className="mt-16 rounded-2xl border border-border bg-surface p-8 sm:p-10">
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

          <div className="mt-6">
            <ImagePlaceholder label="Web3Voice project image / screenshot" aspect="wide" />
          </div>

          <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/70">
            A premier example of AI and blockchain convergence, Web3Voice
            tokenizes human discourse and rewards meaningful contributions.
            Its modular architecture runs a high-performance data engine that
            distills insight from X Spaces and anchors it on-chain, solving
            information overload and misinformation by creating a
            community-owned knowledge layer where voices are validated and
            rewarded through{" "}
            <span className="font-semibold text-orange">VOICE tokens</span>.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-4">
            {featuredStats.map((stat) => (
              <div key={stat.label} className="bg-black px-5 py-6">
                <div className="font-display text-xl font-bold text-orange sm:text-2xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs text-white/50">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {featuredTech.map((tech) => (
              <TechChip key={tech} label={tech} />
            ))}
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-border bg-black p-6">
              <h4 className="font-display text-base font-semibold text-white">
                Technical Excellence
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                Built on Filecoin/IPFS for decentralized storage, with
                advanced LLM pipelines handling insight extraction and
                sentiment analysis at scale.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-black p-6">
              <h4 className="font-display text-base font-semibold text-white">
                Funding &amp; Acceleration
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                Secured $15,000 in funding, with the founding team now scaling
                the ecosystem at the Founders Forge accelerator program.
              </p>
            </div>
          </div>
        </div>

        {/* Project portfolio grid */}
        <div className="mt-16">
          <h3 className="font-display text-xl font-bold text-white sm:text-2xl">
            Project Portfolio
          </h3>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {web3Projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

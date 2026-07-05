import {
  BarChart3,
  BookOpen,
  Globe2,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";

const pillars = [
  {
    number: "01",
    title: "African Market Expansion",
    description:
      "Helping global Web3 projects, protocols, fintechs and technology companies enter African markets through trusted local infrastructure.",
    tags: ["GTM Execution", "Ambassador Programs", "Localization"],
    icon: Globe2,
  },
  {
    number: "02",
    title: "Participation Architecture",
    description:
      "Designing systems that transform audiences into contributors — from governance design to incentive architecture and participation dashboards.",
    tags: ["Governance Design", "Incentive Systems", "Human Infrastructure"],
    icon: Sparkles,
  },
  {
    number: "03",
    title: "Community Growth & Operations",
    description:
      "Building and managing healthy ecosystems from launch to maturity — moderator teams, steward programs, retention systems, and community analytics.",
    tags: ["Community Launch", "Retention Systems", "Discord & Telegram"],
    icon: Users,
  },
  {
    number: "04",
    title: "Ecosystem Programs & Activations",
    description:
      "Designing experiences that create long-term participation — hackathons, bootcamps, campus tours, X Spaces, AMAs, and builder programs.",
    tags: ["Hackathons", "Campus Tours", "X Spaces"],
    icon: Zap,
  },
  {
    number: "05",
    title: "Research, Intelligence & Advisory",
    description:
      "Helping organizations understand African ecosystems before making decisions — ecosystem mapping, market research, community intelligence, and health audits.",
    tags: ["Ecosystem Mapping", "Market Research", "Web3 Advisory"],
    icon: BarChart3,
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="border-b border-border px-6 py-12 sm:px-10 sm:py-16"
    >
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-orange">
          WHAT WE DO
        </p>
        <h2 className="max-w-3xl font-display text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
          Five pillars.
        </h2>
        <p className="mt-6 max-w-2xl text-base text-white/60 sm:text-lg">
          Every service is backed by documented proof of execution.
        </p>

        <div className="mt-10 overflow-hidden border border-border bg-black/70">
          <div className="border-b border-border px-6 py-5 sm:px-8">
            <p className="text-sm leading-relaxed text-white/70 sm:text-base">
              Everything we build is designed around one goal:{" "}
              <span className="font-semibold text-orange">
                Helping organizations successfully enter, grow and scale
                communities across Africa.
              </span>
            </p>
          </div>

          <div className="grid gap-0 lg:grid-cols-5">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.number}
                  className="border-b border-border p-6 transition-colors hover:border-orange/50 lg:border-b-0 lg:border-r lg:last:border-r-0 sm:p-7"
                >
                  <p className="text-[11px] uppercase tracking-[0.2em] text-orange/70">
                    {pillar.number}
                  </p>
                  <div className="mt-5 flex h-10 w-10 items-center justify-center border border-orange/20 bg-orange/10">
                    <Icon className="h-5 w-5 text-orange" strokeWidth={1.8} />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-white">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">
                    {pillar.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {pillar.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-none border border-orange/20 bg-black/70 px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-white/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

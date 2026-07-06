import { ArrowRight } from "lucide-react";
import NetworkBackground from "./NetworkBackground";

export default function Hero() {
  const proofHighlights = [
    { value: "200,000+", label: "Community members reached" },
    { value: "12+", label: "African countries" },
    { value: "30+", label: "Physical events delivered" },
    { value: "500+", label: "X Spaces hosted" },
  ];

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border bg-[#0f1011] pt-28 sm:pt-36"
    >
      <NetworkBackground />

      {/* corner circuit accent, decorative */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 h-72 w-72 opacity-40 sm:h-96 sm:w-96"
      >
        {/* <svg viewBox="0 0 200 200" className="h-full w-full">
          <g stroke="#F5A623" strokeWidth="0.6" fill="none" opacity="0.5">
            <path d="M60 0 L120 60 L120 140" />
            <path d="M90 0 L150 60" />
            <path d="M0 90 L60 150 L140 150" />
            <circle cx="120" cy="60" r="2" fill="#F5A623" stroke="none" />
            <circle cx="60" cy="150" r="2" fill="#F5A623" stroke="none" />
            <rect
              x="150"
              y="20"
              width="10"
              height="10"
              transform="rotate(45 155 25)"
            />
          </g>
        </svg> */}
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pb-16 sm:px-10 sm:pb-20">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#FF8C42]">
          AFRICA'S ECOSYSTEM INFRASTRUCTURE PARTNER
        </p>

        <h1 className="max-w-4xl font-display text-4xl font-bold leading-[1.02] text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Building Africa's <br />
          <span className="text-[#FF8C42]">Human Infrastructure</span>.
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
          TechBurst designs and runs the systems that help organizations enter
          African markets, activate contributors, coordinate communities, and
          transform participation into measurable outcomes.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#impact"
            className="inline-flex items-center gap-2 rounded-md bg-[#C45A00] px-5 py-3 text-sm font-semibold text-[#fdfdff] transition-colors hover:bg-[#FF8C42]"
          >
            See Our Impact
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#services"
            className="inline-flex items-center rounded-md border border-[#FF8C42]/70 px-5 py-3 text-sm font-semibold text-[#FF8C42] transition-colors hover:bg-[#FF8C42]/10"
          >
            Explore Services
          </a>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 rounded-2xl bg-black/40 p-3 shadow-[0_0_0_1px_rgba(255,106,0,0.08)] backdrop-blur-sm sm:grid-cols-4 sm:p-4">
          {proofHighlights.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl bg-surface/70 p-3 sm:p-4"
            >
              <div className="font-display text-2xl font-bold text-white sm:text-3xl">
                {stat.value}
              </div>
              <div className="mt-1 text-[11px] uppercase tracking-[0.16em] text-white/50 sm:text-xs">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

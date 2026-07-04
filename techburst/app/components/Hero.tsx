import { ArrowRight } from "lucide-react";
import { heroStats } from "../types/stats";
import NetworkBackground from "./NetworkBackground";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border pt-32 sm:pt-40">
      <NetworkBackground />

      {/* corner circuit accent, decorative */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 h-72 w-72 opacity-40 sm:h-96 sm:w-96"
      >
        <svg viewBox="0 0 200 200" className="h-full w-full">
          <g stroke="#F5A623" strokeWidth="0.6" fill="none" opacity="0.5">
            <path d="M60 0 L120 60 L120 140" />
            <path d="M90 0 L150 60" />
            <path d="M0 90 L60 150 L140 150" />
            <circle cx="120" cy="60" r="2" fill="#F5A623" stroke="none" />
            <circle cx="60" cy="150" r="2" fill="#F5A623" stroke="none" />
            <rect x="150" y="20" width="10" height="10" transform="rotate(45 155 25)" />
          </g>
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pb-24 sm:px-10">
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-orange">
          Africa&rsquo;s Ecosystem Activation Engine
        </p>

        <h1 className="font-display text-5xl font-bold leading-[1.03] text-white sm:text-6xl md:text-7xl">
          We Build
          <br />
          <span className="text-orange">Communities</span>
          <br />
          That Convert.
        </h1>

        <p className="mt-8 max-w-xl text-lg text-white/60">
          From campus masterclasses to pan-African summits, we design and
          execute decentralized onboarding frameworks that turn interest into
          active developers, users, and advocates — across 6 African
          countries and counting.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#case-studies"
            className="inline-flex items-center gap-2 rounded-md bg-orange px-6 py-3.5 text-sm font-semibold text-black transition-colors hover:bg-orange-light"
          >
            See Our Proof of Work
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#services"
            className="inline-flex items-center rounded-md border border-orange px-6 py-3.5 text-sm font-semibold text-orange transition-colors hover:bg-orange/10"
          >
            Our Services
          </a>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-8 border-t border-border pt-10 sm:grid-cols-4">
          {heroStats.map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-3xl font-bold text-orange sm:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1 text-xs uppercase tracking-wide text-white/50">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

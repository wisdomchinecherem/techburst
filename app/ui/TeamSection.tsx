"use client";

import Image from "next/image";

const teamMembers = [
  {
    initials: "FN",
    name: "Faizan Naserian",
    role: "Ecosystem Architect & Founder",
    image: "/founder.jpeg",
    description:
      "Founder of TechBurst, designing go-to-market and ecosystem activation systems that drive African Web3 adoption and measurable market expansion.",
    tags: [
      "DMO Strategy",
      "Ecosystem Design",
      "Market Expansion",
      "African Web3",
    ],
  },
  {
    initials: "CK",
    name: "Cyndie Kamau",
    role: "Blockchain Protocol Engineer",
    image: "/teams/WhatsApp Image 2026-07-05 at 9.33.52 AM.jpeg",
    description:
      "Developer Relations professional, Rust developer, and Web3 technical educator focused on decentralized infrastructure, smart contract development, and growing developer ecosystems across Africa.",
    tags: [
      "Protocol Engineering",
      "Rust Development",
      "DevRel",
      "Web3 Education",
      "Ecosystem Growth",
    ],
  },
];

export default function TeamSection() {
  return (
    <section className="border-b border-border px-6 py-10 sm:px-10 sm:py-16">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px w-10 bg-orange" />
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-orange">
                The Team
              </p>
            </div>

            <h2 className="max-w-2xl font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
              The people behind
              <br />
              the <span className="text-orange">infrastructure.</span>
            </h2>
          </div>

          <span className="text-sm text-white/35">2 / 2</span>
        </div>

        {/* Divider */}
        <div className="mt-10 h-px" />

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {teamMembers.map((member) => (
            <div
              key={member.initials}
              className="overflow-hidden rounded-[28px] border border-border bg-[#090909] p-6 shadow-[0_30px_90px_rgba(0,0,0,0.18)] transition hover:-translate-y-1 hover:border-orange/40"
            >
              <div className="flex flex-col gap-6 lg:flex-row">
                <div className="relative min-h-[220px] overflow-hidden rounded-[28px] border border-white/10 bg-[#0f1011] lg:h-[260px] lg:w-[260px]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/80 to-transparent" />
                </div>

                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.32em] text-orange/80">
                      {member.role}
                    </p>
                    <h3 className="mt-4 font-display text-3xl font-bold text-white">
                      {member.name}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-white/70">
                      {member.description}
                    </p>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {member.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="mt-8 border-l-2 border-orange bg-[#1A120C] px-8 py-7">
          <p className="max-w-5xl text-base leading-8 text-white/80">
            Together, this team has built and operated ecosystems across{" "}
            <span className="font-semibold text-orange">
              12+ African countries
            </span>{" "}
            — combining strategy, execution, and on-the-ground presence to
            deliver outcomes that are{" "}
            <span className="text-orange">
              documented, repeatable, and real.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

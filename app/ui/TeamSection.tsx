"use client";

const teamMembers = [
  {
    initials: "FN",
    name: "Faizan Naserian",
    role: "Ecosystem Architect & Founder",
    tags: ["DMO Strategy", "Ecosystem Design", "Market Expansion"],
  },
  {
    initials: "CO",
    name: "[Name]",
    role: "Head of Community Operations",
    tags: ["Community Ops", "Moderator Teams", "Retention Systems"],
  },
  {
    initials: "ME",
    name: "[Name]",
    role: "Head of Market Expansion",
    tags: ["GTM Execution", "Partnerships", "Ambassador Programs"],
  },
  {
    initials: "RI",
    name: "[Name]",
    role: "Research & Intelligence Lead",
    tags: ["Ecosystem Mapping", "Market Research", "Web3 Advisory"],
  },
  {
    initials: "PA",
    name: "[Name]",
    role: "Programs & Activations Lead",
    tags: ["Hackathons", "Campus Tours", "X Spaces"],
  },
  {
    initials: "PL",
    name: "[Name]",
    role: "Partnerships Lead",
    tags: ["Protocol Partners", "Institutional BD", "Ecosystem Alliances"],
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

          <span className="text-sm text-white/35">10 / 11</span>
        </div>

        {/* Divider */}
        <div className="mt-10 h-px bg-border" />

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <div
              key={member.initials}
              className="border-b border-border p-8 lg:border-r [&:nth-child(3n)]:border-r-0"
            >
              <div className="flex gap-5">
                {/* Image Placeholder */}
                <div className="flex h-16 w-16 shrink-0 items-center justify-center border-2 border-orange bg-black">
                  <span className="font-display text-lg font-bold text-orange">
                    {member.initials}
                  </span>
                </div>

                {/* Info */}
                <div className="flex-1">
                  <h3 className="font-display text-xl font-bold text-white">
                    {member.name}
                  </h3>

                  <p className="mt-1 text-sm font-medium text-orange">
                    {member.role}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {member.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-white/10 bg-black px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-white/60"
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

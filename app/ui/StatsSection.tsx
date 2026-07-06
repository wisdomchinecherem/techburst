const impactGroups = [
  {
    title: "Community Reach",
    stats: [
      { value: "200,000+", label: "Community Members Reached" },
      { value: "12+", label: "African Countries" },
      { value: "500+", label: "X Spaces Hosted" },
    ],
  },
  {
    title: "Ecosystem Delivery",
    stats: [
      { value: "30+", label: "Physical Events" },
      { value: "40+", label: "Virtual Sessions" },
      { value: "20+", label: "Hackathons & Builder Programs" },
    ],
  },
  {
    title: "Partnerships",
    stats: [
      { value: "8+", label: "Protocol Partners" },
      { value: "5+", label: "Institutional Partners" },
      { value: "100+", label: "Builders & Community Leaders Supported" },
    ],
  },
];

const marketAccessTags = [
  "East Africa",
  "West Africa",
  "Southern Africa",
  "North Africa",
];

export default function StatsSection() {
  return (
    <section id="impact" className="border-b border-border px-6 py-20 sm:px-10">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#FF8C42]">
          OUR IMPACT
        </p>
        <h2 className="max-w-2xl font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl">
          Documented outcomes.
        </h2>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
          Numbers prove capability. Here is what we have built across Africa.
        </p>

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {impactGroups.map((group, index) => (
            <div
              key={group.title}
              className={`border border-border bg-[#090909] p-6 sm:p-8 ${
                index === impactGroups.length - 1 ? "lg:col-start-2" : ""
              }`}
            >
              <h3 className="font-display text-xl font-semibold text-white">
                {group.title}
              </h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {group.stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="font-display text-3xl font-bold text-white sm:text-4xl">
                      {stat.value}
                    </div>
                    <div className="mt-2 text-[11px] uppercase tracking-[0.16em] text-white/50">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="border border-border bg-[#090909] p-6 sm:p-8 lg:col-start-1 lg:row-start-2">
            <h3 className="font-display text-xl font-semibold text-white">
              Market Access
            </h3>
            <div className="mt-6 flex flex-wrap gap-3">
              {marketAccessTags.map((tag) => (
                <span
                  key={tag}
                  className="border border-[#FF8C42]/20 bg-black/70 px-3 py-2 text-sm font-medium text-white/70"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="mt-6 text-sm italic text-white/60">
              Supported through local ecosystem partners and community
              infrastructure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

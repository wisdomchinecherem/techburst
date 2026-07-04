import { statsRowOne, statsRowTwo } from "../types/stats";

export default function StatsSection() {
  const allStats = [...statsRowOne, ...statsRowTwo];

  return (
    <section className="border-b border-border px-6 py-20 sm:px-10">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-orange">
          By The Numbers
        </p>
        <h2 className="max-w-2xl font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl">
          Documented outcomes, not projections.
        </h2>

        <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden border border-border bg-border sm:grid-cols-4">
          {allStats.map((stat) => (
            <div
              key={stat.label}
              className="border-l-2 border-orange bg-black px-6 py-8"
            >
              <div className="font-display text-4xl font-bold text-orange sm:text-5xl">
                {stat.value}
              </div>
              <div className="mt-2 text-xs uppercase tracking-wide text-white/50">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* <p className="mt-4 text-xs text-white/30">
          * Row 2 metrics use placeholder labels pending final copy.
        </p> */}
      </div>
    </section>
  );
}

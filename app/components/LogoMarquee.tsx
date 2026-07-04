import { partners } from "../types/partners";

export default function LogoMarquee() {
  // duplicate list for seamless scroll loop
  const items = [...partners, ...partners];

  return (
    <section className="border-b border-border bg-black py-10">
      <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.2em] text-orange">
        Trusted By &amp; Active In
      </p>

      <div className="relative overflow-hidden">
        <div className="flex w-max animate-marquee gap-16">
          {items.map((partner, i) => (
            <span
              key={`${partner.name}-${i}`}
              className="whitespace-nowrap text-lg font-medium text-white/40"
            >
              {partner.name}
            </span>
          ))}
        </div>
        {/* edge fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent" />
      </div>
    </section>
  );
}

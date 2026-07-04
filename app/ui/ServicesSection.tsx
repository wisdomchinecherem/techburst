import { services } from "../types/services";

export default function ServicesSection() {
  return (
    <section id="services" className="border-b border-border px-6 py-20 sm:px-10">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-orange">
          What We Do
        </p>
        <h2 className="max-w-3xl font-display text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
          Six services. One mission: activate Africa&rsquo;s tech ecosystem.
        </h2>
        <p className="mt-6 max-w-xl text-base text-white/60 sm:text-lg">
          Every service is backed by documented proof of execution — not
          proposals, not pitches.
        </p>

        <div className="mt-14 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.number} className="bg-black p-8">
                <div className="mb-8 flex items-center justify-between">
                  <Icon className="h-6 w-6 text-orange" strokeWidth={1.75} />
                  <span className="font-display text-sm text-white/30">
                    {service.number}
                  </span>
                </div>
                <h3 className="font-display text-lg font-bold text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/55">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

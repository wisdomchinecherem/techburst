import ImagePlaceholder from "./ImagePlaceholder";

export default function PartnersSection() {
  return (
    <section
      id="partners"
      className="scroll-mt-24 border-b border-border px-6 py-12 sm:px-10 sm:py-16"
    >
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-orange">
          Partners
        </p>
        <h2 className="max-w-2xl font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl">
          Built alongside the ecosystem, not on top of it.
        </h2>
        <p className="mt-6 max-w-xl text-base text-white/60 sm:text-lg">
          [Placeholder] Details on protocol and foundation partnerships go here
          — what each partnership involves and what it unlocked.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <ImagePlaceholder
              key={i}
              label="Partner logo"
              aspect="square"
              className="p-3 sm:p-4"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

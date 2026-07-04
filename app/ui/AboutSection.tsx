import ImagePlaceholder from "./ImagePlaceholder";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-b border-border px-6 py-8 sm:px-10 sm:py-10"
    >
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-orange">
            About
          </p>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            [Placeholder] Who we are.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/60 sm:text-base">
            [Placeholder] TECHBURST is Africa&rsquo;s ecosystem activation
            engine — a team built for execution, not proposals. Replace this
            paragraph with your real founding story, mission, and team
            background.
          </p>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/60 sm:text-base">
            [Placeholder] Add a second paragraph here on team credentials,
            geographic footprint, or what makes your execution model different
            from a typical agency.
          </p>
        </div>
        <ImagePlaceholder
          label="Team photo / office / event photo"
          aspect="portrait"
        />
      </div>
    </section>
  );
}

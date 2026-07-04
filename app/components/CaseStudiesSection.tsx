import ImagePlaceholder from "./ImagePlaceholder";

// PLACEHOLDER SECTION — replace copy and images with real case studies
const placeholderCaseStudies = [
  {
    title: "[Placeholder] Nairobi Campus Tour",
    result: "1,200+ students reached across 4 universities in 3 weeks.",
  },
  {
    title: "[Placeholder] Lagos Builder Summit",
    result: "300 attendees, 49 partner-led breakout sessions.",
  },
  {
    title: "[Placeholder] Accra Onboarding Sprint",
    result: "126 developers shipped their first on-chain transaction.",
  },
];

export default function CaseStudiesSection() {
  return (
    <section
      id="case-studies"
      className="scroll-mt-24 border-b border-border px-6 py-20 sm:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-orange">
          Case Studies
        </p>
        <h2 className="max-w-2xl font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl">
          Proof of work, not promises.
        </h2>
        <p className="mt-6 max-w-xl text-base text-white/60 sm:text-lg">
          [Placeholder] A closer look at how our activation framework plays
          out on the ground — real numbers from real campuses and summits.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {placeholderCaseStudies.map((study) => (
            <div
              key={study.title}
              className="overflow-hidden rounded-xl border border-border bg-surface"
            >
              <div className="p-4 pb-0">
                <ImagePlaceholder label="Case study photo" aspect="video" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-base font-bold text-white">
                  {study.title}
                </h3>
                <p className="mt-2 text-sm text-white/55">{study.result}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

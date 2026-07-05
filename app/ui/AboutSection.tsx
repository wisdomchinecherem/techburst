import Image from "next/image";

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
            Who we are.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/60 sm:text-base">
            TechBurst is a technology ecosystem platform dedicated to
            accelerating innovation across Africa by connecting founders,
            startups, developers, investors, enterprises, and technology
            enthusiasts. Through industry insights, events, strategic
            partnerships, community initiatives, and digital storytelling,
            TechBurst creates opportunities for collaboration, knowledge
            sharing, and business growth.
          </p>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/60 sm:text-base">
            Our mission is to amplify African innovation, bridge the gap between
            ideas and execution, and build an inclusive ecosystem where
            technology drives economic growth, solves real-world challenges, and
            empowers the next generation of innovators.
          </p>
        </div>
        <div className="relative overflow-hidden rounded-3xl p-6">
          <Image
            src="/aboutLogo.jpeg"
            alt="TechBurst About Logo"
            width={700}
            height={700}
            className="h-full w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}

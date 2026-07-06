import Image from "next/image";
import africaHackon from "@/public/logos/AFRICAHACKON.png";
import avalanche from "@/public/logos/AVALANCHE.png";
import base from "@/public/logos/BASE.png";
import brave from "@/public/logos/brave.png";
import celo from "@/public/logos/CELO.png";
import gdgNairobi from "@/public/logos/GDG NAIROBI.png";
import icp from "@/public/logos/ICP LOGO.jpeg";
import kca from "@/public/logos/KCA UNIVERSITY.png";
import riara from "@/public/logos/RIARA UNIVERSITY.jpeg";
import zetech from "@/public/logos/ZETECH LOGO.png";

const partnerLogos = [
  { name: "AfricaHackon", image: africaHackon },
  { name: "Avalanche", image: avalanche },
  { name: "Base", image: base },
  { name: "Brave", image: brave },
  { name: "Celo", image: celo },
  { name: "GDG Nairobi", image: gdgNairobi },
  { name: "ICP", image: icp },
  { name: "KCA University", image: kca },
  { name: "Riara University", image: riara },
  { name: "Zetech", image: zetech },
];

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

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {partnerLogos.map((partner) => {
            const isBrave = partner.name === "Brave";

            return (
              <div
                key={partner.name}
                className={`flex h-28 items-center justify-center rounded-2xl p-3 sm:p-4 ${
                  isBrave ? "bg-[#fdfdff]" : "bg-[#fdfdff]"
                }`}
              >
                <Image
                  src={partner.image}
                  alt={`${partner.name} logo`}
                  width={140}
                  height={140}
                  className="max-h-full max-w-full object-contain object-center"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

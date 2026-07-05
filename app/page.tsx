import AboutSection from "./ui/AboutSection";
import CaseStudiesSection from "./ui/CaseStudiesSection";
import Footer from "./ui/Footer";
import HackathonsSection from "./ui/HackathonsSection";
import Hero from "./ui/Hero";
import LogoMarquee from "./ui/LogoMarquee";
import Navbar from "./ui/Navbar";
import PartnersSection from "./ui/PartnersSection";
import ServicesSection from "./ui/ServicesSection";
import StatsSection from "./ui/StatsSection";
import "./globals.css";
import TeamSection from "./ui/TeamSection";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0f1011] text-[#fdfdff]">
      <Navbar />
      <Hero />
      <LogoMarquee />
      <StatsSection />
      <ServicesSection />
      <HackathonsSection />
      <CaseStudiesSection />
      <PartnersSection />
      <AboutSection />
      <TeamSection />
      <section className="border-t border-border bg-[#0B0B0B] px-6 py-16 sm:px-10 sm:py-20">
        <div className="mx-auto max-w-5xl text-center">
          <blockquote className="font-display text-2xl leading-tight text-white sm:text-3xl md:text-4xl">
            TechBurst builds the{" "}
            <span className="text-orange">human infrastructure</span> behind
            Africa&apos;s fastest-growing technology ecosystems. We help
            organizations enter African markets, activate contributors,
            coordinate communities, and transform participation into{" "}
            <span className="text-orange">measurable outcomes</span>.
          </blockquote>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="#top"
              className="inline-flex items-center rounded-md bg-orange px-5 py-3 text-sm font-semibold text-black transition-colors hover:bg-orange-light"
            >
              Partner With Us
            </a>
            <a
              href="#hackathons"
              className="inline-flex items-center rounded-md border border-orange/70 px-5 py-3 text-sm font-semibold text-orange transition-colors hover:bg-orange/10"
            >
              View Case Studies
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

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


export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <LogoMarquee />
      <StatsSection />
      <ServicesSection />
      <HackathonsSection />
      <CaseStudiesSection />
      <PartnersSection />
      <AboutSection />
      <Footer />
    </main>
  );
}

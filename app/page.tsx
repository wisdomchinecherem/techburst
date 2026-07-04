import AboutSection from "./components/AboutSection";
import CaseStudiesSection from "./components/CaseStudiesSection";
import Footer from "./components/Footer";
import HackathonsSection from "./components/HackathonsSection";
import Hero from "./components/Hero";
import LogoMarquee from "./components/LogoMarquee";
import Navbar from "./components/Navbar";
import PartnersSection from "./components/PartnersSection";
import ServicesSection from "./components/ServicesSection";
import StatsSection from "./components/StatsSection";
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

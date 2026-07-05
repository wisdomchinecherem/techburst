import Link from "next/link";
import { Gem, ArrowRight } from "lucide-react";
import Image from "next/image";
import logo from "../../public/logos/techburstlogo.jpg";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Hackathons & Web3", href: "#hackathons" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Partners", href: "#partners" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-black/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-10">
        <Link href="" className="flex items-center gap-2.5">
          {/* <Gem className="h-6 w-6 text-orange" strokeWidth={2} /> */}
          <Image src={logo} alt="TechBurst Logo" className="h-8 w-8" />
          <span className="font-display text-lg font-bold tracking-tight text-white">
            TECHBURST
          </span>
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/60 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfdyQAczBQFnBK9ucQC9j-O1NyHiLGPiXhvQ3_-E_ycMXtZYA/viewform?usp=publish-editor"
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-2 rounded-md bg-orange px-5 py-2.5 text-sm font-semibold text-black transition-colors hover:bg-orange-light"
        >
          Partner With Us
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}

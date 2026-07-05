import Image from "next/image";
import logo from "../../public/logos/techburstlogo.jpg";

const footerLinks: Record<
  string,
  Array<{ label: string; href: string; target?: string }>
> = {
  Company: [
    { label: "Services", href: "#services" },
    { label: "Hackathons & Web3", href: "#hackathons" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "About", href: "#about" },
  ],
  Connect: [
    {
      label: "Partner With Us",
      href: "https://docs.google.com/forms/d/e/1FAIpQLSfdyQAczBQFnBK9ucQC9j-O1NyHiLGPiXhvQ3_-E_ycMXtZYA/viewform?usp=publish-editor",
      target: "_blank",
    },
    { label: "Twitter / X", href: "https://x.com/T3chBurst", target: "_blank" },
  ],
};

export default function Footer() {
  return (
    <footer className="px-6 py-16 sm:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap justify-between gap-12">
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5">
              <Image
                src={logo}
                alt="TechBurst Logo"
                className="h-8 w-8 object-cover"
              />
              <span className="font-display text-lg font-bold text-[#fdfdff]">
                TECHBURST
              </span>
            </div>
            <p className="mt-4 text-sm text-white/50">
              Africa&rsquo;s ecosystem infrastructure partner — building the
              systems behind sustainable growth.
            </p>
          </div>

          <div className="flex flex-wrap gap-16">
            {Object.entries(footerLinks).map(([heading, links]) => (
              <div key={heading}>
                <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-white/40">
                  {heading}
                </h4>
                {links.map((link) => {
                  const isExternal = link.href.startsWith("http");

                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target={
                        isExternal || link.target === "_blank"
                          ? "_blank"
                          : undefined
                      }
                      rel={
                        isExternal || link.target === "_blank"
                          ? "noreferrer noopener"
                          : undefined
                      }
                      className="mb-3 block text-sm text-white/70 hover:text-[#FF8C42]"
                    >
                      {link.label}
                    </a>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-wrap justify-between gap-4 border-t border-border pt-8 text-xs text-white/35">
          <span>
            © 2026 TechBurst. Africa's Ecosystem Infrastructure Partner.
          </span>
          <span>Built for builders.</span>
        </div>
      </div>
    </footer>
  );
}

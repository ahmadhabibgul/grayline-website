import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";
import { Process } from "@/components/sections/process";
import { Projects } from "@/components/sections/projects";
import { Services } from "@/components/sections/services";
import { WhyUs } from "@/components/sections/why-us";
import { BrandMark } from "@/components/ui/brand-mark";
import { PrimaryButton } from "@/components/ui/primary-button";

const navItems = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" }
];

export default function Home() {
  return (
    <div className="site-shell min-h-screen bg-surface">
      <header className="header-shell sticky top-0 z-40">
        <div className="mx-auto flex w-full max-w-[1220px] items-center justify-between px-5 py-5 sm:px-7 lg:px-10">
          <a href="#" className="inline-flex items-center">
            <BrandMark />
          </a>

          <nav className="hidden items-center gap-9 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </nav>

          <PrimaryButton href="#contact" variant="secondary" className="px-7">
            Contact Us
          </PrimaryButton>
        </div>
      </header>

      <main className="relative z-[1]">
        <Hero />
        <Services />
        <About />
        <Process />
        <Projects />
        <WhyUs />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

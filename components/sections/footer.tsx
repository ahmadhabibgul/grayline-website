import Link from "next/link";
import { Container } from "@/components/ui/container";
import { BrandMark } from "@/components/ui/brand-mark";

export function Footer() {
  return (
    <footer className="border-t border-line/70 py-10 sm:py-12">
      <Container className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-4">
          <BrandMark compact />
          <p className="max-w-xs text-sm leading-7 text-muted">Smart solutions, built right.</p>
        </div>

        <div className="flex flex-wrap items-center gap-5">
          <Link href="https://www.linkedin.com/in/ahmad-habib-640681350/" target="_blank" rel="noreferrer" className="footer-link">
            LinkedIn
          </Link>
          <Link href="https://github.com/ahmadhabibgul" target="_blank" rel="noreferrer" className="footer-link">
            GitHub
          </Link>
          <Link href="https://x.com/GraylineDXB" target="_blank" rel="noreferrer" className="footer-link">
            X
          </Link>
        </div>
      </Container>
    </footer>
  );
}

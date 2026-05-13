import { Reveal } from "@/components/animations/reveal";
import { CheckItem } from "@/components/ui/check-item";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const reasons = [
  "Fast delivery without sacrificing polish or maintainability.",
  "Direct communication with the builders doing the work.",
  "Custom systems designed around real business goals.",
  "A cleaner, more considered UI than off-the-shelf templates."
];

export function WhyUs() {
  return (
    <section id="why-us" className="section-shell section-clear section-star star-left star-tilt-c">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <SectionHeading
              label="Why Grayline"
              title={
                <>
                  Built for teams that want <span className="split-highlight">clarity</span>
                </>
              }
              description="We keep the process close, the communication direct, and the product quality high from start to finish."
            />
          </Reveal>

          <Reveal delay={0.08}>
            <div className="surface-card grid-overlay p-7 sm:p-8">
              <span className="pill-badge">What clients value</span>
              <div className="mt-6 space-y-3">
                {reasons.map((reason) => (
                  <CheckItem key={reason}>{reason}</CheckItem>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

import { Reveal } from "@/components/animations/reveal";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We clarify goals, audience, and constraints before touching the interface."
  },
  {
    number: "02",
    title: "Design",
    description: "We shape the experience around hierarchy, conversion, and visual consistency."
  },
  {
    number: "03",
    title: "Development",
    description: "We build the product cleanly, keep feedback tight, and preserve momentum."
  },
  {
    number: "04",
    title: "Launch",
    description: "We polish the final release, test the details, and ship with confidence."
  }
];

export function Process() {
  return (
    <section id="process" className="section-shell section-clear section-star star-center star-soft star-tilt-c">
      <Container>
        <SectionHeading
          label="Process"
          title={
            <>
              A simple <span className="split-highlight">delivery system</span>
            </>
          }
          description="A clear process keeps scope realistic, feedback productive, and launches smoother."
        />

        <div className="mt-12 surface-card grid-overlay p-6 sm:p-7 lg:p-8">
          <div className="grid gap-4 lg:grid-cols-4">
            {steps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.06}>
                <div className="h-full rounded-[1.6rem] border border-white/70 bg-white/78 p-5 shadow-[0_10px_24px_rgba(13,31,22,0.05)]">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand">{step.number}</p>
                  <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-ink">{step.title}</h3>
                  <p className="support-copy mt-4">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

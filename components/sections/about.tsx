import { Reveal } from "@/components/animations/reveal";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const stats = [
  {
    value: "3",
    label: "Dedicated builders"
  },
  {
    value: "Fast",
    label: "Short feedback loops and quick iterations"
  },
  {
    value: "Direct",
    label: "No layers, just clear communication"
  }
];

export function About() {
  return (
    <section id="about" className="section-shell section-muted section-star star-left star-soft star-tilt-b">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <Reveal>
            <SectionHeading
              label="About"
              title={
                <>
                  A small team with <span className="split-highlight">focused execution</span>
                </>
              }
              description="Grayline is student-led, but our process is built around clarity, speed, and thoughtful delivery from the first conversation through launch."
            />
          </Reveal>

          <Reveal delay={0.08}>
            <div className="surface-card grid-overlay p-7 sm:p-9">
              <span className="pill-badge">Studio mindset</span>
              <p className="lead-copy mt-6 max-w-none">
                We stay intentionally lean so feedback moves faster, decisions stay close to the work, and every
                release feels considered. The result is a calmer process for clients and a stronger product at the end.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div key={stat.value} className="rounded-[1.5rem] border border-white/70 bg-white/78 p-5 shadow-[0_10px_24px_rgba(13,31,22,0.05)]">
                    <p className="text-[2rem] font-semibold tracking-[-0.05em] text-ink">{stat.value}</p>
                    <p className="support-copy mt-3">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

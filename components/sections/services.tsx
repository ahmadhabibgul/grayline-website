import { Reveal } from "@/components/animations/reveal";
import { Container } from "@/components/ui/container";
import { BrowserIcon, CompassIcon, LayersIcon } from "@/components/ui/icons";
import { SectionHeading } from "@/components/ui/section-heading";

const services = [
  {
    title: "Website Development",
    description: "Conversion-focused, responsive websites designed to look refined and perform across devices.",
    detail: "Strategy, design, and development aligned around clear business outcomes.",
    icon: <BrowserIcon className="h-5 w-5" />
  },
  {
    title: "SaaS Development",
    description: "Modern SaaS products with scalable architecture, intuitive UI, and clean user flows.",
    detail: "Custom product experiences built around real workflows, not generic dashboards.",
    icon: <LayersIcon className="h-5 w-5" />
  },
  {
    title: "Custom Solutions",
    description: "Tailored digital systems that align with your process instead of forcing generic templates.",
    detail: "Flexible systems for operations, internal tooling, and customer-facing platforms.",
    icon: <CompassIcon className="h-5 w-5" />
  }
];

export function Services() {
  return (
    <section id="services" className="section-shell section-clear section-star star-right star-large star-tilt-a">
      <Container>
        <SectionHeading
          label="Services"
          title={
            <>
              What we <span className="split-highlight">build</span>
            </>
          }
          description="Focused execution from strategy to delivery for websites and software products."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.08}>
              <article className="surface-card grid-overlay surface-card-hover h-full p-7">
                <span className="icon-badge">{service.icon}</span>
                <h3 className="mt-6 text-[1.75rem] font-semibold tracking-[-0.04em] text-ink">{service.title}</h3>
                <p className="support-copy mt-4">{service.description}</p>
                <p className="mt-6 text-sm font-medium text-ink-soft">{service.detail}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

import { Reveal } from '@/components/animations/reveal';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';

const projects = [
  {
    name: 'Lumière',
    type: 'Service Website',
    summary:
      'A polished salon website concept with guided service discovery, elevated branding, and a conversion-focused booking flow.',
    note: 'Luxury service positioning',
  },
  {
    name: 'FlowOps',
    type: 'SaaS Dashboard',
    summary:
      'A lightweight operations platform built around approvals, reporting, and fast-moving team workflows.',
    note: 'Internal product systems',
  },
  {
    name: 'BrightLearn',
    type: 'Education Platform',
    summary:
      'A modular learning product concept designed for onboarding, lessons, and progress tracking at scale.',
    note: 'Structured learning flows',
  },
];

export function Projects() {
  return (
    <section
      id='projects'
      className='section-shell section-muted section-star star-right star-large star-tilt-d'
    >
      <Container>
        <SectionHeading
          label='Projects'
          title={
            <>
              Selected <span className='split-highlight'>projects</span>
            </>
          }
          description='A growing collection of concepts and case-study style work that shows how we approach clarity, systems, and polished implementation.'
        />

        <div className='mt-12 grid gap-5 lg:grid-cols-3'>
          {projects.map((project, index) => (
            <Reveal key={project.name} delay={index * 0.08}>
              <article className='surface-card grid-overlay surface-card-hover h-full p-6 sm:p-7'>
                <div className='project-preview p-5'>
                  <span className='project-pill'>{project.type}</span>
                  <div className='mt-8'>
                    <p className='text-sm font-medium uppercase tracking-[0.18em] text-muted'>
                      {project.note}
                    </p>
                    <p className='mt-3 text-3xl font-semibold tracking-[-0.05em] text-ink'>
                      {project.name}
                    </p>
                  </div>
                </div>

                <div className='mt-6'>
                  <h3 className='text-[1.65rem] font-semibold tracking-[-0.04em] text-ink'>
                    {project.name}
                  </h3>
                  <p className='support-copy mt-4'>{project.summary}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

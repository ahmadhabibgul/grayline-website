"use client";

import { motion } from "framer-motion";
import { CheckItem } from "@/components/ui/check-item";
import { Container } from "@/components/ui/container";
import { FeatureTile } from "@/components/ui/feature-tile";
import { BrowserIcon, ChartIcon, CompassIcon, LayersIcon, RocketIcon, SparkIcon } from "@/components/ui/icons";
import { PrimaryButton } from "@/components/ui/primary-button";

const featureTiles = [
  {
    title: "Websites",
    description: "Modern, responsive business websites",
    icon: <BrowserIcon className="h-5 w-5" />
  },
  {
    title: "SaaS Products",
    description: "Custom web apps built for growth",
    icon: <LayersIcon className="h-5 w-5" />
  },
  {
    title: "Built to Scale",
    description: "Fast, secure, and ready for the future",
    icon: <RocketIcon className="h-5 w-5" />
  }
];

const trustMarks = [
  {
    label: "Launch-ready",
    icon: <SparkIcon className="h-4 w-4" />
  },
  {
    label: "Product-focused",
    icon: <CompassIcon className="h-4 w-4" />
  },
  {
    label: "Growth systems",
    icon: <ChartIcon className="h-4 w-4" />
  },
  {
    label: "Clear delivery",
    icon: <BrowserIcon className="h-4 w-4" />
  }
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line/80 pb-16 pt-12 sm:pb-20 sm:pt-16 lg:pb-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[4%] top-[18%] h-72 w-72 rounded-full bg-white/80 blur-3xl" />
        <div className="absolute right-[-8%] top-[5%] h-[34rem] w-[34rem] rotate-[10deg] bg-[linear-gradient(180deg,rgba(20,136,92,0.18),rgba(217,235,225,0.08))] opacity-90 [clip-path:polygon(50%_0%,59%_26%,82%_8%,71%_35%,100%_32%,76%_50%,100%_68%,71%_65%,82%_92%,59%_74%,50%_100%,41%_74%,18%_92%,29%_65%,0%_68%,24%_50%,0%_32%,29%_35%,18%_8%,41%_26%)]" />
        <div className="absolute right-[10%] top-[18%] h-96 w-96 rounded-full bg-brand/10 blur-[110px]" />
      </div>

      <Container>
        <div className="grid gap-14 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
          <div>
            <p className="eyebrow">Grayline Digital Studio</p>
            <div className="brand-rule" />

            <h1 className="hero-title mt-7 max-w-3xl">
              Smart solutions,
              <span className="split-highlight block">built right.</span>
            </h1>

            <p className="lead-copy mt-7 max-w-[36rem]">
              We build modern websites and SaaS products that help businesses grow, operate efficiently, and achieve
              their goals.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <PrimaryButton href="#contact">Get Started</PrimaryButton>
              <PrimaryButton href="#services" variant="secondary">
                Explore Services
              </PrimaryButton>
            </div>

            <div className="mt-10 grid gap-5 border-t border-line/80 pt-6 sm:grid-cols-3">
              {featureTiles.map((feature, index) => (
                <FeatureTile
                  key={feature.title}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  bordered={index > 0}
                />
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative"
          >
            <div className="surface-card surface-card-strong grid-overlay p-7 sm:p-8 lg:p-9">
              <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-brand/10 blur-3xl" />

              <p className="text-2xl font-semibold tracking-[-0.04em] text-ink">Grayline</p>

              <div className="mt-7 rounded-[1.5rem] border border-brand/10 bg-surface-tint/70 p-5">
                <span className="pill-badge">Available for projects</span>
                <p className="support-copy mt-4 max-w-sm text-ink-soft">
                  Currently onboarding new website and SaaS clients.
                </p>
              </div>

              <div className="mt-6 space-y-3">
                <CheckItem>Modern websites with clear business goals</CheckItem>
                <CheckItem>Custom SaaS experiences for real workflows</CheckItem>
                <CheckItem>Direct updates and fast iteration cycles</CheckItem>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="trust-rail">
          <div className="grid gap-6 lg:grid-cols-[auto_1fr] lg:items-center">
            <p className="trust-label">Built around what growing teams need</p>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {trustMarks.map((mark) => (
                <div key={mark.label} className="trust-mark">
                  <span className="trust-mark-icon">{mark.icon}</span>
                  <span>{mark.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

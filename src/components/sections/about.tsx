"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Icon } from "@iconify/react";
import ScrollReveal from "@/components/scroll-reveal";
import ParallaxWrapper from "@/components/parallax-wrapper";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { skills, tools } from "@/lib/skills";

const education = [
  {
    school: "Central Mindanao University",
    period: "2021 – 2025",
    degree: "BS Information Technology",
    major: "Major in Software Development",
  },
  {
    school: "Tubod National High School",
    period: "2019 – 2021",
    degree: "Senior High School",
    major: "Information and Communication Technology",
  },
];

const experience = [
  { role: "UI / UX Designer", company: "Freelance", period: "Oct 2025 – Present" },
  { role: "UI / UX Designer", company: "Freelance", period: "Aug 2025 – Sep 2025" },
  { role: "Web Developer (Intern)", company: "Split Second Software Services Corp.", period: "Feb 2025 – May 2025" },
  { role: "Web Developer", company: "Freelance / Commission", period: "Jun 2023" },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const decorY1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const decorY2 = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const decorX1 = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section ref={sectionRef} id="about" className="section-noise relative overflow-hidden py-32" aria-label="About">
      {/* Decorative parallax background elements */}
      {!prefersReducedMotion && (
        <>
          <motion.div
            className="gpu-accelerated pointer-events-none absolute -left-32 top-1/4 h-64 w-64 rounded-full bg-accent/3 blur-3xl"
            style={{ y: decorY1 }}
            aria-hidden="true"
          />
          <motion.div
            className="gpu-accelerated pointer-events-none absolute -right-24 top-2/3 h-48 w-48 rounded-full bg-accent/4 blur-2xl"
            style={{ y: decorY2, x: decorX1 }}
            aria-hidden="true"
          />
          <motion.div
            className="gpu-accelerated pointer-events-none absolute left-1/2 top-0 h-px w-1/3 -translate-x-1/2 bg-linear-to-r from-transparent via-accent/20 to-transparent"
            style={{ y: decorY2 }}
            aria-hidden="true"
          />
        </>
      )}

      <div className="relative mx-auto max-w-7xl px-6 md:px-12">
        {/* ── Bio + Skills ── */}
        <div className="grid gap-16 md:grid-cols-2 md:gap-24">
          {/* Left column — parallax vertical slow */}
          <ParallaxWrapper speed={0.15}>
            <ScrollReveal>
              <p className="font-mono text-xs tracking-widest text-muted uppercase">
                About
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="mt-4 text-4xl font-bold tracking-tighter md:text-6xl">
                Building at the
                <br />
                intersection of{" "}
                <span className="text-accent">design</span> &{" "}
                <span className="text-accent">engineering</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="mt-8 max-w-md text-base leading-relaxed text-muted">
                Hello, I&apos;m Ruel Miguel Diaz &mdash; a web &amp; software
                developer and UI/UX designer who designs, develops, tests, and
                maintains software applications and systems. With hands-on
                experience in front-end and back-end development, database
                management, website design, and UI/UX design.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
                Strong creative and analytical skills, with a collaborative
                mindset and keen attention to detail. Currently available for
                freelance projects and creative collaborations.
              </p>
            </ScrollReveal>
          </ParallaxWrapper>

          {/* Right column — Skill Icons — parallax vertical faster (creates depth) */}
          <ParallaxWrapper speed={0.35}>
            <div className="flex flex-col justify-center">
              <ScrollReveal delay={0.2}>
                <p className="mb-8 font-mono text-xs tracking-widest text-muted uppercase">
                  Skill Set
                </p>
              </ScrollReveal>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <ScrollReveal
                    key={skill.name}
                    delay={0.03 * index}
                    direction="up"
                    distance={20}
                  >
                    <div
                      className="group relative flex h-14 w-14 items-center justify-center rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-accent/5"
                      title={skill.name}
                    >
                      <Icon
                        icon={skill.icon}
                        className="text-2xl"
                        aria-hidden="true"
                      />
                      <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-foreground px-2 py-1 text-[10px] font-medium text-background opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                        {skill.name}
                      </span>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              <ScrollReveal delay={0.3}>
                <p className="mt-10 mb-8 font-mono text-xs tracking-widest text-muted uppercase">
                  AI &amp; Tools
                </p>
              </ScrollReveal>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool, index) => (
                  <ScrollReveal
                    key={tool.name}
                    delay={0.03 * index}
                    direction="up"
                    distance={20}
                  >
                    <div
                      className="group relative flex h-14 w-14 items-center justify-center rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-accent/5"
                      title={tool.name}
                    >
                      <Icon
                        icon={tool.icon}
                        className="text-2xl"
                        aria-hidden="true"
                      />
                      <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-foreground px-2 py-1 text-[10px] font-medium text-background opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                        {tool.name}
                      </span>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ParallaxWrapper>
        </div>

        {/* ── Education + Experience ── */}
        <div className="mt-32 grid gap-16 md:grid-cols-2 md:gap-24">
          {/* Education — parallax horizontal from left */}
          <ParallaxWrapper speed={0.12} axis="horizontal">
            <ScrollReveal>
              <p className="mb-8 font-mono text-xs tracking-widest text-muted uppercase">
                Education
              </p>
            </ScrollReveal>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <ScrollReveal key={edu.school} delay={0.1 * index}>
                  <div className="rounded-xl border border-border bg-card p-6 transition-colors duration-300 hover:border-accent/30">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">
                          {edu.school}
                        </h3>
                        <p className="mt-1 text-sm text-foreground/80">
                          {edu.degree}
                        </p>
                        <p className="mt-0.5 text-xs text-muted">
                          {edu.major}
                        </p>
                      </div>
                      <span className="shrink-0 rounded-full border border-border px-3 py-1 text-xs text-muted">
                        {edu.period}
                      </span>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </ParallaxWrapper>

          {/* Experience — parallax horizontal from right (negative speed) */}
          <ParallaxWrapper speed={-0.12} axis="horizontal">
            <ScrollReveal>
              <p className="mb-8 font-mono text-xs tracking-widest text-muted uppercase">
                Experience
              </p>
            </ScrollReveal>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <ScrollReveal
                  key={`${exp.role}-${exp.period}`}
                  delay={0.1 * index}
                  direction="left"
                  distance={20}
                >
                  <div className="group flex items-start justify-between border-b border-border pb-6 transition-colors duration-300 hover:border-accent/30">
                    <div>
                      <h3 className="text-base font-semibold text-foreground">
                        {exp.role}
                      </h3>
                      <p className="mt-1 text-sm text-muted">{exp.company}</p>
                    </div>
                    <span className="shrink-0 text-xs text-muted">
                      {exp.period}
                    </span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </ParallaxWrapper>
        </div>
      </div>
    </section>
  );
}

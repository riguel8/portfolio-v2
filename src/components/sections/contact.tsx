"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import ScrollReveal from "@/components/scroll-reveal";
import { Icon } from "@iconify/react";

const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/al.right.186" },
  { label: "Gmail", href: "https://mail.google.com/mail/?view=cm&fs=1&to=rmdiaz1234@gmail.com" },
  { label: "GitHub", href: "https://github.com/riguel8" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/rigueldi" },
  { label: "WhatsApp", href: "https://wa.me/639451743608" },
];

export default function Contact() {
  const containerRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], [48, 0]);
  const decorY1 = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const decorX1 = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const headingY = useTransform(scrollYProgress, [0, 1], [40, -20]);
  const socialY = useTransform(scrollYProgress, [0, 1], [60, -10]);

  return (
    <section
      ref={containerRef}
      id="contact"
      className="relative pb-0"
      aria-label="Contact"
    >
      <motion.div
        style={
          prefersReducedMotion
            ? {}
            : { scale, borderTopLeftRadius: borderRadius, borderTopRightRadius: borderRadius }
        }
        className="gpu-accelerated section-dots relative mx-auto overflow-hidden bg-card"
      >
        {/* Decorative parallax elements */}
        {!prefersReducedMotion && (
          <>
            <motion.div
              className="gpu-accelerated pointer-events-none absolute -left-32 top-1/4 h-80 w-80 rounded-full bg-accent/3 blur-3xl"
              style={{ y: decorY1 }}
              aria-hidden="true"
            />
            <motion.div
              className="gpu-accelerated pointer-events-none absolute -right-24 bottom-1/3 h-64 w-64 rounded-full bg-accent/4 blur-2xl"
              style={{ y: decorY1, x: decorX1 }}
              aria-hidden="true"
            />
          </>
        )}

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-20 sm:py-32 md:px-12">
          <div className="grid gap-16 md:grid-cols-2 md:gap-24">
            {/* Left — parallax vertical */}
            <motion.div
              className="gpu-accelerated"
              style={prefersReducedMotion ? {} : { y: headingY }}
            >
              <ScrollReveal>
                <p className="font-mono text-xs tracking-widest text-muted uppercase">
                  Get in Touch
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tighter md:text-6xl lg:text-7xl">
                  Let&apos;s build
                  <br />
                  something{" "}
                  <span className="text-accent">extraordinary</span>
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="mt-8 max-w-md text-base leading-relaxed text-muted">
                  Let&apos;s build something great together &mdash; feel free to
                  connect with me through any of the platforms.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <motion.a
                    href="tel:09922108064"
                    className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 sm:p-6 transition-colors duration-300 hover:border-accent/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    whileHover={{ y: -4, boxShadow: "0 12px 24px -8px rgba(0,0,0,0.2)" }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div 
                      className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-accent/10"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Icon
                        icon="solar:phone-line-duotone"
                        className="h-5 w-5 sm:h-6 sm:w-6 text-accent"
                        aria-hidden="true"
                      />
                    </motion.div>
                    <div className="min-w-0">
                      <span className="font-mono text-xs font-semibold text-muted uppercase tracking-wider">
                        Call
                      </span>
                      <div className="text-base sm:text-lg font-bold text-foreground truncate">
                        09922108064
                      </div>
                    </div>
                  </motion.a>
                  <motion.a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=rmdiaz1234@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 sm:p-6 transition-colors duration-300 hover:border-accent/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    whileHover={{ y: -4, boxShadow: "0 12px 24px -8px rgba(0,0,0,0.2)" }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div 
                      className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-accent/10"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Icon
                        icon="solar:letter-line-duotone"
                        className="h-5 w-5 sm:h-6 sm:w-6 text-accent"
                        aria-hidden="true"
                      />
                    </motion.div>
                    <div className="min-w-0">
                      <span className="font-mono text-xs font-semibold text-muted uppercase tracking-wider">
                        Email
                      </span>
                      <div className="text-base sm:text-lg font-bold text-foreground truncate">
                        rmdiaz1234@gmail.com
                      </div>
                    </div>
                  </motion.a>
                </div>
              </ScrollReveal>
            </motion.div>

            {/* Right — Social links — parallax at different speed for depth */}
            <motion.div
              className="gpu-accelerated flex flex-col justify-end"
              style={prefersReducedMotion ? {} : { y: socialY }}
            >
              <ScrollReveal delay={0.2}>
                <p className="mb-6 font-mono text-xs tracking-widest text-muted uppercase">
                  Elsewhere
                </p>
              </ScrollReveal>
              <ul className="space-y-4">
                {socialLinks.map((link, index) => (
                  <ScrollReveal
                    key={link.label}
                    delay={0.1 * index}
                    direction="left"
                    distance={20}
                  >
                    <li>
                      <motion.a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between border-b border-border py-3 sm:py-4 transition-colors duration-300 hover:border-accent/50 focus-visible:outline-none focus-visible:border-accent"
                        whileHover={{ x: 8 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span className="text-base sm:text-lg font-medium text-foreground transition-colors group-hover:text-accent">
                          {link.label}
                        </span>
                        <motion.span
                          initial={{ x: 0, y: 0 }}
                          whileHover={{ x: 4, y: -4 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Icon icon="solar:arrow-right-up-line-duotone" className="h-4 w-4" />
                        </motion.span>
                      </motion.a>
                    </li>
                  </ScrollReveal>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Footer */}
          <ScrollReveal delay={0.4}>
            <div className="mt-32 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
              <p className="text-sm text-muted">
                &copy; {new Date().getFullYear()} RMD Portfolio. All rights reserved.
              </p>
              <p className="text-sm text-muted">
                Built with Next.js, Framer Motion and GSAP
              </p>
            </div>
          </ScrollReveal>
        </div>
      </motion.div>
    </section>
  );
}

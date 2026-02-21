"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Scroll-driven transforms — GPU-accelerated (only transform + opacity)
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section
      ref={containerRef}
      className="relative flex h-[200vh] items-start justify-center"
      aria-label="Hero"
    >
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-background" />

        {/* Decorative parallax background elements */}
        {!prefersReducedMotion && (
          <>
            <motion.div
              className="gpu-accelerated pointer-events-none absolute left-1/4 top-1/3 h-96 w-96 rounded-full bg-accent/3 blur-3xl"
              style={{ y }}
              aria-hidden="true"
            />
            <motion.div
              className="gpu-accelerated pointer-events-none absolute right-1/4 bottom-1/3 h-72 w-72 rounded-full bg-accent/4 blur-2xl"
              style={{ y: titleY }}
              aria-hidden="true"
            />
          </>
        )}

        <motion.div
          style={
            prefersReducedMotion
              ? {}
              : { scale, opacity, y }
          }
          className="gpu-accelerated relative z-10 mx-auto max-w-7xl px-6 text-center md:px-12"
        >
          {/* Eyebrow */}
          <motion.p
            className="mb-6 font-mono text-sm tracking-widest text-muted uppercase"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Web &amp; Software Developer &mdash; UI/UX Designer
          </motion.p>

          {/* Main heading */}
          <motion.h1
            style={prefersReducedMotion ? {} : { y: titleY }}
            className="gpu-accelerated text-5xl font-bold leading-[1.05] tracking-tighter text-foreground sm:text-7xl md:text-8xl lg:text-9xl"
          >
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Ruel Miguel Diaz
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="mx-auto mt-8 max-w-lg text-base leading-relaxed text-muted md:text-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            I design, develop, and maintain software applications &mdash;
            with hands-on experience in front-end, back-end, database management,
            and UI/UX design.
          </motion.p>

          {/* Resume buttons */}
          <motion.div
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <a
              href="/assets/files/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-bold text-background transition-transform duration-300 hover:scale-105"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
              View Resume
            </a>
            <a
              href="/assets/files/Resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-medium text-foreground transition-all duration-300 hover:border-accent/40 hover:bg-accent/5"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Download Resume
            </a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="mt-12 flex flex-col items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            aria-hidden="true"
          >
            <span className="text-xs tracking-widest text-muted uppercase">
              Scroll
            </span>
            <motion.div
              className="h-12 w-px bg-linear-to-b from-muted to-transparent"
              animate={{ scaleY: [0, 1, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{ transformOrigin: "top" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

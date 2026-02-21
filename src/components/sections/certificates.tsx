"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollReveal from "@/components/scroll-reveal";
import ParallaxWrapper from "@/components/parallax-wrapper";
import Lightbox from "@/components/lightbox";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { certificates } from "@/lib/certificates";

export default function Certificates() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const decorY1 = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const decorX1 = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  const allImages = certificates.map((c) => c.image);

  const openCert = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <section ref={sectionRef} id="certificates" className="relative overflow-hidden py-32" aria-label="Certificates">
        {/* Decorative parallax elements */}
        {!prefersReducedMotion && (
          <>
            <motion.div
              className="gpu-accelerated pointer-events-none absolute -right-40 top-1/3 h-72 w-72 rounded-full bg-accent/3 blur-3xl"
              style={{ y: decorY1 }}
              aria-hidden="true"
            />
            <motion.div
              className="gpu-accelerated pointer-events-none absolute -left-20 bottom-1/4 h-56 w-56 rounded-full bg-accent/4 blur-2xl"
              style={{ y: decorY1, x: decorX1 }}
              aria-hidden="true"
            />
          </>
        )}

        <div className="relative mx-auto max-w-7xl px-6 md:px-12">
          <ParallaxWrapper speed={0.1}>
            <ScrollReveal>
              <p className="font-mono text-xs tracking-widest text-muted uppercase">
                Achievements
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="mt-4 text-4xl font-bold tracking-tighter md:text-6xl">
                Certificates &amp;
                <br />
                <span className="text-accent">Credentials</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-muted">
                A collection of professional certifications and academic
                credentials earned throughout my journey.
              </p>
            </ScrollReveal>
          </ParallaxWrapper>

          {/* Certificate grid */}
          <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {certificates.map((cert, index) => (
              <ScrollReveal
                key={cert.title}
                delay={0.05 * index}
                direction="up"
                distance={30}
              >
                <button
                  onClick={() => openCert(index)}
                  className="group relative w-full overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
                  aria-label={`View certificate: ${cert.title}`}
                >
                  <div className="relative aspect-4/3 w-full overflow-hidden">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/40">
                      <svg
                        className="h-8 w-8 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-3">
                    <Image
                      src={cert.logo}
                      alt={cert.issuer}
                      width={20}
                      height={20}
                      className="shrink-0 rounded-sm object-contain"
                    />
                    <p className="text-xs font-medium leading-tight text-foreground line-clamp-2">
                      {cert.title}
                    </p>
                  </div>
                </button>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Lightbox
        images={allImages}
        initialIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        title={certificates.map((c) => c.title)}
      />
    </>
  );
}

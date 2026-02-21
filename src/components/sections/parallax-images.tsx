"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import ScrollReveal from "@/components/scroll-reveal";

interface ParallaxLayer {
  src: string;
  alt: string;
  speed: number; // multiplier: 0 = static, 1 = full scroll speed
  className: string;
}

const layers: ParallaxLayer[] = [
  {
    src: "/assets/images/cover.png",
    alt: "Portfolio cover — background layer",
    speed: 0.2,
    className: "absolute inset-0 z-0",
  },
];

function ParallaxImage({
  layer,
  scrollYProgress,
  prefersReducedMotion,
}: {
  layer: ParallaxLayer;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  prefersReducedMotion: boolean;
}) {
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -200 * layer.speed]
  );

  return (
    <motion.div
      className={`${layer.className} gpu-accelerated`}
      style={prefersReducedMotion ? {} : { y }}
    >
      <Image
        src={layer.src}
        alt={layer.alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </motion.div>
  );
}

export default function ParallaxImages() {
  const containerRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section
      ref={containerRef}
      className="relative py-32"
      aria-label="Visual showcase"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <ScrollReveal className="mb-16">
          <p className="font-mono text-xs tracking-widest text-muted uppercase">
            Depth & Dimension
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tighter md:text-6xl">
            Layers of
            <br />
            <span className="text-accent">Creativity</span>
          </h2>
        </ScrollReveal>

        {/* Parallax container */}
        <div className="relative h-[80vh] w-full overflow-hidden rounded-3xl bg-card">
          {layers.map((layer, index) => (
            <ParallaxImage
              key={index}
              layer={layer}
              scrollYProgress={scrollYProgress}
              prefersReducedMotion={prefersReducedMotion}
            />
          ))}

          {/* Overlay text */}
          <div className="absolute inset-0 z-30 flex items-center justify-center">
            <ScrollReveal>
              <p className="text-center text-3xl font-bold tracking-tight text-white drop-shadow-2xl md:text-5xl">
                Where Code
                <br />
                Meets <span className="text-accent">Art</span>
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

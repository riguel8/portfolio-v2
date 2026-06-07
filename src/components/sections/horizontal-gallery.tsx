"use client";

import { useRef, useEffect, useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects, platformLabels, type Platform } from "@/lib/projects";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { Icon } from "@iconify/react";
import Lightbox from "@/components/lightbox";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const platforms: Platform[] = ["all", "web", "desktop", "design", "graphic"];

// Animation variants for smooth content transitions
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.04,
      staggerDirection: -1
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.4, 
      ease: "easeOut" as const
    }
  },
  exit: { 
    opacity: 0, 
    y: -10,
    scale: 0.98,
    transition: { 
      duration: 0.2, 
      ease: "easeInOut" as const
    }
  }
};

export default function HorizontalGallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const [activePlatform, setActivePlatform] = useState<Platform>("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [lightboxTitle, setLightboxTitle] = useState("");
  const [lightboxLink, setLightboxLink] = useState("");

  const filteredProjects = useMemo(
    () =>
      activePlatform === "all"
        ? projects
        : projects.filter((p) => p.platform === activePlatform),
    [activePlatform]
  );

  const openPreview = (images: string[], title: string, link: string) => {
    setLightboxImages(images);
    setLightboxTitle(title);
    setLightboxLink(link);
    setLightboxOpen(true);
  };

  // GSAP horizontal scroll - only for desktop (md+)
  useEffect(() => {
    // Only run on client
    if (typeof window === "undefined") return;
    if (prefersReducedMotion) return;
    
    // Check if we're on desktop
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    if (!mediaQuery.matches) return;

    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    // Small delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      // Kill existing triggers
      ScrollTrigger.getAll()
        .filter((t) => t.vars.trigger === section)
        .forEach((t) => t.kill());

      const scrollWidth = track.scrollWidth - window.innerWidth;

      gsap.to(track, {
        x: -scrollWidth,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 1,
          end: () => `+=${scrollWidth}`,
          invalidateOnRefresh: true,
        },
      });
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      ScrollTrigger.getAll()
        .filter((t) => t.vars.trigger === section)
        .forEach((t) => t.kill());
    };
  }, [prefersReducedMotion, filteredProjects]);

  // Reset horizontal scroll to first card when Work nav link is clicked
  useEffect(() => {
    const handleReset = () => {
      const section = sectionRef.current;
      if (!section) return;

      const triggers = ScrollTrigger.getAll().filter((t) => t.vars.trigger === section);
      triggers.forEach((t) => {
        const startPos = typeof t.start === "number" ? t.start : 0;
        const lenis = (window as unknown as { lenis?: { scrollTo: (target: number, options?: Record<string, unknown>) => void } }).lenis;
        if (lenis) {
          lenis.scrollTo(startPos, { offset: -80 });
        } else {
          window.scrollTo({ top: startPos, behavior: "smooth" });
        }
      });
    };

    window.addEventListener("reset-work-section", handleReset);
    return () => window.removeEventListener("reset-work-section", handleReset);
  }, []);

  return (
    <>
      {/* Mobile Layout - vertical grid */}
      <section data-section="work" className="py-20 md:hidden" aria-label="Selected Work">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="mb-4 font-mono text-xs tracking-widest text-muted uppercase">
            Selected Work
          </p>
          <h2 className="mb-4 text-3xl sm:text-4xl font-bold tracking-tighter">
            Projects <span className="text-accent">&amp; Work</span>
          </h2>
          <p className="mb-8 max-w-lg text-sm sm:text-base leading-relaxed text-muted">
            A curated collection of projects spanning web development,
            software engineering, and UI/UX design.
          </p>
          {/* Platform filter with animated indicator */}
          <LayoutGroup>
            <div className="mb-8 flex flex-wrap gap-2">
              {platforms.map((p) => (
                <motion.button
                  key={p}
                  onClick={() => setActivePlatform(p)}
                  className={`relative rounded-full border px-3 py-2 text-xs font-medium transition-colors duration-200 ${
                    activePlatform === p
                      ? "border-accent text-background"
                      : "border-border text-muted hover:border-accent/40 hover:text-foreground active:scale-95"
                  }`}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.1 }}
                >
                  {activePlatform === p && (
                    <motion.span
                      layoutId="mobile-tab-indicator"
                      className="absolute inset-0 rounded-full bg-accent"
                      transition={{ type: "spring", stiffness: 500, damping: 35 }}
                    />
                  )}
                  <span className="relative z-10">{platformLabels[p]}</span>
                </motion.button>
              ))}
            </div>
          </LayoutGroup>

          {/* Animated project grid */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={activePlatform}
              variants={prefersReducedMotion ? undefined : containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="grid gap-6 grid-cols-1 sm:grid-cols-2"
            >
              {filteredProjects.map((project, index) => (
                <motion.article
                  key={project.id}
                  variants={prefersReducedMotion ? undefined : cardVariants}
                  className="group cursor-pointer rounded-xl border border-border bg-card overflow-hidden transition-shadow duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 active:scale-[0.98]"
                  onClick={() => openPreview(project.images, project.title, project.link)}
                  role="button"
                  aria-label={`View ${project.title} project`}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="relative aspect-video overflow-hidden bg-card">
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 50vw"
                      priority={index < 2}
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {project.category.map((cat, idx) => (
                        <span key={idx} className="rounded-full border border-border px-2 py-0.5 text-[10px] text-muted">
                          {cat}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-base font-semibold text-foreground mb-1">{project.title}</h3>
                    <p className="text-xs text-muted line-clamp-2">{project.description}</p>
                    <div className="flex items-center gap-1.5 mt-3">
                      {project.tech.slice(0, 4).map((tech) => (
                        <motion.div
                          key={tech.icon}
                          className="flex h-6 w-6 items-center justify-center rounded-md border border-border bg-background"
                          title={tech.icon.split(':')[1] || tech.icon}
                          whileHover={{ scale: 1.1, y: -2 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Icon icon={tech.icon} className="text-sm" aria-hidden="true" />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
        <Lightbox
          images={lightboxImages}
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          title={lightboxTitle}
          Link={lightboxLink}
        />
      </section>

      {/* Desktop Layout - GSAP horizontal scroll */}
      <section
        ref={sectionRef}
        data-section="work"
        className="section-noise relative hidden md:block"
        aria-label="Selected Work"
      >
        <div
          ref={trackRef}
          className="flex h-screen items-center gap-8 pl-[10vw] pr-[10vw]"
          style={{ width: `${filteredProjects.length * 42 + 55}vw` }}
        >
          {/* Intro card */}
          <div className="flex h-full w-[35vw] shrink-0 flex-col justify-center pr-12">
            <p className="mb-4 font-mono text-xs tracking-widest text-muted uppercase">
              Selected Work
            </p>
            <h2 className="text-5xl font-bold leading-tight tracking-tighter lg:text-7xl">
              Projects
              <br />
              <span className="text-accent">&amp; Work</span>
            </h2>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-muted">
              A curated collection of projects spanning web development,
              software engineering, and UI/UX design. Click any card to preview.
            </p>

            {/* Platform filter */}
            <div className="mt-8 flex flex-wrap gap-2">
              {platforms.map((p) => (
                <button
                  key={p}
                  onClick={() => setActivePlatform(p)}
                  className={`rounded-full border px-4 py-2 text-xs font-medium transition-all duration-300 ${
                    activePlatform === p
                      ? "border-accent bg-accent text-background"
                      : "border-border text-muted hover:border-accent/40 hover:text-foreground"
                  }`}
                >
                  {platformLabels[p]}
                </button>
              ))}
            </div>
            <p className="mt-6 text-xs text-muted">Note: Some projects are private or offline; only image previews are available.</p>
          </div>

          {/* Project cards */}
          {filteredProjects.map((project, index) => (
            <article
              key={project.id}
              className="group flex h-[60vh] w-[38vw] shrink-0 cursor-pointer flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
              onClick={() => openPreview(project.images, project.title, project.link)}
              role="button"
              aria-label={`View ${project.title} project`}
            >
              {/* Top — Info */}
              <div className="flex flex-col gap-3 p-6 pb-4">
                <div className="flex items-start justify-between">
                  <span className="font-mono text-sm text-muted" aria-hidden="true">
                    {(index + 1).toString().padStart(2, '0')}
                  </span>
                  <div className="flex gap-2">
                    {project.category.map((cat, idx) => (
                      <span key={idx} className="rounded-full border border-border px-3 py-1 text-xs text-muted">
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
                <h3 className="text-xl font-bold tracking-tight text-foreground md:text-2xl">
                  {project.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted line-clamp-2">
                  {project.description}
                </p>
                <div className="flex items-center gap-2">
                  {project.tech.map((tech) => (
                    <div
                      key={tech.icon}
                      className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-card"
                      title={tech.icon.split(':')[1] || tech.icon}
                    >
                      <Icon icon={tech.icon} className="text-lg" aria-hidden="true" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom — Thumbnail */}
              <div className="relative flex-1 overflow-hidden">
                <div className="gpu-accelerated h-full w-full">
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    className="object-contain object-top transition-transform duration-700 group-hover:scale-105"
                    sizes="40vw"
                    priority={index < 2}
                  />
                </div>
              </div>
            </article>
          ))}

          {/* End card */}
          <div className="flex h-full w-[15vw] shrink-0 flex-col items-center justify-center">
            <p className="font-mono text-sm tracking-widest text-muted uppercase">
              More coming soon
            </p>
          </div>
        </div>
      </section>

      <Lightbox
        images={lightboxImages}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        title={lightboxTitle}
        Link={lightboxLink}
      />
    </>
  );
}

"use client";

import { useRef, useEffect, useState, useMemo } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects, platformLabels, type Platform } from "@/lib/projects";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { Icon } from "@iconify/react";
import Lightbox from "@/components/lightbox";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const platforms: Platform[] = ["all", "web", "desktop", "design"];

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

  useEffect(() => {
    if (prefersReducedMotion) return;

    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    // Kill existing triggers for this section before creating new ones
    ScrollTrigger.getAll()
      .filter((t) => t.vars.trigger === section)
      .forEach((t) => t.kill());

    const scrollWidth = track.scrollWidth - window.innerWidth;

    const ctx = gsap.context(() => {
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
    }, section);

    return () => ctx.revert();
  }, [prefersReducedMotion, filteredProjects]);

  // Fallback for reduced motion: vertical stack
  if (prefersReducedMotion) {
    return (
      <section id="work" className="py-32" aria-label="Selected Work">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <h2 className="mb-8 text-4xl font-bold tracking-tight">
            Selected Work
          </h2>
          {/* Platform filter */}
          <div className="mb-12 flex flex-wrap gap-2">
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
          <div className="grid gap-12 md:grid-cols-2">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="group cursor-pointer"
                onClick={() => openPreview(project.images, project.title, project.link)}
              >
                <div className="relative aspect-4/3 overflow-hidden rounded-xl bg-card">
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="mt-1 text-sm text-muted">{project.category}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
        <Lightbox
          images={lightboxImages}
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          title={lightboxTitle}
          Link={lightboxLink}
        />
      </section>
    );
  }

  return (
    <>
      <section
        ref={sectionRef}
        id="work"
        className="section-noise relative"
        aria-label="Selected Work"
      >
        {/* Horizontal track */}
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
            <h2 className="text-5xl font-bold leading-tight tracking-tighter md:text-7xl">
              Projects
              <br />
              <span className="text-accent">&amp; Work</span>
            </h2>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-muted">
              A curated collection of projects spanning web development,
              software engineering, and UI/UX design. Click any card to preview.
            </p>

            {/* Platform filter — inside intro card */}
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

            {/* <div className="mt-6 flex items-center gap-3 text-xs text-muted">
              <span className="inline-flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-[#61dafb]" />
                Web
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-[#00d4ff]" />
                Desktop
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-[#a259ff]" />
                Design
              </span>
            </div> */}
            <br />
            <p className="text-xs text-muted">Note: Some projects are private or offline; only image previews are available.</p>
          </div>

          {/* Project cards */}
          {filteredProjects.map((project, index) => (
            <article
              key={project.id}
              data-project-card
              className="group flex h-[60vh] w-[38vw] shrink-0 cursor-pointer flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
              role="article"
              aria-label={`${project.title} — ${project.category}`}
              onClick={() => openPreview(project.images, project.title, project.link)}
            >
              {/* Top — Info */}
              <div className="flex flex-col gap-3 p-6 pb-4">
                <div className="flex items-start justify-between">
                  <span
                    className="font-mono text-sm text-muted"
                    aria-hidden="true"
                  >
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
                      <Icon
                        icon={tech.icon}
                        className="text-lg"
                        aria-hidden="true"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom — Thumbnail */}
              <div className="relative flex-1 overflow-hidden">
                <div data-project-image className="gpu-accelerated h-full w-full">
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


"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import { Project } from "@/lib/projects";

interface ProjectDetailsProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  projects: Project[];
  onNavigateToProject: (project: Project) => void;
}

const platformIcon: Record<string, string> = {
  web: "lucide:globe",
  desktop: "lucide:monitor",
  design: "lucide:pen-tool",
};

export default function ProjectDetails({
  project,
  isOpen,
  onClose,
  projects,
  onNavigateToProject,
}: ProjectDetailsProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Reset image index when project changes
  useEffect(() => {
    if (isOpen && project) {
      setCurrentImageIndex(0);
    }
  }, [isOpen, project]);

  const goToPrevProject = useCallback(() => {
    if (!project) return;
    const currentIndex = projects.findIndex((p) => p.id === project.id);
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : projects.length - 1;
    onNavigateToProject(projects[prevIndex]);
  }, [project, projects, onNavigateToProject]);

  const goToNextProject = useCallback(() => {
    if (!project) return;
    const currentIndex = projects.findIndex((p) => p.id === project.id);
    const nextIndex = currentIndex < projects.length - 1 ? currentIndex + 1 : 0;
    onNavigateToProject(projects[nextIndex]);
  }, [project, projects, onNavigateToProject]);

  // Handle scroll locking
  useEffect(() => {
    if (!isOpen) return;

    // Lock body scroll
    document.body.style.overflow = "hidden";

    // Stop Lenis smooth scroll if it exists
    const lenis = (window as unknown as { lenis?: { stop: () => void; start: () => void } }).lenis;
    if (lenis) {
      lenis.stop();
    }

    // Handle keyboard navigation
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && project?.images && project.images.length > 1) {
        setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
      }
      if (e.key === "ArrowLeft" && project?.images && project.images.length > 1) {
        setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
      }
      // Project navigation with Ctrl/Shift + arrows
      if (e.key === "ArrowRight" && (e.ctrlKey || e.shiftKey)) {
        e.preventDefault();
        goToNextProject();
      }
      if (e.key === "ArrowLeft" && (e.ctrlKey || e.shiftKey)) {
        e.preventDefault();
        goToPrevProject();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      if (lenis) {
        lenis.start();
      }
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, project?.images, goToNextProject, goToPrevProject]);

  const goNext = useCallback(() => {
    if (!project?.images) return;
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  }, [project?.images]);

  const goPrev = useCallback(() => {
    if (!project?.images) return;
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  }, [project?.images]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-100 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/95 backdrop-blur-md"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />

          {/* Modal Content */}
          <motion.div
            className="relative z-10 flex h-full w-full flex-col overflow-hidden"
            initial={{ scale: 0.98, opacity: 0, y: 8 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.98, opacity: 0, y: 8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* Header — single, unambiguous close action */}
            <div className="flex items-center justify-between gap-4 border-b border-border bg-card/50 px-5 py-4 backdrop-blur-sm sm:px-8">
              <div className="flex items-center gap-4">
                <button
                  onClick={onClose}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-card text-muted transition-all hover:border-accent hover:text-accent hover:shadow-lg hover:shadow-accent/10"
                  aria-label="Close project details"
                >
                  <Icon icon="lucide:arrow-left" className="h-5 w-5" />
                </button>

                <div className="min-w-0">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
                    {project.category[0]}
                  </p>
                  <h2 className="truncate text-lg text-wrap font-semibold text-foreground sm:text-xl">
                    {project.title}
                  </h2>
                </div>
              </div>

              {/* Project Navigation */}
              <div className="flex items-center gap-2">
                <button
                  onClick={goToPrevProject}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-muted transition-all hover:border-accent hover:text-accent hover:shadow-lg hover:shadow-accent/10"
                  aria-label="Previous project"
                  title="Previous project (Ctrl + ←)"
                >
                  <Icon icon="lucide:chevron-left" className="h-5 w-5" />
                </button>
                <button
                  onClick={goToNextProject}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-muted transition-all hover:border-accent hover:text-accent hover:shadow-lg hover:shadow-accent/10"
                  aria-label="Next project"
                  title="Next project (Ctrl + →)"
                >
                  <Icon icon="lucide:chevron-right" className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden" data-lenis-prevent>
              <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8 sm:py-12">
                {/* Image Gallery */}
                {project.images && project.images.length > 0 && (
                  <div className="mb-10 sm:mb-12">
                    <div className="relative aspect-video overflow-hidden rounded-2xl border border-border bg-card">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentImageIndex}
                          className="relative h-full w-full"
                          initial={{ opacity: 0, scale: 0.98 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.98 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Image
                            src={project.images[currentImageIndex]}
                            alt={`${project.title} — screenshot ${currentImageIndex + 1}`}
                            fill
                            className="object-contain"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 80vw"
                            priority
                          />
                        </motion.div>
                      </AnimatePresence>

                      {/* Image counter */}
                      {project.images.length > 1 && (
                        <div className="absolute right-4 top-4 rounded-full border border-white/10 bg-black/50 px-2.5 py-1 text-xs font-medium tabular-nums text-white/80 backdrop-blur-sm">
                          {currentImageIndex + 1} / {project.images.length}
                        </div>
                      )}

                      {/* Navigation Arrows */}
                      {project.images.length > 1 && (
                        <>
                          <button
                            onClick={goPrev}
                            className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-black/50 text-white backdrop-blur-sm transition-all hover:border-accent hover:bg-accent hover:text-background"
                            aria-label="Previous image"
                          >
                            <Icon icon="lucide:chevron-left" className="h-6 w-6" />
                          </button>
                          <button
                            onClick={goNext}
                            className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-black/50 text-white backdrop-blur-sm transition-all hover:border-accent hover:bg-accent hover:text-background"
                            aria-label="Next image"
                          >
                            <Icon icon="lucide:chevron-right" className="h-6 w-6" />
                          </button>
                        </>
                      )}
                    </div>

                    {/* Thumbnail Strip */}
                    {project.images.length > 1 && (
                      <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
                        {project.images.map((img, idx) => (
                          <button
                            key={idx}
                            onClick={() => setCurrentImageIndex(idx)}
                            className={`relative h-14 w-20 shrink-0 overflow-hidden rounded-lg border-2 transition-all ${
                              idx === currentImageIndex
                                ? "border-accent opacity-100"
                                : "border-transparent opacity-40 hover:opacity-75"
                            }`}
                            aria-label={`View image ${idx + 1}`}
                            aria-current={idx === currentImageIndex}
                          >
                            <Image src={img} alt="" fill className="object-cover" sizes="96px" />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Project Details */}
                <div className="grid gap-10 lg:grid-cols-3 lg:gap-12">
                  {/* Main Content */}
                  <div className="space-y-10 lg:col-span-2">
                    {/* About — primary content, no card chrome so it reads as the lead, not a peer of the metadata boxes */}
                    <div className="border-l-2 border-accent/30 pl-5 sm:pl-6">
                      <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                        About
                      </p>
                      <p className="text-base leading-relaxed text-foreground/90 sm:text-lg">
                        {project.description}
                      </p>
                    </div>

                    {/* Background — optional context/backstory */}
                    {project.background && (
                      <div className="rounded-xl border border-border bg-card p-6">
                        <h3 className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                          Background
                        </h3>
                        <p className="text-sm leading-relaxed text-foreground/80">
                          {project.background}
                        </p>
                      </div>
                    )}

                    {/* Highlights — standout features */}
                    {project.highlights && project.highlights.length > 0 && (
                      <div className="rounded-xl border border-border bg-card p-6">
                        <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                          Highlights
                        </h3>
                        <ul className="space-y-2">
                          {project.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-foreground/80">
                              <Icon icon="lucide:check" className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Sidebar */}
                  <div className="space-y-6">
                    {/* Tech Stack */}
                    <div>
                      <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                        Tech Stack
                      </h3>
                      <div className="flex flex-wrap gap-3">
                        {project.tech.map((tech, idx) => (
                          <div
                            key={idx}
                            className="group relative flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-accent/5"
                            title={tech.icon.split(":")[1]?.replace(/-/g, " ") || tech.icon}
                          >
                            <Icon
                              icon={tech.icon}
                              className="text-2xl text-muted transition-colors group-hover:text-accent"
                              aria-hidden="true"
                            />
                            {/* <span className="pointer-events-none uppercase absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-foreground px-2 py-1 text-[10px] font-medium text-background opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                              {tech.icon.split(":")[1]?.replace(/-/g, " ") || tech.icon}
                            </span> */}
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* Quick Links — the one action in the sidebar, so it stays visually first and heaviest */}
                    <div className="rounded-xl border border-border bg-card p-6">
                      <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                        Quick Links
                      </h3>
                      {project.link ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex w-full items-center justify-center gap-2 rounded-xl border border-accent bg-accent px-4 py-3 font-medium text-background transition-all hover:shadow-lg hover:shadow-accent/20 active:scale-[0.98]"
                        >
                          <Icon icon="lucide:external-link" className="h-5 w-5" />
                          View Live Project
                        </a>
                      ) : (
                        <div className="flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-background px-4 py-3 text-muted">
                          <Icon icon="lucide:lock" className="h-5 w-5" />
                          <span className="text-sm">Private Project</span>
                        </div>
                      )}
                    </div>

                    {/* Details — Platform + Categories + Status + Role folded into one compact card */}
                    <div className="rounded-xl border border-border bg-card p-6">
                      <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                        Details
                      </h3>
                      <dl className="space-y-4">
                        <div>
                          <dt className="mb-1.5 text-xs text-muted">Category</dt>
                          <dd className="flex flex-wrap gap-1.5">
                            {project.category.map((cat, idx) => (
                              <span
                                key={idx}
                                className="rounded-full border border-border bg-background px-2.5 py-1 text-xs text-muted"
                              >
                                {cat}
                              </span>
                            ))}
                          </dd>
                        </div>
                        <div>
                          <dt className="mb-1.5 text-xs text-muted">Platform</dt>
                          <dd className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-sm font-medium capitalize text-accent">
                            <Icon
                              icon={platformIcon[project.platform] ?? "lucide:image"}
                              className="h-3.5 w-3.5"
                            />
                            {project.platform}
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
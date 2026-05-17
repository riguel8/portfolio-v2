"use client";

import { type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  duration?: number;
  scale?: number;
  once?: boolean;
  blur?: boolean;
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = 40,
  duration = 0.6,
  scale = 1,
  once = true,
  blur = false,
}: ScrollRevealProps) {
  const [ref, isIntersecting] = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.15,
    rootMargin: "-30px",
    triggerOnce: once,
  });

  const prefersReducedMotion = useReducedMotion();

  const directionMap = {
    up: { x: 0, y: distance },
    down: { x: 0, y: -distance },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
    none: { x: 0, y: 0 },
  };

  const offset = directionMap[direction];

  if (prefersReducedMotion) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={`${className} will-change-transform`}
      initial={{ 
        opacity: 0, 
        x: offset.x, 
        y: offset.y,
        scale: scale < 1 ? scale : 1,
        filter: blur ? "blur(8px)" : "blur(0px)"
      }}
      animate={
        isIntersecting
          ? { 
              opacity: 1, 
              x: 0, 
              y: 0,
              scale: 1,
              filter: "blur(0px)"
            }
          : { 
              opacity: 0, 
              x: offset.x, 
              y: offset.y,
              scale: scale < 1 ? scale : 1,
              filter: blur ? "blur(8px)" : "blur(0px)"
            }
      }
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

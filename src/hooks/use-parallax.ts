"use client";

import { useRef } from "react";
import { useScroll, useTransform, type MotionValue } from "framer-motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

type ParallaxAxis = "vertical" | "horizontal" | "both";

interface UseParallaxOptions {
  /** Scroll speed multiplier. Positive = same direction, negative = opposite. Default: 0.3 */
  speed?: number;
  /** Which axis to apply the parallax effect. Default: "vertical" */
  axis?: ParallaxAxis;
  /** Additional opacity fade. Default: false */
  fade?: boolean;
  /** Scale range [from, to]. Default: undefined (no scale) */
  scaleRange?: [number, number];
}

interface ParallaxValues {
  ref: React.RefObject<HTMLDivElement | null>;
  y: MotionValue<number>;
  x: MotionValue<number>;
  opacity: MotionValue<number>;
  scale: MotionValue<number>;
  style: Record<string, MotionValue<number>> | Record<string, never>;
  prefersReducedMotion: boolean;
}

export function useParallax(options: UseParallaxOptions = {}): ParallaxValues {
  const {
    speed = 0.3,
    axis = "vertical",
    fade = false,
    scaleRange,
  } = options;

  const ref = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const range = 200 * speed;

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    axis === "horizontal" ? [0, 0] : [range, -range]
  );

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    axis === "vertical" ? [0, 0] : [range, -range]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    fade ? [0, 1, 1, 0] : [1, 1, 1, 1]
  );

  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    scaleRange ? [scaleRange[0], scaleRange[1], scaleRange[0]] : [1, 1, 1]
  );

  const style = prefersReducedMotion
    ? ({} as Record<string, never>)
    : {
        y,
        x,
        opacity,
        scale,
      };

  return { ref, y, x, opacity, scale, style, prefersReducedMotion };
}

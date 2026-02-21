"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { useParallax } from "@/hooks/use-parallax";

interface ParallaxWrapperProps {
  children: ReactNode;
  className?: string;
  /** Scroll speed multiplier. Default: 0.3 */
  speed?: number;
  /** Parallax axis. Default: "vertical" */
  axis?: "vertical" | "horizontal" | "both";
  /** Fade in/out as element enters/exits viewport. Default: false */
  fade?: boolean;
  /** Scale range [from, to]. Default: undefined */
  scaleRange?: [number, number];
  /** HTML tag to render. Default: "div" */
  as?: "div" | "section" | "article" | "span";
}

export default function ParallaxWrapper({
  children,
  className = "",
  speed = 0.3,
  axis = "vertical",
  fade = false,
  scaleRange,
}: ParallaxWrapperProps) {
  const { ref, style } = useParallax({ speed, axis, fade, scaleRange });

  return (
    <motion.div
      ref={ref}
      className={`gpu-accelerated ${className}`}
      style={style}
    >
      {children}
    </motion.div>
  );
}

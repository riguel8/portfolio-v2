"use client";

import { motion } from "framer-motion";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
}

export default function SplitText({
  text,
  className = "",
  delay = 0,
  staggerDelay = 0.04,
}: SplitTextProps) {
  const chars = text.split("");

  return (
    <span className={`inline-block ${className}`}>
      {chars.map((char, i) => (
        <motion.span
          key={`${char}-${i}`}
          className="inline-block"
          initial={{ opacity: 0, y: 40, rotateX: -90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{
            duration: 0.5,
            delay: delay + i * staggerDelay,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

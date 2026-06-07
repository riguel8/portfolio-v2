"use client";

import { useState, useEffect, useRef, useCallback } from "react";

interface DecryptTextProps {
  words: string[];
  className?: string;
  interval?: number;
  scrambleSpeed?: number;
}

const glyphs = "!@#$%^&*()_+-=[]{}|;:,.<>?/~`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function randomGlyph() {
  return glyphs[Math.floor(Math.random() * glyphs.length)];
}

export default function DecryptText({
  words,
  className = "",
  interval = 3000,
  scrambleSpeed = 40,
}: DecryptTextProps) {
  const [display, setDisplay] = useState(words[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const scramble = useCallback(
    (targetWord: string) => {
      let iteration = 0;
      const maxIterations = targetWord.length * 3;
      const intervalId = setInterval(() => {
        setDisplay(
          targetWord
            .split("")
            .map((char, i) => {
              if (char === " ") return " ";
              if (i < iteration / 3) return targetWord[i];
              return randomGlyph();
            })
            .join("")
        );
        iteration++;
        if (iteration > maxIterations) {
          clearInterval(intervalId);
          setDisplay(targetWord);
        }
      }, scrambleSpeed);

      return intervalId;
    },
    [scrambleSpeed]
  );

  useEffect(() => {
    let scrambleInterval: NodeJS.Timeout;

    const startCycle = () => {
      scrambleInterval = scramble(words[currentIndex]);
    };

    // Delay before starting to allow initial render
    const initialDelay = setTimeout(startCycle, 500);

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % words.length;
        scramble(words[next]);
        return next;
      });
    }, interval);

    return () => {
      clearTimeout(initialDelay);
      if (intervalRef.current) clearInterval(intervalRef.current);
      clearInterval(scrambleInterval);
    };
  }, [words, interval, scramble]);

  return (
    <span className={`inline-block font-mono ${className}`} aria-label={words[currentIndex]}>
      {display}
    </span>
  );
}

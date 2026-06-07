"use client";

import { useState, useEffect } from "react";

interface UseTypewriterOptions {
  text: string;
  speed?: number;
  delay?: number;
}

export default function useTypewriter({ text, speed = 40, delay = 1.2 }: UseTypewriterOptions) {
  const [displayed, setDisplayed] = useState("");
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    setDisplayed("");
    setIsDone(false);

    const timeout = setTimeout(() => {
      let index = 0;
      const interval = setInterval(() => {
        if (index >= text.length) {
          clearInterval(interval);
          setIsDone(true);
          return;
        }
        setDisplayed(text.slice(0, index + 1));
        index++;
      }, speed);

      return () => clearInterval(interval);
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [text, speed, delay]);

  return { displayed, isDone };
}

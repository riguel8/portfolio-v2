"use client";

import { useEffect } from "react";

export default function HashScrollHandler() {
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;

    // Small delay to ensure DOM and GSAP are ready
    const timeout = setTimeout(() => {
      const el = document.querySelector(`[data-section="${hash}"]`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      // Clean the hash from URL
      window.history.replaceState(null, "", window.location.pathname);
    }, 300);

    return () => clearTimeout(timeout);
  }, []);

  return null;
}

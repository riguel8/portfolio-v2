"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className="fixed top-0 left-0 z-50 w-full mix-blend-difference"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-12"
        role="navigation"
        aria-label="Main navigation"
      >
        <a
          href="#"
          className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-white"
          aria-label="Home"
        >
          <Image
            src="/assets/images/2x2.png"
            alt="Ruel Miguel Diaz"
            width={32}
            height={32}
            className="rounded-full object-cover"
            priority
          />
          Riguel<span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm font-medium text-white/70 transition-colors duration-300 hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/assets/files/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-accent px-5 py-2 text-xs font-bold text-background transition-transform duration-300 hover:scale-105"
            >
              Resume
            </a>
          </li>
        </ul>

        <AnimatePresence>
          {isScrolled && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed bottom-8 left-1/2 z-50 -translate-x-1/2 md:hidden"
            >
              <div className="flex items-center gap-4 rounded-full border border-white/10 bg-black/80 px-6 py-3 backdrop-blur-xl">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-xs font-medium text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}

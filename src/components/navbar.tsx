"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Icon } from "@iconify/react";

const navLinks = [
  { label: "Work", section: "work" },
  { label: "About", section: "about" },
  { label: "Certificates", section: "certificates" },
  { label: "Contact", section: "contact" },
];

function scrollToSection(section: string) {
  const el = document.querySelector(`[data-section="${section}"]`);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

// Animation variants for smooth, professional transitions
const menuVariants = {
  hidden: { 
    opacity: 0,
    transition: { duration: 0.2, ease: "easeInOut" as const }
  },
  visible: { 
    opacity: 1,
    transition: { 
      duration: 0.3, 
      ease: "easeOut" as const,
      when: "beforeChildren" as const,
      staggerChildren: 0.06
    }
  },
  exit: { 
    opacity: 0,
    transition: { 
      duration: 0.25, 
      ease: "easeInOut" as const,
      when: "afterChildren" as const,
      staggerChildren: 0.03,
      staggerDirection: -1
    }
  }
};

const menuItemVariants = {
  hidden: { 
    opacity: 0, 
    y: 24,
    transition: { duration: 0.2, ease: "easeInOut" as const }
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const }
  },
  exit: { 
    opacity: 0, 
    y: -12,
    transition: { duration: 0.2, ease: "easeInOut" as const }
  }
};

const ctaVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as const, delay: 0.25 }
  },
  exit: { 
    opacity: 0, 
    y: 10, 
    scale: 0.98,
    transition: { duration: 0.2, ease: "easeInOut" as const }
  }
};

// Animated hamburger button component
function AnimatedMenuButton({ 
  isOpen, 
  onClick,
  scrolled 
}: { 
  isOpen: boolean; 
  onClick: () => void;
  scrolled: boolean;
}) {
  return (
    <motion.button
      onClick={onClick}
      className="flex md:hidden h-8 w-8 items-center justify-center rounded-full text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      style={{
        background: scrolled ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.08)",
        transition: "background 0.3s ease",
      }}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Top line - morphs to X */}
        <motion.line
          x1="4"
          x2="20"
          y1="6"
          y2="6"
          animate={{
            x1: isOpen ? 6 : 4,
            x2: isOpen ? 18 : 20,
            y1: isOpen ? 6 : 6,
            y2: isOpen ? 18 : 6,
          }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        />
        {/* Middle line - fades out */}
        <motion.line
          x1="4"
          x2="20"
          y1="12"
          y2="12"
          animate={{
            opacity: isOpen ? 0 : 1,
            x1: isOpen ? 12 : 4,
            x2: isOpen ? 12 : 20,
          }}
          transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
        />
        {/* Bottom line - morphs to X */}
        <motion.line
          x1="4"
          x2="20"
          y1="18"
          y2="18"
          animate={{
            x1: isOpen ? 6 : 4,
            x2: isOpen ? 18 : 20,
            y1: isOpen ? 18 : 18,
            y2: isOpen ? 6 : 18,
          }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        />
      </svg>
    </motion.button>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const ticking = useRef(false);
  const prefersReducedMotion = useReducedMotion();

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  // Close mobile menu on route change or escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMobileMenu();
    };
    
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEscape);
    } else {
      document.body.style.overflow = "";
    }
    
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [mobileMenuOpen, closeMobileMenu]);

  useEffect(() => {
    const onScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 110);
          ticking.current = false;
        });
        ticking.current = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 flex justify-center pointer-events-none"
      style={{
        zIndex: 100,
        padding: scrolled ? "12px 24px" : "12px 24px",
        transition: "padding 0.5s cubic-bezier(0.4,0,0.2,1)",
      }}
    >
      <nav
        className="pointer-events-auto relative flex items-center justify-between w-full"
        role="navigation"
        aria-label="Main navigation"
        style={{
          zIndex: 100,
          maxWidth:      scrolled ? "580px"                   : "1100px",
          height:        scrolled ? "56px"                    : "56px",
          padding:       scrolled ? "12px 12px"               : "12px 12px",
          borderRadius:  scrolled ? "9999px"                  : "0px",
          background:    scrolled ? "rgba(18,18,20,0.88)"     : "transparent",
          borderColor:   scrolled ? "rgba(255,255,255,0.08)"  : "transparent",
          borderWidth:   "0.5px",
          borderStyle:   "solid",
          boxShadow:     scrolled 
            ? "0 2px 32px rgba(0,0,0,0.45), 0 1px 0 rgba(255,255,255,0.04) inset"
            : "none",
          backdropFilter: scrolled ? "blur(2px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(2px)" : "none",
          transition: [
            "max-width 0.5s cubic-bezier(0.4,0,0.2,1)",
            "height 0.5s cubic-bezier(0.4,0,0.2,1)",
            "padding 0.5s cubic-bezier(0.4,0,0.2,1)",
            "border-radius 0.5s cubic-bezier(0.4,0,0.2,1)",
            "background 0.45s cubic-bezier(0.4,0,0.2,1)",
            "border-color 0.45s cubic-bezier(0.4,0,0.2,1)",
            "box-shadow 0.45s cubic-bezier(0.4,0,0.2,1)",
          ].join(", "),
        }}
      >
        {/* ── Logo ── */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2.5 shrink-0 no-underline cursor-pointer bg-transparent border-none"
        >
          <div
            style={{
            
              transition: "width 0.5s cubic-bezier(0.4,0,0.2,1), height 0.5s cubic-bezier(0.4,0,0.2,1), border-radius 0.5s cubic-bezier(0.4,0,0.2,1)",
              overflow: "hidden",
              flexShrink: 0,
            }}
          >
            <Image
              src="/assets/images/LogoKO.png"
              alt="Ruel Miguel Diaz"
              width={32}
              height={32}
              priority
              className="w-full h-full object-cover"
            />
          </div>

          <div
            style={{
              overflow: "hidden",
              maxWidth: scrolled ? "0px" : "140px",
              opacity:  scrolled ? 0     : 1,
              transition: "max-width 0.45s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* <Image
              src="/assets/images/2x2.png"
              alt="Avatar"
              width={24}
              height={24}
              priority
              className="rounded-full object-cover"
            /> */}
            <span
              className="whitespace-nowrap"
              style={{ fontSize: "13px", fontWeight: 500, color: "#fff", lineHeight: 1.2 }}
            >
              Riguel•
            </span>
            
          </div>
        </button>

        {/* ── Desktop Links ── */}
        <ul className="hidden md:flex items-center list-none gap-5">
          {navLinks.map((link) => (
            <li key={link.label}>
              <button
                onClick={() => scrollToSection(link.section)}
                className="text-sm font-medium text-white/70 transition-colors duration-300 hover:text-white focus-visible:text-white focus-visible:outline-none bg-transparent border-none cursor-pointer"
              >
                {link.label}
              </button>
            </li>
          ))}
          <li>
            {/* ── CTA ── */}
            <a
              href="/assets/files/Resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border-2 bg-white px-5 py-2 text-xs font-medium text-black transition-all duration-300 hover:bg-black hover:text-white hover:border-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Download Resume
              <Icon icon="solar:arrow-right-line-duotone" className="h-4 w-4" aria-hidden="true" />
            </a>
          </li>
        </ul>

        {/* ── Mobile Menu Button ── */}
        <AnimatedMenuButton 
          isOpen={mobileMenuOpen} 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          scrolled={scrolled}
        />
      </nav>

      {/* Portal-style mobile menu - rendered outside nav, BELOW navbar so hamburger button stays in place */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            variants={prefersReducedMotion ? undefined : menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 flex flex-col md:hidden pointer-events-auto will-change-transform"
            style={{ 
              background: "linear-gradient(180deg, #0a0a0a 0%, #0d0d0f 100%)",
            }}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            {/* Navigation Links - top padding accounts for fixed navbar */}
            <nav className="flex-1 flex flex-col justify-center px-8 pt-20">
              <motion.ul className="space-y-1">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.label}
                    variants={prefersReducedMotion ? undefined : menuItemVariants}
                    custom={index}
                  >
                    <motion.button
                      onClick={() => { scrollToSection(link.section); closeMobileMenu(); }}
                      className="group relative block text-[2.25rem] font-bold text-white py-3 transition-colors focus-visible:outline-none bg-transparent border-none cursor-pointer w-full text-left"
                      whileHover={{ x: 8 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <span className="relative z-10 transition-colors duration-200 group-hover:text-accent group-focus-visible:text-accent">
                        {link.label}
                      </span>
                      <motion.span
                        className="absolute left-0 top-1/2 -translate-y-1/2 h-1 w-0 rounded-full bg-accent"
                        initial={{ width: 0 }}
                        whileHover={{ width: 24 }}
                        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      />
                    </motion.button>
                  </motion.li>
                ))}
              </motion.ul>
            </nav>

            {/* Bottom CTA */}
            <motion.div
              variants={prefersReducedMotion ? undefined : ctaVariants}
              className="px-8 pb-10 space-y-4"
            >
              <motion.a
                href="/assets/files/myResume.pdf"
                download
                onClick={closeMobileMenu}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-semibold text-black shadow-lg shadow-white/10"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                Download Resume
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon icon="solar:arrow-right-line-duotone" className="h-4 w-4" aria-hidden="true" />
                </motion.span>
              </motion.a>
              <motion.p 
                className="text-center text-sm text-accent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Philippines
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
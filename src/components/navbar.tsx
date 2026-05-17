"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const ticking = useRef(false);

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
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none"
      style={{
        padding: scrolled ? "14px 24px" : "14px 24px",
        transition: "padding 0.5s cubic-bezier(0.4,0,0.2,1)",
      }}
    >
      <nav
        className="pointer-events-auto flex items-center justify-between w-full"
        role="navigation"
        aria-label="Main navigation"
        style={{
          maxWidth:      scrolled ? "580px"                   : "1100px",
          height:        scrolled ? "56px"                    : "56px",
          padding:       scrolled ? "0 20px"                  : "0 20px",
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
        <a href="#" className="flex items-center gap-2.5 shrink-0 no-underline">
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
        </a>

        {/* ── Desktop Links ── */}
        <ul className="hidden md:flex items-center list-none gap-5">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm font-medium text-white/70 transition-colors duration-300 hover:text-white focus-visible:text-white focus-visible:outline-none"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            {/* ── CTA ── */}
            <a
              href="/assets/files/myResume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border-2 bg-white px-5 py-2 text-xs font-medium text-black transition-all duration-300 hover:bg-black hover:text-white hover:border-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Download Resume
              <Icon icon="solar:arrow-right-line-duotone" className="h-4 w-4" aria-hidden="true" />
            </a>
          </li>
        </ul>

        {/* ── Mobile Menu Button ── */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex md:hidden h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          <Icon 
            icon={mobileMenuOpen ? "solar:close-circle-line-duotone" : "solar:hamburger-menu-line-duotone"} 
            className="h-5 w-5" 
          />
        </button>
      </nav>

      {/* Portal-style mobile menu - rendered outside nav for proper stacking */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-9999 flex flex-col md:hidden pointer-events-auto"
            style={{ background: "#0a0a0a" }}
          >
            {/* Header with logo and close button */}
            <div className="flex items-center justify-between p-6">
              <a href="#" className="flex items-center gap-2" onClick={closeMobileMenu}>
                <Image
                  src="/assets/images/LogoKO.png"
                  alt="Ruel Miguel Diaz"
                  width={32}
                  height={32}
                  priority
                  className="object-cover"
                />
              </a>
              <button
                onClick={closeMobileMenu}
                className="flex h-10 w-10 items-center justify-center text-white/80 transition-colors hover:text-white focus-visible:outline-none"
                aria-label="Close menu"
              >
                <svg
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 flex flex-col justify-center px-8">
              <ul className="space-y-1">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 + index * 0.07, duration: 0.3 }}
                  >
                    <a
                      href={link.href}
                      onClick={closeMobileMenu}
                      className="block text-[2.25rem] font-bold text-white py-2 transition-colors hover:text-accent focus-visible:outline-none focus-visible:text-accent"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="px-8 pb-10 space-y-4"
            >
              <a
                href="/assets/files/myResume.pdf"
                download
                onClick={closeMobileMenu}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-semibold text-black transition-all duration-200 hover:bg-white/90"
              >
                Download Resume
                <Icon icon="solar:arrow-right-line-duotone" className="h-4 w-4" aria-hidden="true" />
              </a>
              <p className="text-center text-sm text-accent">
                Philippines
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
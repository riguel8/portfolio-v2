"use client";

import { useState, useEffect, useRef } from "react";
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
  const ticking = useRef(false);

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

        {/* ── Links ── */}
        <ul className="hidden md:flex items-center list-none gap-5">
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
        {/* ── CTA ── */}
        <a
          href="/assets/files/myResume.pdf"
          download
          className="inline-flex items-center gap-2 rounded-full border-2 bg-white px-5 py-2 text-xs font-medium text-black hover:bg-black hover:text-white hover:border-white hover:border-2"
          style={{
            transition: [
              "padding 0.5s cubic-bezier(0.4,0,0.2,1)",
              "font-size 0.5s cubic-bezier(0.4,0,0.2,1)",
              "opacity 0.2s ease",
            ].join(", "),
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.opacity = "0.88";
            (e.currentTarget as HTMLElement).style.transform = "scale(1.02)";
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.opacity = "1";
            (e.currentTarget as HTMLElement).style.transform = "scale(1)";
          }}
        >
          Download Resume&nbsp;
          <span
            className="inline-block transition-transform duration-200 group-hover:translate-x-0.5"
          >
            <Icon icon="solar:arrow-right-line-duotone" className="h-4 w-4" />
          </span>
        </a>
          </li>
        </ul>
        <AnimatePresence>
          {scrolled && (
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
# Ruel Miguel Diaz — Portfolio

A modern, high-performance portfolio built with **Next.js 16**, **React 19**, **TypeScript**, **Tailwind CSS v4**, **Framer Motion**, and **GSAP**. Featuring smooth scroll-driven animations, parallax effects, an interactive lightbox, and a horizontal project gallery — all optimized for production with security headers, SEO, and accessibility best practices.

**Live:** [https://riguel-portfolio.vercel.app](https://riguel-portfolio.vercel.app)

---

## Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | Next.js 16 (App Router, Turbopack), React 19, TypeScript |
| **Styling** | Tailwind CSS v4, Geist Font |
| **Animation** | Framer Motion, GSAP ScrollTrigger, Lenis |
| **Icons** | Iconify (devicon, logos, lucide) |
| **Tooling** | ESLint, React Compiler |

---

## Features

- **Horizontal Scroll Gallery** — GSAP-pinned project showcase with platform filtering (Web / Desktop / Design)
- **Parallax & Scroll Reveals** — GPU-accelerated transforms with `prefers-reduced-motion` support
- **Interactive Lightbox** — Keyboard navigation, thumbnail strip, animated transitions
- **Resume** — View and download buttons in the hero section
- **Certificates** — Grid layout with lightbox preview and issuer logos
- **Contact CTAs** — Direct call and email cards with Iconify icons
- **SEO** — Open Graph, Twitter Cards, sitemap, robots.txt, canonical URLs
- **Security** — CSP, HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy
- **Error Handling** — Custom error boundary and 404 page
- **Performance** — Image optimization (AVIF/WebP), compression, static asset caching

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout, metadata, fonts
│   ├── page.tsx                # Home page composition
│   ├── error.tsx               # Error boundary
│   ├── not-found.tsx           # Custom 404
│   ├── robots.ts               # Robots.txt
│   ├── sitemap.ts              # Sitemap
│   └── globals.css             # Design tokens, base styles
├── components/
│   ├── navbar.tsx              # Navigation with avatar
│   ├── lightbox.tsx            # Image gallery modal
│   ├── scroll-reveal.tsx       # Intersection Observer animations
│   ├── parallax-wrapper.tsx    # Reusable parallax component
│   └── sections/
│       ├── hero.tsx            # Hero with resume buttons
│       ├── horizontal-gallery.tsx  # Projects horizontal scroll
│       ├── about.tsx           # Bio, skills, tools, education, experience
│       ├── certificates.tsx    # Certificates grid
│       └── contact.tsx         # Contact CTAs & social links
├── hooks/
│   ├── use-parallax.ts         # Scroll-driven parallax
│   ├── use-intersection-observer.ts
│   └── use-reduced-motion.ts
├── lib/
│   ├── projects.ts             # 14 projects with tech icon arrays
│   ├── skills.ts               # Skills & AI tools
│   └── certificates.ts         # 14 certificates with issuer logos
└── providers/
    ├── lenis-provider.tsx      # Smooth scroll
    └── gsap-provider.tsx       # GSAP initialization

public/assets/
├── images/
│   ├── projects/               # Project screenshots (8 folders)
│   ├── cert/                   # Certificate images
│   └── 2x2.png                # Favicon
└── files/
    └── myresume.pdf            # Resume PDF
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Install & Run

```bash
git clone https://github.com/riguel8/portfolio-v2.git
cd portfolio-v2
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### Build for Production

```bash
npm run build
npm run start
```

### Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---

## Configuration

### Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### Customizing Content

| What | File |
|------|------|
| Projects | `src/lib/projects.ts` |
| Skills & Tools | `src/lib/skills.ts` |
| Certificates | `src/lib/certificates.ts` |
| Social Links | `src/components/sections/contact.tsx` |
| Design Tokens | `src/app/globals.css` |

---

## Design

| Token | Value |
|-------|-------|
| Accent | `#c8ff00` |
| Font | Geist Sans / Geist Mono |
| Theme | Dark |
| Motion | 300ms easing, `prefers-reduced-motion` respected |

---

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import at [vercel.com](https://vercel.com)
3. Vercel auto-detects Next.js — zero config
4. Optionally set `NEXT_PUBLIC_SITE_URL` env var

---

## Contact

**Ruel Miguel Diaz** — Web & Software Developer | UI/UX Designer

- **Email:** rmdiaz1234@gmail.com
- **GitHub:** https://github.com/riguel8
- **LinkedIn:** https://linkedin.com/in/rigueldi
- **Facebook:** https://facebook.com/al.right.186

---

## License

This project is private and proprietary.

---

Built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and GSAP.

#  Ruel Miguel Diaz - Portfolio

A modern, high-performance portfolio website showcasing web development, software engineering, and UI/UX design projects. Built with cutting-edge technologies for optimal user experience and SEO.

![Portfolio Preview](./public/assets/images/cover.png)

##  Live Demo

[View Live Portfolio](https://riguel-portfolio.vercel.app) *(deployed on Vercel)*

##  Features

###  Core Features
- **Responsive Design** - Optimized for all devices and screen sizes
- **Dark Theme** - Modern dark aesthetic with accent color #c8ff00
- **Smooth Animations** - Framer Motion powered transitions and scroll reveals
- **Parallax Effects** - GPU-accelerated scroll-driven animations
- **Interactive Lightbox** - Keyboard-navigable image galleries for projects
- **Horizontal Scrolling Gallery** - GSAP-powered project showcase

###  Technical Features
- **SEO Optimized** - Open Graph, Twitter Cards, structured data
- **Performance First** - Next.js 16, image optimization, lazy loading
- **Security Headers** - CSP, HSTS, X-Frame-Options, and more
- **TypeScript** - Full type safety throughout the application
- **Production Ready** - Error boundaries, custom 404, sitemap, robots.txt

###  Sections
- **Hero** - Animated introduction with resume download/view
- **About** - Skills showcase with AI tools integration
- **Projects** - Horizontal gallery with platform filtering (Web/Desktop/Design)
- **Certificates** - Lightbox-enabled certificate display
- **Contact** - Direct call/email CTAs with social links

##  Tech Stack

### Frontend Framework
- **Next.js 16** - App Router, Server Components, Turbopack
- **React 19** - Latest React features and hooks
- **TypeScript** - Full type safety

### Styling & UI
- **Tailwind CSS v4** - Utility-first styling with custom design tokens
- **Geist Font** - Modern typography from Vercel
- **Iconify** - 100k+ icons from various icon sets

### Animations & Interactions
- **Framer Motion** - Declarative animations and page transitions
- **GSAP ScrollTrigger** - Advanced scroll-based animations
- **Lenis** - Smooth scroll library with momentum

### Development Tools
- **ESLint** - Code linting and formatting
- **TypeScript** - Type checking
- **Next.js Compiler** - React Compiler integration

##  Project Structure

`
src/
 app/                    # Next.js App Router
    layout.tsx         # Root layout with metadata
    page.tsx           # Home page composition
    error.tsx          # Error boundary
    not-found.tsx      # Custom 404 page
    robots.ts          # Robots.txt generation
    sitemap.ts         # Sitemap generation
 components/
    sections/          # Page sections
       hero.tsx       # Hero with resume buttons
       about.tsx      # Skills & experience
       horizontal-gallery.tsx # Projects showcase
       certificates.tsx # Certificates grid
       contact.tsx    # Contact CTAs & social links
    navbar.tsx         # Navigation component
    lightbox.tsx       # Image gallery modal
    parallax-wrapper.tsx # Reusable parallax component
    scroll-reveal.tsx  # Scroll-triggered animations
 hooks/                 # Custom React hooks
    use-parallax.ts    # Parallax scroll effects
    use-intersection-observer.ts
    use-reduced-motion.ts
 lib/                   # Data & utilities
    projects.ts        # Project data with tech stacks
    skills.ts          # Skills & tools data
    certificates.ts    # Certificate data
 providers/             # Context providers
     lenis-provider.tsx # Smooth scroll provider
     gsap-provider.tsx  # GSAP initialization

public/
 assets/
    images/            # Optimized images
       projects/      # Project screenshots
       cert/          # Certificate images
       2x2.png        # Favicon
    files/
        myresume.pdf   # Resume PDF
`

##  Getting Started

### Prerequisites
- **Node.js 18+**
- **npm** or **yarn** or **pnpm**

### Installation

1. **Clone the repository**
   `ash
   git clone https://github.com/riguel8/portfolio-v4.git
   cd portfolio-v4
   `

2. **Install dependencies**
   `ash
   npm install
   # or
   yarn install
   # or
   pnpm install
   `

3. **Run development server**
   `ash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   `

4. **Open your browser**
   - Navigate to [http://localhost:3000](http://localhost:3000)
   - The app will hot-reload as you edit the file

### Build for Production

`ash
npm run build
npm run start
`

##  Scripts

| Command | Description |
|---------|-------------|
| 
pm run dev | Start development server |
| 
pm run build | Build for production |
| 
pm run start | Start production server |
| 
pm run lint | Run ESLint |

##  Configuration

### Environment Variables

Create a .env.local file in the root directory:

`env
# Site URL for production (used in metadata)
NEXT_PUBLIC_SITE_URL=https://your-domain.com
`

### Customizing Content

1. **Projects**: Edit src/lib/projects.ts
2. **Skills**: Edit src/lib/skills.ts
3. **Certificates**: Edit src/lib/certificates.ts
4. **Contact Info**: Edit social links in src/components/sections/contact.tsx
5. **Colors**: Modify design tokens in src/app/globals.css

##  Design System

### Colors
- **Primary**: #c8ff00 (Accent/Lime)
- **Background**: Dark theme
- **Text**: Light gray on dark background

### Typography
- **Primary Font**: Geist Sans
- **Mono Font**: Geist Mono
- **Sizes**: Responsive scaling with Tailwind CSS

### Animations
- **Scroll Reveals**: Intersection Observer based
- **Parallax**: Framer Motion useScroll and useTransform
- **Transitions**: 300ms duration with easing
- **Reduced Motion**: Respects prefers-reduced-motion

##  Responsive Design

- **Mobile First**: Tailwind CSS mobile-first approach
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Touch Optimized**: Swipe gestures for mobile galleries
- **Performance**: Optimized images and lazy loading

##  Security & Performance

### Security Headers (Next.js Config)
- Content Security Policy (CSP)
- HTTP Strict Transport Security (HSTS)
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Referrer Policy

### Performance Optimizations
- **Next.js Image Optimization**: Automatic WebP/AVIF conversion
- **Code Splitting**: Automatic route-based splitting
- **Compression**: Gzip/Brotli enabled
- **Caching**: Static asset caching headers
- **Bundle Analysis**: Optimized bundle sizes

##  SEO & Accessibility

### SEO Features
- **Meta Tags**: Title, description, Open Graph, Twitter Cards
- **Structured Data**: JSON-LD for rich snippets
- **Sitemap**: Auto-generated XML sitemap
- **Robots.txt**: Crawler directives
- **Canonical URLs**: Proper canonicalization

### Accessibility (A11y)
- **Keyboard Navigation**: Full keyboard support
- **Screen Reader**: ARIA labels and semantic HTML
- **Focus Management**: Visible focus indicators
- **Color Contrast**: WCAG compliant contrast ratios
- **Reduced Motion**: Animation preferences respected

##  Deployment

### Vercel (Recommended)

1. **Connect Repository**
   - Push code to GitHub
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository

2. **Environment Variables**
   - Add NEXT_PUBLIC_SITE_URL if using custom domain

3. **Deploy**
   - Vercel auto-detects Next.js
   - Zero configuration deployment

### Other Platforms

The app can be deployed to any platform supporting Node.js:
- **Netlify**
- **Railway**
- **Render**
- **Self-hosted** with Node.js server

##  Contact

**Ruel Miguel Diaz**
- **Email**: rmdiaz1234@gmail.com
- **Phone**: +63 945 174 3608
- **GitHub**: https://github.com/riguel8
- **LinkedIn**: https://linkedin.com/in/rigueldi
- **Facebook**: https://facebook.com/al.right.186

##  License

This project is private and proprietary.

##  Acknowledgments

- **Next.js Team** - For the amazing framework
- **Vercel** - For hosting and the Geist font family
- **Framer Motion** - For smooth animations
- **Tailwind CSS** - For the utility-first approach
- **Iconify** - For the comprehensive icon collection

---

Built with  using Next.js, TypeScript, and modern web technologies.

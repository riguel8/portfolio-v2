export interface Project {
  id: string;
  title: string;
  category: string[];
  platform: "web" | "desktop" | "design" | "graphic";
  description: string;
  background?: string;
  highlights?: string[];
  link: string;
  tech: Array<{ icon: string }>;
  thumbnail: string;
  images: string[];
}

export type Platform = "all" | "web" | "desktop" | "design" | "graphic";

export const platformLabels: Record<Platform, string> = {
  all: "All Projects",
  web: "Web Applications",
  desktop: "Desktop Applications",
  design: "UI/UX Design",
  graphic: "Graphic Design",
};

export const projects: Project[] = [
  {
    id: "0001",
    title: "MyEdessa",
    category: ["Project", "Healthcare Website", "Ghost Client"],
    platform: "web",
    link: "https://edessa-rho.vercel.app",
    description:
      "A modern, premium, conversion-focused telehealth website for MyEdessa — physician-guided GLP-1 weight loss treatment. The platform connects patients with licensed healthcare professionals for virtual consultations, tailored treatment programs, and continuous progress monitoring, simplifying the patient journey from initial intake to ongoing care while giving practitioners tools to track outcomes and adjust plans in real time. Design direction was inspired by Amble, Trimi, and Cora, adapted to MyEdessa's warm, natural branding, with a strong focus on accessibility and trust so first-time telehealth users can navigate complex medical information with confidence.",
    background:
      "This project began as client work for MyEdessa. After delivery, the client went unresponsive and communication was never resumed, so the project was never officially handed off, launched, or fully completed. What's shown here is not the full original build — it's a personal redesign / modified version, including some additional pages based on the client's original requests, put together to showcase front-end development and conversion-focused UX/UI work. All code, structure, and design decisions in this version are original.",
    highlights: [
      "Physician-guided GLP-1 treatment info presented clearly for first-time telehealth users",
      "End-to-end patient journey from intake to ongoing care monitoring",
      "Practitioner-facing tools for tracking outcomes and adjusting treatment plans",
      "Accessibility- and trust-focused UI for sensitive medical content",
    ],
    tech: [{ icon: "devicon:html5" }, { icon: "devicon:css3" }, { icon: "devicon:javascript" }],
    thumbnail: "/assets/images/projects/MyEdessa/Hero.png",
    images: [
      "/assets/images/projects/MyEdessa/Hero.png",
      "/assets/images/projects/MyEdessa/Products.png",
      "/assets/images/projects/MyEdessa/Details.png",
      "/assets/images/projects/MyEdessa/scale.png",
    ],
  },
  {
    id: "0002",
    title: "FARMURA Website",
    category: ["Project", "Website", "Front-End"],
    platform: "web",
    link: "https://farmura-website.vercel.app",
    description:
      "A community-driven digital platform built to serve agricultural stakeholders, featuring dedicated sections for services, partnership opportunities, and coverage areas. The site was engineered with a component-based architecture for fast load times and smooth navigation across devices, and structured to make it easy for farmers, cooperatives, and partner organizations to find relevant information quickly. This is a modified, self-directed version of the concept and is not the official FARMURA website.",
    highlights: [
      "Dedicated sections for services, partnerships, and coverage areas",
      "Component-based architecture for fast load times",
      "Structured for quick information discovery by farmers, cooperatives, and partners",
    ],
    tech: [{ icon: "devicon:react" }, { icon: "devicon:typescript" }, { icon: "devicon:tailwindcss" }, { icon: "devicon:vitejs" }],
    thumbnail: "/assets/images/projects/FARMURA-website/Heros.png",
    images: [
      "/assets/images/projects/FARMURA-website/Heros.png",
      "/assets/images/projects/FARMURA-website/Services.png",
      "/assets/images/projects/FARMURA-website/Partners.png",
      "/assets/images/projects/FARMURA-website/Areas.png",
    ],
  },
  {
    id: "000",
    title: "JB's Creation",
    category: ["Project", "Event Decoration Website", "Front-End"],
    platform: "web",
    link: "https://decor-universe.vercel.app",
    description:
      "A creative gallery-style website built for an event decoration business, designed to showcase past events, curated packages, and the overall client experience through rich visual storytelling. The layout emphasizes large, immersive imagery and an intuitive browsing flow so prospective clients can quickly explore services and get in touch. Developed end-to-end on the frontend using React, TypeScript, Tailwind CSS, and Vite for a fast, responsive experience.",
    highlights: [
      "Gallery-style layout built around large, immersive imagery",
      "Curated event packages and service showcase",
      "Intuitive browsing flow from inspiration to contact",
    ],
    tech: [{ icon: "devicon:react" }, { icon: "devicon:typescript" }, { icon: "devicon:tailwindcss" }, { icon: "devicon:vitejs" }],
    thumbnail: "/assets/images/projects/Decor/hero.png",
    images: [
      "/assets/images/projects/Decor/hero.png",
      "/assets/images/projects/Decor/gallery.png",
      "/assets/images/projects/Decor/services.png",
      "/assets/images/projects/Decor/package.png",
      "/assets/images/projects/Decor/contact.png",
    ],
  },
  {
    id: "001",
    title: "LGU Client Satisfaction Measurement (CSM)",
    category: ["Work", "Full-Stack Web Application"],
    platform: "web",
    link: "",
    description:
      "A web-based feedback collection and analytics platform developed for the Local Government Unit of Tubod to monitor and continuously improve the quality of public service delivery. The system enables citizens to submit structured feedback after transacting with government offices, while giving administrators real-time dashboards and reports to track service performance over time. Built to comply with Anti-Red Tape Authority (ARTA) mandates, it streamlines what was previously a manual, paper-based survey process into a fully digital, auditable workflow.",
    highlights: [
      "Structured citizen feedback flow for government office transactions",
      "Real-time admin dashboards and service performance reporting",
      "ARTA-compliant, fully digital and auditable replacement for paper surveys",
    ],
    tech: [
      { icon: "devicon:php" },
      { icon: "devicon:laravel" },
      { icon: "devicon:react" },
      { icon: "devicon:typescript" },
      { icon: "devicon:tailwindcss" },
      { icon: "devicon:mysql" },
      { icon: "devicon:inertiajs" },
    ],
    thumbnail: "/assets/images/projects/LGU/HeroPage.png",
    images: [
      "/assets/images/projects/LGU/HeroPage.png",
      "/assets/images/projects/LGU/SurveyPage.png",
      "/assets/images/projects/LGU/SurveyPage2.png",
      "/assets/images/projects/LGU/SurveyPage3.png",
      "/assets/images/projects/LGU/SurveyPage4.png",
      "/assets/images/projects/LGU/MetricsPage.png",
    ],
  },
  {
    id: "01",
    title: "DERU",
    category: ["Project", "E-commerce Website", "Front-End"],
    platform: "web",
    link: "",
    description:
      "A production-ready e-commerce storefront built around a minimalist shirt collection, designed to deliver a polished, conversion-focused shopping experience from browsing to checkout. The interface pairs sophisticated visual design with practical UX patterns — product filtering, detailed product views, and a streamlined cart flow — to reduce friction for the customer. Built on Next.js, TypeScript, and Tailwind CSS for strong performance, SEO readiness, and long-term maintainability.",
    highlights: [
      "Conversion-focused storefront from browsing to checkout",
      "Product filtering, detail views, and streamlined cart flow",
      "Built on Next.js for performance and SEO readiness",
    ],
    tech: [
      { icon: "devicon:nextjs" },
      { icon: "devicon:typescript" },
      { icon: "devicon:tailwindcss" },
    ],
    thumbnail: "/assets/images/projects/Deru/01.png",
    images: [
      "/assets/images/projects/Deru/01.png",
      "/assets/images/projects/Deru/02.png",
      "/assets/images/projects/Deru/03.png",
      "/assets/images/projects/Deru/04.png",
    ],
  },
  // ── Web Applications ──
  {
    id: "02",
    title: "Migeru Build Engineers",
    category: ["Project", "Construction Website", "Front-End"],
    platform: "web",
    link: "",
    description:
      "A premium corporate website built for a construction and engineering firm, designed to establish credibility and showcase completed projects to prospective clients. The design incorporates Philippine market localization — relevant terminology, imagery, and contact conventions — alongside a clean, professional visual identity that reflects the industry's emphasis on precision and reliability. Built with React, TypeScript, and Tailwind CSS for a fast, maintainable, and fully responsive experience across devices.",
    highlights: [
      "Philippine market localization across terminology, imagery, and contact conventions",
      "Project showcase built to establish client credibility",
      "Clean, professional visual identity for the construction industry",
    ],
    tech: [
      { icon: "devicon:react" },
      { icon: "devicon:typescript" },
      { icon: "devicon:tailwindcss" },
    ],
    thumbnail: "/assets/images/projects/Migeru/01.png",
    images: [
      "/assets/images/projects/Migeru/01.png",
      "/assets/images/projects/Migeru/02.png",
      "/assets/images/projects/Migeru/03.png",
      "/assets/images/projects/Migeru/04.png",
      "/assets/images/projects/Migeru/05.png",
    ],
  },
  {
    id: "03",
    title: "Maison (AI-Inspired)",
    category: ["Project", "E-commerce Website", "Front-End"],
    platform: "web",
    link: "",
    description:
      "A modern, scalable e-commerce frontend inspired by AI-driven retail experiences, built to demonstrate how thoughtful design and clean architecture can elevate an online shopping platform. The build includes a product showcase, feature highlights, and contact touchpoints, all developed with reusable, well-structured components to support future scaling. Implemented using React.js, TypeScript, and Tailwind CSS to ensure type safety, performance, and design consistency throughout.",
    highlights: [
      "AI-inspired retail concept exploring modern e-commerce UX",
      "Reusable, well-structured components built for future scaling",
      "Type-safe implementation with React and TypeScript",
    ],
    tech: [
      { icon: "devicon:react" },
      { icon: "devicon:typescript" },
      { icon: "devicon:tailwindcss" },
    ],
    thumbnail: "/assets/images/projects/Maison/Hero.png",
    images: [
      "/assets/images/projects/Maison/Hero.png",
      "/assets/images/projects/Maison/shop.png",
      "/assets/images/projects/Maison/features.png",
      "/assets/images/projects/Maison/contact.png",
    ],
  },
  {
    id: "04",
    title: "FARMURA Admin",
    category: ["Project", "Admin Dashboard", "Front-End"],
    platform: "web",
    link: "",
    description:
      "An administrative dashboard frontend built to support the operational backbone of the FARMURA platform, giving internal staff tools to manage logistics such as transport bookings (pasakay) and delivery requests (pasugo). The dashboard was designed with clarity and efficiency in mind, presenting operational data through organized views so administrators can act quickly on day-to-day tasks. Developed using React.js, TypeScript, and Tailwind CSS, with a dedicated authentication flow to secure access to internal tools.",
    highlights: [
      "Transport (pasakay) and delivery (pasugo) logistics management",
      "Organized operational views for fast day-to-day decision-making",
      "Dedicated authentication flow to secure internal tools",
    ],
    tech: [
      { icon: "devicon:react" },
      { icon: "devicon:typescript" },
      { icon: "devicon:tailwindcss" },
    ],
    thumbnail: "/assets/images/projects/FARMURA-admin/dashboard.png",
    images: [
      "/assets/images/projects/FARMURA-admin/LOGIN.png",
      "/assets/images/projects/FARMURA-admin/dashboard.png",
      "/assets/images/projects/FARMURA-admin/pasakay.png",
      "/assets/images/projects/FARMURA-admin/pasugo.png",
    ],
  },
  {
    id: "05",
    title: "Journal of Science",
    category: ["Project", "Full-Stack Web Application"],
    platform: "web",
    link: "",
    description:
      "A full-stack web system built to support digital journal publication, managing the complete editorial workflow from article submission and review to final publication and public access. The platform includes structured content management, user role handling, and an article browsing experience designed for researchers and readers alike. Built on CodeIgniter and MySQL for a robust, reliable backend, with Tailwind CSS powering a clean, modern presentation layer.",
    highlights: [
      "Full editorial workflow from submission through publication",
      "Role-based user handling for editors, reviewers, and readers",
      "Structured content management with a clean article browsing experience",
    ],
    tech: [
      { icon: "logos:codeigniter-icon" },
      { icon: "devicon:mysql" },
      { icon: "devicon:tailwindcss" },
    ],
    thumbnail: "/assets/images/projects/Journal/landing pages.png",
    images: [
      "/assets/images/projects/Journal/landing pages.png",
      "/assets/images/projects/Journal/LOGIN.png",
      "/assets/images/projects/Journal/articles.png",
      "/assets/images/projects/Journal/viewarticles.png",
    ],
  },
  {
    id: "06",
    title: "Web-Based Appointment & Management System",
    category: ["Capstone Project", "Full-Stack Web Application"],
    platform: "web",
    link: "",
    description:
      "A capstone full-stack system designed and deployed to streamline day-to-day clinic operations, covering patient scheduling, medical records management, and appointment tracking in a single unified platform. The system was built to reduce administrative overhead for clinic staff while giving patients a straightforward way to book and manage appointments online. Developed using Laravel and MySQL, with a focus on data integrity and reliable, real-world operational use.",
    background:
      "Developed and deployed as a capstone project, built for real-world use in an actual clinic setting rather than as a classroom exercise only.",
    highlights: [
      "Unified platform for scheduling, records, and appointment tracking",
      "Reduced administrative overhead for clinic staff",
      "Deployed for real-world clinic use with a focus on data integrity",
    ],
    tech: [
      { icon: "logos:laravel" },
      { icon: "devicon:mysql" },
      { icon: "devicon:bootstrap" },
    ],
    thumbnail: "/assets/images/projects/optical.png",
    images: [
      "/assets/images/projects/optical.png",
    ],
  },
  {
    id: "07",
    title: "Image Editor",
    category: ["Work", "Web Application", "OJT"],
    platform: "web",
    link: "",
    description:
      "A browser-based image editing application developed during an on-the-job training engagement, featuring advanced selection and retouching tools including lasso, poly-lasso, and brush-based editing for precise, real-time image manipulation. The tool was built to give users professional-grade editing capabilities directly in the browser, without relying on heavyweight desktop software. Implemented with Vue.js on the frontend and MySQL for persistent data storage, styled with Tailwind CSS.",
    highlights: [
      "Lasso, poly-lasso, and brush-based selection tools",
      "Real-time image manipulation directly in the browser",
      "Professional-grade editing without heavyweight desktop software",
    ],
    tech: [
      { icon: "logos:vue" },
      { icon: "devicon:mysql" },
      { icon: "devicon:tailwindcss" },
    ],
    thumbnail: "/assets/images/projects/editor.png",
    images: [
      "/assets/images/projects/editor.png",
    ],
  },
  {
    id: "08",
    title: "Boarding House Management System",
    category: ["Project", "Full-Stack Web Application"],
    platform: "web",
    link: "",
    description:
      "A tenant and billing management platform engineered to automate the operational workload of running a boarding house, including tenant records, rent collection, payment tracking, and report generation. The system was designed to eliminate manual bookkeeping errors and give landlords a clear, real-time view of occupancy and financials. Built with ASP.NET and MySQL, paired with a Bootstrap-based interface for a clean and accessible user experience.",
    highlights: [
      "Tenant records, rent collection, and payment tracking in one system",
      "Report generation for occupancy and financial visibility",
      "Built to eliminate manual bookkeeping errors",
    ],
    tech: [
      { icon: "devicon:dot-net" },
      { icon: "devicon:mysql" },
      { icon: "devicon:bootstrap" },
    ],
    thumbnail: "/assets/images/projects/BoardPro/01.png",
    images: [
      "/assets/images/projects/BoardPro/login.png",
      "/assets/images/projects/BoardPro/dashboard.png",
      "/assets/images/projects/BoardPro/01.png",
      "/assets/images/projects/BoardPro/02.png",
      "/assets/images/projects/BoardPro/03.png",
    ],
  },
  {
    id: "09",
    title: "Document Management System",
    category: ["Project", "Full-Stack Web Application"],
    platform: "web",
    link: "",
    description:
      "A secure document management platform built to centralize file storage and streamline retrieval for organizations handling large volumes of records. The system implements role-based access control to ensure sensitive documents are only visible to authorized users, alongside fast search and organized categorization to minimize retrieval time. Developed with ASP.NET and MySQL, prioritizing data security and long-term system reliability.",
    highlights: [
      "Role-based access control for sensitive records",
      "Fast search and organized categorization",
      "Centralized storage built for large record volumes",
    ],
    tech: [
      { icon: "devicon:dot-net" },
      { icon: "devicon:mysql" },
      { icon: "devicon:bootstrap" },
    ],
    thumbnail: "/assets/images/projects/404.png",
    images: [
      "/assets/images/projects/404.png",
    ],
  },

  // ── Desktop Applications ──
  {
    id: "10",
    title: "Hotel Reservation System",
    category: ["Project", "Desktop Application"],
    platform: "desktop",
    link: "",
    description:
      "A desktop-based hotel reservation system designed to automate the full booking lifecycle, from room availability checks and reservations to payment processing and record-keeping. The application was built to reduce front-desk workload and minimize double-bookings through real-time room status tracking. Developed with VB.NET and a MySQL backend for dependable, offline-capable operation suited to on-premise hotel environments.",
    highlights: [
      "Full booking lifecycle from availability check to payment",
      "Real-time room status tracking to prevent double-bookings",
      "Offline-capable, on-premise-friendly desktop operation",
    ],
    tech: [
      { icon: "vscode-icons:file-type-vb" },
      { icon: "devicon:mysql" },
    ],
    thumbnail: "/assets/images/projects/404.png",
    images: [
      "/assets/images/projects/404.png",
    ],
  },
  {
    id: "11",
    title: "POS and Inventory System",
    category: ["Project", "Desktop Application"],
    platform: "desktop",
    link: "",
    description:
      "A point-of-sale and inventory management desktop application built to optimize retail operations, covering sales transactions, stock level tracking, and real-time report generation. The system was designed to give business owners immediate visibility into sales performance and inventory health, helping prevent stockouts and reconcile discrepancies quickly. Built using VB.NET with a MySQL database for stable, transaction-safe performance.",
    highlights: [
      "Sales transactions and stock level tracking in one system",
      "Real-time reporting for sales performance and inventory health",
      "Transaction-safe performance for daily retail operations",
    ],
    tech: [
      { icon: "vscode-icons:file-type-vb" },
      { icon: "devicon:mysql" },
    ],
    thumbnail: "/assets/images/projects/404.png",
    images: [
      "/assets/images/projects/404.png",
    ],
  },

  // ── UI/UX Design ──
  {
    id: "003",
    title: "Epione App",
    category: ["Project", "UI Design"],
    platform: "design",
    link: "",
    description:
      "Epione is a mobile app concept designed to provide students with a safe, anonymous, and accessible space to seek emotional support, guidance, and mental health resources. The design covers the full user journey — onboarding, chat-based support, curated resource libraries, and a community space — all crafted with a calming visual language appropriate for a sensitive, wellness-focused audience. Designed entirely in Figma with a strong emphasis on accessibility, trust, and reducing the stigma around seeking help.",
    highlights: [
      "Full user journey: onboarding, chat support, resources, and community",
      "Calming visual language suited to a sensitive, wellness-focused audience",
      "Designed to reduce stigma and build trust around seeking help",
    ],
    tech: [
      { icon: "logos:figma" },
    ],
    thumbnail: "/assets/images/projects/Epione-App/Mockup.png",
    images: [
      "/assets/images/projects/Epione-App/Onboarding.png",
      "/assets/images/projects/Epione-App/Home.png",
      "/assets/images/projects/Epione-App/Chat.png",
      "/assets/images/projects/Epione-App/Chat2.png",
      "/assets/images/projects/Epione-App/Resources.png",
      "/assets/images/projects/Epione-App/Community.png",
    ],
  },
  {
    id: "11.5",
    title: "LGU Client Satisfaction Measurement — Wireframe",
    category: ["Work", "UX Design", "Wireframe"],
    platform: "design",
    link: "https://www.figma.com/design/OtNZIFte4J6p1VibyR6Wcb/LGU-CSM?node-id=0-1&t=anabjIPU9BAcR8Q3-1",
    description:
      "A complete UX wireframe set mapping out the citizen feedback journey for a local government service platform, from office and service selection to citizen's charter reference and final feedback submission. The wireframes prioritize accessibility and trust, ensuring the flow is intuitive for citizens of varying digital literacy levels while capturing the structured data local government units need for service quality reporting. Designed in Figma as the foundational UX blueprint that shaped the eventual full-stack CSM application.",
    background:
      "Served as the foundational UX blueprint for the full-stack LGU CSM application (see project 001).",
    highlights: [
      "Complete citizen feedback journey mapped end to end",
      "Designed for varying levels of digital literacy",
      "Foundational blueprint that shaped the full-stack CSM build",
    ],
    tech: [
      { icon: "logos:figma" },
    ],
    thumbnail: "/assets/images/projects/LGU-UX/thumbnail.png",
    images: [
      "/assets/images/projects/LGU-UX/LANDING PAGE.png",
      "/assets/images/projects/LGU-UX/Select-Office.png",
      "/assets/images/projects/LGU-UX/Select-Service.png",
      "/assets/images/projects/LGU-UX/Citizen's-Charter.png",
      "/assets/images/projects/LGU-UX/service-Quality.png",
      "/assets/images/projects/LGU-UX/Feedback.png",
    ],
  },
  {
    id: "12.0",
    title: "Epione Landing Page — Mental Health Service",
    category: ["Project", "UI Design"],
    platform: "design",
    link: "https://www.figma.com/design/z0JFODxXpVyLC5oY3FTv3O/Epione-Landing-Page?node-id=3-2&t=H7bGjq1zjuXf4ISs-1",
    description:
      "A dedicated landing page UI designed for Epione, a mental health service platform, built to communicate the brand's mission and convert first-time visitors into engaged users. The layout balances an inviting hero section, clearly structured service explanations, authentic testimonials, and a well-organized footer, all with an emphasis on approachability and emotional safety. Designed in Figma with careful attention to typography, color psychology, and accessibility for a wellness-focused audience.",
    highlights: [
      "Inviting hero section paired with clear service explanations",
      "Authentic testimonials built for first-visit conversion",
      "Typography and color psychology tuned for emotional safety",
    ],
    tech: [
      { icon: "logos:figma" },
    ],
    thumbnail: "/assets/images/projects/Epione/Thumbnail.png",
    images: [
      "/assets/images/projects/Epione/hero.png",
      "/assets/images/projects/Epione/section1.png",
      "/assets/images/projects/Epione/section2.png",
      "/assets/images/projects/Epione/testimonials.png",
      "/assets/images/projects/Epione/footer.png",
    ],
  },
  {
    id: "12",
    title: "FARMURA — Super App",
    category: ["Work", "UI/UX Design"],
    platform: "design",
    link: "",
    description:
      "A comprehensive UI/UX design system for FARMURA's super app, built to serve agricultural stakeholders with a single platform covering authentication, service discovery, and digital wallet functionality. The design work centered on accessibility, trust, and user-centered experiences for a user base that spans varying levels of digital familiarity, ensuring the interface remains intuitive without oversimplifying critical financial and service features. Delivered entirely in Figma, from login and signup flows through to the home dashboard and wallet interface.",
    highlights: [
      "Single platform spanning auth, service discovery, and digital wallet",
      "Designed for a user base with varying digital familiarity",
      "Balanced intuitiveness with the rigor financial features require",
    ],
    tech: [
      { icon: "logos:figma" },
    ],
    thumbnail: "/assets/images/projects/FARMURA/FARMURA-thumbnail.png",
    images: [
      "/assets/images/projects/FARMURA/FARMURA-thumbnail.png",
      "/assets/images/projects/FARMURA/Login.png",
      "/assets/images/projects/FARMURA/SIGNUP.png",
      "/assets/images/projects/FARMURA/Home.png",
      "/assets/images/projects/FARMURA/Services.png",
      "/assets/images/projects/FARMURA/Wallet.png",
    ],
  },
  {
    id: "13",
    title: "Wanderly",
    category: ["Project", "UI Design"],
    platform: "design",
    link: "https://www.figma.com/design/mG5mc4sgmxZv2qExdqujop/Wanderly?node-id=0-1&p=f&t=FuXWoWQDMSUCn6cu-0",
    description:
      "A landing page UI concept designed for Wanderly, a travel discovery app, crafted to evoke a sense of adventure while presenting destination content in a clean, digestible layout. The design explores how strong imagery, typography, and section pacing can guide a visitor from initial curiosity toward exploring the app further. Designed in Figma with a focus on visual storytelling appropriate for the travel and lifestyle space.",
    highlights: [
      "Imagery-led layout built to evoke a sense of adventure",
      "Section pacing designed to guide curiosity into exploration",
      "Visual storytelling suited to travel and lifestyle branding",
    ],
    tech: [
      { icon: "logos:figma" },
    ],
    thumbnail: "/assets/images/projects/Wanderly/Hero.png",
    images: [
      "/assets/images/projects/Wanderly/Hero.png",
      "/assets/images/projects/Wanderly/Section-1.png",
      "/assets/images/projects/Wanderly/Section.png",
    ],
  },
  {
    id: "14",
    title: "Wine Price Edge Solutions",
    category: ["Work", "UI/UX Design"],
    platform: "design",
    link: "https://www.figma.com/design/UKhhkqyYvLsDniZqskzdHK/Wine-App?node-id=1-1446&p=f&t=m9UNwTWPuaFvWSw0-0",
    description:
      "A mobile-first UI/UX concept created for a wine price comparison platform, designed to help users search, upload data, and interpret pricing analytics with minimal friction. The design emphasizes automation and clarity, translating what could be a data-heavy experience into clean visual flows — including a CSV upload feature and annotation-driven analytics views — that remain approachable for non-technical users. Delivered in Figma with a strong focus on clean design and effective data visualization.",
    highlights: [
      "CSV upload flow designed for non-technical users",
      "Annotation-driven analytics views for pricing data",
      "Mobile-first, data-heavy experience kept clean and approachable",
    ],
    tech: [
      { icon: "logos:figma" },
    ],
    thumbnail: "/assets/images/projects/Wine/WINEAPP-thumbnail.png",
    images: [
      "/assets/images/projects/Wine/WINEAPP-thumbnail.png",
      "/assets/images/projects/Wine/Login Mobile.png",
      "/assets/images/projects/Wine/Login Mobile-1.png",
      "/assets/images/projects/Wine/Search - Mobile.png",
      "/assets/images/projects/Wine/Upload CSV - Mobile.png",
      "/assets/images/projects/Wine/Annotation Results & Analytics - Mobile.png",
    ],
  },
  {
    id: "15",
    title: "DM Resto",
    category: ["Project", "UI/UX Design"],
    platform: "design",
    link: "https://www.figma.com/design/O8ta1Cgja5nEQCKBNeHoVN/DM-Resto?node-id=1-1201&p=f&t=POhLUAOyTDRIjXAy-0",
    description:
      "A full interface redesign of a restaurant POS system, reimagined in Figma to improve usability, transaction speed, and overall operator efficiency during high-pressure service hours. The redesign covers the login experience, landing screen, operational dashboard, and menu management, all restructured around clearer visual hierarchy and fewer clicks per task. The result is a system built to reduce training time for new staff while speeding up order processing at the counter.",
    highlights: [
      "Full redesign spanning login, dashboard, and menu management",
      "Fewer clicks per task through clearer visual hierarchy",
      "Built to reduce new-staff training time during high-pressure service",
    ],
    tech: [
      { icon: "logos:figma" },
    ],
    thumbnail: "/assets/images/projects/Resto/dmresto.png",
    images: [
      "/assets/images/projects/Resto/dmresto.png",
      "/assets/images/projects/Resto/LOGIN PAGE.png",
      "/assets/images/projects/Resto/LANDING PAGE.png",
      "/assets/images/projects/Resto/DASHBOARD.png",
      "/assets/images/projects/Resto/Menu.jpg",
    ],
  },
  {
    id: "16",
    title: "DateDash App",
    category: ["Project", "UI/UX Design"],
    platform: "design",
    link: "https://www.figma.com/design/EzC614eVRUmXeG14LJRPHy/DateDash?node-id=0-1&p=f&t=Skwi4D7FCJOYEQLa-0",
    description:
      "A mobile-first UI/UX design for DateDash, a dating app concept built around intuitive matching and location-based discovery flows. The design work spanned the full user journey — signup, browsing profiles, matching interactions, and location settings — delivered through detailed wireframes and interactive prototypes to validate usability before development. Designed in Figma with an emphasis on approachable, modern visual design that fits the casual, social nature of the product.",
    highlights: [
      "Full journey from signup through matching and location settings",
      "Interactive prototypes used to validate usability pre-development",
      "Approachable, modern visual design fit for a casual social product",
    ],
    tech: [
      { icon: "logos:figma" },
    ],
    thumbnail: "/assets/images/projects/Datedash/datedash.png",
    images: [
      "/assets/images/projects/Datedash/datedash.png",
      "/assets/images/projects/Datedash/Signup.png",
      "/assets/images/projects/Datedash/Main 3.png",
      "/assets/images/projects/Datedash/Match.png",
      "/assets/images/projects/Datedash/Location.png",
    ],
  },

  // ── Graphic Design ──
  {
    id: "17",
    title: "LGU Job Posting",
    category: ["Work", "Social Media"],
    platform: "graphic",
    link: "",
    description:
      "A set of graphic designs created for a local government unit's official job postings, produced for distribution across social media channels to attract qualified applicants. Each design was tailored to specific positions — including administrative, technical, and department head roles — with consistent branding and clear, easy-to-read layouts that communicate job requirements at a glance. Designed in Figma to align with the LGU's visual identity while meeting the practical needs of a fast-moving recruitment process.",
    highlights: [
      "Position-specific designs for administrative, technical, and department head roles",
      "Consistent branding aligned with the LGU's visual identity",
      "Clear, at-a-glance layouts built for social media distribution",
    ],
    tech: [
      { icon: "devicon:figma" },
    ],
    thumbnail: "/assets/images/projects/Jobpost/thumbnail.png",
    images: [
      "/assets/images/projects/Jobpost/Administrative Aide III (Plumber I).png",
      "/assets/images/projects/Jobpost/Administrative Aide VI (Clerk II).png",
      "/assets/images/projects/Jobpost/Agriculturist II.png",
      "/assets/images/projects/Jobpost/Municipal Government Department Head I.png",
      "/assets/images/projects/Jobpost/Municipal Government Department Head I (Municipal Disaster Risk Reduction and Management Officer).png",
    ],
  },
];
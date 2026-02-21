export interface Project {
  id: string;
  title: string;
  category: string;
  platform: "web" | "desktop" | "design";
  description: string;
  tech: string;
  color: string;
  thumbnail: string;
  images: string[];
}

export type Platform = "all" | "web" | "desktop" | "design";

export const platformLabels: Record<Platform, string> = {
  all: "All Projects",
  web: "Web Applications",
  desktop: "Desktop Applications",
  design: "UI/UX Design",
};

export const projects: Project[] = [
  // ── Web Applications ──
  {
    id: "01",
    title: "Maison",
    category: "E-Commerce Frontend",
    platform: "web",
    description:
      "Developed a frontend application for E-commerce website using React.js + TypeScript + Tailwind CSS.",
    tech: "React.js · TypeScript · Tailwind CSS",
    color: "#61dafb",
    thumbnail: "/assets/images/projects/Maison/Hero.png",
    images: [
      "/assets/images/projects/Maison/Hero.png",
      "/assets/images/projects/Maison/shop.png",
      "/assets/images/projects/Maison/features.png",
      "/assets/images/projects/Maison/contact.png",
    ],
  },
  {
    id: "02",
    title: "FARMURA Admin",
    category: "Admin Dashboard",
    platform: "web",
    description:
      "Developed a frontend web application for FARMURA Admin using React.js + TypeScript + Tailwind CSS.",
    tech: "React.js · TypeScript · Tailwind CSS",
    color: "#c8ff00",
    thumbnail: "/assets/images/projects/FARMURA-admin/dashboard.png",
    images: [
      "/assets/images/projects/FARMURA-admin/dashboard.png",
      "/assets/images/projects/FARMURA-admin/LOGIN.png",
      "/assets/images/projects/FARMURA-admin/pasakay.png",
      "/assets/images/projects/FARMURA-admin/pasugo.png",
    ],
  },
  {
    id: "03",
    title: "Journal of Science",
    category: "Web Application",
    platform: "web",
    description:
      "Built a CodeIgniter & MySQL web system supporting digital journal publication, content workflows, and user management.",
    tech: "CodeIgniter · MySQL",
    color: "#dd4814",
    thumbnail: "/assets/images/projects/Journal/landing pages.png",
    images: [
      "/assets/images/projects/Journal/landing pages.png",
      "/assets/images/projects/Journal/LOGIN.png",
      "/assets/images/projects/Journal/articles.png",
      "/assets/images/projects/Journal/viewarticles.png",
    ],
  },
  {
    id: "04",
    title: "Web-Based Appointment & Management System",
    category: "Capstone Project",
    platform: "web",
    description:
      "Designed and deployed in Laravel & MySQL, streamlining patient scheduling, records, and clinic operations.",
    tech: "Laravel · MySQL",
    color: "#ff2d20",
    thumbnail: "/assets/images/projects/optical.png",
    images: [
      "/assets/images/projects/optical.png",
    ],
  },
  {
    id: "05",
    title: "Image Editor",
    category: "Web Application",
    platform: "web",
    description:
      "Implemented with Vue.js & MySQL, featuring advanced tools (lasso, poly-lasso, brush) for real-time interactive image editing.",
    tech: "Vue.js · MySQL",
    color: "#42b883",
    thumbnail: "/assets/images/projects/editor.png",
    images: [
      "/assets/images/projects/editor.png",
    ],
  },
  {
    id: "06",
    title: "Boarding House Management System",
    category: "Web Application",
    platform: "web",
    description:
      "Engineered a tenant and billing management platform using ASP.NET & MySQL to automate payments and reports.",
    tech: "ASP.NET · MySQL",
    color: "#512bd4",
    thumbnail: "/assets/images/projects/404.png",
    images: [
      "/assets/images/projects/404.png",
    ],
  },
  {
    id: "07",
    title: "Document Management System",
    category: "Web Application",
    platform: "web",
    description:
      "Developed in ASP.NET & MySQL, enabling secure file storage, quick retrieval, and role-based access control.",
    tech: "ASP.NET · MySQL",
    color: "#512bd4",
    thumbnail: "/assets/images/projects/404.png",
    images: [
      "/assets/images/projects/404.png",
    ],
  },

  // ── Desktop Applications ──
  {
    id: "08",
    title: "Hotel Reservation System",
    category: "Desktop Application",
    platform: "desktop",
    description:
      "Designed with VB.NET & MySQL, automating bookings, payments, and room availability management.",
    tech: "VB.NET · MySQL",
    color: "#00d4ff",
    thumbnail: "/assets/images/projects/404.png",
    images: [
      "/assets/images/projects/404.png",
    ],
  },
  {
    id: "09",
    title: "POS and Inventory System",
    category: "Desktop Application",
    platform: "desktop",
    description:
      "Built in VB.NET & MySQL, optimizing sales processing, inventory tracking, and generating real-time reports.",
    tech: "VB.NET · MySQL",
    color: "#0078d4",
    thumbnail: "/assets/images/projects/404.png",
    images: [
      "/assets/images/projects/404.png",
    ],
  },

  // ── UI/UX Design ──
  {
    id: "10",
    title: "FARMURA",
    category: "UI/UX Design",
    platform: "design",
    description:
      "Designed a community-driven digital platform focused on accessibility, trust, and user-centered experiences for agricultural stakeholders.",
    tech: "Figma",
    color: "#a259ff",
    thumbnail: "/assets/images/projects/FARMURA/FARMURA-thumbnail.png",
    images: [
      "/assets/images/projects/FARMURA/FARMURA-thumbnail.png",
      "/assets/images/projects/FARMURA/Home.png",
      "/assets/images/projects/FARMURA/Login.png",
      "/assets/images/projects/FARMURA/SIGNUP.png",
      "/assets/images/projects/FARMURA/Services.png",
      "/assets/images/projects/FARMURA/Wallet.png",
    ],
  },
  {
    id: "11",
    title: "Wanderly",
    category: "UI/UX Design",
    platform: "design",
    description:
      "Designed a landing page for a travel app using Figma.",
    tech: "Figma",
    color: "#f24e1e",
    thumbnail: "/assets/images/projects/Wanderly/Hero.png",
    images: [
      "/assets/images/projects/Wanderly/Hero.png",
      "/assets/images/projects/Wanderly/Section-1.png",
      "/assets/images/projects/Wanderly/Section.png",
    ],
  },
  {
    id: "12",
    title: "Wine Price Edge Solutions",
    category: "UI/UX Design",
    platform: "design",
    description:
      "Created UI/UX concept for a wine price comparison platform, emphasizing automation, clean design, and data visualization.",
    tech: "Figma",
    color: "#722f37",
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
    id: "13",
    title: "DM Resto",
    category: "UI/UX Design",
    platform: "design",
    description:
      "Redesigned the POS system's interface in Figma to enhance usability, speed, and operator efficiency.",
    tech: "Figma",
    color: "#e67e22",
    thumbnail: "/assets/images/projects/Resto/dmresto.png",
    images: [
      "/assets/images/projects/Resto/dmresto.png",
      "/assets/images/projects/Resto/LANDING PAGE.png",
      "/assets/images/projects/Resto/LOGIN PAGE.png",
      "/assets/images/projects/Resto/DASHBOARD.png",
      "/assets/images/projects/Resto/Menu.jpg",
    ],
  },
  {
    id: "14",
    title: "DateDash App",
    category: "UI/UX Design",
    platform: "design",
    description:
      "Designed mobile-first UI/UX in Figma for a dating app, delivering intuitive flows, wireframes, and prototypes.",
    tech: "Figma",
    color: "#ff6b6b",
    thumbnail: "/assets/images/projects/Datedash/datedash.png",
    images: [
      "/assets/images/projects/Datedash/datedash.png",
      "/assets/images/projects/Datedash/Main 3.png",
      "/assets/images/projects/Datedash/Signup.png",
      "/assets/images/projects/Datedash/Location.png",
      "/assets/images/projects/Datedash/Match.png",
    ],
  },
];

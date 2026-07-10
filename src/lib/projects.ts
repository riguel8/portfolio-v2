export interface Project {
  id: string;
  title: string;
  category: string[];
  platform: "web" | "desktop" | "design" | "graphic";
  description: string;
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
    title: "MyEddesa",
    category: ["Healthcare Website","Ghost Client"],
    platform: "web",
    link: "",
    description: "A telehealth weight management platform connecting users with healthcare professionals for virtual consultations, personalized treatment plans, and progress tracking.",
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
    category: ["Agriculture Website","Project"],
    platform: "web",
    link: "",
    description: "A community-driven digital platform for agricultural stakeholders, featuring services, partnerships, and service areas. (Modified version, not official website)",
    tech: [{ icon: "devicon:react" }, { icon: "devicon:typescript" }, { icon: "devicon:tailwindcss" }, { icon: "devicon:vitejs" }],
    thumbnail: "/assets/images/projects/FARMURA-website/Hero.png",
    images: [
      "/assets/images/projects/FARMURA-website/Hero.png",
      "/assets/images/projects/FARMURA-website/Services.png",
      "/assets/images/projects/FARMURA-website/Partners.png",
      "/assets/images/projects/FARMURA-website/Areas.png",
    ],
  },
  {
    id: "000",
    title: "JB's Creation",
    category: ["Event Decoration Website","Project"],
    platform: "web",
    link: "https://decor-universe.vercel.app",
    description: "A creative event gallery website for showcasing events and experiences. Built with Frontend technologies including React, TypeScript, Tailwind CSS, and Vite.",
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
    title: "LGU Client Satisfaction Measurement(CSM)",
    category: ["Work", "Full-Stack Web Application"],
    platform: "web",
    link: "",
    description: "A web-based feedback collection and analytics platform designed for Philippine Local Government Units (LGUs) to monitor service quality and comply with ARTA mandates.",
    tech: 
        [
          { "icon": "devicon:php" },
          { "icon": "devicon:laravel" },  
          { "icon": "devicon:react" }, 
          { "icon": "devicon:typescript" }, 
          { "icon": "devicon:tailwindcss" }, 
          { "icon": "devicon:mysql" }, 
          { "icon": "devicon:inertiajs"},
        ],
    thumbnail: "/assets/images/projects/LGU/hero.png",
    images: [
      "/assets/images/projects/LGU/hero.png",
      "/assets/images/projects/LGU/survey.png",
      "/assets/images/projects/LGU/survey2.png",
      "/assets/images/projects/LGU/survey3.png",
      "/assets/images/projects/LGU/survey4.png",
      "/assets/images/projects/LGU/metrics.png",
    ],
  },
  {
    id: "01",
    title: "DERU",
    category: ["E-commerce Website", "Project"],
    platform: "web",
    link: "",
    description:
      "A production-ready e-commerce storefront for minimalist shirt collections built with modern web technologies, featuring a complete shopping experience with sophisticated UI/UX.",
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
    category: ["Construction Website", "Project"],
    platform: "web",
    link: "",
    description:
      "A premium construction company website built with modern web technologies, showcasing Philippine localization and premium UI design.",
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
    title: "Maison(AI-Inspired)",
    category: ["E-commerce Website (Frontend)", "Project"],
    platform: "web",
    link: "",
    description:
      "Developed a modern, scalable, and AI-inspired frontend application for an E-commerce platform using React.js, TypeScript, and Tailwind CSS.",
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
    category: ["Admin Dashboard (Frontend)", "Project"],
    platform: "web",
    link: "",
    description:
      "Developed a frontend web application for FARMURA Admin using React.js + TypeScript + Tailwind CSS.",
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
    category: ["Web Application (Fullstack)", "Project"],
    platform: "web",
    link: "",
    description:
      "Built a CodeIgniter & MySQL web system supporting digital journal publication, content workflows, and user management.",
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
    category: ["Capstone Project"],
    platform: "web",
    link: "",
    description:
      "Designed and deployed in Laravel & MySQL, streamlining patient scheduling, records, and clinic operations.",
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
    category: ["Web Application", "Work"],
    platform: "web",
    link: "",
    description:
      "Implemented with Vue.js & MySQL, featuring advanced tools (lasso, poly-lasso, brush) for real-time interactive image editing.",
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
    category: ["Web Application", "Project"],
    platform: "web",
    link: "",
    description:
      "Engineered a tenant and billing management platform using ASP.NET & MySQL to automate payments and reports.",
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
    category: ["Web Application", "Project"],
    platform: "web",
    link: "",
    description:
      "Developed in ASP.NET & MySQL, enabling secure file storage, quick retrieval, and role-based access control.",
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
    category: ["Desktop Application", "Project"],
    platform: "desktop",
    link: "",
    description:
      "Designed with VB.NET & MySQL, automating bookings, payments, and room availability management.",
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
    category: ["Desktop Application", "Project"],
    platform: "desktop",
    link: "",
    description:
      "Built in VB.NET & MySQL, optimizing sales processing, inventory tracking, and generating real-time reports.",
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
    category: ["UI Design", "Project"],
    platform: "design",
    link: "",
    description:
      "Epione is a mobile app that provides a safe, anonymous, and accessible space for students to seek support, guidance, and mental health resources.",
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
    title: "LGU Client Satisfaction Measurement - Wireframe",
    category: ["UX Design", "Project", "Wireframe"],
    platform: "design",
    link: "https://www.figma.com/design/OtNZIFte4J6p1VibyR6Wcb/LGU-CSM?node-id=0-1&t=anabjIPU9BAcR8Q3-1",
    description:
      "Designed a community-driven digital platform focused on accessibility, trust, and user-centered experiences for agricultural stakeholders.",
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
    title: "Epione Landing Page - Mental Health Service",
    category: ["UI Design", "Project"],
    platform: "design",
    link: "https://www.figma.com/design/z0JFODxXpVyLC5oY3FTv3O/Epione-Landing-Page?node-id=3-2&t=H7bGjq1zjuXf4ISs-1",
    description:
      "Designed a landing page UI for Epione, a mental health service platform, focusing on user experience and accessibility.",
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
    title: "FARMURA - Super App",
    category: ["UI/UX Design", "Work"],
    platform: "design",
    link: "",
    description:
      "Designed a community-driven digital platform focused on accessibility, trust, and user-centered experiences for agricultural stakeholders.",
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
    category: ["UI Design", "Project"],
    platform: "design",
    link: "https://www.figma.com/design/mG5mc4sgmxZv2qExdqujop/Wanderly?node-id=0-1&p=f&t=FuXWoWQDMSUCn6cu-0",
    description:
      "Designed a landing page UI for a travel app using Figma.",
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
    category: ["UI/UX Design", "Work"],
    platform: "design",
    link: "https://www.figma.com/design/UKhhkqyYvLsDniZqskzdHK/Wine-App?node-id=1-1446&p=f&t=m9UNwTWPuaFvWSw0-0",
    description:
      "Created UI/UX concept for a wine price comparison platform, emphasizing automation, clean design, and data visualization.",
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
    category: ["UI/UX Design", "Project"],
    platform: "design",
    link: "https://www.figma.com/design/O8ta1Cgja5nEQCKBNeHoVN/DM-Resto?node-id=1-1201&p=f&t=POhLUAOyTDRIjXAy-0",
    description:
      "Redesigned the POS system's interface in Figma to enhance usability, speed, and operator efficiency.",
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
    category: ["UI/UX Design", "Project"],
    platform: "design",
    link: "https://www.figma.com/design/EzC614eVRUmXeG14LJRPHy/DateDash?node-id=0-1&p=f&t=Skwi4D7FCJOYEQLa-0",
    description:
      "Designed mobile-first UI/UX in Figma for a dating app, delivering intuitive flows, wireframes, and prototypes.",
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
    category: ["Project", "Work"],
    platform: "graphic",
    link: "",
    description:
      "Created graphic designs for LGU job posting, including social media graphics.",
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

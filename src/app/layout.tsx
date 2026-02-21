import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import LenisProvider from "@/providers/lenis-provider";
import GsapProvider from "@/providers/gsap-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://riguel.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ruel Miguel Diaz — Web & Software Developer | UI/UX Designer",
    template: "%s | Ruel Miguel Diaz",
  },
  description:
    "Portfolio of Ruel Miguel Diaz — a web & software developer and UI/UX designer with hands-on experience in front-end, back-end, database management, and UI/UX design.",
  keywords: [
    "Ruel Miguel Diaz",
    "Web Developer",
    "Software Developer",
    "UI/UX Designer",
    "Portfolio",
    "React",
    "Next.js",
    "TypeScript",
    "Frontend Developer",
    "Full Stack Developer",
  ],
  authors: [{ name: "Ruel Miguel Diaz", url: siteUrl }],
  creator: "Ruel Miguel Diaz",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Ruel Miguel Diaz — Portfolio",
    title: "Ruel Miguel Diaz — Web & Software Developer | UI/UX Designer",
    description:
      "Portfolio of Ruel Miguel Diaz — a web & software developer and UI/UX designer with hands-on experience in front-end, back-end, database management, and UI/UX design.",
    images: [
      {
        url: "/assets/images/cover.png",
        width: 1200,
        height: 630,
        alt: "Ruel Miguel Diaz — Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ruel Miguel Diaz — Web & Software Developer | UI/UX Designer",
    description:
      "Portfolio of Ruel Miguel Diaz — a web & software developer and UI/UX designer.",
    images: ["/assets/images/cover.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/assets/images/2x2.png",
    apple: "/assets/images/2x2.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LenisProvider>
          <GsapProvider>{children}</GsapProvider>
        </LenisProvider>
      </body>
    </html>
  );
}

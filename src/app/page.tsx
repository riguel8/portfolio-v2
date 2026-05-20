import Navbar from "@/components/navbar";
import CustomCursor from "@/components/custom-cursor";
import HashScrollHandler from "@/components/hash-scroll-handler";
import Hero from "@/components/sections/hero";
import HorizontalGallery from "@/components/sections/horizontal-gallery";
import About from "@/components/sections/about";
import Certificates from "@/components/sections/certificates";
import Contact from "@/components/sections/contact";
import { Analytics } from "@vercel/analytics/next"

export default function Home() {
  return (
    <>
      <CustomCursor />
      <HashScrollHandler />
      <Navbar />
      <main id="main-content">
        <Hero />
        <HorizontalGallery />
        <About />
        <Certificates />
        <Contact />
      </main>
      <Analytics />
    </>
  );
}

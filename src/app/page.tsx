import Navbar from "@/components/navbar";
import CustomCursor from "@/components/custom-cursor";
import Hero from "@/components/sections/hero";
import HorizontalGallery from "@/components/sections/horizontal-gallery";
// import ParallaxImages from "@/components/sections/parallax-images";
import About from "@/components/sections/about";
import Certificates from "@/components/sections/certificates";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <HorizontalGallery />
        {/* <ParallaxImages /> */}
        <About />
        <Certificates />
        <Contact />
      </main>
    </>
  );
}

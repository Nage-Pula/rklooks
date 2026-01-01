import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Pricing from "@/components/sections/Pricing";
import Footer from "@/components/sections/Footer";
import ContactUs from "@/components/sections/ContactUs";
import Gallery from "@/components/sections/Gallery";
import Location from "@/components/sections/Location";

export default function Home() {
  return (
    <main className="min-h-screen space-y-4 sm:space-y-8">
      <Hero />

      <Services />
      <Gallery />
      <Pricing />
      <Location />
      <ContactUs />
      <Footer />
    </main>
  );
}

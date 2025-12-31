import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Pricing from "@/components/sections/Pricing";
import Footer from "@/components/sections/Footer";
import ContactUs from "@/components/sections/ContactUs";
import ClientSections from "@/components/layout/ClientSections";

export default function Home() {
  return (
    <main className="min-h-screen space-y-4 sm:space-y-8">
      <Hero />
      <Services />

      {/* Lazy-loaded heavy sections */}
      <ClientSections />

      <Pricing />
      <ContactUs />
      <Footer />
    </main>
  );
}

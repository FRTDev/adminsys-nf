
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/shared/Footer";
import { BtsHero } from "@/components/bts/BtsHero";
import { SpecialtiesSection } from "@/components/bts/SpecialtiesSection";
import { ProgramSection } from "@/components/bts/ProgramSection";

const BtsSio = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <BtsHero />

      {/* Specialties Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SpecialtiesSection />
          <ProgramSection />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BtsSio;

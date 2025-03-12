
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/shared/Footer";
import { HeroSection } from "@/components/veille/HeroSection";
import { VeilleContent } from "@/components/veille/VeilleContent";

const Veille = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <HeroSection />

      {/* Content Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <VeilleContent />
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Veille;

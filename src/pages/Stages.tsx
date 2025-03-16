
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/shared/Footer";
import { StagesHero } from "@/components/stages/StagesHero";
import StagesContent from "@/components/stages/StagesContent";

const Stages = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <StagesHero />

      {/* Content Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <StagesContent />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Stages;

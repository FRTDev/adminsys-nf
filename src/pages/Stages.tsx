
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/shared/Footer";
import StagesContent from "@/components/stages/StagesContent";

const Stages = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Main Content */}
      <div className="container mx-auto px-4 pt-20 pb-10">
        <StagesContent />
      </div>

      <Footer />
    </div>
  );
};

export default Stages;

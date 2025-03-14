
import Navigation from "@/components/Navigation";
import Footer from "@/components/shared/Footer";
import StagesContent from "@/components/stages/StagesContent";

const Stages = () => {
  return (
    <div className="min-h-screen bg-background bg-gradient-to-br from-background to-background/70">
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


import Navigation from "@/components/Navigation";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import SkillsSection from "@/components/home/SkillsSection";
import CertificationsSection from "@/components/home/CertificationsSection";
import TimelineSection from "@/components/home/TimelineSection";
import Footer from "@/components/shared/Footer";
import { certifications, education, professionalExperience } from "@/data/resumeData";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Main Content */}
      <div className="container mx-auto px-4 pt-20">
        {/* Hero and About Section */}
        <div className="flex flex-col lg:flex-row gap-8 mb-16">
          <HeroSection />
          <AboutSection />
        </div>

        {/* Skills Section */}
        <div className="mb-16 animate-fadeIn">
          <SkillsSection />
        </div>

        {/* Certifications Section */}
        <CertificationsSection certifications={certifications} />

        {/* Education & Experience Section */}
        <TimelineSection 
          education={education} 
          professionalExperience={professionalExperience} 
        />
      </div>

      <Footer />
    </div>
  );
};

export default Index;

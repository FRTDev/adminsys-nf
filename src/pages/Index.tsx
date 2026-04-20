import PageLayout from "@/components/shared/PageLayout";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import SkillsSection from "@/components/home/SkillsSection";
import CertificationsSection from "@/components/home/CertificationsSection";
import TimelineSection from "@/components/home/TimelineSection";
import { Reveal } from "@/components/shared/Reveal";
import { certifications, education, professionalExperience } from "@/data/resumeData";

const Index = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 pt-24 pb-10 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-6 mb-16">
          <HeroSection />
          <AboutSection />
        </div>

        <Reveal>
          <div className="mb-16 glass p-6 sm:p-8 rounded-2xl">
            <SkillsSection />
          </div>
        </Reveal>

        <Reveal>
          <div className="mb-16 glass p-6 sm:p-8 rounded-2xl">
            <CertificationsSection certifications={certifications} />
          </div>
        </Reveal>

        <Reveal>
          <div className="glass p-6 sm:p-8 rounded-2xl">
            <TimelineSection
              education={education}
              professionalExperience={professionalExperience}
            />
          </div>
        </Reveal>
      </div>
    </PageLayout>
  );
};

export default Index;

import PageLayout from "@/components/shared/PageLayout";
import { PageHero } from "@/components/shared/PageHero";
import { Briefcase } from "lucide-react";
import StagesContent from "@/components/stages/StagesContent";

const Stages = () => {
  return (
    <PageLayout>
      <PageHero
        icon={<Briefcase />}
        title="Mes Stages"
        subtitle="Découvrez mon parcours professionnel à travers les stages que j'ai effectués durant ma formation, les compétences acquises et les projets réalisés."
      />
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <StagesContent />
        </div>
      </section>
    </PageLayout>
  );
};

export default Stages;

import { useEffect } from "react";
import PageLayout from "@/components/shared/PageLayout";
import { PageHero } from "@/components/shared/PageHero";
import { BookText } from "lucide-react";
import SituationsContent from "@/components/situations/SituationsContent";

const SituationsProfessionnelles = () => {
  useEffect(() => {
    document.title = "Situations Professionnelles | Portfolio";
  }, []);

  return (
    <PageLayout>
      <PageHero
        icon={<BookText />}
        title="Situations Professionnelles"
        subtitle="Documentation des situations professionnelles réalisées durant ma formation BTS SIO. Ces travaux illustrent les compétences techniques acquises et les projets concrets réalisés."
      />
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SituationsContent />
        </div>
      </section>
    </PageLayout>
  );
};

export default SituationsProfessionnelles;

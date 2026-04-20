import { useEffect } from "react";
import PageLayout from "@/components/shared/PageLayout";
import { PageHero } from "@/components/shared/PageHero";
import { Kanban } from "lucide-react";
import { ModeProjetContent } from "@/components/projet/ModeProjetContent";

const ModeProjet = () => {
  useEffect(() => {
    document.title = "Mode Projet | Portfolio";
  }, []);

  return (
    <PageLayout>
      <PageHero
        icon={<Kanban />}
        title="Mode Projet"
        subtitle="Découvrez ma méthodologie de travail en mode projet, l'utilisation d'outils comme Trello et l'application des méthodes agiles pour une gestion efficace des tâches."
      />
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ModeProjetContent />
        </div>
      </section>
    </PageLayout>
  );
};

export default ModeProjet;

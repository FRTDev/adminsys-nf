import PageLayout from "@/components/shared/PageLayout";
import { PageHero } from "@/components/shared/PageHero";
import { Shield } from "lucide-react";
import { VeilleContent } from "@/components/veille/VeilleContent";

const Veille = () => {
  return (
    <PageLayout>
      <PageHero
        icon={<Shield />}
        title="Guide de Veille Technologique"
        subtitle="Un guide complet pour suivre et comprendre les vulnérabilités récentes et méthodes d'attaque en cybersécurité"
      />
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <VeilleContent />
        </div>
      </section>
    </PageLayout>
  );
};

export default Veille;

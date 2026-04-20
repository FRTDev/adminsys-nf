import PageLayout from "@/components/shared/PageLayout";
import { PageHero } from "@/components/shared/PageHero";
import { GraduationCap } from "lucide-react";
import { SpecialtiesSection } from "@/components/bts/SpecialtiesSection";
import { ProgramSection } from "@/components/bts/ProgramSection";
import { Reveal } from "@/components/shared/Reveal";

const BtsSio = () => {
  return (
    <PageLayout>
      <PageHero
        icon={<GraduationCap />}
        title="BTS SIO"
        subtitle="Le BTS Services Informatiques aux Organisations est un diplôme reconnu par l'état de niveau Bac+2. Il propose deux spécialités distinctes : SISR et SLAM."
      />

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto glass p-6 sm:p-10 rounded-2xl">
          <Reveal>
            <SpecialtiesSection />
          </Reveal>
          <div className="border-t border-white/10 my-12" />
          <Reveal>
            <ProgramSection />
          </Reveal>
        </div>
      </section>
    </PageLayout>
  );
};

export default BtsSio;

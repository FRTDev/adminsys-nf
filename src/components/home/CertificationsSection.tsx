import { Award, Download } from "lucide-react";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { Card } from "@/components/shared/Card";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/Reveal";

type Certification = {
  name: string;
  date: string;
  description: string;
  attestationPath: string | null;
};

interface CertificationsSectionProps {
  certifications: Certification[];
}

const CertificationsSection = ({ certifications }: CertificationsSectionProps) => {
  return (
    <div>
      <SectionTitle icon={<Award className="w-6 h-6 text-foreground" />} title="Certifications" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {certifications.map((cert, index) => {
          const obtained = !!cert.attestationPath;
          return (
            <Reveal key={index} delay={index * 80}>
              <Card variant="interactive" className="h-full">
                <div className="flex flex-col h-full">
                  <div className="flex items-center mb-3 gap-2">
                    <span
                      className={
                        "w-2 h-2 rounded-full " +
                        (obtained ? "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]" : "bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.5)]")
                      }
                    />
                    <h3 className="text-lg font-semibold text-foreground tracking-tight">{cert.name}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2 italic">{cert.date}</p>
                  <p className="text-base text-muted-foreground mb-4 leading-relaxed">{cert.description}</p>

                  <div className="mt-auto">
                    {obtained ? (
                      <Button
                        variant="outline"
                        size="sm"
                        className="btn-shine border border-white/15 bg-white/5 hover:bg-white/10 hover:border-brand/40 transition-all"
                        onClick={() => window.open(cert.attestationPath as string, "_blank")}
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Télécharger l'attestation
                      </Button>
                    ) : (
                      <Button
                        variant="outline"
                        size="sm"
                        className="border border-white/10 bg-white/[0.03] text-muted-foreground cursor-not-allowed"
                        disabled
                      >
                        <Download className="mr-2 h-4 w-4" />
                        En cours...
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
};

export default CertificationsSection;


import { Award } from "lucide-react";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { Card } from "@/components/shared/Card";

type Certification = {
  name: string;
  date: string;
  description: string;
};

interface CertificationsSectionProps {
  certifications: Certification[];
}

const CertificationsSection = ({ certifications }: CertificationsSectionProps) => {
  return (
    <div className="mb-16 animate-fadeIn">
      <div className="glass p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <SectionTitle icon={<Award className="w-6 h-6 text-white" />} title="Certifications" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <Card 
              key={index}
              delay={index * 150}
              className="h-full"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center mb-3">
                  <div className="w-2 h-2 rounded-full bg-white/60 mr-2"></div>
                  <h3 className="text-xl font-semibold text-white">{cert.name}</h3>
                </div>
                <p className="text-sm text-gray-400 mb-3 italic">{cert.date}</p>
                <p className="text-base text-gray-300 mt-auto">{cert.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificationsSection;

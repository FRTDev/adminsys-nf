
import { Award } from "lucide-react";

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
      <div className="glass p-8 rounded-lg">
        <div className="flex items-center mb-6">
          <Award className="w-6 h-6 text-white mr-3" />
          <h2 className="text-2xl font-bold text-white">Certifications</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certifications.map((cert, index) => (
            <div key={index} className="glass p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-white">{cert.name}</h3>
              <p className="text-sm text-gray-400">{cert.date}</p>
              <p className="text-gray-300 mt-2">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificationsSection;

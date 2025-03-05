
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
      <div className="glass p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center mb-6">
          <Award className="w-6 h-6 text-white mr-3" />
          <h2 className="text-3xl font-bold text-white bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Certifications</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className="glass p-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-white/15 border border-white/10"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center mb-3">
                  <div className="w-2 h-2 rounded-full bg-white/60 mr-2"></div>
                  <h3 className="text-xl font-semibold text-white">{cert.name}</h3>
                </div>
                <p className="text-sm text-gray-400 mb-3 italic">{cert.date}</p>
                <p className="text-base text-gray-300 mt-auto">{cert.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificationsSection;

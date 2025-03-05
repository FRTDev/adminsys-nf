
import { GraduationCap, Briefcase } from "lucide-react";

type Education = {
  title: string;
  institution: string;
  period: string;
  description: string;
};

type ProfessionalExperience = {
  title: string;
  period: string;
  description: string;
};

interface TimelineSectionProps {
  education: Education[];
  professionalExperience: ProfessionalExperience[];
}

const TimelineSection = ({ education, professionalExperience }: TimelineSectionProps) => {
  return (
    <div className="mb-16 animate-fadeIn">
      <div className="glass p-8 rounded-lg">
        <div className="flex items-center mb-6">
          <GraduationCap className="w-6 h-6 text-white mr-3" />
          <h2 className="text-2xl font-bold text-white">Parcours</h2>
        </div>
        
        <div className="relative space-y-8">
          {/* Timeline */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-white/20" />

          {/* Education Section */}
          <div className="relative ml-16">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <GraduationCap className="w-5 h-5" />
              Formation
            </h3>
          </div>

          {education.map((edu, index) => (
            <div key={index} className="relative ml-16 animate-fadeIn" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="absolute -left-20 top-3 w-4 h-4 rounded-full bg-white/20 border-2 border-white/40" />
              <div className="glass p-4 rounded-lg">
                <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                  <GraduationCap className="w-4 h-4" />
                  {edu.title}
                </h4>
                <p className="text-sm text-gray-400">{edu.institution} | {edu.period}</p>
                <p className="text-gray-300 mt-2">{edu.description}</p>
              </div>
            </div>
          ))}

          {/* Experience Section */}
          <div className="relative ml-16 mt-12">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <Briefcase className="w-5 h-5" />
              Expérience Professionnelle
            </h3>
          </div>

          {professionalExperience.map((exp, index) => (
            <div key={index} className="relative ml-16 animate-fadeIn" style={{ animationDelay: `${(education.length + index) * 100}ms` }}>
              <div className="absolute -left-20 top-3 w-4 h-4 rounded-full bg-white/20 border-2 border-white/40" />
              <div className="glass p-4 rounded-lg">
                <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                  <Briefcase className="w-4 h-4" />
                  {exp.title}
                </h4>
                <p className="text-sm text-gray-400">{exp.period}</p>
                <p className="text-gray-300 mt-2">{exp.description}</p>
              </div>
            </div>
          ))}

          <p className="text-gray-400 mt-8 text-center relative z-10">
            Pour voir tous mes jobs étudiants, consultez mon profil{" "}
            <a
              href="https://www.linkedin.com/in/noah-f-b3a500265/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TimelineSection;

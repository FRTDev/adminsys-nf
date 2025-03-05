
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
      <div className="glass p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-white/10">
        <div className="flex items-center mb-6">
          <GraduationCap className="w-6 h-6 text-white mr-3" />
          <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Parcours</h2>
        </div>
        
        <div className="relative space-y-8">
          {/* Timeline */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-white/40 via-white/20 to-white/5" />

          {/* Education Section */}
          <div className="relative ml-16">
            <h3 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
              <GraduationCap className="w-5 h-5" />
              Formation
            </h3>
          </div>

          {education.map((edu, index) => (
            <div 
              key={index} 
              className="relative ml-16 animate-fadeIn" 
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="absolute -left-20 top-3 w-4 h-4 rounded-full bg-white/20 border-2 border-white/40 z-10 shadow-[0_0_10px_rgba(255,255,255,0.3)]" />
              <div className="glass p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:bg-white/15 border border-white/10">
                <h4 className="text-xl font-semibold text-white flex items-center gap-2">
                  <GraduationCap className="w-4 h-4" />
                  {edu.title}
                </h4>
                <p className="text-sm text-gray-400 italic">{edu.institution} | {edu.period}</p>
                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-3"></div>
                <p className="text-base text-gray-300">{edu.description}</p>
              </div>
            </div>
          ))}

          {/* Experience Section */}
          <div className="relative ml-16 mt-12">
            <h3 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
              <Briefcase className="w-5 h-5" />
              Expérience Professionnelle
            </h3>
          </div>

          {professionalExperience.map((exp, index) => (
            <div 
              key={index} 
              className="relative ml-16 animate-fadeIn" 
              style={{ animationDelay: `${(education.length + index) * 150}ms` }}
            >
              <div className="absolute -left-20 top-3 w-4 h-4 rounded-full bg-white/20 border-2 border-white/40 z-10 shadow-[0_0_10px_rgba(255,255,255,0.3)]" />
              <div className="glass p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:bg-white/15 border border-white/10">
                <h4 className="text-xl font-semibold text-white flex items-center gap-2">
                  <Briefcase className="w-4 h-4" />
                  {exp.title}
                </h4>
                <p className="text-sm text-gray-400 italic">{exp.period}</p>
                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-3"></div>
                <p className="text-base text-gray-300">{exp.description}</p>
              </div>
            </div>
          ))}

          <p className="text-base text-gray-400 mt-8 text-center relative z-10">
            Pour voir tous mes jobs étudiants, consultez mon profil{" "}
            <a
              href="https://www.linkedin.com/in/noah-f-b3a500265/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline transition-colors duration-300"
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

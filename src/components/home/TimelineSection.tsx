import { GraduationCap, Briefcase } from "lucide-react";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { TimelineItem } from "./TimelineItem";

type Education = {
  title: string;
  institution: string;
  period: string;
  description: string;
  link?: string;
};

type ProfessionalExperience = {
  title: string;
  period: string;
  description: string;
  link?: string;
};

interface TimelineSectionProps {
  education: Education[];
  professionalExperience: ProfessionalExperience[];
}

const TimelineSection = ({ education, professionalExperience }: TimelineSectionProps) => {
  return (
    <div className="mb-16 animate-fadeIn">
      <div className="glass p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-white/10">
        <SectionTitle icon={<GraduationCap className="w-6 h-6 text-white" />} title="Parcours" />
        
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
            <TimelineItem 
              key={index}
              icon={<GraduationCap className="w-4 h-4" />}
              title={edu.title}
              subtitle={`${edu.institution} | ${edu.period}`}
              description={edu.description}
              delay={index * 150}
              link={edu.link}
            />
          ))}

          {/* Experience Section */}
          <div className="relative ml-16 mt-12">
            <h3 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
              <Briefcase className="w-5 h-5" />
              Expérience Professionnelle
            </h3>
          </div>

          {professionalExperience.map((exp, index) => (
            <TimelineItem 
              key={index}
              icon={<Briefcase className="w-4 h-4" />}
              title={exp.title}
              subtitle={exp.period}
              description={exp.description}
              delay={(education.length + index) * 150}
              link={exp.link}
            />
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

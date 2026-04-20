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
    <div>
      <SectionTitle icon={<GraduationCap className="w-6 h-6 text-foreground" />} title="Parcours" />

      <div className="relative space-y-8">
        <div className="absolute left-8 top-2 bottom-2 w-px bg-gradient-to-b from-brand/40 via-white/10 to-transparent" />

        <div className="relative ml-16">
          <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-2 flex items-center gap-2 tracking-tight">
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
            delay={index * 100}
            link={edu.link}
          />
        ))}

        <div className="relative ml-16 pt-8">
          <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-2 flex items-center gap-2 tracking-tight">
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
            delay={index * 100}
            link={exp.link}
          />
        ))}

        <p className="text-base text-muted-foreground mt-10 text-center relative z-10">
          Pour voir tous mes jobs étudiants, consultez mon profil{" "}
          <a
            href="https://www.linkedin.com/in/noah-f-b3a500265/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-brand underline-offset-4 hover:underline transition-colors duration-300"
          >
            LinkedIn
          </a>
        </p>
      </div>
    </div>
  );
};

export default TimelineSection;

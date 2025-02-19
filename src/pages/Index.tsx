
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import SkillsSection from "@/components/home/SkillsSection";
import Footer from "@/components/shared/Footer";
import { Award, GraduationCap, Briefcase } from "lucide-react";

const Index = () => {
  const certifications = [
    {
      name: "SECNUM Académie - Mooc de l'ANSSI",
      date: "Octobre 2023",
      description: "Formation en cybersécurité dispensée par l'ANSSI"
    },
    {
      name: "Cisco - CCNAv7 : Introduction aux réseaux",
      date: "Mai 2024",
      description: "Formation aux fondamentaux des réseaux"
    },
    {
      name: "Cisco - English for IT 1",
      date: "Novembre 2024",
      description: "Formation en anglais technique pour l'informatique"
    },
    {
      name: "Cisco - Ethical Hacker",
      date: "En cours",
      description: "Formation aux techniques de hacking éthique"
    }
  ];

  const education = [
    {
      title: "DEC en Techniques de l'informatique (Projet)",
      institution: "Cégep La Pocatière, Québec",
      period: "2025 - 2026",
      description: "Projet d'études au Québec pour approfondir mes connaissances en informatique. Formation intensive axée sur les nouvelles technologies, l'administration système et la sécurité informatique. Une opportunité d'enrichir mon parcours dans un contexte international."
    },
    {
      title: "BTS SIO SISR",
      institution: "Lycée Paul-Louis Courier, France",
      period: "2023 - 2025",
      description: "Formation spécialisée en administration des systèmes et réseaux. Acquisition de compétences en gestion d'infrastructure, sécurisation des réseaux, virtualisation et mise en place de solutions d'hébergement."
    },
    {
      title: "Baccalauréat STI2D",
      institution: "Lycée Grandmont, France",
      period: "2020 - 2023",
      description: "Formation technologique avec spécialisation en systèmes d'information et numérique. Développement des compétences fondamentales en informatique et découverte des technologies innovantes."
    }
  ];

  const professionalExperience = [
    {
      title: "Stage - Audilab Ressource",
      period: "Janvier 2025 - Février 2025",
      description: "Stage de seconde année BTS orienté infrastructure IT. Participation à la gestion du parc informatique, déploiement de solutions de supervision et maintenance des systèmes d'information."
    },
    {
      title: "Stage - Armatis",
      period: "Mai 2024 - Juin 2024",
      description: "Stage de première année BTS focalisé sur l'administration système. Intervention sur l'infrastructure réseau, gestion des serveurs et support utilisateur dans un environnement professionnel."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Main Content */}
      <div className="container mx-auto px-4 pt-20">
        {/* Hero and About Section */}
        <div className="flex flex-col lg:flex-row gap-8 mb-16">
          <HeroSection />
          <AboutSection />
        </div>

        {/* Skills Section */}
        <div className="mb-16 animate-fadeIn">
          <SkillsSection />
        </div>

        {/* Certifications Section */}
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

        {/* Education & Experience Section */}
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
      </div>

      <Footer />
    </div>
  );
};

export default Index;

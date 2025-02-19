import { Github, Linkedin, Mail, Server, Code, Network, Box, Terminal, Wrench, Monitor, User, GraduationCap, Briefcase, Award } from "lucide-react";
import Navigation from "@/components/Navigation";

const Index = () => {
  const skills = {
    development: ["C#", "PHP", "HTML", "CSS", "Python", "SQL"],
    network: ["Adressage", "Configuration d'interconnexion", "Sécurisation des équipements", "VLAN", "Protocoles de routage"],
    services: ["DNS", "DHCP", "FTP", "Apache", "PHP", "MariaDB", "SSH", "AD", "LDAP"],
    os: ["Windows 10/11", "Linux Debian/Kali Linux", "Windows Server 2019/2022"],
    software: ["Packet Tracer", "Wireshark", "Nmap", "Metasploit"],
    virtualization: ["Nutanix", "VirtualBox", "Hyper-V", "Docker", "VMware"],
    deployment: ["FOG", "Sysprep", "Windows ADK"],
    scripting: ["Batch", "Bash", "PowerShell", "Python"],
    management: ["GLPI", "Zabbix", "Centreon"],
  };

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
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-20">
        <div className="flex flex-col lg:flex-row gap-8 mb-16">
          {/* Left Column - Hero */}
          <div className="lg:w-1/2">
            <div className="glass p-8 rounded-lg animate-fadeIn text-center">
              <div className="mb-8 flex justify-center">
                <div className="w-32 h-32 rounded-full glass flex items-center justify-center">
                  <Code className="w-16 h-16 text-white" />
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Noah F.
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                Étudiant en BTS SIO SISR
              </p>
              <div className="flex justify-center space-x-4">
                <a
                  href="https://www.linkedin.com/in/noah-f-b3a500265/"
                  className="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="mailto:n.froment37@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - About Me */}
          <div className="lg:w-1/2 flex items-center">
            <div className="glass p-8 rounded-lg animate-fadeIn w-full">
              <div className="flex items-center mb-6">
                <User className="w-6 h-6 text-white mr-3" />
                <h2 className="text-2xl font-bold text-white">À propos de moi</h2>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Actuellement en deuxième année de BTS SIO avec une spécialisation en SISR (Solutions d'Infrastructure, Systèmes et Réseaux), 
                je suis passionné par l'administration système et réseau. Mon parcours m'a permis de développer des compétences solides 
                en gestion d'infrastructure IT et en sécurité des systèmes d'information.
              </p>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-16 animate-fadeIn">
          <div className="glass p-8 rounded-lg">
            <div className="flex items-center mb-6">
              <Code className="w-6 h-6 text-white mr-3" />
              <h2 className="text-2xl font-bold text-white">Compétences</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category} className="glass p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    {category === "development" && <Code className="w-4 h-4 text-white mr-2" />}
                    {category === "network" && <Network className="w-4 h-4 text-white mr-2" />}
                    {category === "services" && <Server className="w-4 h-4 text-white mr-2" />}
                    {category === "os" && <Monitor className="w-4 h-4 text-white mr-2" />}
                    {category === "software" && <Wrench className="w-4 h-4 text-white mr-2" />}
                    {category === "virtualization" && <Box className="w-4 h-4 text-white mr-2" />}
                    {category === "deployment" && <Box className="w-4 h-4 text-white mr-2" />}
                    {category === "scripting" && <Terminal className="w-4 h-4 text-white mr-2" />}
                    {category === "management" && <Wrench className="w-4 h-4 text-white mr-2" />}
                    <h3 className="text-sm font-semibold text-white">
                      {category === "os" && "Systèmes d'exploitation"}
                      {category === "development" && "Développement"}
                      {category === "network" && "Réseau"}
                      {category === "services" && "Services"}
                      {category === "software" && "Logiciels"}
                      {category === "virtualization" && "Virtualisation"}
                      {category === "deployment" && "Déploiement de postes"}
                      {category === "scripting" && "Scripting"}
                      {category === "management" && "Gestion de parc et incidents"}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {skillList.map((skill) => (
                      <span key={skill} className="px-2 py-1 bg-white/10 rounded-full text-xs text-gray-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
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
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-white/20" />

              {/* Formation Title */}
              <div className="relative ml-16">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5" />
                  Formation
                </h3>
              </div>

              {/* Timeline items - Formation */}
              {education.map((edu, index) => (
                <div key={index} className="relative ml-16 animate-fadeIn" style={{ animationDelay: `${index * 100}ms` }}>
                  {/* Timeline dot */}
                  <div className="absolute -left-20 top-3 w-4 h-4 rounded-full bg-white/20 border-2 border-white/40" />
                  {/* Timeline content */}
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

              {/* Experience Title with extra margin */}
              <div className="relative ml-16 mt-12">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <Briefcase className="w-5 h-5" />
                  Expérience Professionnelle
                </h3>
              </div>

              {/* Timeline items - Professional Experience */}
              {professionalExperience.map((exp, index) => (
                <div key={index} className="relative ml-16 animate-fadeIn" style={{ animationDelay: `${(education.length + index) * 100}ms` }}>
                  {/* Timeline dot */}
                  <div className="absolute -left-20 top-3 w-4 h-4 rounded-full bg-white/20 border-2 border-white/40" />
                  {/* Timeline content */}
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

      {/* Footer */}
      <footer className="glass-dark py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.linkedin.com/in/noah-f-b3a500265/"
              className="text-gray-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:n.froment37@gmail.com"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <div className="mt-4 text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Portfolio. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

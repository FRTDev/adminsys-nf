
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
      date: "2024",
      description: "Formation en cybersécurité dispensée par l'ANSSI"
    },
    {
      name: "Cisco - CyberSecurity Essentials",
      date: "2023",
      description: "Fondamentaux de la cybersécurité"
    }
  ];

  const education = [
    {
      title: "BTS SIO SISR",
      institution: "Lycée Sainte Marguerite, Tours",
      period: "2022 - 2024",
      description: "Formation en solutions d'infrastructure, systèmes et réseaux"
    },
    {
      title: "Bac Pro SN RISC",
      institution: "Lycée Sainte Marguerite, Tours",
      period: "2019 - 2022",
      description: "Formation en systèmes numériques option réseaux informatiques et systèmes communicants"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-20">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column */}
          <div className="lg:w-1/2 space-y-8">
            {/* About Me Section */}
            <div className="glass p-8 rounded-lg animate-fadeIn">
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

            {/* Skills Section */}
            <div className="glass p-8 rounded-lg animate-fadeIn">
              <div className="flex items-center mb-6">
                <Code className="w-6 h-6 text-white mr-3" />
                <h2 className="text-2xl font-bold text-white">Compétences</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

            {/* Certifications Section */}
            <div className="glass p-8 rounded-lg animate-fadeIn">
              <div className="flex items-center mb-6">
                <Award className="w-6 h-6 text-white mr-3" />
                <h2 className="text-2xl font-bold text-white">Certifications</h2>
              </div>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="glass p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-white">{cert.name}</h3>
                    <p className="text-sm text-gray-400">{cert.date}</p>
                    <p className="text-gray-300 mt-2">{cert.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education & Experience Section */}
            <div className="glass p-8 rounded-lg animate-fadeIn mb-8">
              <div className="flex items-center mb-6">
                <GraduationCap className="w-6 h-6 text-white mr-3" />
                <h2 className="text-2xl font-bold text-white">Parcours</h2>
              </div>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="glass p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-white">{edu.title}</h3>
                    <p className="text-sm text-gray-400">{edu.institution} | {edu.period}</p>
                    <p className="text-gray-300 mt-2">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Hero Section */}
          <div className="lg:w-1/2 lg:sticky lg:top-24 h-fit">
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
        </div>
      </div>

      {/* Footer */}
      <footer className="glass-dark py-8 mt-16">
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

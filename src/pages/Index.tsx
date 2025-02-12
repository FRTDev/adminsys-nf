
import { Github, Linkedin, Mail, Server, Code, Network, Box, Terminal, Wrench, Monitor, User } from "lucide-react";
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

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-10 px-4 sm:px-6 lg:px-8 animate-fadeIn">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="mb-8 flex justify-center">
              <div className="w-24 h-24 rounded-full glass flex items-center justify-center">
                <Code className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Noah F.
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Étudiant en BTS SIO SISR
            </p>
          </div>
        </div>
      </section>

      {/* Presentation Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="glass p-8 rounded-lg">
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
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Compétences
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <div key={category} className="glass p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  {category === "development" && <Code className="w-6 h-6 text-white mr-2" />}
                  {category === "network" && <Network className="w-6 h-6 text-white mr-2" />}
                  {category === "services" && <Server className="w-6 h-6 text-white mr-2" />}
                  {category === "os" && <Monitor className="w-6 h-6 text-white mr-2" />}
                  {category === "software" && <Wrench className="w-6 h-6 text-white mr-2" />}
                  {category === "virtualization" && <Box className="w-6 h-6 text-white mr-2" />}
                  {category === "deployment" && <Box className="w-6 h-6 text-white mr-2" />}
                  {category === "scripting" && <Terminal className="w-6 h-6 text-white mr-2" />}
                  {category === "management" && <Wrench className="w-6 h-6 text-white mr-2" />}
                  <h3 className="text-xl font-semibold text-white">
                    {index + 1} - {category === "os" && "Systèmes d'exploitation"}
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
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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

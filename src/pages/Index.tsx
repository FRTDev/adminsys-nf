
import { Github, Linkedin, Mail, Server, Code, Network, Box, Terminal, Wrench, Monitor, User } from "lucide-react";
import Navigation from "@/components/Navigation";

const Index = () => {
  const skills = {
    development: ["C#", "PHP", "HTML", "CSS", "Python", "SQL"],
    network: ["Adressage", "Configuration interconnexion"],
    services: ["DNS", "DHCP", "FTP", "WEB (Apache, PHP, MariaDB)"],
    os: ["Windows 10", "Linux (Kali Linux)", "Windows Server"],
    software: ["Packet Tracer", "Wireshark", "Visio"],
    virtualization: ["Nutanix", "VirtualBox"],
    deployment: ["FOG"],
    scripting: ["Batch", "Bash"],
    management: ["GLPI", "Fusion Inventory"],
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
            {/* Development Skills */}
            <div className="glass p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Code className="w-6 h-6 text-white mr-2" />
                <h3 className="text-xl font-semibold text-white">1 - Développement</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.development.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Network Skills */}
            <div className="glass p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Network className="w-6 h-6 text-white mr-2" />
                <h3 className="text-xl font-semibold text-white">2 - Réseau</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.network.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Services Skills */}
            <div className="glass p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Server className="w-6 h-6 text-white mr-2" />
                <h3 className="text-xl font-semibold text-white">3 - Services</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.services.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* OS Skills */}
            <div className="glass p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Monitor className="w-6 h-6 text-white mr-2" />
                <h3 className="text-xl font-semibold text-white">4 - Systèmes d'exploitation</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.os.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Software Skills */}
            <div className="glass p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Wrench className="w-6 h-6 text-white mr-2" />
                <h3 className="text-xl font-semibold text-white">5 - Logiciels</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.software.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Virtualization */}
            <div className="glass p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Box className="w-6 h-6 text-white mr-2" />
                <h3 className="text-xl font-semibold text-white">6 - Virtualisation</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.virtualization.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Deployment */}
            <div className="glass p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Box className="w-6 h-6 text-white mr-2" />
                <h3 className="text-xl font-semibold text-white">7 - Déploiement de postes</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.deployment.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Scripting */}
            <div className="glass p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Terminal className="w-6 h-6 text-white mr-2" />
                <h3 className="text-xl font-semibold text-white">8 - Scripting</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.scripting.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Management */}
            <div className="glass p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Wrench className="w-6 h-6 text-white mr-2" />
                <h3 className="text-xl font-semibold text-white">9 - Gestion de parc et incidents</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.management.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
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


import { Code, Network, Server, Monitor, Wrench, Box, Terminal } from "lucide-react";

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

const SkillsSection = () => {
  return (
    <div className="glass p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-white/10">
      <div className="flex items-center mb-6">
        <Code className="w-6 h-6 text-white mr-3" />
        <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Compétences</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {Object.entries(skills).map(([category, skillList], categoryIndex) => (
          <div 
            key={category} 
            className="glass p-5 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-white/15 border border-white/10"
            style={{ animationDelay: `${categoryIndex * 100}ms` }}
          >
            <div className="flex items-center mb-3">
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
            <div className="flex flex-wrap gap-2">
              {skillList.map((skill, skillIndex) => (
                <span 
                  key={skill} 
                  className="px-3 py-1.5 bg-white/10 rounded-full text-xs text-gray-300 hover:bg-white/20 transition-colors duration-300 border border-white/5"
                  style={{ animationDelay: `${(categoryIndex * 100) + (skillIndex * 50)}ms` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;

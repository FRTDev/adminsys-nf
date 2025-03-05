
import { Code, Network, Server, Monitor, Wrench, Box, Terminal } from "lucide-react";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { SkillSection } from "./SkillSection";

const skillsData = {
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

const skillCategoryMap = {
  development: { title: "Développement", icon: <Code className="w-5 h-5 text-white mr-2" /> },
  network: { title: "Réseau", icon: <Network className="w-5 h-5 text-white mr-2" /> },
  services: { title: "Services", icon: <Server className="w-5 h-5 text-white mr-2" /> },
  os: { title: "Systèmes d'exploitation", icon: <Monitor className="w-5 h-5 text-white mr-2" /> },
  software: { title: "Logiciels", icon: <Wrench className="w-5 h-5 text-white mr-2" /> },
  virtualization: { title: "Virtualisation", icon: <Box className="w-5 h-5 text-white mr-2" /> },
  deployment: { title: "Déploiement de postes", icon: <Box className="w-5 h-5 text-white mr-2" /> },
  scripting: { title: "Scripting", icon: <Terminal className="w-5 h-5 text-white mr-2" /> },
  management: { title: "Gestion de parc et incidents", icon: <Wrench className="w-5 h-5 text-white mr-2" /> },
};

const SkillsSection = () => {
  return (
    <div className="glass p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-white/10">
      <SectionTitle icon={<Code className="w-6 h-6 text-white" />} title="Compétences" />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {Object.entries(skillsData).map(([category, skills], index) => {
          const { title, icon } = skillCategoryMap[category as keyof typeof skillCategoryMap];
          
          return (
            <SkillSection
              key={category}
              title={title}
              icon={icon}
              skills={skills}
              delay={index * 100}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SkillsSection;

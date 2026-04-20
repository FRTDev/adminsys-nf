import { Code, Network, Server, Monitor, Wrench, Box, Terminal } from "lucide-react";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { SkillSection } from "./SkillSection";
import { Reveal } from "@/components/shared/Reveal";

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
  development: { title: "Développement", icon: <Code className="w-5 h-5" /> },
  network: { title: "Réseau", icon: <Network className="w-5 h-5" /> },
  services: { title: "Services", icon: <Server className="w-5 h-5" /> },
  os: { title: "Systèmes d'exploitation", icon: <Monitor className="w-5 h-5" /> },
  software: { title: "Logiciels", icon: <Wrench className="w-5 h-5" /> },
  virtualization: { title: "Virtualisation", icon: <Box className="w-5 h-5" /> },
  deployment: { title: "Déploiement de postes", icon: <Box className="w-5 h-5" /> },
  scripting: { title: "Scripting", icon: <Terminal className="w-5 h-5" /> },
  management: { title: "Gestion de parc et incidents", icon: <Wrench className="w-5 h-5" /> },
};

const SkillsSection = () => {
  return (
    <div>
      <SectionTitle icon={<Code className="w-6 h-6 text-foreground" />} title="Compétences" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Object.entries(skillsData).map(([category, skills], index) => {
          const { title, icon } = skillCategoryMap[category as keyof typeof skillCategoryMap];
          return (
            <Reveal key={category} delay={index * 60}>
              <SkillSection title={title} icon={icon} skills={skills} delay={index * 60} />
            </Reveal>
          );
        })}
      </div>
    </div>
  );
};

export default SkillsSection;


import { ExternalLink } from "lucide-react";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { Card } from "@/components/shared/Card";

export const CollectInformationSection = () => {
  return (
    <div>
      <SectionTitle 
        icon={<span className="text-3xl">🔍</span>}
        title="1. Collecter les informations"
      />

      <h3 className="text-xl font-semibold text-white mt-6 mb-4">Sources primaires</h3>
      <Card className="mb-6">
        <ul className="space-y-4">
          <li>
            <strong className="text-white">Bases de données officielles</strong>:
            <ul className="pl-5 mt-2 space-y-2 list-disc text-gray-300">
              <li>
                <a href="https://www.cvedetails.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline inline-flex items-center">
                  CVE Details <ExternalLink className="w-3 h-3 ml-1" />
                </a> : Classement des vulnérabilités par criticité (CVSS score), type (DoS, RCE) et logiciels concernés.
              </li>
              <li>
                <a href="https://nvd.nist.gov" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline inline-flex items-center">
                  NVD (National Vulnerability Database) <ExternalLink className="w-3 h-3 ml-1" />
                </a> : Métadonnées enrichies (CWE, liens vers correctifs).
              </li>
              <li>
                <a href="https://www.cert.ssi.gouv.fr" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline inline-flex items-center">
                  CERT-FR Bulletins <ExternalLink className="w-3 h-3 ml-1" />
                </a> : Alertes en français sur les failles critiques.
              </li>
            </ul>
          </li>
          <li>
            <strong className="text-white">Plateformes de renseignement sur les menaces</strong>:
            <ul className="pl-5 mt-2 space-y-2 list-disc text-gray-300">
              <li>
                <a href="https://attack.mitre.org" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline inline-flex items-center">
                  MITRE ATT&CK <ExternalLink className="w-3 h-3 ml-1" />
                </a> : Base de référence des tactiques d'attaquants (ex. <em>Credential Dumping</em>, <em>Lateral Movement</em>).
              </li>
              <li>
                <a href="https://www.cisa.gov" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline inline-flex items-center">
                  CISA Known Exploited Vulnerabilities Catalog <ExternalLink className="w-3 h-3 ml-1" />
                </a> : Liste des failles activement exploitées.
              </li>
            </ul>
          </li>
        </ul>
      </Card>

      <h3 className="text-xl font-semibold text-white mt-6 mb-4">Chaînes YouTube spécialisées</h3>
      <Card className="mb-6">
        <ul className="space-y-3 text-gray-300">
          <li>
            <a href="https://www.youtube.com/@ippsec" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:underline inline-flex items-center">
              IppSec <ExternalLink className="w-3 h-3 ml-1" />
            </a> : Walkthroughs de vulnérabilités réelles (CTFs, HackTheBox) avec démonstrations d'exploits.
          </li>
          <li>
            <a href="https://www.youtube.com/c/HackerSploit" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:underline inline-flex items-center">
              HackerSploit <ExternalLink className="w-3 h-3 ml-1" />
            </a> : Tutoriels sur les attaques réseau (MITM, exploitation de services vulnérables).
          </li>
          <li>
            <a href="https://www.youtube.com/@_JohnHammond" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:underline inline-flex items-center">
              John Hammond <ExternalLink className="w-3 h-3 ml-1" />
            </a> : Analyse de malwares et reverse engineering d'attaques récentes (ex. ransomware LockBit).
          </li>
          <li>
            <a href="https://www.youtube.com/@HafniumSecuriteInformatique" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:underline inline-flex items-center">
              Hafnium <ExternalLink className="w-3 h-3 ml-1" />
            </a> : Partage différents cours/tutoriels sur la cybersécurité.
          </li>
        </ul>
      </Card>

      <h3 className="text-xl font-semibold text-white mt-6 mb-4">Outils pratiques</h3>
      <Card>
        <ul className="space-y-3 text-gray-300">
          <li>
            <strong className="text-white">Google Alerts</strong> : Mots-clés comme <em>CVE-2023-</em>, <em>zero-day disclosure</em>, <em>APT groups</em>.
          </li>
          <li>
            <strong className="text-white">RSS Feed</strong> : Abonne-toi aux flux du CERT-FR, de Krebs on Security ou de DarkReading.
          </li>
        </ul>
      </Card>
    </div>
  );
};

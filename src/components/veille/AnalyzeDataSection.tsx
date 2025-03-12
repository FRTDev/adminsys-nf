
import { ExternalLink } from "lucide-react";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { Card } from "@/components/shared/Card";

export const AnalyzeDataSection = () => {
  return (
    <div>
      <SectionTitle 
        icon={<span className="text-3xl">🔬</span>}
        title="2. Analyser les données"
      />

      <h3 className="text-xl font-semibold text-white mt-6 mb-4">Prioriser les vulnérabilités</h3>
      <Card className="mb-6">
        <ul className="space-y-3 text-gray-300">
          <li>
            Utilise le <strong className="text-white">CVSS Score</strong> pour évaluer la criticité (ex. score ≥ 7.0 = priorité haute).
          </li>
          <li>
            Croise les données avec l'<strong className="text-white">EPSS</strong> (<em>Exploit Prediction Scoring System</em>) pour estimer le risque d'exploitation.
          </li>
        </ul>
      </Card>

      <h3 className="text-xl font-semibold text-white mt-6 mb-4">Reverse engineering des attaques</h3>
      <Card>
        <div className="space-y-4">
          <div>
            <strong className="text-white">Plateformes d'entraînement</strong>:
            <ul className="pl-5 mt-2 space-y-2 list-disc text-gray-300">
              <li>
                <a href="https://www.hackthebox.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline inline-flex items-center">
                  HackTheBox <ExternalLink className="w-3 h-3 ml-1" />
                </a> : Machines vulnérables simulées (ex. <em>Buffer Overflow</em>, <em>SQLi</em>).
              </li>
              <li>
                <a href="https://www.root-me.org" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline inline-flex items-center">
                  Root-Me <ExternalLink className="w-3 h-3 ml-1" />
                </a> : Challenges orientés exploitation de failles (Web, binaires).
              </li>
            </ul>
          </div>
          <div>
            <strong className="text-white">Outils</strong>:
            <ul className="pl-5 mt-2 space-y-2 list-disc text-gray-300">
              <li>
                <strong>Wireshark</strong> : Analyse de paquets pour étudier les schémas d'attaques réseau.
              </li>
              <li>
                <strong>Ghidra</strong> : Reverse engineering de malwares ou d'exploits.
              </li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
};

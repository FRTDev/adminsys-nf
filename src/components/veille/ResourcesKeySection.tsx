
import { SectionTitle } from "@/components/shared/SectionTitle";

export const ResourcesKeySection = () => {
  return (
    <div>
      <SectionTitle 
        icon={<span className="text-3xl">📚</span>}
        title="Ressources clés"
      />
      
      <div className="overflow-x-auto mt-6">
        <table className="min-w-full divide-y divide-white/10">
          <thead>
            <tr>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-400 uppercase tracking-wider">Catégorie</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-400 uppercase tracking-wider">Outils/Plateformes</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-400 uppercase tracking-wider">Usage</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10">
            <tr>
              <td className="px-4 py-3 text-sm text-white">Bases de données</td>
              <td className="px-4 py-3 text-sm text-gray-300">CVE Details, NVD, MITRE ATT&CK</td>
              <td className="px-4 py-3 text-sm text-gray-300">Suivi des vulnérabilités et TTP</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm text-white">Apprentissage</td>
              <td className="px-4 py-3 text-sm text-gray-300">HackTheBox, Root-Me, TCM Security Academy (YouTube)</td>
              <td className="px-4 py-3 text-sm text-gray-300">Pratique de l'exploitation</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm text-white">Analyse technique</td>
              <td className="px-4 py-3 text-sm text-gray-300">Wireshark, Ghidra, CISA Catalog</td>
              <td className="px-4 py-3 text-sm text-gray-300">Reverse engineering et évaluation des risques</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm text-white">Partage</td>
              <td className="px-4 py-3 text-sm text-gray-300">MISP, r/netsec, rapports internes</td>
              <td className="px-4 py-3 text-sm text-gray-300">Diffusion des connaissances et collaboration</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

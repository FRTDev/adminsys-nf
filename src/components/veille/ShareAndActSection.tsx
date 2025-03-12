
import { SectionTitle } from "@/components/shared/SectionTitle";
import { Card } from "@/components/shared/Card";

export const ShareAndActSection = () => {
  return (
    <div>
      <SectionTitle 
        icon={<span className="text-3xl">🔄</span>}
        title="3. Partager et agir"
      />

      <h3 className="text-xl font-semibold text-white mt-6 mb-4">Collaboration interne</h3>
      <Card className="mb-6">
        <p className="text-gray-300 mb-2">
          Rédige des <strong className="text-white">bulletins techniques</strong> synthétiques pour ton équipe :
        </p>
        <ul className="pl-5 space-y-2 list-disc text-gray-300">
          <li>Résumé de la vulnérabilité (CVE-ID, impact).</li>
          <li>Preuves d'exploitation (<em>Proof of Concept</em> ou articles de blogs techniques).</li>
          <li>Correctifs recommandés (patchs, configurations de sécurité).</li>
        </ul>
      </Card>

      <h3 className="text-xl font-semibold text-white mt-6 mb-4">Communautés professionnelles</h3>
      <Card className="mb-6">
        <ul className="space-y-3 text-gray-300">
          <li>
            <strong className="text-white">MISP</strong> (<em>Malware Information Sharing Platform</em>) : Partage d'indicateurs de compromission (IOCs).
          </li>
          <li>
            <strong className="text-white">Reddit r/netsec</strong> : Discussions techniques sur les dernières attaques.
          </li>
          <li>
            <strong className="text-white">Meetups</strong> : Participations à des événements comme <em>Hack in Paris</em> ou <em>SSTIC</em>.
          </li>
        </ul>
      </Card>

      <h3 className="text-xl font-semibold text-white mt-6 mb-4">Veille automatisée</h3>
      <Card>
        <ul className="space-y-3 text-gray-300">
          <li>
            <strong className="text-white">Scripts Python</strong> : Utilise des bibliothèques comme <code className="bg-gray-800 px-1 rounded">requests</code> et <code className="bg-gray-800 px-1 rounded">BeautifulSoup</code> pour scraper les sites du CERT-FR ou de TheHackerNews.
          </li>
          <li>
            <strong className="text-white">Frameworks SIEM</strong> : Configure des règles dans <em>Elastic Security</em> ou <em>Splunk</em> pour alerter sur les CVEs critiques.
          </li>
        </ul>
      </Card>
    </div>
  );
};

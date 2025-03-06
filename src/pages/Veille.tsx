
import { Shield, ExternalLink } from "lucide-react";
import Navigation from "@/components/Navigation";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { Card } from "@/components/shared/Card";
import Footer from "@/components/shared/Footer";

const Veille = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-10 px-4 sm:px-6 lg:px-8 animate-fadeIn">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="mb-8 flex justify-center">
              <div className="w-24 h-24 rounded-full glass flex items-center justify-center">
                <Shield className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Guide de Veille Technologique : Vulnérabilités et Méthodes d'Attaque
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Un guide complet pour suivre et comprendre les vulnérabilités récentes et méthodes d'attaque en cybersécurité
            </p>
            <p className="text-gray-500 mt-4">
              Par Noah F. - 21/02/2025
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="glass p-8 rounded-lg space-y-10">
            
            {/* Introduction */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Pourquoi cette veille est essentielle</h2>
              <p className="text-gray-300 leading-relaxed">
                La surveillance des vulnérabilités et des techniques d'attaque permet d'anticiper les menaces et de renforcer la sécurité des systèmes. Le <strong>CERT-FR</strong> (Centre gouvernemental français de veille cyber) recense quotidiennement des failles critiques, comme la vulnérabilité <strong>Log4Shell</strong> (CVE-2021-44228) ou les attaques <strong>zero-day</strong> exploitant des failles non patchées. Une veille ciblée aide à prioriser les correctifs et à comprendre les TTP (<em>Tactics, Techniques, Procedures</em>) des attaquants.
              </p>
            </div>

            {/* Divider */}
            <div className="border-t border-white/10"></div>

            {/* Collecter les informations */}
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
                    <a href="https://www.youtube.com/c/ippsec" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:underline inline-flex items-center">
                      IppSec <ExternalLink className="w-3 h-3 ml-1" />
                    </a> : Walkthroughs de vulnérabilités réelles (CTFs, HackTheBox) avec démonstrations d'exploits.
                  </li>
                  <li>
                    <a href="https://www.youtube.com/c/HackerSploit" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:underline inline-flex items-center">
                      HackerSploit <ExternalLink className="w-3 h-3 ml-1" />
                    </a> : Tutoriels sur les attaques réseau (MITM, exploitation de services vulnérables).
                  </li>
                  <li>
                    <a href="https://www.youtube.com/c/_JohnHammond" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:underline inline-flex items-center">
                      John Hammond <ExternalLink className="w-3 h-3 ml-1" />
                    </a> : Analyse de malwares et reverse engineering d'attaques récentes (ex. ransomware LockBit).
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

            {/* Divider */}
            <div className="border-t border-white/10"></div>

            {/* Analyser les données */}
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

            {/* Divider */}
            <div className="border-t border-white/10"></div>

            {/* Partager et agir */}
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

            {/* Divider */}
            <div className="border-t border-white/10"></div>

            {/* Ressources clés */}
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

            {/* Divider */}
            <div className="border-t border-white/10"></div>

            {/* Exemple concret */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Exemple concret</h3>
              <Card>
                <p className="text-gray-300 leading-relaxed">
                  En 2023, la vulnérabilité <strong className="text-white">Citrix Bleed</strong> (CVE-2023-4966) a permis des vols de sessions critiques. Une veille efficace aurait impliqué :
                </p>
                <ol className="pl-5 mt-4 space-y-2 list-decimal text-gray-300">
                  <li>Surveillance du NVD pour le CVE.</li>
                  <li>Analyse des PoC partagés sur GitHub ou Exploit-DB.</li>
                  <li>Déploiement urgent du patch et mise à jour des règles de pare-feu.</li>
                </ol>
                <p className="mt-4 text-gray-300">
                  Ce guide opérationnel te permettra de structurer une veille <strong className="text-white">actionnable</strong>, alignée sur les attentes techniques du BTS SIO SISR.
                </p>
              </Card>
            </div>

            {/* Perplexity.ai logo */}
            <div className="flex justify-center mt-8">
              <div className="bg-black p-4 rounded-lg">
                <a href="https://www.perplexity.ai" target="_blank" rel="noopener noreferrer">
                  <img 
                    src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" 
                    alt="Perplexity AI" 
                    className="h-8"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Veille;

import { Shield, ExternalLink } from "lucide-react";
import Navigation from "@/components/Navigation";

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
              Guide complet de la veille en cybersécurité
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Toutes les ressources pour suivre l'actualité cyber : chaînes YouTube, plateformes d'apprentissage et sites web
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
          <div className="glass p-8 rounded-lg space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Et pourquoi ?</h2>
              <p className="text-gray-300 leading-relaxed">
                La veille en cybersécurité est essentielle pour toute entreprise. Elle consiste à surveiller constamment les menaces potentielles qui pèsent sur les systèmes d'information. Cette démarche vise à collecter, analyser et partager des informations pertinentes sur les vulnérabilités, les intrusions et les risques liés à la sécurité informatique. L'ANSSI, Agence nationale de la sécurité des systèmes d'information en France, propose d'ailleurs un service de veille en cybersécurité pour aider les entreprises françaises à se protéger efficacement - le CERT-FR.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                Pour réaliser une veille efficace, il est essentiel de s'appuyer sur des sources d'informations fiables, d'utiliser des outils spécialisés et d'adapter sa stratégie en fonction du domaine d'activité de l'entreprise. La collecte d'informations peut provenir de diverses sources : réseaux sociaux professionnels, moteurs de recherche spécialisés et rapports officiels d'organismes comme la CNIL. Une veille bien structurée permet d'anticiper les menaces, de réagir rapidement aux incidents et de renforcer la protection de l'entreprise.
              </p>
            </div>

            {/* YouTube Channels */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">👾 Chaînes YouTube à suivre</h2>
              <div className="space-y-8">
                <div className="glass p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-white flex items-center">
                    Cookie connecté
                    <a href="https://www.youtube.com/c/Cookieconnecté" target="_blank" rel="noopener noreferrer" className="ml-2 text-gray-400 hover:text-white">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </h3>
                  <p className="text-gray-300 mb-4">Chaîne spécialisée dans la vulgarisation des concepts complexes de l'informatique en moins de 10 minutes. Des explications claires sur le cloud computing, l'infrastructure IT et les dernières innovations technologiques.</p>
                  <div className="aspect-video w-full h-auto">
                    <iframe 
                      className="w-full h-full rounded-lg"
                      src="https://www.youtube.com/embed/qzWdzAvfBoo"
                      title="Cookie connecté - Dernière vidéo"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>

                <div className="glass p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-white flex items-center">
                    TCM Security Academy
                    <a href="https://www.youtube.com/@TCMSecurityAcademy" target="_blank" rel="noopener noreferrer" className="ml-2 text-gray-400 hover:text-white">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </h3>
                  <p className="text-gray-300 mb-4">Une référence incontournable pour la formation en cybersécurité. La chaîne propose des cours approfondis sur les tests d'intrusion, la sécurité des applications web et les méthodologies de pentest professionnelles.</p>
                  <div className="aspect-video w-full h-auto">
                    <iframe 
                      className="w-full h-full rounded-lg"
                      src="https://www.youtube.com/embed/FthE3WhMUuw"
                      title="TCM Security Academy - Dernière vidéo"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>

                <div className="glass p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-white flex items-center">
                    Micode
                    <a href="https://www.youtube.com/@Micode" target="_blank" rel="noopener noreferrer" className="ml-2 text-gray-400 hover:text-white">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </h3>
                  <p className="text-gray-300 mb-4">Michaël de Marliave, alias Micode, transforme des sujets techniques complexes en contenus captivants grâce à des scénarios créatifs et une approche narrative unique. Ses vidéos mêlent pédagogie et divertissement.</p>
                  <div className="aspect-video w-full h-auto">
                    <iframe 
                      className="w-full h-full rounded-lg"
                      src="https://www.youtube.com/embed/gXtp6C-3JKo"
                      title="Micode - Dernière vidéo"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>

                <div className="glass p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-white flex items-center">
                    Underscore
                    <a href="https://www.youtube.com/@Underscore_" target="_blank" rel="noopener noreferrer" className="ml-2 text-gray-400 hover:text-white">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </h3>
                  <p className="text-gray-300 mb-4">Talk-show bimensuel créé par Micode, réunissant des experts et passionnés du monde IT. Diffusé en direct sur Twitch un mercredi sur deux à 19h, il propose des discussions approfondies sur les enjeux technologiques actuels.</p>
                  <div className="aspect-video w-full h-auto">
                    <iframe 
                      className="w-full h-full rounded-lg"
                      src="https://www.youtube.com/embed/a1JoQssKoPg"
                      title="Underscore - Dernière vidéo"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>

                <div className="glass p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-white flex items-center">
                    IppSec
                    <a href="https://www.youtube.com/@ippsec" target="_blank" rel="noopener noreferrer" className="ml-2 text-gray-400 hover:text-white">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </h3>
                  <p className="text-gray-300 mb-4">Référence incontournable pour les amateurs de CTF et de HackTheBox. IppSec propose des walkthroughs détaillés et pédagogiques, expliquant chaque étape de la résolution des challenges de sécurité.</p>
                  <div className="aspect-video w-full h-auto">
                    <iframe 
                      className="w-full h-full rounded-lg"
                      src="https://www.youtube.com/embed/WakZS2BhVfs"
                      title="IppSec - Dernière vidéo"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>

                <div className="glass p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-white flex items-center">
                    Hafnium
                    <a href="https://www.youtube.com/@HafniumSecuriteInformatique" target="_blank" rel="noopener noreferrer" className="ml-2 text-gray-400 hover:text-white">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </h3>
                  <p className="text-gray-300 mb-4">Chaîne française polyvalente couvrant un large spectre de la sécurité informatique : administration système, développement sécurisé, et bonnes pratiques en cybersécurité. Les contenus sont accessibles et pertinents pour tous les niveaux.</p>
                  <div className="aspect-video w-full h-auto">
                    <iframe 
                      className="w-full h-full rounded-lg"
                      src="https://www.youtube.com/embed/OYXkDhja-Kw"
                      title="Hafnium - Dernière vidéo"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>

                <div className="glass p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-white flex items-center">
                    John Hammond
                    <a href="https://www.youtube.com/@_JohnHammond" target="_blank" rel="noopener noreferrer" className="ml-2 text-gray-400 hover:text-white">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </h3>
                  <p className="text-gray-300 mb-4">Expert reconnu proposant des contenus variés et approfondis sur la cybersécurité : analyse de malwares, exploration du dark web, programmation sécurisée et résolution de challenges TryHackMe. Ses tutoriels sont particulièrement appréciés des débutants.</p>
                  <div className="aspect-video w-full h-auto">
                    <iframe 
                      className="w-full h-full rounded-lg"
                      src="https://www.youtube.com/embed/Y93E37o5geE"
                      title="John Hammond - Dernière vidéo"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>

            {/* Learning Platforms */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">📖 Plateformes d'apprentissage dédiée au Hacking éthique</h2>
              <div className="space-y-4">
                <div className="glass p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-white flex items-center">
                    Root-Me
                    <a href="https://www.root-me.org/" target="_blank" rel="noopener noreferrer" className="ml-2 text-gray-400 hover:text-white">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </h3>
                  <p className="text-gray-300 mb-4">Root-Me est la plateforme la plus connue des recruteurs et des passionnées de sécurité</p>
                  <img 
                    src="https://cdn.prod.website-files.com/631b1462bd15d1fa4ca063ff/673c95e996cdb250a344d1ad_656efb8fa8660962daa4df6a_Capture%2520d%25E2%2580%2599e%25CC%2581cran%25202023-12-05%2520a%25CC%2580%252011.29.25.png" 
                    alt="Root-Me"
                    className="w-full rounded-lg"
                  />
                </div>

                <div className="glass p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-white flex items-center">
                    HackTheBox
                    <a href="https://www.hackthebox.com/" target="_blank" rel="noopener noreferrer" className="ml-2 text-gray-400 hover:text-white">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </h3>
                  <p className="text-gray-300 mb-4">Plateforme de hacking éthique gamifiée très accessible au départ et proposant des Meet-up réguliers</p>
                  <img 
                    src="https://cdn.prod.website-files.com/631b1462bd15d1fa4ca063ff/673c95e996cdb250a344d1a2_656efe3a5b9d1e66b7702d1c_Capture%2520d%25E2%2580%2599e%25CC%2581cran%25202023-12-05%2520a%25CC%2580%252011.40.46.png" 
                    alt="HackTheBox"
                    className="w-full rounded-lg"
                  />
                </div>

                <div className="glass p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-white flex items-center">
                    OZINT
                    <a href="https://ozint.eu/" target="_blank" rel="noopener noreferrer" className="ml-2 text-gray-400 hover:text-white">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </h3>
                  <p className="text-gray-300 mb-4">Plateforme dédiée à l'OSINT très bien designée par l'équipe d'un intervenant d'Oteria</p>
                  <img 
                    src="https://cdn.prod.website-files.com/631b1462bd15d1fa4ca063ff/673c95e996cdb250a344d1bb_656f04277d6ee11193403728_Capture%2520d%25E2%2580%2599e%25CC%2581cran%25202023-12-05%2520a%25CC%2580%252012.06.01.png" 
                    alt="OZINT"
                    className="w-full rounded-lg"
                  />
                </div>

                <div className="glass p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-white flex items-center">
                    THE OSINT PROJECT
                    <a href="https://the-osint-project.fr/" target="_blank" rel="noopener noreferrer" className="ml-2 text-gray-400 hover:text-white">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </h3>
                  <p className="text-gray-300 mb-4">The Osint Project c'est une plateforme de challenges qui te font découvrir le web autrement !</p>
                  <img 
                    src="https://cdn.prod.website-files.com/631b1462bd15d1fa4ca063ff/673c95e996cdb250a344d1aa_656f04bf21fcd99fe39d8de5_Capture%2520d%25E2%2580%2599e%25CC%2581cran%25202023-12-05%2520a%25CC%2580%252012.08.34.png" 
                    alt="THE OSINT PROJECT"
                    className="w-full rounded-lg"
                  />
                </div>

                <div className="glass p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-white flex items-center">
                    JEDHA
                    <a href="https://www.jedha.co/" target="_blank" rel="noopener noreferrer" className="ml-2 text-gray-400 hover:text-white">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </h3>
                  <p className="text-gray-300 mb-4">L'école spécialisée dans la reconversion en cybersécurité, propose des dizaines d'heures de cours pour débutants en cybersécurité, et cela gratuitement, sur sa plateforme d'apprentissage JULIE.</p>
                  <img 
                    src="https://cdn.prod.website-files.com/631b1462bd15d1fa4ca063ff/673c95e996cdb250a344d1a7_660be7a9ade50abe67413fa6_Capture%2520d%25E2%2580%2599e%25CC%2581cran%25202024-04-02%2520a%25CC%2580%252013.10.22.png" 
                    alt="JEDHA"
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* Cyber Watch Sites */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">🔍 Site et veille cyber</h2>
              <div className="space-y-4">
                <div className="glass p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-white flex items-center">
                    Café Cyber
                    <a href="https://www.cafe-cyber.oteria.fr/" target="_blank" rel="noopener noreferrer" className="ml-2 text-gray-400 hover:text-white">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </h3>
                  <p className="text-gray-300 mb-4">Le blog des études et des métiers de la cybersécurité.</p>
                </div>

                <div className="glass p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-white flex items-center">
                    Zataz
                    <a href="https://www.zataz.com/" target="_blank" rel="noopener noreferrer" className="ml-2 text-gray-400 hover:text-white">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </h3>
                  <p className="text-gray-300 mb-4">Plateforme créée et animée par le célèbre Damien Bancal et tenant les usagers au courant des dernières technologies, attaques informatiques...</p>
                </div>

                <div className="glass p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-white flex items-center">
                    TheHackerNews
                    <a href="https://thehackernews.com/" target="_blank" rel="noopener noreferrer" className="ml-2 text-gray-400 hover:text-white">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </h3>
                  <p className="text-gray-300 mb-4">L'un des sites les plus consultés dans le monde par les professionnels de la sécurité IT</p>
                </div>

                <div className="glass p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-white flex items-center">
                    Blog Crowstrike
                    <a href="https://www.crowdstrike.com/en-us/blog/" target="_blank" rel="noopener noreferrer" className="ml-2 text-gray-400 hover:text-white">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </h3>
                  <p className="text-gray-300 mb-4">Blog de la start-up Crowdstrike donnant un angle différent à l'actualité de la cybersécurité</p>
                </div>

                <div className="glass p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-white flex items-center">
                    CERT-FR
                    <a href="https://www.cert.ssi.gouv.fr/" target="_blank" rel="noopener noreferrer" className="ml-2 text-gray-400 hover:text-white">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </h3>
                  <p className="text-gray-300 mb-4">Le Centre gouvernemental de veille, d'alerte et de réponse aux attaques informatiques</p>
                </div>

                <div className="glass p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-white flex items-center">
                    Cyber Marétique
                    <a href="https://cybermaretique.fr/" target="_blank" rel="noopener noreferrer" className="ml-2 text-gray-400 hover:text-white">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </h3>
                  <p className="text-gray-300 mb-4">Toute l'actualité de la cybersécurité maritime est présente sur ce site</p>
                </div>

                <div className="glass p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-white flex items-center">
                    ZDNet
                    <a href="https://www.zdnet.com/" target="_blank" rel="noopener noreferrer" className="ml-2 text-gray-400 hover:text-white">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </h3>
                  <p className="text-gray-300 mb-4">Site donnant une vision assez large sur les dernières actualités tech et innovation</p>
                </div>

                <div className="glass p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-white flex items-center">
                    Le blog de Vaadata
                    <a href="https://www.vaadata.com/blog/fr" target="_blank" rel="noopener noreferrer" className="ml-2 text-gray-400 hover:text-white">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </h3>
                  <p className="text-gray-300 mb-4">Vaadata est une société spécialisée en pentest. Elle publie des articles sur la sécurité : les défis techniques et enjeux de société.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Veille;

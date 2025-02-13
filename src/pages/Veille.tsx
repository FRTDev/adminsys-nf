
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
              Toutes les ressources pour suivre l'actualité cyber : chaînes Youtube, plateformes d'apprentissage et sites web
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
                La veille en cybersécurité est cruciale pour toute entreprise. Elle consiste à surveiller constamment les menaces potentielles qui pèsent sur les systèmes d'information d'une entreprise. Cette démarche vise à collecter, analyser et partager des informations pertinentes sur les vulnérabilités, les intrusions et les risques liés à la sécurité informatique. L'ANSSI, Agence nationale de la sécurité des systèmes d'information en France, propose d'ailleurs un service de veille en cybersécurité pour aider les entreprises françaises à se protéger efficacement - le CERT-FR.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                Pour cela, il est essentiel de connaître les sources d'informations fiables, de mettre en place des outils et des techniques spécialisés, et d'adapter sa veille en fonction du domaine d'activité de l'entreprise. La collecte d'informations peut se faire à partir de sources variées, telles que les réseaux sociaux, LinkedIn, Google, et même des rapports de sécurité de la CNIL. Une veille efficace permet d'identifier les menaces en temps réel, de répondre rapidement aux incidents et de protéger l'entreprise.
              </p>
            </div>

            {/* YouTube Channels */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">👾 Chaines Youtube à suivre</h2>
              <div className="space-y-8">
                <div className="glass p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-white flex items-center">
                    Cookie connecté
                    <a href="https://www.youtube.com/c/Cookieconnecté" target="_blank" rel="noopener noreferrer" className="ml-2 text-gray-400 hover:text-white">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </h3>
                  <p className="text-gray-300 mb-4">Expliquer un sujet complexe de l'informatique en moins de 10 minutes, c'est possible. Le cloud, l'infrastructure et les nouvelles tendances IT...</p>
                  <div className="aspect-w-16 aspect-h-9">
                    <iframe 
                      className="w-full rounded-lg"
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
                  <p className="text-gray-300 mb-4">Il propose des cours assez complets et du contenu sur différents produits et outils Web, tests d'intrusion d'applications Web,...</p>
                  <div className="aspect-w-16 aspect-h-9">
                    <iframe 
                      className="w-full rounded-lg"
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
                  <p className="text-gray-300 mb-4">Michaël de Marliave aka Micode vulgarise l'informatique en créant des scneraii ultra orignaux.</p>
                  <div className="aspect-w-16 aspect-h-9">
                    <iframe 
                      className="w-full rounded-lg"
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
                  <p className="text-gray-300 mb-4">Micode a lancé le talk-show des passionnés de l'IT. À retrouver 1 mercredi sur 2 à 19h sur Twitch.</p>
                  <div className="aspect-w-16 aspect-h-9">
                    <iframe 
                      className="w-full rounded-lg"
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
                  <p className="text-gray-300 mb-4">Chaîne centrée autour des challenges CTF et des machines HackTheBox</p>
                  <div className="aspect-w-16 aspect-h-9">
                    <iframe 
                      className="w-full rounded-lg"
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
                  <p className="text-gray-300 mb-4">Hafnium aborde plusieurs sujets, sécurité informatique, admin sys, dev sécurisé,..</p>
                  <div className="aspect-w-16 aspect-h-9">
                    <iframe 
                      className="w-full rounded-lg"
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
                  <p className="text-gray-300 mb-4">Il couvre un éventail de sujets très larges: : analyse des logiciels malveillants, le dark web, programmation, carrières en cybersécurité, salles TryHackMe</p>
                  <div className="aspect-w-16 aspect-h-9">
                    <iframe 
                      className="w-full rounded-lg"
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
                    src="https://shop.root-me.org/cdn/shop/files/yt_banner_red_full.png?v=1686869864&width=3840" 
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
                    src="https://cdn.tech.eu/uploads/2019/04/Hack-The-Box-logo.png" 
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
                    src="https://ozint.eu/assets/images/brand/osintopia-preview.png" 
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
                    src="https://testcy.forge.apps.education.fr/cyber/4.Sites_challenges/images_sites_challenges/The-Osint-Project.png" 
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
                    src="https://cdn.prod.website-files.com/62233c592d2a1e009d42f46c/672b0bab5fa6662390baf564_6414802c0a2bea367cbc795b_logo-jedha-square.svg" 
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
                  <img 
                    src="https://cdn.prod.website-files.com/631af61fe0ed5ef2ac053726/632f1285e846c05180df5387_open-graph-oteria-cyber-school.svg" 
                    alt="Café Cyber"
                    className="w-full rounded-lg"
                  />
                </div>

                <div className="glass p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-white flex items-center">
                    Zataz
                    <a href="https://www.zataz.com/" target="_blank" rel="noopener noreferrer" className="ml-2 text-gray-400 hover:text-white">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </h3>
                  <p className="text-gray-300 mb-4">Plateforme créée et animée par le célèbre Damien Bancal et tenant les usagers au courant des dernières technologies, attaques informatiques...</p>
                  <img 
                    src="https://www.zataz.com/wp-content/uploads/Noir-et-Blanc-Encadre-Future-DJ-Logo.png" 
                    alt="Zataz"
                    className="w-full rounded-lg"
                  />
                </div>

                <div className="glass p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-white flex items-center">
                    TheHackerNews
                    <a href="https://thehackernews.com/" target="_blank" rel="noopener noreferrer" className="ml-2 text-gray-400 hover:text-white">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </h3>
                  <p className="text-gray-300 mb-4">L'un des sites les plus consultés dans le monde par les professionnels de la sécurité IT</p>
                  <img 
                    src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjucioIaLjDLMVbAzsIDpaYM754ZmWwLu6oPFfZ95bcJQK9paBjdrkpQnnjTExUWJbExlV10x25riYersOaWF_TFGCFvlw52qXMvrNMGacAb6nkP1RBTMGL1yWdvoajXbj5qf4U9O_sH6tH-BxNpOveZnxMT6bVDX57FaKB1jFlbPExVQgmA4HKKuROJA/s1700/THN.jpg" 
                    alt="TheHackerNews"
                    className="w-full rounded-lg"
                  />
                </div>

                <div className="glass p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-white flex items-center">
                    Blog Crowstrike
                    <a href="https://www.crowdstrike.com/en-us/blog/" target="_blank" rel="noopener noreferrer" className="ml-2 text-gray-400 hover:text-white">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </h3>
                  <p className="text-gray-300 mb-4">Blog de la start-up Crowdstrike donnant un angle différent à l'actualité de la cybersécurité</p>
                  <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJntJ0VK_O0-AiFt4sDXuJxFQz_sBazQeG-w&s" 
                    alt="Blog Crowstrike"
                    className="w-full rounded-lg"
                  />
                </div>

                <div className="glass p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-white flex items-center">
                    CERT-FR
                    <a href="https://www.cert.ssi.gouv.fr/" target="_blank" rel="noopener noreferrer" className="ml-2 text-gray-400 hover:text-white">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </h3>
                  <p className="text-gray-300 mb-4">Le Centre gouvernemental de veille, d'alerte et de réponse aux attaques informatiques</p>
                  <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Jd9jTf8H32rvJDeI57MoYrcOTGYRU_oOSQ&s" 
                    alt="CERT-FR"
                    className="w-full rounded-lg"
                  />
                </div>

                <div className="glass p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-white flex items-center">
                    Cyber Marétique
                    <a href="https://cybermaretique.fr/" target="_blank" rel="noopener noreferrer" className="ml-2 text-gray-400 hover:text-white">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </h3>
                  <p className="text-gray-300 mb-4">Toute l'actualité de la cybersécurité maritime est présente sur ce site</p>
                  <img 
                    src="https://cybermaretique.fr/wp-content/themes/palmeria/images/header_image.jpg" 
                    alt="Cyber Marétique"
                    className="w-full rounded-lg"
                  />
                </div>

                <div className="glass p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-white flex items-center">
                    ZDNet
                    <a href="https://www.zdnet.com/" target="_blank" rel="noopener noreferrer" className="ml-2 text-gray-400 hover:text-white">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </h3>
                  <p className="text-gray-300 mb-4">Site donnant une vision assez large sur les dernières actualités tech et innovation</p>
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/2/2b/ZDNET_Official_Logo.png" 
                    alt="ZDNet"
                    className="w-full rounded-lg"
                  />
                </div>

                <div className="glass p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-white flex items-center">
                    Le blog de Vaadata
                    <a href="https://www.vaadata.com/blog/fr" target="_blank" rel="noopener noreferrer" className="ml-2 text-gray-400 hover:text-white">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </h3>
                  <p className="text-gray-300 mb-4">Vaadata est une société spécialisée en pentest. Elle publie des articles sur la sécurité : les défis techniques et enjeux de société.</p>
                  <img 
                    src="https://www.vaadata.com/img/logo_vaadata_dark.svg" 
                    alt="Le blog de Vaadata"
                    className="w-full rounded-lg bg-white p-4"
                  />
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

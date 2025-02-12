
import { Shield } from "lucide-react";
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
              Par Noah F. - 30/10/2023
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
              <div className="space-y-4">
                <div className="glass p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-white">Cookie connecté</h3>
                  <p className="text-gray-300">Expliquer un sujet complexe de l'informatique en moins de 10 minutes, c'est possible. Le cloud, l'infrastructure et les nouvelles tendances IT...</p>
                </div>
                <div className="glass p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-white">Blue Team France</h3>
                  <p className="text-gray-300">Mathieu Pichon publie différentes vidéos sur la cybersécurité et ses concepts, les ateliers et le mindset cyber.</p>
                </div>
                <div className="glass p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-white">Le cybermentor</h3>
                  <p className="text-gray-300">Il propose des cours assez complets et du contenu sur différents produits et outils Web, tests d'intrusion d'applications Web,...</p>
                </div>
                <div className="glass p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-white">Micode</h3>
                  <p className="text-gray-300">Michaël de Marliave aka Micode vulgarise l'informatique en créant des scneraii ultra orignaux. Il se concentre sur la programmation et le développement informatique</p>
                </div>
                <div className="glass p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-white">Underscore</h3>
                  <p className="text-gray-300">Micode a lancé le talk-show des passionnés de l'IT. À retrouver 1 mercredi sur 2 à 19h sur Twitch.</p>
                </div>
                <div className="glass p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-white">Pour1nfo</h3>
                  <p className="text-gray-300">Peut-être la chaîne la plus accessible pour le grand public, il s'intéresse aux nouvelles liées aux données et systèmes d'informations et les décrypte</p>
                </div>
                <div className="glass p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-white">IppSec</h3>
                  <p className="text-gray-300">Chaîne centrée autour des challenges CTF et des machines HackTheBox</p>
                </div>
                <div className="glass p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-white">Hafnium</h3>
                  <p className="text-gray-300">Hafnium aborde plusieurs sujets, sécurité informatique, admin sys, dev sécurisé,..</p>
                </div>
                <div className="glass p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-white">John Hammond</h3>
                  <p className="text-gray-300">Il couvre un éventail de sujets très larges: : analyse des logiciels malveillants, le dark web, programmation, carrières en cybersécurité, salles TryHackMe</p>
                </div>
              </div>
            </div>

            {/* Learning Platforms */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">📖 Plateformes d'apprentissage dédiée au Hacking éthique</h2>
              <div className="space-y-4">
                <div className="glass p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-white">Root-Me</h3>
                  <p className="text-gray-300">Root-Me est la plateforme la plus connue des recruteurs et des passionnées de sécurité</p>
                </div>
                <div className="glass p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-white">HackTheBox</h3>
                  <p className="text-gray-300">Plateforme de hacking éthique gamifiée très accessible au départ et proposant des Meet-up réguliers</p>
                </div>
                <div className="glass p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-white">OZINT</h3>
                  <p className="text-gray-300">Plateforme dédiée à l'OSINT très bien designée par l'équipe d'un intervenant d'Oteria</p>
                </div>
                <div className="glass p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-white">THE OSINT PROJECT</h3>
                  <p className="text-gray-300">The Osint Project c'est une plateforme de challenges qui te font découvrir le web autrement !</p>
                </div>
                <div className="glass p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-white">JEDHA</h3>
                  <p className="text-gray-300">L'école spécialisée dans la reconversion en cybersécurité, propose des dizaines d'heures de cours pour débutants en cybersécurité, et cela gratuitement, sur sa plateforme d'apprentissage JULIE.</p>
                </div>
              </div>
            </div>

            {/* Cyber Watch Sites */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">🔍 Site et veille cyber</h2>
              <div className="space-y-4">
                <div className="glass p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-white">Café Cyber</h3>
                  <p className="text-gray-300">Le blog des études et des métiers de la cybersécurité.</p>
                </div>
                <div className="glass p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-white">Zataz</h3>
                  <p className="text-gray-300">Plateforme créée et animée par le célèbre Damien Bancal et tenant les usagers au courant des dernières technologies, attaques informatiques...</p>
                </div>
                <div className="glass p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-white">TheHackerNews</h3>
                  <p className="text-gray-300">L'un des sites les plus consultés dans le monde par les professionnels de la sécurité IT</p>
                </div>
                <div className="glass p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-white">Blog Crowstrike</h3>
                  <p className="text-gray-300">Blog de la start-up Crowdstrike donnant un angle différent à l'actualité de la cybersécurité</p>
                </div>
                <div className="glass p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-white">CERT-FR</h3>
                  <p className="text-gray-300">Le Centre gouvernemental de veille, d'alerte et de réponse aux attaques informatiques est un organisme français qui participe à la mission d'autorité nationale de l'ANSSI</p>
                </div>
                <div className="glass p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-white">Cyber Marétique</h3>
                  <p className="text-gray-300">Toute l'actualité de la cybersécurité maritime est présente sur ce site</p>
                </div>
                <div className="glass p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-white">ZDNet</h3>
                  <p className="text-gray-300">Site donnant une vision assez large sur les dernières actualités tech et innovation</p>
                </div>
                <div className="glass p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-white">Le blog de Vaadata</h3>
                  <p className="text-gray-300">Vaadata est une société spécialisée en pentest. Elle publie des articles sur la sécurité : les défis techniques et enjeux de société.</p>
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

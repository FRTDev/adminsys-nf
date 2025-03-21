
import { Briefcase, Download, Building, CalendarDays, Server } from "lucide-react";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/shared/Card";

const AudilabSummary = () => {
  return (
    <div>
      <SectionTitle 
        icon={<Briefcase className="w-6 h-6 text-white" />} 
        title="Analyse Contextualisée du Stage Professionnel chez Audilab" 
      />
      
      <div className="mb-8 flex justify-center">
        <Button 
          variant="outline" 
          className="border border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white hover:border-purple-500/50 transition-all"
          onClick={() => window.open('/rapport-audilab.pdf', '_blank')}
        >
          <Download className="mr-2 h-4 w-4" />
          Télécharger le rapport complet
        </Button>
      </div>
      
      {/* Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="bg-gradient-to-br from-blue-500/10 to-transparent animate-fadeIn">
          <div className="flex items-center mb-3">
            <Building className="w-5 h-5 text-blue-300 mr-2" />
            <h3 className="text-xl font-semibold text-white">Entreprise</h3>
          </div>
          <p className="text-gray-300">
            PME spécialisée dans l'audioprothèse avec 270 centres auditifs en France. Stage réalisé au siège social Audilab Ressources à Saint-Pierre-des-Corps.
          </p>
        </Card>
        
        <Card className="bg-gradient-to-br from-purple-500/10 to-transparent animate-fadeIn" delay={150}>
          <div className="flex items-center mb-3">
            <CalendarDays className="w-5 h-5 text-purple-300 mr-2" />
            <h3 className="text-xl font-semibold text-white">Période</h3>
          </div>
          <p className="text-gray-300">
            Stage de 6 semaines réalisé dans le cadre du BTS SIO SISR, complémentant la première expérience chez Armatis.
          </p>
        </Card>
        
        <Card className="bg-gradient-to-br from-indigo-500/10 to-transparent animate-fadeIn" delay={300}>
          <div className="flex items-center mb-3">
            <Server className="w-5 h-5 text-indigo-300 mr-2" />
            <h3 className="text-xl font-semibold text-white">Technologies</h3>
          </div>
          <p className="text-gray-300">
            Windows Server 2022, Hyper-V, Debian 12, FOG, PowerShell, Microsoft Teams, Azure AD.
          </p>
        </Card>
      </div>
      
      <div className="prose prose-invert max-w-none">
        <p className="text-gray-300 text-lg leading-relaxed">
          Suite à mon expérience enrichissante chez Armatis, mon stage chez Audilab représente une autre étape cruciale de ma formation en BTS SIO SISR. Cette immersion au sein d'Audilab Ressources, le siège social du groupe, m'a permis de découvrir les enjeux informatiques spécifiques à un environnement de santé auditive.
        </p>
        
        <h2 className="text-2xl font-semibold text-white mt-8 mb-4 border-b border-white/10 pb-2">
          Contexte Organisationnel d'Audilab
        </h2>
        <p className="text-gray-300">
          Audilab est un acteur majeur de l'audioprothèse en France, présent depuis plus de 30 ans. L'entreprise accompagne ses patients dans l'optimisation de leur audition et s'appuie sur un réseau de plus de 270 centres auditifs.
        </p>
        <p className="text-gray-300">
          Audilab Ressources, situé à Saint-Pierre-des-Corps, est le siège social d'Audilab sous forme de Groupement d'Intérêt Économique (GIE). Ce site regroupe plusieurs pôles d'activités qui travaillent ensemble pour soutenir les centres auditifs du réseau.
        </p>
        
        <h3 className="text-xl font-semibold text-white mt-6 mb-3 border-l-4 border-blue-500/50 pl-3">
          Structure du Système d'Information
        </h3>
        <p className="text-gray-300">
          Le système d'information d'Audilab est crucial pour la gestion des données patients, la communication interne et la coordination des activités des différents centres. Il est composé d'un réseau informatique reliant les centres et le siège social, de serveurs hébergeant les applications métiers et les bases de données. La communication interne est centralisée via Microsoft Teams, intégré à Azure Active Directory (Azure AD).
        </p>
        
        <h2 className="text-2xl font-semibold text-white mt-8 mb-4 border-b border-white/10 pb-2">
          Objectifs du Stage
        </h2>
        <p className="text-gray-300">
          Ce stage de six semaines s'inscrivait dans le cadre des exigences du BTS SIO. Les objectifs principaux étaient :
        </p>
        <ul className="list-disc pl-6 text-gray-300 space-y-2 mt-3">
          <li className="animate-slideInUp" style={{ animationDelay: '100ms' }}>Mettre en œuvre mes compétences en infrastructure réseau</li>
          <li className="animate-slideInUp" style={{ animationDelay: '200ms' }}>Virtualisation de serveurs</li>
          <li className="animate-slideInUp" style={{ animationDelay: '300ms' }}>Création de master</li>
          <li className="animate-slideInUp" style={{ animationDelay: '400ms' }}>Optimisation de déploiements de logiciels</li>
          <li className="animate-slideInUp" style={{ animationDelay: '500ms' }}>Déploiement de poste client</li>
          <li className="animate-slideInUp" style={{ animationDelay: '600ms' }}>Supervision des équipements réseaux</li>
        </ul>
        
        <h2 className="text-2xl font-semibold text-white mt-8 mb-4 border-b border-white/10 pb-2">
          Environnement Technique
        </h2>
        <p className="text-gray-300">
          L'environnement technique chez Audilab est moderne et diversifié :
        </p>
        <ul className="list-disc pl-6 text-gray-300 space-y-2 mt-3">
          <li>Serveurs physiques sous Windows Server 2022 avec Hyper-V</li>
          <li>Machines virtuelles sous Debian 12</li>
          <li>Service FOG (Free Open Source Ghost) pour le déploiement d'images système</li>
          <li>Microsoft Teams intégré à Azure AD</li>
          <li>Outils de virtualisation, de scripting (PowerShell), et de supervision réseau</li>
        </ul>
        
        <h2 className="text-2xl font-semibold text-white mt-8 mb-4 border-b border-white/10 pb-2">
          Missions Réalisées
        </h2>
        <p className="text-gray-300">
          Au cours de mon stage chez Audilab, j'ai eu l'opportunité de participer à plusieurs missions :
        </p>
        <ul className="list-disc pl-6 text-gray-300 space-y-2 mt-3">
          <li><strong>Installation d'un serveur FOG virtualisé sous Hyper-V :</strong> Migration d'un serveur obsolète vers un environnement virtualisé.</li>
          <li><strong>Rédaction d'un guide d'utilisation du service FOG :</strong> Création d'un guide pour faciliter l'utilisation de FOG par les équipes techniques.</li>
          <li><strong>Création et déploiement d'un master :</strong> Standardisation des configurations informatiques pour une gestion efficace des postes de travail.</li>
        </ul>
        
        <h2 className="text-2xl font-semibold text-white mt-8 mb-4 border-b border-white/10 pb-2">
          Compétences Acquises et Développées
        </h2>
        <p className="text-gray-300">
          Ce stage chez Audilab m'a permis de développer les compétences suivantes :
        </p>
        
        <h3 className="text-xl font-semibold text-white mt-6 mb-3 border-l-4 border-blue-500/50 pl-3">
          Compétences Techniques
        </h3>
        <ol className="list-decimal pl-6 text-gray-300 space-y-2">
          <li>Virtualisation de serveurs avec Hyper-V</li>
          <li>Administration système Linux (Debian)</li>
          <li>Déploiement d'images système avec FOG</li>
          <li>Scripting (PowerShell)</li>
          <li>Supervision réseau</li>
        </ol>
        
        <h3 className="text-xl font-semibold text-white mt-6 mb-3 border-l-4 border-blue-500/50 pl-3">
          Compétences Transversales
        </h3>
        <ol className="list-decimal pl-6 text-gray-300 space-y-2">
          <li>Rédaction de documentation technique</li>
          <li>Gestion de projet</li>
          <li>Autonomie</li>
          <li>Résolution de problèmes</li>
        </ol>
        
        <h2 className="text-2xl font-semibold text-white mt-8 mb-4 border-b border-white/10 pb-2">
          Conclusion
        </h2>
        <p className="text-gray-300">
          Mon stage chez Audilab a été une expérience très enrichissante qui a complété ma formation en BTS SIO SISR. J'ai pu mettre en pratique mes compétences techniques dans un environnement professionnel stimulant et développer de nouvelles compétences essentielles pour ma future carrière.
        </p>
      </div>
    </div>
  );
};

export default AudilabSummary;

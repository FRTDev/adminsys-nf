
import { Briefcase, Download } from "lucide-react";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { Button } from "@/components/ui/button";

const AudilabSummary = () => {
  return (
    <div>
      <SectionTitle 
        icon={<Briefcase className="w-6 h-6 text-white" />} 
        title="Analyse Contextualisée du Stage Professionnel chez Audilab" 
      />
      
      <div className="mb-6 flex justify-center">
        <Button 
          variant="outline" 
          className="border border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white transition-all"
          onClick={() => window.open('/rapport-audilab.pdf', '_blank')}
        >
          <Download className="mr-2 h-4 w-4" />
          Télécharger le rapport complet
        </Button>
      </div>
      
      <div className="prose prose-invert max-w-none">
        <p className="text-gray-300">
          Suite à mon expérience enrichissante chez Armatis, mon stage chez Audilab représente une autre étape cruciale de ma formation en BTS SIO SISR. Cette immersion au sein d'Audilab Ressources, le siège social du groupe, m'a permis de découvrir les enjeux informatiques spécifiques à un environnement de santé auditive.
        </p>
        
        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
          Contexte Organisationnel d'Audilab
        </h2>
        <p className="text-gray-300">
          Audilab est un acteur majeur de l'audioprothèse en France, présent depuis plus de 30 ans. L'entreprise accompagne ses patients dans l'optimisation de leur audition et s'appuie sur un réseau de plus de 270 centres auditifs.
        </p>
        <p className="text-gray-300">
          Audilab Ressources, situé à Saint-Pierre-des-Corps, est le siège social d'Audilab sous forme de Groupement d'Intérêt Économique (GIE). Ce site regroupe plusieurs pôles d'activités qui travaillent ensemble pour soutenir les centres auditifs du réseau.
        </p>
        
        <h3 className="text-xl font-semibold text-white mt-6 mb-3">
          Structure du Système d'Information
        </h3>
        <p className="text-gray-300">
          Le système d'information d'Audilab est crucial pour la gestion des données patients, la communication interne et la coordination des activités des différents centres. Il est composé d'un réseau informatique reliant les centres et le siège social, de serveurs hébergeant les applications métiers et les bases de données. La communication interne est centralisée via Microsoft Teams, intégré à Azure Active Directory (Azure AD).
        </p>
        
        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
          Objectifs du Stage
        </h2>
        <p className="text-gray-300">
          Ce stage de six semaines s'inscrivait dans le cadre des exigences du BTS SIO. Les objectifs principaux étaient :
        </p>
        <ol className="list-decimal pl-6 text-gray-300">
          <li>Mettre en œuvre mes compétences en infrastructure réseau</li>
          <li>Virtualisation de serveurs</li>
          <li>Création de master</li>
          <li>Optimisation de déploiements de logiciels</li>
          <li>Déploiement de poste client</li>
          <li>Supervision des équipements réseaux</li>
        </ol>
        
        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
          Environnement Technique
        </h2>
        <p className="text-gray-300">
          L'environnement technique chez Audilab est moderne et diversifié :
        </p>
        <ul className="list-disc pl-6 text-gray-300">
          <li>Serveurs physiques sous Windows Server 2022 avec Hyper-V</li>
          <li>Machines virtuelles sous Debian 12</li>
          <li>Service FOG (Free Open Source Ghost) pour le déploiement d'images système</li>
          <li>Microsoft Teams intégré à Azure AD</li>
          <li>Outils de virtualisation, de scripting (PowerShell), et de supervision réseau</li>
        </ul>
        
        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
          Missions Réalisées
        </h2>
        <p className="text-gray-300">
          Au cours de mon stage chez Audilab, j'ai eu l'opportunité de participer à plusieurs missions :
        </p>
        <ul className="list-disc pl-6 text-gray-300">
          <li><strong>Installation d'un serveur FOG virtualisé sous Hyper-V :</strong> Migration d'un serveur obsolète vers un environnement virtualisé.</li>
          <li><strong>Rédaction d'un guide d'utilisation du service FOG :</strong> Création d'un guide pour faciliter l'utilisation de FOG par les équipes techniques.</li>
          <li><strong>Création et déploiement d'un master :</strong> Standardisation des configurations informatiques pour une gestion efficace des postes de travail.</li>
        </ul>
        
        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
          Compétences Acquises et Développées
        </h2>
        <p className="text-gray-300">
          Ce stage chez Audilab m'a permis de développer les compétences suivantes :
        </p>
        
        <h3 className="text-xl font-semibold text-white mt-6 mb-3">
          Compétences Techniques
        </h3>
        <ol className="list-decimal pl-6 text-gray-300">
          <li>Virtualisation de serveurs avec Hyper-V</li>
          <li>Administration système Linux (Debian)</li>
          <li>Déploiement d'images système avec FOG</li>
          <li>Scripting (PowerShell)</li>
          <li>Supervision réseau</li>
        </ol>
        
        <h3 className="text-xl font-semibold text-white mt-6 mb-3">
          Compétences Transversales
        </h3>
        <ol className="list-decimal pl-6 text-gray-300">
          <li>Rédaction de documentation technique</li>
          <li>Gestion de projet</li>
          <li>Autonomie</li>
          <li>Résolution de problèmes</li>
        </ol>
        
        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
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

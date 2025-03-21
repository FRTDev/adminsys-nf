import { Briefcase, Download, Building, CalendarDays, Code } from "lucide-react";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/shared/Card";

const ArmatisSummary = () => {
  return (
    <div>
      <SectionTitle 
        icon={<Briefcase className="w-6 h-6 text-white" />} 
        title="Analyse Contextualisée du Stage Professionnel chez Armatis" 
      />
      
      <div className="mb-8 flex justify-center">
        <Button 
          variant="outline" 
          className="border border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white hover:border-purple-500/50 transition-all"
          onClick={() => window.open('/rapport-armatis.pdf', '_blank')}
        >
          <Download className="mr-2 h-4 w-4" />
          Télécharger le rapport complet
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="bg-gradient-to-br from-purple-500/10 to-transparent animate-fadeIn">
          <div className="flex items-center mb-3">
            <Building className="w-5 h-5 text-purple-300 mr-2" />
            <h3 className="text-xl font-semibold text-white">Entreprise</h3>
          </div>
          <p className="text-gray-300">
            Grande entreprise spécialisée dans la relation client avec 9000 employés et une présence internationale (France, Pologne, Portugal, Tunisie).
          </p>
        </Card>
        
        <Card className="bg-gradient-to-br from-blue-500/10 to-transparent animate-fadeIn" delay={150}>
          <div className="flex items-center mb-3">
            <CalendarDays className="w-5 h-5 text-blue-300 mr-2" />
            <h3 className="text-xl font-semibold text-white">Période</h3>
          </div>
          <p className="text-gray-300">
            Stage de 5 semaines réalisé dans le cadre du BTS SIO SISR sur le site de Tauxigny-Saint-Bauld.
          </p>
        </Card>
        
        <Card className="bg-gradient-to-br from-indigo-500/10 to-transparent animate-fadeIn" delay={300}>
          <div className="flex items-center mb-3">
            <Code className="w-5 h-5 text-indigo-300 mr-2" />
            <h3 className="text-xl font-semibold text-white">Technologies</h3>
          </div>
          <p className="text-gray-300">
            BMC Numara, Windows 10/11, "Groupe de Patchs", technique "Image WIM Sysprep Windows".
          </p>
        </Card>
      </div>
      
      <div className="prose prose-invert max-w-none">
        <p className="text-gray-300 text-lg leading-relaxed">
          L'expérience professionnelle acquise pendant mon stage chez Armatis constitue un pilier fondamental de ma formation en BTS Services Informatiques aux Organisations (SIO) option Solutions d'Infrastructure, Systèmes et Réseaux (SISR). Cette immersion en entreprise, au-delà de son caractère obligatoire, représente une étape cruciale dans mon parcours d'apprentissage et de professionnalisation dans le domaine de l'informatique et des systèmes d'information.
        </p>
        
        <h2 className="text-2xl font-semibold text-white mt-8 mb-4 border-b border-white/10 pb-2">
          Contexte Organisationnel d'Armatis
        </h2>
        <p className="text-gray-300">
          Armatis se positionne comme un acteur majeur dans le secteur de la Relation Client en France et à l'international. Sa présence géographique est étendue, comptant 11 sites en France métropolitaine, 6 en Pologne, 3 au Portugal, et 1 en Tunisie. Le site de Tauxigny-Saint-Bauld, où s'est déroulé mon stage, représente l'un des onze sites français de l'entreprise.
        </p>
        <p className="text-gray-300">
          La structure organisationnelle d'Armatis repose sur une équipe d'experts composée de 9 000 personnes qui déploient une approche sophistiquée et digitale pour garantir des expériences client fluides et personnalisées. L'engagement d'Armatis envers la responsabilité sociale et environnementale se traduit par plusieurs certifications et labels.
        </p>
        
        <h3 className="text-xl font-semibold text-white mt-6 mb-3 border-l-4 border-purple-500/50 pl-3">
          Structure du Système d'Information
        </h3>
        <p className="text-gray-300">
          Le système d'information d'Armatis présente une architecture robuste, visualisée notamment à travers une "weather map" qui offre une représentation en temps réel de l'état du réseau et des systèmes. Les centres de données principaux, FR-DC1 (Poitiers) et FR-DC2 (Tours), constituent les pivots de cette infrastructure. La communication interne et la collaboration entre les employés sont facilitées par "LinkMeUp", le réseau social d'entreprise.
        </p>
        
        <h2 className="text-2xl font-semibold text-white mt-8 mb-4 border-b border-white/10 pb-2">
          Objectifs du Stage
        </h2>
        <p className="text-gray-300">
          Mon stage chez Armatis s'inscrivait dans le cadre des exigences du BTS SIO, nécessitant une période de cinq semaines en entreprise. Les objectifs principaux de cette immersion professionnelle étaient :
        </p>
        <ul className="list-disc pl-6 text-gray-300 space-y-2 mt-3">
          <li className="animate-slideInUp" style={{ animationDelay: '100ms' }}>Appliquer et approfondir mes connaissances acquises en formation</li>
          <li className="animate-slideInUp" style={{ animationDelay: '200ms' }}>Développer des compétences techniques concrètes</li>
          <li className="animate-slideInUp" style={{ animationDelay: '300ms' }}>Me confronter aux défis quotidiens rencontrés par les professionnels</li>
          <li className="animate-slideInUp" style={{ animationDelay: '400ms' }}>Acquérir une expérience professionnelle valorisable</li>
          <li className="animate-slideInUp" style={{ animationDelay: '500ms' }}>Mettre en pratique mes compétences en gestion de réseau, support utilisateur et maintenance informatique</li>
        </ul>
        
        <h2 className="text-2xl font-semibold text-white mt-8 mb-4 border-b border-white/10 pb-2">
          Environnement Technique
        </h2>
        <p className="text-gray-300">
          L'environnement technique au sein d'Armatis est caractérisé par une infrastructure moderne et des outils spécialisés. Le déploiement et la gestion des postes de travail sont effectués à l'aide de BMC Numara. Les images de déploiement utilisées incluent Windows 10 (version 22H2) et Windows 11 (version 23H2). La gestion des mises à jour logicielles est assurée par l'outil "Groupe de Patchs".
        </p>
        
        <h2 className="text-2xl font-semibold text-white mt-8 mb-4 border-b border-white/10 pb-2">
          Missions Réalisées
        </h2>
        <p className="text-gray-300">
          Au cours de mon stage chez Armatis, j'ai eu l'opportunité de m'impliquer dans diverses missions :
        </p>
        
        <h3 className="text-xl font-semibold text-white mt-6 mb-3 border-l-4 border-purple-500/50 pl-3">
          Déploiement de Postes de Travail
        </h3>
        <p className="text-gray-300">
          J'ai déployé de nouveaux postes de travail à l'aide de BMC Numara. Cette mission impliquait la gestion des images de déploiement pour différentes versions de Windows.
        </p>
        
        <h3 className="text-xl font-semibold text-white mt-6 mb-3 border-l-4 border-purple-500/50 pl-3">
          Gestion des Mises à Jour et de la Sécurité
        </h3>
        <p className="text-gray-300">
          J'ai participé à la gestion des mises à jour logicielles à travers l'outil "Groupe de Patchs".
        </p>
        
        <h2 className="text-2xl font-semibold text-white mt-8 mb-4 border-b border-white/10 pb-2">
          Compétences Acquises et Développées
        </h2>
        <p className="text-gray-300">
          Mon stage chez Armatis m'a permis de développer un ensemble de compétences techniques et transversales :
        </p>
        
        <h3 className="text-xl font-semibold text-white mt-6 mb-3 border-l-4 border-purple-500/50 pl-3">
          Compétences Techniques
        </h3>
        <ol className="list-decimal pl-6 text-gray-300 space-y-2">
          <li>Maîtrise des outils de déploiement et de gestion des postes de travail (BMC Numara)</li>
          <li>Connaissance approfondie des systèmes d'exploitation Windows 10 et Windows 11</li>
          <li>Gestion des mises à jour logicielles et des correctifs de sécurité</li>
        </ol>
        
        <h3 className="text-xl font-semibold text-white mt-6 mb-3 border-l-4 border-purple-500/50 pl-3">
          Compétences Transversales
        </h3>
        <ol className="list-decimal pl-6 text-gray-300 space-y-2">
          <li>Communication professionnelle au sein d'une équipe informatique</li>
          <li>Gestion des priorités et organisation du travail</li>
          <li>Résolution de problèmes techniques dans un environnement réel</li>
        </ol>
        
        <h2 className="text-2xl font-semibold text-white mt-8 mb-4 border-b border-white/10 pb-2">
          Conclusion
        </h2>
        <p className="text-gray-300">
          Mon expérience de stage chez Armatis a constitué une étape fondamentale dans mon parcours de formation en BTS SIO SISR. Cette immersion dans un environnement professionnel m'a permis d'appliquer concrètement les connaissances théoriques acquises en formation et de développer des compétences pratiques essentielles pour ma future carrière.
        </p>
      </div>
    </div>
  );
};

export default ArmatisSummary;

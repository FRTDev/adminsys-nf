
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const ComparisonTable = () => {
  return (
    <div className="overflow-x-auto">
      <Table className="text-left">
        <TableHeader className="bg-black/20">
          <TableRow>
            <TableHead className="font-bold text-white">Caractéristique</TableHead>
            <TableHead className="font-bold text-white">Armatis</TableHead>
            <TableHead className="font-bold text-white">Audilab</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="border-t border-white/10">
            <TableCell className="font-semibold text-white">Secteur d'activité</TableCell>
            <TableCell className="text-gray-300">Relation client</TableCell>
            <TableCell className="text-gray-300">Audition</TableCell>
          </TableRow>
          <TableRow className="border-t border-white/10">
            <TableCell className="font-semibold text-white">Taille de l'entreprise</TableCell>
            <TableCell className="text-gray-300">Grande entreprise (9000 employés)</TableCell>
            <TableCell className="text-gray-300">PME (environ 270 centres auditifs)</TableCell>
          </TableRow>
          <TableRow className="border-t border-white/10">
            <TableCell className="font-semibold text-white">Structure du SI</TableCell>
            <TableCell className="text-gray-300">Architecture robuste avec "weather map" pour la supervision du réseau, centres de données principaux (FR-DC1 et FR-DC2), réseau social d'entreprise "LinkMeUp" pour la communication interne.</TableCell>
            <TableCell className="text-gray-300">Réseau reliant les centres et le siège, serveurs hébergeant les applications métiers et bases de données, postes de travail pour le personnel. Communication via Microsoft Teams intégré à Azure AD.</TableCell>
          </TableRow>
          <TableRow className="border-t border-white/10">
            <TableCell className="font-semibold text-white">Environnement technique</TableCell>
            <TableCell className="text-gray-300">BMC Numara pour le déploiement des postes, Windows 10/11, "Groupe de Patchs" pour la gestion des mises à jour, technique "Image WIM Sysprep Windows".</TableCell>
            <TableCell className="text-gray-300">Serveurs physiques sous Windows Server 2022 avec Hyper-V, machines virtuelles sous Debian 12, service FOG, Microsoft Teams, outils de virtualisation, scripting (PowerShell), et de supervision réseau.</TableCell>
          </TableRow>
          <TableRow className="border-t border-white/10">
            <TableCell className="font-semibold text-white">Missions principales</TableCell>
            <TableCell className="text-gray-300">Déploiement de postes de travail, gestion des mises à jour et de la sécurité, gestion des tickets et support utilisateur, départ et retour TAD (travail à domicile), vérification du rapport de l'antivirus.</TableCell>
            <TableCell className="text-gray-300">Installation serveur FOG virtualisé, rédaction guide d'utilisation FOG, création et déploiement d'un master, implémentation du service FOG, mise en place procédure de mise à jour FOG, remplacement client FOG, installation serveur supervision des équipements réseaux.</TableCell>
          </TableRow>
          <TableRow className="border-t border-white/10">
            <TableCell className="font-semibold text-white">Compétences acquises/développées</TableCell>
            <TableCell className="text-gray-300">Maîtrise des outils de déploiement et de gestion des postes de travail (BMC Numara), connaissance approfondie des systèmes d'exploitation Windows 10 et Windows 11, gestion des mises à jour logicielles et des correctifs de sécurité, communication professionnelle au sein d'une équipe informatique, gestion des priorités et organisation du travail.</TableCell>
            <TableCell className="text-gray-300">Virtualisation de serveurs avec Hyper-V, administration système Linux (Debian), déploiement d'images système avec FOG, scripting (PowerShell), supervision réseau, rédaction de documentation technique, gestion de projet, autonomie, résolution de problèmes.</TableCell>
          </TableRow>
          <TableRow className="border-t border-white/10">
            <TableCell className="font-semibold text-white">Apport du stage</TableCell>
            <TableCell className="text-gray-300">Compréhension des enjeux organisationnels et techniques liés à la gestion d'un système d'information d'entreprise, développement de compétences techniques et transversales essentielles pour ma future carrière dans le domaine des services informatiques.</TableCell>
            <TableCell className="text-gray-300">Développement de compétences en virtualisation, administration système, déploiement d'images système, scripting, et supervision réseau, ainsi qu'en rédaction de documentation technique et gestion de projet. Compréhension des enjeux informatiques spécifiques au secteur de la santé auditive.</TableCell>
          </TableRow>
          <TableRow className="border-t border-white/10">
            <TableCell className="font-semibold text-white">Points communs</TableCell>
            <TableCell className="text-gray-300 text-center" colSpan={2}>Stage dans le cadre du BTS SIO SISR, application des connaissances théoriques en entreprise, développement de compétences techniques et transversales.</TableCell>
          </TableRow>
          <TableRow className="border-t border-white/10">
            <TableCell className="font-semibold text-white">Différences principales</TableCell>
            <TableCell className="text-gray-300">Secteur d'activité différent (relation client vs audition), taille de l'entreprise (grande entreprise vs PME), missions spécifiques à chaque entreprise.</TableCell>
            <TableCell className="text-gray-300">Secteur d'activité différent (relation client vs audition), taille de l'entreprise (grande entreprise vs PME), missions spécifiques à chaque entreprise, environnement technique différent (BMC Numara vs Hyper-V/FOG).</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default ComparisonTable;


import { Kanban, Trello, CheckSquare, ListChecks } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ModeProjetContent = () => {
  return (
    <div className="animate-fadeIn">
      <Tabs defaultValue="methodologie" className="w-full mb-16">
        <TabsList className="grid w-full grid-cols-3 bg-black/20 backdrop-blur-md border border-white/10 h-16 rounded-xl shadow-md overflow-hidden">
          <TabsTrigger 
            value="methodologie" 
            className="flex items-center gap-2 data-[state=active]:bg-gradient-to-br data-[state=active]:from-white/10 data-[state=active]:to-transparent text-base h-full rounded-xl transition-all duration-500"
          >
            <Kanban className="h-5 w-5" />
            <span>Méthodologie</span>
          </TabsTrigger>
          <TabsTrigger 
            value="trello" 
            className="flex items-center gap-2 data-[state=active]:bg-gradient-to-br data-[state=active]:from-white/10 data-[state=active]:to-transparent text-base h-full rounded-xl transition-all duration-500"
          >
            <Trello className="h-5 w-5" />
            <span>Trello</span>
          </TabsTrigger>
          <TabsTrigger 
            value="application" 
            className="flex items-center gap-2 data-[state=active]:bg-gradient-to-br data-[state=active]:from-white/10 data-[state=active]:to-transparent text-base h-full rounded-xl transition-all duration-500"
          >
            <CheckSquare className="h-5 w-5" />
            <span>Application</span>
          </TabsTrigger>
        </TabsList>
        
        {/* Méthodologie Kanban */}
        <TabsContent value="methodologie" className="mt-10">
          <div className="glass p-8 rounded-xl shadow-xl border border-white/10 transform hover:scale-[1.005] transition-all duration-500">
            <SectionTitle 
              icon={<Kanban className="h-7 w-7 text-white" />} 
              title="Méthodologie de Gestion de Projet Adoptée" 
            />
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-white">Présentation de la Méthode Kanban</h3>
                <p className="text-gray-300 leading-relaxed">
                  Pour ce projet, j'ai opté pour la méthode Kanban, une approche agile particulièrement adaptée à la gestion visuelle des tâches. 
                  Kanban se caractérise par plusieurs principes fondamentaux qui structurent mon travail au quotidien.
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
                  <li>
                    <span className="font-medium text-white">Visualisation du flux</span> - Représentation graphique de l'état d'avancement des tâches à travers un tableau visuel
                  </li>
                  <li>
                    <span className="font-medium text-white">Limitation du travail en cours (WIP)</span> - Optimisation du flux de travail en fixant un nombre maximum de tâches simultanées
                  </li>
                  <li>
                    <span className="font-medium text-white">Amélioration continue</span> - Analyse constante des processus pour leur optimisation et adaptation aux changements
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-white">Justification du Choix de Kanban</h3>
                <p className="text-gray-300 leading-relaxed">
                  Le choix de Kanban pour ce projet se justifie par plusieurs facteurs:
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
                  <li>Flux continu qui s'adapte parfaitement à la nature évolutive des projets</li>
                  <li>Absence de rôles prédéfinis correspondant à ma situation de travail souvent autonome</li>
                  <li>Planification à la demande permettant d'ajuster les priorités en fonction des besoins émergents</li>
                  <li>Visualisation claire facilitant l'identification rapide des problèmes</li>
                </ul>
              </div>
            </div>
          </div>
        </TabsContent>
        
        {/* Organisation avec Trello */}
        <TabsContent value="trello" className="mt-10">
          <div className="glass p-8 rounded-xl shadow-xl border border-white/10 transform hover:scale-[1.005] transition-all duration-500">
            <SectionTitle 
              icon={<Trello className="h-7 w-7 text-white" />} 
              title="Mise en Œuvre avec Trello" 
            />
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-white">Présentation de l'Outil Trello</h3>
                <p className="text-gray-300 leading-relaxed">
                  Trello est un logiciel de gestion de projet particulièrement adapté aux méthodes agiles comme Kanban. 
                  Il offre une interface intuitive basée sur un système de tableaux, listes et cartes qui matérialise 
                  parfaitement le flux visuel préconisé par la méthode Kanban.
                </p>
                <p className="text-gray-300 leading-relaxed mt-4">
                  J'ai choisi cet outil pour sa simplicité d'utilisation, sa flexibilité et ses fonctionnalités collaboratives 
                  qui facilitent le partage d'informations et le suivi des tâches.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-white">Organisation du Tableau Kanban sur Trello</h3>
                <p className="text-gray-300 leading-relaxed">
                  Mon tableau Trello est structuré en plusieurs colonnes qui représentent les différentes étapes du flux de travail:
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
                  <li><span className="font-medium text-white">À faire</span> - Tâches sélectionnées pour être traitées prochainement</li>
                  <li><span className="font-medium text-white">En cours</span> - Tâches actuellement en traitement (avec une limite définie)</li>
                  <li><span className="font-medium text-white">À valider</span> - Tâches terminées mais nécessitant une vérification</li>
                  <li><span className="font-medium text-white">Terminé et validé</span> - Tâches complètement achevées et validées</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-white">Capture d'écran de mon tableau Trello</h3>
                <div className="mt-6 rounded-xl overflow-hidden border border-white/10 shadow-xl">
                  <img 
                    src="/lovable-uploads/2eafc4eb-b0c9-4f6a-898a-cfd410db9843.png" 
                    alt="Tableau Trello de gestion de projet" 
                    className="w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        {/* Application pratique */}
        <TabsContent value="application" className="mt-10">
          <div className="glass p-8 rounded-xl shadow-xl border border-white/10 transform hover:scale-[1.005] transition-all duration-500">
            <SectionTitle 
              icon={<CheckSquare className="h-7 w-7 text-white" />} 
              title="Application Pratique de la Méthodologie" 
            />
            
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-black/40 border-white/10">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <ListChecks className="h-5 w-5" />
                      <span>Organisation des cartes</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 leading-relaxed">
                      Chaque carte Trello contient des informations détaillées:
                    </p>
                    <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
                      <li>Description de la tâche</li>
                      <li>Échéance</li>
                      <li>Liste de contrôle des sous-tâches</li>
                      <li>Étiquettes de catégorisation</li>
                      <li>Documentation associée</li>
                      <li>Commentaires sur l'avancement</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="bg-black/40 border-white/10">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Kanban className="h-5 w-5" />
                      <span>Avantages observés</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                      <li>Visualisation instantanée de l'état d'avancement global</li>
                      <li>Identification rapide des blocages potentiels</li>
                      <li>Adaptation flexible aux changements de priorité</li>
                      <li>Amélioration de la communication sur l'avancement</li>
                      <li>Traçabilité complète des décisions et modifications</li>
                      <li>Optimisation continue du processus de travail</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-white">Cycle de Vie d'une Tâche</h3>
                <ol className="space-y-4 text-gray-300 list-decimal list-inside">
                  <li className="p-2 bg-white/5 rounded-md">
                    <span className="font-medium text-white">Création et planification</span>: La tâche est créée dans la liste "À faire" avec une description détaillée, des critères d'acceptation et une date d'échéance estimée.
                  </li>
                  <li className="p-2 bg-white/5 rounded-md">
                    <span className="font-medium text-white">Prise en charge</span>: Lorsque je commence à travailler sur une tâche, je la déplace dans la colonne "En cours", en respectant la limite du travail en cours.
                  </li>
                  <li className="p-2 bg-white/5 rounded-md">
                    <span className="font-medium text-white">Développement</span>: Je mets à jour régulièrement l'avancement et les éventuels problèmes rencontrés dans les commentaires de la carte.
                  </li>
                  <li className="p-2 bg-white/5 rounded-md">
                    <span className="font-medium text-white">Validation</span>: Une fois la tâche terminée, je la déplace dans la colonne "À valider" pour vérification.
                  </li>
                  <li className="p-2 bg-white/5 rounded-md">
                    <span className="font-medium text-white">Clôture</span>: Après validation, la tâche est déplacée dans la colonne "Terminé et validé" avec documentation des résultats.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ModeProjetContent;

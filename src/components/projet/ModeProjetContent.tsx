
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Trello, Code } from "lucide-react";

export const ModeProjetContent = () => {
  return (
    <div className="animate-fadeIn">
      <Tabs defaultValue="methodologie" className="w-full mb-16">
        <TabsList className="grid w-full grid-cols-3 bg-black/20 backdrop-blur-md border border-white/10 h-16 rounded-xl shadow-md overflow-hidden">
          <TabsTrigger 
            value="methodologie" 
            className="flex items-center gap-2 data-[state=active]:bg-gradient-to-br data-[state=active]:from-white/10 data-[state=active]:to-transparent text-base h-full rounded-xl transition-all duration-500"
          >
            <BookOpen className="h-5 w-5" />
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
            <Code className="h-5 w-5" />
            <span>Application</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="methodologie" className="mt-10">
          <div className="glass p-8 rounded-xl shadow-xl border border-white/10 transform hover:scale-[1.005] transition-all duration-500">
            <div className="flex items-center mb-8">
              <div className="mr-4 p-3 rounded-full bg-white/5 border border-white/10">
                <BookOpen className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-gray-300">
                Méthodologie de Gestion de Projet
              </h2>
            </div>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 mb-6">
                Pour mes projets, j'ai opté pour la méthode Kanban, une approche agile particulièrement adaptée à la gestion visuelle des tâches. Kanban se caractérise par plusieurs principes fondamentaux qui structurent mon travail au quotidien.
              </p>
              
              <h3 className="text-xl font-semibold text-white mb-4">Principes fondamentaux de Kanban</h3>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <span className="bg-white/10 text-white px-2 py-1 rounded-md text-sm mt-0.5">1</span>
                  <div>
                    <strong className="text-white">Visualisation du flux</strong>
                    <p className="text-gray-400 mt-1">Représentation graphique de l'état d'avancement des tâches à travers un tableau visuel qui met en évidence les éventuels blocages.</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-2">
                  <span className="bg-white/10 text-white px-2 py-1 rounded-md text-sm mt-0.5">2</span>
                  <div>
                    <strong className="text-white">Limitation du travail en cours (WIP)</strong>
                    <p className="text-gray-400 mt-1">Fixation d'un nombre maximum de tâches simultanées pour optimiser le flux de travail et maintenir une concentration optimale.</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-2">
                  <span className="bg-white/10 text-white px-2 py-1 rounded-md text-sm mt-0.5">3</span>
                  <div>
                    <strong className="text-white">Amélioration continue</strong>
                    <p className="text-gray-400 mt-1">Analyse constante des processus permettant leur optimisation et l'adaptation aux changements durant le cycle de vie du projet.</p>
                  </div>
                </li>
              </ul>
              
              <div className="mt-8 flex justify-center">
                <a 
                  href="/gestion-projet/Methodes-de-Gestion-de-Projet-Informatique.pdf" 
                  target="_blank" rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/10 rounded-lg transition-colors"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Consulter le document complet</span>
                </a>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="trello" className="mt-10">
          <div className="glass p-8 rounded-xl shadow-xl border border-white/10 transform hover:scale-[1.005] transition-all duration-500">
            <div className="flex items-center mb-8">
              <div className="mr-4 p-3 rounded-full bg-white/5 border border-white/10">
                <Trello className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-gray-300">
                Organisation avec Trello
              </h2>
            </div>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 mb-6">
                Trello est un logiciel de gestion de projet particulièrement adapté aux méthodes agiles comme Kanban. Il offre une interface intuitive basée sur un système de tableaux, listes et cartes qui matérialise parfaitement le flux visuel préconisé par la méthode Kanban.
              </p>
              
              <h3 className="text-xl font-semibold text-white mb-4">Structure de mon tableau Kanban</h3>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <span className="bg-white/10 text-white px-2 py-1 rounded-md text-sm mt-0.5">•</span>
                  <div>
                    <strong className="text-white">À faire</strong>
                    <p className="text-gray-400 mt-1">Tâches sélectionnées pour être traitées prochainement</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-2">
                  <span className="bg-white/10 text-white px-2 py-1 rounded-md text-sm mt-0.5">•</span>
                  <div>
                    <strong className="text-white">En cours</strong>
                    <p className="text-gray-400 mt-1">Tâches actuellement en traitement (avec une limite définie)</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-2">
                  <span className="bg-white/10 text-white px-2 py-1 rounded-md text-sm mt-0.5">•</span>
                  <div>
                    <strong className="text-white">À valider</strong>
                    <p className="text-gray-400 mt-1">Tâches terminées mais nécessitant une vérification</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-2">
                  <span className="bg-white/10 text-white px-2 py-1 rounded-md text-sm mt-0.5">•</span>
                  <div>
                    <strong className="text-white">Terminé et validé</strong>
                    <p className="text-gray-400 mt-1">Tâches complètement achevées et validées</p>
                  </div>
                </li>
              </ul>
              
              <div className="mt-6 overflow-hidden rounded-lg border border-white/10 shadow-xl">
                <img 
                  src="/gestion-projet/screenshot-trello.png" 
                  alt="Capture d'écran de mon tableau Trello" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="application" className="mt-10">
          <div className="glass p-8 rounded-xl shadow-xl border border-white/10 transform hover:scale-[1.005] transition-all duration-500">
            <div className="flex items-center mb-8">
              <div className="mr-4 p-3 rounded-full bg-white/5 border border-white/10">
                <Code className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-gray-300">
                Application concrète
              </h2>
            </div>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 mb-6">
                Ce portfolio est lui-même un exemple de projet géré avec la méthode Kanban via Trello. Chaque section du site a été planifiée, développée et validée en suivant un flux de travail clair et organisé.
              </p>
              
              <h3 className="text-xl font-semibold text-white mb-4">Bénéfices observés</h3>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <span className="bg-white/10 text-white px-2 py-1 rounded-md text-sm mt-0.5">✓</span>
                  <div>
                    <strong className="text-white">Visibilité améliorée</strong>
                    <p className="text-gray-400 mt-1">Vue d'ensemble claire sur l'avancement du projet et les tâches à réaliser</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-2">
                  <span className="bg-white/10 text-white px-2 py-1 rounded-md text-sm mt-0.5">✓</span>
                  <div>
                    <strong className="text-white">Focalisation accrue</strong>
                    <p className="text-gray-400 mt-1">Concentration sur un nombre limité de tâches à la fois, améliorant la qualité</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-2">
                  <span className="bg-white/10 text-white px-2 py-1 rounded-md text-sm mt-0.5">✓</span>
                  <div>
                    <strong className="text-white">Identification rapide des blocages</strong>
                    <p className="text-gray-400 mt-1">Repérage et résolution efficace des problèmes grâce à la visualisation du flux</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-2">
                  <span className="bg-white/10 text-white px-2 py-1 rounded-md text-sm mt-0.5">✓</span>
                  <div>
                    <strong className="text-white">Adaptabilité</strong>
                    <p className="text-gray-400 mt-1">Ajustement facile des priorités en fonction des nouveaux besoins ou contraintes</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

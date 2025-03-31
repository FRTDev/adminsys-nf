
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { File, FolderOpenDot, BookOpen } from "lucide-react";
import { SituationCard } from "./SituationCard";

const SituationsContent = () => {
  return (
    <div className="animate-fadeIn">
      <Tabs defaultValue="contexte" className="w-full mb-16">
        <TabsList className="grid w-full grid-cols-3 bg-black/20 backdrop-blur-md border border-white/10 h-16 rounded-xl shadow-md overflow-hidden">
          <TabsTrigger 
            value="contexte" 
            className="flex items-center gap-2 data-[state=active]:bg-gradient-to-br data-[state=active]:from-white/10 data-[state=active]:to-transparent text-base h-full rounded-xl transition-all duration-500"
          >
            <BookOpen className="h-5 w-5" />
            <span>Contexte</span>
          </TabsTrigger>
          <TabsTrigger 
            value="premiereAnnee" 
            className="flex items-center gap-2 data-[state=active]:bg-gradient-to-br data-[state=active]:from-white/10 data-[state=active]:to-transparent text-base h-full rounded-xl transition-all duration-500"
          >
            <FolderOpenDot className="h-5 w-5" />
            <span>Première Année</span>
          </TabsTrigger>
          <TabsTrigger 
            value="deuxiemeAnnee" 
            className="flex items-center gap-2 data-[state=active]:bg-gradient-to-br data-[state=active]:from-white/10 data-[state=active]:to-transparent text-base h-full rounded-xl transition-all duration-500"
          >
            <FolderOpenDot className="h-5 w-5" />
            <span>Deuxième Année</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="contexte" className="mt-10">
          <div className="glass p-8 rounded-xl shadow-xl border border-white/10 transform hover:scale-[1.005] transition-all duration-500">
            <div className="flex items-center mb-8">
              <div className="mr-4 p-3 rounded-full bg-white/5 border border-white/10">
                <BookOpen className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-gray-300">
                Contexte Professionnel
              </h2>
            </div>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300">
                L'entreprise BAREC Automatisme est spécialisée dans la conception et l'installation de systèmes d'automatismes industriels. Elle emploie 25 salariés et possède un réseau informatique complet nécessaire au bon fonctionnement de ses activités.
              </p>
              
              <div className="mt-6 flex justify-center">
                <a 
                  href="/premier-annee/semestre-2/Contexte/contexte-barec-automatisme.pdf" 
                  target="_blank" 
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/10 rounded-lg transition-colors"
                >
                  <File className="w-4 h-4" />
                  <span>Télécharger le contexte complet</span>
                </a>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="premiereAnnee" className="mt-10">
          <div className="glass p-8 rounded-xl shadow-xl border border-white/10 transform hover:scale-[1.005] transition-all duration-500">
            <div className="flex items-center mb-8">
              <div className="mr-4 p-3 rounded-full bg-white/5 border border-white/10">
                <FolderOpenDot className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-gray-300">
                Première Année - Semestre 1
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <SituationCard 
                title="Start@DEV Mission 1"
                description="Comparatif des systèmes de gestion de contenu (CMS)"
                icon={<File />}
                link="/premier-annee/semestre-1/Start@DEV Mission1 comparatif CMS/FROMENT NOAH Fiche CMS.pdf"
              />
              
              <SituationCard 
                title="Start@DEV Mission 2"
                description="Installation et paramétrage de WordPress"
                icon={<File />}
                link="/premier-annee/semestre-1/Start@DEV Mission2 Installation et paramétrage de Wordpress/FROMENT NOAH WordPress.pdf"
              />
              
              <SituationCard 
                title="Start@DEV Mission 3"
                description="Étude d'un site existant"
                icon={<File />}
                link="/premier-annee/semestre-1/Start@DEV Mission3 Etude d'un site existant/Fiche_AC-Blanqui.pdf"
              />
              
              <SituationCard 
                title="Start@DEV Mission 4"
                description="AC-Blanqui"
                icon={<File />}
                link="/premier-annee/semestre-1/Start@DEV Mission4 AC-Blanqui/FROMENT NOAH WordPress.pdf"
              />
              
              <SituationCard 
                title="Start@DEV Mission 5"
                description="Présentation du site AC-Blanqui (Documentation)"
                icon={<File />}
                link="/premier-annee/semestre-1/Start@DEV Mission5 Présentation du site AC-Blanqui/documentation ac-blanqui.pdf"
              />
              
              <SituationCard 
                title="Start@DEV Mission 5"
                description="Présentation du site AC-Blanqui (Diaporama)"
                icon={<File />}
                link="/premier-annee/semestre-1/Start@DEV Mission5 Présentation du site AC-Blanqui/diapo ac-blanqui.pdf"
              />
            </div>
            
            <div className="flex items-center mb-8">
              <div className="mr-4 p-3 rounded-full bg-white/5 border border-white/10">
                <FolderOpenDot className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-gray-300">
                Première Année - Semestre 2
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <SituationCard 
                title="AP1 - Mission 1"
                description="Plan d'adressage"
                icon={<File />}
                link="/premier-annee/semestre-2/AP1/Mission 1/AP1-Mission1-PlanDadressage.pdf"
              />
              
              <SituationCard 
                title="AP1 - Mission 2"
                description="Infrastructure"
                icon={<File />}
                link="/premier-annee/semestre-2/AP1/Mission 2/AP1-Mission2-Infrastructure.pdf"
              />
              
              <SituationCard 
                title="AP1 - Mission 3"
                description="WIFI"
                icon={<File />}
                link="/premier-annee/semestre-2/AP1/Mission 3/AP1-Mission3-WIFI.pdf"
              />
              
              <SituationCard 
                title="AP2 - Mission 1"
                description="Windows 10"
                icon={<File />}
                link="/premier-annee/semestre-2/AP2/Mission 1/AP2-Mission1-windows10.pdf"
              />
              
              <SituationCard 
                title="AP3 - Mission 1"
                description="Active Directory"
                icon={<File />}
                link="/premier-annee/semestre-2/AP3/Mission 1/AP3-Mission1-AD.pdf"
              />
              
              <SituationCard 
                title="AP3 - Mission 2"
                description="DHCP"
                icon={<File />}
                link="/premier-annee/semestre-2/AP3/Mission 2/AP3-Mission2-DHCP.pdf"
              />
              
              <SituationCard 
                title="AP4 - Mission 1"
                description="Web"
                icon={<File />}
                link="/premier-annee/semestre-2/AP4/Mission 1/_AP4-Mission1-Web.pdf"
              />
              
              <SituationCard 
                title="AP4 - Mission 2"
                description="Sauvegarde"
                icon={<File />}
                link="/premier-annee/semestre-2/AP4/Mission 2/AP4-Mission2-Sauvegarde.pdf"
              />
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="deuxiemeAnnee" className="mt-10">
          <div className="glass p-8 rounded-xl shadow-xl border border-white/10 transform hover:scale-[1.005] transition-all duration-500">
            <div className="flex items-center mb-8">
              <div className="mr-4 p-3 rounded-full bg-white/5 border border-white/10">
                <FolderOpenDot className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-gray-300">
                Deuxième Année - Documentation GLPI
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <SituationCard 
                title="Guide d'utilisation de GLPI"
                description="Manuel d'utilisation détaillé du système de gestion de parc informatique GLPI"
                icon={<File />}
                link="/documentations/GLPI-Guide.pdf"
              />
              
              <SituationCard 
                title="Installation de GLPI"
                description="Procédure d'installation et de configuration initiale de GLPI"
                icon={<File />}
                link="/documentations/GLPI-Installation.pdf"
              />
            </div>
            
            <div className="flex items-center my-8">
              <div className="mr-4 p-3 rounded-full bg-white/5 border border-white/10">
                <FolderOpenDot className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-gray-300">
                Deuxième Année - Documentation DNS
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <SituationCard 
                title="DNS - Redondance BIND9"
                description="Implémentation d'une solution DNS redondante avec BIND9"
                icon={<File />}
                link="/documentations/DNS-Redondance-BIND9.pdf"
              />
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SituationsContent;

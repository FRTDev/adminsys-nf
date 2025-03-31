
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { File, FolderOpenDot, BookOpen } from "lucide-react";
import { SituationCard } from "./SituationCard";

const SituationsContent = () => {
  return (
    <div className="animate-fadeIn">
      <Tabs defaultValue="contexte" className="w-full mb-16">
        <TabsList className="grid w-full grid-cols-2 bg-black/20 backdrop-blur-md border border-white/10 h-16 rounded-xl shadow-md overflow-hidden">
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
            <span>Première Année - Semestre 2</span>
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
      </Tabs>
    </div>
  );
};

export default SituationsContent;

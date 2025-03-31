
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Calendar, FolderOpenDot, FileText } from "lucide-react";
import { SectionTitle } from "@/components/shared/SectionTitle";
import DocumentCard from "./DocumentCard";

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
            <Calendar className="h-5 w-5" />
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
        
        {/* Contexte */}
        <TabsContent value="contexte" className="mt-10">
          <div className="glass p-8 rounded-xl shadow-xl border border-white/10 transform hover:scale-[1.005] transition-all duration-500">
            <SectionTitle 
              icon={<BookOpen className="w-6 h-6 text-white" />}
              title="Contexte Professionnel"
            />
            
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300">
                Durant ma formation au BTS SIO, j'ai travaillé sur plusieurs contextes professionnels, dont celui de l'entreprise BAREC Automatisme, spécialisée dans la conception et l'installation de systèmes d'automatismes industriels. Elle emploie 25 salariés et possède un réseau informatique complet nécessaire au bon fonctionnement de ses activités.
              </p>
              
              <div className="mt-6 flex justify-center">
                <a 
                  href="/premier-annee/semestre-2/contexte-deuxieme-semestre/contexte-barec-automatisme.pdf" 
                  target="_blank" 
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/10 rounded-lg transition-colors"
                >
                  <FileText className="w-4 h-4" />
                  <span>Télécharger le contexte complet</span>
                </a>
              </div>

              <div className="mt-8">
                <p className="text-gray-300">
                  En deuxième année, j'ai également travaillé sur le contexte de l'entreprise SCA, où nous avons déployé des solutions d'infrastructure et de services réseau complexes.
                </p>
                
                <div className="mt-6 flex justify-center">
                  <a 
                    href="/deuxieme-annee/contexte-deuxieme-annee/ContexteSCA.pdf" 
                    target="_blank" 
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/10 rounded-lg transition-colors"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Télécharger le contexte SCA</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        {/* Première Année */}
        <TabsContent value="premiereAnnee" className="mt-10">
          <div className="glass p-8 rounded-xl shadow-xl border border-white/10 transform hover:scale-[1.005] transition-all duration-500">
            <SectionTitle 
              icon={<Calendar className="w-6 h-6 text-white" />}
              title="Première Année"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <DocumentCard 
                title="Mission 1"
                description="Comparatif CMS"
                filePath="/premier-annee/semestre-1/StartDEVMission1comparatifCMS/FicheCMS.pdf"
              />
              <DocumentCard 
                title="Mission 2"
                description="Installation et paramétrage de WordPress"
                filePath="/premier-annee/semestre-1/StartDEVMission2InstallationetparametragedeWordpress/WordPress.pdf"
              />
              <DocumentCard 
                title="Mission 3"
                description="Étude d'un site existant"
                filePath="/premier-annee/semestre-1/StartDEVMission3Etudedunsiteexistant/Fiche_AC-Blanqui.pdf"
              />
              <DocumentCard 
                title="Mission 4 - AC-Blanqui"
                description="Recette WordPress utilisateurs"
                filePath="/premier-annee/semestre-1/StartDEVMission4AC-Blanqui/Recette_WP_utilisateurs_AC_Blanqui.pdf"
              />
              <DocumentCard 
                title="Mission 4 - AC-Blanqui"
                description="WordPress"
                filePath="/premier-annee/semestre-1/StartDEVMission4AC-Blanqui/WordPress.pdf"
              />
              <DocumentCard 
                title="Mission 5 - Présentation"
                description="Diaporama AC-Blanqui"
                filePath="/premier-annee/semestre-1/StartDEVMission5PresentationdusiteAC-Blanqui/diapo-ac-blanqui.pdf"
              />
              <DocumentCard 
                title="Mission 5 - Documentation"
                description="Documentation AC-Blanqui"
                filePath="/premier-annee/semestre-1/StartDEVMission5PresentationdusiteAC-Blanqui/documentation-ac-blanqui.pdf"
              />
            </div>
            
            <div className="mt-12">
              <h3 className="text-xl font-medium text-white mb-4">Semestre 2</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <DocumentCard 
                  title="AP1 - Mission 1"
                  description="Plan d'adressage"
                  filePath="/premier-annee/semestre-2/AP1/Mission1Plandadressage/AP1-Mission1-PlanDadressage.pdf"
                />
                <DocumentCard 
                  title="AP1 - Mission 2"
                  description="Infrastructure réseau"
                  filePath="/premier-annee/semestre-2/AP1/Mission2Miseenplacedelinfrastructurereseau/AP1-Mission2-Infrastructure.pdf"
                />
                <DocumentCard 
                  title="AP1 - Mission 3"
                  description="Mise en place d'accès Wi-Fi"
                  filePath="/premier-annee/semestre-2/AP1/Mission3MiseenplacedaccesWi-fi/AP1-Mission3-WIFI.pdf"
                />
                <DocumentCard 
                  title="AP2 - Mission 1"
                  description="Configuration des postes Windows 10"
                  filePath="/premier-annee/semestre-2/AP2/Mission1ConfigurationdespostessousWindows/AP2-Mission1-windows10.pdf"
                />
                <DocumentCard 
                  title="AP3 - Mission 1"
                  description="Active Directory"
                  filePath="/premier-annee/semestre-2/AP3/Mission1MiseenplaceduservicedauthentificationetdannuaireAD/AP3-Mission1-AD.pdf"
                />
                <DocumentCard 
                  title="AP3 - Mission 2"
                  description="DHCP"
                  filePath="/premier-annee/semestre-2/AP3/Mission2MiseenplaceduserviceDHCPunserveurBA02Linux/AP3-Mission2-DHCP.pdf"
                />
                <DocumentCard 
                  title="AP4 - Mission 1"
                  description="Serveur Web"
                  filePath="/premier-annee/semestre-2/AP4/Mission1MiseenplaceduserveurWebBA04/AP4-Mission1-Web.pdf"
                />
                <DocumentCard 
                  title="AP4 - Mission 2"
                  description="Sauvegarde"
                  filePath="/premier-annee/semestre-2/AP4/Mission2GestiondelasauvegardedescontenusWebhebergesurleserveur/AP4-Mission2-Sauvegarde.pdf"
                />
              </div>
            </div>
          </div>
        </TabsContent>
        
        {/* Deuxième Année */}
        <TabsContent value="deuxiemeAnnee" className="mt-10">
          <div className="glass p-8 rounded-xl shadow-xl border border-white/10 transform hover:scale-[1.005] transition-all duration-500">
            <SectionTitle 
              icon={<FolderOpenDot className="w-6 h-6 text-white" />}
              title="Deuxième Année"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <DocumentCard 
                title="SP0 - Mission 1"
                description="Plan d'adressage SCA"
                filePath="/deuxieme-annee/semestre-3-et-4/SP0/Mission1Adapterleplandadressageauxnouveaubesoins/SPO-Mission1-Plandadressage.pdf"
              />
              
              <DocumentCard 
                title="SP0 - Mission 2 - AD"
                description="Contrôleur de domaine SCA"
                filePath="/deuxieme-annee/semestre-3-et-4/SP0/Mission2MiseenplacedansunenvironnementvirtuelduncontroleurdedomaineetdunserviceDHCP/SP0-Mission2-ADSCA.pdf"
              />
              
              <DocumentCard 
                title="SP0 - Mission 2 - DHCP"
                description="Service DHCP SCA"
                filePath="/deuxieme-annee/semestre-3-et-4/SP0/Mission2MiseenplacedansunenvironnementvirtuelduncontroleurdedomaineetdunserviceDHCP/SP0-Mission2-DHCPSCA.pdf"
              />
              
              <DocumentCard 
                title="SP0 - Mission 3 - GI"
                description="Gestion d'incidents SCA"
                filePath="/deuxieme-annee/semestre-3-et-4/SP0/Mission3MiseenplacedunserveurdegestiondincidentsetdunserveurNAS/SP0-Mission3-GISCA.pdf"
              />
              
              <DocumentCard 
                title="SP0 - Mission 3 - NAS"
                description="Serveur NAS SCA"
                filePath="/deuxieme-annee/semestre-3-et-4/SP0/Mission3MiseenplacedunserveurdegestiondincidentsetdunserveurNAS/SPO-Mission3-NASSCA.pdf"
              />
              
              <DocumentCard 
                title="SP0 - Mission 4"
                description="Architecture réseau"
                filePath="/deuxieme-annee/semestre-3-et-4/SP0/Mission4Miseenplacedunepartiedelarchitecturereseau/SP0-Mission4-Architecture-Reseau.pdf"
              />
              
              <DocumentCard 
                title="SP3 - Missions 1 & 2"
                description="Scripts PowerShell"
                filePath="/deuxieme-annee/semestre-3-et-4/SP3/Mission1et2Automatiserlagestiondesutilisateurs/SP3-Mission1&2-ScriptsPowerShell.pdf"
              />
              
              <DocumentCard 
                title="SP4 - Missions 1, 2 & 3"
                description="Automatisation DHCP"
                filePath="/deuxieme-annee/semestre-3-et-4/SP4/Mission12et3AutomatisationdelaconfigurationduDHCP/SP4-AutoDHCP.pdf"
              />
              
              <DocumentCard 
                title="SP6 - Mission 1"
                description="Protocole RADIUS"
                filePath="/deuxieme-annee/semestre-3-et-4/SP6/Mission1RealiserunsupportdexplicationdeRADIUS/SP6-Mission1-Radius.pdf"
              />

              <DocumentCard 
                title="SP6 - Mission 1 - Diaporama"
                description="Présentation RADIUS"
                filePath="/deuxieme-annee/semestre-3-et-4/SP6/Mission1RealiserunsupportdexplicationdeRADIUS/Diaporama-Protocole-RADIUS-Securisation-des-Acces.pdf"
              />
              
              <DocumentCard 
                title="SP6 - Mission 2"
                description="Maquette RADIUS"
                filePath="/deuxieme-annee/semestre-3-et-4/SP6/Mission2ModifierlamaquettepourprendreencompteleparametrageduprotocoleRADIUS/SP6-Mission2-Radius.pdf"
              />
              
              <DocumentCard 
                title="SP6 - Mission 3"
                description="Prototype RADIUS"
                filePath="/deuxieme-annee/semestre-3-et-4/SP6/Mission3Preparerleprototypedelasolution/SP6-Mission3-Radius.pdf"
              />
              
              <DocumentCard 
                title="SP11 - Mission 1"
                description="Maquette Nextcloud"
                filePath="/deuxieme-annee/semestre-3-et-4/SP11/Mission1Preparationdelinfrastructure/SP11-Mission1-MaquetteNextcloud.pdf"
              />
              
              <DocumentCard 
                title="SP11 - Mission 2"
                description="Configuration Nextcloud"
                filePath="/deuxieme-annee/semestre-3-et-4/SP11/Mission2ConfigurerleserveurpourlasolutionNextcloud/SP11-Mission2-ConfigurationNextcloud.pdf"
              />
              
              <DocumentCard 
                title="SP11 - Mission 3"
                description="Validation Nextcloud"
                filePath="/deuxieme-annee/semestre-3-et-4/SP11/Mission3Effectuerdestestsdeconnexionetdefonctionnalite/SP11-Mission3-ValidationNextcloud.pdf"
              />
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SituationsContent;

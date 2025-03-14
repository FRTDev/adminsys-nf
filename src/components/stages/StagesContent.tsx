
import { Briefcase, Building, Table } from "lucide-react";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ArmatisSummary from "./ArmatisSummary";
import AudilabSummary from "./AudilabSummary";
import ComparisonTable from "./ComparisonTable";

const StagesContent = () => {
  return (
    <div className="animate-fadeIn">
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
          Mes Stages Professionnels
        </h1>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          Découvrez mes expériences professionnelles dans le cadre de mon BTS SIO SISR. 
          Ces stages représentent des étapes cruciales dans mon parcours de formation.
        </p>
      </div>

      <Tabs defaultValue="armatis" className="w-full mb-16">
        <TabsList className="grid w-full grid-cols-3 bg-black/20 backdrop-blur-md border border-white/10 h-14">
          <TabsTrigger value="armatis" className="flex items-center gap-2 data-[state=active]:bg-white/10">
            <Building className="h-4 w-4" />
            <span>Armatis</span>
          </TabsTrigger>
          <TabsTrigger value="audilab" className="flex items-center gap-2 data-[state=active]:bg-white/10">
            <Building className="h-4 w-4" />
            <span>Audilab</span>
          </TabsTrigger>
          <TabsTrigger value="comparison" className="flex items-center gap-2 data-[state=active]:bg-white/10">
            <Table className="h-4 w-4" />
            <span>Comparaison</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="armatis" className="mt-6">
          <div className="glass p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-white/10">
            <ArmatisSummary />
          </div>
        </TabsContent>
        
        <TabsContent value="audilab" className="mt-6">
          <div className="glass p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-white/10">
            <AudilabSummary />
          </div>
        </TabsContent>
        
        <TabsContent value="comparison" className="mt-6">
          <div className="glass p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-white/10">
            <SectionTitle 
              icon={<Table className="w-6 h-6 text-white" />} 
              title="Tableau Comparatif des Deux Entreprises" 
            />
            <ComparisonTable />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default StagesContent;

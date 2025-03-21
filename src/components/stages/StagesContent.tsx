
import { Building, Table } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ArmatisSummary from "./ArmatisSummary";
import AudilabSummary from "./AudilabSummary";
import ComparisonTable from "./ComparisonTable";

const StagesContent = () => {
  return (
    <div className="animate-fadeIn">
      <Tabs defaultValue="armatis" className="w-full mb-16">
        <TabsList className="grid w-full grid-cols-3 bg-black/20 backdrop-blur-md border border-white/10 h-16 rounded-xl shadow-md">
          <TabsTrigger value="armatis" className="flex items-center gap-2 data-[state=active]:bg-white/10 text-base h-full rounded-xl transition-all duration-300">
            <Building className="h-5 w-5" />
            <span>Armatis</span>
          </TabsTrigger>
          <TabsTrigger value="audilab" className="flex items-center gap-2 data-[state=active]:bg-white/10 text-base h-full rounded-xl transition-all duration-300">
            <Building className="h-5 w-5" />
            <span>Audilab</span>
          </TabsTrigger>
          <TabsTrigger value="comparison" className="flex items-center gap-2 data-[state=active]:bg-white/10 text-base h-full rounded-xl transition-all duration-300">
            <Table className="h-5 w-5" />
            <span>Comparaison</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="armatis" className="mt-8">
          <div className="glass p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/10 transform hover:scale-[1.01]">
            <ArmatisSummary />
          </div>
        </TabsContent>
        
        <TabsContent value="audilab" className="mt-8">
          <div className="glass p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/10 transform hover:scale-[1.01]">
            <AudilabSummary />
          </div>
        </TabsContent>
        
        <TabsContent value="comparison" className="mt-8">
          <div className="glass p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/10 transform hover:scale-[1.01]">
            <div className="flex items-center mb-6">
              <Table className="w-8 h-8 text-white mr-3" />
              <h2 className="text-3xl font-bold text-white">Tableau Comparatif des Deux Entreprises</h2>
            </div>
            <ComparisonTable />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default StagesContent;


import { Building, Table } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ArmatisSummary from "./ArmatisSummary";
import AudilabSummary from "./AudilabSummary";
import ComparisonTable from "./ComparisonTable";

const StagesContent = () => {
  return (
    <div className="animate-fadeIn delay-200">
      <Tabs defaultValue="armatis" className="w-full mb-16">
        <TabsList className="grid w-full grid-cols-3 bg-black/10 backdrop-blur-md border border-white/5 h-14 rounded-xl shadow-sm overflow-hidden">
          <TabsTrigger 
            value="armatis" 
            className="flex items-center gap-2 data-[state=active]:bg-black/20 data-[state=active]:backdrop-blur-xl text-base h-full transition-all duration-300"
          >
            <Building className="h-4 w-4" />
            <span>Armatis</span>
          </TabsTrigger>
          <TabsTrigger 
            value="audilab" 
            className="flex items-center gap-2 data-[state=active]:bg-black/20 data-[state=active]:backdrop-blur-xl text-base h-full transition-all duration-300"
          >
            <Building className="h-4 w-4" />
            <span>Audilab</span>
          </TabsTrigger>
          <TabsTrigger 
            value="comparison" 
            className="flex items-center gap-2 data-[state=active]:bg-black/20 data-[state=active]:backdrop-blur-xl text-base h-full transition-all duration-300"
          >
            <Table className="h-4 w-4" />
            <span>Comparaison</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="armatis" className="mt-8 animate-fadeIn">
          <div className="glass p-6 rounded-xl shadow-lg border border-white/5 transform hover:scale-[1.002] transition-all duration-500">
            <ArmatisSummary />
          </div>
        </TabsContent>
        
        <TabsContent value="audilab" className="mt-8 animate-fadeIn">
          <div className="glass p-6 rounded-xl shadow-lg border border-white/5 transform hover:scale-[1.002] transition-all duration-500">
            <AudilabSummary />
          </div>
        </TabsContent>
        
        <TabsContent value="comparison" className="mt-8 animate-fadeIn">
          <div className="glass p-6 rounded-xl shadow-lg border border-white/5 transform hover:scale-[1.002] transition-all duration-500">
            <div className="flex items-center mb-6">
              <div className="mr-4 p-2 rounded-full bg-black/20 border border-white/5">
                <Table className="w-5 h-5 text-white/80" />
              </div>
              <h2 className="text-2xl font-medium text-gradient">
                Tableau Comparatif des Entreprises
              </h2>
            </div>
            <ComparisonTable />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default StagesContent;

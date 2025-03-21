
import { Building, Table } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ArmatisSummary from "./ArmatisSummary";
import AudilabSummary from "./AudilabSummary";
import ComparisonTable from "./ComparisonTable";

const StagesContent = () => {
  return (
    <div className="animate-fadeIn">
      <Tabs defaultValue="armatis" className="w-full mb-16">
        <TabsList className="grid w-full grid-cols-3 bg-black/20 backdrop-blur-md border border-white/10 h-16 rounded-xl shadow-md overflow-hidden">
          <TabsTrigger 
            value="armatis" 
            className="flex items-center gap-2 data-[state=active]:bg-gradient-to-br data-[state=active]:from-purple-500/20 data-[state=active]:to-blue-500/10 text-base h-full rounded-xl transition-all duration-500"
          >
            <Building className="h-5 w-5" />
            <span>Armatis</span>
          </TabsTrigger>
          <TabsTrigger 
            value="audilab" 
            className="flex items-center gap-2 data-[state=active]:bg-gradient-to-br data-[state=active]:from-purple-500/20 data-[state=active]:to-blue-500/10 text-base h-full rounded-xl transition-all duration-500"
          >
            <Building className="h-5 w-5" />
            <span>Audilab</span>
          </TabsTrigger>
          <TabsTrigger 
            value="comparison" 
            className="flex items-center gap-2 data-[state=active]:bg-gradient-to-br data-[state=active]:from-purple-500/20 data-[state=active]:to-blue-500/10 text-base h-full rounded-xl transition-all duration-500"
          >
            <Table className="h-5 w-5" />
            <span>Comparaison</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="armatis" className="mt-10">
          <div className="glass p-8 rounded-xl shadow-xl hover:shadow-purple-500/5 transition-all duration-500 border border-white/10 transform hover:scale-[1.005] bg-gradient-to-br from-white/5 to-transparent">
            <ArmatisSummary />
          </div>
        </TabsContent>
        
        <TabsContent value="audilab" className="mt-10">
          <div className="glass p-8 rounded-xl shadow-xl hover:shadow-purple-500/5 transition-all duration-500 border border-white/10 transform hover:scale-[1.005] bg-gradient-to-br from-white/5 to-transparent">
            <AudilabSummary />
          </div>
        </TabsContent>
        
        <TabsContent value="comparison" className="mt-10">
          <div className="glass p-8 rounded-xl shadow-xl hover:shadow-purple-500/5 transition-all duration-500 border border-white/10 transform hover:scale-[1.005] bg-gradient-to-br from-white/5 to-transparent">
            <div className="flex items-center mb-8">
              <div className="mr-4 p-3 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/10 border border-white/10">
                <Table className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-100 to-blue-200">
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

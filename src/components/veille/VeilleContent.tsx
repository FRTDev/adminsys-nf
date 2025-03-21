
import { IntroductionSection } from "./IntroductionSection";
import { CollectInformationSection } from "./CollectInformationSection";
import { AnalyzeDataSection } from "./AnalyzeDataSection";
import { ShareAndActSection } from "./ShareAndActSection";
import { ResourcesKeySection } from "./ResourcesKeySection";

export const VeilleContent = () => {
  return (
    <div className="glass p-8 rounded-lg shadow-xl border border-white/10 space-y-10">
      {/* Introduction */}
      <IntroductionSection />

      {/* Divider */}
      <div className="border-t border-white/10"></div>

      {/* Collecter les informations */}
      <CollectInformationSection />

      {/* Divider */}
      <div className="border-t border-white/10"></div>

      {/* Analyser les données */}
      <AnalyzeDataSection />

      {/* Divider */}
      <div className="border-t border-white/10"></div>

      {/* Partager et agir */}
      <ShareAndActSection />

      {/* Divider */}
      <div className="border-t border-white/10"></div>

      {/* Ressources clés */}
      <ResourcesKeySection />
    </div>
  );
};

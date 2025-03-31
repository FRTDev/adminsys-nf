
import { File, Link, CheckCircle2 } from "lucide-react";

const ArmatisSummary = () => {
  return (
    <div>
      <div className="flex items-center mb-8">
        <div className="mr-4 p-3 rounded-full bg-white/5 border border-white/10">
          <File className="w-7 h-7 text-white" />
        </div>
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-gray-300">
          Stage chez Armatis
        </h2>
      </div>
      
      <div className="prose prose-invert max-w-none">
        <p className="text-gray-300">
          J'ai effectué mon stage de première année chez Armatis, entreprise spécialisée dans la relation client et les centres d'appels. Durant cette période, j'ai pu développer mes compétences en administration système et réseau.
        </p>
        
        <h3 className="text-xl font-semibold text-white mt-6 mb-4">Points clés du stage</h3>
        
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
            <span>Administration des postes de travail Windows</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
            <span>Support technique aux utilisateurs</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
            <span>Configuration et dépannage réseau</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
            <span>Gestion des comptes utilisateurs et droits d'accès</span>
          </li>
        </ul>
        
        <div className="flex flex-col md:flex-row gap-4 mt-8">
          <a 
            href="/premier-annee/stage/armatis/rapport-armatis.pdf" 
            target="_blank" 
            className="inline-flex items-center gap-2 px-4 py-3 bg-white/10 hover:bg-white/20 border border-white/10 rounded-lg transition-colors"
          >
            <File className="w-5 h-5" />
            <span>Télécharger le rapport complet</span>
          </a>
          
          <a 
            href="/premier-annee/stage/armatis/synthèse-armatis.pdf" 
            target="_blank" 
            className="inline-flex items-center gap-2 px-4 py-3 bg-white/10 hover:bg-white/20 border border-white/10 rounded-lg transition-colors"
          >
            <File className="w-5 h-5" />
            <span>Télécharger la synthèse</span>
          </a>
          
          <a 
            href="https://www.armatis.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 px-4 py-3 bg-white/10 hover:bg-white/20 border border-white/10 rounded-lg transition-colors"
          >
            <Link className="w-5 h-5" />
            <span>Site de l'entreprise</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ArmatisSummary;

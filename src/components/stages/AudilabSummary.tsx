
import { File, Link, CheckCircle2 } from "lucide-react";

const AudilabSummary = () => {
  return (
    <div>
      <div className="flex items-center mb-8">
        <div className="mr-4 p-3 rounded-full bg-white/5 border border-white/10">
          <File className="w-7 h-7 text-white" />
        </div>
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-gray-300">
          Stage chez Audilab
        </h2>
      </div>
      
      <div className="prose prose-invert max-w-none">
        <p className="text-gray-300">
          J'ai effectué mon stage de deuxième année chez Audilab Ressource, groupe spécialisé en solutions auditives. Durant cette période, j'ai pu approfondir mes compétences en infrastructure IT et monitoring.
        </p>
        
        <h3 className="text-xl font-semibold text-white mt-6 mb-4">Missions principales</h3>
        
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
            <span>Mise en place d'un serveur FOG pour le déploiement des postes</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
            <span>Création de documentation technique pour le service informatique</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
            <span>Implémentation d'un système de monitoring Zabbix</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
            <span>Virtualisation et gestion d'infrastructure avec Hyper-V</span>
          </li>
        </ul>
        
        <h3 className="text-xl font-semibold text-white mt-6 mb-4">Documentation produite</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <a 
            href="/deuxieme-annee/stage/audilab/Mission1DocumentationHyper-VVMFOG.pdf" 
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-3 bg-white/10 hover:bg-white/20 border border-white/10 rounded-lg transition-colors"
          >
            <File className="w-5 h-5" />
            <span>Documentation Hyper-V + VM FOG</span>
          </a>
          
          <a 
            href="/deuxieme-annee/stage/audilab/Mission2GuidedutilisationduserviceFOG.pdf" 
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-3 bg-white/10 hover:bg-white/20 border border-white/10 rounded-lg transition-colors"
          >
            <File className="w-5 h-5" />
            <span>Guide d'utilisation de FOG</span>
          </a>
          
          <a 
            href="/deuxieme-annee/stage/audilab/Mission3Creationdunmaster.pdf" 
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-3 bg-white/10 hover:bg-white/20 border border-white/10 rounded-lg transition-colors"
          >
            <File className="w-5 h-5" />
            <span>Création d'un master</span>
          </a>
          
          <a 
            href="/deuxieme-annee/stage/audilab/Mission4ImplementationduserviceFOGsurlinfrastructurereelle.pdf" 
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-3 bg-white/10 hover:bg-white/20 border border-white/10 rounded-lg transition-colors"
          >
            <File className="w-5 h-5" />
            <span>Implémentation de FOG</span>
          </a>
          
          <a 
            href="/deuxieme-annee/stage/audilab/Mission5ProceduredemiseajourFOG.pdf" 
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-3 bg-white/10 hover:bg-white/20 border border-white/10 rounded-lg transition-colors"
          >
            <File className="w-5 h-5" />
            <span>Procédure de mise à jour FOG</span>
          </a>
          
          <a 
            href="/deuxieme-annee/stage/audilab/Mission7DocumentationdinstallationdeZabbixetdesurveillancedesequipements.pdf" 
            target="_blank" 
            className="inline-flex items-center gap-2 px-4 py-3 bg-white/10 hover:bg-white/20 border border-white/10 rounded-lg transition-colors"
          >
            <File className="w-5 h-5" />
            <span>Documentation Zabbix</span>
          </a>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4 mt-8">
          <a 
            href="/deuxieme-annee/stage/audilab/rapport-audilab.pdf" 
            target="_blank" 
            className="inline-flex items-center gap-2 px-4 py-3 bg-white/10 hover:bg-white/20 border border-white/10 rounded-lg transition-colors"
          >
            <File className="w-5 h-5" />
            <span>Télécharger le rapport complet</span>
          </a>
          
          <a 
            href="/deuxieme-annee/stage/audilab/synthese-audilab.pdf" 
            target="_blank" 
            className="inline-flex items-center gap-2 px-4 py-3 bg-white/10 hover:bg-white/20 border border-white/10 rounded-lg transition-colors"
          >
            <File className="w-5 h-5" />
            <span>Télécharger la synthèse</span>
          </a>
          
          <a 
            href="https://www.audilab.fr/" 
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

export default AudilabSummary;

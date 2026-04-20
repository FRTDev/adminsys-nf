import { Server, Code, Network, Database, Layout } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";

export const SpecialtiesSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Reveal>
        <div className="glass p-8 rounded-2xl card-interactive hover-lift transition-all duration-500 h-full">
          <div className="flex items-center mb-6">
            <Server className="w-8 h-8 text-brand mr-3" />
            <h2 className="text-3xl font-bold text-foreground tracking-tight">SISR</h2>
          </div>
          <h3 className="text-lg text-brand mb-4">Solutions d'Infrastructure, Systèmes et Réseaux</h3>
          <p className="text-base text-muted-foreground mb-6 leading-relaxed">
            La spécialité SISR forme des professionnels capables de gérer et d'administrer l'infrastructure informatique des entreprises.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="glass-subtle p-4 rounded-xl">
              <Network className="w-6 h-6 text-brand mb-2" />
              <h4 className="text-base text-foreground font-semibold mb-1">Infrastructure Réseau</h4>
              <p className="text-sm text-muted-foreground">Configuration et maintenance des réseaux</p>
            </div>
            <div className="glass-subtle p-4 rounded-xl">
              <Server className="w-6 h-6 text-brand mb-2" />
              <h4 className="text-base text-foreground font-semibold mb-1">Administration Systèmes</h4>
              <p className="text-sm text-muted-foreground">Gestion des serveurs et services</p>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={100}>
        <div className="glass p-8 rounded-2xl card-interactive hover-lift transition-all duration-500 h-full">
          <div className="flex items-center mb-6">
            <Code className="w-8 h-8 text-brand mr-3" />
            <h2 className="text-3xl font-bold text-foreground tracking-tight">SLAM</h2>
          </div>
          <h3 className="text-lg text-brand mb-4">Solutions Logicielles et Applications Métiers</h3>
          <p className="text-base text-muted-foreground mb-6 leading-relaxed">
            La spécialité SLAM forme des développeurs capables de concevoir et maintenir des solutions applicatives.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="glass-subtle p-4 rounded-xl">
              <Layout className="w-6 h-6 text-brand mb-2" />
              <h4 className="text-base text-foreground font-semibold mb-1">Développement</h4>
              <p className="text-sm text-muted-foreground">Applications web et mobiles</p>
            </div>
            <div className="glass-subtle p-4 rounded-xl">
              <Database className="w-6 h-6 text-brand mb-2" />
              <h4 className="text-base text-foreground font-semibold mb-1">Base de données</h4>
              <p className="text-sm text-muted-foreground">Conception et gestion des données</p>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
};


import { Server, Code, Network, Database, Layout } from "lucide-react";

export const SpecialtiesSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* SISR Section */}
      <div className="glass p-8 rounded-lg hover:scale-105 transition-transform duration-300">
        <div className="flex items-center mb-6">
          <Server className="w-8 h-8 text-purple-400 mr-3" />
          <h2 className="text-3xl font-bold text-white">SISR</h2>
        </div>
        <h3 className="text-xl text-purple-400 mb-4">
          Solutions d'Infrastructure, Systèmes et Réseaux
        </h3>
        <p className="text-lg text-gray-300 mb-6 leading-relaxed">
          La spécialité SISR forme des professionnels capables de gérer et d'administrer l'infrastructure informatique des entreprises.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="glass p-4 rounded-lg">
            <Network className="w-6 h-6 text-purple-400 mb-2" />
            <h4 className="text-lg text-white font-semibold mb-2">Infrastructure Réseau</h4>
            <p className="text-base text-gray-400">Configuration et maintenance des réseaux</p>
          </div>
          <div className="glass p-4 rounded-lg">
            <Server className="w-6 h-6 text-purple-400 mb-2" />
            <h4 className="text-lg text-white font-semibold mb-2">Administration Systèmes</h4>
            <p className="text-base text-gray-400">Gestion des serveurs et services</p>
          </div>
        </div>
      </div>

      {/* SLAM Section */}
      <div className="glass p-8 rounded-lg hover:scale-105 transition-transform duration-300">
        <div className="flex items-center mb-6">
          <Code className="w-8 h-8 text-blue-400 mr-3" />
          <h2 className="text-3xl font-bold text-white">SLAM</h2>
        </div>
        <h3 className="text-xl text-blue-400 mb-4">
          Solutions Logicielles et Applications Métiers
        </h3>
        <p className="text-lg text-gray-300 mb-6 leading-relaxed">
          La spécialité SLAM forme des développeurs capables de concevoir et maintenir des solutions applicatives.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="glass p-4 rounded-lg">
            <Layout className="w-6 h-6 text-blue-400 mb-2" />
            <h4 className="text-lg text-white font-semibold mb-2">Développement</h4>
            <p className="text-base text-gray-400">Applications web et mobiles</p>
          </div>
          <div className="glass p-4 rounded-lg">
            <Database className="w-6 h-6 text-blue-400 mb-2" />
            <h4 className="text-lg text-white font-semibold mb-2">Base de données</h4>
            <p className="text-base text-gray-400">Conception et gestion des données</p>
          </div>
        </div>
      </div>
    </div>
  );
};

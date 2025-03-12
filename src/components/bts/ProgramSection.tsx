
import { BookOpen } from "lucide-react";

export const ProgramSection = () => {
  return (
    <div className="mt-16 glass p-8 rounded-lg hover:scale-105 transition-transform duration-300">
      <div className="flex items-center mb-6">
        <BookOpen className="w-8 h-8 text-white mr-3" />
        <h2 className="text-3xl font-bold text-white">Le Programme</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-white mb-4">Matières Générales</h3>
          <ul className="space-y-3">
            <li className="flex items-center text-gray-300 text-lg">
              <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
              Culture générale et expression
            </li>
            <li className="flex items-center text-gray-300 text-lg">
              <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
              Expression et communication en langue anglaise
            </li>
            <li className="flex items-center text-gray-300 text-lg">
              <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
              Mathématiques pour l'informatique
            </li>
            <li className="flex items-center text-gray-300 text-lg">
              <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
              Culture économique, juridique et managériale
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-white mb-4">Matières Professionnelles</h3>
          <ul className="space-y-3">
            <li className="flex items-center text-gray-300 text-lg">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
              Support et mise à disposition de services informatiques
            </li>
            <li className="flex items-center text-gray-300 text-lg">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
              Administration des systèmes et des réseaux (SISR)
            </li>
            <li className="flex items-center text-gray-300 text-lg">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
              Conception et développement d'applications (SLAM)
            </li>
            <li className="flex items-center text-gray-300 text-lg">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
              Cybersécurité
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

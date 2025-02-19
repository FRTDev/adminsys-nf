
import { BookOpen, Server, Code, Network, Database, Layout, Mail, Linkedin, GraduationCap } from "lucide-react";
import Navigation from "@/components/Navigation";

const BtsSio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-10 px-4 sm:px-6 lg:px-8 animate-fadeIn">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            {/* Ajout de l'icône GraduationCap */}
            <div className="mb-8 flex justify-center">
              <div className="w-24 h-24 rounded-full glass flex items-center justify-center">
                <GraduationCap className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              BTS SIO
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Le BTS Services Informatiques aux Organisations est un diplôme reconnu par l'état de niveau Bac+2.
              Il propose deux spécialités distinctes : SISR et SLAM.
            </p>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
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
              <p className="text-gray-300 mb-6">
                La spécialité SISR forme des professionnels capables de gérer et d'administrer l'infrastructure informatique des entreprises.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="glass p-4 rounded-lg">
                  <Network className="w-6 h-6 text-purple-400 mb-2" />
                  <h4 className="text-white font-semibold mb-2">Infrastructure Réseau</h4>
                  <p className="text-gray-400 text-sm">Configuration et maintenance des réseaux</p>
                </div>
                <div className="glass p-4 rounded-lg">
                  <Server className="w-6 h-6 text-purple-400 mb-2" />
                  <h4 className="text-white font-semibold mb-2">Administration Systèmes</h4>
                  <p className="text-gray-400 text-sm">Gestion des serveurs et services</p>
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
              <p className="text-gray-300 mb-6">
                La spécialité SLAM forme des développeurs capables de concevoir et maintenir des solutions applicatives.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="glass p-4 rounded-lg">
                  <Layout className="w-6 h-6 text-blue-400 mb-2" />
                  <h4 className="text-white font-semibold mb-2">Développement</h4>
                  <p className="text-gray-400 text-sm">Applications web et mobiles</p>
                </div>
                <div className="glass p-4 rounded-lg">
                  <Database className="w-6 h-6 text-blue-400 mb-2" />
                  <h4 className="text-white font-semibold mb-2">Base de données</h4>
                  <p className="text-gray-400 text-sm">Conception et gestion des données</p>
                </div>
              </div>
            </div>
          </div>

          {/* Programme Section */}
          <div className="mt-16 glass p-8 rounded-lg hover:scale-105 transition-transform duration-300">
            <div className="flex items-center mb-6">
              <BookOpen className="w-8 h-8 text-white mr-3" />
              <h2 className="text-3xl font-bold text-white">Le Programme</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white mb-4">Matières Générales</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                    Culture générale et expression
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                    Expression et communication en langue anglaise
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                    Mathématiques pour l'informatique
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                    Culture économique, juridique et managériale
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white mb-4">Matières Professionnelles</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                    Support et mise à disposition de services informatiques
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                    Administration des systèmes et des réseaux (SISR)
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                    Conception et développement d'applications (SLAM)
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                    Cybersécurité
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="glass-dark py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.linkedin.com/in/noah-f-b3a500265/"
              className="text-gray-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:n.froment37@gmail.com"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <div className="mt-4 text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Portfolio. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BtsSio;

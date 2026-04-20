import { BookOpen } from "lucide-react";

const generales = [
  "Culture générale et expression",
  "Expression et communication en langue anglaise",
  "Mathématiques pour l'informatique",
  "Culture économique, juridique et managériale",
];

const pro = [
  "Support et mise à disposition de services informatiques",
  "Administration des systèmes et des réseaux (SISR)",
  "Conception et développement d'applications (SLAM)",
  "Cybersécurité",
];

export const ProgramSection = () => {
  return (
    <div className="glass p-8 rounded-2xl">
      <div className="flex items-center mb-8">
        <BookOpen className="w-7 h-7 text-foreground mr-3" />
        <h2 className="text-3xl font-bold text-foreground tracking-tight">Le Programme</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-4">Matières Générales</h3>
          <ul className="space-y-3">
            {generales.map((item) => (
              <li key={item} className="flex items-center gap-3 text-muted-foreground text-base">
                <span className="w-1.5 h-1.5 bg-brand rounded-full shadow-[0_0_8px_hsl(var(--glow))]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-4">Matières Professionnelles</h3>
          <ul className="space-y-3">
            {pro.map((item) => (
              <li key={item} className="flex items-center gap-3 text-muted-foreground text-base">
                <span className="w-1.5 h-1.5 bg-brand rounded-full shadow-[0_0_8px_hsl(var(--glow))]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

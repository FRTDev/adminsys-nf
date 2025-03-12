
import { SectionTitle } from "@/components/shared/SectionTitle";

export const IntroductionSection = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-4">Pourquoi cette veille est essentielle</h2>
      <p className="text-gray-300 leading-relaxed">
        La surveillance des vulnérabilités et des techniques d'attaque permet d'anticiper les menaces et de renforcer la sécurité des systèmes. Le <strong>CERT-FR</strong> (Centre gouvernemental français de veille cyber) recense quotidiennement des failles critiques, comme la vulnérabilité <strong>Log4Shell</strong> (CVE-2021-44228) ou les attaques <strong>zero-day</strong> exploitant des failles non patchées. Une veille ciblée aide à prioriser les correctifs et à comprendre les TTP (<em>Tactics, Techniques, Procedures</em>) des attaquants.
      </p>
    </div>
  );
};

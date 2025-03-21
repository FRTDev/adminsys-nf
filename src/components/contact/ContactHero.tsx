
import { MessageSquare } from "lucide-react";

export const ContactHero = () => {
  return (
    <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 animate-fadeIn">
      <div className="max-w-5xl mx-auto">
        <div className="text-center">
          <div className="mb-8 flex justify-center">
            <div className="w-20 h-20 rounded-full glass flex items-center justify-center">
              <MessageSquare className="w-8 h-8 text-white/80" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-medium text-gradient mb-4 tracking-tight">
            Contactez-moi
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Une question, une proposition ou simplement envie de discuter ? N'hésitez pas à m'envoyer un message !
          </p>
        </div>
      </div>
    </section>
  );
};

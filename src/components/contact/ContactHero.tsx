
import { MessageSquare } from "lucide-react";

export const ContactHero = () => {
  return (
    <section className="pt-20 pb-10 px-4 sm:px-6 lg:px-8 animate-fadeIn">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="mb-8 flex justify-center">
            <div className="w-24 h-24 rounded-full glass flex items-center justify-center">
              <MessageSquare className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 tracking-tight">
            Contactez-moi
          </h1>
          <p className="text-xl sm:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Une question, une proposition ou simplement envie de discuter ? N'hésitez pas à m'envoyer un message !
          </p>
        </div>
      </div>
    </section>
  );
};

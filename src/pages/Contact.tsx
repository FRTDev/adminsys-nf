import PageLayout from "@/components/shared/PageLayout";
import { PageHero } from "@/components/shared/PageHero";
import { MessageSquare } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { Reveal } from "@/components/shared/Reveal";

const Contact = () => {
  return (
    <PageLayout>
      <PageHero
        icon={<MessageSquare />}
        title="Contactez-moi"
        subtitle="Une question, une proposition ou simplement envie de discuter ? N'hésitez pas à m'envoyer un message !"
      />
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <Reveal>
            <div className="glass p-6 sm:p-8 rounded-2xl">
              <ContactForm />
              <div className="border-t border-white/10 my-8" />
              <ContactInfo />
            </div>
          </Reveal>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;

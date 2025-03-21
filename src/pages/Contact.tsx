
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/shared/Footer";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";

const Contact = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <ContactHero />

      {/* Contact Form Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto glass p-8 rounded-lg border border-white/10 shadow-lg">
          <ContactForm />
          <div className="border-t border-white/10 my-8"></div>
          <ContactInfo />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;

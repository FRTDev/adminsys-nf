import Navigation from "@/components/Navigation";
import { Mail, MessageSquare, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Footer from "@/components/shared/Footer";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Le nom doit contenir au moins 2 caractères.",
  }),
  email: z.string().email({
    message: "Veuillez entrer une adresse email valide.",
  }),
  subject: z.string().min(5, {
    message: "Le sujet doit contenir au moins 5 caractères.",
  }),
  message: z.string().min(10, {
    message: "Le message doit contenir au moins 10 caractères.",
  }),
});

const Contact = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    
    try {
      // Créer le corps du message avec le nom et l'email de l'expéditeur
      const body = `
De: ${values.name} (${values.email})

${values.message}
      `;
      
      // Encoder les paramètres pour le lien mailto
      const mailtoLink = `mailto:n.froment37@gmail.com?subject=${encodeURIComponent(values.subject)}&body=${encodeURIComponent(body)}`;
      
      // Ouvrir le client mail par défaut avec les informations pré-remplies
      window.location.href = mailtoLink;
      
      toast({
        title: "Mail préparé !",
        description: "Votre message a été préparé dans votre client mail.",
      });
      
      // Réinitialiser le formulaire après un court délai
      setTimeout(() => {
        form.reset();
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de la préparation du mail.",
        variant: "destructive",
      });
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
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

      {/* Contact Form Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="glass p-8 rounded-lg">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base font-medium">Nom</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} className="text-base" />
                      </FormControl>
                      <FormMessage className="text-sm" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base font-medium">Email</FormLabel>
                      <FormControl>
                        <Input placeholder="john.doe@example.com" {...field} className="text-base" />
                      </FormControl>
                      <FormMessage className="text-sm" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base font-medium">Sujet</FormLabel>
                      <FormControl>
                        <Input placeholder="Le sujet de votre message" {...field} className="text-base" />
                      </FormControl>
                      <FormMessage className="text-sm" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base font-medium">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Écrivez votre message ici..."
                          className="min-h-[150px] text-base"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-sm" />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="w-full flex items-center justify-center gap-2 text-base py-6"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                  {isLoading ? "Préparation du mail..." : "Ouvrir dans mon client mail"}
                </Button>
              </form>
            </Form>
          </div>

          <div className="mt-8 text-center">
            <p className="text-base text-gray-400">
              Vous pouvez également me contacter directement par email à{" "}
              <a
                href="mailto:n.froment37@gmail.com"
                className="text-white hover:text-primary transition-colors flex items-center justify-center gap-2 mt-2 text-lg font-medium"
              >
                <Mail className="w-5 h-5" />
                n.froment37@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;

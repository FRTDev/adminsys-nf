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
import { Send } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(2, { message: "Le nom doit contenir au moins 2 caractères." }),
  email: z.string().email({ message: "Veuillez entrer une adresse email valide." }),
  subject: z.string().min(5, { message: "Le sujet doit contenir au moins 5 caractères." }),
  message: z.string().min(10, { message: "Le message doit contenir au moins 10 caractères." }),
});

const inputClasses = "text-base bg-white/5 border-white/10 focus-visible:border-brand/60 focus-visible:ring-brand/30 transition-all";

export const ContactForm = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    try {
      const body = `\nDe: ${values.name} (${values.email})\n\n${values.message}\n      `;
      const mailtoLink = `mailto:n.froment37@gmail.com?subject=${encodeURIComponent(values.subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoLink;
      toast({
        title: "Mail préparé !",
        description: "Votre message a été préparé dans votre client mail.",
      });
      setTimeout(() => {
        form.reset();
        setIsLoading(false);
      }, 1000);
    } catch {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de la préparation du mail.",
        variant: "destructive",
      });
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium">Nom</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} className={inputClasses} />
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
              <FormLabel className="text-sm font-medium">Email</FormLabel>
              <FormControl>
                <Input placeholder="john.doe@example.com" {...field} className={inputClasses} />
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
              <FormLabel className="text-sm font-medium">Sujet</FormLabel>
              <FormControl>
                <Input placeholder="Le sujet de votre message" {...field} className={inputClasses} />
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
              <FormLabel className="text-sm font-medium">Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Écrivez votre message ici..."
                  className={`min-h-[150px] ${inputClasses}`}
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-sm" />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="btn-shine w-full flex items-center justify-center gap-2 text-base py-6"
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
  );
};

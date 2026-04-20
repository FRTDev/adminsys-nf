import { Mail } from "lucide-react";

export const ContactInfo = () => {
  return (
    <div className="text-center">
      <p className="text-base text-muted-foreground">
        Vous pouvez également me contacter directement par email à{" "}
      </p>
      <a
        href="mailto:n.froment37@gmail.com"
        className="inline-flex items-center justify-center gap-2 mt-3 text-base font-medium text-foreground hover:text-brand transition-colors group"
      >
        <Mail className="w-4 h-4 transition-transform group-hover:scale-110" />
        n.froment37@gmail.com
      </a>
    </div>
  );
};

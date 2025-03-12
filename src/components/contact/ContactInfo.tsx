
import { Mail } from "lucide-react";

export const ContactInfo = () => {
  return (
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
  );
};

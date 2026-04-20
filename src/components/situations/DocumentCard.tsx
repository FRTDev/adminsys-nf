import React from "react";
import { FileText } from "lucide-react";

interface DocumentCardProps {
  title: string;
  description: string;
  filePath: string;
}

const DocumentCard: React.FC<DocumentCardProps> = ({ title, description, filePath }) => {
  return (
    <a
      href={filePath}
      target="_blank"
      rel="noopener noreferrer"
      className="group block p-5 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.07] hover:border-brand/30 transition-all duration-500 hover-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60"
    >
      <div className="flex items-start gap-4">
        <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-foreground group-hover:scale-110 group-hover:bg-brand/20 group-hover:border-brand/40 transition-all duration-500">
          <FileText className="h-5 w-5" />
        </div>
        <div className="min-w-0">
          <h3 className="text-base font-semibold text-foreground mb-1 tracking-tight">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </a>
  );
};

export default DocumentCard;

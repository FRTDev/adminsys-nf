
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
      className="group block p-6 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 hover:shadow-lg"
    >
      <div className="flex items-start gap-4">
        <div className="p-2 rounded-md bg-white/5 border border-white/10 text-white group-hover:scale-110 transition-transform duration-300">
          <FileText className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-lg font-medium text-white mb-1">{title}</h3>
          <p className="text-sm text-gray-400">{description}</p>
        </div>
      </div>
    </a>
  );
};

export default DocumentCard;

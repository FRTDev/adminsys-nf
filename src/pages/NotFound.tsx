import PageLayout from "@/components/shared/PageLayout";
import { NotFoundContent } from "@/components/error/NotFoundContent";

const NotFound = () => {
  return (
    <PageLayout>
      <div className="flex-grow flex items-center justify-center py-32 px-4">
        <div className="glass-strong p-12 rounded-2xl max-w-md w-full animate-fade-in-scale">
          <NotFoundContent />
        </div>
      </div>
    </PageLayout>
  );
};

export default NotFound;

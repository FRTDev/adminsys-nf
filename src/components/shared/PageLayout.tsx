import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/shared/Footer";
import { cn } from "@/lib/utils";

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const PageLayout = ({ children, className }: PageLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-background relative">
      <Navigation />
      <main className={cn("flex-1 relative z-10", className)}>{children}</main>
      <Footer />
    </div>
  );
};

export default PageLayout;

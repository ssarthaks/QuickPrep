import { BookOpen, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted/30 py-8">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <BookOpen className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-semibold">Quickie</span>
          </div>

          <p className="text-sm text-muted-foreground text-center">
            Your reliable companion for last-minute interview preparation
          </p>

          <p className="flex items-center gap-1 text-sm text-muted-foreground">
            Developed by Sarthak
          </p>
        </div>
      </div>
    </footer>
  );
};

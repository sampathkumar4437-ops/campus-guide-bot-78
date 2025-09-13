import { GraduationCap, Bot } from "lucide-react";

export const CampusHeader = () => {
  return (
    <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-lg">
            <GraduationCap className="h-6 w-6" />
          </div>
          <div className="flex-1">
            <h1 className="text-xl font-bold text-foreground">Campus Assistant</h1>
            <p className="text-sm text-muted-foreground">AI-powered campus information</p>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Bot className="h-4 w-4 text-accent" />
            <span>AI Ready</span>
          </div>
        </div>
      </div>
    </header>
  );
};
import { GraduationCap, Bot } from "lucide-react";

export const CampusHeader = () => {
  return (
    <header className="border-b bg-card/30 backdrop-blur-md sticky top-0 z-10 animate-slide-in-left">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-2xl animate-float hover:animate-pulse-glow transition-all duration-300">
            <GraduationCap className="h-7 w-7" />
          </div>
          <div className="flex-1 animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Campus Assistant
            </h1>
            <p className="text-sm text-muted-foreground">AI-powered campus information</p>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground animate-slide-in-right">
            <Bot className="h-5 w-5 text-accent animate-pulse" />
            <span className="bg-gradient-accent bg-clip-text text-transparent font-semibold">AI Ready</span>
          </div>
        </div>
      </div>
    </header>
  );
};
import { CampusHeader } from "@/components/CampusHeader";
import { ChatInterface } from "@/components/ChatInterface";
import { FloatingOrbs } from "@/components/FloatingOrbs";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-bg bg-300% animate-gradient-shift relative overflow-hidden">
      {/* Animated mesh background */}
      <div className="fixed inset-0 bg-gradient-mesh opacity-60 animate-gradient-shift" />
      
      {/* Floating orbs */}
      <FloatingOrbs />
      
      {/* Main content */}
      <div className="relative z-10">
        <CampusHeader />
        <main className="container mx-auto max-w-4xl p-4">
          <div className="h-[calc(100vh-120px)] rounded-2xl bg-card/40 backdrop-blur-xl border border-primary/20 shadow-2xl hover:shadow-primary/20 transition-all duration-500 animate-scale-in">
            <ChatInterface />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;

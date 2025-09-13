import { CampusHeader } from "@/components/CampusHeader";
import { ChatInterface } from "@/components/ChatInterface";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-bg">
      <CampusHeader />
      <main className="container mx-auto max-w-4xl">
        <div className="h-[calc(100vh-80px)] rounded-t-2xl bg-card/80 backdrop-blur-sm border-x border-t shadow-2xl">
          <ChatInterface />
        </div>
      </main>
    </div>
  );
};

export default Index;

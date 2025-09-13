import { cn } from "@/lib/utils";
import { Bot, User } from "lucide-react";

export interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

interface ChatMessageProps {
  message: Message;
}

export const ChatMessage = ({ message }: ChatMessageProps) => {
  return (
    <div
      className={cn(
        "flex w-full gap-3 animate-scale-in",
        message.isUser ? "justify-end animate-slide-in-right" : "justify-start animate-slide-in-left"
      )}
    >
      {!message.isUser && (
        <div className="flex h-10 w-10 shrink-0 select-none items-center justify-center rounded-full bg-gradient-primary text-primary-foreground shadow-2xl animate-float hover:animate-pulse-glow transition-all duration-300">
          <Bot className="h-5 w-5" />
        </div>
      )}
      
      <div
        className={cn(
          "max-w-[85%] rounded-2xl px-5 py-4 text-sm leading-relaxed shadow-lg backdrop-blur-sm border transition-all duration-300 hover:shadow-xl",
          message.isUser
            ? "bg-gradient-primary text-primary-foreground ml-12 hover:scale-[1.02]"
            : "bg-card/90 text-card-foreground mr-12 hover:bg-card/95 border-primary/20"
        )}
      >
        <div className="whitespace-pre-wrap">{message.content}</div>
        <div className={cn(
          "mt-2 text-xs opacity-70",
          message.isUser ? "text-primary-foreground/70" : "text-muted-foreground"
        )}>
          {message.timestamp.toLocaleTimeString([], { 
            hour: '2-digit', 
            minute: '2-digit' 
          })}
        </div>
      </div>
      
      {message.isUser && (
        <div className="flex h-10 w-10 shrink-0 select-none items-center justify-center rounded-full bg-gradient-accent text-accent-foreground shadow-2xl animate-float hover:animate-pulse-glow transition-all duration-300">
          <User className="h-5 w-5" />
        </div>
      )}
    </div>
  );
};
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
        "flex w-full gap-3 animate-fade-in",
        message.isUser ? "justify-end" : "justify-start"
      )}
    >
      {!message.isUser && (
        <div className="flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-full bg-gradient-primary text-primary-foreground shadow-lg">
          <Bot className="h-4 w-4" />
        </div>
      )}
      
      <div
        className={cn(
          "max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm",
          message.isUser
            ? "bg-chat-user text-chat-user-foreground ml-12"
            : "bg-chat-bot text-chat-bot-foreground border mr-12"
        )}
      >
        <div className="whitespace-pre-wrap">{message.content}</div>
        <div className={cn(
          "mt-1 text-xs opacity-70",
          message.isUser ? "text-chat-user-foreground" : "text-muted-foreground"
        )}>
          {message.timestamp.toLocaleTimeString([], { 
            hour: '2-digit', 
            minute: '2-digit' 
          })}
        </div>
      </div>
      
      {message.isUser && (
        <div className="flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-full bg-gradient-accent text-accent-foreground shadow-lg">
          <User className="h-4 w-4" />
        </div>
      )}
    </div>
  );
};
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Sparkles } from "lucide-react";
import { ChatMessage, Message } from "./ChatMessage";
import { campusData, quickResponses } from "@/data/campusData";
import { useToast } from "@/hooks/use-toast";

export const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hi! I'm your Campus Assistant. I can help you with schedules, facilities, dining, library services, and administrative procedures. What would you like to know?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateResponse = (query: string): string => {
    const lowerQuery = query.toLowerCase();
    
    // Library queries
    if (lowerQuery.includes("library") || lowerQuery.includes("book") || lowerQuery.includes("study room")) {
      if (lowerQuery.includes("hours") || lowerQuery.includes("open") || lowerQuery.includes("close")) {
        return `📚 **Library Hours:**\n\n• **Weekdays:** ${campusData.library.hours.weekdays}\n• **Weekends:** ${campusData.library.hours.weekends}\n• **Finals Week:** ${campusData.library.hours.finals}\n\nNeed help with anything else?`;
      }
      if (lowerQuery.includes("study room") || lowerQuery.includes("reserve")) {
        return `📖 **Study Room Reservations:**\n\nYou can reserve study rooms online through the library portal or visit the circulation desk on the ground floor. Study rooms are available during regular library hours and include whiteboards and projectors.\n\n**Location:** All library floors\n**Advance booking:** Up to 2 weeks`;
      }
      return `📚 **Library Services:**\n\n${campusData.library.services.map(service => `• ${service}`).join('\n')}\n\n**Floor Guide:**\n${Object.entries(campusData.library.floors).map(([floor, desc]) => `• **${floor}:** ${desc}`).join('\n')}`;
    }

    // Dining queries
    if (lowerQuery.includes("dining") || lowerQuery.includes("food") || lowerQuery.includes("eat") || lowerQuery.includes("meal")) {
      if (lowerQuery.includes("hours") || lowerQuery.includes("open") || lowerQuery.includes("close")) {
        return `🍽️ **Dining Hours:**\n\n${campusData.dining.map(place => `**${place.name}**\n${place.hours}\n📍 ${place.location}\n`).join('\n')}`;
      }
      return `🍽️ **Campus Dining Options:**\n\n${campusData.dining.map(place => 
        `**${place.name}**\n⏰ ${place.hours}\n🥗 ${place.options.join(', ')}\n📍 ${place.location}\n`
      ).join('\n')}`;
    }

    // Schedule queries
    if (lowerQuery.includes("schedule") || lowerQuery.includes("semester") || lowerQuery.includes("finals") || lowerQuery.includes("midterm")) {
      if (lowerQuery.includes("finals")) {
        return `📅 **Finals Schedule:**\n\n• **Fall 2024:** ${campusData.schedules.academic["fall 2024"].finals}\n• **Spring 2025:** ${campusData.schedules.academic["spring 2025"].finals}\n\nLibrary will be open 24/7 during finals week. Good luck! 🍀`;
      }
      return `📅 **Academic Calendar:**\n\n**Fall 2024**\n• Classes: ${campusData.schedules.academic["fall 2024"].start} - ${campusData.schedules.academic["fall 2024"].end}\n• Midterms: ${campusData.schedules.academic["fall 2024"].midterms}\n• Finals: ${campusData.schedules.academic["fall 2024"].finals}\n\n**Spring 2025**\n• Classes: ${campusData.schedules.academic["spring 2025"].start} - ${campusData.schedules.academic["spring 2025"].end}\n• Midterms: ${campusData.schedules.academic["spring 2025"].midterms}\n• Finals: ${campusData.schedules.academic["spring 2025"].finals}`;
    }

    // Facilities queries
    if (lowerQuery.includes("facility") || lowerQuery.includes("gym") || lowerQuery.includes("recreation") || lowerQuery.includes("computer lab") || lowerQuery.includes("lab")) {
      return `🏢 **Campus Facilities:**\n\n${campusData.facilities.map(facility => 
        `**${facility.name}**\n⏰ ${facility.hours}\n🎯 ${facility.amenities.join(', ')}\n📍 ${facility.location}\n`
      ).join('\n')}`;
    }

    // Administrative queries  
    if (lowerQuery.includes("parking") || lowerQuery.includes("permit") || lowerQuery.includes("transcript") || lowerQuery.includes("financial aid") || lowerQuery.includes("registrar") || lowerQuery.includes("id card")) {
      if (lowerQuery.includes("parking") || lowerQuery.includes("permit")) {
        const studentServices = campusData.administrative.find(office => office.office === "Student Services");
        return `🅿️ **Parking Permits:**\n\nYou can get parking permits at **${studentServices?.office}**\n📍 ${studentServices?.location}\n⏰ ${studentServices?.hours}\n\n**Types available:** Student, Faculty, Visitor\n**Cost:** $50/semester for students\n\n💡 **Tip:** Apply online to skip the line!`;
      }
      
      return `🏛️ **Administrative Offices:**\n\n${campusData.administrative.map(office => 
        `**${office.office}**\n🛠️ ${office.services.join(', ')}\n⏰ ${office.hours}\n📍 ${office.location}\n`
      ).join('\n')}`;
    }

    // WiFi/IT queries
    if (lowerQuery.includes("wifi") || lowerQuery.includes("password") || lowerQuery.includes("internet") || lowerQuery.includes("it help")) {
      const itDesk = campusData.administrative.find(office => office.office === "IT Help Desk");
      return `💻 **IT Support:**\n\n**${itDesk?.office}**\n🛠️ ${itDesk?.services.join(', ')}\n⏰ ${itDesk?.hours}\n📍 ${itDesk?.location}\n\n**WiFi Network:** CampusWiFi\n**Guest Network:** CampusGuest\n\n💡 Use your student ID and password to connect!`;
    }

    // Default response
    return `I can help you with information about:\n\n🏫 **Campus Facilities** - Gym, computer labs, study spaces\n📚 **Library Services** - Hours, room reservations, research help\n🍽️ **Dining Options** - Meal times, locations, menus\n📅 **Academic Schedules** - Semester dates, finals, breaks\n🏛️ **Administrative** - Permits, transcripts, student services\n\nWhat specific information are you looking for?`;
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: generateResponse(input),
        isUser: false,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 800 + Math.random() * 1200);
  };

  const handleQuickResponse = (response: string) => {
    setInput(response);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-full max-h-[calc(100vh-120px)]">
      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
        
        {isTyping && (
          <div className="flex items-center gap-3 animate-fade-in">
            <div className="flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-full bg-gradient-primary text-primary-foreground shadow-lg">
              <Sparkles className="h-4 w-4 animate-pulse" />
            </div>
            <div className="bg-chat-bot border rounded-2xl px-4 py-3 mr-12">
              <div className="flex space-x-1">
                <div className="h-2 w-2 bg-muted-foreground rounded-full animate-bounce" />
                <div className="h-2 w-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                <div className="h-2 w-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Responses */}
      <div className="p-4 border-t bg-muted/30">
        <div className="mb-3">
          <p className="text-sm text-muted-foreground mb-2">Quick questions:</p>
          <div className="flex flex-wrap gap-2">
            {quickResponses.slice(0, 3).map((response, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                onClick={() => handleQuickResponse(response)}
                className="text-xs hover:bg-accent/10"
              >
                {response}
              </Button>
            ))}
          </div>
        </div>

        {/* Input Area */}
        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask about schedules, facilities, dining, library, or admin..."
            className="flex-1"
            disabled={isTyping}
          />
          <Button 
            onClick={handleSend} 
            disabled={!input.trim() || isTyping}
            className="bg-gradient-primary hover:opacity-90 shadow-lg"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
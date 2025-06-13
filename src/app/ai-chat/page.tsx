
"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Bot, User as UserIcon, Send, CornerDownLeft, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { chatWithAI, type ChatInput, type ChatOutput } from "@/ai/flows/chat-flow";
import { useToast } from "@/hooks/use-toast";
import { APP_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";


interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export default function AIChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    if (scrollAreaRef.current) {
      const scrollableViewport = scrollAreaRef.current.querySelector('div[data-radix-scroll-area-viewport="true"]');
      if (scrollableViewport) {
        scrollableViewport.scrollTop = scrollableViewport.scrollHeight;
      }
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Add an initial greeting from the AI
    setMessages([
      {
        id: "initial-greeting",
        role: "assistant",
        content: `Hi there! I'm an AI assistant powered by DeepSeek. How can I help you today?`,
        timestamp: new Date(),
      },
    ]);
  }, []);

  const handleSendMessage = async () => {
    const trimmedInput = inputValue.trim();
    if (!trimmedInput || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString() + "-user",
      role: "user",
      content: trimmedInput,
      timestamp: new Date(),
    };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      const flowInput: ChatInput = { userMessage: trimmedInput };
      // To add conversation history for context:
      // const conversationHistory = messages.map(msg => ({ role: msg.role, content: msg.content }));
      // const flowInputWithHistory: ChatInput = { userMessage: trimmedInput, conversationHistory };
      
      const result: ChatOutput = await chatWithAI(flowInput);

      if (result.aiResponse) {
        const aiMessage: Message = {
          id: Date.now().toString() + "-assistant",
          role: "assistant",
          content: result.aiResponse,
          timestamp: new Date(),
        };
        setMessages((prevMessages) => [...prevMessages, aiMessage]);
      } else {
        throw new Error("AI response was empty.");
      }
    } catch (error) {
      console.error("Error calling AI chat flow:", error);
      toast({
        title: "Error",
        description: "Sorry, I couldn't get a response. Please try again.",
        variant: "destructive",
      });
      // Optionally add an error message to the chat
      const errorMessage: Message = {
        id: Date.now().toString() + "-error",
        role: "assistant",
        content: "I'm having trouble connecting right now. Please try again in a moment.",
        timestamp: new Date(),
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setIsLoading(false);
      inputRef.current?.focus();
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="container mx-auto px-0 md:px-4 py-4 md:py-8 flex flex-col h-[calc(100vh-4rem)] md:h-[calc(100vh-5rem)]">
      <header className="mb-4 md:mb-6 px-4 md:px-0">
        <div className="flex items-center justify-between">
            <h1 className="font-headline text-3xl font-bold text-foreground flex items-center">
              <Bot className="mr-3 h-8 w-8 text-primary" />
              Let's chat with AI
            </h1>
            <Button asChild variant="outline" size="sm">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Dashboard
              </Link>
            </Button>
        </div>
        <p className="text-muted-foreground mt-1 font-body">
          Powered by DeepSeek via OpenRouter.
        </p>
      </header>

      <Card className="flex-1 flex flex-col shadow-xl overflow-hidden">
        <CardContent className="flex-1 p-0 overflow-hidden">
          <ScrollArea className="h-full p-4 md:p-6" ref={scrollAreaRef}>
            <div className="space-y-6">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    "flex items-start gap-3",
                    message.role === "user" ? "justify-end" : "justify-start"
                  )}
                >
                  {message.role === "assistant" && (
                    <Avatar className="h-9 w-9 border border-primary/50">
                      <AvatarFallback className="bg-primary/20 text-primary">
                        <Bot className="h-5 w-5" />
                      </AvatarFallback>
                    </Avatar>
                  )}
                  <div
                    className={cn(
                      "max-w-[70%] rounded-xl px-4 py-3 shadow-md",
                      message.role === "user"
                        ? "bg-primary text-primary-foreground rounded-br-none"
                        : "bg-muted text-foreground rounded-bl-none"
                    )}
                  >
                    <p className="text-sm font-body whitespace-pre-wrap break-words">{message.content}</p>
                    <p className={cn(
                        "text-xs mt-1", 
                        message.role === "user" ? "text-primary-foreground/70 text-right" : "text-muted-foreground/80 text-left"
                      )}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                  {message.role === "user" && (
                     <Avatar className="h-9 w-9 border border-secondary/50">
                      <AvatarFallback className="bg-secondary/20 text-secondary-foreground">
                        <UserIcon className="h-5 w-5" />
                      </AvatarFallback>
                    </Avatar>
                  )}
                </div>
              ))}
              {isLoading && (
                <div className="flex items-start gap-3 justify-start">
                  <Avatar className="h-9 w-9 border border-primary/50">
                    <AvatarFallback className="bg-primary/20 text-primary">
                      <Bot className="h-5 w-5" />
                    </AvatarFallback>
                  </Avatar>
                  <div className="max-w-[70%] rounded-xl px-4 py-3 shadow-md bg-muted text-foreground rounded-bl-none flex items-center">
                    <Loader2 className="h-5 w-5 animate-spin mr-2 text-primary" />
                    <span className="text-sm font-body">Thinking...</span>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>
        </CardContent>
        <CardFooter className="p-4 md:p-6 border-t bg-background/80 backdrop-blur-sm">
          <div className="flex w-full items-center space-x-2">
            <Input
              ref={inputRef}
              type="text"
              placeholder="Type your message..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              disabled={isLoading}
              className="flex-1 text-base py-3"
              aria-label="Chat message input"
            />
            <Button type="submit" onClick={handleSendMessage} disabled={isLoading || !inputValue.trim()} className="px-4 py-3">
              {isLoading ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <Send className="h-5 w-5" />
              )}
              <span className="sr-only">Send message</span>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

    
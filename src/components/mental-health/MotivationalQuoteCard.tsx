"use client";

import { Zap, Lightbulb } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motivationalQuotes, relaxationTips } from "@/lib/constants";
import { useState, useEffect } from "react";

export function MotivationalQuoteCard() {
  const [dailyQuote, setDailyQuote] = useState("");

  useEffect(() => {
    const getDailyQuote = () => {
      const dayOfYear = Math.floor((new Date().getTime() - new Date(new Date().getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));
      return motivationalQuotes[dayOfYear % motivationalQuotes.length];
    };
    setDailyQuote(getDailyQuote());
  }, []);

  return (
    <Card className="shadow-xl">
      <CardHeader className="flex flex-row items-center space-x-3 pb-3">
        <div className="p-2 bg-accent/10 rounded-md">
          <Zap className="h-6 w-6 text-accent" />
        </div>
        <CardTitle className="font-headline text-xl text-foreground">Daily Boost & Relaxation</CardTitle>
      </CardHeader>
      <CardContent>
        {dailyQuote && (
          <div className="mb-6 p-4 border border-dashed border-accent/50 rounded-lg bg-accent/5">
            <p className="text-center font-semibold text-accent-foreground font-body text-lg italic">
              "{dailyQuote}"
            </p>
          </div>
        )}
        
        <div>
          <h4 className="font-headline text-lg text-foreground mb-3 flex items-center">
            <Lightbulb className="h-5 w-5 mr-2 text-primary" />
            Quick Relaxation Techniques
          </h4>
          <Accordion type="single" collapsible className="w-full">
            {relaxationTips.map((tip, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="font-body text-base hover:no-underline">
                  {tip.title}
                </AccordionTrigger>
                <AccordionContent className="font-body text-sm text-muted-foreground">
                  {tip.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </CardContent>
    </Card>
  );
}

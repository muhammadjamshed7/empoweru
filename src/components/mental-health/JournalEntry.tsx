"use client";

import { useState, useEffect } from "react";
import { BookOpenText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export function JournalEntry() {
  const [journalText, setJournalText] = useState("");
  const { toast } = useToast();

  useEffect(() => {
    const storedJournal = localStorage.getItem("empoweru-journal-entry");
    if (storedJournal) {
      setJournalText(storedJournal);
    }
  }, []);

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setJournalText(event.target.value);
    localStorage.setItem("empoweru-journal-entry", event.target.value);
  };

  const handleSaveToCloud = () => {
    // Placeholder for actual cloud saving logic
    toast({
      title: "Journal Saved!",
      description: "Your thoughts have been (conceptually) saved to the cloud.",
      variant: "default",
    });
  };

  return (
    <Card className="shadow-xl flex flex-col h-full">
      <CardHeader className="flex flex-row items-center space-x-3 pb-3">
         <div className="p-2 bg-accent/10 rounded-md">
            <BookOpenText className="h-6 w-6 text-accent" />
         </div>
        <CardTitle className="font-headline text-xl text-foreground">Quick Journal</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col">
        <Textarea
          placeholder="A few words about your thoughts today..."
          value={journalText}
          onChange={handleTextChange}
          className="flex-grow mb-4 min-h-[100px] font-body"
        />
        <Button onClick={handleSaveToCloud} className="w-full sm:w-auto self-end font-body">
          Save to Cloud
        </Button>
      </CardContent>
    </Card>
  );
}


"use client";

import { useState } from "react";
import { studyTips, StudyTip } from "@/lib/constants";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Palette, Timer, Users, Layers, Lightbulb, Home, BookOpen, BrainCog, LucideIcon } from "lucide-react";

interface StudyTipCardProps {
  tip: StudyTip;
}

const iconMap: { [key: string]: LucideIcon } = {
  Palette,
  Timer,
  Users,
  Layers,
  Lightbulb,
  Home,
  BookOpen,
  BrainCog,
};

function StudyTipCard({ tip }: StudyTipCardProps) {
  const TipIcon = iconMap[tip.icon] || Lightbulb;
  return (
    <Card className="w-64 min-w-[250px] flex-shrink-0 shadow-md hover:shadow-lg transition-shadow duration-200 h-full flex flex-col">
      <CardHeader className="flex flex-row items-center space-x-3 pb-2 pt-4">
        <div className="p-2 bg-primary/10 rounded-md">
          <TipIcon className="h-6 w-6 text-primary" />
        </div>
        <CardTitle className="text-sm font-semibold text-primary-foreground">{tip.ageGroup}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground font-body">{tip.tip}</p>
      </CardContent>
    </Card>
  );
}

export function StudyTipsSection() {
  const ageGroups: StudyTip['ageGroup'][] = ["Primary", "Middle School", "High School"];
  const [activeTab, setActiveTab] = useState<StudyTip['ageGroup']>(ageGroups[0]);

  const filteredTips = studyTips.filter(tip => tip.ageGroup === activeTab);

  return (
    <div className="space-y-4">
      <Tabs defaultValue={activeTab} onValueChange={(value) => setActiveTab(value as StudyTip['ageGroup'])} className="w-full">
        <TabsList className="grid w-full grid-cols-3 md:w-auto md:inline-flex">
          {ageGroups.map(group => (
            <TabsTrigger key={group} value={group} className="text-xs sm:text-sm">
              {group}
            </TabsTrigger>
          ))}
        </TabsList>
        {ageGroups.map(group => (
          <TabsContent key={group} value={group}>
            <ScrollArea className="w-full whitespace-nowrap rounded-md pb-4">
              <div className="flex space-x-4">
                {studyTips.filter(tip => tip.ageGroup === group).map((tip) => (
                  <StudyTipCard key={tip.id} tip={tip} />
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

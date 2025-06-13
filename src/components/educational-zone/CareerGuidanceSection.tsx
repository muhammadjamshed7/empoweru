
"use client";

import { useState } from "react";
import { careerInterests, CareerInterest, CareerPath } from "@/lib/constants";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Briefcase, DollarSign, BookOpen as StudyIcon, Cpu, FlaskConical, Palette as ArtsIcon, TrendingUp as BusinessIcon, Code2, BarChart3, Microscope, Leaf, Paintbrush, Newspaper, Megaphone, TrendingUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const interestIconMap: { [key: string]: LucideIcon } = {
  Cpu,
  FlaskConical,
  Palette: ArtsIcon,
  Briefcase: BusinessIcon,
};

const careerPathIconMap: { [key: string]: LucideIcon } = {
  Code2, BarChart3, Microscope, Leaf, Paintbrush, Newspaper, Megaphone, TrendingUp
};


function CareerPathCard({ path }: { path: CareerPath }) {
  const PathIcon = careerPathIconMap[path.icon] || Briefcase;
  return (
    <AccordionItem value={path.id} className="border-b-0">
      <AccordionTrigger className="hover:no-underline bg-muted/50 dark:bg-slate-800/50 px-4 py-3 rounded-t-md data-[state=open]:rounded-b-none">
        <div className="flex items-center space-x-3">
          <PathIcon className="h-6 w-6 text-primary" />
          <span className="font-semibold text-foreground text-left">{path.title}</span>
        </div>
      </AccordionTrigger>
      <AccordionContent className="p-4 space-y-3 bg-background dark:bg-slate-900/80 rounded-b-md border border-t-0 dark:border-slate-700">
        <p className="text-sm text-muted-foreground">{path.description}</p>
        <div>
          <h4 className="font-semibold text-sm text-foreground mb-1">Required Skills:</h4>
          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-0.5">
            {path.requiredSkills.map(skill => <li key={skill}>{skill}</li>)}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-sm text-foreground mb-1">Sample Job Roles:</h4>
          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-0.5">
            {path.sampleJobRoles.map(role => <li key={role}>{role}</li>)}
          </ul>
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <DollarSign className="h-4 w-4 mr-2 text-green-500" /> Salary: {path.salaryExpectations}
        </div>
        <div>
          <h4 className="font-semibold text-sm text-foreground mb-1">Study Recommendations:</h4>
          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-0.5">
            {path.studyRecommendations.map(rec => <li key={rec}>{rec}</li>)}
          </ul>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}

export function CareerGuidanceSection() {
  const [selectedInterestId, setSelectedInterestId] = useState<string>(careerInterests[0].id);

  const selectedInterest = careerInterests.find(interest => interest.id === selectedInterestId);
  // This InterestIcon is for the main display, not the select items. It's correctly used later.
  // const InterestIcon = selectedInterest ? interestIconMap[selectedInterest.icon] : Briefcase;


  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <Select value={selectedInterestId} onValueChange={setSelectedInterestId}>
          <SelectTrigger className="w-full sm:w-[280px] dark:bg-slate-800 dark:border-slate-700 focus:ring-accent">
            <SelectValue placeholder="Select an interest area" />
          </SelectTrigger>
          <SelectContent className="dark:bg-slate-800 dark:border-slate-700">
            {careerInterests.map(interest => {
              const ItemIcon = interestIconMap[interest.icon] || Briefcase;
              return (
                <SelectItem key={interest.id} value={interest.id} className="dark:text-slate-300 dark:focus:bg-slate-700">
                  <div className="flex items-center">
                    <ItemIcon className="h-4 w-4 mr-2" />
                    {interest.name}
                  </div>
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
        {selectedInterest && (
          <p className="text-sm text-muted-foreground flex-1">
            {selectedInterest.description}
          </p>
        )}
      </div>

      {selectedInterest && (
        <Accordion type="multiple" className="w-full space-y-3">
          {selectedInterest.careerPaths.map(path => (
            <CareerPathCard key={path.id} path={path} />
          ))}
        </Accordion>
      )}
    </div>
  );
}

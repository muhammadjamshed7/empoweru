
"use client";

import Link from "next/link";
import { ArrowLeft, Sparkles, Bot, BrainCircuit, ExternalLink, Code2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { trendingTechnologies } from "@/lib/constants";
import type { TrendingTech } from "@/lib/constants";

const techIconMap: { [key: string]: LucideIcon } = {
  Bot,
  BrainCircuit,
  Sparkles, 
  Code2,    
};


export default function AIPromptEngineeringPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8 text-center">
        <div className="inline-flex items-center justify-center bg-primary/10 text-primary p-3 rounded-full mb-4">
          <Sparkles className="h-10 w-10" />
        </div>
        <h1 className="font-headline text-4xl font-bold text-foreground break-words">
          Unlock the Power of AI & Modern Tech
        </h1>
        <p className="text-lg text-muted-foreground mt-2 font-body break-words">
          Navigate the future with insights into AI and leading technologies.
        </p>
      </header>

      <Card className="mb-12 bg-gradient-to-r from-primary/20 to-accent/20 shadow-xl border-border">
        <CardHeader>
          <CardTitle className="font-headline text-2xl text-foreground flex items-center break-words">
            <Bot className="mr-3 h-7 w-7 text-primary" />
            Embrace the Future: The Age of AI is Here!
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground font-body break-words">
            Artificial Intelligence is rapidly transforming our world, from how we work to how we interact.
            Adopting AI and staying updated with modern technologies is no longer optional—it's essential for
            growth, innovation, and staying competitive. This section is dedicated to helping you understand
            key AI concepts like prompt engineering and explore other trending technologies that are shaping our future.
          </p>
        </CardContent>
      </Card>

      <section className="mb-12">
        <h2 className="font-headline text-3xl font-semibold mb-6 text-foreground text-center break-words">
          Explore Top Trending Technologies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {trendingTechnologies.map((tech) => {
            const IconComponent = techIconMap[tech.icon] || Sparkles; 
            return (
              <Card key={tech.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full dark:bg-slate-800/50 dark:border-slate-700">
                <CardHeader className="flex flex-row items-start space-x-4 pb-3">
                  <div className="p-2 bg-accent/10 rounded-md mt-1">
                    <IconComponent className="h-7 w-7 text-accent" />
                  </div>
                  <div>
                    <CardTitle className="font-headline text-xl text-foreground break-words">{tech.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-base text-muted-foreground font-body mb-4 break-words">
                    {tech.description}
                  </CardDescription>
                  {tech.roadmapSteps && tech.roadmapSteps.length > 0 && (
                    <div className="mt-3">
                      <h4 className="font-semibold text-sm text-foreground mb-1 break-words">Learning Roadmap:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground font-body">
                        {tech.roadmapSteps.map((step, index) => (
                          <li key={index} className="break-words">{step}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
                <div className="p-6 pt-0 mt-auto">
                  <Button asChild variant="outline" className="w-full font-body dark:border-accent dark:text-accent-foreground dark:hover:bg-accent/20">
                    <a href={tech.officialLink} target="_blank" rel="noopener noreferrer">
                      Learn More <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      <div className="text-center mt-12">
        <Button asChild variant="outline" size="lg">
          <Link href="/">
            <ArrowLeft className="mr-2 h-5 w-5" /> Back to Dashboard
          </Link>
        </Button>
      </div>
    </div>
  );
}

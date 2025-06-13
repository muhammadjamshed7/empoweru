
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface SectionCardProps {
  title: string;
  description?: string;
  icon: LucideIcon;
  href: string;
}

export function SectionCard({ title, description, icon: Icon, href }: SectionCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
      <CardHeader className="flex flex-row items-center space-x-4 pb-4">
        <div className="bg-primary/10 text-primary p-3 rounded-lg">
          <Icon className="h-8 w-8" />
        </div>
        <div>
          <CardTitle className="font-headline text-xl break-words">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        {description && (
          <CardDescription className="text-sm mb-4 break-words">{description}</CardDescription>
        )}
      </CardContent>
      <div className="p-6 pt-0 mt-auto">
         <Button asChild variant="default" className="w-full font-headline">
          <Link href={href}>
            Explore
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </Card>
  );
}

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface PlaceholderPageProps {
  params: {
    slug: string;
  };
}

export default function PlaceholderPage({ params }: PlaceholderPageProps) {
  const { slug } = params;
  const pageTitle = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col items-center justify-center min-h-[calc(100vh-10rem)]">
      <Card className="w-full max-w-md text-center shadow-xl">
        <CardHeader>
          <CardTitle className="font-headline text-3xl">
            {pageTitle}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-6">
            This section is currently under development. Check back soon for exciting updates!
          </p>
          <img 
            src="https://placehold.co/600x400.png" 
            alt="Under construction" 
            data-ai-hint="construction development"
            className="rounded-md mb-6 w-full h-auto object-cover" 
          />
          <Button asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" /> Go Back to Dashboard
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export async function generateStaticParams() {
  // You can pre-render specific slugs if needed
  // For now, we'll let it be dynamic
  const paths = [
    { slug: "mental-health" },
    { slug: "physical-fitness" },
    { slug: "educational-zone" },
    { slug: "programming-practice" },
    { slug: "ai-prompt-engineering" },
    { slug: "tasks" },
    { slug: "profile" },
    { slug: "settings" },
  ];
  return paths;
}

import { SectionCard } from "@/components/dashboard/SectionCard";
import { dashboardSections, WELCOME_MESSAGE } from "@/lib/constants";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DashboardPage() {
  const userName = "User"; // Placeholder for user name

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 block sm:hidden"> {/* Only show on mobile, header has welcome on larger screens */}
        <h1 className="font-headline text-2xl font-bold">
          {WELCOME_MESSAGE}, <span className="text-primary">{userName}</span>!
        </h1>
        <p className="text-muted-foreground">Let's make today amazing.</p>
      </div>
      
      <div className="mb-8">
        <Card className="bg-gradient-to-r from-primary/80 to-accent/80 text-primary-foreground shadow-xl">
          <CardHeader>
            <CardTitle className="font-headline text-3xl">Your Growth Hub By Jimi</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg">
              Discover tools and resources to empower your journey towards personal and professional development.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {dashboardSections.map((section) => (
          <SectionCard
            key={section.title}
            title={section.title}
            description={section.description}
            icon={section.icon}
            href={section.href}
          />
        ))}
      </div>
    </div>
  );
}

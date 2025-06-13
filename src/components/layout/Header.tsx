import Link from "next/link";
import { APP_NAME, WELCOME_MESSAGE } from "@/lib/constants";
import { ThemeToggleButton } from "@/components/ThemeToggleButton";

export function Header() {
  const userName = "User"; // Placeholder for user name

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-headline text-xl font-semibold text-primary">
          {APP_NAME}
        </Link>
        <div className="flex items-center space-x-4">
          <p className="font-headline text-lg hidden sm:block">
            {WELCOME_MESSAGE}, <span className="font-semibold text-primary">{userName}</span>!
          </p>
          <ThemeToggleButton />
        </div>
      </div>
    </header>
  );
}

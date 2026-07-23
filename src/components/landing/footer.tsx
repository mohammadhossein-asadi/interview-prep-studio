import Link from "next/link";
import { Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-border px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Sparkles className="h-4 w-4" />
              </div>
              <span className="text-lg font-bold">Interview Prep</span>
            </div>
            <p className="text-sm text-muted-foreground">
              The ultimate AI-powered interview preparation platform for modern
              web developers.
            </p>
          </div>

          {/* Tracks */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Tracks</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/tracks" className="hover:text-foreground transition-colors">
                  Frontend
                </Link>
              </li>
              <li>
                <Link href="/tracks" className="hover:text-foreground transition-colors">
                  Backend
                </Link>
              </li>
              <li>
                <Link href="/tracks" className="hover:text-foreground transition-colors">
                  Full Stack
                </Link>
              </li>
              <li>
                <Link href="/tracks" className="hover:text-foreground transition-colors">
                  CS Fundamentals
                </Link>
              </li>
            </ul>
          </div>

          {/* Practice */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Practice</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/questions" className="hover:text-foreground transition-colors">
                  Questions
                </Link>
              </li>
              <li>
                <Link href="/quiz" className="hover:text-foreground transition-colors">
                  Quizzes
                </Link>
              </li>
              <li>
                <Link href="/flashcards" className="hover:text-foreground transition-colors">
                  Flashcards
                </Link>
              </li>
              <li>
                <Link href="/coding" className="hover:text-foreground transition-colors">
                  Coding Challenges
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/companies" className="hover:text-foreground transition-colors">
                  Companies
                </Link>
              </li>
              <li>
                <Link href="/progress" className="hover:text-foreground transition-colors">
                  Progress
                </Link>
              </li>
              <li>
                <Link href="/settings" className="hover:text-foreground transition-colors">
                  Settings
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          Built for developers who want to ace their interviews.
        </div>
      </div>
    </footer>
  );
}

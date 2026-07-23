"use client";

import { AnimatedPage } from "@/components/shared/animated-page";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code, Terminal, Bug, FileSearch } from "lucide-react";
import Link from "next/link";

const challenges = [
  {
    id: "react-01",
    title: "Implement a Counter Component",
    difficulty: "beginner",
    category: "React",
    icon: Code,
    description: "Build a counter with increment, decrement, and reset functionality.",
  },
  {
    id: "js-01",
    title: "Debounce Function",
    difficulty: "intermediate",
    category: "JavaScript",
    icon: Terminal,
    description: "Implement a debounce function that delays function execution.",
  },
  {
    id: "debug-01",
    title: "Fix the Memory Leak",
    difficulty: "advanced",
    category: "Debugging",
    icon: Bug,
    description: "Find and fix the memory leak in this React component.",
  },
  {
    id: "review-01",
    title: "Code Review: API Service",
    difficulty: "intermediate",
    category: "Code Review",
    icon: FileSearch,
    description: "Review this API service and suggest improvements.",
  },
  {
    id: "css-01",
    title: "Responsive Grid Layout",
    difficulty: "beginner",
    category: "CSS",
    icon: Code,
    description: "Create a responsive grid that adapts to all screen sizes.",
  },
  {
    id: "ts-01",
    title: "Type-Safe Event Emitter",
    difficulty: "advanced",
    category: "TypeScript",
    icon: Terminal,
    description: "Implement a fully typed event emitter in TypeScript.",
  },
];

const difficultyColors: Record<string, string> = {
  beginner: "bg-green-500/10 text-green-600",
  intermediate: "bg-yellow-500/10 text-yellow-600",
  advanced: "bg-orange-500/10 text-orange-600",
};

export default function CodingPage() {
  return (
    <AnimatedPage>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Coding Challenges</h1>
        <p className="text-muted-foreground">
          Solve coding problems with a live editor and instant validation.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {challenges.map((challenge) => (
          <Link key={challenge.id} href={`/coding/${challenge.id}`}>
            <Card className="group h-full transition-all hover:shadow-md hover:shadow-primary/5">
              <CardHeader>
                <div className="mb-2 flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <challenge.icon className="h-5 w-5" />
                  </div>
                  <Badge
                    className={`text-xs ${difficultyColors[challenge.difficulty]}`}
                    variant="outline"
                  >
                    {challenge.difficulty}
                  </Badge>
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {challenge.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary" className="mb-3 text-xs">
                  {challenge.category}
                </Badge>
                <p className="text-sm text-muted-foreground">
                  {challenge.description}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </AnimatedPage>
  );
}

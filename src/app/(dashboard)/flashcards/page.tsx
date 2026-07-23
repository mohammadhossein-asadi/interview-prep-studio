"use client";

import { AnimatedPage } from "@/components/shared/animated-page";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Brain, Play, Plus } from "lucide-react";
import Link from "next/link";

const decks = [
  { id: "frontend", name: "Frontend Fundamentals", track: "frontend", cardCount: 50, reviewed: 12 },
  { id: "react", name: "React Deep Dive", track: "frontend", cardCount: 40, reviewed: 8 },
  { id: "javascript", name: "JavaScript Core", track: "frontend", cardCount: 35, reviewed: 20 },
  { id: "backend", name: "Backend Basics", track: "backend", cardCount: 30, reviewed: 5 },
  { id: "cs", name: "CS Fundamentals", track: "cs-fundamentals", cardCount: 25, reviewed: 10 },
  { id: "web", name: "Web Platform", track: "web-fundamentals", cardCount: 20, reviewed: 3 },
];

export default function FlashcardsPage() {
  return (
    <AnimatedPage>
      <div className="mb-8 flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold">Flashcards</h1>
          <p className="text-muted-foreground">
            Review flashcards with spaced repetition for lasting retention.
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Create Deck
        </Button>
      </div>

      {/* Review Button */}
      <Card className="mb-6 border-primary/20 bg-primary/5">
        <CardContent className="flex items-center justify-between p-6">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
              <Brain className="h-7 w-7" />
            </div>
            <div>
              <h2 className="text-lg font-semibold">Review Session</h2>
              <p className="text-sm text-muted-foreground">
                Cards due for review based on spaced repetition
              </p>
            </div>
          </div>
          <Link href="/flashcards/review">
            <Button className="gap-2">
              <Play className="h-4 w-4" />
              Start Review
            </Button>
          </Link>
        </CardContent>
      </Card>

      {/* Decks */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {decks.map((deck) => (
          <Card key={deck.id} className="group transition-all hover:shadow-md">
            <CardHeader>
              <CardTitle className="text-lg">{deck.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4 flex items-center gap-2">
                <Badge variant="secondary">{deck.track}</Badge>
                <Badge variant="outline">{deck.cardCount} cards</Badge>
              </div>
              <div className="mb-3">
                <div className="mb-1 flex justify-between text-xs text-muted-foreground">
                  <span>Reviewed</span>
                  <span>
                    {deck.reviewed}/{deck.cardCount}
                  </span>
                </div>
                <Progress
                  value={(deck.reviewed / deck.cardCount) * 100}
                  className="h-2"
                />
              </div>
              <Link href={`/flashcards/review?deck=${deck.id}`}>
                <Button variant="outline" size="sm" className="w-full gap-2">
                  <Play className="h-4 w-4" />
                  Practice
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </AnimatedPage>
  );
}

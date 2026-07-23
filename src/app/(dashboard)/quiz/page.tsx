"use client";

import { AnimatedPage } from "@/components/shared/animated-page";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Zap, Clock, Trophy } from "lucide-react";
import Link from "next/link";

const quizCategories = [
  {
    id: "daily",
    title: "Daily Quiz",
    description: "5 questions to start your day",
    icon: Zap,
    questionCount: 5,
    timeLimit: "5 min",
    color: "text-yellow-500",
  },
  {
    id: "frontend",
    title: "Frontend Challenge",
    description: "Test your frontend knowledge",
    icon: Zap,
    questionCount: 10,
    timeLimit: "15 min",
    color: "text-blue-500",
  },
  {
    id: "backend",
    title: "Backend Challenge",
    description: "Test your backend knowledge",
    icon: Zap,
    questionCount: 10,
    timeLimit: "15 min",
    color: "text-green-500",
  },
  {
    id: "cs",
    title: "CS Fundamentals",
    description: "Data structures & algorithms",
    icon: Zap,
    questionCount: 10,
    timeLimit: "20 min",
    color: "text-purple-500",
  },
];

export default function QuizPage() {
  return (
    <AnimatedPage>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Quizzes</h1>
        <p className="text-muted-foreground">
          Test your knowledge with timed quizzes and earn XP.
        </p>
      </div>

      {/* Daily Quiz Banner */}
      <Card className="mb-6 border-primary/20 bg-primary/5">
        <CardContent className="flex items-center justify-between p-6">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
              <Trophy className="h-7 w-7" />
            </div>
            <div>
              <h2 className="text-lg font-semibold">Daily Challenge</h2>
              <p className="text-sm text-muted-foreground">
                Complete today&apos;s quiz to maintain your streak!
              </p>
            </div>
          </div>
          <Link href="/quiz/daily">
            <Button>Start Quiz</Button>
          </Link>
        </CardContent>
      </Card>

      {/* Quiz Categories */}
      <div className="grid gap-4 md:grid-cols-2">
        {quizCategories.map((cat) => (
          <Card key={cat.id} className="group transition-all hover:shadow-md">
            <CardHeader>
              <div className="flex items-start justify-between">
                <CardTitle className="text-lg">{cat.title}</CardTitle>
                <Badge variant="secondary" className="text-xs">
                  {cat.questionCount} Q
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-sm text-muted-foreground">
                {cat.description}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  {cat.timeLimit}
                </div>
                <Link href={`/quiz/${cat.id}`}>
                  <Button variant="outline" size="sm">
                    Start
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </AnimatedPage>
  );
}

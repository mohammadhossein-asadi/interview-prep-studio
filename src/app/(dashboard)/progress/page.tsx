"use client";

import { AnimatedPage } from "@/components/shared/animated-page";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useProgressStore, useUserStore } from "@/stores";
import { BookOpen, Zap, Brain, Code, Clock, Trophy } from "lucide-react";

export default function ProgressPage() {
  const { questionsAnswered, quizzesCompleted, flashcardsReviewed, codingChallengesSolved, totalStudyTime, topicProgress } =
    useProgressStore();
  const { xp, level, streak, readinessScore } = useUserStore();

  const stats = [
    { icon: BookOpen, label: "Questions Answered", value: questionsAnswered, color: "text-blue-500" },
    { icon: Zap, label: "Quizzes Completed", value: quizzesCompleted, color: "text-yellow-500" },
    { icon: Brain, label: "Flashcards Reviewed", value: flashcardsReviewed, color: "text-purple-500" },
    { icon: Code, label: "Challenges Solved", value: codingChallengesSolved, color: "text-green-500" },
    { icon: Clock, label: "Study Time", value: `${Math.floor(totalStudyTime / 60)}h ${totalStudyTime % 60}m`, color: "text-orange-500" },
    { icon: Trophy, label: "Total XP", value: xp, color: "text-primary" },
  ];

  return (
    <AnimatedPage>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Progress</h1>
        <p className="text-muted-foreground">
          Track your overall interview preparation progress.
        </p>
      </div>

      {/* Stats grid */}
      <div className="mb-8 grid gap-4 md:grid-cols-3 lg:grid-cols-6">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardContent className="p-4 text-center">
              <stat.icon className={`mx-auto mb-2 h-6 w-6 ${stat.color}`} />
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Overall progress */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Overall Readiness</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-2 flex justify-between text-sm">
            <span>Interview Readiness</span>
            <span className="font-medium">{readinessScore}%</span>
          </div>
          <Progress value={readinessScore} className="h-3" />
        </CardContent>
      </Card>

      {/* Level progress */}
      <Card>
        <CardHeader>
          <CardTitle>Level {level}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-2 flex justify-between text-sm">
            <span>XP Progress</span>
            <span className="font-medium">{xp % 500} / 500</span>
          </div>
          <Progress value={(xp % 500 / 500) * 100} className="h-3" />
          <p className="mt-2 text-xs text-muted-foreground">
            {500 - (xp % 500)} XP to level {level + 1}
          </p>
        </CardContent>
      </Card>
    </AnimatedPage>
  );
}

"use client";

import { AnimatedPage } from "@/components/shared/animated-page";
import { ReadinessScore } from "@/components/dashboard/readiness-score";
import { StreakCalendar } from "@/components/dashboard/streak-calendar";
import { WeeklyChart } from "@/components/dashboard/weekly-chart";
import { WeakTopics } from "@/components/dashboard/weak-topics";
import { QuickActions } from "@/components/dashboard/recent-activity";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useUserStore, useProgressStore } from "@/stores";
import { BookOpen, Zap, Brain, Clock } from "lucide-react";

export default function DashboardPage() {
  const { xp, level, streak } = useUserStore();
  const { questionsAnswered, quizzesCompleted, flashcardsReviewed, totalStudyTime } =
    useProgressStore();

  return (
    <AnimatedPage>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">
          Track your interview preparation progress.
        </p>
      </div>

      {/* Stats row */}
      <div className="mb-6 grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="flex items-center gap-4 p-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <BookOpen className="h-6 w-6" />
            </div>
            <div>
              <div className="text-2xl font-bold">{questionsAnswered}</div>
              <div className="text-xs text-muted-foreground">
                Questions Answered
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center gap-4 p-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-500/10 text-yellow-500">
              <Zap className="h-6 w-6" />
            </div>
            <div>
              <div className="text-2xl font-bold">{quizzesCompleted}</div>
              <div className="text-xs text-muted-foreground">
                Quizzes Completed
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center gap-4 p-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-purple-500">
              <Brain className="h-6 w-6" />
            </div>
            <div>
              <div className="text-2xl font-bold">{flashcardsReviewed}</div>
              <div className="text-xs text-muted-foreground">
                Flashcards Reviewed
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center gap-4 p-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/10 text-green-500">
              <Clock className="h-6 w-6" />
            </div>
            <div>
              <div className="text-2xl font-bold">
                {Math.floor(totalStudyTime / 60)}h {totalStudyTime % 60}m
              </div>
              <div className="text-xs text-muted-foreground">Study Time</div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Left column */}
        <div className="space-y-6 lg:col-span-2">
          <WeeklyChart />
          <QuickActions />
        </div>

        {/* Right column */}
        <div className="space-y-6">
          <ReadinessScore />
          <StreakCalendar />
          <WeakTopics />
        </div>
      </div>
    </AnimatedPage>
  );
}

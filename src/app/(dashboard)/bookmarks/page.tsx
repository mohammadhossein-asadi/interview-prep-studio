"use client";

import { AnimatedPage } from "@/components/shared/animated-page";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Bookmark, MessageSquare, Brain, Zap, Code } from "lucide-react";
import Link from "next/link";

const bookmarkTabs = [
  { id: "questions", label: "Questions", icon: MessageSquare },
  { id: "flashcards", label: "Flashcards", icon: Brain },
  { id: "quizzes", label: "Quizzes", icon: Zap },
  { id: "challenges", label: "Challenges", icon: Code },
];

export default function BookmarksPage() {
  return (
    <AnimatedPage>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Bookmarks</h1>
        <p className="text-muted-foreground">
          Access your saved questions, flashcards, and resources.
        </p>
      </div>

      <Tabs defaultValue="questions">
        <TabsList>
          {bookmarkTabs.map((tab) => (
            <TabsTrigger key={tab.id} value={tab.id} className="gap-2">
              <tab.icon className="h-4 w-4" />
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="questions" className="mt-6">
          <div className="space-y-3">
            {[
              { id: "fe-001", title: "What is the virtual DOM?", topic: "React", difficulty: "intermediate" },
              { id: "fe-005", title: "Explain closures in JavaScript", topic: "JavaScript", difficulty: "advanced" },
            ].map((q) => (
              <Link key={q.id} href={`/questions/${q.id}`}>
                <Card className="transition-all hover:shadow-md">
                  <CardContent className="flex items-center justify-between p-4">
                    <div>
                      <Badge variant="outline" className="text-xs mb-1">{q.difficulty}</Badge>
                      <h3 className="font-medium">{q.title}</h3>
                      <p className="text-xs text-muted-foreground">{q.topic}</p>
                    </div>
                    <Bookmark className="h-5 w-5 text-primary" />
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="flashcards" className="mt-6">
          <Card>
            <CardContent className="py-12 text-center text-muted-foreground">
              Bookmark flashcards while reviewing to see them here.
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="quizzes" className="mt-6">
          <Card>
            <CardContent className="py-12 text-center text-muted-foreground">
              Your saved quizzes will appear here.
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="challenges" className="mt-6">
          <Card>
            <CardContent className="py-12 text-center text-muted-foreground">
              Bookmark coding challenges to revisit them later.
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </AnimatedPage>
  );
}

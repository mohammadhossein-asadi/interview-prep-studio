"use client";

import { useProgressStore } from "@/stores";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function WeakTopics() {
  const { topicProgress } = useProgressStore();

  const topics = Object.values(topicProgress)
    .sort((a, b) => a.mastery - b.mastery)
    .slice(0, 5);

  if (topics.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium">Weak Topics</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Start practicing to see your weak topics here.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-medium">Weak Topics</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {topics.map((topic) => (
          <div key={topic.topicId} className="flex items-center justify-between">
            <span className="text-sm">{topic.topicId}</span>
            <Badge
              variant={topic.mastery < 30 ? "destructive" : "secondary"}
              className="text-xs"
            >
              {topic.mastery}%
            </Badge>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

"use client";

import { AnimatedPage } from "@/components/shared/animated-page";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { tracks, topicsByTrack } from "@/data/tracks";
import { motion } from "motion/react";

export default function KnowledgeGraphPage() {
  return (
    <AnimatedPage>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Knowledge Graph</h1>
        <p className="text-muted-foreground">
          Visualize topic relationships and learning paths across all tracks.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {tracks.map((track) => (
          <Card key={track.id}>
            <CardHeader>
              <CardTitle className="text-lg">{track.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {topicsByTrack[track.id]?.map((topic, i) => (
                  <motion.div
                    key={topic.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center justify-between rounded-lg border p-3 transition-colors hover:bg-accent"
                  >
                    <div>
                      <div className="text-sm font-medium">{topic.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {topic.questionCount} questions
                      </div>
                    </div>
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </AnimatedPage>
  );
}

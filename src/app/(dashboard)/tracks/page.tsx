"use client";

import { AnimatedPage } from "@/components/shared/animated-page";
import { tracks } from "@/data/tracks";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  Monitor,
  Server,
  Layers,
  Cpu,
  Globe,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Monitor: <Monitor className="h-6 w-6" />,
  Server: <Server className="h-6 w-6" />,
  Layers: <Layers className="h-6 w-6" />,
  Cpu: <Cpu className="h-6 w-6" />,
  Globe: <Globe className="h-6 w-6" />,
};

export default function TracksPage() {
  return (
    <AnimatedPage>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Interview Tracks</h1>
        <p className="text-muted-foreground">
          Choose a track to start your preparation journey.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {tracks.map((track) => (
          <Link key={track.id} href={`/tracks/${track.id}`}>
            <Card className="group transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/5">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  {iconMap[track.icon] || <Monitor className="h-6 w-6" />}
                </div>
                <CardTitle>{track.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-muted-foreground">
                  {track.description}
                </p>
                <div className="flex gap-2">
                  <Badge variant="secondary">
                    {track.topicCount} Topics
                  </Badge>
                  <Badge variant="secondary">
                    {track.questionCount} Questions
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </AnimatedPage>
  );
}

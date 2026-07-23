"use client";

import { useParams } from "next/navigation";
import { AnimatedPage } from "@/components/shared/animated-page";
import { Breadcrumb } from "@/components/shared/breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Play, RotateCcw } from "lucide-react";

export default function CodingChallengePage() {
  const params = useParams();
  const challengeId = params.challengeId as string;

  return (
    <AnimatedPage>
      <Breadcrumb
        items={[
          { label: "Challenges", href: "/coding" },
          { label: challengeId },
        ]}
      />

      <div className="mt-6 mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">{challengeId}</h1>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="gap-2">
            <RotateCcw className="h-4 w-4" />
            Reset
          </Button>
          <Button size="sm" className="gap-2">
            <Play className="h-4 w-4" />
            Run
          </Button>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {/* Problem description */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Problem</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Complete the coding challenge in the editor. Write your solution and
              click Run to test it against the test cases.
            </p>
            <div className="mt-4 rounded-lg bg-muted p-4">
              <p className="text-xs text-muted-foreground">
                Test cases will appear here after running your solution.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Code editor placeholder */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Code className="h-5 w-5" />
              Editor
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="min-h-[300px] rounded-lg bg-muted/50 p-4 font-mono text-sm">
              <p className="text-muted-foreground">
                {"// Write your solution here"}
              </p>
              <p className="text-muted-foreground">
                {"function solution() {"}
              </p>
              <p className="text-muted-foreground">{"  "}</p>
              <p className="text-muted-foreground">{"}"}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </AnimatedPage>
  );
}

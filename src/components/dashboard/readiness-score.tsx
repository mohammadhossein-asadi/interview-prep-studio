"use client";

import { useUserStore } from "@/stores";
import { ProgressRing } from "./progress-ring";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ReadinessScore() {
  const { readinessScore } = useUserStore();

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-medium">Readiness Score</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-center">
        <ProgressRing value={readinessScore} label="Overall Readiness" />
      </CardContent>
    </Card>
  );
}

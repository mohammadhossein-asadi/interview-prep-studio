"use client";

import { useParams } from "next/navigation";
import { AnimatedPage } from "@/components/shared/animated-page";
import { Breadcrumb } from "@/components/shared/breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Clock, CheckCircle, XCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function QuizSessionPage() {
  const params = useParams();
  const quizId = params.quizId as string;

  return (
    <AnimatedPage>
      <Breadcrumb
        items={[
          { label: "Quizzes", href: "/quiz" },
          { label: quizId },
        ]}
      />

      <div className="mt-6 mb-8">
        <h1 className="text-2xl font-bold">Quiz Session</h1>
      </div>

      <Card className="max-w-2xl">
        <CardContent className="p-8 text-center">
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary mx-auto">
            <Clock className="h-8 w-8" />
          </div>
          <h2 className="mb-2 text-xl font-semibold">Quiz: {quizId}</h2>
          <p className="mb-6 text-muted-foreground">
            This quiz will be generated from the question bank. Start practicing
            with the questions library for the best experience.
          </p>
          <div className="flex justify-center gap-3">
            <Link href="/questions">
              <Button>Browse Questions</Button>
            </Link>
            <Link href="/quiz">
              <Button variant="outline">Back to Quizzes</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </AnimatedPage>
  );
}

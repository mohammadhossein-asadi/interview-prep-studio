"use client";

import { useParams } from "next/navigation";
import { AnimatedPage } from "@/components/shared/animated-page";
import { Breadcrumb } from "@/components/shared/breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mic, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function MockInterviewSessionPage() {
  const params = useParams();
  const sessionId = params.sessionId as string;

  return (
    <AnimatedPage>
      <Breadcrumb
        items={[
          { label: "Mock Interview", href: "/mock-interview" },
          { label: sessionId },
        ]}
      />

      <div className="mt-6 mb-8">
        <h1 className="text-2xl font-bold">Interview Session</h1>
      </div>

      <Card className="max-w-2xl mx-auto">
        <CardContent className="p-8 text-center">
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary mx-auto">
            <Mic className="h-8 w-8" />
          </div>
          <h2 className="mb-2 text-xl font-semibold">Mock Interview: {sessionId}</h2>
          <p className="mb-6 text-muted-foreground">
            This feature will use AI to simulate a real interview experience. 
            Practice answering questions in a timed, structured format.
          </p>
          <div className="flex justify-center gap-3">
            <Link href="/questions">
              <Button>Practice Questions Instead</Button>
            </Link>
            <Link href="/mock-interview">
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </AnimatedPage>
  );
}

"use client";

import { AnimatedPage } from "@/components/shared/animated-page";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mic, Clock, MessageSquare } from "lucide-react";
import Link from "next/link";

const interviewTypes = [
  {
    id: "frontend",
    title: "Frontend Interview",
    description: "HTML, CSS, JavaScript, React, and browser APIs",
    duration: "45 min",
    questions: 8,
  },
  {
    id: "backend",
    title: "Backend Interview",
    description: "Node.js, APIs, databases, and system design",
    duration: "45 min",
    questions: 8,
  },
  {
    id: "fullstack",
    title: "Full Stack Interview",
    description: "End-to-end architecture and implementation",
    duration: "60 min",
    questions: 10,
  },
  {
    id: "behavioral",
    title: "Behavioral Interview",
    description: "STAR method questions and soft skills",
    duration: "30 min",
    questions: 6,
  },
  {
    id: "system-design",
    title: "System Design",
    description: "Architecture, scalability, and trade-offs",
    duration: "60 min",
    questions: 3,
  },
];

export default function MockInterviewPage() {
  return (
    <AnimatedPage>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Mock Interview</h1>
        <p className="text-muted-foreground">
          Simulate real technical interviews with AI-powered feedback.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {interviewTypes.map((type) => (
          <Card key={type.id} className="group transition-all hover:shadow-md">
            <CardHeader>
              <CardTitle className="text-lg">{type.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-sm text-muted-foreground">
                {type.description}
              </p>
              <div className="mb-4 flex gap-2">
                <Badge variant="secondary" className="text-xs gap-1">
                  <Clock className="h-3 w-3" />
                  {type.duration}
                </Badge>
                <Badge variant="secondary" className="text-xs gap-1">
                  <MessageSquare className="h-3 w-3" />
                  {type.questions} questions
                </Badge>
              </div>
              <Button className="w-full gap-2">
                <Mic className="h-4 w-4" />
                Start Interview
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </AnimatedPage>
  );
}

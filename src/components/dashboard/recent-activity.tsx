"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Zap, Brain, Code } from "lucide-react";
import Link from "next/link";

const actions = [
  {
    icon: BookOpen,
    label: "Browse Questions",
    href: "/questions",
    color: "text-blue-500",
  },
  {
    icon: Zap,
    label: "Take a Quiz",
    href: "/quiz",
    color: "text-yellow-500",
  },
  {
    icon: Brain,
    label: "Review Flashcards",
    href: "/flashcards",
    color: "text-purple-500",
  },
  {
    icon: Code,
    label: "Coding Challenges",
    href: "/coding",
    color: "text-green-500",
  },
];

export function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-medium">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-3">
        {actions.map((action) => (
          <Link
            key={action.href}
            href={action.href}
            className="flex items-center gap-3 rounded-lg border p-3 transition-colors hover:bg-accent"
          >
            <action.icon className={`h-5 w-5 ${action.color}`} />
            <span className="text-sm font-medium">{action.label}</span>
          </Link>
        ))}
      </CardContent>
    </Card>
  );
}

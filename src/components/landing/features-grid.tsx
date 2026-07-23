"use client";

import { motion } from "motion/react";
import {
  MessageSquare,
  Zap,
  Brain,
  Code,
  BarChart3,
  BookOpen,
  Target,
  Users,
} from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Question Library",
    description:
      "200+ curated questions across Frontend, Backend, Full Stack, and CS fundamentals with detailed explanations.",
  },
  {
    icon: Zap,
    title: "Interactive Quizzes",
    description:
      "Test your knowledge with timed quizzes, multiple question types, and instant feedback.",
  },
  {
    icon: Brain,
    title: "Smart Flashcards",
    description:
      "Spaced repetition algorithm ensures you review cards at optimal intervals for long-term retention.",
  },
  {
    icon: Code,
    title: "Coding Challenges",
    description:
      "Solve real coding problems with a live editor, test cases, and AI-powered hints.",
  },
  {
    icon: BarChart3,
    title: "Progress Analytics",
    description:
      "Track your mastery across topics with heatmaps, radar charts, and confidence scores.",
  },
  {
    icon: BookOpen,
    title: "Interview Tracks",
    description:
      "Structured learning paths for Frontend, Backend, Full Stack, CS Fundamentals, and Web Platform.",
  },
  {
    icon: Target,
    title: "AI Coach",
    description:
      "Get personalized feedback on your answers with AI-powered evaluation and improvement suggestions.",
  },
  {
    icon: Users,
    title: "Company Collections",
    description:
      "Practice questions organized by top tech companies — FAANG, Microsoft, Vercel, Stripe, and more.",
  },
];

export function FeaturesGrid() {
  return (
    <section className="relative z-10 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Everything You Need to{" "}
            <span className="text-primary">Prepare</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A complete ecosystem for interview preparation, from learning to
            mastery.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group glass rounded-2xl p-6 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

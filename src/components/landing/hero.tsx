"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm text-primary"
      >
        <Sparkles className="h-4 w-4" />
        AI-Powered Interview Preparation
      </motion.div>

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mb-6 max-w-4xl text-5xl font-bold leading-tight tracking-tight md:text-7xl"
      >
        Ace Your Next{" "}
        <span className="bg-gradient-to-r from-primary via-blue-500 to-purple-500 bg-clip-text text-transparent">
          Technical Interview
        </span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mb-10 max-w-2xl text-lg text-muted-foreground md:text-xl"
      >
        The ultimate preparation platform for modern web developers. Practice
        questions, take quizzes, solve coding challenges, and track your progress
        — all powered by AI.
      </motion.p>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="flex flex-col gap-4 sm:flex-row"
      >
        <Link href="/dashboard">
          <Button size="lg" className="group gap-2 px-8">
            Start Preparing
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
        <Link href="/tracks">
          <Button size="lg" variant="outline" className="gap-2 px-8">
            Explore Tracks
          </Button>
        </Link>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="mt-16 grid grid-cols-3 gap-8 text-center"
      >
        {[
          { value: "200+", label: "Interview Questions" },
          { value: "50+", label: "Practice Quizzes" },
          { value: "300+", label: "Flashcards" },
        ].map((stat, i) => (
          <div key={i}>
            <div className="text-3xl font-bold">{stat.value}</div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </motion.div>

      {/* Floating tech logos */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="mt-16 flex flex-wrap items-center justify-center gap-6 text-muted-foreground/40"
      >
        {["React", "TypeScript", "Next.js", "Node.js", "Python", "GraphQL"].map(
          (tech, i) => (
            <motion.span
              key={tech}
              animate={{ y: [0, -5, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.3,
              }}
              className="text-sm font-medium"
            >
              {tech}
            </motion.span>
          )
        )}
      </motion.div>
    </section>
  );
}

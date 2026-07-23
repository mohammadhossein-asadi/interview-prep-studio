"use client";

import { useEffect, useState } from "react";
import { AnimatedPage } from "@/components/shared/animated-page";
import { useQuestionStore } from "@/stores";
import { frontendQuestions } from "@/data/questions/frontend";
import { backendQuestions } from "@/data/questions/backend";
import { fullstackQuestions } from "@/data/questions/fullstack";
import { csFundamentalsQuestions } from "@/data/questions/cs-fundamentals";
import { webFundamentalsQuestions } from "@/data/questions/web-fundamentals";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Bookmark, BookmarkCheck } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";
import type { Track, Difficulty } from "@/types";

const allQuestions = [
  ...frontendQuestions,
  ...backendQuestions,
  ...fullstackQuestions,
  ...csFundamentalsQuestions,
  ...webFundamentalsQuestions,
];

const difficultyColors: Record<Difficulty, string> = {
  beginner: "bg-green-500/10 text-green-600 dark:text-green-400",
  intermediate: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400",
  advanced: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
  expert: "bg-red-500/10 text-red-600 dark:text-red-400",
};

export default function QuestionsPage() {
  const { setQuestions, filters, setFilters, toggleBookmark, bookmarkedIds } =
    useQuestionStore();
  const [search, setSearch] = useState("");

  useEffect(() => {
    setQuestions(allQuestions);
  }, [setQuestions]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFilters({ search });
    }, 300);
    return () => clearTimeout(timer);
  }, [search, setFilters]);

  const filteredQuestions = allQuestions.filter((q) => {
    if (filters.track && q.track !== filters.track) return false;
    if (filters.difficulty && q.difficulty !== filters.difficulty) return false;
    if (filters.search) {
      const s = filters.search.toLowerCase();
      return (
        q.title.toLowerCase().includes(s) ||
        q.topic.toLowerCase().includes(s)
      );
    }
    return true;
  });

  return (
    <AnimatedPage>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Questions</h1>
        <p className="text-muted-foreground">
          Browse {allQuestions.length} interview questions across all tracks.
        </p>
      </div>

      {/* Filters */}
      <div className="mb-6 flex flex-wrap gap-3">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search questions..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9"
          />
        </div>
        <Select
          value={filters.track || "all"}
          onValueChange={(v) =>
            setFilters({ track: v === "all" ? undefined : (v as Track) })
          }
        >
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="All Tracks" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Tracks</SelectItem>
            <SelectItem value="frontend">Frontend</SelectItem>
            <SelectItem value="backend">Backend</SelectItem>
            <SelectItem value="fullstack">Full Stack</SelectItem>
            <SelectItem value="cs-fundamentals">CS Fundamentals</SelectItem>
            <SelectItem value="web-fundamentals">Web Fundamentals</SelectItem>
          </SelectContent>
        </Select>
        <Select
          value={filters.difficulty || "all"}
          onValueChange={(v) =>
            setFilters({
              difficulty: v === "all" ? undefined : (v as Difficulty),
            })
          }
        >
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="All Difficulties" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Difficulties</SelectItem>
            <SelectItem value="beginner">Beginner</SelectItem>
            <SelectItem value="intermediate">Intermediate</SelectItem>
            <SelectItem value="advanced">Advanced</SelectItem>
            <SelectItem value="expert">Expert</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Results count */}
      <p className="mb-4 text-sm text-muted-foreground">
        {filteredQuestions.length} questions found
      </p>

      {/* Question list */}
      <div className="space-y-3">
        {filteredQuestions.map((question, i) => (
          <motion.div
            key={question.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: Math.min(i * 0.02, 0.5) }}
          >
            <Card className="group transition-all hover:shadow-md hover:shadow-primary/5">
              <CardContent className="flex items-start justify-between p-4">
                <Link
                  href={`/questions/${question.id}`}
                  className="flex-1"
                >
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <Badge
                      className={`text-xs ${difficultyColors[question.difficulty]}`}
                      variant="outline"
                    >
                      {question.difficulty}
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      {question.topic}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      {question.track}
                    </span>
                  </div>
                  <h3 className="font-medium group-hover:text-primary transition-colors">
                    {question.title}
                  </h3>
                  <div className="mt-2 flex flex-wrap gap-1">
                    {question.companyTags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-[10px]">
                        {tag}
                      </Badge>
                    ))}
                    {question.companyTags.length > 3 && (
                      <Badge variant="outline" className="text-[10px]">
                        +{question.companyTags.length - 3}
                      </Badge>
                    )}
                  </div>
                </Link>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    toggleBookmark(question.id);
                  }}
                  className="ml-4 mt-1 text-muted-foreground hover:text-primary transition-colors"
                >
                  {bookmarkedIds.includes(question.id) ? (
                    <BookmarkCheck className="h-5 w-5 text-primary" />
                  ) : (
                    <Bookmark className="h-5 w-5" />
                  )}
                </button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {filteredQuestions.length === 0 && (
        <div className="py-16 text-center text-muted-foreground">
          No questions found matching your filters.
        </div>
      )}
    </AnimatedPage>
  );
}

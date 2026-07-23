"use client";

import { AnimatedPage } from "@/components/shared/animated-page";
import { Breadcrumb } from "@/components/shared/breadcrumb";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { allQuestions } from "@/data";
import {
  Bookmark,
  BookmarkCheck,
  ArrowLeft,
  Lightbulb,
  AlertTriangle,
  MessageSquare,
} from "lucide-react";
import Link from "next/link";
import { useBookmarkStore } from "@/stores";
import { useParams } from "next/navigation";

// We need to create a combined export for all questions
const questionsMap = new Map(
  allQuestions.map((q) => [q.id, q])
);

export default function QuestionDetailPage() {
  const params = useParams();
  const questionId = params.questionId as string;
  const question = questionsMap.get(questionId);
  const { addBookmark, removeBookmark, isBookmarked } = useBookmarkStore();

  if (!question) {
    return (
      <AnimatedPage>
        <div className="py-16 text-center">
          <h2 className="text-xl font-semibold">Question not found</h2>
          <Link href="/questions">
            <Button variant="link" className="mt-4">
              Back to questions
            </Button>
          </Link>
        </div>
      </AnimatedPage>
    );
  }

  const bookmarked = isBookmarked("question", question.id);

  return (
    <AnimatedPage>
      <Breadcrumb
        items={[
          { label: "Questions", href: "/questions" },
          { label: question.title },
        ]}
      />

      <div className="mt-6 mb-8 flex items-start justify-between">
        <div>
          <div className="mb-3 flex flex-wrap gap-2">
            <Badge variant="outline">{question.difficulty}</Badge>
            <Badge variant="secondary">{question.topic}</Badge>
            <Badge variant="secondary">{question.track}</Badge>
          </div>
          <h1 className="text-2xl font-bold">{question.title}</h1>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() =>
            bookmarked
              ? removeBookmark(`bm-${question.id}`)
              : addBookmark({
                  id: `bm-${question.id}`,
                  type: "question",
                  itemId: question.id,
                  title: question.title,
                  createdAt: new Date().toISOString(),
                })
          }
        >
          {bookmarked ? (
            <BookmarkCheck className="h-5 w-5 text-primary" />
          ) : (
            <Bookmark className="h-5 w-5" />
          )}
        </Button>
      </div>

      {/* Company tags */}
      <div className="mb-6 flex flex-wrap gap-2">
        {question.companyTags.map((tag) => (
          <Badge key={tag} variant="outline" className="text-xs">
            {tag}
          </Badge>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Main content */}
        <div className="space-y-6 lg:col-span-2">
          {/* Question */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Question</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="whitespace-pre-wrap text-sm leading-relaxed">
                {question.content}
              </p>
            </CardContent>
          </Card>

          {/* Best Answer */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Lightbulb className="h-5 w-5 text-yellow-500" />
                Best Answer
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="whitespace-pre-wrap text-sm leading-relaxed">
                {question.bestAnswer}
              </p>
            </CardContent>
          </Card>

          {/* Detailed Explanation */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Detailed Explanation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="whitespace-pre-wrap text-sm leading-relaxed text-muted-foreground">
                {question.detailedExplanation}
              </p>
            </CardContent>
          </Card>

          {/* Common Mistakes */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <AlertTriangle className="h-5 w-5 text-orange-500" />
                Common Mistakes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {question.commonMistakes.map((mistake, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
                    {mistake}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Meta info */}
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium">
                Question Info
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Interview Round</span>
                <span>{question.interviewRound}</span>
              </div>
              <Separator />
              <div className="flex justify-between">
                <span className="text-muted-foreground">Frequency</span>
                <span>{"⭐".repeat(question.frequency)}</span>
              </div>
              <Separator />
              <div className="flex justify-between">
                <span className="text-muted-foreground">Category</span>
                <span>{question.category}</span>
              </div>
            </CardContent>
          </Card>

          {/* Follow-up Questions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-sm font-medium">
                <MessageSquare className="h-4 w-4" />
                Follow-up Questions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {question.followUpQuestions.map((fq, i) => (
                <p key={i} className="text-sm text-muted-foreground">
                  {i + 1}. {fq}
                </p>
              ))}
            </CardContent>
          </Card>

          {/* References */}
          {question.references.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium">References</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {question.references.map((ref, i) => (
                  <a
                    key={i}
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm text-primary hover:underline"
                  >
                    {ref.title}
                  </a>
                ))}
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      <div className="mt-8">
        <Link href="/questions">
          <Button variant="ghost" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Questions
          </Button>
        </Link>
      </div>
    </AnimatedPage>
  );
}

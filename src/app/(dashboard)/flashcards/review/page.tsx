"use client";

import { useState } from "react";
import { AnimatedPage } from "@/components/shared/animated-page";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "motion/react";
import { Check, X, RotateCcw } from "lucide-react";
import Link from "next/link";

const sampleCards = [
  {
    id: 1,
    front: "What is the virtual DOM in React?",
    back: "The virtual DOM is a lightweight JavaScript representation of the real DOM. React uses it to batch updates and minimize direct DOM manipulation, improving performance by reducing reflows and repaints.",
  },
  {
    id: 2,
    front: "Explain closures in JavaScript",
    back: "A closure is a function that retains access to its lexical scope even when executed outside that scope. It 'closes over' the variables from the outer function, making them accessible after the outer function has returned.",
  },
  {
    id: 3,
    front: "What is event delegation?",
    back: "Event delegation is a pattern where a single event listener is attached to a parent element to handle events for all its children, leveraging event bubbling. This is more efficient than attaching listeners to each child individually.",
  },
];

export default function FlashcardReviewPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [completed, setCompleted] = useState(false);

  const card = sampleCards[currentIndex];

  const handleRate = (rating: string) => {
    setIsFlipped(false);
    setTimeout(() => {
      if (currentIndex < sampleCards.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCompleted(true);
      }
    }, 200);
  };

  if (completed) {
    return (
      <AnimatedPage>
        <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-500/10 text-green-500">
            <Check className="h-8 w-8" />
          </div>
          <h2 className="mb-2 text-2xl font-bold">Review Complete!</h2>
          <p className="mb-6 text-muted-foreground">
            You&apos;ve reviewed all {sampleCards.length} cards in this session.
          </p>
          <Link href="/flashcards">
            <Button>Back to Flashcards</Button>
          </Link>
        </div>
      </AnimatedPage>
    );
  }

  return (
    <AnimatedPage>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Review Session</h1>
        <p className="text-muted-foreground">
          Card {currentIndex + 1} of {sampleCards.length}
        </p>
      </div>

      <div className="flex flex-col items-center">
        <div
          className="mb-8 h-[300px] w-full max-w-lg cursor-pointer perspective-1000"
          onClick={() => setIsFlipped(!isFlipped)}
        >
          <motion.div
            className="relative h-full w-full"
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ duration: 0.5 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Front */}
            <Card
              className="absolute inset-0 flex items-center justify-center p-8"
              style={{ backfaceVisibility: "hidden" }}
            >
              <p className="text-center text-lg font-medium">{card.front}</p>
              <p className="absolute bottom-4 text-xs text-muted-foreground">
                Click to reveal answer
              </p>
            </Card>

            {/* Back */}
            <Card
              className="absolute inset-0 flex items-center justify-center p-8"
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
              }}
            >
              <p className="text-center text-sm leading-relaxed">{card.back}</p>
            </Card>
          </motion.div>
        </div>

        {/* Rating buttons */}
        <div className="flex gap-3">
          <Button
            variant="outline"
            className="gap-2 text-red-500 hover:text-red-600"
            onClick={() => handleRate("again")}
          >
            <X className="h-4 w-4" />
            Again
          </Button>
          <Button
            variant="outline"
            className="gap-2 text-orange-500 hover:text-orange-600"
            onClick={() => handleRate("hard")}
          >
            Hard
          </Button>
          <Button
            variant="outline"
            className="gap-2 text-green-500 hover:text-green-600"
            onClick={() => handleRate("good")}
          >
            <Check className="h-4 w-4" />
            Good
          </Button>
          <Button
            variant="outline"
            className="gap-2 text-blue-500 hover:text-blue-600"
            onClick={() => handleRate("easy")}
          >
            Easy
          </Button>
        </div>
      </div>
    </AnimatedPage>
  );
}

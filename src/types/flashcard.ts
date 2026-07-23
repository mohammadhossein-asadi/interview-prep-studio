import { type Track } from "./question";

export interface Flashcard {
  id: string;
  front: string;
  back: string;
  track: Track;
  topic: string;
  tags: string[];
  codeSnippet?: string;
  easeFactor: number;
  interval: number;
  repetitions: number;
  nextReview: string;
  lastReview?: string;
  createdAt: string;
}

export type ReviewRating = "again" | "hard" | "good" | "easy";

export interface FlashcardDeck {
  id: string;
  name: string;
  track: Track;
  description: string;
  cardCount: number;
  cardIds: string[];
}

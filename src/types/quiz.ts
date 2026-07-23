import { type Track, type Difficulty } from "./question";

export type QuizQuestionType =
  | "multiple-choice"
  | "multi-select"
  | "true-false"
  | "code-output"
  | "fill-blank";

export interface QuizOption {
  id: string;
  text: string;
  codeSnippet?: string;
}

export interface QuizQuestion {
  id: string;
  questionId?: string;
  type: QuizQuestionType;
  prompt: string;
  codeSnippet?: string;
  options: QuizOption[];
  correctAnswers: string[];
  explanation: string;
  xpValue: number;
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  track: Track;
  topic?: string;
  difficulty: Difficulty;
  questions: QuizQuestion[];
  timeLimit?: number;
  xpReward: number;
}

export interface QuizResult {
  id: string;
  quizId: string;
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  timeTaken: number;
  xpEarned: number;
  answers: QuizAnswer[];
  completedAt: string;
}

export interface QuizAnswer {
  questionId: string;
  selectedAnswers: string[];
  isCorrect: boolean;
  timeSpent: number;
}

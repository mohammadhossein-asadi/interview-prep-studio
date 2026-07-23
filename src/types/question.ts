export type Track =
  | "frontend"
  | "backend"
  | "fullstack"
  | "cs-fundamentals"
  | "web-fundamentals";

export type Difficulty = "beginner" | "intermediate" | "advanced" | "expert";

export interface Question {
  id: string;
  title: string;
  content: string;
  difficulty: Difficulty;
  track: Track;
  topic: string;
  category: string;
  companyTags: string[];
  interviewRound: string;
  frequency: number;
  expectedAnswer: string;
  detailedExplanation: string;
  bestAnswer: string;
  alternativeAnswers: string[];
  commonMistakes: string[];
  followUpQuestions: string[];
  relatedQuestionIds: string[];
  references: { title: string; url: string }[];
  createdAt: string;
  updatedAt: string;
}

export interface TrackInfo {
  id: Track;
  name: string;
  description: string;
  icon: string;
  topicCount: number;
  questionCount: number;
}

export interface Topic {
  id: string;
  name: string;
  track: Track;
  description: string;
  questionCount: number;
}

import { type Track } from "./question";

export interface TopicProgress {
  topicId: string;
  track: Track;
  questionsAttempted: number;
  questionsCorrect: number;
  quizzesCompleted: number;
  averageScore: number;
  lastPracticed: string;
  mastery: number;
}

export interface UserProgress {
  userId: string;
  totalStudyTime: number;
  questionsAnswered: number;
  quizzesCompleted: number;
  flashcardsReviewed: number;
  codingChallengesSolved: number;
  topicProgress: Record<string, TopicProgress>;
  dailyActivity: Record<string, number>;
}

export interface DailyActivity {
  date: string;
  minutes: number;
  questionsAnswered: number;
  quizzesCompleted: number;
}

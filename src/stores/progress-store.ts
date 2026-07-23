import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { UserProgress, TopicProgress } from "@/types";

interface ProgressStore extends UserProgress {
  setProgress: (progress: Partial<UserProgress>) => void;
  updateTopicProgress: (topicId: string, topic: TopicProgress) => void;
  addStudyTime: (minutes: number) => void;
  incrementQuestionsAnswered: () => void;
  incrementQuizzesCompleted: () => void;
  incrementFlashcardsReviewed: () => void;
  recordDailyActivity: (minutes: number) => void;
}

export const useProgressStore = create<ProgressStore>()(
  persist(
    (set) => ({
      userId: "local-user",
      totalStudyTime: 0,
      questionsAnswered: 0,
      quizzesCompleted: 0,
      flashcardsReviewed: 0,
      codingChallengesSolved: 0,
      topicProgress: {},
      dailyActivity: {},

      setProgress: (progress) => set(progress),

      updateTopicProgress: (topicId, topic) =>
        set((state) => ({
          topicProgress: { ...state.topicProgress, [topicId]: topic },
        })),

      addStudyTime: (minutes) =>
        set((state) => ({
          totalStudyTime: state.totalStudyTime + minutes,
        })),

      incrementQuestionsAnswered: () =>
        set((state) => ({
          questionsAnswered: state.questionsAnswered + 1,
        })),

      incrementQuizzesCompleted: () =>
        set((state) => ({
          quizzesCompleted: state.quizzesCompleted + 1,
        })),

      incrementFlashcardsReviewed: () =>
        set((state) => ({
          flashcardsReviewed: state.flashcardsReviewed + 1,
        })),

      recordDailyActivity: (minutes) =>
        set((state) => {
          const today = new Date().toISOString().split("T")[0];
          return {
            dailyActivity: {
              ...state.dailyActivity,
              [today]: (state.dailyActivity[today] || 0) + minutes,
            },
          };
        }),
    }),
    { name: "interview-prep-progress" }
  )
);

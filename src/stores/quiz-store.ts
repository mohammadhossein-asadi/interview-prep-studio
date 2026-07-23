import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Quiz, QuizResult, QuizAnswer } from "@/types";

interface QuizStore {
  quizzes: Quiz[];
  activeQuiz: Quiz | null;
  currentQuestionIndex: number;
  answers: QuizAnswer[];
  timeRemaining: number;
  results: QuizResult[];
  setQuizzes: (quizzes: Quiz[]) => void;
  startQuiz: (quiz: Quiz) => void;
  answerQuestion: (answer: QuizAnswer) => void;
  nextQuestion: () => void;
  finishQuiz: () => QuizResult | null;
  tick: () => void;
  getQuizById: (id: string) => Quiz | undefined;
}

export const useQuizStore = create<QuizStore>()(
  persist(
    (set, get) => ({
      quizzes: [],
      activeQuiz: null,
      currentQuestionIndex: 0,
      answers: [],
      timeRemaining: 0,
      results: [],

      setQuizzes: (quizzes) => set({ quizzes }),

      startQuiz: (quiz) =>
        set({
          activeQuiz: quiz,
          currentQuestionIndex: 0,
          answers: [],
          timeRemaining: quiz.timeLimit ? quiz.timeLimit * 60 : 0,
        }),

      answerQuestion: (answer) =>
        set((state) => ({
          answers: [...state.answers, answer],
        })),

      nextQuestion: () =>
        set((state) => ({
          currentQuestionIndex: state.currentQuestionIndex + 1,
        })),

      finishQuiz: () => {
        const { activeQuiz, answers } = get();
        if (!activeQuiz) return null;

        const correctAnswers = answers.filter((a) => a.isCorrect).length;
        const totalQuestions = activeQuiz.questions.length;
        const score = Math.round((correctAnswers / totalQuestions) * 100);
        const timeTaken = answers.reduce((sum, a) => sum + a.timeSpent, 0);
        const xpEarned = Math.round(
          activeQuiz.xpReward * (score / 100)
        );

        const result: QuizResult = {
          id: `result-${Date.now()}`,
          quizId: activeQuiz.id,
          score,
          totalQuestions,
          correctAnswers,
          timeTaken,
          xpEarned,
          answers,
          completedAt: new Date().toISOString(),
        };

        set((state) => ({
          results: [...state.results, result],
          activeQuiz: null,
          currentQuestionIndex: 0,
          answers: [],
          timeRemaining: 0,
        }));

        return result;
      },

      tick: () =>
        set((state) => ({
          timeRemaining: Math.max(0, state.timeRemaining - 1),
        })),

      getQuizById: (id) => {
        return get().quizzes.find((q) => q.id === id);
      },
    }),
    { name: "interview-prep-quizzes" }
  )
);

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Question, Track, Difficulty } from "@/types";

interface QuestionFilters {
  track?: Track;
  difficulty?: Difficulty;
  topic?: string;
  company?: string;
  search: string;
}

interface QuestionStore {
  questions: Question[];
  filters: QuestionFilters;
  bookmarkedIds: string[];
  setQuestions: (questions: Question[]) => void;
  setFilters: (filters: Partial<QuestionFilters>) => void;
  toggleBookmark: (id: string) => void;
  getFilteredQuestions: () => Question[];
  getQuestionById: (id: string) => Question | undefined;
}

export const useQuestionStore = create<QuestionStore>()(
  persist(
    (set, get) => ({
      questions: [],
      filters: { search: "" },
      bookmarkedIds: [],

      setQuestions: (questions) => set({ questions }),

      setFilters: (filters) =>
        set((state) => ({
          filters: { ...state.filters, ...filters },
        })),

      toggleBookmark: (id) =>
        set((state) => ({
          bookmarkedIds: state.bookmarkedIds.includes(id)
            ? state.bookmarkedIds.filter((bId) => bId !== id)
            : [...state.bookmarkedIds, id],
        })),

      getFilteredQuestions: () => {
        const { questions, filters } = get();
        return questions.filter((q) => {
          if (filters.track && q.track !== filters.track) return false;
          if (filters.difficulty && q.difficulty !== filters.difficulty)
            return false;
          if (filters.topic && q.topic !== filters.topic) return false;
          if (
            filters.company &&
            !q.companyTags.includes(filters.company)
          )
            return false;
          if (filters.search) {
            const search = filters.search.toLowerCase();
            return (
              q.title.toLowerCase().includes(search) ||
              q.content.toLowerCase().includes(search) ||
              q.topic.toLowerCase().includes(search)
            );
          }
          return true;
        });
      },

      getQuestionById: (id) => {
        return get().questions.find((q) => q.id === id);
      },
    }),
    { name: "interview-prep-questions" }
  )
);

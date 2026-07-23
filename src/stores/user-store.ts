import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { UserProfile } from "@/types";

interface UserStore extends UserProfile {
  setUser: (user: Partial<UserStore>) => void;
  addXp: (amount: number) => void;
  incrementStreak: () => void;
  resetStreak: () => void;
  updateReadinessScore: (score: number) => void;
}

function calculateLevel(xp: number): number {
  // Level up every 500 XP
  return Math.floor(xp / 500) + 1;
}

export const useUserStore = create<UserStore>()(
  persist(
    (set, get) => ({
      id: "local-user",
      name: "Developer",
      email: "",
      image: undefined,
      xp: 0,
      level: 1,
      streak: 0,
      lastActiveDate: "",
      readinessScore: 0,
      targetLevel: "mid" as const,
      studyGoalMinutes: 30,
      createdAt: new Date().toISOString(),

      setUser: (user) => set(user),

      addXp: (amount) =>
        set((state) => {
          const newXp = state.xp + amount;
          return {
            xp: newXp,
            level: calculateLevel(newXp),
          };
        }),

      incrementStreak: () =>
        set((state) => {
          const today = new Date().toISOString().split("T")[0];
          if (state.lastActiveDate === today) return state;
          const yesterday = new Date();
          yesterday.setDate(yesterday.getDate() - 1);
          const yesterdayStr = yesterday.toISOString().split("T")[0];
          const isConsecutive = state.lastActiveDate === yesterdayStr;
          return {
            streak: isConsecutive ? state.streak + 1 : 1,
            lastActiveDate: today,
          };
        }),

      resetStreak: () => set({ streak: 0 }),

      updateReadinessScore: (score) => set({ readinessScore: score }),
    }),
    { name: "interview-prep-user" }
  )
);

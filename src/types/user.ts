export interface UserProfile {
  id: string;
  name: string;
  email: string;
  image?: string;
  xp: number;
  level: number;
  streak: number;
  lastActiveDate: string;
  readinessScore: number;
  targetLevel: "junior" | "mid" | "senior" | "staff";
  studyGoalMinutes: number;
  createdAt: string;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlockedAt?: string;
  requirement: {
    type: string;
    value: number;
  };
}

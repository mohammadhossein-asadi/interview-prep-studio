import { useUserStore } from "@/stores";

export function useXp() {
  const { xp, level, addXp } = useUserStore();
  const xpInLevel = xp % 500;
  const xpForNextLevel = 500 - xpInLevel;
  const progress = (xpInLevel / 500) * 100;

  return {
    xp,
    level,
    xpInLevel,
    xpForNextLevel,
    progress,
    addXp,
  };
}

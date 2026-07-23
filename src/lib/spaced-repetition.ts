export function calculateNextReview(
  easeFactor: number,
  interval: number,
  repetitions: number,
  rating: "again" | "hard" | "good" | "easy"
): { easeFactor: number; interval: number; repetitions: number; nextReview: Date } {
  let newEF = easeFactor;
  let newInterval = interval;
  let newReps = repetitions;

  if (rating === "again") {
    newReps = 0;
    newInterval = 1;
  } else if (rating === "hard") {
    newInterval = Math.max(1, Math.round(interval * 1.2));
    newEF = Math.max(1.3, easeFactor - 0.15);
  } else if (rating === "good") {
    if (repetitions === 0) {
      newInterval = 1;
    } else if (repetitions === 1) {
      newInterval = 6;
    } else {
      newInterval = Math.round(interval * easeFactor);
    }
    newReps = repetitions + 1;
  } else if (rating === "easy") {
    if (repetitions === 0) {
      newInterval = 4;
    } else {
      newInterval = Math.round(interval * easeFactor * 1.3);
    }
    newEF = Math.min(3.0, easeFactor + 0.15);
    newReps = repetitions + 1;
  }

  const nextReview = new Date();
  nextReview.setDate(nextReview.getDate() + newInterval);

  return {
    easeFactor: newEF,
    interval: newInterval,
    repetitions: newReps,
    nextReview,
  };
}

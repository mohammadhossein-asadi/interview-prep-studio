import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Flashcard, FlashcardDeck, ReviewRating } from "@/types";

interface FlashcardStore {
  cards: Flashcard[];
  decks: FlashcardDeck[];
  reviewQueue: string[];
  currentCardIndex: number;
  setCards: (cards: Flashcard[]) => void;
  setDecks: (decks: FlashcardDeck[]) => void;
  startReview: (deckId?: string) => void;
  rateCard: (cardId: string, rating: ReviewRating) => void;
  nextCard: () => void;
  getCurrentCard: () => Flashcard | undefined;
  addCard: (card: Flashcard) => void;
}

function calculateNextReview(
  card: Flashcard,
  rating: ReviewRating
): Partial<Flashcard> {
  let { easeFactor, interval, repetitions } = card;

  if (rating === "again") {
    repetitions = 0;
    interval = 1;
  } else if (rating === "hard") {
    interval = Math.max(1, Math.round(interval * 1.2));
    easeFactor = Math.max(1.3, easeFactor - 0.15);
  } else if (rating === "good") {
    if (repetitions === 0) {
      interval = 1;
    } else if (repetitions === 1) {
      interval = 6;
    } else {
      interval = Math.round(interval * easeFactor);
    }
    repetitions += 1;
  } else if (rating === "easy") {
    if (repetitions === 0) {
      interval = 4;
    } else {
      interval = Math.round(interval * easeFactor * 1.3);
    }
    easeFactor = Math.min(3.0, easeFactor + 0.15);
    repetitions += 1;
  }

  const nextReview = new Date();
  nextReview.setDate(nextReview.getDate() + interval);

  return {
    easeFactor,
    interval,
    repetitions,
    nextReview: nextReview.toISOString(),
    lastReview: new Date().toISOString(),
  };
}

export const useFlashcardStore = create<FlashcardStore>()(
  persist(
    (set, get) => ({
      cards: [],
      decks: [],
      reviewQueue: [],
      currentCardIndex: 0,

      setCards: (cards) => set({ cards }),
      setDecks: (decks) => set({ decks }),

      startReview: (deckId) => {
        const { cards } = get();
        const now = new Date();
        let filtered = cards.filter(
          (c) => new Date(c.nextReview) <= now
        );
        if (deckId) {
          const deck = get().decks.find((d) => d.id === deckId);
          if (deck) {
            filtered = filtered.filter((c) =>
              deck.cardIds.includes(c.id)
            );
          }
        }
        set({
          reviewQueue: filtered.map((c) => c.id),
          currentCardIndex: 0,
        });
      },

      rateCard: (cardId, rating) => {
        set((state) => ({
          cards: state.cards.map((c) =>
            c.id === cardId
              ? { ...c, ...calculateNextReview(c, rating) }
              : c
          ),
        }));
      },

      nextCard: () =>
        set((state) => ({
          currentCardIndex: state.currentCardIndex + 1,
        })),

      getCurrentCard: () => {
        const { cards, reviewQueue, currentCardIndex } = get();
        const cardId = reviewQueue[currentCardIndex];
        return cards.find((c) => c.id === cardId);
      },

      addCard: (card) =>
        set((state) => ({
          cards: [...state.cards, card],
        })),
    }),
    { name: "interview-prep-flashcards" }
  )
);

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface BookmarkItem {
  id: string;
  type: "question" | "flashcard" | "quiz" | "challenge" | "note";
  itemId: string;
  title: string;
  createdAt: string;
}

interface BookmarkStore {
  bookmarks: BookmarkItem[];
  addBookmark: (bookmark: BookmarkItem) => void;
  removeBookmark: (id: string) => void;
  isBookmarked: (type: string, itemId: string) => boolean;
  getBookmarksByType: (type: BookmarkItem["type"]) => BookmarkItem[];
}

export const useBookmarkStore = create<BookmarkStore>()(
  persist(
    (set, get) => ({
      bookmarks: [],

      addBookmark: (bookmark) =>
        set((state) => ({
          bookmarks: [...state.bookmarks, bookmark],
        })),

      removeBookmark: (id) =>
        set((state) => ({
          bookmarks: state.bookmarks.filter((b) => b.id !== id),
        })),

      isBookmarked: (type, itemId) => {
        return get().bookmarks.some(
          (b) => b.type === type && b.itemId === itemId
        );
      },

      getBookmarksByType: (type) => {
        return get().bookmarks.filter((b) => b.type === type);
      },
    }),
    { name: "interview-prep-bookmarks" }
  )
);

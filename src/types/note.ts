import { type Track } from "./question";

export interface Note {
  id: string;
  title: string;
  content: string;
  track?: Track;
  topic?: string;
  linkedQuestionIds: string[];
  pinned: boolean;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

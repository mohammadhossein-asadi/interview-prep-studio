"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  LayoutDashboard,
  BookOpen,
  MessageSquare,
  Zap,
  Brain,
  Code,
  FileText,
  Bookmark,
  BarChart3,
} from "lucide-react";

const commands = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { id: "tracks", label: "Interview Tracks", icon: BookOpen, href: "/tracks" },
  { id: "questions", label: "Questions", icon: MessageSquare, href: "/questions" },
  { id: "quiz", label: "Quizzes", icon: Zap, href: "/quiz" },
  { id: "flashcards", label: "Flashcards", icon: Brain, href: "/flashcards" },
  { id: "coding", label: "Coding Challenges", icon: Code, href: "/coding" },
  { id: "notes", label: "Notes", icon: FileText, href: "/notes" },
  { id: "bookmarks", label: "Bookmarks", icon: Bookmark, href: "/bookmarks" },
  { id: "progress", label: "Progress", icon: BarChart3, href: "/progress" },
];

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Navigation">
          {commands.map((cmd) => (
            <CommandItem
              key={cmd.id}
              onSelect={() => {
                router.push(cmd.href);
                setOpen(false);
              }}
            >
              <cmd.icon className="mr-2 h-4 w-4" />
              {cmd.label}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}

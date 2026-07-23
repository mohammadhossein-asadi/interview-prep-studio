"use client";

import { AnimatedPage } from "@/components/shared/animated-page";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { FileText, Pin, Plus, Search, Trash2 } from "lucide-react";
import Link from "next/link";

const sampleNotes = [
  {
    id: "note-1",
    title: "React Hooks Cheat Sheet",
    preview: "useState, useEffect, useContext, useMemo, useCallback...",
    tags: ["react", "hooks"],
    pinned: true,
    updatedAt: "2 hours ago",
  },
  {
    id: "note-2",
    title: "JavaScript Closures",
    preview: "A closure is a function that remembers the variables...",
    tags: ["javascript", "fundamentals"],
    pinned: false,
    updatedAt: "1 day ago",
  },
  {
    id: "note-3",
    title: "CSS Grid vs Flexbox",
    preview: "Use Grid for 2D layouts, Flexbox for 1D layouts...",
    tags: ["css", "layout"],
    pinned: false,
    updatedAt: "3 days ago",
  },
];

export default function NotesPage() {
  return (
    <AnimatedPage>
      <div className="mb-8 flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold">Notes</h1>
          <p className="text-muted-foreground">
            Organize your study notes with markdown support.
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          New Note
        </Button>
      </div>

      <div className="mb-6">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Search notes..." className="pl-9" />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {sampleNotes.map((note) => (
          <Link key={note.id} href={`/notes/${note.id}`}>
            <Card className="group h-full transition-all hover:shadow-md">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {note.title}
                  </CardTitle>
                  {note.pinned && (
                    <Pin className="h-4 w-4 text-primary" />
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-3 text-sm text-muted-foreground line-clamp-2">
                  {note.preview}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-1">
                    {note.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-[10px]">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {note.updatedAt}
                  </span>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </AnimatedPage>
  );
}

"use client";

import { useParams } from "next/navigation";
import { AnimatedPage } from "@/components/shared/animated-page";
import { Breadcrumb } from "@/components/shared/breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Save, Pin, Trash2 } from "lucide-react";

export default function NoteDetailPage() {
  const params = useParams();
  const noteId = params.noteId as string;

  return (
    <AnimatedPage>
      <Breadcrumb
        items={[
          { label: "Notes", href: "/notes" },
          { label: noteId },
        ]}
      />

      <div className="mt-6 mb-6 flex items-center justify-between">
        <Input
          defaultValue="Untitled Note"
          className="max-w-md text-lg font-bold border-0 bg-transparent focus-visible:ring-0 px-0"
        />
        <div className="flex gap-2">
          <Button variant="ghost" size="icon">
            <Pin className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <Trash2 className="h-4 w-4" />
          </Button>
          <Button className="gap-2">
            <Save className="h-4 w-4" />
            Save
          </Button>
        </div>
      </div>

      <div className="flex gap-2 mb-4">
        <Badge variant="secondary">react</Badge>
        <Badge variant="secondary">hooks</Badge>
        <Button variant="ghost" size="sm" className="text-xs">
          + Add tag
        </Button>
      </div>

      <Card>
        <CardContent className="p-0">
          <textarea
            className="min-h-[500px] w-full resize-none border-0 bg-transparent p-6 font-mono text-sm focus:outline-none"
            placeholder="Start writing your notes in markdown..."
            defaultValue={`# React Hooks Cheat Sheet

## useState
Manages local component state.

\`\`\`tsx
const [count, setCount] = useState(0);
\`\`\`

## useEffect
Handles side effects.

\`\`\`tsx
useEffect(() => {
  // effect
  return () => cleanup;
}, [dependencies]);
\`\`\`
`}
          />
        </CardContent>
      </Card>
    </AnimatedPage>
  );
}

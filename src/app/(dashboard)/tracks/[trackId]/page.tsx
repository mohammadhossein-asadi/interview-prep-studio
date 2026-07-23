"use client";

import { useParams } from "next/navigation";
import { AnimatedPage } from "@/components/shared/animated-page";
import { Breadcrumb } from "@/components/shared/breadcrumb";

export default function TrackDetailPage() {
  const params = useParams();
  const trackId = params.trackId as string;

  return (
    <AnimatedPage>
      <Breadcrumb
        items={[
          { label: "Tracks", href: "/tracks" },
          { label: trackId },
        ]}
      />
      <div className="mt-6 mb-8">
        <h1 className="text-3xl font-bold capitalize">
          {trackId.replace("-", " ")}
        </h1>
        <p className="text-muted-foreground">
          Topics and questions for this track.
        </p>
      </div>
      <p className="text-muted-foreground">
        Select a topic to view questions.
      </p>
    </AnimatedPage>
  );
}

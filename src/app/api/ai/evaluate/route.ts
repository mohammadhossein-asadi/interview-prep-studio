import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  // Placeholder for AI evaluation
  return NextResponse.json({
    score: 75,
    feedback: "This is a placeholder. Configure an AI provider for real evaluations.",
    strengths: [],
    improvements: [],
    followUpQuestions: [],
  });
}

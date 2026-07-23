import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  // Placeholder for AI coach
  return NextResponse.json({
    message: "AI Coach - Configure an AI provider in .env.local to enable",
    response: "This is a placeholder response. Set up your AI API key to get real responses.",
  });
}

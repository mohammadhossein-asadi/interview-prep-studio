import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  // Placeholder for AI generation
  return NextResponse.json({
    message: "AI Generation - Configure an AI provider in .env.local to enable",
  });
}

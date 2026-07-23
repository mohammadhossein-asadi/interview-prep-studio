import { NextResponse } from "next/server";

export async function GET() {
  // Placeholder for questions API
  return NextResponse.json({
    message: "Questions API - Coming soon",
    endpoints: {
      search: "GET /api/questions?track=frontend&difficulty=intermediate",
    },
  });
}

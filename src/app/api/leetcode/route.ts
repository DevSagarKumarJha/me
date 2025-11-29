// route.ts
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const username = searchParams.get("username");

  if (!username) {
    return NextResponse.json(
      { error: "Username is required" },
      { status: 400 }
    );
  }

  try {
    const response = await fetch(
      `https://leetcode-stats-api.herokuapp.com/${username}`
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch" },
        { status: response.status }
      );
    }

    const data = await response.json();

    // Build simplified stats (no solvedDates)
    const stats = {
      username: username,
      profileUrl: `https://leetcode.com/${username}/`,
      totalSolved: data.totalSolved,
      easyCount: data.easySolved,
      mediumCount: data.mediumSolved,
      hardCount: data.hardSolved,
      acceptanceRate: data.acceptanceRate || null,
    };

    return NextResponse.json(stats);
  } catch (err) {
    console.error("ERROR fetching LeetCode stats:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

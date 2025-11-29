// /src/data/leetcodeStats.ts
export type LiveStats = {
  username: string;
  profileUrl: string;
  totalSolved: number;
  easyCount: number;
  mediumCount: number;
  hardCount: number;
  acceptanceRate: string | null;
  streak: number;
};

export const leetcodeStats: LiveStats = {
  username: "devsagarkumarjha",
  profileUrl: "https://leetcode.com/devsagarkumarjha/",
  totalSolved: 530,
  easyCount: 170,
  mediumCount: 252,
  hardCount: 108,
  acceptanceRate: "85.5%",
  streak: 100,
};

// Async function to fetch latest stats
export async function fetchLeetCodeStats(username: string) {
  try {
    const res = await fetch(`https://leetcode-stats-api.herokuapp.com/${username}`);
    if (!res.ok) return leetcodeStats; // fallback

    const data = await res.json();
    return {
      username: data.username,
      profileUrl: `https://leetcode.com/${username}/`,
      totalSolved: data.totalSolved,
      easyCount: data.easySolved,
      mediumCount: data.mediumSolved,
      hardCount: data.hardSolved,
      acceptanceRate: data.acRate || "—",
      streak: data.streak || 0,
    } as LiveStats;
  } catch (err) {
    console.error("Error fetching LeetCode stats:", err);
    return leetcodeStats; // fallback
  }
}

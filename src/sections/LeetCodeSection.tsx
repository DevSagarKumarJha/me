import React from "react";
import { Code2 } from "lucide-react";
import { leetcodeStats as fallbackStats } from "@/data/leetcodeStats";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { AnimatedStatCard } from "@/components/ui/AnimatedStatCard";
import { AnimatedDifficultyCard } from "@/components/ui/AnimatedDifficultyCard";

// ---------------------------------
// STATIC COLOR MAP (Tailwind v4 SAFE)
// ---------------------------------

const colorMap = {
  orange: {
    card: "from-orange-50 to-orange-100 dark:from-orange-950/30 dark:to-orange-900/20 border-orange-200 dark:border-orange-800",
    title: "text-orange-950 dark:text-orange-200",
    value: "text-orange-600 dark:text-orange-400",
  },
  green: {
    card: "from-green-50 to-green-100 dark:from-green-950/30 dark:to-green-900/20 border-green-200 dark:border-green-800",
    title: "text-green-950 dark:text-green-200",
    value: "text-green-600 dark:text-green-400",
  },
  blue: {
    card: "from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/20 border-blue-200 dark:border-blue-800",
    title: "text-blue-950 dark:text-blue-200",
    value: "text-blue-600 dark:text-blue-400",
  },
  red: {
    card: "from-red-50 to-red-100 dark:from-red-950/30 dark:to-red-900/20 border-red-200 dark:border-red-800",
    title: "text-red-950 dark:text-red-200",
    value: "text-red-600 dark:text-red-400",
  },
};

async function getLeetCodeStats() {
  try {
    const response = await fetch(
      `https://leetcode-stats-api.herokuapp.com/${fallbackStats.username}`,
      { next: { revalidate: 3600 } }
    );
    if (!response.ok) {
      return fallbackStats;
    }
    const data = await response.json();
    return {
      username: fallbackStats.username,
      profileUrl: `https://leetcode.com/${fallbackStats.username}/`,
      totalSolved: data.totalSolved,
      easyCount: data.easySolved,
      mediumCount: data.mediumSolved,
      hardCount: data.hardSolved,
      acceptanceRate: data.acceptanceRate || null,
    };
  } catch (error) {
    console.error("Failed to fetch LeetCode stats:", error);
    return fallbackStats;
  }
}

const LeetCodeSection = async () => {
  const stats = await getLeetCodeStats();

  return (
    <section className="rounded-2xl shadow-xl border border-orange-500/30 bg-white/70 dark:bg-zinc-950/60 backdrop-blur-md">
      <AnimatedSection>
        <div className="px-4 py-6">
          {/* HEADER */}
          <div className="text-center mb-2">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Code2 className="w-10 h-10 text-orange-500" />
              <div className="text-left">
                <h2 className="text-xl sm:text-3xl font-bold text-orange-600 dark:text-orange-400">
                  LeetCode Stats
                </h2>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">
                  @{stats.username}
                  <a
                    href={stats.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-3 inline-block px-3 py-1 text-xs font-medium rounded-full bg-orange-50 text-orange-600 border border-orange-200 hover:bg-orange-100 transition"
                  >
                    View Profile
                  </a>
                </div>
              </div>
            </div>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              Problem-solving excellence and coding proficiency demonstrated
              through consistent practice.
            </p>
          </div>

          {/* GRID */}
          <div className="space-y-3">
            <AnimatedStatCard>
              <StatCard
                title="Total Solved"
                value={String(stats.totalSolved)}
                color="orange"
                icon="🎯"
              />
            </AnimatedStatCard>

            <AnimatedDifficultyCard>
              <DifficultyCard
                easy={stats.easyCount}
                medium={stats.mediumCount}
                hard={stats.hardCount}
              />
            </AnimatedDifficultyCard>

            <AnimatedStatCard>
              <StatCard
                title="Acceptance Rate"
                value={stats.acceptanceRate ? `${stats.acceptanceRate}%` : "—"}
                color="orange"
                icon="📊"
              />
            </AnimatedStatCard>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

/* -------------------------------
   SMALLER CARDS (STATIC COLORS)
-------------------------------- */

const StatCard = ({
  title,
  value,
  color,
  icon,
}: {
  title: string;
  value: string;
  color: keyof typeof colorMap;
  icon: string;
}) => {
  const c = colorMap[color];

  return (
    <div className={`bg-gradient-to-br rounded-lg p-6 border ${c.card}`}>
      <div className="flex items-center justify-between mb-2">
        <h3 className={`text-sm font-semibold ${c.title}`}>{title}</h3>
        <span className="text-2xl">{icon}</span>
      </div>
      <p className={`text-4xl font-bold ${c.value}`}>{value}</p>
    </div>
  );
};

const DifficultyCard = ({
  easy,
  medium,
  hard,
}: {
  easy: number;
  medium: number;
  hard: number;
}) => (
  <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/30 dark:to-green-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
    <div className="flex items-center justify-between mb-2">
      <h3 className="text-sm font-semibold text-green-950 dark:text-green-200">
        Difficulty Breakdown
      </h3>
      <span className="text-xl">📚</span>
    </div>

    <div className="flex justify-between mt-1">
      <DiffBlock label="Easy" value={easy} color="green" />
      <DiffBlock label="Medium" value={medium} color="blue" />
      <DiffBlock label="Hard" value={hard} color="red" />
    </div>
  </div>
);

const DiffBlock = ({
  label,
  value,
  color,
}: {
  label: string;
  value: number;
  color: keyof typeof colorMap;
}) => {
  const c = colorMap[color];

  return (
    <div className="flex flex-col items-center">
      <span className="text-xs text-zinc-600 dark:text-zinc-400">{label}</span>
      <span className={`text-lg font-bold ${c.value}`}>{value}</span>
    </div>
  );
};

export default LeetCodeSection;

import React from "react";
import { Code2 } from "lucide-react";
import { leetcodeStats as fallbackStats } from "@/data/leetcodeStats";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { AnimatedStatCard } from "@/components/ui/AnimatedStatCard";
import { AnimatedDifficultyCard } from "@/components/ui/AnimatedDifficultyCard";

// ---------------------------------
// STATIC COLOR MAP (Tailwind v4 SAFE)
// ---------------------------------

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

const LeetCodeStatusComponent = async () => {
  const stats = await getLeetCodeStats();

  return (
    <section className="rounded shadow-md sm:min-w-xs w-full border border-black/15 dark:border-white/15 backdrop-blur">
      {/* <AnimatedSection> */}
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
                <a
                  href={stats.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-3 inline-block px-3 py-1 text-xs font-medium hover:underline"
                  >
                  @{stats.username}
                </a>
              </div>
            </div>
          </div>
      
        </div>

        {/* Right Side */}
        <div className="flex gap-2 justify-center h-fit p-1 w-fit m-auto space-y-2">
          <AnimatedStatCard>
            <div className="flex flex-col gap-2 w-full justify-center items-center h-full">
              <StatCard
                title="Total Solved"
                value={stats.totalSolved.toString()}
                icon="🎯"
                acceptance={stats.acceptanceRate.toString() + "%"}
              />
            </div>
          </AnimatedStatCard>

          <AnimatedDifficultyCard>
            <DifficultyCard
              easy={stats.easyCount}
              medium={stats.mediumCount}
              hard={stats.hardCount}
            />
          </AnimatedDifficultyCard>
        </div>
      </div>
      {/* </AnimatedSection> */}
    </section>
  );
};

/* -------------------------------
   SMALLER CARDS (STATIC COLORS)
-------------------------------- */

const StatCard = ({
  title,
  value,
  icon,
  acceptance,
}: {
  title: string;
  value: string;
  icon: string;
  acceptance: string;
}) => {
  return (
    <div
      className={`bg-transparent rounded-lg p-6 h-full flex justify-center `}
    >
      <div className="flex flex-col items-center justify-center mb-2">
        <div className="flex">
          <span className="text-2xl">{icon}</span>
          <h3 className={`text-lg font-semibold`}>{title}</h3>
        </div>
        <p
          className={`text-4xl font-bold flex flex-col justify-center mt-2 items-center w-full h-full p-3 rounded-full border`}
        >
          {value}
          <span className="text-neutral-500 text-xs text-center dark:text-neutral-300">
            With 
            <br />
            {acceptance} 
            <br />
            acceptance
          </span>
        </p>
      </div>
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
  <div className="flex flex-col gap-1 h-full justify-around items-center">
    <DiffBlock label="Easy" value={easy} />
    <DiffBlock label="Medium" value={medium} />
    <DiffBlock label="Hard" value={hard} />
  </div>
);

const DiffBlock = ({ label, value }: { label: string; value: number }) => {
  let color = "white";
  if (label === "Easy") {
    color = "text-green-700 dark:text-green-400 font-semibold";
  } else if (label === "Medium") {
    color = "text-yellow-600 dark:text-yellow-400 font-semibold";
  } else {
    color = "text-orange-700 dark:text-orange-400 font-semibold";
  }
  return (
    <div className="flex flex-col border w-full p-2 rounded-md h-fit items-center">
      <span className={`text-lg ${color}`}>{label}</span>
      <span className={`text-xl font-semibold`}>{value}</span>
    </div>
  );
};

export default LeetCodeStatusComponent;

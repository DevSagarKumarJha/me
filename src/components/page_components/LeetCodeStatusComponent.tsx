"use client";

import React, { useEffect, useState } from "react";
import { SiLeetcode } from "react-icons/si";
import { leetcodeStats as fallbackStats } from "@/data/leetcodeStats";
import { AnimatedStatCard } from "@/components/wrappers/AnimatedStatCard";
import { AnimatedDifficultyCard } from "@/components/wrappers/AnimatedDifficultyCard";

// -----------------------------
// MAIN COMPONENT (CLIENT-SAFE)
// -----------------------------
const LeetCodeStatusComponent = () => {
  const [stats, setStats] = useState(fallbackStats);

  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await fetch(
          `https://leetcode-stats-api.herokuapp.com/${fallbackStats.username}`
        );
        if (!res.ok) return;
        const data = await res.json();
        setStats({
          username: fallbackStats.username,
          profileUrl: `https://leetcode.com/${fallbackStats.username}/`,
          totalSolved: data.totalSolved,
          easyCount: data.easySolved,
          mediumCount: data.mediumSolved,
          hardCount: data.hardSolved,
          acceptanceRate: data.acceptanceRate || 0,
        });
      } catch {
        /* fallback already set */
      }
    }

    fetchStats();
  }, []);

  return (
    <section className="w-full">
      <div className="px-4 py-6">
        {/* HEADER */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <SiLeetcode className="w-10 h-10 text-black dark:text-white" />
          <div>
            <h2 className="text-xl sm:text-2xl font-bold">LeetCode Stats</h2>
            <a
              href={stats.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-600 dark:text-zinc-400 hover:underline"
            >
              @{stats.username}
            </a>
          </div>
        </div>

        {/* CONTENT */}
        <div className="grid w-full gap-6 grid-cols-1 sm:grid-cols-2">
          <AnimatedStatCard>
            <StatCard
              title="Total Solved"
              value={stats.totalSolved.toString()}
              icon="🎯"
              acceptance={`${stats.acceptanceRate}%`}
            />
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
    </section>
  );
};

// -----------------------------
// FLIP CARD (HOVER + TAP)
// -----------------------------
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
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="w-full perspective-1000"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`relative h-48 w-full transition-transform duration-500 transform-style-preserve-3d
          ${flipped ? "rotate-y-180" : ""} sm:hover:rotate-y-180`}
      >
        {/* FRONT */}
        <div className="absolute inset-0 backface-hidden rounded-xl border-2 p-6 flex flex-col items-center justify-center">
          <div className="flex items-center gap-2">
            <span className="text-2xl">{icon}</span>
            <h3 className="text-lg font-semibold">{title}</h3>
          </div>
          <p className="text-4xl font-bold mt-2">{value}</p>
          <span className="text-xs text-neutral-500 mt-1">Problems Solved</span>
        </div>

        {/* BACK */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-xl border-2 p-6 flex flex-col items-center justify-center">
          <p className="text-4xl font-bold">{acceptance}</p>
          <span className="text-xs text-neutral-500 mt-1">Acceptance Rate</span>
        </div>
      </div>
    </div>
  );
};

// -----------------------------
// DIFFICULTY + COMBINED PROGRESS
// -----------------------------
const DifficultyCard = ({
  easy,
  medium,
  hard,
}: {
  easy: number;
  medium: number;
  hard: number;
}) => {
  const total = easy + medium + hard || 1;

  const easyPct = (easy / total) * 100;
  const mediumPct = (medium / total) * 100;
  const hardPct = (hard / total) * 100;

  return (
    <div className=" flex justify-center items-center h-full">
      <div className="w-full flex flex-col gap-4">
        {/* LABELS */}
        <div className="flex justify-between text-sm font-medium">
          <span className="text-green-600">Easy: {easy}</span>
          <span className="text-yellow-600">Medium: {medium}</span>
          <span className="text-orange-600">Hard: {hard}</span>
        </div>

        {/* COMBINED BAR */}
        <div className="h-3 w-full rounded-full overflow-hidden bg-neutral-200 dark:bg-neutral-700 flex">
          <div
            className="bg-green-500 transition-all duration-700"
            style={{ width: `${easyPct}%` }}
          />
          <div
            className="bg-yellow-500 transition-all duration-700"
            style={{ width: `${mediumPct}%` }}
          />
          <div
            className="bg-orange-500 transition-all duration-700"
            style={{ width: `${hardPct}%` }}
          />
        </div>

        {/* FOOTER */}
        <div className="text-xs text-neutral-500 text-center">
          Distribution of solved problems
        </div>
      </div>
    </div>
  );
};

export default LeetCodeStatusComponent;

"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import { leetcodeStats as fallbackStats } from "@/data/leetcodeStats";

type LiveStats = {
  username: string;
  profileUrl: string;
  totalSolved: number;
  easyCount: number;
  mediumCount: number;
  hardCount: number;
  acceptanceRate: string | null;
  streak: number;
};

const LeetCodeSection = () => {
  const [liveStats, setLiveStats] = useState<LiveStats | null>(null);
  const stats = liveStats || fallbackStats;

  // ------------------------------
  // FETCH LIVE DATA
  // ------------------------------
  useEffect(() => {
    let mounted = true;

    async function fetchLive() {
      try {
        const res = await fetch(
          `/api/leetcode?username=${fallbackStats.username}`
        );
        if (!res.ok) return;

        const data = await res.json();
        
        if (mounted) setLiveStats(data);
      } catch (err) {
        console.error("LeetCode fetch failed:", err);
      }
    }

    fetchLive();
    return () => {
      mounted = false;
    };
  }, []);

  // ------------------------------
  // COMPONENT JSX
  // ------------------------------
  return (
    <section
      id="leetcode-stats"
      className="rounded-2xl shadow-xl border border-orange-500/30 bg-white/70 dark:bg-gray-950/60 backdrop-blur-md"
    >
      <div className="section-inner w-full px-4 py-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full"
        >
          {/* HEADER */}
          <div className="text-center mb-2 ">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Code2 className="w-10 h-10 text-orange-500" />
              <div className="text-left">
                <h2 className="text-xl sm:text-3xl font-bold text-orange-700 dark:text-orange-400">
                  LeetCode Stats
                </h2>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  @{stats.username}
                  <a
                    href={stats.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-3 inline-block px-3 py-1 text-xs font-medium rounded-full bg-orange-50 text-orange-600 border border-orange-200 hover:bg-orange-100 transition"
                  >
                    View LeetCode Profile
                  </a>
                </div>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Demonstrated problem-solving expertise and coding proficiency
              across multiple platforms
            </p>
          </div>

          {/* GRID: 4 MAIN STATS */}
          <div className="flex-1 space-y-2">
            <StatCard
              title="Total Solved"
              value={String(stats.totalSolved)}
              color="orange"
              icon="🎯"
            />
            <DifficultyCard
              easy={stats.easyCount}
              medium={stats.mediumCount}
              hard={stats.hardCount}
            />
            <StatCard
              title="Acceptance Rate"
              value={stats.acceptanceRate || "—"}
              color="blue"
              icon="📊"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// -------------------------------
// SMALLER COMPONENTS FOR CLEAN UI
// -------------------------------

// Simple stat card
const StatCard = ({
  title,
  value,
  color,
  icon,
}: {
  title: string;
  value: string;
  color: string;
  icon: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className={`bg-gradient-to-br from-${color}-50 to-${color}-100 dark:from-${color}-900/30 dark:to-${color}-800/20 rounded-lg p-6 border border-${color}-200 dark:border-${color}-700`}
  >
    <div className="flex items-center justify-between mb-2">
      <h3
        className={`text-sm font-semibold text-${color}-900 dark:text-${color}-200`}
      >
        {title}
      </h3>
      <span className="text-2xl">{icon}</span>
    </div>
    <p
      className={`text-4xl font-bold text-${color}-600 dark:text-${color}-400`}
    >
      {value}%
    </p>
  </motion.div>
);

// Difficulty card
const DifficultyCard = ({
  easy,
  medium,
  hard,
}: {
  easy: number;
  medium: number;
  hard: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/20 rounded-lg p-6 border border-green-200 dark:border-green-700"
  >
    <div className="flex items-center justify-between mb-2">
      <h3 className="text-sm font-semibold text-green-900 dark:text-green-200">
        Difficulty Breakdown
      </h3>
      <span className="text-xl">📚</span>
    </div>
    <div className="flex justify-between mt-1">
      <DiffBlock label="Easy" value={easy} color="green" />
      <DiffBlock label="Medium" value={medium} color="blue" />
      <DiffBlock label="Hard" value={hard} color="red" />
    </div>
  </motion.div>
);

// Difficulty block
const DiffBlock = ({
  label,
  value,
  color,
}: {
  label: string;
  value: number;
  color: string;
}) => (
  <div className="flex flex-col items-center">
    <span className="text-xs text-gray-600 dark:text-gray-400">{label}</span>
    <span
      className={`text-lg font-bold text-${color}-600 dark:text-${color}-400`}
    >
      {value}
    </span>
  </div>
);

export default LeetCodeSection;

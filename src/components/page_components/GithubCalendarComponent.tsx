"use client";

import React, { useState, useEffect } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "next-themes";
import { SiGithub } from "react-icons/si";
import { Intro } from "@/data/intro";

function GithubCalendarComponent() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Show skeleton until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="flex justify-center pb-2">
        <div className="w-full max-w-4xl space-y-3">
          {/* Month labels skeleton */}
          <div className="flex gap-6 pl-10">
            {[
              "Dec",
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
            ].map((_, i) => (
              <div key={i} className="h-3 w-7 animate-pulse rounded bg-muted" />
            ))}
          </div>
          {/* Calendar grid skeleton */}
          <div className="flex gap-[3px]">
            {[...Array(53)].map((_, weekIndex) => (
              <div key={weekIndex} className="flex flex-col gap-[3px]">
                {[...Array(7)].map((_, dayIndex) => (
                  <div
                    key={dayIndex}
                    className="size-2.5 animate-pulse rounded-sm bg-muted"
                    style={{
                      animationDelay: `${(weekIndex * 7 + dayIndex) * 5}ms`,
                    }}
                  />
                ))}
              </div>
            ))}
          </div>
          {/* Footer skeleton */}
          <div className="flex justify-between items-center pt-1">
            <div className="h-3 w-48 animate-pulse rounded bg-muted" />
            <div className="flex items-center gap-1">
              <div className="h-3 w-8 animate-pulse rounded bg-muted" />
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="size-2.5 animate-pulse rounded-sm bg-muted"
                />
              ))}
              <div className="h-3 w-8 animate-pulse rounded bg-muted" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center pb-2">
      <div className="flex items-center justify-center gap-4 mb-6">
        <SiGithub className="w-10 h-10 text-black dark:text-white" />
        <div>
          <h2 className="text-xl sm:text-2xl font-bold">
            Github Contributions
          </h2>
          <a
            href={`https://github.com/${Intro.github_username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-600 dark:text-zinc-400 hover:underline"
          >
            @{Intro.github_username}
          </a>
        </div>
      </div>
      <GitHubCalendar
        username="DevSagarKumarJha"
        colorScheme={resolvedTheme === "dark" ? "dark" : "light"}
        blockSize={13}
        fontSize={14}
      />
    </div>
  );
}

export default GithubCalendarComponent;

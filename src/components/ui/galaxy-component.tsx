"use client";

import { useMediaQuery } from "@/lib/useMediaQuery";
import React from "react";

interface GalaxyComponentProps {
  title?: string;
  subtitle?: string;
  badges?: string[];
  size?: number;
}

const Badge = ({
  badge,
  index,
  total,
  radius,
}: {
  badge: string;
  index: number;
  total: number;
  radius: number;
}) => {

  const angle = (360 / total) * index;
  const transform = `rotate(${angle}deg) translateY(-${radius}px) rotate(-${angle}deg)`;
  const fontSize = radius * 0.05;

  return (
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full flex justify-center items-center"
      style={{ transform }}
    >
      <div
        className="flex justify-center items-center bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-md border border-white/10 shadow-sm rounded-full px-3 py-1 font-medium text-foreground hover:scale-105 transition-all"
        style={{ fontSize }}
      >
        <div
          className={`w-2 h-2 rounded-full mr-2 ${
            index % 2 === 0 ? "bg-yellow-500" : "bg-orange-500"
          }`}
        ></div>
        {badge}
      </div>
    </div>
  );
};

export default function GalaxyComponent({
  title = "ZEN UI",
  subtitle = "HARMONY IN CODE",
  badges = [],
}: GalaxyComponentProps) {

const isDesktop = useMediaQuery("(min-width: 768px)");
  const size = isDesktop ? 500 : 300;
  const coreSize = size * 0.3;
  const ringSizes = [size * 1.0, size * 0.8, size * 0.6];
  const badgeRadius = size * 0.45;
  const orbitalRadius = size * 0.25;

  return (
    <div
      className="relative flex justify-center items-center"
      style={{ height: size, width: size }}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 rounded-full galaxy-bg"></div>

      {/* Concentric Pulsing Rings */}
      <div className="absolute inset-0 flex justify-center items-center">
        {ringSizes.map((ringSize, i) => (
          <div
            key={i}
            className={`absolute shadow-lg border dark:border-yellow-400/20 rounded-full ${
              i === 0
                ? "border-red-600/40 animate-pulse-slow"
                : i === 1
                ? "border-orange-800/20 animate-pulse-medium"
                : "border-red-600/40 animate-pulse-fast"
            }`}
            style={{ width: ringSize, height: ringSize }}
          ></div>
        ))}
      </div>

      {/* Central Core */}
      <div
        className="z-30 relative flex justify-center items-center bg-gradient-to-br from-yellow-400 to-orange-950 rounded-full core-glow"
        style={{ width: coreSize, height: coreSize }}
      >
        {/* Orbital Dots */}
        <div
          className="absolute w-full h-full"
          style={{ width: orbitalRadius * 2, height: orbitalRadius * 2 }}
        >
          {[0, 90, 180, 270].map((angle, i) => (
            <div
              key={i}
              className={`orbital-dot bg-yellow-400 orbit-${i + 1}`}
              style={{
                transform: `rotate(${angle}deg) translateY(-${
                  orbitalRadius * 0.9
                }px)`,
              }}
            />
          ))}
        </div>

        <div className="text-center">
          <span
            className="font-bold text-white"
            style={{ fontSize: coreSize * 0.15 }}
          >
            {title}
          </span>
          <div
            className="mt-1 text-white/80"
            style={{ fontSize: coreSize * 0.08 }}
          >
            {subtitle}
          </div>
        </div>
      </div>

      {/* BADGES AROUND THE CIRCLE */}
      <div
        className="absolute w-full h-full pointer-events-none flex justify-center items-center"
        style={{ width: badgeRadius * 2, height: badgeRadius * 2 }}
      >
        {badges.map((badge, i) => (
          <Badge
            key={i}
            badge={badge}
            index={i}
            total={badges.length}
            radius={badgeRadius}
          />
        ))}
      </div>
    </div>
  );
}

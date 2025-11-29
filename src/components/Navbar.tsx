"use client";

import * as React from "react";
import Link from "next/link";
import { MenuIcon, XIcon, MoonIcon, SunIcon, LaptopIcon } from "lucide-react";
import { useTheme } from "next-themes";

export function Navbar() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <nav
      className="sticky top-0 z-50 w-full px-4 py-3 bg-gray-100/95 dark:bg-gray-950/95 backdrop-blur-lg border-b border-orange-500/30 dark:border-orange-600/30 shadow-lg"
      data-landmark-index="0"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="text-xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent hover:from-orange-300 hover:to-red-400 transition"
        >
          🚀 Sagar Kumar Jha
        </Link>
        <div className="flex items-center gap-2 md:gap-4">
          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-4">
            <NavLinks />
          </ul>
          {/* Theme Toggle */}
          <ThemeToggle />
          {/* Hamburger Icon */}
          <button
            className="lg:hidden p-2 rounded-full bg-orange-500/20 dark:bg-orange-600/20 border border-orange-500/50 hover:bg-orange-500/30 transition"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <XIcon className="size-5 text-orange-400" />
            ) : (
              <MenuIcon className="size-5 text-orange-400" />
            )}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="flex flex-col justify-center items-center gap-2 mt-2 lg:hidden">
          <NavLinks onClick={() => setMenuOpen(false)} />
        </ul>
      )}
    </nav>
  );
}

function NavLinks({ onClick }: { onClick?: () => void }) {
  const links = [
    { href: "#leetcode-stats", label: "Coding Stats" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience-education", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#contacts", label: "Contact" },
  ];
  return (
    <>
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className="px-4 py-2 rounded-lg text-gray-800 ease-in-out hover:text-orange-400 hover:bg-orange-500/10 transition font-medium text-sm"
            onClick={onClick}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </>
  );
}

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  // Fix hydration mismatch issue
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  // Rotate: light → dark → system → light...
  const toggleTheme = () => {
    if (theme === "light") setTheme("dark");
    else if (theme === "dark") setTheme("system");
    else setTheme("light");
  };

  const renderIcon = () => {
    if (theme === "light")
      return <SunIcon className="size-5 text-yellow-500" />;
    if (theme === "dark") return <MoonIcon className="size-5 text-blue-300" />;
    return <LaptopIcon className="size-5 text-purple-400" />; // system mode
  };

  return (
    <button
      aria-label="Toggle theme"
      onClick={toggleTheme}
      className="
        p-2 rounded-full bg-white/40 dark:bg-black/40
        backdrop-blur-md border transition-all cursor-pointer
        hover:bg-white/60 dark:hover:bg-black/60
      "
    >
      {renderIcon()}
    </button>
  );
}


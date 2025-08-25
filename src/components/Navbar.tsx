"use client";

import * as React from "react";
import Link from "next/link";
import { MenuIcon, XIcon, MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

export function Navbar() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <nav className="sticky top-0 z-50 border max-w-5xl mx-auto px-4 py-2 bg-white/70 dark:bg-black/50 backdrop-blur-md shadow-lg rounded-xl mt-4" data-landmark-index="0">
      <div className="flex justify-between items-center">
        <Link href="/" className="text-2xl font-semibold">
          Sagar Kumar Jha
        </Link>
        <div className="flex items-center gap-2 md:gap-4">
          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-4">
            <NavLinks />
          </ul>
          {/* Theme Toggle */}
          <ThemeToggle />
          {/* Hamburger Icon */}
          <button
            className="md:hidden p-2 rounded-full bg-white/40 dark:bg-black/40 backdrop-blur-md border"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <XIcon className="size-5" />
            ) : (
              <MenuIcon className="size-5" />
            )}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="flex flex-col justify-center items-center gap-2 mt-2 md:hidden">
          <NavLinks onClick={() => setMenuOpen(false)} />
        </ul>
      )}
    </nav>
  );
}

function NavLinks({ onClick }: { onClick?: () => void }) {
  const links = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience-education", label: "Experience/Education" },
    { href: "#skills", label: "Skills" },
  ];
  return (
    <>
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className="px-3 py-1 rounded-lg hover:bg-white/80 dark:hover:bg-black/60 transition"
            onClick={onClick}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </>
  );
}

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <button
      aria-label="Toggle theme"
      className="p-2 rounded-full bg-white/40 dark:bg-black/40 backdrop-blur-md border transition-colors cursor-pointer"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <SunIcon className="size-5" />
      ) : (
        <MoonIcon className="size-5" />
      )}
    </button>
  );
}

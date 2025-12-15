"use client";

import * as React from "react";
import Link from "next/link";
import { MenuIcon, XIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { RiMoonCloudyFill, RiSunFoggyFill } from "react-icons/ri";

export function Navbar() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  // --- Hide on Scroll Logic ---
  const [hidden, setHidden] = React.useState(false);
  const [lastScroll, setLastScroll] = React.useState(0);

  React.useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;

      if (current > lastScroll && current > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      setLastScroll(current);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScroll]);

  return (
    <nav
      className={`
        sticky top-0 z-50 w-full px-4 py-3 transition-all duration-300 bg-background shadow-md border-b-2 border-orange-500
        ${hidden ? "-translate-y-full" : "translate-y-0"}
      `}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Brand */}
        <Link
          href="/"
          className="
            text-xl font-bold bg-gradient-to-r from-orange-400 to-red-500
            bg-clip-text text-transparent hover:from-orange-300 hover:to-red-400
            transition
          "
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

          {/* Mobile Toggle */}
          <button
            className="
              lg:hidden p-2 rounded-full bg-orange-500/20 dark:bg-orange-600/20
              border border-orange-500/50 hover:bg-orange-500/30 transition
            "
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
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
  ];

  return (
    <>
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className="
              px-4 py-2 text-gray-800 font-semibold dark:text-gray-200 ease-in-out transition text-sm sm:text-lg hover:text-orange-500 hover:dark:text-orange-500"
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

  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  // light → dark → system
  const toggleTheme = () => {
    if (theme === "light") setTheme("dark");
    else setTheme("light");
  };

  const renderIcon = () => {
    if (theme === "light")
      return <RiSunFoggyFill className="size-7 text-yellow-600" />;
    else 
      return <RiMoonCloudyFill className="size-7 text-yellow-400" />;
  };

  return (
    <button
      aria-label="Toggle theme"
      onClick={toggleTheme}
      className="rounded-full border-2 dark:bg-black/90 border-orange-500 bg-white/90 backdrop-blur-md transition-all cursor-pointer p-1 hover:border-orange-900"
    >
      {renderIcon()}
    </button>
  );
}

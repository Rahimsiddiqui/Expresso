"use client";

import { useTheme } from "@/context/ThemeContext";
import { Moon, Sun } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const { theme, toggleTheme, mounted } = useTheme();

  return (
    <nav className="flex items-center justify-between px-4 sm:px-8 md:px-10 py-4 bg-surface border-b border-border transition-colors duration-300">
      <Link
        href="/"
        className="text-[22px] sm:text-2xl tracking-wide font-bold text-primary"
      >
        Expresso
      </Link>

      <button
        onClick={toggleTheme}
        className="p-2.5 rounded-full hover:bg-surface-highlight transition-[background-color] duration-300 focus:outline-none flex items-center justify-center min-w-10 min-h-10 cursor-pointer"
        aria-label="Toggle Theme"
      >
        {/* Only render icon after mounting to avoid hydration mismatch */}
        {mounted ? (
          theme === "light" ? (
            <Moon className="w-5 sm:w-6 h-5 sm:h-6 text-text/80" />
          ) : (
            <Sun className="w-5 sm:w-6 h-5 sm:h-6 text-text/80" />
          )
        ) : (
          <div className="w-5 sm:w-6 h-5 sm:h-6" /> // Placeholder to keep layout stable
        )}
      </button>
    </nav>
  );
};

export default Navbar;

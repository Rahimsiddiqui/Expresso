"use client";

import { useTheme } from "@/context/ThemeContext";
import { Moon, Sun } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const { theme, toggleTheme, mounted } = useTheme();

  return (
    <div className="w-full bg-surface-highlight/40 border-b px-6 sm:px-8 md:px-10 py-4 border-border transition-colors duration-300">
      <nav className="flex items-center justify-between max-w-6xl mx-auto">
        <Link
          href="/"
          className="text-[22px] sm:text-2xl tracking-wide font-bold font-geist-sans text-primary"
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
              <Moon className="w-5 sm:w-5.5 h-5 sm:h-5.5 text-text/80" />
            ) : (
              <Sun className="w-5 sm:w-5.5 h-5 sm:h-5.5 text-text/80" />
            )
          ) : (
            <div className="w-5 sm:w-5.5 h-5 sm:h-5.5" /> // Placeholder to keep layout stable
          )}
        </button>
      </nav>
    </div>
  );
};

export default Navbar;

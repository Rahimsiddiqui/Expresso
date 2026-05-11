import { ThemeProvider } from "@/context/ThemeContext";
import { Geist, Inter } from "next/font/google";
import "./globals.css";

// Configure Geist Sans for primary headings and UI elements
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Configure Inter for body text and code-related content
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

/**
 * RootLayout component wraps the entire application.
 * It initializes global providers and applies foundational styling.
 */
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="antialiased overflow-y-auto overflow-x-hidden!">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

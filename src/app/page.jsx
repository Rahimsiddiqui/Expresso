"use client";

import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center justify-center pt-20">
        <h1 className="text-4xl font-bold">Welcome to Expresso</h1>
        <p className="text-text-secondary mt-4">
          Check the theme toggle in the navbar!
        </p>
      </div>
    </main>
  );
}

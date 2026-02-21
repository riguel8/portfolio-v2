"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="max-w-md p-8 text-center">
        <div className="mb-6 text-7xl font-bold text-accent">!</div>
        <h1 className="mb-4 text-2xl font-bold text-foreground">
          Something went wrong
        </h1>
        <p className="mb-8 text-sm leading-relaxed text-muted">
          An unexpected error occurred. Please try refreshing the page.
        </p>
        <button
          onClick={reset}
          className="rounded-full bg-accent px-8 py-3.5 text-sm font-bold text-background transition-transform duration-300 hover:scale-105"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}

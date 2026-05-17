"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

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
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md p-6 sm:p-8 text-center">
        <div className="mb-6 flex justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-accent/10">
            <Icon icon="solar:danger-triangle-line-duotone" className="h-10 w-10 text-accent" />
          </div>
        </div>
        <h1 className="mb-4 text-xl sm:text-2xl font-bold text-foreground">
          Something went wrong
        </h1>
        <p className="mb-8 text-sm leading-relaxed text-muted">
          An unexpected error occurred. Please try refreshing the page or contact support if the problem persists.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 sm:px-8 py-3 sm:py-3.5 text-sm font-bold text-background transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <Icon icon="solar:refresh-line-duotone" className="h-4 w-4" />
            Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 sm:px-8 py-3 sm:py-3.5 text-sm font-medium text-foreground transition-all duration-300 hover:border-accent/40 hover:bg-accent/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <Icon icon="solar:home-2-line-duotone" className="h-4 w-4" />
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}

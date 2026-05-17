import Link from "next/link";
import { Icon } from "@iconify/react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md p-6 sm:p-8 text-center">
        <div className="mb-6 flex justify-center">
          <div className="relative">
            <div className="text-7xl sm:text-8xl font-bold tracking-tighter text-accent">
              404
            </div>
            <div className="absolute -top-2 -right-2">
              <Icon icon="solar:ghost-smile-line-duotone" className="h-8 w-8 text-muted" />
            </div>
          </div>
        </div>
        <h1 className="mb-4 text-xl sm:text-2xl font-bold text-foreground">
          Page not found
        </h1>
        <p className="mb-8 text-sm leading-relaxed text-muted">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 sm:px-8 py-3 sm:py-3.5 text-sm font-bold text-background transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <Icon icon="solar:home-2-line-duotone" className="h-4 w-4" />
            Back to Home
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 sm:px-8 py-3 sm:py-3.5 text-sm font-medium text-foreground transition-all duration-300 hover:border-accent/40 hover:bg-accent/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <Icon icon="solar:letter-line-duotone" className="h-4 w-4" />
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
}

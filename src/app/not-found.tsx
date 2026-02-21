import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="max-w-md p-8 text-center">
        <div className="mb-2 text-8xl font-bold tracking-tighter text-accent">
          404
        </div>
        <h1 className="mb-4 text-2xl font-bold text-foreground">
          Page not found
        </h1>
        <p className="mb-8 text-sm leading-relaxed text-muted">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex rounded-full bg-accent px-8 py-3.5 text-sm font-bold text-background transition-transform duration-300 hover:scale-105"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

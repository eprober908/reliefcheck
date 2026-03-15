import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <p className="text-6xl font-bold text-green-accent mb-4">404</p>
        <h1 className="text-2xl font-bold text-navy mb-3" style={{ fontFamily: "var(--font-serif)" }}>
          Page Not Found
        </h1>
        <p className="text-text-secondary mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let us help you find what you need.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-green-accent hover:bg-green-accent-hover text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            Go Home
          </Link>
          <Link
            href="/calculator"
            className="inline-flex items-center gap-2 text-navy hover:text-green-accent font-medium px-6 py-3 rounded-xl border border-gray-border hover:border-green-accent/30 transition-all"
          >
            Try Calculator
          </Link>
        </div>
      </div>
    </div>
  );
}

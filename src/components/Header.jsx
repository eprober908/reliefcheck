"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-border sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green-accent rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="text-xl font-bold text-navy">
              Relief<span className="text-green-accent">Check</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/calculator" className="text-sm font-medium text-text-secondary hover:text-navy transition-colors">
              Debt Calculator
            </Link>
            <Link href="/best-debt-relief-companies" className="text-sm font-medium text-text-secondary hover:text-navy transition-colors">
              Best Companies
            </Link>
            <Link href="/calculator" className="inline-flex items-center gap-2 bg-green-accent hover:bg-green-accent-hover text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors">
              Check Your Savings
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile nav */}
        {menuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-border mt-2 pt-4">
            <nav className="flex flex-col gap-3">
              <Link href="/calculator" className="text-sm font-medium text-text-secondary hover:text-navy py-2" onClick={() => setMenuOpen(false)}>
                Debt Calculator
              </Link>
              <Link href="/best-debt-relief-companies" className="text-sm font-medium text-text-secondary hover:text-navy py-2" onClick={() => setMenuOpen(false)}>
                Best Companies
              </Link>
              <Link href="/calculator" className="inline-flex items-center justify-center gap-2 bg-green-accent hover:bg-green-accent-hover text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors mt-2" onClick={() => setMenuOpen(false)}>
                Check Your Savings
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

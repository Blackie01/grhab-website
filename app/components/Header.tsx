'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[var(--color-border)]">
      <div className="container-main">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[var(--color-primary)] rounded-lg flex items-center justify-center">
              <svg 
                viewBox="0 0 24 24" 
                className="w-5 h-5 text-white" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <path d="M4 5h16M4 12h16M4 19h10" strokeLinecap="round" />
              </svg>
            </div>
            <span className="text-xl font-semibold text-[var(--color-foreground)]">grhab</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link 
              href="#features" 
              className="text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors"
            >
              Features
            </Link>
            <Link 
              href="#how-it-works" 
              className="text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors"
            >
              How It Works
            </Link>
            <Link 
              href="/privacy" 
              className="text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors"
            >
              Privacy
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a 
              href="#download" 
              className="btn btn-primary text-sm"
            >
              Add to Chrome
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-[var(--color-muted-bg)]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg 
              viewBox="0 0 24 24" 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-[var(--color-border)]">
            <div className="flex flex-col gap-4">
              <Link 
                href="#features" 
                className="text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </Link>
              <Link 
                href="#how-it-works" 
                className="text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link 
                href="/privacy" 
                className="text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Privacy
              </Link>
              <a 
                href="#download" 
                className="btn btn-primary text-sm w-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                Add to Chrome
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);
  const companyRef = useRef<HTMLDivElement>(null);

  // Close popover on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        companyRef.current &&
        !companyRef.current.contains(e.target as Node)
      ) {
        setCompanyOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
            <span className="text-xl font-semibold text-[var(--color-foreground)]">
              Grhab
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/#features"
              className="text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors"
            >
              Features
            </Link>
            <Link
              href="/#solutions"
              className="text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors"
            >
              Solutions
            </Link>

            {/* Company Popover */}
            <div className="relative" ref={companyRef}>
              <button
                onClick={() => setCompanyOpen(!companyOpen)}
                className="flex items-center gap-1 text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors"
              >
                Company
                <svg
                  viewBox="0 0 24 24"
                  className={`w-4 h-4 transition-transform ${companyOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    d="M6 9l6 6 6-6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {companyOpen && (
                <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-xl border border-[var(--color-border)] shadow-lg overflow-hidden animate-fade-in">
                  <div className="p-1">
                    <Link
                      href="/about"
                      className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[var(--color-muted-bg)] transition-colors"
                      onClick={() => setCompanyOpen(false)}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="w-5 h-5 text-[var(--color-muted)]"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
                          strokeLinecap="round"
                        />
                        <circle cx="9" cy="7" r="4" />
                      </svg>
                      <div>
                        <div className="text-sm font-medium text-[var(--color-foreground)]">
                          About
                        </div>
                        <div className="text-xs text-[var(--color-muted)]">
                          Learn about Blhack Labs
                        </div>
                      </div>
                    </Link>
                    <a
                      href="mailto:blhacklabs@gmail.com"
                      className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[var(--color-muted-bg)] transition-colors"
                      onClick={() => setCompanyOpen(false)}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="w-5 h-5 text-[var(--color-muted)]"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                        <path d="M22 7l-10 7L2 7" />
                      </svg>
                      <div>
                        <div className="text-sm font-medium text-[var(--color-foreground)]">
                          Contact
                        </div>
                        <div className="text-xs text-[var(--color-muted)]">
                          blhacklabs@gmail.com
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="https://chromewebstore.google.com/detail/grhab/niobjkkfminkigfgldbccmndlkagidih"
              className="btn btn-primary text-sm"
              target="_blank"
              rel="noopener noreferrer"
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
            <div className="flex flex-col gap-1">
              <Link
                href="/#features"
                className="text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors py-2 px-2 rounded-lg hover:bg-[var(--color-muted-bg)]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="/#solutions"
                className="text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors py-2 px-2 rounded-lg hover:bg-[var(--color-muted-bg)]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Solutions
              </Link>

              {/* Mobile Company Accordion */}
              <button
                onClick={() => setMobileCompanyOpen(!mobileCompanyOpen)}
                className="flex items-center justify-between text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors py-2 px-2 rounded-lg hover:bg-[var(--color-muted-bg)] w-full text-left"
              >
                Company
                <svg
                  viewBox="0 0 24 24"
                  className={`w-4 h-4 transition-transform ${mobileCompanyOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    d="M6 9l6 6 6-6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              {mobileCompanyOpen && (
                <div className="pl-4 flex flex-col gap-1">
                  <Link
                    href="/about"
                    className="text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors py-2 px-2 rounded-lg hover:bg-[var(--color-muted-bg)] text-sm"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setMobileCompanyOpen(false);
                    }}
                  >
                    About
                  </Link>
                  <a
                    href="mailto:blhacklabs@gmail.com"
                    className="text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors py-2 px-2 rounded-lg hover:bg-[var(--color-muted-bg)] text-sm"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setMobileCompanyOpen(false);
                    }}
                  >
                    Contact
                  </a>
                </div>
              )}

              <a
                href="https://chromewebstore.google.com/detail/grhab/niobjkkfminkigfgldbccmndlkagidih"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary text-sm w-full mt-2"
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

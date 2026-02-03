import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-muted-bg)] border-t border-[var(--color-border)]">
      <div className="container-main py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
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
                grhab
              </span>
            </Link>
            <p className="text-[var(--color-muted)] max-w-sm">
              Study smarter with instant screenshot capture and PDF export.
              Designed for productive learners.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-[var(--color-foreground)] mb-4">
              Product
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#features"
                  className="text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#how-it-works"
                  className="text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <a
                  href="#download"
                  className="text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors"
                >
                  Download
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-[var(--color-foreground)] mb-4">
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[var(--color-border)] mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[var(--color-muted)] text-sm">
            © {currentYear} grhab. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-[var(--color-muted)] text-sm">
              Made for productive learners
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-pattern py-20 md:py-32">
        <div className="container-main text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[var(--color-accent-bg)] border border-[var(--color-primary)]/20 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-[var(--color-primary)] rounded-full animate-pulse"></span>
              <span className="text-sm text-[var(--color-primary)] font-medium">
                Chrome Extension
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[var(--color-foreground)] leading-tight mb-6">
              Glean and collate knowledge on the go
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-[var(--color-muted)] mb-8 max-w-2xl mx-auto">
              Capture multiple screenshots from any webpage and instantly export
              them as a beautiful PDF. Perfect for research, studying, and
              collecting inspiration.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              id="download"
            >
              <a
                href="https://chrome.google.com/webstore"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary text-base px-8 py-4"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                >
                  <path d="M12 0C8.21 0 4.831 1.757 2.632 4.501l3.953 6.848A5.454 5.454 0 0 1 12 6.545h10.691A12 12 0 0 0 12 0zM1.931 5.47A11.943 11.943 0 0 0 0 12c0 6.012 4.42 10.991 10.189 11.864l3.953-6.847a5.45 5.45 0 0 1-6.865-2.29L1.93 5.47zm13.06 2.166a5.454 5.454 0 0 1 2.655 7.727l-3.953 6.848A12.014 12.014 0 0 0 24 12c0-.357-.016-.709-.046-1.058H14.99a5.499 5.499 0 0 1-.001.23z" />
                </svg>
                Add to Chrome — It&apos;s Free
              </a>
              <a
                href="#how-it-works"
                className="btn btn-outline text-base px-8 py-4"
              >
                See How It Works
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white" id="features">
        <div className="container-main">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-foreground)] mb-4">
              Everything you need to study smarter
            </h2>
            <p className="text-[var(--color-muted)] text-lg max-w-2xl mx-auto">
              Simple, fast, and designed for focused learning
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="card animate-fade-in">
              <div className="w-12 h-12 bg-[var(--color-accent-bg)] rounded-xl flex items-center justify-center mb-4">
                <svg
                  viewBox="0 0 24 24"
                  className="w-6 h-6 text-[var(--color-primary)]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="M21 15l-5-5L5 21" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-foreground)] mb-2">
                Quick Screenshot Capture
              </h3>
              <p className="text-[var(--color-muted)]">
                Use keyboard shortcuts to capture any part of a webpage
                instantly. No complicated setup required.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="card animate-fade-in animate-delay-100">
              <div className="w-12 h-12 bg-[var(--color-accent-bg)] rounded-xl flex items-center justify-center mb-4">
                <svg
                  viewBox="0 0 24 24"
                  className="w-6 h-6 text-[var(--color-primary)]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M19 11H5M19 11a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2M19 11V9a2 2 0 0 0-2-2M5 11V9a2 2 0 0 1 2-2m0 0V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-foreground)] mb-2">
                Organize Your Collection
              </h3>
              <p className="text-[var(--color-muted)]">
                Preview all your screenshots in one place. Review, reorder, or
                remove before exporting.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="card animate-fade-in animate-delay-200">
              <div className="w-12 h-12 bg-[var(--color-accent-bg)] rounded-xl flex items-center justify-center mb-4">
                <svg
                  viewBox="0 0 24 24"
                  className="w-6 h-6 text-[var(--color-primary)]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14,2 14,8 20,8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-foreground)] mb-2">
                Export to PDF Instantly
              </h3>
              <p className="text-[var(--color-muted)]">
                Generate a clean PDF with all your screenshots. Perfect for
                notes, presentations, or sharing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-[var(--color-muted-bg)]" id="how-it-works">
        <div className="container-main">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-foreground)] mb-4">
              How it works
            </h2>
            <p className="text-[var(--color-muted)] text-lg max-w-2xl mx-auto">
              Three simple steps to capture and organize your research
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--color-primary)] text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-foreground)] mb-3">
                Install the Extension
              </h3>
              <p className="text-[var(--color-muted)]">
                Add grhab to Chrome from the Web Store. It&apos;s completely
                free and takes seconds.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--color-primary)] text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-foreground)] mb-3">
                Capture Screenshots
              </h3>
              <p className="text-[var(--color-muted)]">
                Press the shortcut key to capture any webpage content. Take as
                many as you need.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--color-primary)] text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-foreground)] mb-3">
                Export as PDF
              </h3>
              <p className="text-[var(--color-muted)]">
                Click export and get a beautifully formatted PDF with all your
                captures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container-main">
          <div className="bg-gradient-to-br from-[var(--color-primary)] to-[#7D341B] rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Ready to study smarter?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
              Join thousands of students and researchers who use grhab to
              capture and organize their learning.
            </p>
            <a
              href="https://chrome.google.com/webstore"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-[var(--color-primary)] font-medium px-8 py-4 rounded-lg hover:bg-white/90 transition-all"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 mr-2"
                fill="currentColor"
              >
                <path d="M12 0C8.21 0 4.831 1.757 2.632 4.501l3.953 6.848A5.454 5.454 0 0 1 12 6.545h10.691A12 12 0 0 0 12 0zM1.931 5.47A11.943 11.943 0 0 0 0 12c0 6.012 4.42 10.991 10.189 11.864l3.953-6.847a5.45 5.45 0 0 1-6.865-2.29L1.93 5.47zm13.06 2.166a5.454 5.454 0 0 1 2.655 7.727l-3.953 6.848A12.014 12.014 0 0 0 24 12c0-.357-.016-.709-.046-1.058H14.99a5.499 5.499 0 0 1-.001.23z" />
              </svg>
              Get grhab for Chrome
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

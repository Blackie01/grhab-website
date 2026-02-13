import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Grhab",
  description:
    "Learn about Blhack Labs, the team behind Grhab — a productivity tool for capturing and organizing web content.",
};

export default function About() {
  return (
    <div className="py-16 md:py-24">
      <div className="container-main">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-semibold text-[var(--color-foreground)] mb-4">
              About Us
            </h1>
            <p className="text-[var(--color-muted)]">Built by Blhack Labs</p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-[var(--color-foreground)] mb-4">
                Who We Are
              </h2>
              <p className="text-[var(--color-muted)] mb-4">
                Blhack Labs is a small, focused team passionate about building
                tools that make everyday digital workflows faster and smarter.
                We are focused on experimenting and shipping products that solve
                real problems.
              </p>
              <p className="text-[var(--color-muted)]">
                Grhab is our first product. It's a Chrome extension designed to help
                students, researchers, designers, and creators capture and
                organize web content effortlessly.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-[var(--color-foreground)] mb-4">
                Grhab's Mission
              </h2>
              <p className="text-[var(--color-muted)]">
                With Grhab, we&apos;re on a mission to help people glean and collate
                knowledge on the go. Whether you&apos;re studying for exams,
                compiling research, or gathering design inspiration, we want to
                make the process seamless — no sign-ups, no cloud dependencies,
                no distractions.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-[var(--color-foreground)] mb-4">
                What We Value
              </h2>
              <ul className="list-disc list-inside text-[var(--color-muted)] space-y-2">
                <li>
                  <strong className="text-[var(--color-foreground)]">
                    Privacy First:
                  </strong>{" "}
                  Your data stays on your device. We don&apos;t run servers that
                  collect your information.
                </li>
                <li>
                  <strong className="text-[var(--color-foreground)]">
                    Simplicity:
                  </strong>{" "}
                  Tools should get out of your way. We obsess over keeping
                  things minimal and intuitive.
                </li>
                <li>
                  <strong className="text-[var(--color-foreground)]">
                    Accessibility:
                  </strong>{" "}
                  Grhab is free and always will be. Great tools shouldn&apos;t
                  have a paywall.
                </li>
              </ul>
            </section>

            <section className="p-6 bg-[var(--color-muted-bg)] rounded-xl border border-[var(--color-border)]">
              <h2 className="text-xl font-semibold text-[var(--color-foreground)] mb-3">
                Get in Touch
              </h2>
              <p className="text-[var(--color-muted)] mb-2">
                Have questions, feedback, or just want to say hi? We&apos;d love
                to hear from you.
              </p>
              <a
                href="mailto:blhacklabs@gmail.com"
                className="text-[var(--color-primary)] hover:underline font-medium"
              >
                blhacklabs@gmail.com
              </a>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

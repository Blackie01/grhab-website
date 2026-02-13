import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - grhab",
  description:
    "Learn how Grhab handles your data. We are committed to protecting your privacy.",
};

export default function PrivacyPolicy() {
  return (
    <div className="py-16 md:py-24">
      <div className="container-main">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-semibold text-[var(--color-foreground)] mb-4">
              Privacy Policy
            </h1>
            <p className="text-[var(--color-muted)]">
              Last updated: February 3, 2026
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-[var(--color-foreground)] mb-4">
                Introduction
              </h2>
              <p className="text-[var(--color-muted)] mb-4">
                Grhab (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is
                committed to protecting your privacy. This Privacy Policy
                explains how our Chrome extension handles information when you
                use our service.
              </p>
              <p className="text-[var(--color-muted)]">
                By using grhab, you agree to the collection and use of
                information in accordance with this policy.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-[var(--color-foreground)] mb-4">
                Information We Collect
              </h2>
              <p className="text-[var(--color-muted)] mb-4">
                Grhab is designed with privacy in mind. We collect and process
                minimal data:
              </p>
              <ul className="list-disc list-inside text-[var(--color-muted)] space-y-2">
                <li>
                  <strong className="text-[var(--color-foreground)]">
                    Screenshots:
                  </strong>{" "}
                  When you capture screenshots, they are stored locally on your
                  device using browser storage (IndexedDB). These screenshots
                  are never transmitted to our servers.
                </li>
                <li>
                  <strong className="text-[var(--color-foreground)]">
                    Google Account Information:
                  </strong>{" "}
                  If you choose to save PDFs to Google Drive, we use OAuth 2.0
                  to authenticate with your Google account. We only request
                  access to create files in your Google Drive and do not access
                  any other personal information.
                </li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-[var(--color-foreground)] mb-4">
                How We Use Your Information
              </h2>
              <p className="text-[var(--color-muted)] mb-4">
                The information processed by Grhab is used solely to provide the
                extension&apos;s functionality:
              </p>
              <ul className="list-disc list-inside text-[var(--color-muted)] space-y-2">
                <li>
                  To capture and temporarily store screenshots on your device
                </li>
                <li>
                  To generate PDF documents from your captured screenshots
                </li>
                <li>
                  To save PDF documents to your Google Drive (if you opt to use
                  this feature)
                </li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-[var(--color-foreground)] mb-4">
                Data Storage and Security
              </h2>
              <ul className="list-disc list-inside text-[var(--color-muted)] space-y-2">
                <li>
                  <strong className="text-[var(--color-foreground)]">
                    Local Storage:
                  </strong>{" "}
                  All screenshots are stored locally on your device using
                  IndexedDB. This data remains on your device and is never sent
                  to any external servers.
                </li>
                <li>
                  <strong className="text-[var(--color-foreground)]">
                    No External Servers:
                  </strong>{" "}
                  Grhab does not operate any servers that collect or store your
                  data. The extension works entirely client-side.
                </li>
                <li>
                  <strong className="text-[var(--color-foreground)]">
                    Google Drive Integration:
                  </strong>{" "}
                  When using the Google Drive feature, your PDF is uploaded
                  directly to Google&apos;s servers using their secure API. We
                  do not store copies of these files.
                </li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-[var(--color-foreground)] mb-4">
                Third-Party Services
              </h2>
              <p className="text-[var(--color-muted)] mb-4">
                Grhab may integrate with the following third-party services:
              </p>
              <ul className="list-disc list-inside text-[var(--color-muted)] space-y-2">
                <li>
                  <strong className="text-[var(--color-foreground)]">
                    Google Drive API:
                  </strong>{" "}
                  Used for optional cloud storage of generated PDFs. Use of
                  Google APIs is subject to
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-primary)] hover:underline ml-1"
                  >
                    Google&apos;s Privacy Policy
                  </a>
                  .
                </li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-[var(--color-foreground)] mb-4">
                Your Rights
              </h2>
              <p className="text-[var(--color-muted)] mb-4">
                You have full control over your data:
              </p>
              <ul className="list-disc list-inside text-[var(--color-muted)] space-y-2">
                <li>
                  <strong className="text-[var(--color-foreground)]">
                    Access:
                  </strong>{" "}
                  All your data is stored locally and accessible through the
                  extension interface.
                </li>
                <li>
                  <strong className="text-[var(--color-foreground)]">
                    Deletion:
                  </strong>{" "}
                  You can delete all stored screenshots at any time using the
                  &quot;Clear All&quot; function in the extension. Uninstalling
                  the extension will also remove all locally stored data.
                </li>
                <li>
                  <strong className="text-[var(--color-foreground)]">
                    Revoke Access:
                  </strong>{" "}
                  You can revoke Google Drive access at any time through your
                  Google Account settings.
                </li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-[var(--color-foreground)] mb-4">
                Children&apos;s Privacy
              </h2>
              <p className="text-[var(--color-muted)]">
                Grhab is not intended for use by children under the age of 13.
                We do not knowingly collect personal information from children
                under 13.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-[var(--color-foreground)] mb-4">
                Changes to This Privacy Policy
              </h2>
              <p className="text-[var(--color-muted)]">
                We may update our Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the &quot;Last updated&quot; date. You
                are advised to review this Privacy Policy periodically for any
                changes.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-[var(--color-foreground)] mb-4">
                Contact Us
              </h2>
              <p className="text-[var(--color-muted)]">
                If you have any questions about this Privacy Policy, please
                contact us at:
              </p>
              <p className="text-[var(--color-foreground)] font-medium mt-2">
                Email: support@grhab.com
              </p>
            </section>

            <section className="p-6 bg-[var(--color-muted-bg)] rounded-xl border border-[var(--color-border)]">
              <h2 className="text-xl font-semibold text-[var(--color-foreground)] mb-3">
                Summary
              </h2>
              <ul className="list-disc list-inside text-[var(--color-muted)] space-y-1">
                <li>We don&apos;t collect personal data</li>
                <li>Screenshots are stored locally on your device only</li>
                <li>
                  No data is sent to external servers (except Google Drive if
                  you opt-in)
                </li>
                <li>You have full control to delete all data at any time</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

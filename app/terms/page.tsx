import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Grhab",
  description:
    "Read the terms and conditions for using Grhab, the screenshot capture and PDF export tool.",
};

export default function TermsOfService() {
  return (
    <div className="py-16 md:py-24">
      <div className="container-main">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-semibold text-[var(--color-foreground)] mb-4">
              Terms of Service
            </h1>
            <p className="text-[var(--color-muted)]">
              Last updated: February 13, 2026
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-[var(--color-foreground)] mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-[var(--color-muted)] mb-4">
                By installing, accessing, or using the Grhab Chrome extension
                (&quot;Service&quot;), you agree to be bound by these Terms of
                Service (&quot;Terms&quot;). If you do not agree to these Terms,
                do not use the Service.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-[var(--color-foreground)] mb-4">
                2. Description of Service
              </h2>
              <p className="text-[var(--color-muted)] mb-4">
                Grhab is a Chrome browser extension that allows users to:
              </p>
              <ul className="list-disc list-inside text-[var(--color-muted)] space-y-2">
                <li>Capture screenshots of web pages</li>
                <li>Store screenshots locally on your device</li>
                <li>Generate PDF documents from captured screenshots</li>
                <li>
                  Optionally save PDF documents to Google Drive via integration
                </li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-[var(--color-foreground)] mb-4">
                3. User Responsibilities
              </h2>
              <p className="text-[var(--color-muted)] mb-4">
                When using Grhab, you agree to:
              </p>
              <ul className="list-disc list-inside text-[var(--color-muted)] space-y-2">
                <li>
                  Use the Service only for lawful purposes and in compliance
                  with all applicable laws and regulations
                </li>
                <li>
                  Not use the Service to capture, store, or distribute content
                  that infringes on the intellectual property rights of others
                </li>
                <li>
                  Not attempt to reverse engineer, decompile, or disassemble any
                  part of the Service
                </li>
                <li>
                  Not use the Service to capture sensitive or confidential
                  information without proper authorization
                </li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-[var(--color-foreground)] mb-4">
                4. Intellectual Property
              </h2>
              <p className="text-[var(--color-muted)] mb-4">
                The Service, including its original content, features, and
                functionality, is owned by Grhab and is protected by
                international copyright, trademark, and other intellectual
                property laws. You retain ownership of any screenshots and PDFs
                you create using the Service.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-[var(--color-foreground)] mb-4">
                5. Google Drive Integration
              </h2>
              <p className="text-[var(--color-muted)] mb-4">
                If you choose to use the Google Drive integration feature:
              </p>
              <ul className="list-disc list-inside text-[var(--color-muted)] space-y-2">
                <li>
                  You authorize Grhab to access your Google Drive solely for the
                  purpose of saving PDF files
                </li>
                <li>
                  Your use of Google Drive is also subject to Google&apos;s
                  Terms of Service and Privacy Policy
                </li>
                <li>
                  You can revoke Google Drive access at any time through your
                  Google Account settings or within the extension
                </li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-[var(--color-foreground)] mb-4">
                6. Data and Privacy
              </h2>
              <p className="text-[var(--color-muted)] mb-4">
                Your privacy is important to us. All screenshots are stored
                locally on your device and are never transmitted to our servers.
                For more details on how we handle your data, please review our{" "}
                <a
                  href="/privacy"
                  className="text-[var(--color-primary)] hover:underline"
                >
                  Privacy Policy
                </a>
                .
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-[var(--color-foreground)] mb-4">
                7. Disclaimer of Warranties
              </h2>
              <p className="text-[var(--color-muted)] mb-4">
                The Service is provided on an &quot;AS IS&quot; and &quot;AS
                AVAILABLE&quot; basis without warranties of any kind, whether
                express or implied. We do not guarantee that the Service will be
                uninterrupted, secure, or error-free.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-[var(--color-foreground)] mb-4">
                8. Limitation of Liability
              </h2>
              <p className="text-[var(--color-muted)] mb-4">
                To the fullest extent permitted by law, Grhab shall not be
                liable for any indirect, incidental, special, consequential, or
                punitive damages, including but not limited to loss of data,
                profits, or goodwill, arising out of or in connection with your
                use of the Service.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-[var(--color-foreground)] mb-4">
                9. Modifications to the Service
              </h2>
              <p className="text-[var(--color-muted)]">
                We reserve the right to modify, suspend, or discontinue the
                Service at any time without prior notice. We shall not be liable
                to you or any third party for any modification, suspension, or
                discontinuation of the Service.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-[var(--color-foreground)] mb-4">
                10. Changes to These Terms
              </h2>
              <p className="text-[var(--color-muted)]">
                We may update these Terms from time to time. We will notify you
                of any changes by posting the new Terms on this page and
                updating the &quot;Last updated&quot; date. Your continued use
                of the Service after changes are posted constitutes your
                acceptance of the revised Terms.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-[var(--color-foreground)] mb-4">
                11. Contact Us
              </h2>
              <p className="text-[var(--color-muted)]">
                If you have any questions about these Terms of Service, please
                contact us at:
              </p>
              <p className="text-[var(--color-foreground)] font-medium mt-2">
                Email: blhacklabs@gmail.com
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

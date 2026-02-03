import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "grhab - Glean and Collate Knowledge on the Go",
  description:
    "Capture multiple screenshots and instantly save them as PDF. The perfect Chrome extension for productive studying and research.",
  keywords: [
    "screenshot",
    "PDF",
    "Chrome extension",
    "productivity",
    "study tool",
    "research",
  ],
  openGraph: {
    title: "grhab - Study Smarter with Screenshot to PDF",
    description:
      "Capture multiple screenshots and instantly save them as PDF. The perfect Chrome extension for productive studying.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Outfit, DM_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "JAMAL - Visual Brainstorming & Real-Time Collaboration",
  description:
    "An open-source desktop application for visual brainstorming and real-time collaboration. Create beautiful drawings, collaborate in real-time, and work offline. Built with TypeScript, React, TLDraw, and Tauri.",
  keywords: [
    "drawing app",
    "brainstorming",
    "collaboration",
    "desktop app",
    "open source",
    "visual tools",
    "mind mapping",
    "tldraw",
    "tauri",
    "offline-first",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${outfit.variable} ${dmSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

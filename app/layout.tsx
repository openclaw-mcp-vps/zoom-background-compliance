import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zoom Background Compliance | Ensure Policy-Compliant Video Backgrounds",
  description: "AI-powered Zoom background scanning for HR teams. Detect inappropriate content, flag violations, and suggest compliant alternatives automatically."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="0835139a-0bf6-43bf-9ddc-778f7b8b5b71"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}

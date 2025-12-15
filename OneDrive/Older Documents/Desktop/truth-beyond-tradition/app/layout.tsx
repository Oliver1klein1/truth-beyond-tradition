import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Truth Beyond Tradition | Rediscover the Jesus You Always Knew Was There",
  description: "Breaking fear-based theology. Reclaiming the heart of Jesus.",
  keywords: [
    "Jesus",
    "deconstruction",
    "bible contradictions",
    "Yahweh",
    "Paul",
    "hell",
    "theology",
    "Christianity",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}


import type { Metadata } from "next";
import { Cinzel, Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-ancient",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
  weight: ["300", "500", "700"],
});

const spaceMono = Space_Mono({
  variable: "--font-data",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Code & Chaos | VJCET's Greatest Overnight Hackathon 2026",
  description: "Join the most intense 14-hour hackathon at VJCET. Build sustainable solutions, compete for ₹25,000+ prizes, and forge the future. February 25-26, 2026.",
  keywords: ["hackathon", "VJCET", "coding", "programming", "sustainability", "Kerala", "college hackathon"],
  authors: [{ name: "Code & Chaos Team" }],
  openGraph: {
    title: "Code & Chaos | VJCET 2026",
    description: "The most intense 14-hour hackathon at VJCET. Build. Compete. Conquer.",
    type: "website",
    locale: "en_US",
    siteName: "Code & Chaos",
  },
  twitter: {
    card: "summary_large_image",
    title: "Code & Chaos | VJCET 2026",
    description: "The most intense 14-hour hackathon at VJCET. Build. Compete. Conquer.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${cinzel.variable} ${spaceGrotesk.variable} ${spaceMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Renuka Prasad B.S | Full Stack & AI Engineer",
  description:
    "Full Stack & AI Engineer building scalable software systems, AI-powered applications, and automation workflows. Based in Bangalore, India.",
  keywords: [
    "Full Stack Developer",
    "AI Engineer",
    "RAG",
    "Next.js",
    "React",
    "Node.js",
    "Python",
    "Bangalore",
    "Renuka Prasad",
  ],
  authors: [{ name: "Renuka Prasad B.S" }],
  creator: "Renuka Prasad B.S",
  openGraph: {
    type: "website",
    locale: "en_IN",
    title: "Renuka Prasad B.S | Full Stack & AI Engineer",
    description:
      "Building scalable software systems, AI-powered applications, and automation workflows.",
    siteName: "Renuka Prasad B.S Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Renuka Prasad B.S | Full Stack & AI Engineer",
    description:
      "Building scalable software systems, AI-powered applications, and automation workflows.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

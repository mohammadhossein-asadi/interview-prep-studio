import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { AuthProvider } from "@/components/providers/auth-provider";
import { StoreProvider } from "@/components/providers/store-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Interview Prep Studio — Ace Your Next Technical Interview",
  description:
    "The ultimate AI-powered interview preparation platform for modern web developers. Practice questions, take quizzes, review flashcards, and track your progress.",
  keywords: [
    "interview preparation",
    "technical interview",
    "web developer",
    "frontend interview",
    "backend interview",
    "coding challenges",
    "React interview",
    "JavaScript interview",
  ],
  openGraph: {
    title: "Interview Prep Studio",
    description: "Ace your next technical interview with AI-powered preparation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <AuthProvider>
            <StoreProvider>{children}</StoreProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

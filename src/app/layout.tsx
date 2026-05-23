import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mark Benison Mendevil — Full-Stack Developer & Researcher",
  description:
    "Portfolio of Mark Benison Mendevil — Full-Stack Developer, Android Developer, and Researcher specializing in Adaptive Learning Systems and AI-assisted Educational Platforms.",
  keywords: [
    "Full-Stack Developer",
    "Android Developer",
    "Adaptive Learning",
    "AI Education",
    "Next.js",
    "React",
    "Kotlin",
    "Portfolio",
  ],
  authors: [{ name: "Mark Benison Mendevil" }],
  openGraph: {
    title: "Mark Benison Mendevil — Full-Stack Developer & Researcher",
    description:
      "Building scalable applications, adaptive learning systems, and AI-assisted educational platforms.",
    type: "website",
  },
};

import { ThemeProvider } from "@/components/theme-provider";
import { SmoothScroll } from "@/components/smooth-scroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased selection:bg-violet-500/30">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}

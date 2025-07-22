import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PageTransition from "./components/PageTransition";
import { ReactNode } from "react";
import { ThemeProvider } from "@/app/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: "Manjeet Mishra | Portfolio",
  description: "The personal portfolio of Manjeet Mishra, a full-stack developer.",
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'Manjeet Mishra | Portfolio',
    description: 'The personal portfolio of Manjeet Mishra, a full-stack developer.',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Manjeet Mishra Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manjeet Mishra | Portfolio',
    description: 'The personal portfolio of Manjeet Mishra, a full-stack developer.',
    images: ['/og-image.svg'],
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

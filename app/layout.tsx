import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.quickprep.tech"),
  title: {
    default: "QuickPrep – Last Minute Tech Interview Preparation & Practice",
    template: "%s | QuickPrep",
  },
  description:
    "QuickPrep is your ultimate last-minute tech interview preparation platform. Practice 500+ MCQ questions, download instant PDF revision notes, and access expert guidelines for React, JavaScript, Node.js, Python, SQL, MongoDB, DevOps, AI/ML, and 25+ technologies. Get instant feedback and ace your IT job interview.",
  keywords: [
    "QuickPrep",
    "interview preparation",
    "tech interview",
    "MCQ practice",
    "IT interview questions",
    "last minute revision",
    "programming interview",
    "developer interview prep",
    "coding interview practice",
    "React interview questions",
    "JavaScript interview",
    "Node.js interview",
    "TypeScript interview",
    "SQL interview questions",
    "MongoDB interview",
    "Python interview prep",
    "Next.js interview",
    "DevOps interview",
    "AI ML interview",
    "technical assessment",
    "software engineer interview",
    "full stack interview",
    "backend interview",
    "frontend interview",
    "interview notes PDF",
  ],
  authors: [{ name: "QuickPrep Team" }],
  creator: "QuickPrep",
  publisher: "QuickPrep",
  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "QuickPrep – Last Minute Tech Interview Preparation & Practice",
    description:
      "Practice 500+ MCQ questions, download instant PDF notes, and access expert guidelines for technical interviews. Covering React, Node.js, Python, SQL, MongoDB, DevOps, AI/ML and 25+ technologies.",
    type: "website",
    url: "https://www.quickprep.tech",
    locale: "en_US",
    siteName: "QuickPrep",
    images: [
      {
        url: "/ogImage.jpg",
        width: 1200,
        height: 630,
        alt: "QuickPrep – Tech Interview Preparation Platform with MCQ Quizzes and PDF Notes",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "QuickPrep – Last Minute Tech Interview Preparation",
    description:
      "Practice 500+ MCQ questions and download instant PDF revision notes for technical interviews. Expert guidelines for React, Node.js, Python, SQL, and more.",
    images: ["/ogImage.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
    google: "SlM603sd7YH0-F4ZDP2E5GVu3BaCoEieb7kCO92P6qI",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <TooltipProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
          <Sonner />
        </TooltipProvider>
      </body>
    </html>
  );
}

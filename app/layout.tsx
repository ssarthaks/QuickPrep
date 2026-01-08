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
  title: {
    default: "Exam Prep – Last Minute Interview Preparation",
    template: "%s | Exam Prep",
  },
  description:
    "Exam Prep helps you prepare for tech interviews at the last minute with MCQ quizzes, instant results, and downloadable PDF revision notes for IT roles.",
  keywords: [
    "exam prep",
    "interview preparation",
    "tech interview",
    "MCQ practice",
    "IT interview questions",
    "last minute revision",
    "programming interview",
    "developer interview prep",
  ],
  authors: [{ name: "Exam Prep Team" }],
  creator: "Exam Prep",
  publisher: "Exam Prep",

  openGraph: {
    title: "Exam Prep – Last Minute Interview Preparation",
    description:
      "Practice MCQs, view instant results, and download PDFs for quick IT interview revision.",
    type: "website",
    locale: "en_US",
    siteName: "Exam Prep",
    images: [
      {
        url: "/ogImage.jpg",
        width: 1200,
        height: 630,
        alt: "Exam Prep – Tech Interview Preparation",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Exam Prep – Last Minute Interview Preparation",
    description:
      "Last-minute tech interview prep with MCQs, results, and downloadable PDFs.",
    images: ["/ogImage.jpg"],
  },

  metadataBase: new URL("https://quickieee.vercel.app"),
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

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free JavaScript Books – Download PDFs for Interview Prep",
  description:
    "Access a curated collection of high-quality JavaScript books for free. Download or preview PDFs covering JavaScript basics, advanced concepts, data structures, algorithms, functional programming, and full-stack development. Perfect for interview preparation and skill enhancement.",
  keywords: [
    "JavaScript books",
    "free JavaScript PDFs",
    "JavaScript interview books",
    "programming books",
    "data structures JavaScript",
    "algorithms JavaScript",
    "functional programming",
    "full stack JavaScript",
    "Node.js books",
    "React books",
    "JavaScript learning resources",
    "developer books",
    "coding books free",
    "technical books download",
  ],
  openGraph: {
    title:
      "Free JavaScript Books – Download PDFs for Interview Prep | QuickPrep",
    description:
      "Curated collection of high-quality JavaScript books. Download or preview any book for free. Master JavaScript fundamentals, data structures, algorithms, and more.",
    type: "website",
    url: "https://www.quickprep.tech/books",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free JavaScript Books – Download PDFs for Interview Prep",
    description:
      "Curated collection of high-quality JavaScript books. Download or preview any book for free.",
  },
};

export default function BooksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PDF Notes Generator",
  description:
    "Generate comprehensive interview preparation PDFs instantly. Download beautifully formatted revision notes covering React, Node.js, TypeScript, SQL, MongoDB, Python, DevOps, AI/ML, and more with code examples and key concepts.",
  keywords: [
    "PDF notes",
    "interview notes download",
    "revision guide",
    "technical cheat sheet",
    "programming notes PDF",
    "interview preparation PDF",
    "coding concepts",
    "developer study guide",
  ],
  openGraph: {
    title: "PDF Notes Generator | Quickie",
    description:
      "Download comprehensive technical interview notes as PDF. Instant access to formatted guides with code examples.",
    type: "website",
  },
};

export default function PDFGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interview Guidelines & Tips",
  description:
    "Expert interview guidelines and tips for technical interviews. Learn best practices for day-before preparation, do's and don'ts, behavioral questions, coding rounds, and post-interview follow-up strategies.",
  keywords: [
    "interview tips",
    "technical interview guide",
    "interview preparation",
    "coding interview tips",
    "behavioral questions",
    "STAR method",
    "interview best practices",
    "developer interview guide",
  ],
  openGraph: {
    title: "Interview Guidelines & Tips | QuickPrep",
    description:
      "Professional interview guidelines to ace your technical interviews. Expert tips from successful candidates.",
    type: "website",
  },
};

export default function GuidelinesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

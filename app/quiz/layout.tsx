import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MCQ Quiz Practice",
  description:
    "Practice technical interview questions with interactive MCQ quizzes. Cover React, JavaScript, TypeScript, Node.js, Next.js, Python, SQL, MongoDB, DevOps, AI/ML and more. Get instant feedback and explanations for each question.",
  keywords: [
    "MCQ quiz",
    "technical interview questions",
    "coding quiz",
    "programming practice",
    "React quiz",
    "JavaScript quiz",
    "Node.js questions",
    "interview preparation",
    "developer assessment",
  ],
  openGraph: {
    title: "MCQ Quiz Practice | Quickie",
    description:
      "Interactive MCQ quizzes for technical interview preparation. Test your knowledge across 25+ technologies.",
    type: "website",
  },
};

export default function QuizLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

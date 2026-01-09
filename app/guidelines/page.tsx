"use client";

import { motion } from "framer-motion";
import {
  Clock,
  CheckCircle,
  XCircle,
  MessageSquare,
  Laptop,
  AlertTriangle,
  BookOpen,
  Target,
  Lightbulb,
  TrendingUp,
  Award,
} from "lucide-react";

const sections = [
  {
    icon: Clock,
    title: "Day Before Interview",
    color: "bg-blue-500/10 text-blue-500",
    items: [
      "Review core concepts of the technologies mentioned in the job description",
      "Prepare 2-3 stories about your past projects using the STAR method",
      "Test your computer setup, camera, and microphone for online interviews",
      "Get adequate sleep - 7-8 hours minimum",
      "Prepare your outfit and documents the night before",
    ],
  },
  {
    icon: CheckCircle,
    title: "Do's in Technical Interviews",
    color: "bg-green-500/10 text-green-500",
    items: [
      "Think out loud - explain your thought process while solving problems",
      "Ask clarifying questions before jumping into solutions",
      "Acknowledge when you don't know something, then try to reason through it",
      "Write clean, readable code with meaningful variable names",
      "Test your solution with edge cases",
      "Show enthusiasm and genuine interest in the role",
    ],
  },
  {
    icon: XCircle,
    title: "Don'ts in Technical Interviews",
    color: "bg-red-500/10 text-red-500",
    items: [
      "Don't memorize solutions - understand the concepts",
      "Don't stay silent when stuck - communicate your thinking",
      "Don't criticize previous employers or colleagues",
      "Don't lie about your experience or skills",
      "Don't interrupt the interviewer",
      "Don't give up too quickly on challenging problems",
    ],
  },
  {
    icon: MessageSquare,
    title: "Answering Technical Questions",
    color: "bg-purple-500/10 text-purple-500",
    items: [
      "Structure your answer: What, Why, How, Example",
      "Use concrete examples from your experience",
      "Keep answers focused - 1-2 minutes for most questions",
      "Relate concepts to real-world applications",
      "If unsure, state your assumptions clearly",
    ],
  },
  {
    icon: Laptop,
    title: "Explaining Projects",
    color: "bg-orange-500/10 text-orange-500",
    items: [
      "Start with the problem your project solved",
      "Explain your specific role and contributions",
      "Highlight technical challenges and how you overcame them",
      "Mention technologies used and why you chose them",
      "Share measurable outcomes if available",
    ],
  },
  {
    icon: AlertTriangle,
    title: "Online Interview Tips",
    color: "bg-yellow-500/10 text-yellow-500",
    items: [
      "Test your internet connection beforehand",
      "Use a clean, professional background",
      "Ensure good lighting on your face",
      "Look at the camera, not the screen",
      "Keep water nearby and take sips when needed",
      "Have backup plan (phone number) in case of technical issues",
    ],
  },
];

const quickTips = [
  {
    icon: Target,
    title: "First Impressions",
    tip: "Join 5 minutes early, greet with confidence, and smile naturally.",
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    tip: "Start with a brute force approach, then optimize. Show your thinking process.",
    color: "bg-green-500/10 text-green-500",
  },
  {
    icon: TrendingUp,
    title: "Growth Mindset",
    tip: "Discuss challenges as learning opportunities, not failures.",
    color: "bg-purple-500/10 text-purple-500",
  },
  {
    icon: BookOpen,
    title: "Questions to Ask",
    tip: "Ask about team structure, tech stack, development practices, and growth opportunities.",
    color: "bg-orange-500/10 text-orange-500",
  },
];

const Guidelines = () => {
  return (
    <div className="min-h-screen py-4 sm:py-8 lg:py-12">
      <div className="section-container max-w-6xl px-4">
        {/* Header */}
        <motion.div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600 text-white text-sm font-semibold mb-4 shadow-lg">
            <Award className="h-4 w-4" />
            Unlock Your Potential
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
            Interview Guidelines
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground">
            Expert tips and best practices to ace your technical interviews
          </p>
        </motion.div>

        {/* Quick Tips Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8 sm:mb-12"
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-2">
            <Lightbulb className="h-5 w-5 sm:h-6 sm:w-6 text-orange-500" />
            Quick Tips
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {quickTips.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 + i * 0.05 }}
                className="card-elevated p-4 hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div
                    className={`h-8 w-8 rounded-lg ${item.color} flex items-center justify-center`}
                  >
                    <item.icon className="h-4 w-4" />
                  </div>
                  <h3 className="font-semibold text-sm">{item.title}</h3>
                </div>

                <div className={`rounded-md p-3`}>
                  <p className="text-xs leading-relaxed">{item.tip}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Detailed Guidelines */}
        <div>
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
            Detailed Guidelines
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {sections.map((section, i) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="card-elevated-hover p-4 sm:p-6 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`h-10 w-10 sm:h-12 sm:w-12 rounded-lg ${section.color} flex items-center justify-center flex-shrink-0`}
                  >
                    <section.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <h2 className="text-base sm:text-lg font-semibold leading-tight">
                    {section.title}
                  </h2>
                </div>
                <ul className="space-y-2.5 sm:space-y-3 flex-1">
                  {section.items.map((item, j) => (
                    <motion.li
                      key={j}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.1 + j * 0.05 }}
                      className="text-xs sm:text-sm text-muted-foreground flex gap-2 sm:gap-3 leading-relaxed"
                    >
                      <span className="text-primary mt-1 font-bold flex-shrink-0">
                        •
                      </span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guidelines;

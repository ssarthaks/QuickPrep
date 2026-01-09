"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Brain,
  FileText,
  Lightbulb,
  Zap,
  Target,
  Award,
  TrendingUp,
  Users,
  BookOpen,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Brain,
    title: "Smart MCQ Quizzes",
    description:
      "Adaptive questions tailored to your skill level with instant feedback",
    color: "bg-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: FileText,
    title: "Instant PDF Notes",
    description:
      "Download beautifully formatted revision guides with code samples",
    color: "bg-cyan-600",
    bgColor: "bg-cyan-50",
  },
  {
    icon: Lightbulb,
    title: "Pro Guidelines",
    description: "Battle-tested strategies from successful candidates",
    color: "bg-orange-500",
    bgColor: "bg-orange-50",
  },
];

const stats = [
  { value: "500+", label: "Practice Questions", icon: BookOpen },
  { value: "85%", label: "Success Rate", icon: TrendingUp },
  { value: "25+", label: "Technologies", icon: Zap },
  { value: "100+", label: "Early Users", icon: Users },
];

const benefits = [
  "No signup required - start practicing immediately",
  "Curated questions from real tech interviews",
  "Detailed explanations for every answer",
  "Track your progress with live scoring",
  "Mobile-friendly, study anywhere",
  "Regular content updates",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-blue-50">
        {/* Decorative circles */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-200 rounded-full blur-3xl opacity-40" />

        <div className="section-container relative py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto text-center"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600 text-white text-sm font-semibold mb-8 shadow-lg"
            >
              <Award className="h-4 w-4" />
              Learn, Practice, and Revise
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight text-slate-900">
              Master Your <span className="text-blue-600">Tech Interview</span>
              <br />
              in Record Time
            </h1>

            <p className="text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              The complete platform for interview success. Practice with real
              MCQs, access instant PDF guides, and learn proven strategies—all
              designed for busy professionals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/quiz">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg w-full sm:w-auto gap-2 px-8 py-6 text-lg"
                  >
                    <Target className="h-5 w-5" />
                    Start Quiz Now
                  </Button>
                </motion.div>
              </Link>
              <Link href="/pdf-generator">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-slate-300 hover:bg-slate-100 bg-white w-full sm:w-auto gap-2 px-8 py-6 text-lg text-slate-900 hover:text-blue-700"
                  >
                    <FileText className="h-5 w-5" />
                    Download PDF
                  </Button>
                </motion.div>
              </Link>
            </div>

            {/* Stats Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="bg-white rounded-2xl p-4 shadow-lg border border-slate-200"
                >
                  <stat.icon className="h-6 w-6 mx-auto mb-2 text-blue-600" />
                  <div className="text-2xl font-bold text-slate-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Comprehensive tools designed for efficient, effective interview
              preparation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative"
              >
                <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-slate-200 hover:border-blue-300 transition-all h-full">
                  <div
                    className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-slate-900">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-slate-50">
        <div className="section-container">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-4 text-slate-900">
                Why Choose Our Platform?
              </h2>
              <p className="text-xl text-slate-600">
                Built for efficiency, designed for results
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4 bg-white rounded-2xl p-6 shadow-lg border border-slate-200 hover:border-blue-300 transition-all"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                    <CheckCircle2 className="h-5 w-5 text-white" />
                  </div>
                  <p className="text-slate-700 font-medium">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className=" bg-white">
        <div className="section">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full mx-auto text-center py-24 relative overflow-hidden bg-blue-600"
          >
            <div className="relative p-12 md:p-16">
              {/* <Award className="h-16 w-16 mx-auto mb-6 text-white" /> */}
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Ready to Ace Your Interview?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Join thousands of successful candidates. Start practicing now
                and land your dream tech job with confidence.
              </p>
              <Link href="/quiz">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    className="bg-white text-blue-600 hover:bg-slate-100 shadow-xl px-8 py-6 text-lg font-semibold"
                  >
                    <Target className="h-5 w-5 mr-2" />
                    Begin Your Journey
                  </Button>
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

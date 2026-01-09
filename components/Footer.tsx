import { BookOpen, Heart, Zap, Github, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 py-12">
      <div className="section-container">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 shadow-lg shadow-blue-500/30">
                <BookOpen className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-blue-600">QuickPrep</span>
            </div>
            <p className="text-sm text-slate-600">
              Your ultimate companion for last-minute tech interview
              preparation. Practice, learn, succeed.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/quiz"
                  className="text-sm text-slate-600 hover:text-blue-600 transition-colors"
                >
                  MCQ Quiz
                </a>
              </li>
              <li>
                <a
                  href="/pdf-generator"
                  className="text-sm text-slate-600 hover:text-blue-600 transition-colors"
                >
                  PDF Generator
                </a>
              </li>
              <li>
                <a
                  href="/guidelines"
                  className="text-sm text-slate-600 hover:text-blue-600 transition-colors"
                >
                  Guidelines
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 mb-4">Features</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Zap className="h-4 w-4 text-amber-500" />
                <span>Instant feedback</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Zap className="h-4 w-4 text-green-500" />
                <span>Real interview questions</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Zap className="h-4 w-4 text-blue-500" />
                <span>PDF downloads</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">
            © 2026 QuickPrep | Developed by Sarthak
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/ssarthaks"
              target="_blank"
              className="text-slate-600 hover:text-blue-600 transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/ssarthaks/"
              target="_blank"
              className="text-slate-600 hover:text-blue-600 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

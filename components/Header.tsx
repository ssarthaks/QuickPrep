"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/quiz", label: "MCQ Quiz" },
  { path: "/pdf-generator", label: "PDF Generator" },
  { path: "/books", label: "Books" },
  { path: "/guidelines", label: "Guidelines" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 bg-white backdrop-blur-xl border-b border-slate-200 shadow-sm">
      <div className="section-container">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 shadow-lg"
            >
              <BookOpen className="h-6 w-6 text-white" />
            </motion.div>
            <span className="text-2xl font-bold text-blue-600">QuickPrep</span>
          </Link>

          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path} className="relative">
                <span
                  className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all block ${
                    pathname === link.path
                      ? "bg-blue-600 text-white shadow-lg"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden hover:bg-blue-700 rounded-xl w-16 h-16"
            onClick={() => setIsOpen(!isOpen)}
          >
            <motion.div
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? (
                <X className="h-8 w-8" />
              ) : (
                <Menu className="h-8 w-8" />
              )}
            </motion.div>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation - Full Screen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Slide-in Menu */}
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-0 w-screen h-screen bg-white z-50 md:hidden shadow-2xl"
            >
              <div className="flex flex-col h-full w-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-slate-200">
                  <Link
                    href="/"
                    className="flex items-center gap-3"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 shadow-lg">
                      <BookOpen className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-2xl font-bold text-blue-600">
                      QuickPrep
                    </span>
                  </Link>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    className="hover:bg-slate-100 rounded-xl"
                  >
                    <X className="h-6 w-6" />
                  </Button>
                </div>

                {/* Navigation Links */}
                <div className="flex-1 flex items-center justify-center overflow-y-auto p-6">
                  <div className="space-y-3 w-full max-w-md">
                    {navLinks.map((link, i) => (
                      <motion.div
                        key={link.path}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <Link
                          href={link.path}
                          onClick={() => setIsOpen(false)}
                          className={`block px-6 py-4 rounded-xl text-center text-lg font-semibold transition-all ${
                            pathname === link.path
                              ? "bg-blue-600 text-white shadow-lg"
                              : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                          }`}
                        >
                          {link.label}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

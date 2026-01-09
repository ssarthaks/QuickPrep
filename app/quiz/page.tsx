"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Trophy,
  Clock,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Award,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  fields,
  technologies,
  difficulties,
  getQuestions,
  Question,
} from "@/data/quizQuestions";
import Cookies from "js-cookie";

interface QuizProgress {
  field: string;
  tech: string;
  difficulty: string;
  questions: Question[];
  currentQ: number;
  answers: { q: number; answer: number; correct: boolean }[];
  timeElapsed: number;
  timestamp: number;
}

const COOKIE_NAME = "quiz_progress";
const COOKIE_EXPIRY_DAYS = 7;

const Quiz = () => {
  const [field, setField] = useState("");
  const [tech, setTech] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<
    { q: number; answer: number; correct: boolean }[]
  >([]);
  const [showResult, setShowResult] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [reviewMode, setReviewMode] = useState(false);
  const [showContinueDialog, setShowContinueDialog] = useState(false);
  const [savedProgress, setSavedProgress] = useState<QuizProgress | null>(null);

  // Check for saved progress on mount
  useEffect(() => {
    const savedData = Cookies.get(COOKIE_NAME);
    if (savedData) {
      try {
        const progress: QuizProgress = JSON.parse(savedData);
        // Check if progress is recent (within last 7 days)
        const daysSince =
          (Date.now() - progress.timestamp) / (1000 * 60 * 60 * 24);
        if (daysSince < COOKIE_EXPIRY_DAYS && progress.questions.length > 0) {
          setSavedProgress(progress);
          setShowContinueDialog(true);
        } else {
          // Clear old progress
          Cookies.remove(COOKIE_NAME);
        }
      } catch (e) {
        // Invalid cookie data, remove it
        Cookies.remove(COOKIE_NAME);
      }
    }
  }, []);

  // Save progress to cookie whenever quiz state changes
  useEffect(() => {
    if (quizStarted && !showResult && questions.length > 0) {
      const progress: QuizProgress = {
        field,
        tech,
        difficulty,
        questions,
        currentQ,
        answers,
        timeElapsed,
        timestamp: Date.now(),
      };
      Cookies.set(COOKIE_NAME, JSON.stringify(progress), {
        expires: COOKIE_EXPIRY_DAYS,
      });
    }
  }, [
    quizStarted,
    showResult,
    field,
    tech,
    difficulty,
    questions,
    currentQ,
    answers,
    timeElapsed,
  ]);

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (quizStarted && !showResult) {
      interval = setInterval(() => {
        setTimeElapsed((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [quizStarted, showResult]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const startQuiz = () => {
    const qs = getQuestions(field, tech, difficulty, 10);
    if (qs.length > 0) {
      setQuestions(qs);
      setQuizStarted(true);
      setCurrentQ(0);
      setAnswers([]);
      setShowResult(false);
      setTimeElapsed(0);
      setReviewMode(false);
      setSelected(null);
    }
  };

  const continueQuiz = () => {
    if (savedProgress) {
      setField(savedProgress.field);
      setTech(savedProgress.tech);
      setDifficulty(savedProgress.difficulty);
      setQuestions(savedProgress.questions);
      setCurrentQ(savedProgress.currentQ);
      setAnswers(savedProgress.answers);
      setTimeElapsed(savedProgress.timeElapsed);
      setQuizStarted(true);
      setShowResult(false);
      setReviewMode(false);
      setSelected(
        savedProgress.answers[savedProgress.currentQ]?.answer ?? null
      );
      setShowContinueDialog(false);
    }
  };

  const startFreshQuiz = () => {
    Cookies.remove(COOKIE_NAME);
    setSavedProgress(null);
    setShowContinueDialog(false);
  };

  const handleAnswer = (idx: number) => {
    if (selected !== null) return;
    setSelected(idx);
    const isCorrect = idx === questions[currentQ].correctAnswer;
    setAnswers([...answers, { q: currentQ, answer: idx, correct: isCorrect }]);
  };

  const nextQuestion = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
      setSelected(null);
    } else {
      setShowResult(true);
      // Clear saved progress when quiz is completed
      Cookies.remove(COOKIE_NAME);
    }
  };

  const reset = () => {
    setQuizStarted(false);
    setField("");
    setTech("");
    setDifficulty("");
    setQuestions([]);
    setAnswers([]);
    setShowResult(false);
    setSelected(null);
    setCurrentQ(0);
    setTimeElapsed(0);
    setReviewMode(false);
    // Clear saved progress when user explicitly resets
    Cookies.remove(COOKIE_NAME);
  };

  const goToQuestion = (index: number) => {
    setCurrentQ(index);
    setSelected(answers[index]?.answer ?? null);
  };

  const score = answers.filter((a) => a.correct).length;
  const percentage =
    questions.length > 0 ? Math.round((score / questions.length) * 100) : 0;

  if (showResult) {
    return (
      <div className="min-h-screen py-4 sm:py-8 lg:py-12">
        <div className="section-container max-w-4xl px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="card-elevated p-4 sm:p-6 lg:p-8"
          >
            {/* Score Header */}
            <div className="text-center mb-6 sm:mb-8">
              <Trophy
                className={`h-12 w-12 sm:h-16 sm:w-16 mx-auto mb-4 ${
                  percentage >= 70
                    ? "text-accent"
                    : percentage >= 50
                    ? "text-yellow-500"
                    : "text-destructive"
                }`}
              />
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">
                Quiz Complete!
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground">
                {fields.find((f) => f.value === field)?.label} •{" "}
                {technologies[field]?.find((t) => t.value === tech)?.label} •{" "}
                {difficulties.find((d) => d.value === difficulty)?.label}
              </p>

              {/* Score Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-6 max-w-2xl mx-auto">
                <div className="bg-muted p-3 sm:p-4 rounded-lg">
                  <Award className="h-5 w-5 mx-auto mb-1 text-primary" />
                  <p className="text-xs text-muted-foreground">Score</p>
                  <p className="text-lg sm:text-2xl font-bold">{percentage}%</p>
                </div>
                <div className="bg-muted p-3 sm:p-4 rounded-lg">
                  <CheckCircle2 className="h-5 w-5 mx-auto mb-1 text-accent" />
                  <p className="text-xs text-muted-foreground">Correct</p>
                  <p className="text-lg sm:text-2xl font-bold">
                    {score}/{questions.length}
                  </p>
                </div>
                <div className="bg-muted p-3 sm:p-4 rounded-lg">
                  <XCircle className="h-5 w-5 mx-auto mb-1 text-destructive" />
                  <p className="text-xs text-muted-foreground">Wrong</p>
                  <p className="text-lg sm:text-2xl font-bold">
                    {questions.length - score}
                  </p>
                </div>
                <div className="bg-muted p-3 sm:p-4 rounded-lg">
                  <Clock className="h-5 w-5 mx-auto mb-1 text-blue-500" />
                  <p className="text-xs text-muted-foreground">Time</p>
                  <p className="text-lg sm:text-2xl font-bold">
                    {formatTime(timeElapsed)}
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-muted-foreground mt-4 sm:mt-6 px-2">
                {percentage >= 70
                  ? "🎉 Excellent! You're well prepared."
                  : percentage >= 50
                  ? "👍 Good effort! Keep practicing."
                  : "📚 Keep learning! Review the material."}
              </p>
            </div>

            {/* Review Section */}
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 max-h-[50vh] overflow-y-auto px-2">
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 flex items-center gap-2 sticky top-0 bg-background py-2">
                <BookOpen className="h-5 w-5" />
                Answer Review
              </h3>
              {questions.map((q, i) => {
                const userAnswer = answers[i];
                const isCorrect = userAnswer?.correct;

                return (
                  <div
                    key={q.id}
                    className={`p-3 sm:p-4 rounded-lg border-2 transition-all ${
                      isCorrect
                        ? "bg-accent/5 border-accent/20"
                        : "bg-destructive/5 border-destructive/20"
                    }`}
                  >
                    <div className="flex items-start gap-2 sm:gap-3 mb-2">
                      {isCorrect ? (
                        <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      ) : (
                        <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                      )}
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm sm:text-base mb-2">
                          <span className="text-muted-foreground">
                            Q{i + 1}.
                          </span>{" "}
                          {q.question}
                        </p>
                        <div className="space-y-1 text-xs sm:text-sm">
                          <p
                            className={`${
                              isCorrect
                                ? "text-accent"
                                : "text-muted-foreground"
                            }`}
                          >
                            <span className="font-medium">Your answer:</span>{" "}
                            {q.options[userAnswer?.answer]}
                          </p>
                          {!isCorrect && (
                            <p className="text-accent">
                              <span className="font-medium">
                                Correct answer:
                              </span>{" "}
                              {q.options[q.correctAnswer]}
                            </p>
                          )}
                        </div>
                        <p className="text-xs sm:text-sm text-muted-foreground mt-2 p-2 bg-muted rounded">
                          💡 {q.explanation}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button onClick={reset} className="flex-1 gap-2" size="lg">
                <RotateCcw className="h-4 w-4" />
                Try Again
              </Button>
              <Button
                onClick={reset}
                variant="outline"
                className="flex-1 gap-2"
                size="lg"
              >
                <Play className="h-4 w-4" />
                New Quiz
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  if (quizStarted && questions.length > 0) {
    const q = questions[currentQ];
    const isAnswered = selected !== null;

    return (
      <div className="min-h-screen py-4 sm:py-8 lg:py-12">
        <div className="section-container max-w-4xl px-4">
          {/* Quiz Header */}
          <div className="card-elevated p-3 sm:p-4 mb-4 sm:mb-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-3 sm:mb-4">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="flex items-center gap-2 text-sm sm:text-base">
                  <BookOpen className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  <span className="font-semibold">
                    Question {currentQ + 1}/{questions.length}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm sm:text-base">
                  <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500" />
                  <span className="font-mono">{formatTime(timeElapsed)}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm sm:text-base">
                <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
                <span className="font-medium">{score} correct</span>
              </div>
            </div>
            <Progress
              value={((currentQ + 1) / questions.length) * 100}
              className="h-2"
            />

            {/* Question Navigation Dots */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-3 sm:mt-4 justify-center">
              {questions.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToQuestion(i)}
                  disabled={i > answers.length}
                  className={`h-6 w-6 sm:h-8 sm:w-8 rounded-full text-xs sm:text-sm font-medium transition-all ${
                    i === currentQ
                      ? "bg-primary text-primary-foreground scale-110 ring-2 ring-primary ring-offset-2"
                      : answers[i]
                      ? answers[i].correct
                        ? "bg-accent/20 text-accent border-2 border-accent"
                        : "bg-destructive/20 text-destructive border-2 border-destructive"
                      : i < answers.length
                      ? "bg-muted text-muted-foreground"
                      : "bg-muted/50 text-muted-foreground/50 cursor-not-allowed"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>

          {/* Question Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={q.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="card-elevated p-4 sm:p-6 lg:p-8"
            >
              <div className="mb-6 sm:mb-8">
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                  {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)} •{" "}
                  {tech}
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold leading-relaxed">
                  {q.question}
                </h3>
              </div>

              {/* Options */}
              <div className="space-y-2 sm:space-y-3 mb-6">
                {q.options.map((opt, i) => {
                  const isSelected = selected === i;
                  const isCorrect = i === q.correctAnswer;
                  const showFeedback = selected !== null;
                  const optionLabel = String.fromCharCode(65 + i);

                  return (
                    <motion.button
                      key={i}
                      onClick={() => handleAnswer(i)}
                      disabled={selected !== null}
                      whileHover={selected === null ? { scale: 1.01 } : {}}
                      whileTap={selected === null ? { scale: 0.99 } : {}}
                      className={`w-full p-3 sm:p-4 lg:p-5 rounded-lg sm:rounded-xl text-left transition-all border-2 ${
                        showFeedback
                          ? isCorrect
                            ? "border-accent bg-accent/10 shadow-lg"
                            : isSelected
                            ? "border-destructive bg-destructive/10"
                            : "border-border bg-background"
                          : "border-border bg-background hover:border-primary hover:bg-muted hover:shadow-md"
                      } ${
                        selected === null ? "cursor-pointer" : "cursor-default"
                      }`}
                    >
                      <div className="flex items-start gap-3 sm:gap-4">
                        <span
                          className={`flex-shrink-0 h-7 w-7 sm:h-8 sm:w-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-semibold border-2 ${
                            showFeedback
                              ? isCorrect
                                ? "bg-accent text-white border-accent"
                                : isSelected
                                ? "bg-destructive text-white border-destructive"
                                : "bg-muted text-muted-foreground border-border"
                              : "bg-muted text-foreground border-border"
                          }`}
                        >
                          {optionLabel}
                        </span>
                        <span className="flex-1 text-sm sm:text-base pt-0.5">
                          {opt}
                        </span>
                        {showFeedback && isCorrect && (
                          <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-accent flex-shrink-0" />
                        )}
                        {showFeedback && isSelected && !isCorrect && (
                          <XCircle className="h-5 w-5 sm:h-6 sm:w-6 text-destructive flex-shrink-0" />
                        )}
                      </div>
                    </motion.button>
                  );
                })}
              </div>

              {/* Explanation & Navigation */}
              <AnimatePresence>
                {isAnswered && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <div
                      className={`p-3 sm:p-4 rounded-lg mb-4 sm:mb-6 ${
                        answers[currentQ]?.correct
                          ? "bg-accent/10 border border-accent/20"
                          : "bg-muted border border-border"
                      }`}
                    >
                      <p className="text-xs sm:text-sm font-medium mb-1 flex items-center gap-2">
                        💡 Explanation
                      </p>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {q.explanation}
                      </p>
                    </div>

                    <div className="flex gap-2 sm:gap-3">
                      {currentQ > 0 && (
                        <Button
                          onClick={() => {
                            setCurrentQ(currentQ - 1);
                            setSelected(answers[currentQ - 1]?.answer ?? null);
                          }}
                          variant="outline"
                          className="gap-2"
                          size="lg"
                        >
                          <ChevronLeft className="h-4 w-4" />
                          <span className="hidden sm:inline">Previous</span>
                        </Button>
                      )}
                      <Button
                        onClick={nextQuestion}
                        className="flex-1 gap-2"
                        size="lg"
                      >
                        {currentQ < questions.length - 1 ? (
                          <>
                            <span>Next Question</span>
                            <ChevronRight className="h-4 w-4" />
                          </>
                        ) : (
                          <>
                            <Trophy className="h-4 w-4" />
                            <span>See Results</span>
                          </>
                        )}
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-4 sm:py-8 lg:py-12">
      <AlertDialog
        open={showContinueDialog}
        onOpenChange={setShowContinueDialog}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-primary" />
              Continue Your Quiz?
            </AlertDialogTitle>
            <AlertDialogDescription className="text-left space-y-2">
              <p>We found an incomplete quiz from your previous session!</p>
              <div className="bg-muted p-3 rounded-lg space-y-1 text-sm">
                <p>
                  <span className="font-medium">Topic:</span>{" "}
                  {savedProgress?.tech} ({savedProgress?.difficulty})
                </p>
                <p>
                  <span className="font-medium">Progress:</span>{" "}
                  {savedProgress?.currentQ !== undefined
                    ? savedProgress.currentQ + 1
                    : 0}
                  /{savedProgress?.questions.length || 0} questions answered
                </p>
                <p>
                  <span className="font-medium">Time spent:</span>{" "}
                  {formatTime(savedProgress?.timeElapsed || 0)}
                </p>
              </div>
              <p className="text-muted-foreground">
                Would you like to continue from where you left off, or start a
                fresh quiz?
              </p>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={startFreshQuiz}>
              Start Fresh
            </AlertDialogCancel>
            <AlertDialogAction onClick={continueQuiz}>
              Continue Quiz
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <div className="section-container max-w-xl px-4">
        <motion.div className="text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600 text-white text-sm font-semibold mb-4 shadow-lg">
            <Award className="h-4 w-4" />
            Test Yourself
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
            MCQ Quiz
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground">
            Test your knowledge with interactive quizzes
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card-elevated p-4 sm:p-6 space-y-4 sm:space-y-5"
        >
          <div className="space-y-2">
            <label className="text-sm font-medium flex items-center gap-2">
              <span className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">
                1
              </span>
              Field
            </label>
            <Select
              value={field}
              onValueChange={(v) => {
                setField(v);
                setTech("");
              }}
            >
              <SelectTrigger className="h-11 sm:h-12">
                <SelectValue placeholder="Choose your field of study" />
              </SelectTrigger>
              <SelectContent>
                {fields.map((f) => (
                  <SelectItem key={f.value} value={f.value}>
                    {f.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium flex items-center gap-2">
              <span className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">
                2
              </span>
              Technology
            </label>
            <Select value={tech} onValueChange={setTech} disabled={!field}>
              <SelectTrigger className="h-11 sm:h-12">
                <SelectValue
                  placeholder={
                    field ? "Select a technology" : "Select field first"
                  }
                />
              </SelectTrigger>
              <SelectContent>
                {(technologies[field] || []).map((t) => (
                  <SelectItem key={t.value} value={t.value}>
                    {t.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium flex items-center gap-2">
              <span className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">
                3
              </span>
              Difficulty
            </label>
            <Select value={difficulty} onValueChange={setDifficulty}>
              <SelectTrigger className="h-11 sm:h-12">
                <SelectValue placeholder="Choose difficulty level" />
              </SelectTrigger>
              <SelectContent>
                {difficulties.map((d) => (
                  <SelectItem key={d.value} value={d.value}>
                    <div className="flex items-center gap-2">
                      <span>{d.label}</span>
                      <span className="text-xs text-muted-foreground">
                        {d.value === "easy" && "(Beginner)"}
                        {d.value === "medium" && "(Intermediate)"}
                        {d.value === "hard" && "(Advanced)"}
                      </span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {field && tech && difficulty && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="p-3 sm:p-4 bg-primary/5 border border-primary/20 rounded-lg text-sm"
            >
              <p className="font-medium mb-2 flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                Ready to start!
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground">
                You'll get 10 questions on {tech} ({difficulty} level). Good
                luck! 🚀
              </p>
            </motion.div>
          )}

          <Button
            onClick={startQuiz}
            disabled={!field || !tech || !difficulty}
            className="w-full gap-2 h-11 sm:h-12 text-base"
            size="lg"
          >
            <Play className="h-5 w-5" />
            Start Quiz
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Quiz;

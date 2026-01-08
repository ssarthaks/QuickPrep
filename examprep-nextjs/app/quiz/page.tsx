"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, CheckCircle2, XCircle, RotateCcw, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';
import { fields, technologies, difficulties, getQuestions, Question } from '@/data/quizQuestions';

const Quiz = () => {
  const [field, setField] = useState('');
  const [tech, setTech] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<{ q: number; answer: number; correct: boolean }[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);

  const startQuiz = () => {
    const qs = getQuestions(field, tech, difficulty, 10);
    if (qs.length > 0) {
      setQuestions(qs);
      setQuizStarted(true);
      setCurrentQ(0);
      setAnswers([]);
      setShowResult(false);
    }
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
    }
  };

  const reset = () => {
    setQuizStarted(false);
    setField('');
    setTech('');
    setDifficulty('');
    setQuestions([]);
    setAnswers([]);
    setShowResult(false);
    setSelected(null);
    setCurrentQ(0);
  };

  const score = answers.filter(a => a.correct).length;
  const percentage = questions.length > 0 ? Math.round((score / questions.length) * 100) : 0;

  if (showResult) {
    return (
      <div className="min-h-screen py-12">
        <div className="section-container max-w-2xl">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="card-elevated p-8 text-center">
            <Trophy className={`h-16 w-16 mx-auto mb-4 ${percentage >= 70 ? 'text-accent' : percentage >= 50 ? 'text-warning' : 'text-destructive'}`} />
            <h2 className="text-2xl font-bold mb-2">Quiz Complete!</h2>
            <p className="text-4xl font-bold mb-2">{score}/{questions.length}</p>
            <p className="text-muted-foreground mb-6">
              {percentage >= 70 ? 'Great job! You\'re well prepared.' : percentage >= 50 ? 'Good effort! Keep practicing.' : 'Needs more practice. Review the material.'}
            </p>
            
            <div className="space-y-4 text-left mb-6 max-h-64 overflow-y-auto">
              {questions.map((q, i) => (
                <div key={q.id} className={`p-4 rounded-lg ${answers[i]?.correct ? 'bg-accent/10' : 'bg-destructive/10'}`}>
                  <p className="font-medium text-sm mb-1">{q.question}</p>
                  <p className="text-xs text-muted-foreground">{q.explanation}</p>
                </div>
              ))}
            </div>
            
            <Button onClick={reset} className="gap-2"><RotateCcw className="h-4 w-4" />Try Again</Button>
          </motion.div>
        </div>
      </div>
    );
  }

  if (quizStarted && questions.length > 0) {
    const q = questions[currentQ];
    return (
      <div className="min-h-screen py-12">
        <div className="section-container max-w-2xl">
          <div className="mb-6">
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>Question {currentQ + 1} of {questions.length}</span>
              <span>{score} correct</span>
            </div>
            <Progress value={((currentQ + 1) / questions.length) * 100} />
          </div>
          
          <motion.div key={q.id} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="card-elevated p-6">
            <h3 className="text-lg font-semibold mb-6">{q.question}</h3>
            
            <div className="space-y-3 mb-6">
              {q.options.map((opt, i) => {
                const isSelected = selected === i;
                const isCorrect = i === q.correctAnswer;
                const showFeedback = selected !== null;
                
                return (
                  <button
                    key={i}
                    onClick={() => handleAnswer(i)}
                    disabled={selected !== null}
                    className={`w-full p-4 rounded-lg text-left transition-all border ${
                      showFeedback
                        ? isCorrect ? 'border-accent bg-accent/10' : isSelected ? 'border-destructive bg-destructive/10' : 'border-border'
                        : 'border-border hover:border-primary hover:bg-muted'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {showFeedback && isCorrect && <CheckCircle2 className="h-5 w-5 text-accent" />}
                      {showFeedback && isSelected && !isCorrect && <XCircle className="h-5 w-5 text-destructive" />}
                      <span>{opt}</span>
                    </div>
                  </button>
                );
              })}
            </div>
            
            {selected !== null && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <p className="text-sm text-muted-foreground mb-4 p-3 bg-muted rounded-lg">{q.explanation}</p>
                <Button onClick={nextQuestion} className="w-full">{currentQ < questions.length - 1 ? 'Next Question' : 'See Results'}</Button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="section-container max-w-xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">MCQ Quiz</h1>
          <p className="text-muted-foreground">Select your preferences to start</p>
        </motion.div>
        
        <div className="card-elevated p-6 space-y-4">
          <div>
            <label className="text-sm font-medium mb-2 block">Field</label>
            <Select value={field} onValueChange={(v) => { setField(v); setTech(''); }}>
              <SelectTrigger><SelectValue placeholder="Select field" /></SelectTrigger>
              <SelectContent>
                {fields.map(f => <SelectItem key={f.value} value={f.value}>{f.label}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <label className="text-sm font-medium mb-2 block">Technology</label>
            <Select value={tech} onValueChange={setTech} disabled={!field}>
              <SelectTrigger><SelectValue placeholder="Select technology" /></SelectTrigger>
              <SelectContent>
                {(technologies[field] || []).map(t => <SelectItem key={t.value} value={t.value}>{t.label}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <label className="text-sm font-medium mb-2 block">Difficulty</label>
            <Select value={difficulty} onValueChange={setDifficulty}>
              <SelectTrigger><SelectValue placeholder="Select difficulty" /></SelectTrigger>
              <SelectContent>
                {difficulties.map(d => <SelectItem key={d.value} value={d.value}>{d.label}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          
          <Button onClick={startQuiz} disabled={!field || !tech || !difficulty} className="w-full gap-2">
            <Play className="h-4 w-4" />Start Quiz
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;

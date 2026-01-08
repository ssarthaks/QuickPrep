import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Brain, FileText, Lightbulb, Clock, Target, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  { icon: Brain, title: 'MCQ Quizzes', description: 'Test your knowledge with focused quizzes', color: 'text-accent' },
  { icon: FileText, title: 'PDF Revision', description: 'Download concise revision notes', color: 'text-primary' },
  { icon: Lightbulb, title: 'Guidelines', description: 'Expert interview tips and tricks', color: 'text-warning' },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="section-container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
              <Clock className="h-4 w-4" />
              Last-Minute Interview Prep
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Ace Your <span className="text-gradient-accent">Tech Interview</span> with Confidence
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Stop panicking before interviews. Get focused MCQ practice, downloadable revision PDFs, and expert guidelines — all in one place.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/quiz">
                <Button size="lg" className="btn-gradient-accent w-full sm:w-auto gap-2">
                  <Target className="h-5 w-5" />
                  Start MCQ Quiz
                </Button>
              </Link>
              <Link to="/pdf-generator">
                <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2">
                  <FileText className="h-5 w-5" />
                  Generate PDF
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-muted/30">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Everything You Need</h2>
            <p className="text-muted-foreground">Quick, focused preparation tools for your success</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="card-elevated-hover p-6 text-center"
              >
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-muted mb-4 ${feature.color}`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="section-container">
          <div className="card-elevated p-8 md:p-12 text-center bg-gradient-to-br from-primary/5 to-accent/5">
            <Sparkles className="h-10 w-10 mx-auto mb-4 text-accent" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Prepare?</h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Choose your technology, difficulty level, and start practicing. No login required.
            </p>
            <Link to="/quiz">
              <Button size="lg" className="btn-gradient-primary">Get Started Now</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

import { motion } from 'framer-motion';
import { Clock, CheckCircle, XCircle, MessageSquare, Laptop, AlertTriangle } from 'lucide-react';

const sections = [
  {
    icon: Clock,
    title: 'Day Before Interview',
    items: [
      'Review core concepts of the technologies mentioned in the job description',
      'Prepare 2-3 stories about your past projects using the STAR method',
      'Test your computer setup, camera, and microphone for online interviews',
      'Get adequate sleep - 7-8 hours minimum',
      'Prepare your outfit and documents the night before',
    ],
  },
  {
    icon: CheckCircle,
    title: "Do's in Technical Interviews",
    items: [
      'Think out loud - explain your thought process while solving problems',
      'Ask clarifying questions before jumping into solutions',
      'Acknowledge when you don\'t know something, then try to reason through it',
      'Write clean, readable code with meaningful variable names',
      'Test your solution with edge cases',
      'Show enthusiasm and genuine interest in the role',
    ],
  },
  {
    icon: XCircle,
    title: "Don'ts in Technical Interviews",
    items: [
      'Don\'t memorize solutions - understand the concepts',
      'Don\'t stay silent when stuck - communicate your thinking',
      'Don\'t criticize previous employers or colleagues',
      'Don\'t lie about your experience or skills',
      'Don\'t interrupt the interviewer',
      'Don\'t give up too quickly on challenging problems',
    ],
  },
  {
    icon: MessageSquare,
    title: 'Answering Technical Questions',
    items: [
      'Structure your answer: What, Why, How, Example',
      'Use concrete examples from your experience',
      'Keep answers focused - 1-2 minutes for most questions',
      'Relate concepts to real-world applications',
      'If unsure, state your assumptions clearly',
    ],
  },
  {
    icon: Laptop,
    title: 'Explaining Projects',
    items: [
      'Start with the problem your project solved',
      'Explain your specific role and contributions',
      'Highlight technical challenges and how you overcame them',
      'Mention technologies used and why you chose them',
      'Share measurable outcomes if available',
    ],
  },
  {
    icon: AlertTriangle,
    title: 'Online Interview Tips',
    items: [
      'Test your internet connection beforehand',
      'Use a clean, professional background',
      'Ensure good lighting on your face',
      'Look at the camera, not the screen',
      'Keep water nearby and take sips when needed',
      'Have backup plan (phone number) in case of technical issues',
    ],
  },
];

const Guidelines = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="section-container max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-2">Interview Guidelines</h1>
          <p className="text-muted-foreground">Expert tips to help you succeed</p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {sections.map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="card-elevated-hover p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <section.icon className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-lg font-semibold">{section.title}</h2>
              </div>
              <ul className="space-y-2">
                {section.items.map((item, j) => (
                  <li key={j} className="text-sm text-muted-foreground flex gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Guidelines;

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FileDown, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { pdfContent, getTechnologies } from '@/data/pdfContent';
import jsPDF from 'jspdf';

const PDFGenerator = () => {
  const [tech, setTech] = useState('');
  const [loading, setLoading] = useState(false);

  const generatePDF = async () => {
    if (!tech) return;
    setLoading(true);
    
    const content = pdfContent[tech];
    const doc = new jsPDF();
    let y = 20;
    const margin = 20;
    const pageWidth = doc.internal.pageSize.getWidth();
    
    const addText = (text: string, size: number, bold = false, color = [0, 0, 0]) => {
      doc.setFontSize(size);
      doc.setFont('helvetica', bold ? 'bold' : 'normal');
      doc.setTextColor(color[0], color[1], color[2]);
      const lines = doc.splitTextToSize(text, pageWidth - margin * 2);
      lines.forEach((line: string) => {
        if (y > 270) { doc.addPage(); y = 20; }
        doc.text(line, margin, y);
        y += size * 0.5;
      });
      y += 4;
    };
    
    addText(content.title, 22, true, [30, 64, 175]);
    addText('Quick Revision Guide', 12, false, [100, 100, 100]);
    y += 8;
    
    addText('Key Concepts', 16, true);
    content.concepts.forEach(c => addText('• ' + c, 10));
    y += 6;
    
    addText('Common Interview Questions', 16, true);
    content.questions.forEach(q => {
      addText('Q: ' + q.q, 11, true);
      addText('A: ' + q.a, 10, false, [60, 60, 60]);
      y += 2;
    });
    
    if (content.codeSnippets) {
      y += 6;
      addText('Code Snippets', 16, true);
      content.codeSnippets.forEach(s => {
        addText(s.title, 11, true);
        doc.setFont('courier', 'normal');
        doc.setFontSize(8);
        const codeLines = s.code.split('\n');
        codeLines.forEach(line => {
          if (y > 270) { doc.addPage(); y = 20; }
          doc.text(line, margin, y);
          y += 4;
        });
        y += 4;
      });
    }
    
    y += 6;
    addText('Quick Tips', 16, true);
    content.tips.forEach(t => addText('✓ ' + t, 10));
    
    doc.save(`${tech}-interview-prep.pdf`);
    setLoading(false);
  };

  return (
    <div className="min-h-screen py-12">
      <div className="section-container max-w-xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">PDF Generator</h1>
          <p className="text-muted-foreground">Download concise revision notes</p>
        </motion.div>
        
        <div className="card-elevated p-6 space-y-4">
          <div>
            <label className="text-sm font-medium mb-2 block">Technology</label>
            <Select value={tech} onValueChange={setTech}>
              <SelectTrigger><SelectValue placeholder="Select technology" /></SelectTrigger>
              <SelectContent>
                {getTechnologies().map(t => (
                  <SelectItem key={t} value={t}>{pdfContent[t].title.replace(' Interview Preparation', '')}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <Button onClick={generatePDF} disabled={!tech || loading} className="w-full gap-2">
            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <FileDown className="h-4 w-4" />}
            {loading ? 'Generating...' : 'Download PDF'}
          </Button>
          
          {tech && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-4 bg-muted rounded-lg text-sm">
              <p className="font-medium mb-2">PDF includes:</p>
              <ul className="space-y-1 text-muted-foreground">
                <li>• {pdfContent[tech].concepts.length} key concepts</li>
                <li>• {pdfContent[tech].questions.length} interview Q&As</li>
                <li>• {pdfContent[tech].codeSnippets?.length || 0} code snippets</li>
                <li>• {pdfContent[tech].tips.length} quick tips</li>
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PDFGenerator;

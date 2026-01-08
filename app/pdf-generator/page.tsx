"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileDown, Loader2, Eye, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { pdfContent, getTechnologies } from "@/data/pdfContent";
import jsPDF from "jspdf";

const PDFGenerator = () => {
  const [tech, setTech] = useState("");
  const [loading, setLoading] = useState(false);
  const [previewMode, setPreviewMode] = useState(false);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  const buildPDF = (content: any) => {
    const doc = new jsPDF();
    let y = 20;
    const margin = 20;
    const pageWidth = doc.internal.pageSize.getWidth();

    const addText = (
      text: string,
      size: number,
      bold = false,
      color = [0, 0, 0]
    ) => {
      doc.setFontSize(size);
      doc.setFont("helvetica", bold ? "bold" : "normal");
      doc.setTextColor(color[0], color[1], color[2]);
      const lines = doc.splitTextToSize(text, pageWidth - margin * 2);
      lines.forEach((line: string) => {
        if (y > 270) {
          doc.addPage();
          y = 20;
        }
        doc.text(line, margin, y);
        y += size * 0.5;
      });
      y += 4;
    };

    addText(content.title, 22, true, [30, 64, 175]);
    addText("Quick Revision Guide", 12, false, [100, 100, 100]);
    y += 8;

    addText("Key Concepts", 16, true);
    content.concepts.forEach((c: string) => addText("• " + c, 10));
    y += 6;

    addText("Common Interview Questions", 16, true);
    content.questions.forEach((q: any) => {
      addText("Q: " + q.q, 11, true);
      addText("A: " + q.a, 10, false, [60, 60, 60]);
      y += 2;
    });

    if (content.codeSnippets) {
      y += 6;
      addText("Code Snippets", 16, true);
      content.codeSnippets.forEach((s: any) => {
        addText(s.title, 11, true);
        doc.setFont("courier", "normal");
        doc.setFontSize(8);
        const codeLines = s.code.split("\n");
        codeLines.forEach((line: string) => {
          if (y > 270) {
            doc.addPage();
            y = 20;
          }
          doc.text(line, margin, y);
          y += 4;
        });
        y += 4;
      });
    }

    y += 6;
    addText("Quick Tips", 16, true);
    content.tips.forEach((t: string) => addText("• " + t, 10));

    return doc;
  };

  const previewPDF = async () => {
    if (!tech) return;
    setLoading(true);

    try {
      const content = pdfContent[tech];
      const doc = buildPDF(content);
      const blob = doc.output("blob");
      const url = URL.createObjectURL(blob);
      setPdfUrl(url);
      setPreviewMode(true);
    } catch (error) {
      console.error("Error generating preview:", error);
    } finally {
      setLoading(false);
    }
  };

  const downloadPDF = async () => {
    if (!tech) return;
    setLoading(true);

    try {
      const content = pdfContent[tech];
      const doc = buildPDF(content);
      doc.save(
        `${tech.charAt(0).toUpperCase() + tech.slice(1)} - Interview Notes.pdf`
      );
    } catch (error) {
      console.error("Error generating PDF:", error);
    } finally {
      setLoading(false);
    }
  };

  const closePreview = () => {
    setPreviewMode(false);
    if (pdfUrl) {
      URL.revokeObjectURL(pdfUrl);
      setPdfUrl(null);
    }
  };

  const downloadFromPreview = () => {
    if (!tech) return;
    const content = pdfContent[tech];
    const doc = buildPDF(content);
    doc.save(`${tech}- Interview Notes.pdf`);
  };

  return (
    <>
      <div className="min-h-screen py-12">
        <div className="section-container max-w-xl">
          <motion.div
            className="text-center mb-8"
          >
            <h1 className="text-3xl font-bold mb-2">PDF Generator</h1>
            <p className="text-muted-foreground">
              Download concise revision notes
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="card-elevated p-6 space-y-4"
          >
            <div>
              <label className="text-sm font-medium mb-2 block">
                Technology
              </label>
              <Select value={tech} onValueChange={setTech}>
                <SelectTrigger>
                  <SelectValue placeholder="Select technology" />
                </SelectTrigger>
                <SelectContent>
                  {getTechnologies().map((t) => (
                    <SelectItem key={t} value={t}>
                      {pdfContent[t].title.replace(
                        " Interview Preparation",
                        ""
                      )}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex gap-2">
              <Button
                onClick={previewPDF}
                disabled={!tech || loading}
                className="flex-1 gap-2"
              >
                {loading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
                {loading ? "Generating..." : "Preview PDF"}
              </Button>
              <Button
                onClick={downloadPDF}
                disabled={!tech || loading}
                variant="outline"
                className="flex-1 gap-2"
              >
                <FileDown className="h-4 w-4" />
                Download
              </Button>
            </div>

            {tech && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-4 bg-muted rounded-lg text-sm"
              >
                <p className="font-medium mb-2">PDF includes:</p>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• {pdfContent[tech].concepts.length} key concepts</li>
                  <li>• {pdfContent[tech].questions.length} interview Q&As</li>
                  <li>
                    • {pdfContent[tech].codeSnippets?.length || 0} code snippets
                  </li>
                  <li>• {pdfContent[tech].tips.length} quick tips</li>
                </ul>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {previewMode && pdfUrl && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closePreview}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-background rounded-lg shadow-2xl w-full max-w-6xl h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-4 border-b">
                <div>
                  <h2 className="text-lg font-semibold">PDF Preview</h2>
                  <p className="text-sm text-muted-foreground">
                    {pdfContent[tech]?.title}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    onClick={downloadFromPreview}
                    variant="outline"
                    size="sm"
                    className="gap-2"
                  >
                    <Download className="h-4 w-4" />
                    <span className="hidden sm:inline">Download</span>
                  </Button>
                  <Button onClick={closePreview} variant="ghost" size="sm">
                    <X className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              <div className="flex-1 overflow-hidden p-4">
                <iframe
                  src={pdfUrl}
                  className="w-full h-full rounded border"
                  title="PDF Preview"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PDFGenerator;

"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Download,
  Eye,
  Search,
  Filter,
  X,
  ExternalLink,
  Calendar,
  User,
  Tag,
  Github,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { books, categories, Book } from "@/data/booksData";
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

const BooksLibrary = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Books");
  const [previewBook, setPreviewBook] = useState<Book | null>(null);
  const [showPreviewDialog, setShowPreviewDialog] = useState(false);
  const [pdfPreviewUrl, setPdfPreviewUrl] = useState<string | null>(null);
  const [isLoadingPreview, setIsLoadingPreview] = useState(false);

  // Filter books based on search and category
  const filteredBooks = useMemo(() => {
    return books.filter((book) => {
      const matchesSearch =
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.tags.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        );

      const matchesCategory =
        selectedCategory === "All Books" || book.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const handleDownload = (book: Book) => {
    const link = document.createElement("a");
    link.href = `/data/books/${book.filename}`;
    link.download = book.filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePreview = async (book: Book) => {
    setPreviewBook(book);
    setShowPreviewDialog(true);
    setIsLoadingPreview(true);

    try {
      const response = await fetch(`/data/books/${book.filename}`);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      setPdfPreviewUrl(url);
    } catch (error) {
      console.error("Error loading PDF:", error);
    } finally {
      setIsLoadingPreview(false);
    }
  };

  const closePreview = () => {
    setShowPreviewDialog(false);
    if (pdfPreviewUrl) {
      URL.revokeObjectURL(pdfPreviewUrl);
      setPdfPreviewUrl(null);
    }
  };

  const openPDFInNewTab = (book: Book) => {
    window.open(`/data/books/${book.filename}`, "_blank");
  };

  return (
    <div className="min-h-screen py-8 lg:py-12 bg-gradient-to-b from-blue-50/50 to-white">
      <div className="section-container px-4 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 lg:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600 text-white text-sm font-semibold mb-4 shadow-lg">
            <BookOpen className="h-4 w-4" />
            JavaScript Library
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Free JavaScript Books
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Curated collection of high-quality JavaScript books. Download or
            preview any book for free.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-6"
        >
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search by title, author, or tags..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-12 py-4 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-900 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mb-8"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <Filter className="h-4 w-4 text-slate-500" />
            <span className="text-sm font-medium text-slate-600">
              Filter by Category
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white shadow-sm"
                    : "bg-white text-slate-700 hover:bg-slate-50 border border-slate-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="text-center mt-4 text-sm text-slate-500">
            {filteredBooks.length}{" "}
            {filteredBooks.length === 1 ? "book" : "books"}
          </div>
        </motion.div>

        {/* Books Grid */}
        <AnimatePresence mode="popLayout">
          {filteredBooks.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBooks.map((book, index) => (
                <motion.div
                  key={book.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.05 }}
                  className="card-elevated group hover:shadow-xl transition-all duration-300"
                >
                  <div className="p-6">
                    {/* Book Icon/Cover */}
                    <div className="w-full h-48 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg mb-4 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <BookOpen className="h-20 w-20 text-white opacity-80" />
                    </div>

                    {/* Book Info */}
                    <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {book.title}
                    </h3>

                    <div className="space-y-2 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        <span className="line-clamp-1">{book.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{book.year}</span>
                      </div>
                    </div>

                    <p className="text-sm text-slate-600 mb-4 line-clamp-3">
                      {book.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {book.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1 px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs font-medium"
                        >
                          <Tag className="h-3 w-3" />
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <Button
                        onClick={() => handlePreview(book)}
                        variant="outline"
                        className="flex-1 gap-2"
                        size="sm"
                      >
                        <Eye className="h-4 w-4" />
                        Preview
                      </Button>
                      <Button
                        onClick={() => handleDownload(book)}
                        className="flex-1 gap-2 bg-blue-600 hover:bg-blue-700"
                        size="sm"
                      >
                        <Download className="h-4 w-4" />
                        Download
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <BookOpen className="h-16 w-16 mx-auto text-muted-foreground mb-4 opacity-50" />
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                No books found
              </h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filter criteria
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Credit Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-12 pt-8 border-t border-slate-200"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-sm text-muted-foreground">
            <Github className="h-5 w-5" />
            <span>Books are fetched from</span>
            <a
              href="https://github.com/egaprsty/FullstackJs-Ebook"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium"
            >
              egaprsty/FullstackJs-Ebook
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Preview Dialog */}
      <AlertDialog
        open={showPreviewDialog}
        onOpenChange={(open) => {
          if (!open) closePreview();
        }}
      >
        <AlertDialogContent className="max-w-5xl max-h-[90vh] overflow-hidden">
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-start gap-3">
              <BookOpen className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
              <div className="flex-1 min-w-0">
                <div className="text-lg font-bold mb-1">
                  {previewBook?.title}
                </div>
                <div className="text-sm font-normal text-muted-foreground">
                  by {previewBook?.author} ({previewBook?.year})
                </div>
              </div>
            </AlertDialogTitle>
            <AlertDialogDescription className="text-left overflow-y-auto max-h-[70vh]">
              <div className="space-y-4 mt-4">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2 text-sm">
                    Description
                  </h4>
                  <p className="text-slate-600 text-sm">
                    {previewBook?.description}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <div>
                    <span className="text-xs font-medium text-slate-500 block mb-1">
                      Category
                    </span>
                    <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
                      {previewBook?.category}
                    </span>
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-medium text-slate-500 block mb-1">
                      Tags
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {previewBook?.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1 px-2 py-0.5 bg-slate-100 text-slate-700 rounded text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* PDF Preview Frame */}
                <div className="border border-slate-200 rounded-lg overflow-hidden bg-white">
                  <div className="px-4 py-2 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
                    <span className="text-xs font-medium text-slate-700">
                      PDF Preview
                    </span>
                    <Button
                      onClick={() =>
                        previewBook && openPDFInNewTab(previewBook)
                      }
                      variant="ghost"
                      size="sm"
                      className="gap-1.5 h-7 text-xs"
                    >
                      <ExternalLink className="h-3 w-3" />
                      Full Screen
                    </Button>
                  </div>
                  <div className="relative">
                    {isLoadingPreview ? (
                      <div className="w-full h-96 flex items-center justify-center bg-slate-50">
                        <div className="text-center">
                          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                          <p className="text-sm text-slate-600">
                            Loading PDF...
                          </p>
                        </div>
                      </div>
                    ) : pdfPreviewUrl ? (
                      <iframe
                        src={`${pdfPreviewUrl}#toolbar=0`}
                        className="w-full h-96"
                        title="PDF Preview"
                      />
                    ) : (
                      <div className="w-full h-96 flex items-center justify-center bg-slate-50">
                        <p className="text-sm text-slate-600">
                          Failed to load PDF preview
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={closePreview}>Close</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => previewBook && handleDownload(previewBook)}
              className="bg-blue-600 hover:bg-blue-700 gap-2"
            >
              <Download className="h-4 w-4" />
              Download Book
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default BooksLibrary;

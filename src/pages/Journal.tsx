import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Clock, Calendar } from 'lucide-react';
import { ARTICLES } from '../data';
import { JournalArticle } from '../types';

export default function Journal() {
  const [selectedArticle, setSelectedArticle] = useState<JournalArticle | null>(null);

  return (
    <div id="journal-page-container" className="pt-24 min-h-screen bg-[#F7F7F5] relative">
      {/* Title */}
      <section className="py-16 px-6 md:px-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="font-cormorant text-5xl md:text-7xl font-medium tracking-normal text-black leading-tight">
            Insights on commercial real estate.
          </h1>
        </motion.div>
      </section>

      {/* Grid */}
      <section className="py-12 px-6 md:px-10 max-w-7xl mx-auto pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ARTICLES.map((article, idx) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.08 }}
              className="bg-white rounded-2xl overflow-hidden shadow-[0_12px_32px_rgba(0,0,0,0.04)] flex flex-col justify-between h-full hover:shadow-lg transition-all border-none"
            >
              <div>
                {/* Photo */}
                <div className="aspect-[16/10] w-full overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Info Block */}
                <div className="p-6 space-y-3">
                  <span className="font-sans text-xs font-bold tracking-widest text-neutral-400 uppercase">
                    {article.category}
                  </span>
                  <h3 className="font-cormorant text-2xl font-medium leading-tight text-black">
                    {article.title}
                  </h3>
                  <p className="font-sans text-sm text-neutral-600 line-clamp-3">
                    {article.summary}
                  </p>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="px-6 pb-6 pt-4 border-t border-neutral-100 flex justify-between items-center text-xs font-sans text-neutral-400">
                <div className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{article.readTime}</span>
                </div>
                
                <button
                  onClick={() => setSelectedArticle(article)}
                  className="font-sans text-xs font-bold uppercase tracking-wider text-black hover:opacity-75 cursor-pointer underline"
                >
                  Read Article &rarr;
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Full-screen Article Viewer */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            id="fullscreen-article-container"
            data-lenis-prevent=""
            style={{ height: '100vh', overflowY: 'auto', background: '#FFFFFF' }}
            className="fixed inset-0 z-[10000]"
          >
            {/* Close Button: Fixed top: 20px; right: 20px; z-index: 100. */}
            <button
              onClick={() => setSelectedArticle(null)}
              style={{ position: 'fixed', top: '20px', right: '20px', zIndex: 100 }}
              className="p-3 rounded-full bg-neutral-100 hover:bg-neutral-200 text-black transition-colors cursor-pointer shadow-sm"
              aria-label="Close article"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Scrollable text wrapper with line-height: 1.6, max-width: 600px, padding: 40px */}
            <div 
              style={{ lineHeight: '1.6', maxWidth: '600px', padding: '40px' }}
              className="mx-auto mt-16 font-sans text-neutral-700 space-y-8"
            >
              {/* Image */}
              <div className="aspect-[16/9] w-full overflow-hidden rounded-xl">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Metadata Row */}
              <div className="flex items-center gap-6 text-xs text-neutral-400 font-sans border-b border-neutral-100 pb-4">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {selectedArticle.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {selectedArticle.readTime}
                </span>
                <span className="font-sans text-xs font-bold tracking-widest text-neutral-400 uppercase">
                  {selectedArticle.category}
                </span>
              </div>

              {/* H1 Title - Cormorant only */}
              <h1 className="font-cormorant text-4xl md:text-5xl font-medium leading-tight text-black">
                {selectedArticle.title}
              </h1>

              {/* Content Paragraphs */}
              <div className="space-y-6 text-base md:text-lg">
                {selectedArticle.content.split('\n\n').map((para, i) => (
                  <p key={i}>
                    {para}
                  </p>
                ))}
              </div>

              {/* Footer */}
              <div className="pt-12 border-t border-neutral-100 flex justify-between items-center">
                <span className="font-sans text-xs font-medium text-neutral-400">
                  Byrne Company &copy; 2026
                </span>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="bg-black text-white font-sans text-xs font-semibold uppercase tracking-widest py-3 px-8 rounded-full hover:bg-neutral-900 transition-colors cursor-pointer"
                >
                  Close Reading
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

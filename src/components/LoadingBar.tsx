import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const CYCLING_TEXTS = [
  "Loading Byrne Company...",
  "Curating listings...",
  "Opening portal..."
];

export default function LoadingBar() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  // Cycle text during the 1.5s load
  useEffect(() => {
    if (!isInitialLoading) return;
    
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % CYCLING_TEXTS.length);
    }, 500);

    const timer = setTimeout(() => {
      setIsInitialLoading(false);
    }, 1800); // 1.5s scale animation + buffer

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [isInitialLoading]);

  return (
    <AnimatePresence>
      {isInitialLoading && (
        <motion.div
          id="global-loading-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed inset-0 bg-[#F7F7F5] z-[9999] flex flex-col items-center justify-center pointer-events-auto"
        >
          <div className="relative w-72 flex flex-col items-center">
            {/* Thin Black bar: height 3px */}
            <div className="w-full h-[3px] bg-neutral-200 overflow-hidden rounded-full">
              <motion.div
                id="loading-progress-bar"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                style={{ originX: 0 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="w-full h-full bg-[#000000]"
              />
            </div>

            {/* Cycling text below */}
            <div className="mt-4 text-center h-6 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentTextIndex}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="text-[13px] font-sans font-medium tracking-wide text-black"
                >
                  {CYCLING_TEXTS[currentTextIndex]}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

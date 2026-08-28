import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Lenis from 'lenis';

// Shared Components
import LoadingBar from './components/LoadingBar';
import Header from './components/Header';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Properties from './pages/Properties';
import PropertyDetail from './pages/PropertyDetail';
import SoldProperties from './pages/SoldProperties';
import Journal from './pages/Journal';
import Contact from './pages/Contact';

export default function App() {
  // Sync router with window path, default to '/'
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || "/";
  });
  const [isLoading, setIsLoading] = useState(false);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Listen to popstate (browser back/forward)
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || "/");
      window.scrollTo(0, 0);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Navigation controller with artificial loading animation for high luxury experience
  const navigate = (path: string) => {
    if (path === currentPath) return;
    
    setIsLoading(true);

    // Simulate page loading
    setTimeout(() => {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
      window.scrollTo(0, 0); // Force window.scrollTo(0,0) on every route change
      setIsLoading(false);
    }, 1200);
  };

  // Render correct page
  const renderPage = () => {
    if (currentPath.startsWith("/listings/")) {
      const slug = currentPath.substring("/listings/".length);
      return <PropertyDetail slug={slug} />;
    }

    switch (currentPath) {
      case "/":
        return <Home navigate={navigate} />;
      case "/about":
        return <About />;
      case "/services":
        return <Services />;
      case "/properties":
        return <Properties navigate={navigate} />;
      case "/sold-properties":
        return <SoldProperties />;
      case "/journal":
        return <Journal />;
      case "/contact":
        return <Contact />;
      default:
        return <Home navigate={navigate} />;
    }
  };

  return (
    <div className="relative min-h-screen bg-[#F7F7F5] overflow-x-hidden font-sans">
      {/* 1. Global Loading Progress Bar Overlay */}
      <LoadingBar />

      {/* 1b. Page Transition Overlay on route change */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            id="page-transition-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed inset-0 bg-[#000000] z-[99999] flex items-center justify-center pointer-events-auto"
          >
            <span className="font-sans text-[16px] font-medium text-white tracking-widest uppercase">
              Loading...
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Global Dynamic Header */}
      <Header currentPath={currentPath} navigate={navigate} />

      {/* 3. Page Body Transitions */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPath}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* 4. Global Footer Section */}
      <Footer navigate={navigate} />

      {/* 5. AI Chat Assist Widget (powered by getGoLive.io) */}
      <ChatWidget />
    </div>
  );
}

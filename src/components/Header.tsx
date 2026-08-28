import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  currentPath: string;
  navigate: (path: string) => void;
}

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Current Listings", path: "/properties" },
  { label: "Sold Properties", path: "/sold-properties" },
  { label: "Journal", path: "/journal" },
  { label: "Contact", path: "/contact" }
];

export default function Header({ currentPath, navigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Monitor scroll height
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomepage = currentPath === "/";

  // Solid white/glassy header on all pages other than the homepage
  const isHeaderWhiteAndGlossy = !isHomepage || isScrolled;

  const headerStyle = isHeaderWhiteAndGlossy
    ? { backgroundColor: 'rgba(255, 255, 255, 0.85)', backdropFilter: 'blur(12px)' }
    : { backgroundColor: 'transparent' };

  const textClass = isHeaderWhiteAndGlossy ? 'text-[#000000]' : 'text-white';
  const logoClass = isHeaderWhiteAndGlossy ? 'text-[#000000]' : 'text-white';

  const handleLinkClick = (path: string) => {
    setIsMobileMenuOpen(false);
    navigate(path);
  };

  return (
    <>
      <header
        id="main-navigation-header"
        style={headerStyle}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-out ${isHeaderWhiteAndGlossy ? 'border-b border-neutral-200/20 shadow-sm' : ''}`}
      >
        {/* Mobile height 72px, padding 16px 20px (px-5) */}
        <div className="max-w-7xl mx-auto h-[72px] flex items-center justify-between px-5 md:px-10">
          {/* Logo - NO Subheadings, strictly BYRNE COMPANY */}
          <button
            id="header-logo-button"
            onClick={() => handleLinkClick("/")}
            className={`font-cormorant text-2xl font-medium tracking-widest cursor-pointer transition-colors duration-300 ${logoClass}`}
          >
            BYRNE COMPANY
          </button>

          {/* Desktop Nav */}
          <nav id="desktop-nav" className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <button
                  key={link.path}
                  onClick={() => handleLinkClick(link.path)}
                  className={`font-sans text-sm font-medium tracking-wider relative py-1 cursor-pointer transition-colors duration-300 ${textClass} hover:opacity-80`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeUnderline"
                      className={`absolute bottom-0 left-0 w-full h-[1.5px] ${isHeaderWhiteAndGlossy ? 'bg-black' : 'bg-white'}`}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Hamburger Menu (Mobile Only) */}
          <button
            id="mobile-hamburger-button"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open mobile menu"
            className="md:hidden p-2 cursor-pointer transition-colors duration-300"
          >
            <Menu className={`w-6 h-6 ${textClass}`} />
          </button>
        </div>
      </header>

      {/* Mobile Slide-in Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 flex justify-end">
            {/* Overlay backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute inset-0 bg-[#0A0A0A]/40 backdrop-blur-sm"
            />

            {/* Menu Container: Glossy White, slide-in 400ms */}
            <motion.div
              id="mobile-navigation-drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.85)', backdropFilter: 'blur(12px)' }}
              className="relative w-4/5 max-w-[360px] h-full shadow-2xl flex flex-col justify-between p-8"
            >
              {/* Close Button at Top */}
              <div className="flex justify-between items-center h-[72px] border-b border-neutral-200/20">
                <span className="font-cormorant text-xl font-medium tracking-widest text-black">
                  BYRNE COMPANY
                </span>
                <button
                  id="mobile-close-button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-black cursor-pointer"
                  aria-label="Close mobile menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation Links: Black links, 24px Cormorant, gap 24px (space-y-6 is 24px) */}
              <nav className="flex-1 flex flex-col justify-center space-y-6">
                {NAV_LINKS.map((link, idx) => {
                  const isActive = currentPath === link.path;
                  return (
                    <motion.button
                      key={link.path}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05, duration: 0.3 }}
                      onClick={() => handleLinkClick(link.path)}
                      className="text-left font-cormorant text-[24px] font-medium text-black cursor-pointer hover:opacity-70 flex flex-col"
                    >
                      <span className="relative inline-block py-1">
                        {link.label}
                        {isActive && (
                          <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-black" />
                        )}
                      </span>
                    </motion.button>
                  );
                })}
              </nav>

              {/* Minimal footer space inside mobile menu */}
              <div className="border-t border-neutral-200/20 pt-4 flex flex-col gap-1 text-[11px] font-sans text-neutral-500 tracking-wider">
                <p>BYRNE COMPANY &copy; 2026</p>
                <p>214.343.6996</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

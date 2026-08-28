import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROPERTIES, ARTICLES, TESTIMONIALS, HERO_IMAGE } from '../data';

interface HomeProps {
  navigate: (path: string) => void;
}

export default function Home({ navigate }: HomeProps) {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Auto-advance testimonials every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div id="home-page-container">
      {/* 1. HERO - Full Bleed, Sunny, Upscale Outdoor Retail Center */}
      <section id="hero-section" className="relative w-screen h-screen overflow-hidden">
        {/* Bright Sunny Pexels Image */}
        <img
          src={HERO_IMAGE}
          alt="Sunny modern retail center under blue sky"
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        
        {/* Subtle Dark Gradient Overlay strictly at the bottom for text contrast */}
        <div 
          className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" 
          id="hero-bottom-gradient"
        />

        {/* Content Container - Left Aligned */}
        <div className="absolute inset-0 flex flex-col justify-end pb-20 md:pb-24 px-5 md:px-16 max-w-7xl mx-auto text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
            className="max-w-2xl space-y-6 text-left"
          >
            {/* H1 - NO Eyebrows, NO all caps, strictly Cormorant Garamond */}
            <h1 
              id="home-hero-title"
              style={{ textWrap: 'balance' }}
              className="font-cormorant font-medium leading-[1.1] tracking-normal text-white"
            >
              <span className="hidden md:inline">National retail investment experts.</span>
              <span className="inline md:hidden">Retail investment experts.</span>
            </h1>
            
            {/* Subtext - strictly Plus Jakarta Sans */}
            <p className="font-sans text-[16px] md:text-[18px] font-light tracking-wide text-neutral-200 leading-[1.5] max-w-lg line-clamp-3">
              Buying and selling shopping centers nationwide.
            </p>

            {/* Buttons - Primary Solid Black pill, Secondary glassmorphic pill */}
            <div className="flex flex-wrap gap-[16px] pt-2 justify-start">
              <button
                id="explore-listings-hero-btn"
                onClick={() => navigate("/properties")}
                className="bg-black text-white hover:bg-neutral-900 transition-colors font-sans text-sm font-medium uppercase tracking-widest py-3 px-8 rounded-full cursor-pointer shadow-md"
              >
                Explore Listings
              </button>
              
              <button
                id="contact-hero-btn"
                onClick={() => navigate("/contact")}
                className="font-sans text-sm font-medium uppercase tracking-widest py-3 px-8 rounded-full border border-white/40 bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-all cursor-pointer"
              >
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. STATS GRID - 3 Pure White Cards */}
      <section id="stats-grid-section" className="py-20 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { metric: "25+ Years", label: "Experience" },
            { metric: "$1B+", label: "Transaction Volume" },
            { metric: "100+", label: "Properties Sold" }
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.08 }}
              className="bg-white p-10 rounded-2xl shadow-[0_12px_32px_rgba(0,0,0,0.04)] text-center flex flex-col justify-center border-none"
            >
              <span className="font-sans text-5xl font-semibold tracking-tight text-black block mb-2">
                {stat.metric}
              </span>
              <span className="font-sans text-sm font-medium tracking-widest uppercase text-neutral-400">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. ABOUT PREVIEW - 50/50 Split */}
      <section id="about-preview-section" className="py-20 bg-white border-y border-neutral-100">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <h2 className="font-cormorant text-4xl md:text-5xl font-medium tracking-normal text-black leading-tight">
              A legacy of commercial real estate excellence.
            </h2>
            <p className="font-sans text-base text-neutral-600 leading-relaxed max-w-md">
              For over two decades, Byrne Company has guided clients through premium retail property transactions across thirty states.
            </p>
            <p className="font-sans text-base text-neutral-600 leading-relaxed max-w-md">
              We leverage real-time market data to achieve predictable capital growth and reliable yields for private and institutional investors.
            </p>
            <div className="pt-4">
              <button
                onClick={() => navigate("/about")}
                className="bg-black text-white hover:bg-neutral-900 transition-colors font-sans text-xs font-semibold uppercase tracking-widest py-3 px-6 rounded-full cursor-pointer"
              >
                Learn More
              </button>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.pexels.com/photos/264507/pexels-photo-264507.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Upscale retail center walkway"
              className="w-full aspect-[4/3] object-cover rounded-2xl shadow-[0_12px_32px_rgba(0,0,0,0.04)]"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* 4. FEATURED CURRENT LISTINGS - 3 Column Grid */}
      <section id="featured-listings-section" className="py-24 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <h2 className="font-cormorant text-4xl md:text-5xl font-medium tracking-normal text-black">
            Featured current listings.
          </h2>
          <button
            onClick={() => navigate("/properties")}
            className="font-sans text-sm font-medium text-black underline tracking-wide hover:opacity-75 cursor-pointer"
          >
            View All Properties
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROPERTIES.slice(0, 3).map((property, idx) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.08 }}
              className="bg-white rounded-2xl overflow-hidden shadow-[0_12px_32px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all border-none"
            >
              {/* Product Image */}
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Info Block */}
              <div className="p-6 space-y-4">
                <div className="space-y-1">
                  <h3 className="font-cormorant text-2xl font-medium text-black">
                    {property.title}
                  </h3>
                  <p className="font-sans text-sm text-neutral-500 tracking-wide">
                    {property.location}
                  </p>
                </div>

                <div className="flex justify-between items-center pt-2 border-t border-neutral-100">
                  <span className="font-sans text-lg font-semibold text-black">
                    {property.price}
                  </span>
                  
                  <button
                    onClick={() => navigate(`/listings/${property.slug}`)}
                    className="font-sans text-xs font-semibold tracking-wider text-black hover:opacity-70 uppercase cursor-pointer"
                  >
                    View Details &rarr;
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. JOURNAL PREVIEW - 3 Articles */}
      <section id="journal-preview-section" className="py-24 bg-white border-y border-neutral-100">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex justify-between items-end mb-12">
            <h2 className="font-cormorant text-4xl md:text-5xl font-medium tracking-normal text-black">
              Insights on commercial real estate.
            </h2>
            <button
              onClick={() => navigate("/journal")}
              className="font-sans text-sm font-medium text-black underline tracking-wide hover:opacity-75 cursor-pointer"
            >
              View Journal
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ARTICLES.slice(0, 3).map((article, idx) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.08 }}
                className="bg-white rounded-2xl overflow-hidden shadow-[0_12px_32px_rgba(0,0,0,0.04)] flex flex-col justify-between h-full hover:shadow-lg transition-all"
              >
                <div>
                  {/* Photo */}
                  <div className="aspect-[16/10] w-full overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Body text */}
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

                <div className="px-6 pb-6 pt-2 border-t border-neutral-100 flex justify-between items-center text-xs font-sans text-neutral-400">
                  <span>{article.date}</span>
                  <button
                    onClick={() => navigate("/journal")}
                    className="font-sans text-xs font-bold uppercase tracking-wider text-black hover:opacity-75 cursor-pointer"
                  >
                    Read Article &rarr;
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. AUTO-MOVING TESTIMONIALS */}
      <section id="testimonials-section" className="py-24 px-6 md:px-10 max-w-3xl mx-auto text-center overflow-hidden">
        <h2 className="font-sans text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-8">
          Client Endorsements
        </h2>
        
        <div className="relative h-48 md:h-40 flex items-center justify-center">
          <AnimatePresence mode="wait">
            {TESTIMONIALS.map((testimonial, idx) => {
              if (idx !== activeTestimonial) return null;
              return (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0 flex flex-col items-center justify-center space-y-4"
                >
                  <p className="font-cormorant text-2xl md:text-3xl italic font-light text-black leading-relaxed">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <p className="font-sans text-sm font-semibold text-neutral-500 tracking-wider">
                    {testimonial.author}
                  </p>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center space-x-2 mt-4">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTestimonial(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeTestimonial === idx ? "bg-black w-4" : "bg-neutral-300"
              }`}
            />
          ))}
        </div>
      </section>

      {/* 7. CONTACT DOCK - Phone, Address, Button */}
      <section id="contact-dock" className="py-12 bg-white border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 text-center md:text-left">
            <div>
              <span className="font-sans text-xs font-bold uppercase tracking-widest text-neutral-400 block mb-1">
                Direct Line
              </span>
              <span className="font-sans text-xl font-medium text-black">
                214.343.6996
              </span>
            </div>
            <div className="hidden md:block w-px h-8 bg-neutral-200" />
            <div>
              <span className="font-sans text-xs font-bold uppercase tracking-widest text-neutral-400 block mb-1">
                Corporate Address
              </span>
              <span className="font-sans text-xl font-medium text-black">
                Dallas, Texas
              </span>
            </div>
          </div>
          
          <button
            onClick={() => navigate("/contact")}
            className="bg-black text-white hover:bg-neutral-900 transition-colors font-sans text-xs font-semibold uppercase tracking-widest py-3.5 px-8 rounded-full cursor-pointer shadow-md"
          >
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
}

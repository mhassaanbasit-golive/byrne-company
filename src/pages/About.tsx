import { motion } from 'motion/react';
import { ABOUT_IMAGE } from '../data';

export default function About() {
  return (
    <div id="about-page-container" className="pt-24 min-h-screen bg-[#F7F7F5]">
      {/* Title section */}
      <section className="py-16 px-6 md:px-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="font-cormorant text-5xl md:text-7xl font-medium tracking-normal text-black leading-tight">
            A legacy of commercial real estate excellence.
          </h1>
        </motion.div>
      </section>

      {/* 50/50 Split content */}
      <section className="py-12 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <p className="font-sans text-base text-neutral-600 leading-relaxed">
              Byrne Company was founded on the principles of thorough market intelligence, clear communication, and absolute fidelity in execution. Over twenty-five years of active commercial brokerage, we have completed over a billion dollars in retail transactions.
            </p>
            <p className="font-sans text-base text-neutral-600 leading-relaxed">
              Our investment specialists analyze real estate dynamics across thirty states to source off-market properties and secure competitive yields. We believe that professional asset management coupled with thorough local research leads to long-term capital protection.
            </p>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={ABOUT_IMAGE}
              alt="Bright retail plaza shopping center"
              className="w-full aspect-[4/3] object-cover rounded-2xl shadow-[0_12px_32px_rgba(0,0,0,0.04)]"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* 2x2 Stats Grid */}
      <section className="py-20 px-6 md:px-10 max-w-7xl mx-auto bg-white rounded-3xl my-16 shadow-[0_12px_32px_rgba(0,0,0,0.02)]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { num: "25+ Years", label: "Brokerage Experience" },
            { num: "100+ Properties", label: "Properties Sold" },
            { num: "30+ States", label: "Active Regions" },
            { num: "98%", label: "Client Satisfaction" }
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="space-y-2"
            >
              <span className="font-sans text-4xl md:text-5xl font-semibold tracking-tight text-black block">
                {stat.num}
              </span>
              <span className="font-sans text-xs font-medium tracking-widest uppercase text-neutral-400">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

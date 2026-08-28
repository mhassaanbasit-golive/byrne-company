import { motion } from 'motion/react';
import { SERVICES } from '../data';

export default function Services() {
  return (
    <div id="services-page-container" className="pt-24 min-h-screen bg-[#F7F7F5]">
      {/* Title block */}
      <section className="py-16 px-6 md:px-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="font-cormorant text-5xl md:text-7xl font-medium tracking-normal text-black leading-tight">
            What we do for your portfolio.
          </h1>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-6 md:px-10 max-w-7xl mx-auto pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-[0_12px_32px_rgba(0,0,0,0.04)] border-none"
            >
              {/* Photo */}
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Text content - NO walls of text */}
              <div className="p-8 space-y-3">
                <h2 className="font-cormorant text-2xl md:text-3xl font-medium text-black">
                  {service.title}
                </h2>
                <p className="font-sans text-sm text-neutral-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

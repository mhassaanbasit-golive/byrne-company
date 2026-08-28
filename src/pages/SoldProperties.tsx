import { motion } from 'motion/react';
import { SOLD_PROPERTIES } from '../data';

export default function SoldProperties() {
  return (
    <div id="sold-properties-page-container" className="pt-24 min-h-screen bg-[#F7F7F5]">
      {/* Title block */}
      <section className="py-16 px-6 md:px-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="font-cormorant text-5xl md:text-7xl font-medium tracking-normal text-black leading-tight">
            Our proven transaction history.
          </h1>
        </motion.div>
      </section>

      {/* Grid */}
      <section className="py-12 px-6 md:px-10 max-w-7xl mx-auto pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SOLD_PROPERTIES.map((property, idx) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: (idx % 6) * 0.08 }}
              className="bg-white rounded-2xl overflow-hidden shadow-[0_12px_32px_rgba(0,0,0,0.04)] border-none flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="aspect-[4/3] w-full overflow-hidden relative">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  {/* Black Pill Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-black text-white font-sans text-[10px] font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-sm">
                      Sold
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 space-y-2">
                  <h3 className="font-cormorant text-2xl font-medium text-black">
                    {property.title}
                  </h3>
                  <p className="font-sans text-sm text-neutral-500 tracking-wide">
                    {property.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

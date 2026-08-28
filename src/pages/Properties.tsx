import { motion } from 'motion/react';
import { PROPERTIES } from '../data';

interface PropertiesProps {
  navigate: (path: string) => void;
}

export default function Properties({ navigate }: PropertiesProps) {
  return (
    <div id="properties-page-container" className="pt-24 min-h-screen bg-[#F7F7F5]">
      {/* Title */}
      <section className="py-16 px-6 md:px-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="font-cormorant text-5xl md:text-7xl font-medium tracking-normal text-black leading-tight">
            Explore exceptional retail spaces.
          </h1>
        </motion.div>
      </section>

      {/* Grid */}
      <section className="py-12 px-6 md:px-10 max-w-7xl mx-auto pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROPERTIES.map((property, idx) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.08 }}
              className="bg-white rounded-2xl overflow-hidden shadow-[0_12px_32px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all border-none flex flex-col justify-between"
            >
              <div>
                {/* Product Photo */}
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Info block - strictly Sans-serif inside cards per rules */}
                <div className="p-6 space-y-4">
                  <div className="space-y-1">
                    <h3 className="font-sans text-xl font-medium text-black">
                      {property.title}
                    </h3>
                    <p className="font-sans text-sm text-neutral-500 tracking-wide">
                      {property.location}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <div className="flex justify-between items-center pt-4 border-t border-neutral-100">
                  <span className="font-sans text-lg font-semibold text-black">
                    {property.price}
                  </span>
                  
                  <button
                    onClick={() => navigate(`/listings/${property.slug}`)}
                    className="font-sans text-xs font-semibold tracking-wider text-black hover:opacity-75 uppercase cursor-pointer"
                  >
                    View Details &rarr;
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

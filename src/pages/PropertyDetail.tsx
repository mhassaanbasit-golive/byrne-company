import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'motion/react';
import { PROPERTIES } from '../data';
import { Calendar, User, Mail, Phone, Home } from 'lucide-react';
import { useState } from 'react';

// Form schema using Zod
const showingFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(6, "Invalid phone number"),
  date: z.string().min(1, "Preferred date is required"),
  notes: z.string().optional()
});

type ShowingFormInputs = z.infer<typeof showingFormSchema>;

interface PropertyDetailProps {
  slug: string;
}

export default function PropertyDetail({ slug }: PropertyDetailProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Find target property
  const property = PROPERTIES.find(p => p.slug === slug) || PROPERTIES[0];

  const { register, handleSubmit, formState: { errors, isValid } } = useForm<ShowingFormInputs>({
    resolver: zodResolver(showingFormSchema),
    mode: "onChange"
  });

  const onSubmit = (data: ShowingFormInputs) => {
    console.log("Showing scheduled: ", data);
    setIsSubmitted(true);
  };

  return (
    <div id="property-detail-page-container" className="pt-24 min-h-screen bg-[#F7F7F5]">
      {/* 50/50 Split Hero */}
      <section className="py-12 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Text Detail */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <span className="font-sans text-xs font-bold tracking-widest text-neutral-400 uppercase">
                Active Offering
              </span>
              <h1 className="font-cormorant text-4xl md:text-5xl font-medium tracking-normal text-black leading-tight">
                {property.title}
              </h1>
              <p className="font-sans text-lg text-neutral-500">
                {property.location}
              </p>
            </div>

            <div className="py-4 border-y border-neutral-200/50">
              <span className="font-sans text-xs font-semibold uppercase tracking-widest text-neutral-400 block mb-1">
                Offering Price
              </span>
              <span className="font-sans text-3xl font-semibold text-black">
                {property.price}
              </span>
            </div>

            <p className="font-sans text-base text-neutral-600 leading-relaxed">
              {property.description}
            </p>
          </motion.div>

          {/* Right Image (16px radius) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={property.image}
              alt={property.title}
              className="w-full aspect-[4/3] object-cover rounded-2xl shadow-[0_12px_32px_rgba(0,0,0,0.04)]"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* Stats Bar (Plus Jakarta Sans) */}
      <section className="py-8 bg-white border-y border-neutral-100 my-12">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <span className="font-sans text-xs font-semibold text-neutral-400 uppercase tracking-widest block mb-1">
                Property Size
              </span>
              <span className="font-sans text-lg font-medium text-black">
                {property.sqFt}
              </span>
            </div>
            <div>
              <span className="font-sans text-xs font-semibold text-neutral-400 uppercase tracking-widest block mb-1">
                Total Tenants
              </span>
              <span className="font-sans text-lg font-medium text-black">
                {property.tenantCount} Tenants
              </span>
            </div>
            <div>
              <span className="font-sans text-xs font-semibold text-neutral-400 uppercase tracking-widest block mb-1">
                Anchor Tenant
              </span>
              <span className="font-sans text-lg font-medium text-black">
                {property.anchorTenant}
              </span>
            </div>
            <div>
              <span className="font-sans text-xs font-semibold text-neutral-400 uppercase tracking-widest block mb-1">
                Year Built
              </span>
              <span className="font-sans text-lg font-medium text-black">
                {property.yearBuilt}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery (3 high-res images with 16px radius) */}
      <section className="py-12 px-6 md:px-10 max-w-7xl mx-auto">
        <h2 className="font-cormorant text-3xl font-medium text-black mb-8 text-center md:text-left">
          Property Gallery
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {property.gallery.map((imgUrl, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_12px_32px_rgba(0,0,0,0.04)]"
            >
              <img
                src={imgUrl}
                alt={`Gallery View ${idx + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Showing Request Form (pill inputs, black submit button) */}
      <section className="py-20 px-6 md:px-10 max-w-2xl mx-auto pb-32">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-[0_12px_32px_rgba(0,0,0,0.04)] text-center space-y-6">
          <div className="space-y-2">
            <h2 className="font-cormorant text-3xl font-medium text-black">
              Schedule a Showing
            </h2>
            <p className="font-sans text-sm text-neutral-500">
              Arrange an on-site property review with one of our investments specialists.
            </p>
          </div>

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-12 space-y-4"
            >
              <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mx-auto text-black">
                <Calendar className="w-8 h-8" />
              </div>
              <p className="font-sans text-base font-semibold text-black">
                Showing Requested Successfully
              </p>
              <p className="font-sans text-sm text-neutral-500 max-w-md mx-auto">
                We have received your requested date. An investment analyst will call you shortly to coordinate arrival details.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-left">
              <div className="relative">
                <span className="absolute inset-y-0 left-5 flex items-center text-neutral-400">
                  <User className="w-4 h-4" />
                </span>
                <input
                  type="text"
                  placeholder="Your Name"
                  {...register('name')}
                  className={`w-full bg-[#F7F7F5] border ${errors.name ? 'border-red-400' : 'border-transparent'} rounded-full py-3.5 pl-12 pr-6 text-sm font-sans placeholder-neutral-400 focus:outline-none focus:border-black transition-colors`}
                />
                {errors.name && (
                  <p className="text-xs text-red-500 font-sans mt-1 ml-5">{errors.name.message}</p>
                )}
              </div>

              <div className="relative">
                <span className="absolute inset-y-0 left-5 flex items-center text-neutral-400">
                  <Mail className="w-4 h-4" />
                </span>
                <input
                  type="email"
                  placeholder="Email Address"
                  {...register('email')}
                  className={`w-full bg-[#F7F7F5] border ${errors.email ? 'border-red-400' : 'border-transparent'} rounded-full py-3.5 pl-12 pr-6 text-sm font-sans placeholder-neutral-400 focus:outline-none focus:border-black transition-colors`}
                />
                {errors.email && (
                  <p className="text-xs text-red-500 font-sans mt-1 ml-5">{errors.email.message}</p>
                )}
              </div>

              <div className="relative">
                <span className="absolute inset-y-0 left-5 flex items-center text-neutral-400">
                  <Phone className="w-4 h-4" />
                </span>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  {...register('phone')}
                  className={`w-full bg-[#F7F7F5] border ${errors.phone ? 'border-red-400' : 'border-transparent'} rounded-full py-3.5 pl-12 pr-6 text-sm font-sans placeholder-neutral-400 focus:outline-none focus:border-black transition-colors`}
                />
                {errors.phone && (
                  <p className="text-xs text-red-500 font-sans mt-1 ml-5">{errors.phone.message}</p>
                )}
              </div>

              <div className="relative">
                <span className="absolute inset-y-0 left-5 flex items-center text-neutral-400">
                  <Calendar className="w-4 h-4" />
                </span>
                <input
                  type="date"
                  {...register('date')}
                  className={`w-full bg-[#F7F7F5] border ${errors.date ? 'border-red-400' : 'border-transparent'} rounded-full py-3.5 pl-12 pr-6 text-sm font-sans text-neutral-500 placeholder-neutral-400 focus:outline-none focus:border-black transition-colors`}
                />
                {errors.date && (
                  <p className="text-xs text-red-500 font-sans mt-1 ml-5">{errors.date.message}</p>
                )}
              </div>

              <div>
                <textarea
                  placeholder="Additional inquiry details..."
                  rows={3}
                  {...register('notes')}
                  className="w-full bg-[#F7F7F5] border border-transparent rounded-2xl py-3 px-5 text-sm font-sans placeholder-neutral-400 focus:outline-none focus:border-black transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white hover:bg-neutral-900 transition-colors font-sans text-xs font-semibold uppercase tracking-widest py-3.5 rounded-full cursor-pointer shadow-md"
              >
                REQUEST CONFIRMATION
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}

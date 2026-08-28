import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'motion/react';
import { Phone, MapPin, Mail, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters")
});

type ContactFormInputs = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactFormSchema)
  });

  const onSubmit = (data: ContactFormInputs) => {
    console.log("Contact form submitted:", data);
    setIsSuccess(true);
  };

  return (
    <div id="contact-page-container" className="pt-24 min-h-screen bg-[#F7F7F5]">
      {/* Title */}
      <section className="py-16 px-6 md:px-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="font-cormorant text-5xl md:text-7xl font-medium tracking-normal text-black leading-tight">
            Let's talk about your next transaction.
          </h1>
        </motion.div>
      </section>

      {/* 50/50 Content Block */}
      <section className="py-12 px-6 md:px-10 max-w-7xl mx-auto pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left: Contact Form (pill inputs, black submit) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-white p-8 md:p-12 rounded-2xl shadow-[0_12px_32px_rgba(0,0,0,0.04)]"
          >
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 space-y-4"
              >
                <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mx-auto text-black">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-cormorant text-2xl font-medium text-black">
                  Message Sent Successfully
                </h3>
                <p className="font-sans text-sm text-neutral-500 max-w-sm mx-auto leading-relaxed">
                  Thank you for contacting Byrne Company. A principal broker will review your portfolio notes and reach out shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    {...register('name')}
                    className={`w-full bg-[#F7F7F5] border ${errors.name ? 'border-red-400' : 'border-transparent'} rounded-full py-3.5 px-6 text-sm font-sans placeholder-neutral-400 focus:outline-none focus:border-black transition-colors`}
                  />
                  {errors.name && (
                    <p className="text-xs text-red-500 font-sans mt-1 ml-5">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    {...register('email')}
                    className={`w-full bg-[#F7F7F5] border ${errors.email ? 'border-red-400' : 'border-transparent'} rounded-full py-3.5 px-6 text-sm font-sans placeholder-neutral-400 focus:outline-none focus:border-black transition-colors`}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-500 font-sans mt-1 ml-5">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number (Optional)"
                    {...register('phone')}
                    className="w-full bg-[#F7F7F5] border border-transparent rounded-full py-3.5 px-6 text-sm font-sans placeholder-neutral-400 focus:outline-none focus:border-black transition-colors"
                  />
                </div>

                <div>
                  <textarea
                    rows={4}
                    placeholder="Briefly describe your investment objectives or listings inquiry..."
                    {...register('message')}
                    className={`w-full bg-[#F7F7F5] border ${errors.message ? 'border-red-400' : 'border-transparent'} rounded-2xl py-3.5 px-6 text-sm font-sans placeholder-neutral-400 focus:outline-none focus:border-black transition-colors`}
                  />
                  {errors.message && (
                    <p className="text-xs text-red-500 font-sans mt-1 ml-5">{errors.message.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-black text-white hover:bg-neutral-900 transition-colors font-sans text-xs font-semibold uppercase tracking-widest py-3.5 rounded-full cursor-pointer shadow-md"
                >
                  SEND SECURE MESSAGE
                </button>
              </form>
            )}
          </motion.div>

          {/* Right: Address and phone details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col justify-center space-y-10"
          >
            <div className="space-y-2">
              <span className="font-sans text-xs font-bold uppercase tracking-widest text-neutral-400 block">
                Corporate Headquarters
              </span>
              <p className="font-sans text-base text-neutral-600 max-w-sm leading-relaxed">
                We coordinate nationwide retail asset operations from our headquarters in Dallas.
              </p>
            </div>

            <div className="space-y-6">
              {/* Phone info */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white rounded-full shadow-sm text-black">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-sans text-xs font-bold uppercase tracking-widest text-neutral-400 block mb-0.5">
                    Phone Numbers
                  </span>
                  <a href="tel:2143436996" className="font-sans text-lg font-medium text-black hover:underline">
                    214.343.6996
                  </a>
                </div>
              </div>

              {/* Address info */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white rounded-full shadow-sm text-black">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-sans text-xs font-bold uppercase tracking-widest text-neutral-400 block mb-0.5">
                    Office Address
                  </span>
                  <span className="font-sans text-lg font-medium text-black">
                    Dallas, Texas
                  </span>
                </div>
              </div>

              {/* Email info */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white rounded-full shadow-sm text-black">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-sans text-xs font-bold uppercase tracking-widest text-neutral-400 block mb-0.5">
                    General Inquiries
                  </span>
                  <a href="mailto:info@byrnecompany.com" className="font-sans text-lg font-medium text-black hover:underline">
                    info@byrnecompany.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

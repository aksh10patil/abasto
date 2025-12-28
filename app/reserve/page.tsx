'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Playfair_Display, Inter } from 'next/font/google';
import Navbar from '@/components/main/Navbar';
import Footer from '@/components/main/Footer';

// --- Fonts ---
const playfair = Playfair_Display({ subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });

// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } 
  }
};

export default function ReservePage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  // Simple form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    requests: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // SIMULATION: Connect this to Formspree/EmailJS in production
    setTimeout(() => {
      setFormStatus('success');
    }, 2000);
  };

  return (
    <div>
        <Navbar />

    <main className="min-h-screen bg-[#0c0c0c] text-[#e5e5e5] flex flex-col md:flex-row selection:bg-white/20 selection:text-white">
      
      {/* --- LEFT: Visual Atmosphere (Hidden on mobile) --- */}
      <div className="hidden md:block w-1/2 relative h-screen sticky top-0">
        <Image
          src="/landing/landing-3.jpg"
          fill
          className="object-cover opacity-80"
          priority
          alt="Reserve image"
        />
        <div className="absolute inset-0 bg-black/30" />
        
        {/* Quote overlay */}
        <div className="absolute bottom-12 left-12 max-w-md">
          <p className={`text-3xl text-white italic leading-tight ${playfair.className}`}>
            "We do not sell food. <br/> We serve time, attention, and memory."
          </p>
        </div>
      </div>

      {/* --- RIGHT: The Form --- */}
      <div className="w-full md:w-1/2 min-h-screen flex flex-col justify-center px-8 md:px-24 py-24 bg-[#0a0a0a]">
        

        <div className="max-w-md w-full mx-auto">
          
          <AnimatePresence mode="wait">
            {formStatus === 'success' ? (
              // --- Success State ---
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center py-20"
              >
                <div className="mb-6 text-white text-5xl">✦</div>
                <h2 className={`text-3xl md:text-4xl italic text-white mb-4 ${playfair.className}`}>
                  Request Received.
                </h2>
                <p className={`text-[#888] font-light leading-relaxed mb-8 ${inter.className}`}>
                  Thank you, {formData.name}. <br/>
                  Our concierge will review availability for {formData.date} and contact you shortly at {formData.email} to confirm your table.
                </p>
                <a href="/" className={`inline-block border-b border-white text-white pb-1 text-sm tracking-widest uppercase hover:opacity-70 transition-opacity ${inter.className}`}>
                  Back to Home
                </a>
              </motion.div>
            ) : (
              // --- Form State ---
              <motion.div 
                key="form"
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, y: -20 }}
                variants={fadeInUp}
              >
                <span className={`block text-xs text-[#666] tracking-[0.2em] uppercase mb-6 ${inter.className}`}>
                  Reservations
                </span>
                <h1 className={`text-4xl md:text-5xl text-white italic mb-12 ${playfair.className}`}>
                  Secure a Table
                </h1>

                <form onSubmit={handleSubmit} className="space-y-8">
                  
                  {/* Row 1: Date & Guests */}
                  <div className="grid grid-cols-2 gap-8">
                    <div className="flex flex-col">
                      <label className={`text-[10px] uppercase tracking-widest text-[#666] mb-2 ${inter.className}`}>Date</label>
                      <input 
                        type="date" 
                        name="date"
                        required
                        onChange={handleChange}
                        className={`bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-white transition-colors ${inter.className}`}
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className={`text-[10px] uppercase tracking-widest text-[#666] mb-2 ${inter.className}`}>Guests</label>
                      <select 
                        name="guests"
                        onChange={handleChange}
                        className={`bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-white transition-colors [&>option]:bg-black ${inter.className}`}
                      >
                        {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n} Guests</option>)}
                        <option value="large">8+ (Large Party)</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 2: Time */}
                  <div className="flex flex-col">
                     <label className={`text-[10px] uppercase tracking-widest text-[#666] mb-2 ${inter.className}`}>Preferred Time</label>
                     <div className="grid grid-cols-3 gap-4">
                       {/* Custom Radio Button Styling */}
                       {['18:00', '19:30', '20:00', '20:30', '21:00', '21:30'].map((time) => (
                         <label key={time} className="cursor-pointer">
                           <input 
                              type="radio" 
                              name="time" 
                              value={time} 
                              required
                              onChange={handleChange}
                              className="peer sr-only" 
                            />
                           <div className={`text-center py-2 border border-white/10 text-sm text-[#888] peer-checked:bg-white peer-checked:text-black peer-checked:border-white hover:border-white/40 transition-all ${inter.className}`}>
                             {time}
                           </div>
                         </label>
                       ))}
                     </div>
                  </div>

                  {/* Row 3: Personal Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col">
                      <label className={`text-[10px] uppercase tracking-widest text-[#666] mb-2 ${inter.className}`}>Full Name</label>
                      <input 
                        type="text" 
                        name="name"
                        required
                        placeholder="John Doe"
                        onChange={handleChange}
                        className={`bg-transparent border-b border-white/20 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-white transition-colors ${inter.className}`}
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className={`text-[10px] uppercase tracking-widest text-[#666] mb-2 ${inter.className}`}>Phone</label>
                      <input 
                        type="tel" 
                        name="phone"
                        required
                        placeholder="+1 (555) 000-0000"
                        onChange={handleChange}
                        className={`bg-transparent border-b border-white/20 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-white transition-colors ${inter.className}`}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <label className={`text-[10px] uppercase tracking-widest text-[#666] mb-2 ${inter.className}`}>Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      placeholder="john@example.com"
                      onChange={handleChange}
                      className={`bg-transparent border-b border-white/20 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-white transition-colors ${inter.className}`}
                    />
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className={`w-full bg-white text-black py-4 uppercase tracking-[0.2em] hover:bg-[#d4d4d4] transition-colors disabled:opacity-50 mt-8 ${inter.className}`}
                  >
                    {formStatus === 'submitting' ? 'Processing...' : 'Request Reservation'}
                  </button>

                  {/* Policy Footer */}
                  <p className={`text-[10px] text-[#444] leading-relaxed text-center mt-6 ${inter.className}`}>
                    Note: This is a request form. Reservations are confirmed only upon receipt of a confirmation email or call. We hold tables for 15 minutes past booking time.
                  </p>

                </form>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </main>
    
    <Footer />
        </div>
  );
}
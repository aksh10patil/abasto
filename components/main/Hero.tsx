'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Playfair_Display, Inter } from 'next/font/google';

// --- Fonts ---
const playfair = Playfair_Display({ subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });

// --- CONFIGURATION ---
const MAIN_SLIDE_DURATION = 6000;   // Background changes every 6s
const KITCHEN_FEED_DURATION = 8000; // Left feed changes every 4s (faster, feels "live")

// --- DATA: Main Background Slides ---
const HERO_SLIDES = [
  {
    id: 1,
    src: "/landing/landing-1.jpg", 
    alt: "Dark textural restaurant interior",
    label: "The Dining Room"
  },
  {
    id: 2,
    src: "/landing/landing-2.jpg",
    alt: "Smoked ribs on dark plate",
    label: "Smoked Ribs & Ash"
  },
  {
    id: 3,
    src: "/landing/landing-3.jpg",
    alt: "Cocktail with smoke",
    label: "The Old Fashioned"
  },
];

// --- DATA: Live Kitchen Feed (Left Side) ---
// Use images of chefs hands, plating, or raw ingredients here
const KITCHEN_UPDATES = [
  {
    id: 'k1',
    src: "/landing/food-1.jpg", 
    status: "Plating Service",
    dish: "Wild Mushroom Risotto",
    time: "Now"
  },
  {
    id: 'k2',
    src: "/landing/food-2.jpg", 
    status: "Resting",
    dish: "Wagyu A5 Strip",
    time: "2m ago"
  },
  {
    id: 'k3',
    src: "/landing/food-3.jpg", 
    status: "Prep Station",
    dish: "Hand-rolled Agnolotti",
    time: "5m ago"
  },
];

// --- Animation Variants ---
const heroTextReveal = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] as const } 
  }
};

const bgImageVariant = {
  initial: { opacity: 0, scale: 1.1 },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 2.5, ease: "easeOut" as const }
  },
  exit: { 
    opacity: 0, 
    transition: { duration: 1.5, ease: "easeIn" as const }
  }
};

const feedVariant = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
  exit: { opacity: 0, x: 20, transition: { duration: 0.3, ease: "easeIn" as const  } }
};

export default function Hero() {
  const [bgIndex, setBgIndex] = useState(0);
  const [feedIndex, setFeedIndex] = useState(0);

  // Timer 1: Background Rotation
  useEffect(() => {
    const bgTimer = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, MAIN_SLIDE_DURATION);
    return () => clearInterval(bgTimer);
  }, []);

  // Timer 2: Kitchen Feed Rotation (Independent)
  useEffect(() => {
    const feedTimer = setInterval(() => {
      setFeedIndex((prev) => (prev + 1) % KITCHEN_UPDATES.length);
    }, KITCHEN_FEED_DURATION);
    return () => clearInterval(feedTimer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[#0a0a0a]">
      
      {/* --- 1. Background Slideshow --- */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={HERO_SLIDES[bgIndex].id}
            className="absolute inset-0 w-full h-full"
            variants={bgImageVariant}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Image
              src={HERO_SLIDES[bgIndex].src}
              alt={HERO_SLIDES[bgIndex].alt}
              fill
              className="object-cover opacity-60" 
              priority
            />
            <div className="absolute inset-0 bg-black/40" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* --- 2. Main Center Content --- */}
      <motion.div 
        className="relative z-20 text-center px-4"
        initial="hidden"
        animate="visible"
        variants={heroTextReveal}
      >
        <h2 className={`text-xs md:text-sm tracking-[0.3em] text-white/70 mb-6 uppercase ${inter.className}`}>
          Est. 1990 — Reimagined 2025
        </h2>
        <h1 className={`text-5xl md:text-7xl lg:text-8xl text-[#f0f0f0] leading-tight ${playfair.className}`}>
          Taste the <br /> 
          <span className="italic font-light opacity-90">Silence.</span>
        </h1>
        <div className="mt-12">
          <button className={`text-xs md:text-sm tracking-[0.2em] text-white border-b border-white/30 pb-2 hover:border-white transition-all duration-700 uppercase ${inter.className}`}>
            Book a Table
          </button>
        </div>
      </motion.div>

      {/* --- 3. LEFT SIDE: Live Kitchen Feed --- */}
      <div className="absolute bottom-12 left-12 z-20 hidden md:block w-64">
        <div className="flex items-center gap-2 mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className={`text-[10px] text-white/50 tracking-widest uppercase ${inter.className}`}>
              Kitchen Live
            </span>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={KITCHEN_UPDATES[feedIndex].id}
            variants={feedVariant}
            initial="initial"
            animate="animate"
            exit="exit"
            className="flex items-center gap-4 bg-black/20 backdrop-blur-md border border-white/5 p-3 rounded-sm"
          >
            {/* Thumbnail */}
            <div className="relative w-12 h-12 overflow-hidden flex-shrink-0 border border-white/10">
              <Image 
                src={KITCHEN_UPDATES[feedIndex].src} 
                alt="Kitchen Prep"
                fill
                className="object-cover"
              />
            </div>

            {/* Info */}
            <div className="flex flex-col">
               <span className={`text-[9px] uppercase tracking-wider text-green-400 mb-1 ${inter.className}`}>
                 {KITCHEN_UPDATES[feedIndex].status}
               </span>
               <span className={`text-sm text-white font-serif italic leading-none ${playfair.className}`}>
                 {KITCHEN_UPDATES[feedIndex].dish}
               </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* --- 4. RIGHT SIDE: Current Dish Indicator --- */}
      <div className="absolute bottom-12 right-12 z-20 hidden md:block">
        <AnimatePresence mode="wait">
          <motion.div
            key={bgIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="text-right"
          >
            <span className={`block text-[10px] text-white/40 tracking-widest uppercase mb-1 ${inter.className}`}>
              Ambience
            </span>
            <span className={`text-sm text-white/90 italic ${playfair.className}`}>
              0{bgIndex + 1} — {HERO_SLIDES[bgIndex].label}
            </span>
            {/* Progress Bar */}
            <motion.div 
              className="h-[1px] bg-white/20 w-full mt-3 origin-left"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: MAIN_SLIDE_DURATION / 1000, ease: "linear" }}
            />
          </motion.div>
        </AnimatePresence>
      </div>

    </section>
  );
}
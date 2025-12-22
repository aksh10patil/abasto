'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Playfair_Display, Inter } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });

// --- Animation Variants ---

// 1. The Container orchestrates the timing
const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Delay between each line
      delayChildren: 0.2
    }
  }
};

// 2. The "Focusing Lens" effect for text
const blurReveal = {
  hidden: { 
    opacity: 0, 
    y: 20, 
    filter: 'blur(10px)' // Starts blurry
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: 'blur(0px)', // Becomes sharp
    transition: { 
      duration: 1.2, 
      ease: [0.25, 0.4, 0.25, 1] as const 
    }
  }
};

// 3. The vertical line growing
const lineGrow = {
  hidden: { scaleY: 0, opacity: 0 },
  visible: { 
    scaleY: 1, 
    opacity: 0.4,
    transition: { duration: 1.5, ease: "easeOut" as const } 
  }
};

export default function Philosophy() {
  // Parallax hook: The background glow will move slightly slower than scroll
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const yBackground = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section ref={ref} className="relative py-48 md:py-64 bg-[#0c0c0c] text-[#e5e5e5] px-6 overflow-hidden">
      
      {/* --- Ambient Background Glow (Unique Touch) --- */}
      {/* This creates a subtle 'breathing' light behind the text */}
      <motion.div 
        style={{ y: yBackground }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.03] rounded-full blur-[120px] pointer-events-none z-0"
        animate={{ 
          scale: [1, 1.1, 1], 
          opacity: [0.3, 0.5, 0.3] 
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" as const 
        }}
      />

      <motion.div 
        className="relative z-10 max-w-2xl mx-auto text-center flex flex-col items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }} // Trigger a bit earlier
        variants={containerVariant}
      >
        {/* Label */}
        <motion.span 
          variants={blurReveal}
          className={`block text-xs tracking-[0.3em] text-[#666] mb-12 uppercase ${inter.className}`}
        >
          The Philosophy
        </motion.span>

        {/* Vertical Decorative Line */}
        <motion.div 
          variants={lineGrow}
          className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white/30 to-transparent mb-12 origin-top"
        />

        {/* Main Text - Broken into semantic lines for the stagger effect */}
        <h2 className={`text-3xl md:text-5xl leading-[1.4] ${playfair.className} text-[#d4d4d4]`}>
          <motion.div variants={blurReveal} className="mb-2">
            We believe in the quiet
          </motion.div>
          <motion.div variants={blurReveal} className="mb-2 text-[#f0f0f0]">
            authority of ingredients.
          </motion.div>
          <motion.div variants={blurReveal} className="mb-8 opacity-80">
            A return to fire, earth, and patience.
          </motion.div>
        </h2>

        {/* The "Pause in Time" Finale */}
        <motion.p 
          variants={blurReveal}
          className="relative inline-block mt-8"
        >
          <span className={`text-lg md:text-xl opacity-60 italic font-light ${playfair.className}`}>
            "Dining is not just consumption; it is a pause in time."
          </span>
          
          {/* Subtle underline drawing animation */}
          <motion.span 
            className="absolute -bottom-4 left-1/2 -translate-x-1/2 h-[1px] bg-white/20"
            initial={{ width: 0 }}
            whileInView={{ width: "40%" }}
            transition={{ delay: 1.5, duration: 1.5 }}
          />
        </motion.p>

      </motion.div>
    </section>
  );
}
'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Playfair_Display, Inter } from 'next/font/google';
import SocialJournal from '@/components/SocialJournal';

// --- Typography Setup ---
// Loading fonts via Next.js for optimal performance
const playfair = Playfair_Display({ 
  subsets: ['latin'], 
  weight: ['400', '500'],
  variable: '--font-serif'
});

const inter = Inter({ 
  subsets: ['latin'], 
  weight: ['300', '400'], 
  variable: '--font-sans'
});

// --- Animation Variants (Strict & Subtle) ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } // Custom cubic-bezier for "luxury" feel
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const imageReveal = {
  hidden: { opacity: 0, scale: 1.05 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 1.5, ease: "easeOut" }
  }
};

// --- Components ---

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-6 mix-blend-difference text-white/90">
    <div className={`text-sm tracking-[0.2em] uppercase ${inter.className}`}>
      ABASTO
    </div>
    <div className="hidden md:flex gap-12 text-xs tracking-[0.15em] font-light">
      <span className="cursor-pointer hover:text-white/70 transition-colors">Philosophy</span>
      <span className="cursor-pointer hover:text-white/70 transition-colors">Menu</span>
      <span className="cursor-pointer hover:text-white/70 transition-colors">Spaces</span>
    </div>
    <button className={`text-xs border border-white/30 px-6 py-3 uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-500 ${inter.className}`}>
      Reserve
    </button>
  </nav>
);

const Hero = () => (
  <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[#0a0a0a]">
    {/* Dark Overlay for Readability */}
    <div className="absolute inset-0 bg-black/40 z-10" />
    
    {/* Background Image Placeholder - Replaced with actual assets in production */}
    <motion.div 
      className="absolute inset-0 z-0"
      initial="hidden"
      animate="visible"
      variants={imageReveal}
    >
      <Image
        src="/landing.jpg"
        alt="Dark textural restaurant interior"
        fill
        className="object-cover opacity-80"
        priority
      />
    </motion.div>

    <motion.div 
      className="relative z-20 text-center px-4"
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
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
  </section>
);

const Philosophy = () => (
  <section className="py-32 md:py-48 bg-[#0c0c0c] text-[#e5e5e5] px-6">
    <motion.div 
      className="max-w-2xl mx-auto text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeInUp}
    >
      <span className={`block text-xs tracking-[0.2em] text-[#888] mb-8 uppercase ${inter.className}`}>
        The Philosophy
      </span>
      <p className={`text-2xl md:text-4xl leading-[1.6] ${playfair.className} text-[#d4d4d4]`}>
        We believe in the quiet authority of ingredients. 
        <br />
        A return to fire, earth, and patience. 
        <br />
        <span className="opacity-60 italic">Dining is not just consumption; it is a pause in time.</span>
      </p>
    </motion.div>
  </section>
);

const MenuPreview = () => (
  <section className="py-24 bg-[#0a0a0a] border-t border-white/5 px-6 md:px-12">
    <div className="max-w-5xl mx-auto">
      <motion.div 
        className="mb-20 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h3 className={`text-4xl md:text-5xl ${playfair.className} text-white mb-4`}>
          The Edit
        </h3>
        <p className={`text-sm text-[#666] tracking-widest uppercase ${inter.className}`}>
          Season 04
        </p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-16"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <MenuCategory title="Antipasti" items={["Cured Heritage Pork", "Burrata & Ash", "Wild Fungi Carpaccio"]} />
        <MenuCategory title="Primi" items={["Saffron Risotto", "Hand-cut Tagliolini", "Black Truffle Gnocchi"]} />
        <MenuCategory title="Fire" items={["Aged Ribeye", "Whole Branzino", "Roasted Lamb Saddle"]} />
        <MenuCategory title="Cellar" items={["Old World Reds", "Biodynamic Whites", "Reserve Vintage"]} />
      </motion.div>
      
      <div className="mt-24 text-center">
        <a href="#" className={`inline-block text-xs tracking-[0.2em] uppercase text-[#888] hover:text-white transition-colors duration-500 border border-white/10 px-8 py-4 ${inter.className}`}>
          View Full Menu
        </a>
      </div>
    </div>
  </section>
);

const MenuCategory = ({ title, items }: { title: string, items: string[] }) => (
  <motion.div variants={fadeInUp} className="flex flex-col items-center md:items-start">
    <h4 className={`text-2xl text-[#c0c0c0] mb-6 italic ${playfair.className}`}>{title}</h4>
    <ul className={`space-y-4 text-center md:text-left ${inter.className}`}>
      {items.map((item, i) => (
        <li key={i} className="text-sm md:text-base text-[#888] font-light tracking-wide">
          {item}
        </li>
      ))}
    </ul>
  </motion.div>
);

const Atmosphere = () => (
  <section className="py-0 bg-[#0c0c0c]">
    <div className="grid grid-cols-1 md:grid-cols-2 h-[80vh] md:h-[600px]">
      <div className="relative h-full w-full overflow-hidden group">
        <Image 
          src="/room.jpg"
          alt="Plating Detail"
          fill
          className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-105 opacity-80 group-hover:opacity-100"
        />
        <div className="absolute bottom-8 left-8 text-white z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
           <span className={`text-xs tracking-widest uppercase ${inter.className}`}>Craft</span>
        </div>
      </div>
      <div className="bg-[#111] flex flex-col justify-center items-center p-12 text-center">
        <h3 className={`text-3xl md:text-4xl text-[#e5e5e5] mb-6 ${playfair.className}`}>
          The Room
        </h3>
        <p className={`text-[#888] max-w-md leading-relaxed font-light ${inter.className}`}>
          Designed for privacy and conversation. Shadows, linen, and the soft clink of crystal. A space outside of the city's tempo.
        </p>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-[#050505] text-[#999] py-24 px-6 border-t border-white/5">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-16">
      
      <div className="space-y-6">
        <h5 className={`text-white text-lg tracking-widest uppercase mb-8 ${inter.className}`}>ABASTO</h5>
        <div className={`space-y-2 text-sm font-light ${inter.className}`}>
          <p>Via San Gottardo 32, 6596</p>
          <p>Gordola, Svizzera</p>
        </div>
        <div className={`space-y-2 text-sm font-light ${inter.className} pt-4`}>
          <p>Tue — Sun: 17:30 — Late</p>
          <p>Mon: Closed</p>
        </div>
      </div>

      <div className="flex flex-col items-start md:items-end">
        <a href="mailto:reservations@ABASTO.com" className={`text-xl md:text-2xl text-[#d4d4d4] hover:text-white transition-colors mb-6 ${playfair.className} italic`}>
          reservations@abasto.com
        </a>
        <p className={`text-xs tracking-widest uppercase opacity-40 ${inter.className}`}>
          © 2025 ABASTO Restaurant. All Rights Reserved.
        </p>
      </div>

    </div>
  </footer>
);

// --- Main Page Component ---

export default function LandingPage() {
  return (
    <main className={`bg-[#0c0c0c] min-h-screen w-full selection:bg-white/20 selection:text-white ${playfair.variable} ${inter.variable}`}>
      <Navbar />
      <Hero />
      <Philosophy />
      <MenuPreview />
      <SocialJournal />
      <Atmosphere />
      <Footer />
    </main>
  );
}
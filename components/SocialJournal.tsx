'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// --- Icons ---
const HeartIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
);

const PlayIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M8 5v14l11-7z" /></svg>
);

// --- Mock Data ---
const SOCIAL_POSTS = [
  {
    id: 1,
    type: 'video',
    src: '/video1.mp4',
    caption: "The final moments before service begins.",
    likes: "1.4k",
    comments: 52,
    featuredComment: "@culinaryreview: You can feel the discipline behind the dish."
  },
  {
    id: 2,
    type: 'video',
    src: '/video3.mp4',
    caption: "Every movement intentional. Technique refined through repetition.",
    likes: "980",
    comments: 34,
    featuredComment: "@kitchenstories: Calm, focused, and precise."
  },
  {
    id: 3,
    type: 'video',
    src: '/video4.mp4',
    caption: "Always interacting with the people who share the love for food",
    likes: "1.9k",
    comments: 61,
    featuredComment: "@chefs_eye: This is where quality is decided."
  },
  {
    id: 4,
    type: 'image',
    src: '/img1.jpg',
    caption: "An atmosphere shaped by light, texture, and time.",
    likes: "1.1k",
    comments: 19,
    featuredComment: "@interiornotes: Understated and beautifully restrained."
  },
  {
    id: 5,
    type: 'image',
    src: '/img3.jpg',
    caption: "Smoke, oak, and patience—nothing rushed.",
    likes: "860",
    comments: 14,
    featuredComment: "@foodandfire: You can almost smell this."
  },
  {
    id: 6,
    type: 'image',
    src: '/img2.jpg',
    caption: "Where craft meets quiet confidence.",
    likes: "905",
    comments: 17,
    featuredComment: "@modernpalate: Effortless elegance."
  },
  {
    id: 7,
    type: 'image',
    src: '/img.jpg',
    caption: "A space designed for conversation, not distraction.",
    likes: "2.6k",
    comments: 92,
    featuredComment: "@designjournal: Lighting done right."
  },
  {
    id: 8,
    type: 'video',
    src: '/video2.mp4',
    caption: "A poured slowly, as it should be.",
    likes: "720",
    comments: 28,
    featuredComment: "@sommelierlife: A thoughtful choice."
  }
];


// Separate data for rendering
const videos = SOCIAL_POSTS.filter(p => p.type === 'video');
const images = SOCIAL_POSTS.filter(p => p.type === 'image');

// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

export default function SocialJournal() {
  return (
    <section className="py-24 bg-[#080808] border-t border-white/5 text-[#e5e5e5]">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Main Header */}
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-white/10 pb-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div>
            <span className="block text-xs text-[#666] tracking-[0.2em] uppercase mb-2 font-sans">
              The Journal
            </span>
            <h3 className="text-3xl md:text-4xl font-serif italic text-white">
              @abasto_osteria_rioplatense_
            </h3>
          </div>
          <div className="mt-6 md:mt-0">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs tracking-widest uppercase border border-white/20 px-6 py-3 hover:bg-white hover:text-black transition-all duration-500 font-sans"
            >
              Follow Us
            </a>
          </div>
        </motion.div>

        {/* --- SECTION 1: IN MOTION (Vertical Videos) --- */}
        <div className="mb-24">
          <motion.h4 
            className="text-sm font-light text-[#888] tracking-[0.15em] uppercase mb-8 ml-1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            In Motion
          </motion.h4>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {videos.map((post, index) => (
              <motion.div
                key={post.id}
                className="relative aspect-[9/16] group cursor-pointer overflow-hidden bg-[#111]"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                {/* Video Player */}
                <video
                  src={post.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="object-cover w-full h-full opacity-70 transition-opacity duration-700 group-hover:opacity-100"
                />

                {/* "Play" Badge (Upper Right) */}
                <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md px-3 py-1 flex items-center gap-2 rounded-full border border-white/10">
                   <PlayIcon />
                   <span className="text-[9px] uppercase tracking-widest text-white">Reel</span>
                </div>

                {/* Overlay Content (Bottom) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                
                <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-sm font-serif italic text-white/90 line-clamp-2 mb-2">
                    "{post.caption}"
                  </p>
                  <div className="flex items-center gap-3 text-xs text-white/60 font-sans">
                     <span className="flex items-center gap-1"><HeartIcon /> {post.likes}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- SECTION 2: CAPTURED (Stills/Photos) --- */}
        <div>
          <motion.h4 
            className="text-sm font-light text-[#888] tracking-[0.15em] uppercase mb-8 ml-1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Captured Moments
          </motion.h4>

          {/* Photos Grid - Uses different aspect ratio (Square or 4:5) */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((post, index) => (
              <motion.div
                key={post.id}
                className="relative aspect-square group cursor-pointer overflow-hidden bg-[#111]"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                 <Image
                    src={post.src}
                    alt={post.caption}
                    fill
                    className="object-cover opacity-80 transition-transform duration-700 ease-out group-hover:scale-105 group-hover:opacity-100"
                  />

                  {/* Minimal Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center px-4 transform scale-95 group-hover:scale-100 transition-transform duration-300">
                      <p className="text-xs font-serif italic text-white mb-2">"{post.caption}"</p>
                      <div className="flex justify-center gap-3 text-white/70">
                         <HeartIcon />
                      </div>
                    </div>
                  </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
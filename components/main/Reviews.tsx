'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Playfair_Display, Inter } from 'next/font/google';

// --- Fonts ---
const playfair = Playfair_Display({ subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });

// --- Icons ---
const StarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="text-amber-400">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const HeartIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="text-rose-500">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

const CommentIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="text-blue-400">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

// --- Mock Data ---
const REVIEWS = [
  {
    id: 1,
    name: "Elena R.",
    role: "Local Guide",
    image: "/landing/people-1.jpg",
    rating: 5,
    text: "The silence here is loud. It forces you to focus on the smoke, the texture, the wine. A masterclass in atmosphere.",
    likes: 128,
    comments: 14,
    date: "2 days ago"
  },
  {
    id: 2,
    name: "Marcus T.",
    role: "Sommelier",
    image: "/landing/people-2.jpg",
    rating: 5,
    text: "Their Barolo selection is impeccable. The staff moves like ghosts—present only when you need them. Pure elegance.",
    likes: 342,
    comments: 42,
    date: "1 week ago"
  },
  {
    id: 3,
    name: "Adam Jenkins",
    role: "Food Critic",
    image: "/landing/people-3.jpg",
    rating: 5,
    text: "I haven't tasted a risotto this honest since I was in Milan really impressed. No gimmicks, just perfect execution.",
    likes: 890,
    comments: 112,
    date: "3 days ago"
  }
];

// --- Animation Variants ---
const containerVar = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const cardVar = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } 
  }
};

export default function Reviews() {
  return (
    <section className="py-32 bg-[#0a0a0a] text-[#e5e5e5] px-6 border-t border-white/5">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Header */}
        <div className="text-center mb-24">
          <span className={`block text-xs tracking-[0.2em] text-[#666] mb-4 uppercase ${inter.className}`}>
            Impressions
          </span>
          <h3 className={`text-4xl md:text-5xl italic ${playfair.className} text-white`}>
            Guest Book
          </h3>
        </div>

        {/* Reviews Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVar}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {REVIEWS.map((review) => (
            <motion.div 
              key={review.id} 
              variants={cardVar}
              className="bg-[#111] p-8 md:p-10 border border-white/5 relative group hover:border-white/10 transition-colors duration-500"
            >
              
              {/* Top Row: User & Rating */}
              <div className="flex justify-between items-start mb-8">
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 overflow-hidden rounded-full border border-white/10">
                    <Image 
                      src={review.image} 
                      alt={review.name} 
                      fill 
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className={`text-sm text-white tracking-wide ${playfair.className}`}>
                      {review.name}
                    </h4>
                    <span className={`text-[10px] text-[#666] uppercase tracking-wider ${inter.className}`}>
                      {review.role}
                    </span>
                  </div>
                </div>
                {/* Gold Stars */}
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
              </div>

              {/* Review Text */}
              <p className={`text-lg text-[#ccc] font-light leading-relaxed mb-10 ${playfair.className}`}>
                "{review.text}"
              </p>

              {/* Bottom Row: Colorful Social Metrics */}
              <div className="flex items-center justify-between border-t border-white/5 pt-6 mt-auto">
                <div className="flex gap-6">
                  
                  {/* Likes (Red/Rose) */}
                  <div className="flex items-center gap-2 group cursor-pointer">
                    <div className="p-2 bg-rose-500/10 rounded-full group-hover:bg-rose-500/20 transition-colors">
                      <HeartIcon />
                    </div>
                    <span className={`text-xs text-rose-200/80 font-medium ${inter.className}`}>
                      {review.likes}
                    </span>
                  </div>



                </div>

                {/* Date */}
                <span className={`text-[10px] text-[#444] uppercase tracking-widest ${inter.className}`}>
                  {review.date}
                </span>
              </div>

            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
"use client";


import Image from "next/image";
import { motion } from "framer-motion";
import SocialJournal from "@/components/landing/SocialJournal";
import Hero from "@/components/main/Hero";
import Philosophy from "@/components/landing/Philosophy";
import Reviews from "@/components/main/Reviews";
import Footer from "@/components/main/Footer";
import Navbar from "@/components/main/Navbar";


// --- Animation Variants (Strict & Subtle) ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] as const }, // Custom cubic-bezier for "luxury" feel
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const imageReveal = {
  hidden: { opacity: 0, scale: 1.05 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.5, ease: "easeOut" as const },
  },
};

// --- Components ---

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
        <h3
          className={`text-4xl md:text-5xl  text-white mb-4`}
        >
          The Edit
        </h3>
        <p
          className={`text-sm text-[#666] tracking-widest uppercase `}
        >
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
        <MenuCategory
          title="Antipasti"
          items={[
            "Cured Heritage Pork",
            "Burrata & Ash",
            "Wild Fungi Carpaccio",
          ]}
        />
        <MenuCategory
          title="Primi"
          items={[
            "Saffron Risotto",
            "Hand-cut Tagliolini",
            "Black Truffle Gnocchi",
          ]}
        />
        <MenuCategory
          title="Fire"
          items={["Aged Ribeye", "Whole Branzino", "Roasted Lamb Saddle"]}
        />
        <MenuCategory
          title="Cellar"
          items={["Old World Reds", "Biodynamic Whites", "Reserve Vintage"]}
        />
      </motion.div>
    </div>
  </section>
);

const MenuCategory = ({ title, items }: { title: string; items: string[] }) => (
  <motion.div
    variants={fadeInUp}
    className="flex flex-col items-center md:items-start"
  >
    <h4 className={`text-2xl text-[#c0c0c0] mb-6 italic `}>
      {title}
    </h4>
    <ul className={`space-y-4 text-center md:text-left `}>
      {items.map((item, i) => (
        <li
          key={i}
          className="text-sm md:text-base text-[#888] font-light tracking-wide"
        >
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
          src="/room.webp"
          alt="Plating Detail"
          fill
          className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-105 opacity-80 group-hover:opacity-100"
        />
        <div className="absolute bottom-8 left-8 text-white z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <span
            className={`text-xs tracking-widest uppercase `}
          >
            Craft
          </span>
        </div>
      </div>
      <div className="bg-[#111] flex flex-col justify-center items-center p-12 text-center">
        <h3
          className={`text-3xl md:text-4xl text-[#e5e5e5] mb-6 `}
        >
          The Room
        </h3>
        <p
          className={`text-[#888] max-w-md leading-relaxed font-light `}
        >
          Designed for privacy and conversation. Shadows, linen, and the soft
          clink of crystal. A space outside of the city's tempo.
        </p>
      </div>
    </div>
  </section>
);

// --- Main Page Component ---

export default function LandingPage() {
  return (
    <main
      className={`bg-[#0c0c0c] min-h-screen w-full selection:bg-white/20 selection:text-white  `}
    >
      <Navbar />
      <Hero />
      <Philosophy />
      <MenuPreview />
      <Reviews />
      <SocialJournal />
      <Atmosphere />
      <Footer />
    </main>
  );
}

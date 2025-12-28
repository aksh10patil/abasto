'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Playfair_Display, Inter } from 'next/font/google';
import Image from 'next/image';
import Navbar from '@/components/main/Navbar';
import Footer from '@/components/main/Footer';

// --- Fonts ---
const playfair = Playfair_Display({ subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });

// --- Animation Variants ---
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

// --- Menu Data Structure ---
type MenuItem = {
  name: string;
  price: string;
  description: string;
  tags?: string[]; // e.g. "GF", "V"
};

type MenuCategoryData = {
  title: string;
  subtitle: string;
  items: MenuItem[];
};

const MENU_DATA: MenuCategoryData[] = [
  {
    title: "Antipasti",
    subtitle: "To Begin",
    items: [
      { name: "Burrata & Ash", price: "24", description: "Puglian burrata, vegetable charcoal, heirloom tomato essence, basil oil." },
      { name: "Wagyu Carpaccio", price: "32", description: "A5 Miyazaki beef, truffle ponzu, pickled mustard seeds, cured yolk." },
      { name: "Charred Octopus", price: "28", description: "Spanish octopus, romesco sauce, smoked potato foam, paprika oil." },
      { name: "Wild Fungi Tart", price: "22", description: "Foraged seasonal mushrooms, thyme mascarpone, aged balsamic.", tags: ["V"] }
    ]
  },
  {
    title: "Primi",
    subtitle: "Pasta & Rice",
    items: [
      { name: "Saffron Risotto", price: "34", description: "Acquerello rice, saffron pistils, 24-month Parmigiano Reggiano, bone marrow.", tags: ["GF"] },
      { name: "Truffle Tajarin", price: "45", description: "Hand-cut egg pasta, butter emulsion, shavings of fresh black winter truffle." },
      { name: "Lobster Ravioli", price: "42", description: "Maine lobster filling, bisque reduction, tarragon, lemon zest." }
    ]
  },
  {
    title: "Secondi",
    subtitle: "Fire & Earth",
    items: [
      { name: "Smoked Duck Breast", price: "48", description: "Dry-aged duck, cherry glaze, roasted endive, parsnip purée." },
      { name: "Branzino al Sale", price: "52", description: "Whole salt-baked sea bass, fennel pollen, citrus vierge, grilled artichokes.", tags: ["GF"] },
      { name: "Bistecca Fiorentina", price: "120", description: "40oz Porterhouse (serves two), rosemary smoke, Tuscan olive oil, sea salt." }
    ]
  }
];

// --- Sub-Component: Menu Item Row ---
const MenuRow = ({ item }: { item: MenuItem }) => (
  <motion.div 
    variants={fadeUp} 
    className="group flex flex-col md:flex-row justify-between items-baseline border-b border-white/5 py-6 hover:bg-white/[0.02] transition-colors px-2"
  >
    <div className="md:max-w-xl">
      <div className="flex items-baseline gap-3 mb-2">
        <h4 className={`text-xl md:text-2xl text-[#e5e5e5] ${playfair.className}`}>
          {item.name}
        </h4>
        {item.tags?.map(tag => (
          <span key={tag} className={`text-[9px] border border-white/20 px-1 py-0.5 text-[#666] uppercase ${inter.className}`}>
            {tag}
          </span>
        ))}
      </div>
      <p className={`text-sm text-[#888] font-light leading-relaxed ${inter.className}`}>
        {item.description}
      </p>
    </div>
    <div className="mt-2 md:mt-0">
      <span className={`text-lg md:text-xl text-[#d4d4d4] font-light ${inter.className}`}>
        ${item.price}
      </span>
    </div>
  </motion.div>
);

// --- Main Page Component ---
export default function MenuPage() {
  return (
    <div>
         <main className="bg-[#0c0c0c] min-h-screen w-full text-[#e5e5e5] selection:bg-white/20 selection:text-white pb-32">
      
    <Navbar />
      {/* 2. Hero / Title Section */}
      <header className="pt-48 pb-24 px-6 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <span className={`block text-xs text-[#666] tracking-[0.3em] uppercase mb-6 ${inter.className}`}>
            Season 04
          </span>
          <h1 className={`text-5xl md:text-7xl lg:text-8xl italic ${playfair.className} mb-8`}>
            Culinary <span className="text-white/40">Edit</span>
          </h1>
          <p className={`max-w-md mx-auto text-[#888] font-light leading-relaxed ${inter.className}`}>
            A collection of dishes guided by the seasons, rooted in technique, and finished with fire.
          </p>
        </motion.div>
      </header>

      {/* 3. Menu Categories */}
      <div className="max-w-4xl mx-auto px-6">
        {MENU_DATA.map((category, index) => (
          <section key={category.title} className="mb-32">
            
            {/* Category Header */}
            <motion.div 
              className="flex items-end gap-6 mb-12 border-b border-white/10 pb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className={`text-4xl md:text-5xl text-white ${playfair.className}`}>
                {category.title}
              </h2>
              <span className={`text-xs text-[#666] uppercase tracking-[0.2em] mb-2 ${inter.className}`}>
                / {category.subtitle}
              </span>
            </motion.div>

            {/* Items List */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {category.items.map((item) => (
                <MenuRow key={item.name} item={item} />
              ))}
            </motion.div>

          </section>
        ))}
      </div>

      {/* 4. Footer Note / Dietary */}
      <div className="max-w-2xl mx-auto text-center px-6 opacity-40">
        <p className={`text-xs leading-relaxed ${inter.className}`}>
          * A 20% service charge is included in every check to support fair wages for our culinary and service teams. <br/>
          Please inform your server of any allergies. Raw or undercooked meats may increase risk of foodborne illness.
        </p>
      </div>


    </main>
        <Footer />

    </div>
   


  );
}
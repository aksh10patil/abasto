import React from "react";
import Link from "next/link";
import { inter } from "@/app/fonts";

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-6 mix-blend-difference text-white/90">

    {/* Logo */}
    <Link
      href="/"
      className={`text-sm tracking-[0.2em] uppercase ${inter.className}`}
    >
      ABASTO
    </Link>

    {/* Navigation */}
    <div className="hidden md:flex gap-12 text-xs tracking-[0.15em] font-light">
      <Link href="philosophy" className="cursor-pointer hover:text-white/70 transition-colors">
        Philosophy
      </Link>
      <Link href="menu" className="cursor-pointer hover:text-white/70 transition-colors">
        Menu
      </Link>
      <Link href="spaces" className="cursor-pointer hover:text-white/70 transition-colors">
        Spaces
      </Link>
    </div>

    {/* CTA */}
    <Link
      href="/reserve"
      className={`text-xs border border-white/30 px-6 py-3 uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-500 ${inter.className}`}
    >
      Reserve
    </Link>

  </nav>
);

export default Navbar;

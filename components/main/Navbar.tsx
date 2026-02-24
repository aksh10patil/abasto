import React from "react";
import Link from "next/link";

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-6 mix-blend-difference text-white/90">
    <Link
      href="https://abasto.ch/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm tracking-[0.2em] uppercase"
    >
      ABASTO
    </Link>

    {/* CTA */}
    <a
      href="https://abasto.resos.com/booking"
      target="_blank"
      rel="noopener noreferrer"
      className="text-xs border border-white/30 px-6 py-3 uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-500"
    >
      Reserve
    </a>
  </nav>
);

export default Navbar;

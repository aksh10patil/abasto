// // components/Footer.tsx


// import { inter, playfair } from "@/lib/fonts"; // adjust path if needed

// export default function Footer() {
//   return (
//     <footer className="bg-[#050505] text-[#999] py-24 px-6 border-t border-white/5">
//       <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-16">

//         {/* Left */}
//         <div className="space-y-6">
//           <h5 className={`text-white text-lg tracking-widest uppercase mb-8 ${inter.className}`}>
//             ABASTO
//           </h5>

//           <div className={`space-y-2 text-sm font-light ${inter.className}`}>
//             <p>Via San Gottardo 32, 6596</p>
//             <p>Gordola, Svizzera</p>
//           </div>

//           <div className={`space-y-2 text-sm font-light pt-4 ${inter.className}`}>
//             <p>Tue — Sun: 17:30 — Late</p>
//             <p>Mon: Closed</p>
//           </div>
//         </div>

//         {/* Right */}
//         <div className="flex flex-col items-start md:items-end">
//           <a
//             href="mailto:reservations@abasto.com"
//             className={`text-xl md:text-2xl text-[#d4d4d4] hover:text-white transition-colors mb-6 ${playfair.className} italic`}
//           >
//             reservations@abasto.com
//           </a>

//           <p className={`text-xs tracking-widest uppercase opacity-40 ${inter.className}`}>
//             © {new Date().getFullYear()} ABASTO Restaurant. All Rights Reserved.
//           </p>
//         </div>

//       </div>
//     </footer

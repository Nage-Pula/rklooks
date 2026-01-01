"use client";

import { motion } from "framer-motion";
import { FaPhone, FaWhatsapp } from "react-icons/fa6";
import { Mail } from "lucide-react";


export default function Hero() {
  return (
    <section
      id="home"
      className="section"
      aria-labelledby="home-heading"
    >
      <div className="section-inner">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-amber-50 via-rose-50 to-white px-6 py-16 sm:px-12 sm:py-24 shadow-lg">

          {/* subtle background glow */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.15),_transparent_60%)]" />

          {/* content */}
          <div className="relative text-center">
            <motion.h1
              id="home-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900"
            >
              <span className="text-pink-600">RK</span>{" "}
              <span className="text-slate-900">LOOKS</span>
              <span className="mx-auto mt-3 block h-1 w-24 rounded-full bg-amber-500" />
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mt-6 text-xl sm:text-2xl font-semibold text-slate-800"
            >
              Haircut & Hair Patch Salon
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-4 max-w-3xl mx-auto text-base sm:text-lg text-slate-600"
            >
              Professional haircuts, hair patch solutions, and premium grooming services in Narasaraopet.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a
                href="tel:6281045377"
                className="inline-flex items-center gap-3 rounded-xl bg-slate-900 px-8 py-4 text-base font-semibold text-white shadow-md transition hover:bg-slate-800 active:scale-95"
              >
                <FaPhone className="text-xl" />
                Call Now
              </a>

              <a
                href="https://wa.me/916281045377"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-xl bg-green-600 px-8 py-4 text-base font-semibold text-white shadow-md transition hover:bg-green-500 active:scale-95"
              >
                <FaWhatsapp className="text-xl" />
                WhatsApp
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-amber-500 to-rose-500 px-8 py-4 text-base font-semibold text-white shadow-md transition-all duration-300 hover:shadow-lg hover:brightness-105 active:scale-95"
              >
                <span className="flex items-center justify-center h-6 w-6 rounded-full bg-white/20">
                  <Mail size={18} />
                </span>
                Contact Us
              </a>
            </motion.div>

          </div>
          <a
            href="/blog"
            className="group mt-6 align-center flex justify-center items-center gap-2 rounded-full bg-gradient-to-r from-yellow-500 via-green-500 to-amber-500  py-3 text-sm sm:text-base font-extrabold text-black-700 shadow-md transition-all hover:brightness-110"
          >
             See Real Transformations from Our Chair
            <span className="animate-pulse">→</span>
          </a>

        </div>

      </div>

    </section>
  );
}

// "use client";
// import { motion } from "framer-motion";
// import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
// import dynamic from "next/dynamic";

// export default function Hero() {
//   return (
//     <section id="home" className=" mx-auto max-w-6xl rounded-3xl px-4 py-16 sm:py-24 text-center bg-gradient-to-br from-white via-slate-50 to-white overflow-hidden bg-gradient-to-br from-white via-slate-50 to-white border border-slate-200 shadow-md px-6 py-16">

//       <motion.h1
//         initial={{ opacity: 0, y: 24 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.45, ease: "easeOut" }}
//         className="text-5xl sm:text-5xl font-extrabold tracking-tight text-slate-900"
//         id="home-heading"
//       >
//         <span className="text-pink-600">RK</span> <span className="text-white-600 !important">LOOKS</span>
//         <span className="block mx-auto mt-2 h-1 w-30 rounded-full bg-amber-500" />
//       </motion.h1>
//       <motion.h3
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.2, duration: 0.6 }}
//         className="mt-4 text-2xl sm:text-3xl font-semibold text-gray-800">
//         Haircut & Hair Patch Salon
//       </motion.h3>

//       <motion.h4
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.3, duration: 0.6 }}
//         className="mt-4 text-xl sm:text-2xl font-semibold text-gray-800"
//       >
//         The Best Professional Haircut, Hair Patch & Grooming Services Salon in Narasaraopet
//       </motion.h4>


//       <motion.div
//         initial={{ opacity: 0, y: 12 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.6, duration: 0.5 }}
//         className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
//       >
//         <a
//           href="tel:6281045377"
//           className="rounded-lg border border-gray-700 px-6 py-3 text-base font-bold text-gray-900 active:scale-95 transition"
//           rel="noopener noreferrer"
//         >
//           <span className="inline-flex items-center gap-3">
//             <FaPhoneAlt className="text-blue-600 text-3xl" />
//             Call Now
//           </span>

//         </a>
//         <a
//           href="https://wa.me/916281045377"
//           target="_blank"
//           className="rounded-lg border border-gray-700 px-6 py-3 text-base font-bold text-gray-900 active:scale-95 transition"
//           rel="noopener noreferrer"
//         >
//           <span className="inline-flex items-center gap-2">
//             <FaWhatsapp className="text-green-600 text-3xl" />
//             WhatsApp
//           </span>

//         </a>
//       </motion.div>

//     </section >
//   );
// }

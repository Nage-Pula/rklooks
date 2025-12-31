"use client";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="px-4 py-16 sm:py-24 text-center bg-white overflow-hidden">
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-5xl sm:text-5xl font-extrabold tracking-tight text-gray-900"
      >
        <span className="text-pink-600">RK</span> <span className="text-white-600 !important">LOOKS</span> 
      </motion.h1>
     <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mt-4 text-2xl sm:text-3xl font-semibold text-gray-800">
        Haircut & Hair Patch Salon
      </motion.h3>

      <motion.h4
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-4 text-xl sm:text-2xl font-semibold text-gray-800"
      >
        The Best Professional Haircut, Hair Patch & Grooming Services Salon in Narasaraopet
      </motion.h4>


      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
      >
        <a
          href="tel:6281045377"
          className="rounded-lg border border-gray-100 px-6 py-3 text-base font-bold text-gray-900 active:scale-95 transition"
        >
            <span className="inline-flex items-center gap-3">
              <FaPhoneAlt className="text-blue-600 text-3xl" />
              Call Now
            </span>

        </a>
        <a
          href="https://wa.me/916281045377"
          target="_blank"
          className="rounded-lg border border-gray-100 px-6 py-3 text-base font-bold text-gray-900 active:scale-95 transition"
        >
          <span className="inline-flex items-center gap-2">
            <FaWhatsapp className="text-green-600 text-3xl" />
            WhatsApp
          </span>

        </a>
      </motion.div>
    </section>
  );
}

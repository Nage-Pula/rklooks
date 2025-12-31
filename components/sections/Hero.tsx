"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="px-6 py-20 text-center overflow-hidden">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold"
      >
        RK LOOKS
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-4 text-lg text-gray-600"
      >
        Professional Haircuts & Hair Patch Solutions in Narasaraopet
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="mt-6 flex justify-center gap-4"
      >
        <a
          href="tel:6281045377"
          className="rounded-md bg-black px-6 py-3 text-white"
        >
          Call Now
        </a>
        <a
          href="https://wa.me/916281045377"
          target="_blank"
          className="rounded-md border px-6 py-3"
        >
          WhatsApp
        </a>
      </motion.div>
    </section>
  );
}

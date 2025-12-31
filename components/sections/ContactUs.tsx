"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import {
  FaUser,
  FaCommentDots,
  FaWhatsapp,
  FaPhoneAlt,
  FaInstagram,
  FaFacebook,
  FaGoogle,
} from "react-icons/fa";


export default function ContactUs() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = () => {
    setTimeout(() => {
      formRef.current?.reset();
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    }, 300);
  };

  return (
    <section className="px-6 py-16 text-center bg-gradient-to-b from-black to-gray-900 text-white">
      <h2 className="text-3xl font-semibold text-white">Contact Us</h2>
      <p className="mt-2 text-lg text-gray-300">
        Leave your details. We will contact you shortly.
      </p>

      <form
        ref={formRef}
        action="https://docs.google.com/forms/d/e/1FAIpQLSdLNd4d5y3sGSrXzkCogyA6uzbNGjYuMLNPwshcK1p7BqVodw/formResponse"
        method="POST"
        target="hidden_iframe"
        onSubmit={handleSubmit}
        className="mt-8 max-w-xl mx-auto grid gap-4 text-left"
      >
        {/* Honeypot */}
        <input type="text" name="company" className="hidden" />

        {/* Name */}
        <div className="relative">
          <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            name="entry.640544721"
            required
            placeholder="Your Name"
            className="w-full rounded-lg border border-gray-300 bg-white px-12 py-3 text-gray-900"
          />
        </div>

        {/* Phone */}
        <div className="relative">
          <FaPhoneAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type="tel"
            name="entry.145696134"
            required
            pattern="[0-9]{10}"
            maxLength={10}
            placeholder="10-digit Mobile Number"
            className="w-full rounded-lg border border-gray-300 bg-white px-12 py-3 text-gray-900"
          />
        </div>

        {/* Requirement */}
        <div className="relative">
          <FaCommentDots className="absolute left-4 top-4 text-gray-500" />
          <textarea
            name="entry.1963353475"
            rows={4}
            placeholder="Your Requirement (optional)"
            className="w-full rounded-lg border border-gray-300 bg-white px-12 py-3 text-gray-900"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full rounded-lg py-3 font-semibold text-white bg-gradient-to-r from-black via-gray-800 to-black hover:opacity-90 transition"
        >
          Submit
        </button>
      </form>

      {success && (
        <p className="mt-4 text-green-500 font-medium animate-pulse">
          ✅ Thank you! We’ll contact you shortly.
        </p>
      )}

      <iframe name="hidden_iframe" style={{ display: "none" }} />

      {/* Sticky CTA icons */}
      <motion.div
        drag
        dragMomentum={true}
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        className="fixed bottom-24 right-6 z-50 flex flex-col gap-4 touch-none"
      >

        <a
          href="https://wa.me/916281045377"
          target="_blank"
          className="flex items-center justify-center w-14 h-14 rounded-full bg-green-600 text-white-bold shadow-lg"
        >
          <FaWhatsapp className="text-2xl" />
        </a>

        <a
          href="tel:+916281045377"
          className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-600 text-white shadow-lg"
        >
          <FaPhoneAlt className="text-2xl" />
        </a>

        <a
          href="https://instagram.com/yourprofile"
          target="_blank"
          className="flex items-center justify-center w-14 h-14 rounded-full bg-pink-600 text-white shadow-lg"
        >
          <FaInstagram className="text-2xl" />
        </a>

        <a
          href="https://facebook.com/yourpage"
          target="_blank"
          className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-800 text-white shadow-lg"
        >
          <FaFacebook className="text-2xl" />
        </a>

        <a
          href="https://g.page/your-business-profile"
          target="_blank"
          className="flex items-center justify-center w-14 h-14 rounded-full bg-red-600 text-white shadow-lg"
        >
          <FaGoogle className="text-2xl" />
        </a>
      </motion.div>
    </section>
  );
}

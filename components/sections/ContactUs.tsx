"use client";

import {
  FaWhatsapp,
  FaPhoneAlt,
  FaInstagram,
  FaFacebook,
  FaGoogle,
} from "react-icons/fa";
import { use, useRef } from "react";

export default function ContactUs() {
  const formRef = useRef<HTMLFormElement | null>(null);

  return (
    <section className="px-6 py-16 bg-white text-center">
      <h2 className="text-3xl font-semibold text-gray-900">
        Contact Us
      </h2>

      <p className="mt-2 text-lg text-gray-600">
        Leave your details. We will contact you shortly.
      </p>

      <form
        ref={formRef}
        action="https://docs.google.com/forms/d/e/1FAIpQLSdLNd4d5y3sGSrXzkCogyA6uzbNGjYuMLNPwshcK1p7BqVodw/formResponse"
        method="POST"
        target="hidden_iframe"
        onSubmit={() => {
          setTimeout(() => {
            formRef.current?.reset();
          }, 300);
        }}
        className="mt-8 max-w-xl mx-auto grid gap-4 text-left"
      >
        <input
          type="text"
          name="entry.640544721"
          required
          placeholder="Your Name"
          className="w-full rounded-lg border border-gray-300 px-4 py-3"
        />

        <input
          type="tel"
          name="entry.145696134"
          required
          pattern="[0-9]{10}"
          maxLength={10}
          placeholder="10-digit Mobile Number"
          className="w-full rounded-lg border border-gray-300 px-4 py-3"
        />

        <textarea
          name="entry.1963353475"
          rows={4}
          placeholder="Your Requirement (optional)"
          className="w-full rounded-lg border border-gray-300 px-4 py-3"
        />

        <button
          type="submit"
          className="rounded-lg bg-black px-6 py-3 text-white font-medium"
        >
          Submit
        </button>
      </form>

      <iframe name="hidden_iframe" style={{ display: "none" }} />

      {/* hidden iframe prevents redirect */}
      <iframe
        name="hidden_iframe"
        style={{ display: "none" }}
      />


      {/* QUICK CONTACT ICONS */}
      <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 max-w-4xl mx-auto">
        <a
          href="https://wa.me/916281045377"
          target="_blank"
          className="flex flex-col items-center gap-2 p-4 rounded-xl border bg-green-50"
        >
          <FaWhatsapp className="text-3xl text-green-600" />
          <span className="text-sm">WhatsApp</span>
        </a>

        <a
          href="tel:+916281045377"
          className="flex flex-col items-center gap-2 p-4 rounded-xl border bg-blue-50"
        >
          <FaPhoneAlt className="text-3xl text-blue-600" />
          <span className="text-sm">Call</span>
        </a>

        <a
          href="https://instagram.com/yourprofile"
          target="_blank"
          className="flex flex-col items-center gap-2 p-4 rounded-xl border bg-pink-50"
        >
          <FaInstagram className="text-3xl text-pink-600" />
          <span className="text-sm">Instagram</span>
        </a>

        <a
          href="https://facebook.com/yourpage"
          target="_blank"
          className="flex flex-col items-center gap-2 p-4 rounded-xl border bg-blue-100"
        >
          <FaFacebook className="text-3xl text-blue-700" />
          <span className="text-sm">Facebook</span>
        </a>

        <a
          href="https://g.page/your-business-profile"
          target="_blank"
          className="flex flex-col items-center gap-2 p-4 rounded-xl border bg-red-50"
        >
          <FaGoogle className="text-3xl text-red-600" />
          <span className="text-sm">Google</span>
        </a>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  FaUser,
  FaPhoneAlt,
  FaCommentDots,
  FaWhatsapp,
} from "react-icons/fa";
import { FaInstagram, FaFacebook, FaGoogle } from "react-icons/fa6";
import { Scissors } from "lucide-react";

export default function ContactUs() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [success, setSuccess] = useState(false);
  const [ctaOpen, setCtaOpen] = useState(true);
  const [pulseActive, setPulseActive] = useState(true);

  const [constraints, setConstraints] = useState<{
    top: number;
    bottom: number;
    left: number;
    right: number;
  } | null>(null);

  useEffect(() => {
    const updateConstraints = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      setConstraints({
        top: -h / 2 + 120,
        bottom: h / 2 - 120,
        left: -w + 96,
        right: 0,
      });
    };
    updateConstraints();
    window.addEventListener("resize", updateConstraints);
    return () => window.removeEventListener("resize", updateConstraints);
  }, []);

  const handleSubmit = () => {
    setTimeout(() => {
      formRef.current?.reset();
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    }, 300);
  };

  return (
    <section
      id="contact"
      className="section relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
      aria-labelledby="contact-heading"
    >
      {/* ambient glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(251,191,36,0.18),_transparent_60%)]" />

      <div className="section-inner">
        {/* Glass card */}
        <div className="relative mx-auto max-w-4xl rounded-3xl bg-white/90 backdrop-blur border border-white/30 px-6 py-16 sm:px-12 shadow-2xl text-center">

          <h2
            id="contact-heading"
            className="text-2xl sm:text-3xl font-bold text-slate-900"
          >
            Get in Touch
          </h2>

          <p className="mt-3 text-slate-700">
            Leave your details. We’ll personally contact you.
          </p>

          {/* FORM */}
          <form
            ref={formRef}
            action="https://docs.google.com/forms/d/e/1FAIpQLSdLNd4d5y3sGSrXzkCogyA6uzbNGjYuMLNPwshcK1p7BqVodw/formResponse"
            method="POST"
            target="hidden_iframe"
            onSubmit={handleSubmit}
            className="mt-10 grid gap-4 text-left max-w-xl mx-auto"
          >
            <input type="text" name="company" className="hidden" />

            <div className="relative">
              <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                name="entry.640544721"
                required
                placeholder="Your Name"
                className="w-full rounded-xl border border-slate-300 bg-white px-12 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>

            <div className="relative">
              <FaPhoneAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="tel"
                name="entry.145696134"
                required
                maxLength={10}
                placeholder="10-digit Mobile Number"
                className="w-full rounded-xl border border-slate-300 bg-white px-12 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>

            <div className="relative">
              <FaCommentDots className="absolute left-4 top-4 text-slate-400" />
              <textarea
                name="entry.1963353475"
                rows={4}
                placeholder="Your requirement (optional)"
                className="w-full rounded-xl border border-slate-300 bg-white px-12 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>

            <button
              type="submit"
              className="mt-2 rounded-xl bg-slate-900 py-3 font-semibold text-white transition hover:bg-slate-800 active:scale-95"
            >
              Submit
            </button>
          </form>

          {success && (
            <p className="mt-4 text-green-600 font-medium">
              ✅ Thank you! We’ll contact you shortly.
            </p>
          )}

          <iframe name="hidden_iframe" style={{ display: "none" }} />
        </div>
      </div>

      {/* FLOATING CTA */}
      {ctaOpen && constraints && (
        <motion.div
          drag
          dragMomentum={false}
          dragElastic={0.1}
          dragConstraints={constraints}
          className="fixed top-1/2 right-6 -translate-y-1/2 z-50 flex flex-col items-center gap-4 "
        >
          <button
            onClick={() => setCtaOpen(false)}
            className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-500 text-slate-900 shadow-md active:scale-95"
          >
            <Scissors size={16} />
          </button>

          <a
            href="/blog"
            className="group flex items-center justify-center rounded-full  text-white shadow-lg transition-all hover:scale-105 overflow-hidden"
          >
            <img
              src="/images/gallery/rklookslogo.jpeg"
              alt="RK Looks Blog"
              className="w-12 h-12 group flex items-center justify-center w-12 h-12 rounded-full bg-white/20 backdrop-blur border border-white/30 shadow-lg transition-all hover:scale-105 overflow-hidden"

            />
          </a>


          <a
            href="https://wa.me/916281045377"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-green-600 text-white shadow-lg group-hover:opacity-100 transition text-sm hover:scale-105"
          >
            <FaWhatsapp className="text-4xl" />
          </a>

          <a
            href="tel:+916281045377"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 text-white shadow-lg group-hover:opacity-100 transition text-sm hover:scale-105"
          >
            <FaPhoneAlt className="text-3xl" />
          </a>

          <a
            href="https://instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-pink-600 text-white shadow-lg group-hover:opacity-100 transition text-sm hover:scale-105"
          >
            <FaInstagram className="text-4xl" />
          </a>

          <a
            href="https://facebook.com/yourpage"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-800 text-white shadow-lg group-hover:opacity-100 transition text-sm hover:scale-105"
          >
            <FaFacebook className="text-4xl" />
          </a>

          <a
            href="https://g.page/your-business-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-red-600 text-white shadow-lg group-hover:opacity-100 transition text-sm hover:scale-105"
          >
            <FaGoogle className="text-4xl" />
          </a>
        </motion.div>
      )}

      {!ctaOpen && constraints && (
        <motion.button
          drag
          dragMomentum={false}
          dragElastic={0.1}
          dragConstraints={constraints}
          onClick={() => {
            setPulseActive(false);
            setCtaOpen(true);
          }}
          initial={{ scale: 1 }}
          animate={pulseActive ? { scale: [1, 1.08, 1] } : { scale: 1 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="fixed top-1/2 right-5 -translate-y-1/2 z-50  rounded-full flex items-center justify-center"
        >
          {/* <Image
            src="/images/beauty-care.png"
            alt="Open contact options"
            width={40}
            height={40}
          /> */}
          <img
            src="/images/gallery/rklookslogo.jpeg"
            alt="RK Looks Blog"
            className="w-13 h-13 group flex items-center justify-center w-13 h-13 rounded-full bg-white/20 backdrop-blur border border-white/30 shadow-lg transition-all hover:scale-110 overflow-hidden"

          />
        </motion.button>
      )}
    </section>
  );
}


// "use client";

// import { Scissors } from "lucide-react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { useEffect, useRef, useState } from "react";
// import { FaUser } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa6";
// import { FaFacebook } from "react-icons/fa6";
// import { FaGoogle } from "react-icons/fa6";
// import { FaPhoneAlt } from "react-icons/fa";
// import { FaCommentDots } from "react-icons/fa";
// import { FaWhatsapp } from "react-icons/fa";


// export default function ContactUs() {
//   const formRef = useRef<HTMLFormElement | null>(null);
//   const [success, setSuccess] = useState(false);
//   const [ctaPos, setCtaPos] = useState({ x: 0, y: 0 });
//   const [showCTA, setShowCTA] = useState(true);
//   const lastScrollY = useRef(0);
//   const containerRef = useRef<HTMLDivElement | null>(null);
//   const [ctaOpen, setCtaOpen] = useState(true);
//   const [constraints, setConstraints] = useState<{
//     top: number;
//     bottom: number;
//     left: number;
//     right: number;
//   } | null>(null);
//   const [pulseActive, setPulseActive] = useState(true);
//   useEffect(() => {
//     const updateConstraints = () => {
//       const w = window.innerWidth;
//       const h = window.innerHeight;

//       setConstraints({
//         top: -h / 2 + 120,
//         bottom: h / 2 - 120,
//         left: -w + 96,
//         right: 0,
//       });
//     };

//     updateConstraints();
//     window.addEventListener("resize", updateConstraints);
//     return () => window.removeEventListener("resize", updateConstraints);
//   }, []);




//   const handleSubmit = () => {
//     setTimeout(() => {
//       formRef.current?.reset();
//       setSuccess(true);
//       setTimeout(() => setSuccess(false), 3000);
//     }, 300);
//   };

//   return (
//     <section id="contact" className="px-6 py-16 text-center bg-gradient-to-b from-black to-gray-900 text-white">
//       <h2 id="contact-heading" className="text-3xl font-semibold text-white">Contact Us</h2>
//       <p className="mt-2 text-lg text-gray-300">
//         Leave your details. We will contact you shortly.
//       </p>

//       <form
//         ref={formRef}
//         action="https://docs.google.com/forms/d/e/1FAIpQLSdLNd4d5y3sGSrXzkCogyA6uzbNGjYuMLNPwshcK1p7BqVodw/formResponse"
//         method="POST"
//         target="hidden_iframe"
//         onSubmit={handleSubmit}
//         className="mt-8 max-w-xl mx-auto grid gap-4 text-left"
//       >
//         {/* Honeypot */}
//         <input type="text" name="company" className="hidden" />

//         {/* Name */}
//         <div className="relative">
//           <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
//           <input
//             type="text"
//             name="entry.640544721"
//             required
//             placeholder="Your Name"
//             className="w-full rounded-lg border border-gray-300 bg-white px-12 py-3 text-gray-900"
//           />
//         </div>

//         {/* Phone */}
//         <div className="relative">
//           <FaPhoneAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
//           <input
//             type="tel"
//             name="entry.145696134"
//             required
//             pattern="[0-9]{10}"
//             maxLength={10}
//             placeholder="10-digit Mobile Number"
//             className="w-full rounded-lg border border-gray-300 bg-white px-12 py-3 text-gray-900"
//           />
//         </div>

//         {/* Requirement */}
//         <div className="relative">
//           <FaCommentDots className="absolute left-4 top-4 text-gray-500" />
//           <textarea
//             name="entry.1963353475"
//             rows={4}
//             placeholder="Your Requirement (optional)"
//             className="w-full rounded-lg border border-gray-300 bg-white px-12 py-3 text-gray-900"
//           />
//         </div>

//         {/* Submit */}
//         <button
//           type="submit"
//           className="w-full rounded-lg py-3 font-semibold text-white bg-gradient-to-r from-black via-gray-800 to-black hover:opacity-90 transition"
//         >
//           Submit
//         </button>
//       </form>

//       {success && (
//         <p className="mt-4 text-green-500 font-medium animate-pulse">
//           ✅ Thank you! We’ll contact you shortly.
//         </p>
//       )}

//       <iframe name="hidden_iframe" style={{ display: "none" }} />

//       {/* Sticky CTA icons */}
//       {ctaOpen && (
//         <>
//           {constraints && (
//             <motion.div
//               ref={containerRef}
//               drag={!process.env.NEXT_PUBLIC_LIGHTHOUSE}
//               dragMomentum={false}
//               dragElastic={0.1}
//               onDragEnd={(_, info) => {
//                 const screenWidth = window.innerWidth;
//                 const snapX = info.point.x > screenWidth / 2 ? 0 : -(screenWidth / 2 - 80);
//                 setCtaPos({
//                   x: snapX,
//                   y: ctaPos.y + info.offset.y,
//                 });
//               }}
//               dragConstraints={constraints ?? undefined}

//               animate={{ x: ctaPos.x, y: ctaPos.y }}
//               // animate={{ x: ctaPos.x, y: ctaPos.y, opacity: showCTA ? 1 : 0 }}
//               className="fixed top-1/2 right-6 -translate-y-1/2 z-50 flex flex-col items-center gap-4">
//               <button
//                 onClick={() => setCtaOpen(false)}
//                 className="flex items-center justify-center w-7 h-7 rounded-full shadow-lg active:scale-95 transition bg-gradient-to-br from-amber-400 to-amber-600"
//               >
//                 <Scissors className="text-black-500" />
//               </button>


//               <a
//                 href="https://wa.me/916281045377"
//                 target="_blank"
//                 className="flex items-center justify-center w-14 h-14 rounded-full bg-green-600 text-white-bold shadow-lg active:scale-95 transition"
//                 aria-label="Contact on WhatsApp"
//                 rel="noopener noreferrer"
//               >
//                 <div className="relative group">
//                   <FaWhatsapp className="text-2xl" />
//                   <span className="absolute right-12 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md bg-black px-2 py-1 text-xs text-white opacity-0 group-hover:opacity-100 transition">
//                     WhatsApp Me
//                   </span>
//                 </div>
//               </a>

//               <a
//                 href="tel:+916281045377"
//                 className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-600 text-white shadow-lgactive:scale-95 transition"
//                 rel="noopener noreferrer"
//               >

//                 <div className="relative group">
//                   <FaPhoneAlt className="text-2xl" />
//                   <span className="absolute right-12 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md bg-black px-2 py-1 text-xs text-white opacity-0 group-hover:opacity-100 transition">
//                     Call Now
//                   </span>
//                 </div>
//               </a>

//               <a
//                 href="https://instagram.com/yourprofile"
//                 target="_blank"
//                 className="flex items-center justify-center w-14 h-14 rounded-full bg-pink-600 text-white shadow-lgactive:scale-95 transition"
//                 rel="noopener noreferrer"
//               >
//                 <div className="relative group">
//                   <FaInstagram className="text-2xl" />
//                   <span className="absolute right-12 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md bg-black px-2 py-1 text-xs text-white opacity-0 group-hover:opacity-100 transition">
//                     Instagram
//                   </span>
//                 </div>

//               </a>

//               <a
//                 href="https://facebook.com/yourpage"
//                 target="_blank"
//                 className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-800 text-white shadow-lgactive:scale-95 transition"
//                 rel="noopener noreferrer"
//               >

//                 <div className="relative group">
//                   <FaFacebook className="text-2xl" />
//                   <span className="absolute right-12 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md bg-black px-2 py-1 text-xs text-white opacity-0 group-hover:opacity-100 transition">
//                     Facebook
//                   </span>
//                 </div>

//               </a>

//               <a
//                 href="https://g.page/your-business-profile"
//                 target="_blank"
//                 className="flex items-center justify-center w-14 h-14 rounded-full bg-red-600 text-white shadow-lgactive:scale-95 transition"
//                 rel="noopener noreferrer"
//               >
//                 <div className="relative group">
//                   <FaGoogle className="text-2xl" />
//                   <span className="absolute right-12 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md bg-black px-2 py-1 text-xs text-white opacity-0 group-hover:opacity-100 transition">
//                     Google Reviews
//                   </span>
//                 </div>
//               </a>

//             </motion.div>
//           )}
//         </>

//       )}

//       {!ctaOpen && constraints && (
//         <motion.button
//           drag={!process.env.NEXT_PUBLIC_LIGHTHOUSE}
//           dragMomentum={false}
//           dragElastic={0.1}
//           dragConstraints={constraints}
//           // onClick={() => setCtaOpen(true)} 
//           onClick={() => {
//             setPulseActive(false);
//             setCtaOpen(true);
//           }}

//           whileTap={{ scale: 0.95 }}
//           initial={{ scale: 1 }}
//           animate={pulseActive ? { scale: [1, 1.08, 1] } : { scale: 1 }}

//           transition={{
//             duration: 1.5,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//           className=" fixed top-1/2 right-5 -translate-y-1/2 z-50 flex flex-col items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 shadow-xl"
//         >
//           <Image
//             src="/images/beauty-care.png"
//             alt="Open contact options"
//             width={48}
//             height={50}
//           />
//         </motion.button>
//       )}


//     </section>
//   );
// }

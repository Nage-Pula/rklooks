export default function Location() {
  return (
    <section
      id="location"
      className="section relative overflow-hidden bg-gradient-to-br from-slate-50 via-amber-50/40 to-white"
      aria-labelledby="location-heading"
    >
      {/* ambient glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.15),_transparent_60%)]" />

      {/* Curved container */}
      <div className="section-inner">
        <div className="relative mx-auto max-w-6xl rounded-3xl border border-slate-200 bg-white shadow-lg overflow-hidden">

          {/* Decorative top curve */}
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-r from-amber-100 via-slate-100 to-rose-100 opacity-70" />

          {/* Content */}
          <div className="relative px-6 py-16 text-center">
            {/* Intro line to replace empty padding */}
            <p className="mb-4 inline-block rounded-full bg-white/70 px-4 py-1 text-sm font-medium text-slate-600 shadow-sm">
              Easy to find · Centrally located · Friendly neighborhood salon
            </p>

            <h2
              id="location-heading"
              className="text-2xl sm:text-3xl font-bold text-slate-900"
            >
              Visit Us
            </h2>

            <p className="mt-3 text-slate-700">
              Opp. 9th Line, Padda Cheruvu, Narasaraopet – 522601
            </p>

            <div className="mt-6 flex justify-center">
              <a
                href="https://www.google.com/maps/place/RK+LOOKS+HAIR+STUDIO+AND+BEAUTY+SELOON/@16.2421971,80.0464718,3a,75y,110h,85.62t/data=!3m7!1e1!3m5!1s6TYSluhsx_PCYD2LrPFLFg!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D4.376006268122637%26panoid%3D6TYSluhsx_PCYD2LrPFLFg%26yaw%3D110.00407442739078!7i13312!8i6656!4m7!3m6!1s0x3a4a810306a7f1b1:0xaee0046534c51eff!8m2!3d16.2421039!4d80.0466144!10e5!16s%2Fg%2F11vyc9130z?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-slate-900 px-6 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-slate-800 active:scale-95"
              >
                View on Google Maps
              </a>
            </div>

            {/* Map */}
            <div className="mt-10 max-w-4xl mx-auto overflow-hidden rounded-2xl border border-slate-300 shadow-md">
              <iframe
                src="https://www.google.com/maps?q=Narasaraopet&output=embed"
                className="w-full h-80"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="RK Looks Hair Studio Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// export default function Location() {
//   return (
//     <section id="location" className="px-4 py-16">
//       {/* Curved container */}
//       <div className="relative mx-auto max-w-6xl rounded-3xl bg-gradient-to-br from-slate-100 via-white to-slate-200 border border-slate-200 shadow-lg overflow-hidden">

//         {/* Decorative curve overlay */}
//         <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 opacity-60" />

//         {/* Content */}
//         <div className="relative px-6 py-16 text-center">
//           <h2 id="location-heading" className="text-2xl sm:text-3xl font-semibold text-slate-900">
//             Visit Us
//           </h2>

//           <p className="mt-2 text-slate-700">
//             Opp. 9th Line, Padda Cheruvu, Narasaraopet – 522601
//           </p>

//           <div className="mt-5 flex justify-center">
//             <a
//               href="https://g.page/rk-looks-hair-studio"
//               target="_blank"
//               className="rounded-full bg-white px-6 py-2 text-sm font-medium text-slate-900 border border-slate-300 shadow-sm active:scale-95 transition"
//               rel="noopener noreferrer"
//             >
//               View on Google Maps
//             </a>
//           </div>

//           {/* Map */}
//           <div className="mt-10 max-w-4xl mx-auto overflow-hidden rounded-2xl border border-slate-300 shadow-md">

//             <iframe
//               src="https://www.google.com/maps?q=Narasaraopet&output=embed"
//               className="w-full h-80"
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//               title="RK Looks Hair Studio Location"
//             />

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

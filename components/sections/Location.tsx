"use client";

export default function Location() {
  return (
    <section
      id="location"
      className="section relative overflow-hidden bg-gradient-to-br from-slate-50 via-amber-50/40 to-white"
      aria-labelledby="location-heading"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.15),_transparent_60%)]" />

      {/* Curved container */}
      <div className="section-inner">
        <div className="relative mx-auto max-w-6xl rounded-3xl border border-slate-200 bg-white shadow-lg overflow-hidden">

          {/* Decorative top curve */}
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-r from-amber-100 via-slate-100 to-rose-100 opacity-70" />

          {/* Content */}
          <div className="relative px-6 py-16 text-center">
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
              Opp. Vinayaka Temple, 9th Line, Padda Cheruvu, Narasaraopet – 522601
            </p>

            {/* Google Maps link */}
            <div className="mt-6 flex justify-center">
              <a
                href="https://www.google.com/maps/place/RK+LOOKS+HAIR+STUDIO+AND+BEAUTY+SELOON/@16.2421971,80.0464718,3a,75y,118.06h,91.89t/data=!3m7!1e1!3m5!1s6TYSluhsx_PCYD2LrPFLFg!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-1.889754329883786%26panoid%3D6TYSluhsx_PCYD2LrPFLFg%26yaw%3D118.0647252234415!7i13312!8i6656!4m14!1m7!3m6!1s0x3a4a810306a7f1b1:0xaee0046534c51eff!2sRK+LOOKS+HAIR+STUDIO+AND+BEAUTY+SELOON!8m2!3d16.2421039!4d80.0466144!16s%2Fg%2F11vyc9130z!3m5!1s0x3a4a810306a7f1b1:0xaee0046534c51eff!8m2!3d16.2421039!4d80.0466144!16s%2Fg%2F11vyc9130z?hl=en-US&entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-slate-900 px-6 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-slate-800 active:scale-95"
              >
                View Us on Google Maps
              </a>
            </div>

            {/* Map (FREE iframe) */}
            <div className="relative mt-10 max-w-4xl mx-auto overflow-hidden rounded-2xl border border-slate-300 shadow-md">
              <iframe
                //src="https://www.google.com/maps?ll=16.2421039,80.0466144&z=17&output=embed"
                src="https://www.google.com/maps?q=RK+LOOKS+HAIR+STUDIO+AND+BEAUTY+SELOON&ll=16.2421039,80.0466144&z=14&output=embed"
                className="w-full h-80"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="RK Looks Hair Studio Location"
              />
              </div>

              {/* Directions */}
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=16.2421039,80.0466144"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 z-10 rounded-full bg-amber-500 px-5 py-2 text-sm font-semibold text-black shadow-lg hover:bg-amber-400"
              >
                Get Directions →
              </a>
            </div>
          </div>
        </div>
    </section>
  );
}

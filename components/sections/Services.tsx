import { Scissors, User, Sparkles } from "lucide-react";

export default function Services() {
  return (
    <section
      id="services"
      className="section relative overflow-hidden bg-gradient-to-br from-slate-50 via-amber-50/40 to-rose-50/40"
      aria-labelledby="services-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.18),_transparent_60%)]" />

      <div className="section-inner">
        <div className="rounded-3xl border border-slate-200 bg-white px-6 py-16 sm:px-12 shadow-lg">


          <h2
            id="services-heading"
            className="text-2xl sm:text-3xl font-bold text-center text-slate-900"
          >
            Our Services
          </h2>
          <p className="mt-3 text-center text-slate-600">
            Trusted grooming & advanced hair solutions
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Service Card */}
            <div className="group relative rounded-2xl border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-xl">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-100/40 to-transparent opacity-0 transition group-hover:opacity-100" />

              <div className="relative text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                  <Scissors size={22} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-900">
                  Haircut & Styling
                </h3>
                <p className="mt-3 text-sm text-slate-600">
                  Professional haircuts and modern styling for all age groups.
                </p>
              </div>
            </div>

            {/* Service Card */}
            <div className="group relative rounded-2xl border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-xl">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-rose-100/40 to-transparent opacity-0 transition group-hover:opacity-100" />

              <div className="relative text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-rose-100 text-rose-600">
                  <User size={22} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-900">
                  Hair Patch / Hair Replacement
                </h3>
                <p className="mt-3 text-sm text-slate-600">
                  Natural-looking hair patch solutions for baldness concerns.
                </p>
              </div>
            </div>

            {/* Service Card */}
            <div className="group relative rounded-2xl border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-xl">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-100/40 to-transparent opacity-0 transition group-hover:opacity-100" />

              <div className="relative text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                  <Sparkles size={22} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-900">
                  Hair Bonding & Systems
                </h3>
                <p className="mt-3 text-sm text-slate-600">
                  Clip, glue, and bonding systems tailored to your lifestyle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


// import { Scissors, User, Sparkles } from "lucide-react";

// export default function Services() {
//   return (
//     <section id="services" className="px-4 py-16">
//       <div className="mx-auto max-w-6xl rounded-3xl bg-gradient-to-br from-white via-slate-50 to-white border border-slate-200 shadow-md px-6 py-16">

//         <h2 id="services-heading" className="text-2xl sm:text-3xl font-semibold text-center text-gray-900">
//           Our Services
//         </h2>
//         <p className="mt-2 text-center text-gray-600">
//           Trusted grooming & hair solutions
//         </p>

//         <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
//           {/* Card 1 */}
//           <div className="rounded-2xl bg-white p-6 border border-gray-200 hover:shadow-md transition">
//             <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gray-100 text-gray-700 mx-auto">
//               <Scissors size={20} />
//             </div>
//             <h3 className="mt-4 text-lg font-semibold text-center text-gray-900">
//               Haircut & Styling
//             </h3>
//             <p className="mt-2 text-sm text-gray-600 text-center">
//               Professional cuts and modern styles for all ages.
//             </p>
//           </div>

//           {/* Card 2 */}
//           <div className="rounded-2xl bg-white p-6 border border-gray-200 hover:shadow-md transition">
//             <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gray-100 text-gray-700 mx-auto">
//               <User size={20} />
//             </div>
//             <h3 className="mt-4 text-lg font-semibold text-center text-gray-900">
//               Hair Patch / Hair Replacement
//             </h3>
//             <p className="mt-2 text-sm text-gray-600 text-center">
//               Natural-looking hair patch solutions for baldness.
//             </p>
//           </div>

//           {/* Card 3 */}
//           <div className="rounded-2xl bg-white p-6 border border-gray-200 hover:shadow-md transition">
//             <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gray-100 text-gray-700 mx-auto">
//               <Sparkles size={20} />
//             </div>
//             <h3 className="mt-4 text-lg font-semibold text-center text-gray-900">
//               Hair Bonding & Systems
//             </h3>
//             <p className="mt-2 text-sm text-gray-600 text-center">
//               Clip, glue, and bonding systems tailored to your need.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>

//   );
// }

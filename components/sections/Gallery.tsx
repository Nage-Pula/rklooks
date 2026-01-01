import Image from "next/image";

const images = [
  { src: "/images/shop-front.jpg", alt: "RK Looks shop front" },
  { src: "/images/inside-shop.jpg", alt: "Inside RK Looks Hair Studio" },
  { src: "/images/haircut-work.jpg", alt: "Haircut service at RK Looks" },
  { src: "/images/hair-patch.jpg", alt: "Hair patch service at RK Looks" },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="section relative overflow-hidden bg-gradient-to-br from-slate-50 via-amber-50/40 to-rose-50/40"
      aria-labelledby="gallery-heading"
    >
      {/* ambient glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(251,191,36,0.12),_transparent_60%)]" />

      <div className="section-inner">
        <div className="relative rounded-3xl border border-slate-200 bg-white px-6 py-16 sm:px-12 shadow-lg">

          <h2
            id="gallery-heading"
            className="text-2xl sm:text-3xl font-bold text-center text-slate-900"
          >
            Our Work
          </h2>
          <p className="mt-3 text-center text-slate-600">
            Real clients. Real transformations.
          </p>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {images.map((img) => (
              <div
                key={img.src}
                className="group relative aspect-square overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                {/* image */}
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />

                {/* overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* caption */}
                <div className="absolute bottom-0 w-full px-3 pb-3 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2">
                  <p className="text-xs font-medium text-white">
                    {img.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* note for client trust */}
          <p className="mt-8 text-center text-sm text-slate-500">
            All images are from our actual salon & services.
          </p>
        </div>
      </div>
    </section>
  );
}

// import Image from "next/image";
// const images = [
//   { src: "/images/shop-front.jpg", alt: "RK Looks shop front" },
//   { src: "/images/inside-shop.jpg", alt: "Inside RK Looks Hair Studio" },
//   { src: "/images/haircut-work.jpg", alt: "Haircut service at RK Looks" },
//   { src: "/images/hair-patch.jpg", alt: "Hair patch service at RK Looks" },
// ];
// export default function Gallery() {
//   return (
//     <section id="gallery" className="px-4 py-16">
//       <div className="mx-auto max-w-6xl rounded-3xl bg-gradient-to-br from-white via-slate-50 to-white border border-slate-200 shadow-md px-6 py-16">
//         <h2 id="gallery-heading" className="text-2xl sm:text-3xl font-semibold text-center text-gray-900">
//           Our Work
//         </h2>
//         <p className="mt-2 text-center text-gray-600">
//           Real work. Real results.
//         </p>

//         <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-6xl mx-auto">
//           {images.map((img) => (
//             <div
//               key={img.src}
//               className="relative aspect-square overflow-hidden rounded-xl border transition-transform duration-300 hover:scale-[1.03] active:scale-[1.02]"
//             >
//               <Image
//                 src={img.src}
//                 alt={img.alt}
//                 fill
//                 sizes="(max-width: 768px) 50vw, 25vw"
//                 className="object-cover transition-transform duration-300"
//                 loading="lazy"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

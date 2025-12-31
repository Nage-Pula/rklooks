import Image from "next/image";

const images = [
  { src: "/images/shop-front.jpg", alt: "RK Looks shop front" },
  { src: "/images/inside-shop.jpg", alt: "Inside RK Looks Hair Studio" },
  { src: "/images/haircut-work.jpg", alt: "Haircut service at RK Looks" },
  { src: "/images/hair-patch.jpg", alt: "Hair patch service at RK Looks" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="px-4 py-16">
      <div className="mx-auto max-w-6xl rounded-3xl bg-gradient-to-br from-white via-slate-50 to-white border border-slate-200 shadow-md px-6 py-16">
        <h2 id="gallery-heading" className="text-2xl sm:text-3xl font-semibold text-center text-gray-900">
          Our Work
        </h2>
        <p className="mt-2 text-center text-gray-600">
          Real work. Real results.
        </p>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {images.map((img) => (
            <div
              key={img.src}
              className="relative aspect-square overflow-hidden rounded-xl border transition-transform duration-300 hover:scale-[1.03] active:scale-[1.02]"
            >

              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-300"
                loading="lazy"
              />

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

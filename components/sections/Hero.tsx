export default function Hero() {
  return (
    <section className="px-4 py-16 sm:py-24 text-center bg-white">
      <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
        <span className="text-pink-600">RK</span> <span className="text-white-600">LOOKS</span> 
      </h1>
      <h3 className="mt-4 text-xl sm:text-2xl font-semibold text-gray-800">
        The Best Haircut & Hair Patch Salon in Narasaraopet
      </h3>

      <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-xl mx-auto">
        Professional Haircuts, Hair Patch & Grooming Services in Narasaraopet
      </p>

      <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
        <a
          href="tel:6281045377"
          className="rounded-lg bg-gray-900 px-6 py-3 text-white text-base font-medium"
        >
          Call Now
        </a>
        <a
          href="https://wa.me/916281045377"
          target="_blank"
          className="rounded-lg border border-gray-300 px-6 py-3 text-base font-medium text-gray-900"
        >
          WhatsApp
        </a>
      </div>
    </section>
  );
}

export default function Location() {
  return (
    <section className="px-6 py-16 bg-gray-50 text-center">
      <h2 className="text-2xl font-semibold">Visit Us</h2>
      <p className="mt-2">
        Opp. 9th Line, Padda Cheruvu, Narasaraopet – 522601
      </p>
      <div className="mt-4 flex justify-center">
        <a
          href="https://g.page/rk-looks-hair-studio"
          target="_blank"
          className="rounded-lg border border-gray-300 px-5 py-2 text-sm font-medium"
        >
          View on Google Maps
        </a>
      </div>


      <div className="mt-6 max-w-3xl mx-auto">
        <iframe
          src="https://www.google.com/maps?q=Narasaraopet&output=embed"
          className="w-full h-80 rounded-xl border"
          loading="lazy"
        />
      </div>
    </section>
  );
}

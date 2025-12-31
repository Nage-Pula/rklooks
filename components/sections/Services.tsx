export default function Services() {
  return (
    <section className="px-6 py-16 bg-gray-50">
      <h2 className="text-2xl font-semibold text-center mb-8">
        Our Services
      </h2>

      <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
        <div className="rounded-xl border bg-white p-6 text-center">
          Haircut & Styling
        </div>
        <div className="rounded-xl border bg-white p-6 text-center">
          Hair Patch for Baldness
        </div>
        <div className="rounded-xl border bg-white p-6 text-center">
          Hair Bonding, Clip & Glue Systems
        </div>
      </div>
    </section>
  );
}

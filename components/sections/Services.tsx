import { Scissors, User, Sparkles } from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="px-4 py-16">
      <div className="mx-auto max-w-6xl rounded-3xl bg-gradient-to-br from-white via-slate-50 to-white border border-slate-200 shadow-md px-6 py-16">

        <h2 id="services-heading" className="text-2xl sm:text-3xl font-semibold text-center text-gray-900">
          Our Services
        </h2>
        <p className="mt-2 text-center text-gray-600">
          Trusted grooming & hair solutions
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="rounded-2xl bg-white p-6 border border-gray-200 hover:shadow-md transition">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gray-100 text-gray-700 mx-auto">
              <Scissors size={20} />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-center text-gray-900">
              Haircut & Styling
            </h3>
            <p className="mt-2 text-sm text-gray-600 text-center">
              Professional cuts and modern styles for all ages.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl bg-white p-6 border border-gray-200 hover:shadow-md transition">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gray-100 text-gray-700 mx-auto">
              <User size={20} />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-center text-gray-900">
              Hair Patch / Hair Replacement
            </h3>
            <p className="mt-2 text-sm text-gray-600 text-center">
              Natural-looking hair patch solutions for baldness.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl bg-white p-6 border border-gray-200 hover:shadow-md transition">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gray-100 text-gray-700 mx-auto">
              <Sparkles size={20} />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-center text-gray-900">
              Hair Bonding & Systems
            </h3>
            <p className="mt-2 text-sm text-gray-600 text-center">
              Clip, glue, and bonding systems tailored to your need.
            </p>
          </div>
        </div>
      </div>
    </section>

  );
}

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="section relative overflow-hidden bg-gradient-to-br from-slate-50 via-amber-50/40 to-white"
      aria-labelledby="pricing-heading"
    >
      {/* ambient glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.15),_transparent_60%)]" />

      <div className="section-inner">
        <div className="relative mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white px-6 py-16 sm:px-12 shadow-lg text-center">

          <h2
            id="pricing-heading"
            className="text-2xl sm:text-3xl font-bold text-slate-900"
          >
            Pricing
          </h2>

          <p className="mt-3 text-lg text-slate-600">
            Transparent pricing based on your requirement.
          </p>

          {/* Main pricing card */}
          <div className="mt-10 mx-auto max-w-md rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-50 to-white p-8 shadow-md">
            <p className="text-lg font-semibold text-slate-900">
              Hair Patch & Hair Replacement
            </p>

            <p className="mt-4 text-4xl font-extrabold text-amber-600">
              ₹8,000 – ₹12,000
            </p>

            <p className="mt-2 text-sm text-slate-600">
              Final price depends on hair type, patch size, and system selected.
            </p>

            <ul className="mt-6 space-y-2 text-sm text-slate-700 text-left">
              <li>• Natural hair appearance</li>
              <li>• Skin-safe & breathable materials</li>
              <li>• Clip, glue & bonding systems available</li>
              <li>• Comfortable for daily wear</li>
            </ul>

            <p className="mt-6 text-sm text-slate-600">
              📌 Exact pricing will be shared after personal consultation.
            </p>
          </div>

          {/* reassurance */}
          <p className="mt-8 text-sm text-slate-500">
            No hidden charges. Honest advice. Professional service.
          </p>
        </div>
      </div>
    </section>
  );
}

// export default function Pricing() {
//   const plans = [
//     {
//       title: "Hair Patch Solution",
//       price: "₹8,000 – ₹12,000",
//       cardBg: "bg-gradient-to-br from-yellow-50 to-yellow-100",
//       priceColor: "text-yellow-700",
//       border: "border-yellow-200",
//     },
//     {
//       title: "Hair Patch Solution",
//       price: "₹8,000 – ₹12,000",
//       cardBg: "bg-gradient-to-br from-blue-50 to-blue-100",
//       priceColor: "text-blue-700",
//       border: "border-blue-200",
//     },
//     {
//       title: "Hair Patch Solution",
//       price: "₹8,000 – ₹12,000",
//       cardBg: "bg-gradient-to-br from-green-50 to-green-100",
//       priceColor: "text-green-700",
//       border: "border-green-200",
//     },
//   ];

//   return (
//     <section id="pricing" className="px-6 py-16">
//       <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 shadow-md px-6 py-12 text-center">
//         <h2 id="pricing-heading" className="text-2xl sm:text-3xl font-semibold text-slate-900">
//           Pricing
//         </h2>

//         <p className="mt-2 text-lg text-gray-600">
//           Transparent pricing. No hidden surprises.
//         </p>

//         <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
//           {plans.map((plan, index) => (
//             <div
//               key={index}
//               className={`rounded-2xl border ${plan.border} ${plan.cardBg} p-6 shadow-sm`}
//             >
//               <p className="text-xl font-medium text-gray-900">
//                 {plan.title}
//               </p>

//               <p className={`mt-4 text-3xl font-bold ${plan.priceColor}`}>
//                 {plan.price}
//               </p>

//               <p className="mt-2 text-sm text-gray-700">
//                 Based on patch size, hair type, and system quality.
//               </p>

//               <ul className="mt-6 space-y-2 text-sm text-gray-800 text-left">
//                 <li>• Natural appearance</li>
//                 <li>• Skin-safe materials</li>
//                 <li>• Comfortable daily wear</li>
//               </ul>

//               <p className="mt-2 text-sm text-slate-600">
//                 Final pricing after consultation.
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

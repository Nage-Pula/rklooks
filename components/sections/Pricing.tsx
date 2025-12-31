export default function Pricing() {
  const plans = [
    {
      title: "Hair Patch Solution",
      price: "₹8,000 – ₹12,000",
      cardBg: "bg-gradient-to-br from-yellow-50 to-yellow-100",
      priceColor: "text-yellow-700",
      border: "border-yellow-200",
    },
    {
      title: "Hair Patch Solution",
      price: "₹8,000 – ₹12,000",
      cardBg: "bg-gradient-to-br from-blue-50 to-blue-100",
      priceColor: "text-blue-700",
      border: "border-blue-200",
    },
    {
      title: "Hair Patch Solution",
      price: "₹8,000 – ₹12,000",
      cardBg: "bg-gradient-to-br from-green-50 to-green-100",
      priceColor: "text-green-700",
      border: "border-green-200",
    },
  ];

  return (
    <section className="px-6 py-16 bg-white text-center">
      <h2 className="text-3xl font-semibold tracking-tight text-gray-900">
        Pricing
      </h2>

      <p className="mt-2 text-lg text-gray-600">
        Transparent pricing. No hidden surprises.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-2xl border ${plan.border} ${plan.cardBg} p-6 shadow-sm`}
          >
            <p className="text-xl font-medium text-gray-900">
              {plan.title}
            </p>

            <p className={`mt-4 text-3xl font-bold ${plan.priceColor}`}>
              {plan.price}
            </p>

            <p className="mt-2 text-sm text-gray-700">
              Based on patch size, hair type, and system quality.
            </p>

            <ul className="mt-6 space-y-2 text-sm text-gray-800 text-left">
              <li>• Natural appearance</li>
              <li>• Skin-safe materials</li>
              <li>• Comfortable daily wear</li>
            </ul>

            <p className="mt-6 text-xs text-gray-500">
              Final pricing after consultation.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
